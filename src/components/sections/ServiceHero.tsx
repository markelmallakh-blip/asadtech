"use client";

import { useEffect, useRef } from "react";
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
const OPEN = 1262;

/**
 * Single-service header (Figma 71:9377, states "151" and "Variant2").
 *
 * The footage sticks to the top while the white card is pulled up over its
 * lower edge. Closed, the card is 698px and ends at the CTA. Arriving at it
 * opens it out to 1262px and unfolds the rest from under the CTA — a rule,
 * the overview, and the two pictures with the Kingdom badge across their seam
 * — so the overview is revealed by the card rather than sitting in a section
 * of its own beneath it.
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
  const mediaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const foldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    const card = cardRef.current;
    const fold = foldRef.current;
    if (!section || !media || !card || !fold) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          gsap.set(fold, { height: 0, opacity: 0 });

          /* Opened once on arrival rather than scrubbed: the fold is taller
             than a viewport, and scrubbing its height would resize the
             document under the reader on every frame of the scroll. */
          gsap
            .timeline({
              scrollTrigger: {
                /* Measured against the footage, not the card: the card is the
                   thing being resized, so using it as its own trigger moves
                   the start line out from under the timeline. */
                trigger: media,
                start: "bottom 60%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            })
            .to(card, { width: OPEN, duration: 0.7, ease: "power3.inOut" })
            .to(
              fold,
              {
                height: "auto",
                opacity: 1,
                duration: 0.8,
                ease: "power3.inOut",
              },
              0.25,
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
      /* Runs past the fold so the section below cannot creep into view
         before the card has opened. The card grows down into this room
         as it unfolds, so the band closes up rather than staying empty. */
      className="flex flex-col overflow-clip bg-blue-10 lg:min-h-[calc(100svh+140px)] lg:items-end lg:pb-[140px]"
    >
      <div
        ref={mediaRef}
        /* Figma's 850 on a tall screen, but never so tall that the card's
           CTA is pushed under the fold on a shorter one. */
        className="relative h-[420px] w-full lg:sticky lg:top-0 lg:h-[min(850px,calc(100svh-320px))]"
      >
        {media}
      </div>

      <div
        ref={cardRef}
        /* Positioned so it paints over the footage: the media panel is
           sticky, and a positioned element covers a static sibling
           however the two are ordered in the markup. */
        className="relative z-10 flex w-full flex-col gap-8 bg-white p-8 lg:-mt-[180px] lg:w-[698px] lg:p-[60px]"
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
            collapses this and unfolds it on arrival. */}
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
