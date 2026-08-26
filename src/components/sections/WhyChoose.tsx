"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { en } from "@/content/en";

/**
 * "Why Choose Asadtech?" — Figma 55:3860.
 *
 * Act one   The headline sits alone, centred, on the light page.
 * Act two   A slit opens in the gap *between* its two lines and widens until
 *           it fills the viewport, flooding the section with imagery; the
 *           headline hands over to a small one pinned top-left.
 * Act three A numbered list travels up past a fixed active line. Emphasis is a
 *           continuous function of distance from that line, so titles ease from
 *           dim to bright rather than switching, and the backdrop crossfades to
 *           whichever reason is on it. The imagery drifts at a fraction of the
 *           list's travel, which is the parallax.
 */
export default function WhyChoose() {
  const { heading, reasons } = en.whyChoose;

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const apertureRef = useRef<HTMLDivElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const list = listRef.current;
    const thumbs = thumbsRef.current;
    if (!section || !stage || !list || !thumbs) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const items = gsap.utils.toArray<HTMLElement>("[data-item]", list);
          const thumbItems = gsap.utils.toArray<HTMLElement>("[data-thumb]", thumbs);
          const backdrops = gsap.utils.toArray<HTMLElement>("[data-bg]", stage);
          if (!items.length) return;

          const step = () => items[0].offsetHeight;
          const thumbStep = () => thumbItems[0].offsetHeight;

          const paint = () => {
            const line = stage.getBoundingClientRect().top + stage.clientHeight / 2;
            const falloff = step() * 1.8;

            items.forEach((item, i) => {
              const box = item.getBoundingClientRect();
              const d = Math.abs(box.top + box.height / 2 - line);
              const near = Math.max(0, 1 - d / falloff);

              gsap.set(item, { opacity: 0.22 + near * 0.78 });
              gsap.set(item.querySelector("[data-body]"), {
                opacity: Math.max(0, (near - 0.72) / 0.28),
              });
              gsap.set(backdrops[i], { opacity: near ** 4 });
            });

            thumbItems.forEach((thumb) => {
              const box = thumb.getBoundingClientRect();
              const d = Math.abs(box.top + box.height / 2 - line);
              const near = Math.max(0, 1 - d / (thumbStep() * 1.4));
              gsap.set(thumb, { opacity: 0.25 + near * 0.75 });
            });
          };

          const tl = gsap.timeline({
            onUpdate: paint,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.7,
              invalidateOnRefresh: true,
              onRefresh: paint,
            },
          });

          /* --- Act two: the slit opens between the headline's two lines --- */
          tl.fromTo(
            apertureRef.current,
            { width: 460, height: 0 },
            {
              width: () => stage.clientWidth,
              height: () => stage.clientHeight,
              ease: "power3.inOut",
              duration: 1,
            },
            0,
          )
            .fromTo(
              openerRef.current,
              { opacity: 1 },
              { opacity: 0, ease: "power2.in", duration: 0.45 },
              0.2,
            )
            .fromTo(
              pinnedRef.current,
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, ease: "power2.out", duration: 0.4 },
              0.7,
            )
            .fromTo(
              [list, thumbs],
              { opacity: 0 },
              { opacity: 1, ease: "none", duration: 0.35 },
              0.72,
            );

          /* --- Act three: the list travels, imagery lags behind ---------- */
          tl.fromTo(
            list,
            { y: () => -step() / 2 },
            {
              y: () => -step() / 2 - (items.length - 1) * step(),
              ease: "none",
              duration: 4,
            },
            1,
          )
            .fromTo(
              thumbs,
              { y: () => -thumbStep() / 2 },
              {
                y: () => -thumbStep() / 2 - (thumbItems.length - 1) * thumbStep(),
                ease: "none",
                duration: 4,
              },
              1,
            )
            .fromTo(
              driftRef.current,
              { yPercent: -5 },
              { yPercent: 5, ease: "none", duration: 4 },
              1,
            );

          paint();
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reasons.length]);

  return (
    <section ref={sectionRef} className="relative lg:h-[480vh]">
      <div
        ref={stageRef}
        className="relative overflow-hidden bg-blue-10 py-24 lg:sticky lg:top-0 lg:h-[100svh] lg:py-0"
      >
        {/* ------------------------------ act one: the headline, on its own */}
        <div
          ref={openerRef}
          className="absolute inset-0 z-30 hidden items-center justify-center lg:flex"
        >
          <h2 className="text-center text-h2 leading-[1.15] text-ink">
            <span className="block">{heading.before}</span>
            {/* the slit opens in this gap */}
            <span className="block">{heading.after}</span>
          </h2>
        </div>

        {/* ----------------------------------- the aperture and its imagery */}
        <div
          ref={apertureRef}
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 overflow-hidden lg:block"
          style={{ width: 460, height: 0 }}
        >
          <div ref={driftRef} className="absolute inset-[-6%]">
            {reasons.map((reason) => (
              <div key={reason.image} data-bg className="absolute inset-0 opacity-0">
                <Image
                  src={reason.image}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-navy/64" />
        </div>

        {/* -------------------------------- act two: the headline, pinned up */}
        <div
          ref={pinnedRef}
          className="shell absolute inset-x-0 top-[112px] z-20 hidden opacity-0 lg:block"
        >
          <h2 className="text-h5 leading-[1.2] text-white">
            <span className="block">{heading.before}</span>
            <span className="block">{heading.after}</span>
          </h2>
        </div>

        {/* ------------------------------------ act three: the numbered list */}
        <div className="absolute inset-0 z-10 hidden items-center lg:flex">
          <div className="shell flex w-full items-center justify-between gap-12">
            <div className="relative h-[100svh] w-[min(620px,48vw)] overflow-hidden">
              <div ref={listRef} className="absolute inset-x-0 top-1/2 opacity-0">
                {reasons.map((reason, index) => (
                  <div key={reason.title} data-item className="py-7">
                    <p className="text-body-sm font-semibold tracking-[0.14em] text-white/70">
                      {String(index + 1).padStart(2, "0")}.
                    </p>
                    <h3 className="mt-2 text-h3 leading-[1.1] text-white">
                      {reason.title}
                    </h3>
                    <p
                      data-body
                      className="mt-3 max-w-[460px] text-body leading-[1.5] text-white/75 opacity-0"
                    >
                      {reason.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[100svh] w-[220px] shrink-0 overflow-hidden">
              <div ref={thumbsRef} className="absolute inset-x-0 top-1/2 opacity-0">
                {reasons.map((reason) => (
                  <div key={reason.image} data-thumb className="py-4">
                    <div className="relative aspect-[220/280] w-full overflow-hidden">
                      <Image
                        src={reason.image}
                        alt={reason.alt}
                        fill
                        sizes="220px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------- stacked fallback for narrow viewports */}
        <div className="shell lg:hidden">
          <h2 className="text-center text-h3 text-ink">
            {heading.before} {heading.after}
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} data-animate="fade-up">
                <div className="relative aspect-[380/260] w-full overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-h6 text-ink">{reason.title}</h3>
                <p className="mt-2 text-body-sm leading-[1.6] text-ink-soft">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
