"use client";

import { href, type Lang } from "@/lib/i18n";
import { usePagePath } from "@/lib/use-page-path";

/** FI | SV, like huts.fi. Keeps the visitor on the same page in the other language. */
export function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePagePath();
  const path = pathname === "/sv" ? "/" : pathname.startsWith("/sv/") ? pathname.slice(3) : pathname;

  return (
    <div className="flex items-center gap-1 text-xs font-semibold select-none">
      {(["fi", "sv"] as const).map((target, index) => (
        <span key={target} className="flex items-center gap-1">
          {index > 0 ? <span className="text-[#ccc]">|</span> : null}
          {target === lang ? (
            <span className="px-1 py-2 text-[#222]">{target.toUpperCase()}</span>
          ) : (
            <a href={href(target, path)} hrefLang={target} className="px-1 py-2 text-[#999] hover:text-[#e36159]">
              {target.toUpperCase()}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}
