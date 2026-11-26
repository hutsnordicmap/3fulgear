import { ui, type Lang } from "@/lib/i18n";
import { formatRange, priceView } from "@/lib/pricing";
import { discounted, formatEur } from "@/lib/site";
import type { Product } from "@/lib/types";

export function PriceBlock({
  product,
  lang,
  large = false,
}: {
  product: Product;
  lang: Lang;
  large?: boolean;
}) {
  const view = priceView(product);
  const eur = (value: number) => formatEur(value, lang);
  if (view.min == null || view.max == null) {
    return (
      <p className="text-sm text-ink/70">{ui[lang].priceInShop}</p>
    );
  }

  const sale =
    view.regularMin != null &&
    view.regularMax != null &&
    view.regularMin > view.min + 0.01;

  return (
    <div>
      {sale && view.regularMin != null && view.regularMax != null ? (
        <p className="text-sm text-ink/45 line-through">
          {formatRange(view.regularMin, view.regularMax, eur)}
        </p>
      ) : null}
      <p className={large ? "text-3xl font-semibold tracking-tight" : "font-semibold"}>
        {formatRange(view.min, view.max, eur)}
      </p>
      <p className="mt-1 text-sm text-moss">
        {ui[lang].withCode} {formatRange(discounted(view.min), discounted(view.max), eur)}
      </p>
    </div>
  );
}
