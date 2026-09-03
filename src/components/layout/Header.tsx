"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { en } from "@/content/en";
import Button from "@/components/ui/Button";
import { ChevronDown } from "@/components/ui/Icons";

/**
 * Transparent over the hero, then glass-backed once the page scrolls.
 * Uses logical padding so the RTL locale mirrors without extra CSS.
 */
export default function Header() {
  const { links, languageLabel, languageHref, cta } = en.nav;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
    >
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
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full bg-white/10 p-1.5 backdrop-blur-md">
            {links.map((link) => {
              const active = pathname === link.href;
              const children = "children" in link ? link.children : undefined;

              return (
                <li key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-body-sm font-medium uppercase tracking-[0.04em] transition-colors duration-300",
                      active
                        ? "bg-white/90 text-navy"
                        : "text-white/85 hover:text-white",
                    )}
                  >
                    {link.label}
                    {children && <ChevronDown className="size-3.5" />}
                  </Link>

                  {children && (
                    <div className="invisible absolute start-0 top-full pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="min-w-56 rounded-2xl bg-white p-2 shadow-[0_24px_60px_-20px_rgba(13,14,27,0.4)]">
                        {children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block rounded-xl px-4 py-2.5 text-body-sm font-medium text-ink transition-colors duration-200 hover:bg-blue-10 hover:text-blue"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-0.5 bg-current transition-transform duration-300",
                  open && "top-1/2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-0.5 bg-current transition-transform duration-300",
                  open && "bottom-1/2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ----------------------------------------------------- mobile drawer */}
      <div
        className={cn(
          "grid overflow-hidden bg-navy/95 backdrop-blur-xl transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <nav className="shell flex flex-col gap-1 py-6">
            {links.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-h6 text-white"
                >
                  {link.label}
                </Link>
                {"children" in link && link.children && (
                  <div className="flex flex-col gap-1 ps-4 pb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-body-sm text-white/70"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-6">
              <Link
                href={languageHref}
                onClick={() => setOpen(false)}
                className="text-body font-medium text-white/85"
              >
                {languageLabel}
              </Link>
              <Button href="/en/contact" variant="primary" size="md">
                {cta}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
