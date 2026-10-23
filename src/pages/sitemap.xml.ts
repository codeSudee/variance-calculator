// sitemap.xml — generated at build time so every language version of the
// localized pages is listed with its hreflang alternates (xhtml:link).
import type { APIRoute } from "astro";
import { languages, localizedRoutes, type Lang } from "../i18n/ui";
import { getAlternates, useTranslatedPath } from "../i18n/utils";

interface Entry {
  path: string;
  changefreq: string;
  priority: string;
}

// English-only pages (no translations → no alternates).
const englishOnly: Entry[] = [
  { path: "/standard-deviation-calculator", changefreq: "monthly", priority: "0.8" },
  { path: "/how-to-calculate-variance", changefreq: "monthly", priority: "0.8" },
  { path: "/about", changefreq: "yearly", priority: "0.5" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

const localizedMeta: Record<string, Omit<Entry, "path">> = {
  "/": { changefreq: "monthly", priority: "1.0" },
};

// Build date: fresh on every deploy.
const lastmod = new Date().toISOString().slice(0, 10);

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://variancecalc.com");
  const urls: string[] = [];

  for (const path of localizedRoutes) {
    const meta = localizedMeta[path] ?? { changefreq: "monthly", priority: "0.8" };
    const alternates = getAlternates(path, base)
      .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`)
      .join("\n");
    // Google requires each language URL to list the full alternate set, itself included.
    for (const lang of Object.keys(languages) as Lang[]) {
      const loc = new URL(useTranslatedPath(lang)(path), base).href;
      urls.push(
        `  <url>\n    <loc>${loc}</loc>\n${alternates}\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${meta.changefreq}</changefreq>\n    <priority>${meta.priority}</priority>\n  </url>`,
      );
    }
  }

  for (const e of englishOnly) {
    urls.push(
      `  <url>\n    <loc>${new URL(e.path, base).href}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
