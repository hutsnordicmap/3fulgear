import { formatRange, priceView } from "@/lib/pricing";
import { discounted, formatEur } from "@/lib/site";
import type { Product } from "@/lib/types";

export function PriceBlock({
  product,
  large = false,
}: {
  product: Product;
  large?: boolean;
}) {
  const view = priceView(product);
  if (view.min == null || view.max == null) {
    return (
      <p className="text-sm text-ink/70">Hinta vahvistetaan virallisessa kaupassa.</p>
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
          {formatRange(view.regularMin, view.regularMax, formatEur)}
        </p>
      ) : null}
      <p className={large ? "text-3xl font-semibold tracking-tight" : "font-semibold"}>
        {formatRange(view.min, view.max, formatEur)}
      </p>
      <p className="mt-1 text-sm text-moss">
        Koodilla {formatRange(discounted(view.min), discounted(view.max), formatEur)}
      </p>
    </div>
  );
}
