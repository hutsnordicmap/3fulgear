import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-card";
import { getCatalog } from "@/lib/catalog";
import { langOf } from "@/lib/i18n";
import { pageMeta, withCode } from "@/lib/seo";
import { categories } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

const text = {
  fi: {
    title: "Koko valikoima",
    description: "3F UL GEAR -teltat, rinkat, sadevaatteet, kamiinat ja tarvikkeet suomeksi.",
    intro: (count: number) =>
      `${count} tuotetta valmistajan tämänhetkisestä kaupasta. Hinnat ovat euroja. Alennuskoodi lasketaan vasta virallisen kaupan kassalla.`,
  },
  sv: {
    title: "Hela sortimentet",
    description: "3F UL GEARs tält, ryggsäckar, regnkläder, kaminer och tillbehör på svenska.",
    intro: (count: number) =>
      `${count} produkter ur tillverkarens nuvarande butik. Priserna är i euro. Rabattkoden dras av först i den officiella butikens kassa.`,
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await langOf(params);
  return pageMeta(lang, "/tuotteet", text[lang].title, withCode(text[lang].description, lang));
}

export default async function ProductsPage({ params }: Props) {
  const lang = await langOf(params);
  const catalog = await getCatalog(lang);
  const ordered = [...catalog].sort((a, b) => {
    const left = categories.findIndex((category) => category.id === a.category);
    const right = categories.findIndex((category) => category.id === b.category);
    return left - right || a.title.localeCompare(b.title, lang);
  });

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-12">
      <h1 className="text-4xl font-semibold">{text[lang].title}</h1>
      <p className="mt-3 max-w-2xl text-ink/70">{text[lang].intro(ordered.length)}</p>
      <div className="mt-8">
        <ProductGrid products={ordered} lang={lang} />
      </div>
    </div>
  );
}
