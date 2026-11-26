import { ui, type Lang } from "@/lib/i18n";
import { DISCOUNT_CODE } from "@/lib/site";

export function PromoBar({ lang }: { lang: Lang }) {
  return (
    <div className="bg-[#f4f4f4] text-center text-[12px] text-[#777]">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2">
        <span>{ui[lang].promo(DISCOUNT_CODE)}</span>
        <span className="hidden sm:inline">{ui[lang].freeShipping}</span>
      </div>
    </div>
  );
}
