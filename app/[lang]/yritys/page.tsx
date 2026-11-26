import type { Metadata } from "next";
import { langOf } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { affiliateUrl } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

const text = {
  "fi": {
    "title": "Yritys",
    "h1": "3F UL GEAR",
    "kicker": "Valmistajasta",
    "description": "3F UL GEAR on vuonna 2008 perustettu ultrakevyiden retkeilyvarusteiden valmistaja. 3fulgear.fi esittelee valikoiman suomeksi.",
    "paragraphs": [
      "3F UL GEAR valmistaa edullisia ultrakevyitä retkeilyvarusteita. Yritys on kertonut tehtävänsä olleen sama perustamisesta, vuodesta 2008, asti. Ultrakevyitä telttoja se on tehnyt vuodesta 2009. Nimi 3F tulee aloittelijoille sopivasta vuoresta, jolle nousee viikoittain satoja kulkijoita. Valmistaja kuvaa nimen ideaksi sen, että kevyt varuste laskee kynnystä lähteä maastoon.",
      "Perustaja Peihong Ye työskenteli aiemmin telttaleikkaajana korealaisessa tehtaassa. Vuoden 2008 Aasian finanssikriisissä tehtaita suljettiin, ja hän kokosi työttömäksi jääneistä tekijöistä oman verstaan. Vuonna 2010 hän julkaisi Xingyun-teltan, yhden hengen suojan, jonka paino jäi alle 800 grammaan. Tuotantopäällikkö Xiaofang Xu on tehnyt telttoja vuodesta 1997 ja vastaa tehtaan työtavoista.",
      "Xueyan Liang, polkunimeltään Flat Canister, on vaeltanut valmistajan kertoman mukaan yli 4 000 kilometriä. Lanshan-teltta ja Qidian-rinkka syntyivät näiltä retkiltä. Tutor-rinkka tehtiin vaativaa Aotai-reittiä varten. Yu Liu tuli mukaan vuonna 2015 oppaan ja ulkoilmakouluttajan työstä. Hän vastaa brändistä ja muotoilusta.",
      "Moni tuotenimi tulee reitiltä, jolla varustetta on testattu. Lanshan viittaa Langta-vaellukseen vuonna 2017 ja tarkoittaa sinisiä vuoria. Yue tulee Nyenching Tanggulan lumihuipuista vuonna 2019. Tianshan on nimetty eteläisen Tianshanin pohjoispuolen vaelluksen mukaan vuonna 2024.",
      "3fulgear.fi ei ole valmistajan oma sivusto eikä myy tuotteita itse. Tekstit on kirjoitettu suomeksi valmistajan englanninkielisten sivujen pohjalta, kolmannessa persoonassa. Kuvat tulevat valmistajan kuvapalvelimelta, eikä niitä ole kopioitu tähän projektiin."
    ],
    "link": "Valmistajan oma tarina englanniksi"
  },
  "sv": {
    "title": "Företaget",
    "h1": "3F UL GEAR",
    "kicker": "Om tillverkaren",
    "description": "3F UL GEAR är en tillverkare av ultralätt friluftsutrustning, grundad 2008. 3fulgear.fi presenterar sortimentet på finska och svenska.",
    "paragraphs": [
      "3F UL GEAR tillverkar prisvärd ultralätt friluftsutrustning. Företaget har berättat att uppdraget har varit detsamma ända sedan starten 2008. Ultralätta tält har det tillverkat sedan 2009. Namnet 3F kommer från ett nybörjarvänligt berg som hundratals vandrare bestiger varje vecka. Tillverkaren beskriver tanken bakom namnet så, att lätt utrustning sänker tröskeln för att ge sig ut i naturen.",
      "Grundaren Peihong Ye arbetade tidigare som tillskärare av tält vid en koreansk fabrik. Under den asiatiska finanskrisen 2008 stängdes fabriker, och Peihong Ye samlade arbetare som blivit arbetslösa i en egen verkstad. År 2010 kom tältet Xingyun, ett enmansskydd som vägde under 800 gram. Produktionschefen Xiaofang Xu har tillverkat tält sedan 1997 och ansvarar för arbetssätten i fabriken.",
      "Xueyan Liang, med lednamnet Flat Canister, har enligt tillverkaren vandrat över 4 000 kilometer. Tältet Lanshan och ryggsäcken Qidian föddes under de turerna. Ryggsäcken Tutor gjordes för den krävande Aotai-leden. Yu Liu kom med 2015 från arbetet som guide och friluftsinstruktör. Yu Liu ansvarar för varumärket och designen.",
      "Många produktnamn kommer från leden där utrustningen har testats. Lanshan syftar på vandringen i Langta 2017 och betyder blå berg. Yue kommer från Nyenchen Tanglhas snötoppar 2019. Tianshan har fått namn efter vandringen på norra sidan av södra Tianshan 2024.",
      "3fulgear.fi är inte tillverkarens egen webbplats och säljer inga produkter själv. Texterna är skrivna utifrån tillverkarens engelska sidor, i tredje person. Bilderna kommer från tillverkarens bildserver och har inte kopierats till det här projektet."
    ],
    "link": "Tillverkarens egen berättelse på engelska"
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await langOf(params);
  return pageMeta(lang, "/yritys", text[lang].title, text[lang].description);
}

export default async function AboutPage({ params }: Props) {
  const lang = await langOf(params);
  const t = text[lang];
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm text-moss">{t.kicker}</p>
      <h1 className="mt-2 text-4xl font-semibold">{t.h1}</h1>
      <div className="prose-fi mt-6 leading-8 text-ink/85">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <a
        href={affiliateUrl("https://3fulgear.com/about/")}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="mt-8 inline-block font-semibold underline"
      >
        {t.link}
      </a>
    </article>
  );
}
