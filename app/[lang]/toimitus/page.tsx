import type { Metadata } from "next";
import { langOf } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { affiliateUrl } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

const text = {
  "fi": {
    "title": "Toimitus",
    "h1": "Toimitus",
    "description": "3F UL GEAR toimittaa tilaukset omasta kaupastaan. Tällä sivulla on valmistajan ilmoittamat toimitusajat suomeksi.",
    "paragraphs": [
      "Toimituksen hoitaa 3F UL GEAR, ei tämä sivusto. Alla oleva on tiivistelmä valmistajan toimitussivusta. Voimassa oleva raja ja hinta näkyvät kassalla.",
      "Useimpien tuotteiden hintaan sisältyy edullinen lähetys. Valmistajan toimitussivu kertoo, että ilmainen toimitus tulee voimaan, kun tilaus ylittää 80 USD. Kaupan yläbannerissa raja on ajoittain ilmoitettu myös 90 USD:na. Osa suurista tuotteista, kuten kuumateltat ja painavat kamiinat, ei kuulu ilmaiseen toimitukseen.",
      "Priority-lähetys lähtee valmistajan mukaan 2–3 arkipäivässä. Eurooppaan kuljetus on tyypillisesti 5–10 arkipäivää. Taloudellinen lähetys kulkee ensin 5–7 arkipäivää kansainväliselle kuljettajalle ja sen jälkeen tyypillisesti 8–18 arkipäivää. Lähetyksiä voi seurata.",
      "Tulli ja arvonlisävero voivat tulla ostajan maksettavaksi, jos kohdemaa ei ole valmistajan tullivapaalla listalla. Suomi kuuluu EU:hun, mutta tämä sivu ei vahvista, onko lähetys Suomeen tullivapaa. Asia tarkistetaan valmistajan toimitussivulta ennen tilausta.",
      "Palautuksista, vaihdoista ja seurantakoodeista päättää valmistaja. Tilauksen tila katsotaan valmistajan omasta seurannasta."
    ],
    "link": "Valmistajan toimitusehdot"
  },
  "sv": {
    "title": "Leverans",
    "h1": "Leverans",
    "description": "3F UL GEAR levererar beställningarna från sin egen butik. Här finns de leveranstider som tillverkaren uppger, på svenska.",
    "paragraphs": [
      "Leveransen sköts av 3F UL GEAR, inte av den här webbplatsen. Texten nedan sammanfattar tillverkarens leveranssida. Den gräns och det pris som gäller syns i kassan.",
      "För de flesta produkter ingår en förmånlig försändelse i priset. Enligt tillverkarens leveranssida gäller fri frakt när beställningen överstiger 80 USD. I butikens banner har gränsen ibland också angetts till 90 USD. En del stora produkter, som varmtält och tunga kaminer, omfattas inte av den fria frakten.",
      "Enligt tillverkaren skickas en prioriterad försändelse inom 2–3 vardagar. Transporten till Europa tar vanligen 5–10 vardagar. En ekonomiförsändelse går först 5–7 vardagar till den internationella transportören och tar därefter vanligen 8–18 vardagar. Försändelserna kan spåras.",
      "Tull och mervärdesskatt kan komma att betalas av köparen om mottagarlandet inte finns på tillverkarens lista över tullfria länder. Finland hör till EU, men den här sidan bekräftar inte om en försändelse till Finland är tullfri. Kontrollera det på tillverkarens leveranssida innan du beställer.",
      "Returer, byten och spårningskoder bestäms av tillverkaren. Beställningens status ser du i tillverkarens egen spårning."
    ],
    "link": "Tillverkarens leveransvillkor"
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await langOf(params);
  return pageMeta(lang, "/toimitus", text[lang].title, text[lang].description);
}

export default async function ShippingPage({ params }: Props) {
  const lang = await langOf(params);
  const t = text[lang];
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-semibold">{t.h1}</h1>
      <div className="prose-fi mt-6 leading-8 text-ink/85">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <a
        href={affiliateUrl("https://3fulgear.com/shipping/")}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="mt-8 inline-block font-semibold underline"
      >
        {t.link}
      </a>
    </article>
  );
}
