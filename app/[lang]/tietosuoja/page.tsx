import type { Metadata } from "next";
import { langOf } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

const text = {
  "fi": {
    "title": "Tietosuoja",
    "h1": "Tietosuoja",
    "description": "Mitä 3fulgear.fi tallentaa kävijästä.",
    "paragraphs": [
      "3fulgear.fi on esittelysivusto. Sillä ei ole ostoskoria, käyttäjätiliä eikä maksua. Tilaus, maksu ja toimitus tapahtuvat valmistajan kaupassa 3fulgear.com, jolla on oma tietosuojakäytäntö.",
      "Tuotetiedot haetaan joko sivuston mukana tulevasta luettelosta tai Supabase-tietokannasta. Luettelo ei sisällä kävijän tietoja. Kuvat latautuvat valmistajan palvelimelta, joten selaimen pyyntö menee myös sinne.",
      "Affiliate-linkki lisää osoitteeseen tunnisteen no=647, jotta valmistaja voi yhdistää ostoksen tähän sivustoon. Alennuskoodi HUTSNORDIC10 syötetään valmistajan kassalla.",
      "Kävijämäärät lasketaan ilman evästeitä. Sivusto ei tallenna IP-osoitetta eikä tunnista kävijää, vaan näkee vain koottuja lukuja, kuten sivujen katselut, maan ja laitetyypin."
    ]
  },
  "sv": {
    "title": "Dataskydd",
    "h1": "Dataskydd",
    "description": "Vad 3fulgear.fi sparar om besökarna.",
    "paragraphs": [
      "3fulgear.fi är en presentationssida. Den har ingen kundvagn, inga användarkonton och ingen betalning. Beställning, betalning och leverans sker i tillverkarens butik 3fulgear.com, som har en egen dataskyddspolicy.",
      "Produktuppgifterna hämtas antingen ur en katalog som följer med webbplatsen eller ur en Supabase-databas. Katalogen innehåller inga uppgifter om besökarna. Bilderna laddas från tillverkarens server, så webbläsarens begäran går också dit.",
      "Affiliatelänken lägger till koden no=647 i adressen, så att tillverkaren kan koppla köpet till den här webbplatsen. Rabattkoden HUTSNORDIC10 anges i tillverkarens kassa.",
      "Besökarna räknas utan kakor. Webbplatsen sparar inga IP-adresser och identifierar inte besökarna, utan ser bara sammanställda siffror, som sidvisningar, land och typ av enhet."
    ]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await langOf(params);
  return pageMeta(lang, "/tietosuoja", text[lang].title, text[lang].description);
}

export default async function PrivacyPage({ params }: Props) {
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
    </article>
  );
}
