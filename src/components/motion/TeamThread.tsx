"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

/**
 * The thin grey thread that wanders through the empty half of each leadership
 * row (Figma 69:8360 vectors 15–17), drawn on as the row is scrolled past.
 *
 * `pathLength={1}` normalises every one of these paths to a length of 1, so a
 * single dash offset hides any of them regardless of its real geometry — which
 * is what lets the resting state live in CSS and never flash the finished line.
 */
const THREADS = {
  a: { w: 542.63, h: 424.483, d: "M542.5 0.482857L0.5 146.184V424.483" },
  b: { w: 417.25, h: 291.744, d: "M416.75 0V290.93L0.22592 79.9648" },
  c: { w: 571.25, h: 330.376, d: "M571 329.943L0.5 0.865629V329.943" },
} as const;

export type ThreadName = keyof typeof THREADS;

export default function TeamThread({
  name,
  flip,
  className,
}: {
  name: ThreadName;
  /** Mirrors the thread, as Figma does when it sits on the other side. */
  flip?: boolean;
  className?: string;
}) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          /* Drawn against the row it belongs to, so the line keeps pace with
             the cards it threads between. */
          trigger: path.closest("[data-team-row]") ?? path,
          start: "top 85%",
          end: "bottom 55%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    }, path);

    return () => ctx.revert();
  }, []);

  const thread = THREADS[name];

  return (
    <svg
      data-team-thread
      aria-hidden
      viewBox={`0 0 ${thread.w} ${thread.h}`}
      fill="none"
      className={cn("text-grey-4", flip && "-scale-x-100", className)}
    >
      <path
        ref={pathRef}
        d={thread.d}
        pathLength={1}
        strokeDasharray={1}
        stroke="currentColor"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
