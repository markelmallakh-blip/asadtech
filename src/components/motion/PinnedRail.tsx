"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

/**
 * Pins a section and converts vertical scroll into horizontal travel.
 *
 * The section is exactly one viewport tall and lays out as a column, so the
 * rail takes whatever height is left over after the header and title. Panels
 * inside it stretch to that height and therefore always fit — no clamping or
 * magic numbers to keep in sync with the type scale.
 *
 * A progress bar under the rail shows how far through the horizontal travel
 * you are, since a pinned section otherwise gives no sense of length.
 *
 * Below `minWidth` the rail degrades to a normal swipeable overflow strip,
 * which is the right behaviour on phones anyway.
 */
export default function PinnedRail({
  children,
  header,
  className,
  railClassName,
  minWidth = 1024,
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
  railClassName?: string;
  minWidth?: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;
    const progress = progressRef.current;
    if (!section || !rail) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        [`(min-width: ${minWidth}px)`]: () => {
          const distance = () => rail.scrollWidth - window.innerWidth;
          if (distance() <= 0) return;

          gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });

          gsap.to(rail, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) =>
                gsap.set(progress, { scaleX: self.progress }),
            },
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [minWidth]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "relative flex flex-col justify-center gap-10 overflow-hidden",
        /* One viewport tall, clear of the fixed header. */
        "lg:h-screen lg:gap-8 lg:pt-[85px] lg:pb-10",
        className,
      )}
    >
      {header}

      <div
        ref={railRef}
        className={cn(
          "no-scrollbar flex overflow-x-auto lg:min-h-0 lg:flex-1 lg:overflow-visible",
          railClassName,
        )}
      >
      {/* Explicit edge spacers rather than padding: an overflowing flex
          container does not reliably report padding-right in scrollWidth, so
          the last card would otherwise finish flush against the viewport. */}
      <span aria-hidden className="w-4 shrink-0 lg:w-[60px]" />
        {children}
      {/* Explicit edge spacers rather than padding: an overflowing flex
          container does not reliably report padding-right in scrollWidth, so
          the last card would otherwise finish flush against the viewport. */}
      <span aria-hidden className="w-4 shrink-0 lg:w-[60px]" />
      </div>

      {/* -------------------------------------------------- progress bar */}
      <div
        aria-hidden
        className="mx-auto hidden h-[3px] w-[280px] shrink-0 overflow-hidden rounded-full bg-blue-20 lg:block"
      >
        <div ref={progressRef} className="h-full w-full rounded-full bg-blue" />
      </div>
    </div>
  );
}
