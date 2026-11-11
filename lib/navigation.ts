import { articles } from "@/lib/guides";
import { categories } from "@/lib/site";
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

const topCategories = [
  { id: "ultralight-tent", label: "Ultrakevyet teltat" },
  { id: "freestanding-tent", label: "Itsekantavat" },
  { id: "packs", label: "Rinkat" },
  { id: "rain-gear", label: "Sadevaatteet" },
  { id: "accessories", label: "Tarvikkeet" },
  { id: "stoves", label: "Kamiinat" },
];

function imageFor(products: Product[], slug: string) {
  return products.find((product) => product.slug === slug)?.images[0] ?? "";
}

function productsIn(products: Product[], categoryId: string) {
  const lead = leadSlugs[categoryId] ?? [];
  const rank = new Map(lead.map((slug, index) => [slug, index]));
  return products
    .filter((product) => product.category === categoryId)
    .sort((a, b) => {
      const left = rank.get(a.slug) ?? 1000;
      const right = rank.get(b.slug) ?? 1000;
      if (left !== right) return left - right;
      return a.nameFi.localeCompare(b.nameFi, "fi");
    });
}

function productLinks(products: Product[], categoryId: string): NavItem[] {
  return productsIn(products, categoryId).map((product) => ({
    id: product.slug,
    label: product.nameFi,
    href: `/tuote/${product.slug}`,
    image: product.images[0],
  }));
}

export function buildNav(products: Product[]): NavItem[] {
  const categoryLinks: NavItem[] = categories.map((category) => ({
    id: `shop-${category.id}`,
    label: category.title,
    href: `/kategoria/${category.path}`,
    image: imageFor(products, categoryThumb[category.id] ?? "") || category.image,
  }));

  const categoryItems: NavItem[] = topCategories.map((item) => {
    const category = categories.find((entry) => entry.id === item.id);
    const children = productLinks(products, item.id);
    return {
      id: item.id,
      label: item.label,
      href: category ? `/kategoria/${category.path}` : "/tuotteet",
      children: children.length > 0 ? children : undefined,
    };
  });

  return [
    { id: "home", label: "Etusivu", href: "/" },
    { id: "shop", label: "Kauppa", href: "/tuotteet", children: categoryLinks },
    ...categoryItems,
    {
      id: "guides",
      label: "Artikkelit",
      href: "/oppaat",
      children: [
        {
          id: "guides-all",
          label: "Kaikki artikkelit",
          href: "/oppaat",
          image: "https://3fulgear.com/wp-content/uploads/2025/11/IMG_0075.jpg",
        },
        ...articles.map((article) => ({
          id: article.slug,
          label: article.title,
          href: `/oppaat/${article.slug}`,
          image: article.image,
        })),
        {
          id: "guides-pitch",
          label: "Lanshan 2:n pystytys",
          href: "/oppaat/lanshan-pystytys",
          image: imageFor(products, "lanshan2-classic"),
        },
      ],
    },
  ];
}
