import { locale, type Lang } from "@/lib/i18n";

export const SITE_URL = "https://3fulgear.fi";
export const OFFICIAL_ORIGIN = "https://3fulgear.com";
export const AFFILIATE_ID = "647";
export const DISCOUNT_CODE = "HUTSNORDIC10";
export const DISCOUNT_RATE = 0.1;

export const LOGO_URL =
  "https://3fulgear.com/wp-content/uploads/2021/10/logo%E6%A0%87%E5%87%86.png";

export type Category = {
  id: string;
  path: string;
  title: string;
  menu: string;
  intro: string;
  image: string;
  sv: { title: string; menu: string; intro: string };
};

export const categories: Category[] = [
  {
    id: "ultralight-tent",
    path: "ultrakevyet-teltat",
    title: "Ultrakevyet teltat",
    menu: "Teltat",
    intro:
      "Lanshan-sarja on 3F UL GEAR -valmistajan tunnetuin sauvatelttojen mallisto. Teltat ovat kaksiseinämäisiä tai yksiseinämäisiä, ja ne pystytetään vaellussauvalla.",
    image: "https://3fulgear.com/wp-content/uploads/2023/05/ultents.jpg",
    sv: {
      title: "Ultralätta tält",
      menu: "Tält",
      intro:
        "Lanshan-serien är tillverkaren 3F UL GEARs mest kända serie av stavtält. Tälten är dubbelväggiga eller enkelväggiga och reses med vandringsstavar.",
    },
  },
  {
    id: "freestanding-tent",
    path: "itsekantavat-teltat",
    title: "Itsekantavat teltat",
    menu: "Itsekantavat",
    intro:
      "Itsekantavissa malleissa kaaret pitävät teltan pystyssä ilman vaellussauvoja. Valikoimassa on yhden ja useamman hengen kupoli- ja tunnelimalleja.",
    image: "https://3fulgear.com/wp-content/uploads/2023/05/freestanding.jpg",
    sv: {
      title: "Fristående tält",
      menu: "Fristående",
      intro:
        "I de fristående modellerna håller bågarna tältet uppe utan vandringsstavar. I sortimentet finns kupol- och tunneltält för en eller flera personer.",
    },
  },
  {
    id: "packs",
    path: "rinkat",
    title: "Ultrakevyet rinkat",
    menu: "Rinkat",
    intro:
      "Rinkat on nimetty valmistajan vaellusreittien mukaan. Mukana ovat päiväreput sekä kehikolliset mallit pidemmille retkille.",
    image: "https://3fulgear.com/wp-content/uploads/2023/05/ulpacks.jpg",
    sv: {
      title: "Ultralätta ryggsäckar",
      menu: "Ryggsäckar",
      intro:
        "Ryggsäckarna har fått namn efter tillverkarens vandringsleder. Här finns dagsryggsäckar och modeller med ram för längre turer.",
    },
  },
  {
    id: "rain-gear",
    path: "sadevaatteet",
    title: "Sadevaatteet",
    menu: "Sadevaatteet",
    intro:
      "Ultrakevyet sadetakit ja -housut on tehty pitkään märkään keliin. Kankaan hengittävyys on valmistajan ilmoituksen mukaan korkea, ja leikkaus on väljä.",
    image: "https://3fulgear.com/wp-content/uploads/2026/01/UL-rainjacket-grey.jpg",
    sv: {
      title: "Regnkläder",
      menu: "Regnkläder",
      intro:
        "De ultralätta regnjackorna och regnbyxorna är gjorda för långa perioder av blött väder. Enligt tillverkaren andas tyget bra, och skärningen är rymlig.",
    },
  },
  {
    id: "accessories",
    path: "tarvikkeet",
    title: "Tarvikkeet",
    menu: "Tarvikkeet",
    intro:
      "Kiilat, aluskankaat, spritikeittimet, sadesuojat ja teltan varaosat samasta valikoimasta kuin valmistajan kaupassa.",
    image: "https://3fulgear.com/wp-content/uploads/2023/10/BF-S03-alcohol-stove-burn-2-1.jpg",
    sv: {
      title: "Tillbehör",
      menu: "Tillbehör",
      intro:
        "Tältpinnar, underlag, spritkök, regnskydd och reservdelar till tält ur samma sortiment som i tillverkarens butik.",
    },
  },
  {
    id: "stoves",
    path: "kamiinat",
    title: "Kuumateltat ja kamiinat",
    menu: "Kamiinat",
    intro:
      "Kamiinat ja kuumateltat on tarkoitettu tukikohtaan ja talviretkeen. Osa tuotteista on painavia, eikä niihin aina sisälly valmistajan ilmaispostia.",
    image: "https://3fulgear.com/wp-content/uploads/2024/04/car-camping-tent-stove-1-1.jpg",
    sv: {
      title: "Varmtält och kaminer",
      menu: "Kaminer",
      intro:
        "Kaminerna och varmtälten är tänkta för baslägret och vinterturen. En del av produkterna är tunga, och de omfattas inte alltid av tillverkarens fria frakt.",
    },
  },
  {
    id: "tarps",
    path: "laavukankaat",
    title: "Laavukankaat",
    menu: "Laavukankaat",
    intro:
      "Kevyet laavukankaat ja niille tarkoitetut kaaret sekä kiilat. Koko valitaan valmistajan kaupassa.",
    image: "https://3fulgear.com/wp-content/uploads/2021/10/tarp.jpg",
    sv: {
      title: "Tarpar",
      menu: "Tarpar",
      intro:
        "Lätta tarpar med tillhörande bågar och tältpinnar. Storleken väljs i tillverkarens butik.",
    },
  },
  {
    id: "repair-parts",
    path: "varaosat",
    title: "Varaosat",
    menu: "Varaosat",
    intro:
      "Soljet ja muut pienet varaosat. Takuun piiriin kuuluviin osiin valmistaja pyytää ottamaan yhteyttä ennen ostamista, koska osa niistä toimitetaan postikulua vastaan.",
    image: "https://3fulgear.com/wp-content/uploads/2021/10/logo%E6%A0%87%E5%87%86.png",
    sv: {
      title: "Reservdelar",
      menu: "Reservdelar",
      intro:
        "Spännen och andra små reservdelar. För delar som omfattas av garantin ber tillverkaren att man tar kontakt innan man köper, eftersom en del av dem skickas mot portokostnad.",
    },
  },
];

/** The category with its title, menu word and intro in the page's language. */
export function localCategory(category: Category, lang: Lang): Category {
  return lang === "sv" ? { ...category, ...category.sv } : category;
}

export function localCategories(lang: Lang) {
  return categories.map((category) => localCategory(category, lang));
}

export function categoryById(id: string, lang: Lang = "fi") {
  const category = categories.find((entry) => entry.id === id);
  return category ? localCategory(category, lang) : undefined;
}

export function categoryByPath(path: string, lang: Lang = "fi") {
  const category = categories.find((entry) => entry.path === path);
  return category ? localCategory(category, lang) : undefined;
}

export function affiliateUrl(permalink: string) {
  const url = new URL(permalink);
  url.searchParams.set("no", AFFILIATE_ID);
  if (!url.searchParams.has("currency")) {
    url.searchParams.set("currency", "EUR");
  }
  return url.toString();
}

export function formatEur(value: number, lang: Lang = "fi") {
  return new Intl.NumberFormat(locale[lang], {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function discounted(value: number) {
  return Math.round(value * (1 - DISCOUNT_RATE) * 100) / 100;
}
