import { guidesFor } from "@/lib/guides";
import { href, ui, type Lang } from "@/lib/i18n";
import { localCategories } from "@/lib/site";
import type { Product } from "@/lib/types";

export type NavItem = {
  id: string;
  label: string;
  href: string;
  image?: string;
  children?: NavItem[];
};

const leadSlugs: Record<string, string[]> = {
  "ultralight-tent": ["lanshan-1", "lanshan2-classic", "lanshan-1-pro", "lanshan-2-pro"],
  "freestanding-tent": [
    "taiji-1",
    "taiji-2",
    "taiji3",
    "floating-cloud-1",
    "floating-cloud-2",
    "qingkong-3",
    "taihang2",
    "taihang-max",
    "shell-2",
  ],
  packs: [
    "tianshan-ultra",
    "tianshan-pack",
    "qidian-pro-backpack",
    "qidian",
    "yue-45-ultra",
    "yue-4510-ul-backpack",
    "tutor-ultra",
    "tutor",
    "freedom-20l-daypack",
    "koala-daypack",
  ],
  "rain-gear": ["ultralight-rain-jacket", "ultralight-rain-jacket-zip", "ultralight-rain-pants"],
  stoves: [
    "beetle16",
    "tribe-4-hot-tent",
    "west-wind-stove",
    "tribe-wood-stove-titanium-ver",
    "tribe-wood-stove-1-0",
    "wood-stove-folding-chimney",
  ],
  accessories: ["burningfeather-ul-alcohol-stove", "alcohol-stove", "conical-alcohol-burner-cooking-kit"],
};

const categoryThumb: Record<string, string> = {
  "ultralight-tent": "lanshan-1",
  "freestanding-tent": "taiji-1",
  packs: "tianshan-ultra",
  "rain-gear": "ultralight-rain-jacket",
  accessories: "burningfeather-ul-alcohol-stove",
  stoves: "beetle16",
  tarps: "lightweight-tarp",
  "repair-parts": "3fulgear-buckle-01-2np",
};

const topCategories: { id: string; label: Record<Lang, string> }[] = [
  { id: "ultralight-tent", label: { fi: "Ultrakevyet teltat", sv: "Ultralätta tält" } },
  { id: "freestanding-tent", label: { fi: "Itsekantavat", sv: "Fristående" } },
  { id: "packs", label: { fi: "Rinkat", sv: "Ryggsäckar" } },
  { id: "rain-gear", label: { fi: "Sadevaatteet", sv: "Regnkläder" } },
  { id: "accessories", label: { fi: "Tarvikkeet", sv: "Tillbehör" } },
  { id: "stoves", label: { fi: "Kamiinat", sv: "Kaminer" } },
];

function imageFor(products: Product[], slug: string) {
  return products.find((product) => product.slug === slug)?.images[0] ?? "";
}

function productsIn(products: Product[], categoryId: string, lang: Lang) {
  const lead = leadSlugs[categoryId] ?? [];
  const rank = new Map(lead.map((slug, index) => [slug, index]));
  return products
    .filter((product) => product.category === categoryId)
    .sort((a, b) => {
      const left = rank.get(a.slug) ?? 1000;
      const right = rank.get(b.slug) ?? 1000;
      if (left !== right) return left - right;
      return a.title.localeCompare(b.title, lang);
    });
}

function productLinks(products: Product[], categoryId: string, lang: Lang): NavItem[] {
  return productsIn(products, categoryId, lang).map((product) => ({
    id: product.slug,
    label: product.title,
    href: href(lang, `/tuote/${product.slug}`),
    image: product.images[0],
  }));
}

export function buildNav(products: Product[], lang: Lang): NavItem[] {
  const t = ui[lang];
  const categories = localCategories(lang);
  const { articles } = guidesFor(lang);
  const categoryLinks: NavItem[] = categories.map((category) => ({
    id: `shop-${category.id}`,
    label: category.title,
    href: href(lang, `/kategoria/${category.path}`),
    image: imageFor(products, categoryThumb[category.id] ?? "") || category.image,
  }));

  const categoryItems: NavItem[] = topCategories.map((item) => {
    const category = categories.find((entry) => entry.id === item.id);
    const children = productLinks(products, item.id, lang);
    return {
      id: item.id,
      label: item.label[lang],
      href: href(lang, category ? `/kategoria/${category.path}` : "/tuotteet"),
      children: children.length > 0 ? children : undefined,
    };
  });

  return [
    { id: "home", label: t.home, href: href(lang, "/") },
    { id: "shop", label: t.shop, href: href(lang, "/tuotteet"), children: categoryLinks },
    ...categoryItems,
    {
      id: "guides",
      label: t.articles,
      href: href(lang, "/oppaat"),
      children: [
        {
          id: "guides-all",
          label: t.allArticles,
          href: href(lang, "/oppaat"),
          image: "https://3fulgear.com/wp-content/uploads/2025/11/IMG_0075.jpg",
        },
        ...articles.map((article) => ({
          id: article.slug,
          label: article.title,
          href: href(lang, `/oppaat/${article.slug}`),
          image: article.image,
        })),
        {
          id: "guides-pitch",
          label: t.pitchGuide,
          href: href(lang, "/oppaat/lanshan-pystytys"),
          image: imageFor(products, "lanshan2-classic"),
        },
      ],
    },
  ];
}
