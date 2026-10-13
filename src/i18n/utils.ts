import { defaultLang, languages, localizedRoutes, showDefaultLang, ui, type Lang } from "./ui";
import type { UIKey } from "./locales/en";

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  return isLang(lang) ? lang : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefix a language-neutral path with the language segment (except the default language). */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang): string {
    if (!showDefaultLang && l === defaultLang) return path;
    return path === "/" ? `/${l}/` : `/${l}${path}`;
  };
}

/** Strip a leading language segment: "/fr/" → "/", "/about" → "/about". */
export function getNeutralPath(url: URL): string {
  const parts = url.pathname.split("/");
  if (isLang(parts[1])) {
    const rest = "/" + parts.slice(2).join("/");
    return rest === "//" ? "/" : rest;
  }
  return url.pathname;
}

/** True when the given neutral path is available in every language. */
export function isLocalizedRoute(path: string): boolean {
  return (localizedRoutes as readonly string[]).includes(path);
}

/**
 * hreflang alternates for a neutral path: one per language plus x-default.
 * Returns an empty list for pages that only exist in the default language.
 */
export function getAlternates(path: string, site: URL): { hreflang: string; href: string }[] {
  if (!isLocalizedRoute(path)) return [];
  const langs = Object.keys(languages) as Lang[];
  const alternates: { hreflang: string; href: string }[] = langs.map((l) => ({
    hreflang: l,
    href: new URL(useTranslatedPath(l)(path), site).href,
  }));
  alternates.push({
    hreflang: "x-default",
    href: new URL(useTranslatedPath(defaultLang)(path), site).href,
  });
  return alternates;
}

const ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/**
 * Render a trusted dictionary string with a tiny markup subset to HTML.
 * Everything is escaped first, then only <b>, <code>, <em> are re-enabled
 * and mapped to the site's typographic styles.
 */
export function rich(text: string): string {
  return text
    .replace(/[&<>"']/g, (c) => ESCAPES[c])
    .replace(/&lt;b&gt;(.*?)&lt;\/b&gt;/g, '<strong class="font-medium text-ink">$1</strong>')
    // Non-breaking spaces keep short formulas like "n − 1" on one line.
    .replace(
      /&lt;code&gt;(.*?)&lt;\/code&gt;/g,
      (_, m: string) => `<span class="font-mono">${m.replace(/ /g, "&nbsp;")}</span>`,
    )
    .replace(/&lt;em&gt;(.*?)&lt;\/em&gt;/g, '<span class="text-body">$1</span>');
}

/** Strip the rich-text markup, e.g. for meta tags or JSON-LD. */
export function plain(text: string): string {
  return text.replace(/<\/?(b|code|em)>/g, "");
}
