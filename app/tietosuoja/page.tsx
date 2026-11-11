import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tietosuoja",
  description: "Mitä 3fulgear.fi tallentaa kävijästä.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-semibold">Tietosuoja</h1>
      <div className="prose-fi mt-6 leading-8 text-ink/85">
        <p>
          3fulgear.fi on esittelysivusto. Sillä ei ole ostoskoria, käyttäjätiliä
          eikä maksua. Tilaus, maksu ja toimitus tapahtuvat valmistajan kaupassa
          3fulgear.com, jolla on oma tietosuojakäytäntö.
        </p>
        <p>
          Tuotetiedot haetaan joko sivuston mukana tulevasta luettelosta tai
          Supabase-tietokannasta. Luettelo ei sisällä kävijän tietoja. Kuvat
          latautuvat valmistajan palvelimelta, joten selaimen pyyntö menee myös
          sinne.
        </p>
        <p>
          Affiliate-linkki lisää osoitteeseen tunnisteen no=647, jotta valmistaja
          voi yhdistää ostoksen tähän sivustoon. Alennuskoodi HUTSNORDIC10
          syötetään valmistajan kassalla.
        </p>
      </div>
    </article>
  );
}
