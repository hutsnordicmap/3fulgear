import type { MetadataRoute } from "next";
import { getCatalog } from "@/lib/catalog";
import { articles } from "@/lib/guides";
import { href, langs } from "@/lib/i18n";
import { categories, SITE_URL } from "@/lib/site";

// Every page in Finnish and Swedish, each pointing at the other language.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const catalog = await getCatalog("fi");
  const pages: { path: string; priority: number }[] = [
    ...[
      "/",
      "/tuotteet",
      "/yritys",
      "/toimitus",
      "/takuu",
      "/oppaat",
      "/oppaat/lanshan-pystytys",
      ...articles.map((article) => `/oppaat/${article.slug}`),
      "/tietosuoja",
    ].map((path) => ({ path, priority: path === "/" ? 1 : 0.6 })),
    ...categories.map((category) => ({ path: `/kategoria/${category.path}`, priority: 0.8 })),
    ...catalog.map((product) => ({ path: `/tuote/${product.slug}`, priority: 0.7 })),
  ];

  const url = (lang: (typeof langs)[number], path: string) => `${SITE_URL}${href(lang, path)}`;

  return pages.flatMap(({ path, priority }) =>
    langs.map((lang) => ({
      url: url(lang, path),
      changeFrequency: "weekly" as const,
      priority,
      alternates: { languages: { fi: url("fi", path), sv: url("sv", path) } },
    })),
  );
}
