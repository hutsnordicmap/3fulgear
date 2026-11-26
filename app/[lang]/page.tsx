import type { Metadata } from "next";
import Link from "next/link";
import { getCatalog } from "@/lib/catalog";
import { guidesFor } from "@/lib/guides";
import { href, langOf, ui, type Lang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { DISCOUNT_CODE } from "@/lib/site";
import type { Product } from "@/lib/types";

type Props = { params: Promise<{ lang: string }> };

const text = {
  fi: {
    title: "Ultrakevyet teltat ja rinkat | 3F UL GEAR Suomi",
    description:
      "Suomenkielinen opas 3F UL GEAR -sauvatelttoihin, itsekantaviin telttoihin ja ultrakevyisiin rinkkoihin. Koodi HUTSNORDIC10 antaa 10 % alennuksen.",
    hero: "3F UL GEAR on valmistanut korkealaatuisia ultrakevyitä telttoja vuodesta 2009.",
    popularLines: [
      "780 g, 1 henkilö, kaksiseinämäinen",
      "1120 g, 2 henkilöä, kaksiseinämäinen",
      "690 g, 1 henkilö, yksiseinämäinen",
      "960 g, 2 henkilöä, yksiseinämäinen",
    ],
    categories: ["Ultrakevyet teltat", "Ultrakevyet rinkat", "Itsekantavat teltat", "Autoretki ja kamiina"],
    popular: "Suosituimmat",
    tents: "Ultrakevyet teltat",
    tianshan:
      "Tianshan Ultra on rinkka, jonka 3F UL GEAR suunnitteli vuoden 2024 Tianshan-vaellusta varten. Enimmäiskuorma on noin 19 kg, ja rinkka pysyy valmistajan mukaan mukavana noin 15 kg kuormalla. Kangas on Ultra200x. Backpacker-sivusto on kuvannut Tianshan-mallia luotettavaksi rinkaksi hyvään hintaan.",
    seePack: "Katso rinkka",
    tianshanAlt: ["Tianshan Ultra -rinkka", "Tianshan Ultra edestä ja takaa"],
    beetleKicker: "Autoretki- ja tukikohtateltta",
    beetleLines: ["Useita kattoikkunoita ja kulkuaukkoja", "Kaarirakenne, jonka 3F UL GEAR on suunnitellut"],
    readMore: "Lue lisää",
    stoveTitle: "Ul-keitinjärjestelmä",
    stove:
      "Sprii on helposti saatava polttoaine, ja 3F UL GEAR -valmistajan spriikeitin on hyvin kevyt järjestelmä. Keitin vie rinkasta noin 200–300 g kaasukeitintä vähemmän, ja polttoainetta saa täydennettyä taajamissa. Siksi spriikeitin on suosittu pitkillä vaelluksilla. BurningFeather-keittimissä on valmistajan mukaan hyvä teho ja polttoainetehokkuus.",
    stoveAlt: ["BurningFeather-spritikeitin", "Tuulisuoja ja kattila"],
    taijiKicker: "Kevyt itsekantava teltta",
    taijiLines: ["Täysin itsekantava teltta ilman maastorajoitusta.", "Kevyin valmistajan ilmoittama polkupaino on 1561 g."],
    all: "Kaikki",
    steps: [
      ["1. Valitse täällä.", "Sivusto esittelee valmistajan valikoiman suomeksi."],
      ["2. Osta virallisesta kaupasta.", "Maksu ja toimitus vahvistetaan osoitteessa 3fulgear.com."],
      [`3. Koodi ${DISCOUNT_CODE}.`, "Koodi antaa 10 % alennuksen valmistajan kassalla."],
    ],
  },
  sv: {
    title: "Ultralätta tält och ryggsäckar | 3F UL GEAR Finland",
    description:
      "Guide på svenska till 3F UL GEARs stavtält, fristående tält och ultralätta ryggsäckar. Koden HUTSNORDIC10 ger 10 % rabatt.",
    hero: "3F UL GEAR har tillverkat ultralätta tält av hög kvalitet sedan 2009.",
    popularLines: [
      "780 g, 1 person, dubbelväggigt",
      "1120 g, 2 personer, dubbelväggigt",
      "690 g, 1 person, enkelväggigt",
      "960 g, 2 personer, enkelväggigt",
    ],
    categories: ["Ultralätta tält", "Ultralätta ryggsäckar", "Fristående tält", "Bilcamping och kamin"],
    popular: "Populärast",
    tents: "Ultralätta tält",
    tianshan:
      "Tianshan Ultra är en ryggsäck som 3F UL GEAR utvecklade för vandringen i Tianshan 2024. Maxlasten är cirka 19 kg, och enligt tillverkaren är ryggsäcken bekväm med cirka 15 kg last. Tyget är Ultra200x. Webbplatsen Backpacker har beskrivit Tianshan som en pålitlig ryggsäck till ett bra pris.",
    seePack: "Se ryggsäcken",
    tianshanAlt: ["Ryggsäcken Tianshan Ultra", "Tianshan Ultra framifrån och bakifrån"],
    beetleKicker: "Tält för bilcamping och basläger",
    beetleLines: ["Flera takfönster och öppningar", "Bågkonstruktion som 3F UL GEAR har utvecklat"],
    readMore: "Läs mer",
    stoveTitle: "Ultralätt kök",
    stove:
      "Sprit är ett lättillgängligt bränsle, och 3F UL GEARs spritkök är ett mycket lätt system. Köket tar cirka 200–300 g mindre plats i ryggsäcken än ett gaskök, och bränsle kan fyllas på i tätorter. Därför är spritköket populärt på långa vandringar. Enligt tillverkaren har BurningFeather-köken bra effekt och låg bränsleförbrukning.",
    stoveAlt: ["Spritköket BurningFeather", "Vindskydd och kastrull"],
    taijiKicker: "Lätt fristående tält",
    taijiLines: ["Helt fristående tält som går att resa på alla underlag.", "Den lägsta vikt på leden som tillverkaren uppger är 1561 g."],
    all: "Alla",
    steps: [
      ["1. Välj här.", "Sidan presenterar tillverkarens sortiment på svenska."],
      ["2. Köp i den officiella butiken.", "Betalning och leverans bekräftas på 3fulgear.com."],
      [`3. Koden ${DISCOUNT_CODE}.`, "Koden ger 10 % rabatt i tillverkarens kassa."],
    ],
  },
};

const popularSlugs = ["lanshan-1", "lanshan2-classic", "lanshan-1-pro", "lanshan-2-pro"];

const categoryTiles = [
  { path: "/kategoria/ultrakevyet-teltat", image: "https://3fulgear.com/wp-content/uploads/2023/05/ultents.jpg" },
  { path: "/kategoria/rinkat", image: "https://3fulgear.com/wp-content/uploads/2023/05/ulpacks.jpg" },
  { path: "/kategoria/itsekantavat-teltat", image: "https://3fulgear.com/wp-content/uploads/2023/05/freestanding.jpg" },
  { path: "/kategoria/kamiinat", image: "https://3fulgear.com/wp-content/uploads/2024/04/car-camping-tent-stove-1-1.jpg" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await langOf(params);
  return pageMeta(
    lang,
    "/",
    { absolute: text[lang].title },
    text[lang].description,
    "https://3fulgear.com/wp-content/uploads/2023/05/est-1.jpg",
  );
}

function stories(lang: Lang) {
  return [
    ...guidesFor(lang).articles.map((article) => ({
      title: article.title,
      image: article.image,
      href: href(lang, `/oppaat/${article.slug}`),
    })),
    {
      title: ui[lang].pitchGuide,
      image: "https://3fulgear.com/wp-content/uploads/2023/05/lanshan2-1.jpg",
      href: href(lang, "/oppaat/lanshan-pystytys"),
    },
  ];
}

function findProduct(catalog: Product[], slug: string) {
  return catalog.find((product) => product.slug === slug);
}

export default async function HomePage({ params }: Props) {
  const lang = await langOf(params);
  const t = text[lang];
  const catalog = await getCatalog(lang);
  const tents = popularSlugs
    .map((slug, index) => {
      const product = findProduct(catalog, slug);
      return product ? { slug, line: t.popularLines[index], product } : null;
    })
    .filter((item) => item != null);
  const categories = categoryTiles.map((tile, index) => ({
    href: href(lang, tile.path),
    image: tile.image,
    label: t.categories[index],
  }));

  return (
    <div className="bg-white">
      <section
        className="flex min-h-[420px] items-end bg-cover bg-center md:min-h-[520px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url(https://3fulgear.com/wp-content/uploads/2023/05/est-1.jpg)",
        }}
      >
        <div className="mx-auto w-full max-w-[1100px] px-4 py-16 text-white">
          <h1 className="max-w-3xl text-3xl leading-tight font-semibold md:text-5xl">
            {t.hero}
          </h1>
        </div>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.href} href={category.href} className="group relative block h-36 overflow-hidden sm:h-44">
            <img
              src={category.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-bottom"
            />
            <span className="absolute inset-x-0 bottom-0 flex h-12 items-center justify-center bg-[#161616] px-2 text-center text-[11px] leading-4 font-semibold tracking-[0.12em] text-white uppercase">
              {category.label}
            </span>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-16 text-center">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#777] uppercase">{t.popular}</p>
        <h2 className="mt-2 text-3xl font-semibold">{t.tents}</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tents.map((item) => (
            <Link key={item.slug} href={href(lang, `/tuote/${item.slug}`)} className="group block">
              <img
                src={item.product.images[0]}
                alt={item.product.title}
                className="mx-auto aspect-square w-full max-w-[220px] object-contain"
              />
              <p className="mt-4 text-sm font-semibold tracking-wide uppercase group-hover:text-[#e36159]">
                {item.product.title}
              </p>
              <p className="mt-1 text-xs text-[#777]">{item.line}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-[#eee]">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Tianshan Ultra</h2>
            <p className="mt-4 text-sm leading-7 text-[#777]">{t.tianshan}</p>
            <Link href={href(lang, "/tuote/tianshan-ultra")} className="store-btn mt-6">
              {t.seePack}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://3fulgear.com/wp-content/uploads/2025/04/tianshan-ultra-backpack-6.jpg"
              alt={t.tianshanAlt[0]}
              className="w-full object-contain"
            />
            <img
              src="https://3fulgear.com/wp-content/uploads/2025/04/tianshan-ultra-backpack-1-1.png"
              alt={t.tianshanAlt[1]}
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section
        className="flex min-h-[480px] items-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.45), rgba(0,0,0,0.1)), url(https://3fulgear.com/wp-content/uploads/2024/04/beele2.0-3fulgear-camping.jpg)",
        }}
      >
        <div className="mx-auto w-full max-w-[1100px] px-4 py-16">
          <p className="text-4xl font-semibold tracking-wide md:text-6xl">BEETLE 16 2.0</p>
          <p className="mt-3 text-sm font-semibold tracking-[0.16em] uppercase">
            {t.beetleKicker}
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {t.beetleLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <Link href={href(lang, "/tuote/beetle16")} className="store-btn-light mt-8">
            {t.readMore}
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">{t.stoveTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-[#777]">{t.stove}</p>
          <Link href={href(lang, "/tuote/burningfeather-ul-alcohol-stove")} className="store-btn mt-6">
            {t.readMore}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-[#f7f7f7] p-6">
          <img
            src="https://3fulgear.com/wp-content/uploads/2023/10/BF-S03-alcohol-stove-burn-2-1.jpg"
            alt={t.stoveAlt[0]}
            className="w-full object-contain"
          />
          <img
            src="https://3fulgear.com/wp-content/uploads/2023/10/windscreen-for-flat-pot-or-pan.jpg"
            alt={t.stoveAlt[1]}
            className="w-full object-contain"
          />
        </div>
      </section>

      <section
        className="flex min-h-[520px] items-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,0,0,0.05)), url(https://3fulgear.com/wp-content/uploads/2024/10/Taiji1-3FULGEAR.jpg)",
        }}
      >
        <div className="mx-auto w-full max-w-[1100px] px-4 py-16">
          <p className="text-5xl font-semibold tracking-wide md:text-7xl">TAIJI 1</p>
          <p className="mt-3 text-sm font-semibold tracking-[0.16em] uppercase">
            {t.taijiKicker}
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {t.taijiLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <Link href={href(lang, "/tuote/taiji-1")} className="store-btn-light mt-8">
            {t.readMore}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">{ui[lang].articles}</h2>
          <Link href={href(lang, "/oppaat")} className="text-xs font-semibold tracking-[0.14em] uppercase hover:text-[#e36159]">
            {t.all}
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories(lang).map((story) => (
            <Link key={story.href} href={story.href} className="group block">
              <img src={story.image} alt="" className="aspect-[16/10] w-full object-cover" />
              <p className="mt-3 text-sm leading-6 font-semibold group-hover:text-[#e36159]">{story.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-[#eee] bg-[#fafafa]">
        <div className="mx-auto grid max-w-[1100px] gap-6 px-4 py-10 text-sm leading-6 text-[#777] md:grid-cols-3">
          {t.steps.map(([lead, body]) => (
            <p key={lead}>
              <span className="font-semibold text-[#222]">{lead}</span> {body}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
