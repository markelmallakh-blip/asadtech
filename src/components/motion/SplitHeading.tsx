"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";

/**
 * Heading whose words rise out of per-line masks as the section arrives.
 *
 * Lines are measured from real wrapping rather than hand-authored breaks, so
 * the effect survives any viewport or font change — `autoSplit` re-splits and
 * rebuilds the timeline whenever the text reflows.
 *
 * Accessibility: SplitText's `aria: "auto"` moves the original string onto an
 * aria-label and hides the split fragments, so screen readers still read one
 * sentence instead of a pile of loose words.
 */
export default function SplitHeading({
  as: Tag = "h2",
  children,
  className,
  delay = 0,
  stagger = 0.05,
  ignore,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  ignore?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => gsap.set(el, { visibility: "visible" });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    gsap.registerPlugin(ScrollTrigger, SplitText);

    const ctx = gsap.context(() => {
      const split = SplitText.create(el, {
        type: "lines,words",
        mask: "lines",
        autoSplit: true,
        aria: "auto",
        ignore,
        linesClass: "split-line",
        wordsClass: "split-word",
        onSplit(self) {
          reveal();

          /* set + to rather than from: a from-tween re-renders its start
             values on every ScrollTrigger.refresh(), which would drop the
             words back into their masks after they had already played. */
          gsap.set(self.words, { yPercent: 110, opacity: 0 });

          return gsap.to(self.words, {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger,
            delay,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        },
      });

      return () => split.revert();
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, ignore]);

  return (
    <Tag ref={ref} data-split className={cn(className)}>
      {children}
    </Tag>
  );
}
