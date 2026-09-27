/**
 * variance.ts — parsing + statistics engine for VarianceCalc.com
 *
 * Pure, dependency-free, and fully typed so it can run identically on the
 * server (for SSR/tests) and in the browser. No DOM access here.
 */

export type Mode = "sample" | "population";

/** Result of turning messy user text into numbers. */
export interface ParseResult {
  /** Clean numeric values, in input order. */
  values: number[];
  /** Raw tokens that looked like data but could not be parsed as numbers. */
  invalidTokens: string[];
}

/** A single data point paired with its deviation info, for step display. */
export interface Deviation {
  value: number;
  deviation: number; // x - mean
  squared: number; // (x - mean)^2
}

/** Full statistical summary for a dataset. */
export interface Stats {
  count: number;
  sum: number;
  mean: number;
  /** Σ(x - mean)² — the sum of squared deviations. */
  sumOfSquares: number;
  /** Variance for the selected mode, or null when undefined (e.g. n=1 sample). */
  variance: number | null;
  /** Standard deviation for the selected mode, or null when variance is null. */
  standardDeviation: number | null;
  min: number;
  max: number;
  deviations: Deviation[];
}

/**
 * Parse an arbitrary blob of user input into numbers.
 *
 * Handles the messy reality of pasted data:
 *  - separators: commas, spaces, tabs, newlines, semicolons, vertical bars
 *  - decimals and negative numbers ("-3.5")
 *  - a leading "+" sign ("+4")
 *  - thousands separators inside an otherwise-numeric token ("1,234.5" when
 *    the token has no other role) — handled conservatively below
 *  - scientific notation ("1.2e3", "4E-2")
 *  - stray currency/percent symbols and surrounding whitespace are stripped
 *
 * Anything that still isn't a finite number is reported in `invalidTokens`
 * rather than silently dropped, so the UI can tell the user what was skipped.
 */
export function parseInput(raw: string): ParseResult {
  const values: number[] = [];
  const invalidTokens: string[] = [];

  if (!raw) return { values, invalidTokens };

  // Split on every separator people use when pasting: whitespace (spaces,
  // tabs, newlines), commas, semicolons, and vertical bars.
  //
  // Note: comma is treated purely as a SEPARATOR, never as a thousands
  // grouping mark. In a list like "91,100" the comma almost always means two
  // values (91 and 100), and silently merging them into 91100 would corrupt
  // the result. Users needing grouped input can paste from columns instead.
  const tokens = raw
    .split(/[\s,;|]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);

  for (const token of tokens) {
    // Strip common decorations: currency symbols, percent, surrounding quotes.
    const cleaned = token.replace(/^[$€£¥'"]+|[%'"]+$/g, "");
    if (cleaned.length === 0) continue;

    const n = Number(cleaned);
    if (Number.isFinite(n)) {
      values.push(n);
    } else {
      invalidTokens.push(token);
    }
  }

  return { values, invalidTokens };
}

/**
 * Compute statistics for `values` in the given `mode`.
 *
 * Uses the textbook two-pass algorithm (mean first, then squared deviations)
 * so the step-by-step display matches the math exactly. Datasets from this
 * calculator are small enough that numerical stability of two-pass is fine.
 */
export function computeStats(values: number[], mode: Mode): Stats {
  const count = values.length;
  const sum = values.reduce((acc, x) => acc + x, 0);
  const mean = count > 0 ? sum / count : 0;

  const deviations: Deviation[] = values.map((value) => {
    const deviation = value - mean;
    return { value, deviation, squared: deviation * deviation };
  });

  const sumOfSquares = deviations.reduce((acc, d) => acc + d.squared, 0);

  const denominator = mode === "sample" ? count - 1 : count;
  const variance = denominator > 0 ? sumOfSquares / denominator : null;
  const standardDeviation = variance !== null ? Math.sqrt(variance) : null;

  return {
    count,
    sum,
    mean,
    sumOfSquares,
    variance,
    standardDeviation,
    min: count > 0 ? Math.min(...values) : 0,
    max: count > 0 ? Math.max(...values) : 0,
    deviations,
  };
}

/** Kinds of problems the UI needs to explain in plain language. */
export type CalcState =
  | { status: "empty" }
  | { status: "invalid"; invalidTokens: string[] }
  // n = 1, sample mode. `invalidTokens` lists entries excluded from the math.
  | { status: "undefined-sample"; stats: Stats; invalidTokens: string[] }
  // `invalidTokens` lists entries excluded from the math; the UI must surface
  // these as a warning rather than silently computing without them.
  | { status: "ok"; stats: Stats; invalidTokens: string[] };

/**
 * High-level orchestration used by the UI: parse, validate, compute, and
 * classify the result so the view layer only has to render.
 */
export function analyze(raw: string, mode: Mode): CalcState {
  const { values, invalidTokens } = parseInput(raw);

  if (values.length === 0) {
    // Distinguish "typed nothing usable" from "typed only garbage".
    if (invalidTokens.length > 0) {
      return { status: "invalid", invalidTokens };
    }
    return { status: "empty" };
  }

  const stats = computeStats(values, mode);

  if (mode === "sample" && values.length === 1) {
    return { status: "undefined-sample", stats, invalidTokens };
  }

  return { status: "ok", stats, invalidTokens };
}

/* ------------------------------------------------------------------ *
 * Number formatting helpers (shared by UI + step display)
 * ------------------------------------------------------------------ */

/**
 * Format a number for display: trims floating-point noise, uses a sensible
 * number of significant digits, and falls back to exponential for extremes.
 */
export function formatNumber(n: number, maxDecimals = 6): string {
  if (!Number.isFinite(n)) return "—";
  if (n === 0) return "0";

  const abs = Math.abs(n);
  // Very large or very small magnitudes read better in exponential form.
  if (abs !== 0 && (abs < 1e-6 || abs >= 1e12)) {
    return n.toExponential(4).replace(/\.?0+e/, "e");
  }

  // Round to maxDecimals, then strip trailing zeros.
  const fixed = n.toFixed(maxDecimals);
  return fixed.replace(/\.?0+$/, "");
}

/**
 * Format a headline result (variance, SD, mean, sum of squares) for the
 * summary tiles: at most `maxDecimals` decimal places, trailing zeros trimmed.
 * Magnitudes that would round to 0 or run very long switch to exponential,
 * so a tiny non-zero result never displays as a misleading "0".
 * The step-by-step math keeps full `formatNumber` precision.
 */
export function formatStat(n: number, maxDecimals = 4): string {
  if (!Number.isFinite(n)) return "—";
  if (n === 0) return "0";

  const abs = Math.abs(n);
  if (abs < 10 ** -maxDecimals || abs >= 1e12) {
    return n.toExponential(3).replace(/\.?0+e/, "e");
  }

  // Cap total significant digits (~10) so big numbers shed decimals instead
  // of growing unreadably long: 466.666667 → 466.6667, 721565434612.49 → 721565434612.
  const intDigits = Math.floor(Math.log10(abs)) + 1;
  const decimals = Math.min(maxDecimals, Math.max(0, 10 - intDigits));
  const fixed = n.toFixed(decimals);
  const trimmed = fixed.includes(".") ? fixed.replace(/\.?0+$/, "") : fixed;
  return trimmed === "-0" ? "0" : trimmed;
}

/** Compact list of the raw values for inline formula display. */
export function formatValueList(values: number[], limit = 12): string {
  const shown = values.slice(0, limit).map((v) => formatNumber(v));
  if (values.length > limit) {
    shown.push(`… (+${values.length - limit} more)`);
  }
  return shown.join(", ");
}
