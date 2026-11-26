import type { Metadata } from "next";
import { langOf } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { affiliateUrl } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

const text = {
  "fi": {
    "title": "Takuu",
    "h1": "Takuu ja varaosat",
    "description": "3F UL GEAR hoitaa korjaukset ja varaosat. Tiivistelmä valmistajan takuusivusta suomeksi.",
    "paragraphs": [
      "Takuun myöntää 3F UL GEAR. 3fulgear.fi ei vastaanota korjauksia eikä säilytä ostotietoja.",
      "Valmistaja kertoo tarjoavansa elinikäisen korjauksen, josta on rajattu pois kankaan ja materiaalien luonnollinen vanheneminen. Korjaukseen lähtevän varusteen mukana pyydetään laput, jossa vika on kuvattu. Kansainvälisen edullisen postin maksaa asiakas. Varuste pitää puhdistaa ennen lähetystä. Valmistaja voi palauttaa likaisen lähetyksen.",
      "Pieniä osia, enintään kaksi telttakaaren pätkää, muovi- ja metallisolkia sekä paikkoja, valmistaja toimittaa elinikäisesti, jos ostotieto löytyy. Osa on ilmainen ja postitus maksullinen. Valmistajan sivulla postitus on ollut noin 5–8 USD osoitteen mukaan. Postituksen voi maksaa varaosatuotteen kautta.",
      "Korjausosoite valmistajan takuusivulla on 3FUL GEAR, Repair, Jingquan Rd #98, 5F, Jimei, Xiamen, Fujian, Kiina. Puhelin 15359234538. Ennen lähettämistä kannattaa kirjoittaa valmistajalle, koska osoite ja käytäntö voivat muuttua."
    ],
    "link": "Valmistajan takuusivu"
  },
  "sv": {
    "title": "Garanti",
    "h1": "Garanti och reservdelar",
    "description": "3F UL GEAR sköter reparationer och reservdelar. En sammanfattning av tillverkarens garantisida på svenska.",
    "paragraphs": [
      "Garantin ges av 3F UL GEAR. 3fulgear.fi tar inte emot reparationer och sparar inga köpuppgifter.",
      "Tillverkaren uppger att den erbjuder livslång reparation, med undantag för naturligt åldrande av tyg och material. Med utrustning som skickas på reparation ska det ligga en lapp där felet beskrivs. Kunden betalar den förmånliga internationella posten. Utrustningen ska rengöras före försändelsen. Tillverkaren kan returnera en smutsig försändelse.",
      "Små delar, högst två delar av en tältstång, spännen av plast och metall samt lagningslappar levererar tillverkaren livet ut om det finns köpuppgifter. Själva delen kan vara gratis medan porto tas ut. På tillverkarens sida har portot legat på cirka 5–8 USD beroende på adress. Portot kan betalas via en reservdelsprodukt.",
      "Reparationsadressen på tillverkarens garantisida är 3FUL GEAR, Repair, Jingquan Rd #98, 5F, Jimei, Xiamen, Fujian, Kina. Telefon 15359234538. Skriv gärna till tillverkaren innan du skickar något, eftersom adressen och rutinerna kan ändras."
    ],
    "link": "Tillverkarens garantisida"
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await langOf(params);
  return pageMeta(lang, "/takuu", text[lang].title, text[lang].description);
}

export default async function WarrantyPage({ params }: Props) {
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
        href={affiliateUrl("https://3fulgear.com/warranty/")}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="mt-8 inline-block font-semibold underline"
      >
        {t.link}
      </a>
    </article>
  );
}
