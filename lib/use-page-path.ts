"use client";

import { usePathname } from "next/navigation";

/**
 * The address the visitor sees. Finnish pages are rewritten to app/[lang] with "fi", and
 * usePathname() can report that inner "/fi/…" path, so it is taken off here.
 */
export function usePagePath() {
  const pathname = usePathname() || "/";
  if (pathname === "/fi") return "/";
  return pathname.startsWith("/fi/") ? pathname.slice(3) : pathname;
}
