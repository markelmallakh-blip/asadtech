"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

/**
 * A badge that turns slowly as its section scrolls past — a quarter of a turn
 * at most, scrubbed, so it reads as a seal being set down rather than a spinner.
 */
export default function RotatingBadge({
  src,
  alt,
  /** Degrees swept across the section, from -sweep/2 to +sweep/2. */
  sweep = 24,
  className,
}: {
  src: string;
  alt: string;
  sweep?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const badge = ref.current;
    if (!badge) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        badge,
        { rotate: -sweep / 2 },
        {
          rotate: sweep / 2,
          ease: "none",
          scrollTrigger: {
            trigger: badge.closest("[data-badge-track]") ?? badge,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        },
      );
    }, badge);

    return () => ctx.revert();
  }, [sweep]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <Image src={src} alt={alt} fill sizes="180px" className="object-contain" />
    </div>
  );
}
