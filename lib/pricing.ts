import type { Product, Variation } from "@/lib/types";

const ACCESSORY_LABEL =
  /footprint|extra pole|dual-pole|extend part|transparent door|spare|glass\(|inner tent for extend|\btarp\b/i;

export type PriceView = {
  min: number | null;
  max: number | null;
  regularMin: number | null;
  regularMax: number | null;
};

function bounds(items: Variation[]): PriceView {
  const prices = items.map((item) => item.price);
  const regulars = items.map((item) => item.regular || item.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
    regularMin: Math.min(...regulars),
    regularMax: Math.max(...regulars),
  };
}

function mainVariations(variations: Variation[]) {
  const priced = variations.filter((item) => item.price > 0);
  if (priced.length <= 1) return priced;
  const peak = Math.max(...priced.map((item) => item.price));
  const main = priced.filter(
    (item) => !ACCESSORY_LABEL.test(item.label) || item.price > peak * 0.45,
  );
  return main.length > 0 ? main : priced;
}

export function priceView(product: Product): PriceView {
  const main = mainVariations(product.variations);
  if (main.length > 0) return bounds(main);

  if (product.onSale && product.eurSummary.length >= 2) {
    const [regular, current] = product.eurSummary;
    return {
      min: current,
      max: current,
      regularMin: regular,
      regularMax: regular,
    };
  }

  if (product.eurSummary.length > 0) {
    const sorted = [...product.eurSummary].sort((a, b) => a - b);
    const low = sorted[0];
    const high = sorted[sorted.length - 1];
    if (sorted.length >= 2 && low < high * 0.45) {
      return { min: high, max: high, regularMin: high, regularMax: high };
    }
    return { min: low, max: high, regularMin: low, regularMax: high };
  }

  return { min: null, max: null, regularMin: null, regularMax: null };
}

export function formatRange(min: number, max: number, format: (value: number) => string) {
  if (Math.abs(max - min) < 0.01) return format(min);
  return `${format(min)}–${format(max)}`;
}

const LABEL_RULES: Array<[RegExp, string]> = [
  [/Forest\s*Green/gi, "metsänvihreä"],
  [/Dark\s*Gr[ae]y/gi, "tummanharmaa"],
  [/Metal\s*Gr[ae]y/gi, "metallinharmaa"],
  [/Gr[ae]y\s*white/gi, "harmaavalkoinen"],
  [/Khaki\\?\/Brown/gi, "khaki/ruskea"],
  [/Khaki/gi, "khaki"],
  [/Black/gi, "musta"],
  [/Yellow/gi, "keltainen"],
  [/Orange/gi, "oranssi"],
  [/Purple/gi, "violetti"],
  [/White/gi, "valkoinen"],
  [/Brown/gi, "ruskea"],
  [/Green/gi, "vihreä"],
  [/Gr[ae]y/gi, "harmaa"],
  [/Footprint(?:\([^)]*\))?/gi, "aluskangas"],
  [/Full season/gi, "ympärivuotinen"],
  [/4[\s-]*season/gi, "4 vuodenajan"],
  [/3[\s-]*season/gi, "3 vuodenajan"],
  [/mesh inner/gi, "verkkoinen sisäteltta"],
  [/Solid Nylon/gi, "umpikankainen nailon"],
  [/Inner tent/gi, "sisäteltta"],
  [/Mesh/gi, "verkko"],
  [/MAIN TENT KIT/gi, "teltan peruspakkaus"],
  [/EXTEND PART/gi, "jatkososa"],
  [/TPU TRANSPARENT DOOR/gi, "läpinäkyvä TPU-ovi"],
  [/STOVE KIT/gi, "kamiinapaketti"],
  [/GLASS\(Spare parts\)/gi, "lasi (varaosa)"],
  [/Dual-Pole Clips & Extra Pole/gi, "kaksoiskiilat ja lisäkaari"],
  [/Single Wind Screen/gi, "yksi tuulisuoja"],
  [/Twin Wind Screen/gi, "kaksiosainen tuulisuoja"],
  [/T3 frame/gi, "T3-kehys"],
  [/T4 frame/gi, "T4-kehys"],
  [/\(2026 ver\)/gi, "(2026)"],
  [/2026 ver/gi, "2026"],
  [/Large/g, "suuri"],
  [/Small/g, "pieni"],
];

export function translateLabel(label: string) {
  let text = label.replace(/\\\//g, "/").replace(/\s+/g, " ").trim();
  for (const [pattern, replacement] of LABEL_RULES) {
    text = text.replace(pattern, replacement);
  }
  return text.replace(/\s+\/\s+/g, " / ").replace(/\s+–\s+/g, " – ");
}
