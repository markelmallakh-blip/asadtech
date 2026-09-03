"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundVideo from "@/components/motion/BackgroundVideo";
import Figure from "@/components/ui/Figure";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import RotatingBadge from "@/components/motion/RotatingBadge";
import Button from "@/components/ui/Button";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";

/** Card widths for the two states in Figma 71:9377. */
const CLOSED = 698;
const OPEN = 1262;
/** Where the card's top sits on arrival, and where it comes to rest. */
const CLOSED_TOP = 400;
const OPEN_TOP = 100;
/** Scroll distance the opening is spread over while the header is pinned. */
const PIN = 1000;

/**
 * The pin wraps the section in a spacer, so it has to be reverted before
 * React unmounts the section on navigation — a layout effect's cleanup runs
 * ahead of the DOM removal, a passive effect's after it.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Single-service header (Figma 71:9377, states "151" and "Variant2").
 *
 * The footage fills the viewport and the closed card sits over its lower
 * edge, ending at the CTA. The first scroll pins the header and drives the
 * opening: the card climbs, widens to 1262 and unfolds the overview and the
 * two pictures from under the CTA, all tied to the scroll position. The pin
 * holds the page until the card has fully opened, so the section below can
 * never appear first.
 *
 * The section reserves its open height from the start, so the document does
 * not grow under the reader as the fold expands and every scroll trigger
 * further down keeps its place.
 *
 * Below `lg` it is a plain stack: footage, card, overview, all open.
 */
export default function ServiceHero({
  eyebrow,
  headline,
  body,
  overview,
  overviewImages,
  video,
  poster,
  cta,
  href,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  overview: string;
  overviewImages?: readonly [string, string];
  /** Optional — services without footage pin their still instead. */
  video?: string;
  poster: string;
  cta: string;
  href: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const foldRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const fold = foldRef.current;
    if (!section || !card || !fold) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          /* The fold's open height, measured at the open width — the text
             wraps differently at 698, so measuring there would leave a band
             of empty card under the pictures once it has widened. */
          const openHeight = () => {
            const width = card.style.width;
            const height = fold.style.height;
            gsap.set(card, { width: OPEN });
            gsap.set(fold, { height: "auto" });
            const measured = fold.offsetHeight;
            gsap.set(card, { width: width || CLOSED });
            gsap.set(fold, { height: height || 0 });
            return measured;
          };

          const closedTop = () => -(window.innerHeight - CLOSED_TOP);
          const openTop = () => -(window.innerHeight - OPEN_TOP);

          gsap.set(fold, { height: 0, opacity: 0 });
          gsap.set(card, { width: CLOSED, marginTop: closedTop });

          /* Reserve the open layout up front: the card's resting top plus
             its open height, so opening it never lengthens the page. */
          const foldHeight = openHeight();
          gsap.set(section, {
            minHeight: () =>
              OPEN_TOP + card.offsetHeight + foldHeight + 32 /* fold gap */,
          });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: `+=${PIN}`,
                pin: true,
                scrub: 0.6,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            })
            .to(
              card,
              { width: OPEN, marginTop: openTop, ease: "none", duration: 1 },
              0,
            )
            .to(
              fold,
              { height: () => openHeight(), opacity: 1, ease: "none", duration: 1 },
              0,
            );
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const media = video ? (
    <BackgroundVideo
      src={video}
      poster={poster}
      pingPong
      className="absolute inset-0"
    />
  ) : (
    <Figure
      src={poster}
      alt=""
      tone="dark"
      sizes="100vw"
      className="absolute inset-0"
    />
  );

  return (
    <section
      ref={sectionRef}
      className="flex flex-col overflow-clip bg-blue-10 lg:items-end"
    >
      <div className="relative h-[420px] w-full lg:sticky lg:top-0 lg:h-[100svh]">
        {media}
      </div>

      <div
        ref={cardRef}
        /* Positioned so it paints over the footage: the media panel is
           sticky, and a positioned element covers a static sibling
           however the two are ordered in the markup. On desktop the
           timeline sets the width and the pull-up; these are the
           fallbacks for reduced motion. */
        className="relative z-10 flex w-full flex-col gap-8 bg-white p-8 lg:-mt-[calc(100svh-400px)] lg:w-[698px] lg:p-[60px]"
      >
        <div className="flex w-full max-w-[768px] flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <Reveal
                as="p"
                kind="fade"
                className="text-h6 font-semibold text-blue capitalize"
              >
                {eyebrow}
              </Reveal>
              <SplitHeading
                as="h1"
                className="max-w-[559px] text-[clamp(2rem,3.4vw,2.625rem)] leading-[1.25] font-semibold text-text-dark"
              >
                {headline}
              </SplitHeading>
            </div>

            <Reveal as="p" className="text-body leading-[1.5] text-text-dark">
              {body}
            </Reveal>
          </div>

          <Reveal kind="fade">
            <Button href={href} variant="primary" size="lg">
              {cta}
            </Button>
          </Reveal>
        </div>

        {/* Open on mobile and under reduced motion; the desktop timeline
            collapses this and unfolds it as the page is scrolled. */}
        <div
          ref={foldRef}
          className="flex w-full flex-col gap-8 overflow-hidden"
        >
          <div className="h-px w-full bg-blue-20" />

          <div className="flex flex-col gap-4">
            <p className="text-h5 font-semibold text-blue">Overview</p>
            <p className="text-body-xl leading-[1.3] font-light text-navy">
              {overview}
            </p>
          </div>

          {overviewImages && (
            <div data-badge-track className="relative flex w-full gap-4">
              <ParallaxFigure
                src={overviewImages[0]}
                alt=""
                strength={12}
                sizes="761px"
                className="h-[345px] w-[67.6%] shrink-0"
              />
              <ParallaxFigure
                src={overviewImages[1]}
                alt=""
                strength={12}
                sizes="360px"
                className="h-[345px] flex-1"
              />

              {/* Straddles the seam between the two, as it does in Figma */}
              <RotatingBadge
                src="/images/single-service/KSA-badge.webp"
                alt="Made in the Kingdom of Saudi Arabia"
                className="pointer-events-none absolute top-[24.5px] left-[62.9%] h-[120px] w-[121px]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
