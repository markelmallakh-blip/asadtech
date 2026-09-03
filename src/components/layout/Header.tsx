"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";
import { cn } from "@/lib/utils";
import { en } from "@/content/en";
import Button from "@/components/ui/Button";
import { ChevronDown } from "@/components/ui/Icons";

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

/**
 * Transparent over the hero, then glass-backed once the page scrolls.
 * Uses logical padding so the RTL locale mirrors without extra CSS.
 *
 * "Our Solutions" has no page of its own, so on desktop it is a button that
 * holds its list open (hover shows it too), and on a phone it folds the list
 * out inside the menu. The phone menu itself wipes down from under the bar
 * and its links follow one after another.
 */
export default function Header() {
  const { links, languageLabel, languageHref, cta } = en.nav;
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  /** Which group is unfolded in the phone menu. */
  const [unfolded, setUnfolded] = useState<string | null>(null);
  /** Which desktop list has been clicked open and should stay so. */
  const [pinned, setPinned] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Navigating closes everything — reset during render, as React advises
     for state that follows a prop, rather than a frame late in an effect. */
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
    setPinned(null);
  }

  /* The page holds still behind the phone menu */
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  /* A pinned list lets go on an outside click or Escape */
  useEffect(() => {
    if (!pinned) return;
    const onDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setPinned(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPinned(null);
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [pinned]);

  const isActive = (link: (typeof links)[number]) =>
    "href" in link
      ? pathname === link.href
      : link.children.some((child) => pathname.startsWith(child.href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Blur gradient rather than a solid bar: always present so the nav is
          readable over photography, and fading out so it never reads as a
          block of colour sitting on the page. */}
      <div
        aria-hidden
        className={cn(
          "header-veil backdrop-blur-[16px] backdrop-saturate-125 transition-opacity duration-500",
          /* Full strength even at the top: the bar has to stay legible over
             whatever section happens to be behind it. */
          scrolled ? "opacity-100" : "opacity-95",
        )}
      />

      <div className="shell relative flex h-[85px] items-center justify-between gap-6">
        <Link href="/en" className="shrink-0" aria-label="Asadtech — home">
          <Image
            src="/logos/logo-white.svg"
            alt="Asadtech"
            width={160}
            height={53}
            priority
            className="h-[46px] w-auto"
          />
        </Link>

        {/* ---------------------------------------------------- desktop nav */}
        <nav ref={navRef} className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full bg-white/10 p-1.5 backdrop-blur-md">
            {links.map((link) => {
              const active = isActive(link);
              const item =
                "flex items-center gap-1 rounded-full px-4 py-2 text-body-sm font-medium uppercase tracking-[0.04em] transition-colors duration-300";
              const skin = active ? "bg-white/90 text-navy" : "text-white/85 hover:text-white";

              if ("href" in link) {
                return (
                  <li key={link.label}>
                    <Link href={link.href} className={cn(item, skin)}>
                      {link.label}
                    </Link>
                  </li>
                );
              }

              const held = pinned === link.label;
              return (
                <li key={link.label} className="group relative">
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={held}
                    onClick={() => setPinned((current) => (current === link.label ? null : link.label))}
                    className={cn(item, skin)}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-300",
                        held && "rotate-180",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "absolute start-0 top-full pt-3 transition-all duration-300",
                      held
                        ? "visible opacity-100"
                        : "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                    )}
                  >
                    <ul
                      role="menu"
                      className="min-w-56 rounded-2xl bg-white p-2 shadow-[0_24px_60px_-20px_rgba(13,14,27,0.4)]"
                    >
                      {link.children.map((child) => (
                        <li key={child.label} role="none">
                          <Link
                            role="menuitem"
                            href={child.href}
                            className="block rounded-xl px-4 py-2.5 text-body-sm font-medium text-ink transition-colors duration-200 hover:bg-blue-10 hover:text-blue"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* --------------------------------------------------- right cluster */}
        <div className="flex items-center gap-4">
          <Link
            href={languageHref}
            className="hidden text-body-sm font-medium text-white/85 transition-colors duration-300 hover:text-white lg:block"
          >
            {languageLabel}
          </Link>

          <Button href="/en/contact" variant="primary" size="md" className="hidden lg:inline-flex">
            {cta}
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-0.5 bg-current transition-[transform,top] duration-400",
                  EASE,
                  open && "top-1/2 -translate-y-1/2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-0.5 bg-current transition-[transform,bottom] duration-400",
                  EASE,
                  open && "bottom-1/2 translate-y-1/2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------ phone menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-x-0 top-[85px] bottom-0 flex flex-col bg-navy/95 backdrop-blur-xl transition-[clip-path,visibility] duration-700 lg:hidden",
          EASE,
          open ? "visible [clip-path:inset(0_0_0_0)]" : "invisible [clip-path:inset(0_0_100%_0)]",
        )}
      >
        <nav className="shell flex flex-1 flex-col gap-1 overflow-y-auto py-6">
          {links.map((link, i) => {
            const entrance = cn(
              "transition-[opacity,transform] duration-500",
              EASE,
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            );
            const delay = { transitionDelay: open ? `${120 + i * 60}ms` : "0ms" };

            if ("href" in link) {
              return (
                <div key={link.label} className={entrance} style={delay}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-h6 text-white"
                  >
                    {link.label}
                  </Link>
                </div>
              );
            }

            const shown = unfolded === link.label;
            return (
              <div key={link.label} className={entrance} style={delay}>
                <button
                  type="button"
                  aria-expanded={shown}
                  onClick={() => setUnfolded((current) => (current === link.label ? null : link.label))}
                  className="flex w-full items-center justify-between py-3 text-h6 text-white"
                >
                  {link.label}
                  <ChevronDown
                    className={cn("size-5 transition-transform duration-300", shown && "rotate-180")}
                  />
                </button>
                <div
                  className={cn("grid transition-[grid-template-rows] duration-500", EASE)}
                  style={{ gridTemplateRows: shown ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="flex flex-col gap-1 ps-4 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="py-2 text-body text-white/70 transition-colors duration-200 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className={cn(
              "mt-auto flex flex-col gap-5 border-t border-white/15 pt-6 transition-[opacity,transform] duration-500",
              EASE,
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
            style={{ transitionDelay: open ? `${120 + links.length * 60}ms` : "0ms" }}
          >
            <Link
              href={languageHref}
              onClick={() => setOpen(false)}
              className="text-body font-medium text-white/85"
            >
              {languageLabel}
            </Link>
            <Button href="/en/contact" variant="primary" size="lg">
              {cta}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
