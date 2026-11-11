"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/lib/navigation";
import { LOGO_URL } from "@/lib/site";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-3.5 w-3.5 transition-transform ${className}`}>
      <path
        d="M5 7.5 10 12.5 15 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12.5 4.5 7 10l5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 16.5 20 20.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Thumb({ src }: { src?: string }) {
  if (!src) return <span className="h-10 w-10 shrink-0 bg-[#f3f3f3]" />;
  return <img src={src} alt="" className="h-10 w-10 shrink-0 object-contain" />;
}

function current(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [openId, setOpenId] = useState<string | null>(null);
  const [alignRight, setAlignRight] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [panelId, setPanelId] = useState<string | null>(null);
  const [menuPath, setMenuPath] = useState(pathname);
  const closeTimer = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [overlayTop, setOverlayTop] = useState(120);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpenId(null);
    setMobileOpen(false);
    setPanelId(null);
  }

  const panel = items.find((item) => item.id === panelId) ?? null;

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const onChange = () => {
      if (!media.matches) setOpenId(null);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!openId && !mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenId(null);
      setMobileOpen(false);
      setPanelId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId, mobileOpen]);

  function clearTimer() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }

  function openDesktop(id: string, element: HTMLElement) {
    clearTimer();
    const rect = element.getBoundingClientRect();
    setAlignRight(rect.left + 320 > window.innerWidth - 16);
    if (headerRef.current) setOverlayTop(headerRef.current.getBoundingClientRect().bottom);
    setOpenId(id);
  }

  function scheduleClose() {
    clearTimer();
    closeTimer.current = window.setTimeout(() => setOpenId(null), 140);
  }

  function closeMobile() {
    setMobileOpen(false);
    setPanelId(null);
  }

  return (
    <header ref={headerRef} className="relative border-b border-[#eee] bg-white text-[#222529]">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link href="/" className="shrink-0">
            <img src={LOGO_URL} alt="3F UL GEAR" className="h-9 w-auto" />
          </Link>
          <form action="/haku" className="ml-auto hidden xl:block">
            <label className="sr-only" htmlFor="q">
              Hae tuotteita
            </label>
            <input
              id="q"
              name="q"
              placeholder="Haku"
              className="w-40 border border-[#e7e7e7] px-3 py-2 text-xs outline-none focus:border-[#222]"
            />
          </form>
          <div className="ml-auto flex items-center gap-1 xl:ml-0 xl:hidden">
            <Link href="/haku" aria-label="Haku" className="flex h-11 w-11 items-center justify-center">
              <SearchIcon />
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Sulje valikko" : "Avaa valikko"}
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center"
              onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <nav aria-label="Päävalikko" className="hidden items-center justify-center gap-4 border-t border-[#eee] xl:flex">
          {items.map((item) => {
            const open = openId === item.id;
            const active = openId === null && current(pathname, item.href);
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={(event) => {
                  if (item.children) openDesktop(item.id, event.currentTarget);
                  else setOpenId(null);
                }}
                onMouseLeave={scheduleClose}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) scheduleClose();
                }}
              >
                <Link
                  href={item.href}
                  aria-expanded={item.children ? open : undefined}
                  className={`flex items-center gap-1 py-3 text-[11px] font-semibold tracking-[0.14em] uppercase ${
                    open || active ? "text-[#e36159]" : "hover:text-[#e36159]"
                  }`}
                  onFocus={(event) => {
                    if (item.children) openDesktop(item.id, event.currentTarget.parentElement ?? event.currentTarget);
                  }}
                >
                  {item.label}
                  {item.children ? <Chevron className={open ? "rotate-180" : ""} /> : null}
                </Link>
                {open && item.children ? (
                  <div
                    className={`absolute top-full z-50 max-h-[70vh] w-[320px] overflow-y-auto border border-[#ececec] bg-white py-2 shadow-[0_16px_40px_rgba(0,0,0,0.12)] ${
                      alignRight ? "right-0" : "left-0"
                    }`}
                    onMouseEnter={clearTimer}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#222] hover:bg-[#f6f6f6]"
                      >
                        <Thumb src={child.image} />
                        <span className="leading-5">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      </div>

      {openId ? (
        <button
          type="button"
          aria-label="Sulje valikko"
          className="fixed inset-x-0 bottom-0 z-40 hidden bg-black/45 xl:block"
          style={{ top: overlayTop }}
          onClick={() => setOpenId(null)}
        />
      ) : null}

      {mobileOpen ? (
        <div className="fixed inset-0 z-[70] flex flex-col bg-white xl:hidden">
          <div className="flex items-center justify-between border-b border-[#eee] px-4 py-3">
            <Link href="/" onClick={closeMobile}>
              <img src={LOGO_URL} alt="3F UL GEAR" className="h-9 w-auto" />
            </Link>
            <button
              type="button"
              aria-label="Sulje valikko"
              className="flex h-11 w-11 items-center justify-center"
              onClick={closeMobile}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {panel?.children ? (
              <div>
                <button
                  type="button"
                  className="flex w-full items-center gap-2 border-b border-[#eee] px-5 py-4 text-sm font-medium text-[#e36159]"
                  onClick={() => setPanelId(null)}
                >
                  <ChevronLeft />
                  Takaisin
                </button>
                <div className="flex items-center justify-between border-b border-[#eee] px-5 py-4">
                  <p className="text-base font-semibold">{panel.label}</p>
                  <Link href={panel.href} onClick={closeMobile} className="text-sm text-[#e36159]">
                    Näytä kaikki
                  </Link>
                </div>
                {panel.children.map((child) => (
                  <Link
                    key={child.id}
                    href={child.href}
                    onClick={closeMobile}
                    className="flex items-center gap-4 border-b border-[#eee] px-5 py-3.5 text-[15px]"
                  >
                    <Thumb src={child.image} />
                    <span>{child.label}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div>
                <form action="/haku" className="border-b border-[#eee] px-5 py-4">
                  <label className="sr-only" htmlFor="mobile-q">
                    Hae tuotteita
                  </label>
                  <input
                    id="mobile-q"
                    name="q"
                    placeholder="Hae tuotteita"
                    className="w-full border border-[#e7e7e7] px-3 py-2.5 text-sm outline-none focus:border-[#222]"
                  />
                </form>
                {items.map((item) =>
                  item.children ? (
                    <button
                      key={item.id}
                      type="button"
                      className="flex w-full items-center justify-between border-b border-[#eee] px-5 py-4 text-left text-[16px]"
                      onClick={() => setPanelId(item.id)}
                    >
                      <span>{item.label}</span>
                      <Chevron className="-rotate-90 text-[#999]" />
                    </button>
                  ) : (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={closeMobile}
                      className="block border-b border-[#eee] px-5 py-4 text-[16px]"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
