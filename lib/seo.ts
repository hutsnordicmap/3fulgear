import type { Metadata } from "next";
import { href, locale, ogLocale, ui, type Lang } from "@/lib/i18n";
import { DISCOUNT_CODE, SITE_URL } from "@/lib/site";

type Title = string | { absolute: string };

function titleText(title: Title) {
  return typeof title === "string" ? title : title.absolute;
}

/** `path` is the Finnish path ("/tuote/x"); the Swedish one is the same under /sv. */
export function pageMeta(lang: Lang, path: string, title: Title, description: string, image?: string): Metadata {
  const url = href(lang, path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { "fi-FI": href("fi", path), "sv-FI": href("sv", path), "x-default": href("fi", path) },
    },
    openGraph: {
      title: titleText(title),
      description,
      url,
      locale: ogLocale[lang],
      alternateLocale: ogLocale[lang === "fi" ? "sv" : "fi"],
      siteName: ui[lang].siteName,
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export function withCode(text: string, lang: Lang, max = 160) {
  const extra = ui[lang].codeLine(DISCOUNT_CODE);
  const clean = text.replace(/\s+/g, " ").trim();
  if ((clean + extra).length <= max) return `${clean}${extra}`;
  const room = Math.max(40, max - extra.length);
  const sliced = clean.slice(0, room).replace(/[,.\s]+\S*$/, "").trim();
  return `${sliced}.${extra}`.replace(/\.\./, ".");
}

const orgDescription: Record<Lang, string> = {
  fi: "Itsenäinen suomenkielinen esittelysivu 3F UL GEAR -varusteista. Ostos, maksu ja toimitus tapahtuvat valmistajan kaupassa 3fulgear.com.",
  sv: "Fristående presentationssida om 3F UL GEARs utrustning på finska och svenska. Köp, betalning och leverans sker i tillverkarens butik 3fulgear.com.",
};

export function siteGraph(lang: Lang) {
  const home = `${SITE_URL}${href(lang, "/")}`.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "3fulgear.fi",
        url: SITE_URL,
        description: orgDescription[lang],
        areaServed: "FI",
        knowsLanguage: ["fi", "sv"],
      },
      {
        "@type": "WebSite",
        "@id": `${home}/#website`,
        url: home || SITE_URL,
        name: ui[lang].siteName,
        inLanguage: locale[lang],
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}${href(lang, "/haku")}?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

/** Paths here are already language paths (from href()). */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
