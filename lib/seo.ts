import type { Metadata } from "next";
import { DISCOUNT_CODE, SITE_URL } from "@/lib/site";

type Title = string | { absolute: string };

function titleText(title: Title) {
  return typeof title === "string" ? title : title.absolute;
}

export function pageMeta(path: string, title: Title, description: string, image?: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { "fi-FI": path },
    },
    openGraph: {
      title: titleText(title),
      description,
      url: path,
      locale: "fi_FI",
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export function withCode(text: string, max = 160) {
  const extra = ` Koodi ${DISCOUNT_CODE} antaa 10 % alennuksen.`;
  const clean = text.replace(/\s+/g, " ").trim();
  if ((clean + extra).length <= max) return `${clean}${extra}`;
  const room = Math.max(40, max - extra.length);
  const sliced = clean.slice(0, room).replace(/[,.\s]+\S*$/, "").trim();
  return `${sliced}.${extra}`.replace(/\.\./, ".");
}

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "3fulgear.fi",
        url: SITE_URL,
        description:
          "Itsenäinen suomenkielinen esittelysivu 3F UL GEAR -varusteista. Ostos, maksu ja toimitus tapahtuvat valmistajan kaupassa 3fulgear.com.",
        areaServed: "FI",
        knowsLanguage: "fi",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "3F UL GEAR Suomi",
        inLanguage: "fi-FI",
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/haku?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

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
