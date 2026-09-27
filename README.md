# VarianceCalc.com

A fast, distraction-free variance calculator. Paste any data set — messy
spreadsheet columns included — and get sample or population variance, standard
deviation, mean, count, and sum of squares, with every step worked out on your
real numbers.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com),
styled on the Vercel/Geist design system. Self-hosted Geist Sans & Mono. No ads,
no tracking — every calculation runs entirely in the browser.

## Features

- **Robust parsing** — commas, spaces, tabs, line breaks, semicolons; decimals,
  negatives, and scientific notation. Comma is always a separator (so `91,100`
  is two values, never `91100`). Stray `$`/`%` symbols are ignored; unreadable
  tokens are reported, not silently dropped.
- **Sample vs. population** toggle with plain-language guidance (Bessel's `n − 1`).
- **Full output together** — variance, standard deviation, mean, count, sum of squares.
- **Step-by-step math** with the user's actual numbers substituted in.
- **Deviation number-line** visualizing each value's distance from the mean.
- **Graceful edge cases** — single-point sample variance is explained (not `NaN`),
  empty and non-numeric input get clear messages.
- **Shareable, not tracked** — data stays in memory/the textarea; the URL is only
  ever written via an explicit "Copy link" action (`?d=<data>&m=<sample|population>`).
- Accessible: skip link, labeled controls, visible focus, `aria-live` updates,
  `prefers-reduced-motion` support.

## Project structure

```
src/
  lib/variance.ts          # Pure, typed parsing + stats engine (no DOM)
  components/Calculator.astro  # Interactive tool (markup + client script)
  pages/index.astro        # Hero, guide, FAQ, footer + structured data
  layouts/Layout.astro     # Base HTML, SEO/OG metadata
  styles/global.css        # Design tokens + browser-surface theming
tests/variance.test.mjs    # Engine unit tests
```

## Commands

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Install dependencies                        |
| `npm run dev`          | Start local dev server at `localhost:4321`  |
| `npm run build`        | Build the production site to `./dist/`      |
| `npm run preview`      | Preview the production build locally        |
| `npx astro check`      | Type-check `.astro` and TypeScript sources  |
| `node tests/variance.test.mjs` | Run the calculation-engine tests    |
