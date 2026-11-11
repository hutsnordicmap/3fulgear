"use client";

import { useState } from "react";
import { DISCOUNT_CODE } from "@/lib/site";

export function CodeButton({ light = false }: { light?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(DISCOUNT_CODE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={
        light
          ? "rounded-full border border-white/30 px-3 py-1 font-semibold tracking-wide text-white hover:bg-white/10"
          : "rounded-full bg-ink px-3 py-1 font-semibold tracking-wide text-paper hover:bg-moss"
      }
    >
      {copied ? "Kopioitu" : DISCOUNT_CODE}
    </button>
  );
}
