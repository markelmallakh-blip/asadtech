"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

/**
 * Background line work for light sections: two strokes meeting at an apex,
 * echoing the peak of the Asad logo mark at room scale.
 *
 * Both strokes share one parallax layer so the apex stays joined, and each
 * draws itself on from the foot upward as the section arrives.
 *
 * Purely ornamental: hidden from assistive tech and never hit-testable.
 */
export default function DrawnLines({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const strokes = gsap.utils.toArray<SVGGeometryElement>("[data-stroke]", root);

      /* set + to, never fromTo: a fromTo re-renders its start values on
         refresh and would rub the drawn lines back out. */
      strokes.forEach((stroke) => {
        const length = stroke.getTotalLength();
        gsap.set(stroke, { strokeDasharray: length, strokeDashoffset: length });
      });

      gsap.to(strokes, {
        strokeDashoffset: 0,
        duration: 2.4,
        ease: "power2.inOut",
        stagger: 0.18,
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      if (reduced) return;

      gsap.fromTo(
        root.querySelector("[data-layer]"),
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  const line = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    vectorEffect: "non-scaling-stroke" as const,
  };

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden text-blue-20",
        className,
      )}
    >
      <div data-layer className="absolute inset-0">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          {/* the two sides of the mark's peak, drawn from the feet up */}
          <path data-stroke {...line} d="M170 960 L760 70" />
          <path data-stroke {...line} d="M1350 960 L760 70" />
        </svg>
      </div>
    </div>
  );
}
