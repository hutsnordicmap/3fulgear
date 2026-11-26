// Two languages. Finnish lives at the root (/tuote/x), Swedish under /sv (/sv/tuote/x).
// next.config.ts rewrites Finnish URLs to app/[lang] with lang = "fi"; page slugs are the same in both.

export const langs = ["fi", "sv"] as const;
export type Lang = (typeof langs)[number];

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}

/** Site path for a language: href("sv", "/tuote/x") → "/sv/tuote/x", href("fi", "/") → "/". */
export function href(lang: Lang, path: string) {
  if (lang === "fi") return path;
  return path === "/" ? "/sv" : `/sv${path}`;
}

export const htmlLang: Record<Lang, string> = { fi: "fi", sv: "sv" };
export const locale: Record<Lang, string> = { fi: "fi-FI", sv: "sv-FI" };
export const ogLocale: Record<Lang, string> = { fi: "fi_FI", sv: "sv_FI" };

/** Short words used across many pages. Page-specific text stays in its page. */
export const ui = {
  fi: {
    siteName: "3F UL GEAR Suomi",
    home: "Etusivu",
    shop: "Kauppa",
    articles: "Artikkelit",
    allArticles: "Kaikki artikkelit",
    pitchGuide: "Lanshan 2:n pystytys",
    search: "Haku",
    searchProducts: "Hae tuotteita",
    openMenu: "Avaa valikko",
    closeMenu: "Sulje valikko",
    mainMenu: "Päävalikko",
    back: "Takaisin",
    showAll: "Näytä kaikki",
    copied: "Kopioitu",
    withCode: "Koodilla",
    priceInShop: "Hinta vahvistetaan virallisessa kaupassa.",
    noProducts: "Ei tuotteita tällä haulla.",
    image: "Kuva",
    guide: "Opas",
    codeLine: (code: string) => ` Koodi ${code} antaa 10 % alennuksen.`,
    promo: (code: string) => `10 % alennus koodilla ${code}`,
    freeShipping: "Ilmainen toimitus yli 90 $ tilauksiin valmistajan kaupassa",
  },
  sv: {
    siteName: "3F UL GEAR Finland",
    home: "Startsida",
    shop: "Butik",
    articles: "Artiklar",
    allArticles: "Alla artiklar",
    pitchGuide: "Så reser du Lanshan 2",
    search: "Sök",
    searchProducts: "Sök produkter",
    openMenu: "Öppna menyn",
    closeMenu: "Stäng menyn",
    mainMenu: "Huvudmeny",
    back: "Tillbaka",
    showAll: "Visa alla",
    copied: "Kopierad",
    withCode: "Med koden",
    priceInShop: "Priset bekräftas i den officiella butiken.",
    noProducts: "Inga produkter för den här sökningen.",
    image: "Bild",
    guide: "Guide",
    codeLine: (code: string) => ` Koden ${code} ger 10 % rabatt.`,
    promo: (code: string) => `10 % rabatt med koden ${code}`,
    freeShipping: "Fri frakt på beställningar över 90 $ i tillverkarens butik",
  },
} satisfies Record<Lang, Record<string, unknown>>;

/** The page's language from its route params (the layout already 404s anything else). */
export async function langOf(params: Promise<{ lang: string }>): Promise<Lang> {
  const { lang } = await params;
  return isLang(lang) ? lang : "fi";
}
