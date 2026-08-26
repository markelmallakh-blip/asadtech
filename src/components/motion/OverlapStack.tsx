"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Two stacked sections: the first one holds still while the second scrolls up
 * over it, and a single photo rides from a slot in the upper section into a
 * slot in the lower one.
 *
 * The travelling photo is `position: fixed` and lives outside both sections so
 * it can float above the one that is covering the other. Its box is recomputed
 * from the two slots' live rects on every scroll update — the destination is
 * moving throughout, so interpolating pre-measured values would drift.
 *
 * Contract:
 *   [data-stack-under]  section that gets pinned
 *   [data-stack-over]   section that scrolls over it (needs its own background)
 *   [data-morph-source] slot the photo starts in
 *   [data-morph-target] slot the photo lands in
 *
 * Both slots render the photo themselves, which is what mobile, no-JS and
 * reduced-motion visitors see; those copies only step aside once the desktop
 * morph is actually running.
 */
export default function OverlapStack({
  children,
  src,
  alt,
}: {
  children: React.ReactNode;
  src: string;
  alt: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const media = mediaRef.current;
    if (!wrapper || !media) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const root = document.documentElement;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const under = wrapper.querySelector<HTMLElement>("[data-stack-under]");
          const over = wrapper.querySelector<HTMLElement>("[data-stack-over]");
          const focus = wrapper.querySelector<HTMLElement>("[data-stack-focus]");
          const source = wrapper.querySelector<HTMLElement>("[data-morph-source]");
          const target = wrapper.querySelector<HTMLElement>("[data-morph-target]");
          if (!under || !over || !focus || !source || !target) return;

          root.classList.add("morph-active");

          /* Position is transform-based off a fixed 0,0 origin so the common
             case stays on the compositor. */
          gsap.set(media, { left: 0, top: 0, xPercent: 0, yPercent: 0 });

          const place = (progress: number) => {
            const a = source.getBoundingClientRect();
            const b = target.getBoundingClientRect();

            gsap.set(media, {
              x: a.left + (b.left - a.left) * progress,
              y: a.top + (b.top - a.top) * progress,
              width: a.width + (b.width - a.width) * progress,
              height: a.height + (b.height - a.height) * progress,
            });
          };

          const pin = ScrollTrigger.create({
            trigger: under,
            /* Freeze once the upper section has fully arrived and hold until
               the stats row has climbed to the middle of the viewport, which
               is where the photo finishes its descent. */
            start: "bottom bottom",
            endTrigger: focus,
            end: "center center",
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });

          /* The travelling copy is `fixed`, so it has to be re-placed on every
             scroll — not just inside the pin — or it would sit still while the
             slot it is impersonating scrolls away underneath it. */
          const tracker = ScrollTrigger.create({
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            onUpdate: () => place(pin.progress),
            onRefresh: () => place(pin.progress),
          });

          place(pin.progress);

          return () => {
            tracker.kill();
            pin.kill();
            root.classList.remove("morph-active");
          };
        },
      });
    }, wrapper);

    return () => {
      ctx.revert();
      root.classList.remove("morph-active");
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {children}

      <div
        ref={mediaRef}
        aria-hidden
        className="morph-media pointer-events-none fixed left-0 top-0 z-40 overflow-hidden"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 400px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
