import type { Metadata } from "next";
import { affiliateUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Toimitus",
  description:
    "3F UL GEAR toimittaa tilaukset omasta kaupastaan. Tällä sivulla on valmistajan ilmoittamat toimitusajat suomeksi.",
};

export default function ShippingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Toimitus</h1>
      <div className="prose-fi mt-6 leading-8 text-ink/85">
        <p>
          Toimituksen hoitaa 3F UL GEAR, ei tämä sivusto. Alla oleva on tiivistelmä
          valmistajan toimitussivusta. Voimassa oleva raja ja hinta näkyvät
          kassalla.
        </p>
        <p>
          Useimpien tuotteiden hintaan sisältyy edullinen lähetys. Valmistajan
          toimitussivu kertoo, että ilmainen toimitus tulee voimaan, kun tilaus
          ylittää 80 USD. Kaupan yläbannerissa raja on ajoittain ilmoitettu myös
          90 USD:na. Osa suurista tuotteista, kuten kuumateltat ja painavat
          kamiinat, ei kuulu ilmaiseen toimitukseen.
        </p>
        <p>
          Priority-lähetys lähtee valmistajan mukaan 2–3 arkipäivässä. Eurooppaan
          kuljetus on tyypillisesti 5–10 arkipäivää. Taloudellinen lähetys kulkee
          ensin 5–7 arkipäivää kansainväliselle kuljettajalle ja sen jälkeen
          tyypillisesti 8–18 arkipäivää. Lähetyksiä voi seurata.
        </p>
        <p>
          Tulli ja arvonlisävero voivat tulla ostajan maksettavaksi, jos kohdemaa
          ei ole valmistajan tullivapaalla listalla. Suomi kuuluu EU:hun, mutta
          tämä sivu ei vahvista, onko lähetys Suomeen tullivapaa. Asia tarkistetaan
          valmistajan toimitussivulta ennen tilausta.
        </p>
        <p>
          Palautuksista, vaihdoista ja seurantakoodeista päättää valmistaja.
          Tilauksen tila katsotaan valmistajan omasta seurannasta.
        </p>
      </div>
      <a
        href={affiliateUrl("https://3fulgear.com/shipping/")}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="mt-8 inline-block font-semibold underline"
      >
        Valmistajan toimitusehdot
      </a>
    </article>
  );
}
