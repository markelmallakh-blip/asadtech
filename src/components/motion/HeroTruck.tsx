"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

/**
 * The hero vehicle: drives in from off-road on load, then keeps a slow idle
 * float and drifts against the scroll.
 *
 * Transforms are kept on separate elements so they never fight each other —
 * arrival on the outer node, scroll drift on the inner one. Movement is kept
 * deliberately small: the truck should sit on the road, not hover above it.
 * The ground shadow is baked into the supplied artwork.
 */
export default function HeroTruck({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const arrivalRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const arrival = arrivalRef.current;
    const float = floatRef.current;
    const drift = driftRef.current;
    if (!arrival || !float || !drift) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(arrival, { opacity: 1 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* Arrival: rolls in from down the road — further away, further right. */
      gsap.timeline({ delay: 0.35 }).fromTo(
        arrival,
        { xPercent: 10, yPercent: 0, scale: 0.96, opacity: 0 },
        {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1.9,
          ease: "expo.out",
        },
      );

      /* No idle bob: a vehicle standing on a road that rises and falls on a
         loop reads as hovering, not parked. The only movement is scroll. */

      /* Scroll drift, deliberately slight — just enough to separate the truck
         from the backdrop without lifting it off the tarmac. */
      gsap.fromTo(
        drift,
        { yPercent: 0 },
        {
          yPercent: -3,
          ease: "none",
          scrollTrigger: {
            trigger: arrival.closest("section") ?? arrival,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, arrival);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={arrivalRef} className={cn("relative opacity-0", className)}>
      <div ref={floatRef} className="relative h-full w-full">
        <div ref={driftRef} className="relative h-full w-full">
          {/* No synthetic shadow here: the supplied artwork carries its
              own ground shadow, and layering a second reads as a double. */}
          {children}
        </div>
      </div>
    </div>
  );
}
