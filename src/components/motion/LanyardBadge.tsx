"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { cn } from "@/lib/utils";

/**
 * The staff name tag hanging in the careers band (Figma 69:8466), swinging on
 * hover.
 *
 * It pivots from the top of the lanyard rather than the middle of the card, so
 * the whole ribbon-and-badge turns as one hanging object. Entering from the
 * left pushes it right and vice versa, then `elastic.out` lets it lose energy
 * over a couple of swings the way a real pass on a lanyard does — settling back
 * to its resting tilt, not to square.
 */
export default function LanyardBadge({
  src,
  alt,
  /** Resting angle, in degrees — the hang it returns to after a swing. */
  tilt = 0,
  className,
}: {
  src: string;
  alt: string;
  tilt?: number;
  className?: string;
}) {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const badge = badgeRef.current;
    if (!badge) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(badge, { transformOrigin: "50% 0%" });

    const swing = (event: PointerEvent) => {
      const box = badge.getBoundingClientRect();
      /* Push away from the side the pointer came in on. */
      const direction = event.clientX < box.left + box.width / 2 ? 1 : -1;

      gsap
        .timeline()
        .to(badge, {
          rotate: tilt + 9 * direction,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(badge, {
          rotate: tilt,
          duration: 1.9,
          ease: "elastic.out(1, 0.26)",
        });
    };

    badge.addEventListener("pointerenter", swing);
    return () => {
      badge.removeEventListener("pointerenter", swing);
      gsap.killTweensOf(badge);
    };
  }, [tilt]);

  return (
    <div
      ref={badgeRef}
      /* Inline so the hang is right without JS and under reduced motion */
      style={{ transform: `rotate(${tilt}deg)` }}
      className={cn("relative", className)}
    >
      <Image src={src} alt={alt} fill sizes="260px" className="object-contain" />
    </div>
  );
}
