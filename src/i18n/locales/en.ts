// English (default) dictionary — the source of truth for every UI key.
// Other locales must provide the same keys (enforced by the `Dictionary` type).
//
// Rich-text strings (rendered with `rich()` from ../utils) may use:
//   <b>…</b>    → emphasized term      <code>…</code> → monospace math
//   <em>…</em>  → body-colored aside
// Client strings support {placeholders}; keys ending in `.one` / `.other`
// are chosen with Intl.PluralRules for the page language.

const en = {
  // ── Meta / SEO ────────────────────────────────────────────────
  "meta.title": "Variance Calculator — Online Sample & Population Variance Tool",
  "meta.description":
    "Free online variance calculator for sample variance and population variance. Paste any data set to get variance, standard deviation, mean, count, and sum of squares — with every step shown on your real numbers.",
  "meta.ogImageAlt": "VarianceCalc — free online variance calculator",
  "meta.appName": "Variance Calculator",
  "meta.appDescription":
    "Free variance calculator online for sample variance and population variance, with standard deviation, mean, count, sum of squares, and step-by-step working on your own data.",

  // ── Chrome: skip link, header, footer, theme, language ────────
  "skip.calculator": "Skip to calculator",
  "skip.main": "Skip to main content",
  "nav.home": "VarianceCalc home",
  "nav.primary": "Primary",
  "nav.guide": "Guide",
  "nav.faq": "FAQ",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.quickLinks": "Quick links",
  "nav.privacy": "Privacy Policy",
  "nav.terms": "Terms",
  "footer.label": "Footer",
  "footer.about": "About Us",
  "footer.contact": "Contact Us",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms & Conditions",
  "footer.note": "No data leaves your device unless you choose to share a link.",
  "lang.label": "Language",
  "theme.toDark": "Switch to dark mode",
  "theme.toLight": "Switch to light mode",
  "theme.title": "Toggle dark mode",

  // ── Hero ──────────────────────────────────────────────────────
  "hero.title": "Variance, worked out step by step",
  "hero.subtitle":
    "Paste any data set — messy spreadsheet columns included. Get sample or population variance, standard deviation, and the mean, with every step shown on your real numbers.",

  // ── Guide ─────────────────────────────────────────────────────
  "guide.title": "Sample or population? The choice that trips people up",
  "guide.intro":
    "Both measure how spread out your numbers are. The only difference is what you divide by — and picking the wrong one is the most common variance mistake. Here’s how to decide in one glance.",
  "guide.sample.title": "Sample variance",
  "guide.sample.body":
    "Your data is a <b>subset</b> of a bigger group you want to understand. Divides by <code>n − 1</code> so it doesn’t underestimate the real spread.",
  "guide.sample.examples":
    "Surveys, experiments, a batch of readings, test scores from some students — <em>use this whenever your numbers are a sample drawn from a larger population you want to draw conclusions about.</em>",
  "guide.population.title": "Population variance",
  "guide.population.body":
    "Your data is the <b>entire group</b>, with nothing left out. Divides by <code>n</code> — the exact spread of that complete set.",
  "guide.population.examples":
    "Every employee in one company, all games in a season, a full census — cases where there’s no larger group to infer.",
  "guide.note":
    "Same data, both ways: sample variance is always a little larger than population variance, because dividing by the smaller number (<code>n − 1</code>) makes the result bigger. That gap shrinks as your data set grows.",

  // ── FAQ ───────────────────────────────────────────────────────
  "faq.title": "Questions, answered",
  "faq.1.q": "Should I use sample or population variance?",
  "faq.1.a":
    "Use sample variance (÷ n − 1) when your numbers are a sample drawn from a larger group you want to learn about — survey responses, a batch of measurements, test results from some students. Use population variance (÷ n) only when your numbers are the entire group, with nothing left out. When unsure, sample is the safer default; picking population on sample data slightly understates the real spread.",
  "faq.2.q": "Why does sample variance divide by n − 1 instead of n?",
  "faq.2.a":
    "It’s called Bessel’s correction. Because the mean is estimated from the same sample, dividing by n would systematically underestimate the true spread. Dividing by n − 1 (the degrees of freedom) corrects that bias, giving an unbiased estimate of the population variance.",
  "faq.3.q": "What’s the difference between variance and standard deviation?",
  "faq.3.a":
    "Standard deviation is just the square root of variance. Variance is in squared units (dollars², cm²), which is hard to picture; standard deviation is back in the original units, so it’s easier to interpret. We show both.",
  "faq.4.q": "How should I format my data?",
  "faq.4.a":
    "However you have it. Paste straight from a spreadsheet, a document, or type it by hand — values can be separated by commas, spaces, tabs, or line breaks. Decimals and negative numbers work, and stray currency or percent symbols are ignored automatically.",
  "faq.5.q": "Why is sample variance undefined for a single value?",
  "faq.5.a":
    "Sample variance divides by n − 1. With one data point that denominator is 0, and dividing by zero is undefined. Add another value, or switch to population variance — which divides by n and is 0 for a single point.",
  "faq.6.q": "Is my data sent anywhere?",
  "faq.6.a":
    "No. Every calculation runs entirely in your browser — nothing you type is uploaded, logged, or stored. Your dataset is only ever placed into a URL if you explicitly click “Copy link” to share it; typing or pasting data never changes the address bar on its own.",
  "faq.7.q": "What is the difference between sample and population variance?",
  "faq.7.a":
    "The difference is what you divide the sum of squared deviations by. Sample variance divides by n − 1 and is used when your data is a subset drawn from a larger group you want to draw conclusions about. Population variance divides by n and is used only when your data is the entire group, with nothing left out. Sample variance is always slightly larger for the same numbers, since dividing by a smaller number produces a bigger result — that gap narrows as the data set grows.",
  "faq.8.q": "Why do I get an error with only one data point?",
  "faq.8.a":
    "Sample variance divides by n − 1, and with a single value that denominator becomes 0 — division by zero is mathematically undefined, so there's no valid result to show. This calculator explains that instead of returning NaN. If you need a result for one data point, switch to population variance, which divides by n and correctly returns 0, since a single value has no spread from itself.",
  "faq.9.q": "What symbol represents variance?",
  "faq.9.a":
    "Population variance is written as σ² (lowercase sigma squared), and sample variance is written as s². Both are read as “variance” — the squared symbol is a reminder that variance is measured in squared units of the original data (for example, dollars² or cm²), which is why standard deviation, its square root, is often used alongside it for easier interpretation.",
  "faq.10.q": "Does this calculator show the steps for calculating variance?",
  "faq.10.a":
    "Yes. Every result includes the full worked solution using your actual numbers — the mean, each value's deviation from the mean, the squared deviations, their sum, and the final division by n or n − 1. A deviation number-line also visualizes how far each value sits from the mean, so you can verify the answer and understand how it was reached rather than just seeing a final number.",
  "faq.11.q": "Can I calculate variance from grouped or frequency data?",
  "faq.11.a":
    "Not directly — this calculator expects a list of individual raw values, not a frequency table of value/count pairs. To use it with grouped data, expand each value by its frequency before pasting (for example, a value of 5 occurring 3 times becomes 5, 5, 5 in the input). For large frequency tables this gets impractical, since grouped variance is typically computed from midpoints and frequencies with a dedicated formula rather than raw values.",

  // ── SEO long-form ─────────────────────────────────────────────
  "seo.title": "About this variance calculator",
  "seo.p1":
    "VarianceCalc is a free <b>variance calculator online</b> built for anyone who needs a fast, accurate answer without wrestling with a spreadsheet formula or a scientific calculator's manual mode. Paste in a list of numbers — copied straight from Excel, Google Sheets, a PDF report, or typed by hand — and the tool instantly returns variance, standard deviation, mean, count, and sum of squares, with the underlying math shown step by step using your own numbers. There's no sign-up, no installation, and no data ever leaves your browser: every calculation runs client-side, so it's safe to use with sensitive or proprietary figures.",
  "seo.p2":
    "What sets this <b>variance calculator</b> apart from a generic statistics widget is that it treats the sample-versus-population decision as a first-class feature rather than an afterthought. Flip the toggle to use it as a <b>sample variance calculator</b>, dividing by <code>n − 1</code> (Bessel's correction) for datasets that represent a subset of a larger group you're trying to draw conclusions about — think survey responses, a batch of lab measurements, or grades from one class you want to generalize from. Or switch it into a <b>population variance calculator</b>, dividing by <code>n</code>, when your numbers are the complete set with nothing left out, like every employee at a company or every game in a finished season. Picking the wrong mode is the single most common variance mistake, so the calculator surfaces plain-language guidance right next to the toggle instead of leaving you to guess.",
  "seo.p3":
    "Under the hood, the parser is built to survive real-world, messy input rather than the clean, comma-separated lists most textbook tools expect. Values can be separated by commas, spaces, tabs, semicolons, or line breaks in any combination, and the calculator correctly handles decimals, negative numbers, and scientific notation. Because commas are always treated as separators, a pasted number like <code>91,100</code> is read as two values — 91 and 100 — never silently merged into ninety-one thousand one hundred, which is a subtle bug that trips up simpler tools. Stray currency symbols (<code>$</code>) and percent signs (<code>%</code>) are stripped automatically, and any token that still can't be read as a number is reported clearly instead of being dropped without explanation.",
  "seo.p4":
    "Beyond the headline number, this variance calculator is built to teach as much as it computes. Every result comes with the full formula worked out using your actual data — the deviations from the mean, the squared deviations, and the final division — so you can follow exactly how the answer was reached and check it against your own work. A deviation number-line visualizes how far each individual value sits from the mean, which makes the concept of \"spread\" concrete rather than abstract, especially useful for students learning variance and standard deviation for the first time. Edge cases are handled gracefully too: a single-value sample returns a clear explanation instead of a confusing <code>NaN</code>, and empty or non-numeric input produces a helpful message rather than a silent failure.",
  "seo.p5":
    "The whole experience is designed to stay out of your way — no forced account creation, and your data never leaves your browser. If you want to share a specific result, an explicit \"Copy link\" action encodes your dataset and mode into the URL; nothing is written to the address bar just from typing or pasting. Whether you're a student checking homework, a researcher doing a quick sanity check, or an analyst who just needs variance and standard deviation without opening a full statistics package, this calculator is built to get you a trustworthy, explained answer in seconds.",

  // ── Calculator: server-rendered markup ────────────────────────
  "calc.heading": "Variance calculator",
  "calc.dataLabel": "Your data set",
  "calc.clear": "Clear",
  "calc.placeholder":
    "Paste or type numbers — separated by commas, spaces, tabs, or new lines.\n\ne.g. 88, 92, 79, 93, 85",
  "calc.examplesLabel": "Try an example",
  "calc.example.scores": "Test scores",
  "calc.example.decimals": "With decimals",
  "calc.example.negatives": "Includes negatives",
  "calc.example.spreadsheet": "Spreadsheet paste",
  "calc.modeLegend": "Which variance?",
  "calc.mode.sample": "Sample",
  "calc.mode.population": "Population",
  "calc.empty": "Enter a data set and your results appear here instantly — no button to press.",
  "calc.stat.sd": "Std. deviation",
  "calc.stat.mean": "Mean (x̄)",
  "calc.stat.count": "Count (n)",
  "calc.stat.ss": "Sum of squares",
  "calc.viz.caption": "Each value’s distance from the mean",
  "calc.viz.value": "value",
  "calc.viz.mean": "mean",
  "calc.steps.heading": "Step-by-step, with your numbers",

  // ── Calculator: client-side (shipped to the browser) ──────────
  "calc.label.sample": "Sample variance (s²)",
  "calc.label.population": "Population variance (σ²)",
  "calc.copyLink": "Copy link",
  "calc.linkCopied": "Link copied",
  "calc.copyResults": "Copy results",
  "calc.copied": "Copied",
  "calc.pressCopy": "Press ⌘/Ctrl+C",
  "calc.explain.sample":
    "Use this when your numbers are a sample drawn from a larger group. Divides by n − 1 (Bessel’s correction) so the estimate isn’t biased too low. This is the most common choice.",
  "calc.explain.population":
    "Use this only when your numbers are the entire group you care about — every member, nothing left out. Divides by n.",
  "calc.status.valid.one": "{n} valid number",
  "calc.status.valid.other": "{n} valid numbers",
  "calc.status.invalid.one": "Invalid entry, not included: {list}",
  "calc.status.invalid.other": "Invalid entries, not included: {list}",
  "calc.more": "+{n} more",
  "calc.quote": "“{s}”",
  "calc.listSep": ", ",
  "calc.invalidList": "Invalid entries",
  "calc.warn.none.title": "No valid numbers found",
  "calc.warn.none.body.one":
    "This entry isn’t a number, so there’s nothing to calculate. Enter values separated by commas, spaces, tabs, or new lines — for example: 4, 8, 15, 16, 23.",
  "calc.warn.none.body.other":
    "None of these entries are numbers, so there’s nothing to calculate. Enter values separated by commas, spaces, tabs, or new lines — for example: 4, 8, 15, 16, 23.",
  "calc.warn.some.title.one": "“{token}” isn’t a valid number",
  "calc.warn.some.title.other": "{n} entries aren’t valid numbers",
  "calc.warn.some.body.one":
    "It was left out, so the results use only the {valid}. Fix or remove it to be sure your results reflect your data.",
  "calc.warn.some.body.other":
    "They were left out, so the results use only the {valid}. Fix or remove them to be sure your results reflect your data.",
  "calc.undef.title": "Sample variance is undefined for a single value",
  "calc.undef.body":
    "Sample variance divides by n − 1, and with one data point that’s 0 — you can’t divide by zero. Add at least one more value, or switch to Population variance (which divides by n and equals 0 for a single point).",
  "calc.step1": "Find the mean (average)",
  "calc.step2": "Square each value's distance from the mean",
  "calc.step3": "Add up the squared distances (sum of squares)",
  "calc.step4.sample": "Divide by n − 1",
  "calc.step4.population": "Divide by n",
  "calc.step5": "Take the square root for standard deviation",
  "calc.step.more": "… and {n} more",
  "calc.step.excluded": "Not included (not numbers): {list}",
  "calc.viz.aria": "Number line showing each data point and the mean",
  "calc.viz.deviation": "deviation",
  "calc.summary.sd": "Standard deviation",
  "calc.summary.mean": "Mean",
  "calc.summary.count": "Count",
  "calc.summary.ss": "Sum of squares",
  "calc.summary.warn.one": "Warning: excluded {n} invalid entry: {list}",
  "calc.summary.warn.other": "Warning: excluded {n} invalid entries: {list}",
} as const;

export type UIKey = keyof typeof en;
export type Dictionary = Record<UIKey, string>;

export default en satisfies Dictionary;
