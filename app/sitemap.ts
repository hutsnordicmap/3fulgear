import type { MetadataRoute } from "next";
import { getCatalog } from "@/lib/catalog";
import { categories, SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const catalog = await getCatalog();
  const staticRoutes = ["", "/tuotteet", "/yritys", "/toimitus", "/takuu", "/oppaat", "/oppaat/lanshan-pystytys", "/tietosuoja"].map(
    (path) => ({
      url: `${SITE_URL}${path || "/"}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.6,
    }),
  );

  return [
    ...staticRoutes,
    ...categories.map((category) => ({
      url: `${SITE_URL}/kategoria/${category.path}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...catalog.map((product) => ({
      url: `${SITE_URL}/tuote/${product.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
