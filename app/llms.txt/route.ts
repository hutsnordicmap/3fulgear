import { getCatalog } from "@/lib/catalog";
import { priceView } from "@/lib/pricing";
import { categories, DISCOUNT_CODE, discounted, formatEur, SITE_URL } from "@/lib/site";

export const revalidate = 3600;

function sentence(text: string) {
  const clean = text.replace(/\s+/g, " ").trim();
  const end = clean.search(/(?<=\.)\s/);
  const picked = end === -1 ? clean : clean.slice(0, end + 1);
  return picked.length > 280 ? `${picked.slice(0, 277).trim()}…` : picked;
}

export async function GET() {
  const catalog = await getCatalog();
  const lines = [
    "# 3F UL GEAR Suomi",
    "",
    `> Independent Finnish guide to 3F UL GEAR ultralight tents and packs at ${SITE_URL}. The site is not the manufacturer. Purchases, payment and shipping happen at https://3fulgear.com. Outbound shop links include affiliate id no=647 and currency=EUR. Discount code ${DISCOUNT_CODE} gives 10% off when entered at the manufacturer's checkout. It is not applied automatically. Prices below are euros and can change.`,
    "",
    "3F UL GEAR was founded in 2008. The company has made ultralight tents since 2009. The founder is Peihong Ye. The parent company is Flat Canister. The text on this site is written in Finnish, in the third person.",
    "",
    "## Pages",
    `- [Etusivu](${SITE_URL}/): Finnish homepage for ultralight tents and packs.`,
    `- [Koko valikoima](${SITE_URL}/tuotteet): all current products.`,
    `- [Yritys](${SITE_URL}/yritys): who the manufacturer is.`,
    `- [Toimitus](${SITE_URL}/toimitus): the manufacturer's shipping policy in Finnish.`,
    `- [Takuu](${SITE_URL}/takuu): warranty and spare parts in Finnish.`,
    `- [Oppaat](${SITE_URL}/oppaat): Finnish summaries of pitching and care guides.`,
    `- [Lanshan 2:n pystytys](${SITE_URL}/oppaat/lanshan-pystytys): pitching order for Lanshan 2 and Lanshan 2 Pro.`,
    "",
    "## Categories",
    ...categories.map(
      (category) =>
        `- [${category.title}](${SITE_URL}/kategoria/${category.path}): ${category.intro}`,
    ),
    "",
    "## Products",
  ];

  for (const product of catalog) {
    const view = priceView(product);
    const price =
      view.min == null || view.max == null
        ? "Price is confirmed in the official shop."
        : `Shop price ${formatEur(view.min)}${view.max - view.min > 0.01 ? `–${formatEur(view.max)}` : ""}. With code ${DISCOUNT_CODE}: ${formatEur(discounted(view.min))}${view.max - view.min > 0.01 ? `–${formatEur(discounted(view.max))}` : ""}.`;
    lines.push(
      `- [${product.nameFi}](${SITE_URL}/tuote/${product.slug}): ${sentence(product.summaryFi)} ${price}`,
    );
  }

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
