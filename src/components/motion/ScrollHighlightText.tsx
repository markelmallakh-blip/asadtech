"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

/**
 * Long-form paragraph that inks in word by word as the section scrolls,
 * matching the grey-to-dark treatment in the Figma "About Asadtech" block.
 *
 * `highlight` names a phrase inside the text; that phrase gets the Figma's
 * ribbon outline, whose stroke draws itself on once the words underneath
 * have finished inking in.
 */
export default function ScrollHighlightText({
  text,
  highlight,
  className,
}: {
  text: string;
  highlight?: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-word]"),
        { color: "var(--color-grey-3)" },
        {
          color: "var(--color-text-dark)",
          ease: "none",
          stagger: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        },
      );

      const path = el.querySelector<SVGPathElement>("[data-ribbon] path");
      if (path) {
        const length = path.getTotalLength();

        /* set + to rather than fromTo: a fromTo re-renders its start values
           on every ScrollTrigger.refresh(), which would rub the drawn line
           back out once fonts and images finished loading. */
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: el.querySelector("[data-ribbon]"),
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  /* Split around the highlighted phrase so it can carry the ribbon, then
     split each part into words for the ink-in stagger. */
  const index = highlight ? text.indexOf(highlight) : -1;
  const segments =
    index === -1
      ? [{ text, ribbon: false }]
      : [
          { text: text.slice(0, index), ribbon: false },
          { text: highlight!, ribbon: true },
          { text: text.slice(index + highlight!.length), ribbon: false },
        ];

  let key = 0;

  return (
    <p ref={ref} className={cn("text-grey-3", className)}>
      {segments.map((segment) =>
        segment.ribbon ? (
          <span
            key={`ribbon-${key++}`}
            className="relative inline-block whitespace-nowrap"
          >
            {segment.text.split(" ").map((word, i) => (
              <span key={i} data-word className="text-text-dark">
                {word}
                {i < segment.text.split(" ").length - 1 ? " " : ""}
              </span>
            ))}

            <svg
              data-ribbon
              viewBox="0 0 458 47"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-2 top-1/2 h-[1.5em] w-[calc(100%+1rem)] -translate-y-1/2 overflow-visible"
            >
              <path
                d="M457.007 0.5C446.458 15.0004 446.458 31.9996 457.007 46.5H0.993164C11.5421 31.9996 11.5421 15.0004 0.993164 0.5H457.007Z"
                stroke="#494B98"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </span>
        ) : (
          segment.text.split(" ").map((word, i) => (
            <span key={`w-${key++}-${i}`} data-word className="text-text-dark">
              {word}{" "}
            </span>
          ))
        ),
      )}
    </p>
  );
}
