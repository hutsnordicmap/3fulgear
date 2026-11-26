import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/gallery";
import { PriceBlock } from "@/components/price";
import { ProductGrid } from "@/components/product-card";
import { getCatalog, getProduct } from "@/lib/catalog";
import { formatRange, priceView, translateLabel } from "@/lib/pricing";
import { breadcrumbLd, pageMeta, withCode } from "@/lib/seo";
import { href, langOf, locale, ui, type Lang } from "@/lib/i18n";
import { affiliateUrl, categoryById, discounted, DISCOUNT_CODE, formatEur, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ lang: string; slug: string }> };

const text = {
  fi: {
    product: "Tuote",
    range: "Valikoima",
    codePrice: (range: boolean, value: string) =>
      `Hinta valmistajan kaupassa. Koodi ${DISCOUNT_CODE} antaa 10 % alennuksen kassalla, jolloin ${range ? "haarukka" : "hinta"} on ${value}.`,
    priceNote: `Hinta on haettu valmistajan kaupasta euroina ja voi muuttua. 10 % alennus tulee kassalla koodilla ${DISCOUNT_CODE}.`,
    buy: "Osta virallisesta kaupasta",
    checkStock: "Tarkista saatavuus kaupasta.",
    options: "Vaihtoehdot virallisessa kaupassa",
    option: "Vaihtoehto",
    price: "Hinta",
    withCode: "Koodilla",
    base: "Perusmalli",
    rangeNote: (range: string) =>
      `Teltan tai rinkan esittelyhinta sivun yläreunassa on ${range}. Edullisimmat rivit voivat olla aluskangas, lisäkaari tai muu osa.`,
    related: "Samasta ryhmästä",
  },
  sv: {
    product: "Produkt",
    range: "Sortiment",
    codePrice: (range: boolean, value: string) =>
      `Pris i tillverkarens butik. Koden ${DISCOUNT_CODE} ger 10 % rabatt i kassan, och då är ${range ? "prisintervallet" : "priset"} ${value}.`,
    priceNote: `Priset är hämtat i euro från tillverkarens butik och kan ändras. Rabatten på 10 % dras av i kassan med koden ${DISCOUNT_CODE}.`,
    buy: "Köp i den officiella butiken",
    checkStock: "Kontrollera tillgängligheten i butiken.",
    options: "Alternativ i den officiella butiken",
    option: "Alternativ",
    price: "Pris",
    withCode: "Med koden",
    base: "Grundmodell",
    rangeNote: (range: string) =>
      `Det pris för tältet eller ryggsäcken som visas högst upp på sidan är ${range}. De billigaste raderna kan vara underlag, en extra stång eller någon annan del.`,
    related: "Ur samma grupp",
  },
} satisfies Record<Lang, unknown>;

export async function generateStaticParams({ params }: { params: { lang: string } }) {
  const catalog = await getCatalog(params.lang === "sv" ? "sv" : "fi");
  return catalog.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await langOf(params);
  const { slug } = await params;
  const product = await getProduct(slug, lang);
  if (!product) return { title: text[lang].product };
  const category = categoryById(product.category, lang);
  const title = category ? `${product.title} – ${category.title.toLocaleLowerCase(lang)}` : product.title;
  return pageMeta(
    lang,
    `/tuote/${product.slug}`,
    title,
    withCode(product.summary, lang),
    product.images[0],
  );
}

export default async function ProductPage({ params }: Props) {
  const lang = await langOf(params);
  const t = text[lang];
  const eur = (value: number) => formatEur(value, lang);
  const { slug } = await params;
  const product = await getProduct(slug, lang);
  if (!product) notFound();

  const category = categoryById(product.category, lang);
  const catalog = await getCatalog(lang);
  const related = catalog
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);
  const buyUrl = affiliateUrl(product.permalink);
  const view = priceView(product);
  const codePrice =
    view.min == null
      ? undefined
      : view.max != null && view.max - view.min > 0.01
        ? t.codePrice(true, `${eur(discounted(view.min))}–${eur(discounted(view.max))}`)
        : t.codePrice(false, eur(discounted(view.min)));
  const availability = product.inStock
    ? "https://schema.org/InStock"
    : "https://schema.org/OutOfStock";
  const offer =
    view.min == null
      ? undefined
      : view.max != null && view.max - view.min > 0.01
        ? {
            "@type": "AggregateOffer",
            priceCurrency: "EUR",
            lowPrice: view.min.toFixed(2),
            highPrice: view.max.toFixed(2),
            availability,
            url: buyUrl,
            seller: { "@type": "Organization", name: "3F UL GEAR" },
            description: codePrice,
          }
        : {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: view.min.toFixed(2),
            availability,
            url: buyUrl,
            itemCondition: "https://schema.org/NewCondition",
            seller: { "@type": "Organization", name: "3F UL GEAR" },
            description: codePrice,
          };
  const crumbs = [
    { name: t.range, path: href(lang, "/tuotteet") },
    ...(category ? [{ name: category.title, path: href(lang, `/kategoria/${category.path}`) }] : []),
    { name: product.title, path: href(lang, `/tuote/${product.slug}`) },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.title,
        sku: product.slug,
        inLanguage: locale[lang],
        brand: { "@type": "Brand", name: "3F UL GEAR" },
        image: product.images,
        description: product.summary,
        url: `${SITE_URL}${href(lang, `/tuote/${product.slug}`)}`,
        offers: offer,
      },
      breadcrumbLd(crumbs),
    ],
  };

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-sm text-ink/60">
        <Link href={href(lang, "/tuotteet")} className="hover:underline">
          {t.range}
        </Link>
        {category ? (
          <>
            {" / "}
            <Link href={href(lang, `/kategoria/${category.path}`)} className="hover:underline">
              {category.title}
            </Link>
          </>
        ) : null}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <Gallery images={product.images} alt={product.title} imageLabel={ui[lang].image} />
        <div>
          <h1 className="text-4xl font-semibold">{product.title}</h1>
          <p className="mt-2 text-sm text-ink/50">{product.name}</p>
          <div className="mt-6">
            <PriceBlock product={product} lang={lang} large />
          </div>
          <p className="mt-3 text-sm leading-6 text-ink/70">{t.priceNote}</p>
          <a
            href={buyUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="store-btn mt-6"
          >
            {t.buy}
          </a>
          {!product.inStock ? (
            <p className="mt-3 text-sm text-clay">{t.checkStock}</p>
          ) : null}
          <div lang={lang} className="prose-fi mt-8 text-base leading-7 text-ink/85">
            {product.summary.split(/\n+/).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          {product.bullets.length > 0 ? (
            <ul className="mt-6 space-y-2 text-sm leading-6">
              {product.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {product.variations.length > 0 ? (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">{t.options}</h2>
          <div className="mt-4 overflow-x-auto border border-[#e7e7e7] bg-white">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="border-b border-line text-ink/50">
                <tr>
                  <th className="px-4 py-3 font-medium">{t.option}</th>
                  <th className="px-4 py-3 font-medium">{t.price}</th>
                  <th className="px-4 py-3 font-medium">{t.withCode}</th>
                </tr>
              </thead>
              <tbody>
                {product.variations.map((variation) => (
                  <tr key={`${variation.label}-${variation.price}`} className="border-b border-line/70">
                    <td className="px-4 py-3">{translateLabel(variation.label, lang) || t.base}</td>
                    <td className="px-4 py-3">
                      {variation.regular > variation.price + 0.01 ? (
                        <span className="mr-2 text-ink/40 line-through">
                          {eur(variation.regular)}
                        </span>
                      ) : null}
                      {eur(variation.price)}
                    </td>
                    <td className="px-4 py-3 text-moss">{eur(discounted(variation.price))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {view.min != null && view.max != null ? (
            <p className="mt-3 text-sm text-ink/60">{t.rangeNote(formatRange(view.min, view.max, eur))}</p>
          ) : null}
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-semibold">{t.related}</h2>
          <ProductGrid products={related} lang={lang} />
        </section>
      ) : null}
    </div>
  );
}
