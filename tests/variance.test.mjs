import { analyze, parseInput, computeStats, formatNumber, formatStat } from "../src/lib/variance.ts";

let pass = 0;
let fail = 0;
function eq(name, got, want) {
  const g = JSON.stringify(got);
  const w = JSON.stringify(want);
  if (g === w) {
    pass++;
  } else {
    fail++;
    console.error(`FAIL: ${name}\n   got:  ${g}\n   want: ${w}`);
  }
}
function approx(name, got, want, eps = 1e-9) {
  if (got === null || Math.abs(got - want) > eps) {
    fail++;
    console.error(`FAIL: ${name}\n   got:  ${got}\n   want: ${want}`);
  } else {
    pass++;
  }
}

// --- Parsing ---
eq("commas", parseInput("1,2,3").values, [1, 2, 3]);
eq("spaces", parseInput("1 2 3").values, [1, 2, 3]);
eq("newlines", parseInput("1\n2\n3").values, [1, 2, 3]);
eq("tabs (spreadsheet)", parseInput("1\t2\t3").values, [1, 2, 3]);
eq("mixed + messy whitespace", parseInput("  1, 2\n3\t4 ; 5 ").values, [1, 2, 3, 4, 5]);
eq("decimals + negatives", parseInput("-3.5, 2.25, -0.5").values, [-3.5, 2.25, -0.5]);
eq("leading plus", parseInput("+4, +5").values, [4, 5]);
eq("scientific", parseInput("1.2e3 4E-2").values, [1200, 0.04]);
eq("currency + percent stripped", parseInput("$10, 20%, £30").values, [10, 20, 30]);
eq("comma is a separator, not grouping", parseInput("91,100").values, [91, 100]);
eq("dense comma list stays separate", parseInput("88,92,79,91,100,82").values, [88, 92, 79, 91, 100, 82]);
eq("invalid tokens captured", parseInput("1, abc, 2, foo").invalidTokens, ["abc", "foo"]);
eq("empty", parseInput("").values, []);

// --- Population variance (known: 2,4,4,4,5,5,7,9 -> mean 5, popVar 4, popSD 2) ---
{
  const s = computeStats([2, 4, 4, 4, 5, 5, 7, 9], "population");
  approx("pop mean", s.mean, 5);
  approx("pop variance", s.variance, 4);
  approx("pop sd", s.standardDeviation, 2);
  approx("pop SS", s.sumOfSquares, 32);
  eq("count", s.count, 8);
}

// --- Sample variance (1,2,3,4,5 -> mean 3, SS 10, sampleVar 2.5) ---
{
  const s = computeStats([1, 2, 3, 4, 5], "sample");
  approx("sample mean", s.mean, 3);
  approx("sample SS", s.sumOfSquares, 10);
  approx("sample variance", s.variance, 2.5);
  approx("sample sd", s.standardDeviation, Math.sqrt(2.5));
}
// same data, population -> 2
{
  const s = computeStats([1, 2, 3, 4, 5], "population");
  approx("pop variance of 1..5", s.variance, 2);
}

// --- Edge cases via analyze() ---
eq("empty analyze", analyze("", "sample").status, "empty");
eq("garbage analyze", analyze("abc def", "sample").status, "invalid");
eq("single point sample undefined", analyze("42", "sample").status, "undefined-sample");
{
  const r = analyze("42", "population");
  eq("single point population ok", r.status, "ok");
  if (r.status === "ok") approx("single point pop variance = 0", r.stats.variance, 0);
}
eq("identical values -> variance 0", (() => {
  const r = analyze("5,5,5,5", "sample");
  return r.status === "ok" ? r.stats.variance : null;
})(), 0);

// --- Invalid entries are reported alongside results, never dropped silently ---
{
  const r = analyze("10, 20, abc, 40", "sample");
  eq("mixed input still computes", r.status, "ok");
  eq("mixed input reports abc", r.invalidTokens, ["abc"]);
  if (r.status === "ok") {
    eq("mixed input count excludes abc", r.stats.count, 3);
    approx("mixed input mean", r.stats.mean, 70 / 3);
  }
}
eq("clean input has no invalid tokens", analyze("10, 20, 40", "sample").invalidTokens, []);
eq("single value + garbage reports garbage", analyze("42 abc", "sample").invalidTokens, ["abc"]);
eq("all-garbage reports every token", analyze("abc def", "sample").invalidTokens, ["abc", "def"]);

// --- Formatting ---
eq("fmt trims zeros", formatNumber(2.5), "2.5");
eq("fmt integer", formatNumber(4), "4");
eq("fmt zero", formatNumber(0), "0");
eq("fmt rounds", formatNumber(1 / 3), "0.333333");

// --- Stat-tile formatting (max 4 decimals) ---
eq("stat rounds to 4dp", formatStat(466.6666666667), "466.6667");
eq("stat trims zeros", formatStat(2.5), "2.5");
eq("stat integer keeps zeros", formatStat(100), "100");
eq("stat large integer", formatStat(1_000_000), "1000000");
eq("stat big value sheds decimals", formatStat(721565434612.4987), "721565434612");
eq("stat mid value keeps 10 sig digits", formatStat(724485.71428), "724485.7143");
eq("stat negative", formatStat(-12.345678), "-12.3457");
eq("stat zero", formatStat(0), "0");
eq("stat tiny uses exponential", formatStat(0.00001234), "1.234e-5");
eq("stat huge uses exponential", formatStat(1.5e13), "1.5e+13");
eq("stat non-finite", formatStat(NaN), "—");

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
