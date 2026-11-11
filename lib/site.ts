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
  },
  {
    id: "freestanding-tent",
    path: "itsekantavat-teltat",
    title: "Itsekantavat teltat",
    menu: "Itsekantavat",
    intro:
      "Itsekantavissa malleissa kaaret pitävät teltan pystyssä ilman vaellussauvoja. Valikoimassa on yhden ja useamman hengen kupoli- ja tunnelimalleja.",
    image: "https://3fulgear.com/wp-content/uploads/2023/05/freestanding.jpg",
  },
  {
    id: "packs",
    path: "rinkat",
    title: "Ultrakevyet rinkat",
    menu: "Rinkat",
    intro:
      "Rinkat on nimetty valmistajan vaellusreittien mukaan. Mukana ovat päiväreput sekä kehikolliset mallit pidemmille retkille.",
    image: "https://3fulgear.com/wp-content/uploads/2023/05/ulpacks.jpg",
  },
  {
    id: "rain-gear",
    path: "sadevaatteet",
    title: "Sadevaatteet",
    menu: "Sadevaatteet",
    intro:
      "Ultrakevyet sadetakit ja -housut on tehty pitkään märkään keliin. Kankaan hengittävyys on valmistajan ilmoituksen mukaan korkea, ja leikkaus on väljä.",
    image: "https://3fulgear.com/wp-content/uploads/2026/01/UL-rainjacket-grey.jpg",
  },
  {
    id: "accessories",
    path: "tarvikkeet",
    title: "Tarvikkeet",
    menu: "Tarvikkeet",
    intro:
      "Kiilat, aluskankaat, spritikeittimet, sadesuojat ja teltan varaosat samasta valikoimasta kuin valmistajan kaupassa.",
    image: "https://3fulgear.com/wp-content/uploads/2023/10/BF-S03-alcohol-stove-burn-2-1.jpg",
  },
  {
    id: "stoves",
    path: "kamiinat",
    title: "Kuumateltat ja kamiinat",
    menu: "Kamiinat",
    intro:
      "Kamiinat ja kuumateltat on tarkoitettu tukikohtaan ja talviretkeen. Osa tuotteista on painavia, eikä niihin aina sisälly valmistajan ilmaispostia.",
    image: "https://3fulgear.com/wp-content/uploads/2024/04/car-camping-tent-stove-1-1.jpg",
  },
  {
    id: "tarps",
    path: "laavukankaat",
    title: "Laavukankaat",
    menu: "Laavukankaat",
    intro:
      "Kevyet laavukankaat ja niille tarkoitetut kaaret sekä kiilat. Koko valitaan valmistajan kaupassa.",
    image: "https://3fulgear.com/wp-content/uploads/2021/10/tarp.jpg",
  },
  {
    id: "repair-parts",
    path: "varaosat",
    title: "Varaosat",
    menu: "Varaosat",
    intro:
      "Soljet ja muut pienet varaosat. Takuun piiriin kuuluviin osiin valmistaja pyytää ottamaan yhteyttä ennen ostamista, koska osa niistä toimitetaan postikulua vastaan.",
    image: "https://3fulgear.com/wp-content/uploads/2021/10/logo%E6%A0%87%E5%87%86.png",
  },
];

export function categoryById(id: string) {
  return categories.find((category) => category.id === id);
}

export function categoryByPath(path: string) {
  return categories.find((category) => category.path === path);
}

export function affiliateUrl(permalink: string) {
  const url = new URL(permalink);
  url.searchParams.set("no", AFFILIATE_ID);
  if (!url.searchParams.has("currency")) {
    url.searchParams.set("currency", "EUR");
  }
  return url.toString();
}

export function formatEur(value: number) {
  return new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function discounted(value: number) {
  return Math.round(value * (1 - DISCOUNT_RATE) * 100) / 100;
}
