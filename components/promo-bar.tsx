import { CodeButton } from "@/components/code-button";

export function PromoBar() {
  return (
    <div className="bg-moss text-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-sm">
        <span>10 % alennus virallisessa kaupassa koodilla</span>
        <CodeButton light />
      </div>
    </div>
  );
}
