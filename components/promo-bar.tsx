import { DISCOUNT_CODE } from "@/lib/site";

export function PromoBar() {
  return (
    <div className="bg-[#f4f4f4] text-center text-[12px] text-[#777]">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2">
        <span>10 % alennus koodilla {DISCOUNT_CODE}</span>
        <span className="hidden sm:inline">Ilmainen toimitus yli 90 $ tilauksiin valmistajan kaupassa</span>
      </div>
    </div>
  );
}
