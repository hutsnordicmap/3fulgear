import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { affiliateUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/yritys",
  "Yritys",
  "3F UL GEAR on vuonna 2008 perustettu ultrakevyiden retkeilyvarusteiden valmistaja. 3fulgear.fi esittelee valikoiman suomeksi.",
);

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm text-moss">Valmistajasta</p>
      <h1 className="mt-2 text-4xl font-semibold">3F UL GEAR</h1>
      <div className="prose-fi mt-6 leading-8 text-ink/85">
        <p>
          3F UL GEAR valmistaa edullisia ultrakevyitä retkeilyvarusteita. Yritys
          on kertonut tehtävänsä olleen sama perustamisesta, vuodesta 2008, asti.
          Ultrakevyitä telttoja se on tehnyt vuodesta 2009. Nimi 3F tulee
          aloittelijoille sopivasta vuoresta, jolle nousee viikoittain satoja
          kulkijoita. Valmistaja kuvaa nimen ideaksi sen, että kevyt varuste
          laskee kynnystä lähteä maastoon.
        </p>
        <p>
          Perustaja Peihong Ye työskenteli aiemmin telttaleikkaajana korealaisessa
          tehtaassa. Vuoden 2008 Aasian finanssikriisissä tehtaita suljettiin, ja
          hän kokosi työttömäksi jääneistä tekijöistä oman verstaan. Vuonna 2010
          hän julkaisi Xingyun-teltan, yhden hengen suojan, jonka paino jäi alle
          800 grammaan. Tuotantopäällikkö Xiaofang Xu on tehnyt telttoja vuodesta
          1997 ja vastaa tehtaan työtavoista.
        </p>
        <p>
          Xueyan Liang, polkunimeltään Flat Canister, on vaeltanut valmistajan
          kertoman mukaan yli 4 000 kilometriä. Lanshan-teltta ja Qidian-rinkka
          syntyivät näiltä retkiltä. Tutor-rinkka tehtiin vaativaa Aotai-reittiä
          varten. Yu Liu tuli mukaan vuonna 2015 oppaan ja ulkoilmakouluttajan
          työstä. Hän vastaa brändistä ja muotoilusta.
        </p>
        <p>
          Moni tuotenimi tulee reitiltä, jolla varustetta on testattu. Lanshan
          viittaa Langta-vaellukseen vuonna 2017 ja tarkoittaa sinisiä vuoria.
          Yue tulee Nyenching Tanggulan lumihuipuista vuonna 2019. Tianshan on
          nimetty eteläisen Tianshanin pohjoispuolen vaelluksen mukaan vuonna
          2024.
        </p>
        <p>
          3fulgear.fi ei ole valmistajan oma sivusto eikä myy tuotteita itse.
          Tekstit on kirjoitettu suomeksi valmistajan englanninkielisten sivujen
          pohjalta, kolmannessa persoonassa. Kuvat tulevat valmistajan
          kuvapalvelimelta, eikä niitä ole kopioitu tähän projektiin.
        </p>
      </div>
      <a
        href={affiliateUrl("https://3fulgear.com/about/")}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="mt-8 inline-block font-semibold underline"
      >
        Valmistajan oma tarina englanniksi
      </a>
    </article>
  );
}
