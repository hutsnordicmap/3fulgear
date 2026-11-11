import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { affiliateUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta(
  "/takuu",
  "Takuu",
  "3F UL GEAR hoitaa korjaukset ja varaosat. Tiivistelmä valmistajan takuusivusta suomeksi.",
);

export default function WarrantyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Takuu ja varaosat</h1>
      <div className="prose-fi mt-6 leading-8 text-ink/85">
        <p>
          Takuun myöntää 3F UL GEAR. 3fulgear.fi ei vastaanota korjauksia eikä
          säilytä ostotietoja.
        </p>
        <p>
          Valmistaja kertoo tarjoavansa elinikäisen korjauksen, josta on rajattu
          pois kankaan ja materiaalien luonnollinen vanheneminen. Korjaukseen
          lähtevän varusteen mukana pyydetään laput, jossa vika on kuvattu.
          Kansainvälisen edullisen postin maksaa asiakas. Varuste pitää puhdistaa
          ennen lähetystä. Valmistaja voi palauttaa likaisen lähetyksen.
        </p>
        <p>
          Pieniä osia, enintään kaksi telttakaaren pätkää, muovi- ja
          metallisolkia sekä paikkoja, valmistaja toimittaa elinikäisesti, jos
          ostotieto löytyy. Osa on ilmainen ja postitus maksullinen. Valmistajan
          sivulla postitus on ollut noin 5–8 USD osoitteen mukaan. Postituksen voi
          maksaa varaosatuotteen kautta.
        </p>
        <p>
          Korjausosoite valmistajan takuusivulla on 3FUL GEAR, Repair, Jingquan
          Rd #98, 5F, Jimei, Xiamen, Fujian, Kiina. Puhelin 15359234538. Ennen
          lähettämistä kannattaa kirjoittaa valmistajalle, koska osoite ja käytäntö
          voivat muuttua.
        </p>
      </div>
      <a
        href={affiliateUrl("https://3fulgear.com/warranty/")}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="mt-8 inline-block font-semibold underline"
      >
        Valmistajan takuusivu
      </a>
    </article>
  );
}
