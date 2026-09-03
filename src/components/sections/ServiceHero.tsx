"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundVideo from "@/components/motion/BackgroundVideo";
import Figure from "@/components/ui/Figure";
import Button from "@/components/ui/Button";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";

/** The card's closed width, from Figma 74:9493. */
const CARD_WIDTH = 698;

/**
 * Single-service header (Figma 74:9493).
 *
 * The footage pins for a viewport with the white card sitting on its lower
 * right, high enough that the whole card — the CTA included — is readable
 * before anything has been scrolled. Scrolling then opens the card out across
 * the page, and the room that makes is what the overview copy moves into: a
 * closed panel widening into a spread, rather than a block that scrolls by.
 *
 * Below `lg` none of that applies — footage and card stack, overview beneath.
 * Pinning two viewports to widen a panel is a poor trade on a phone.
 */
export default function ServiceHero({
  eyebrow,
  headline,
  body,
  overview,
  video,
  poster,
  cta,
  href,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  /** Revealed by the second column as the card opens out. */
  overview: string;
  /** Optional — services without footage pin their still instead. */
  video?: string;
  poster: string;
  cta: string;
  href: string;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const card = cardRef.current;
    const aside = asideRef.current;
    if (!stage || !card || !aside) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          /* Opens to the page's content width, never past it. */
          const openWidth = () => Math.min(stage.clientWidth - 120, 1392);

          gsap
            .timeline({
              scrollTrigger: {
                trigger: stage,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.7,
                invalidateOnRefresh: true,
              },
            })
            .fromTo(
              card,
              { width: CARD_WIDTH },
              { width: openWidth, ease: "none", duration: 1 },
            )
            /* Arrives once the card is wide enough to hold it */
            .fromTo(
              aside,
              { opacity: 0, x: 24 },
              { opacity: 1, x: 0, ease: "power2.out", duration: 0.45 },
              0.5,
            );
        },
      });
    }, stage);

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

  const card = (
    <div className="flex flex-col gap-8">
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
  );

  return (
    <section className="bg-blue-10">
      {/* ------------------------------------------------------------ mobile */}
      <div className="lg:hidden">
        <div className="relative h-[420px] w-full overflow-hidden">{media}</div>
        <div className="bg-white p-8">
          {card}
          <p className="mt-8 text-body leading-[1.7] text-ink-soft">{overview}</p>
        </div>
      </div>

      {/* ----------------------------------------------------------- desktop */}
      <div ref={stageRef} className="relative hidden lg:block lg:h-[190vh]">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          {media}

          {/* Clear of the fold, so the CTA reads before anything is scrolled */}
          <div
            ref={cardRef}
            className="absolute end-[60px] bottom-[60px] flex overflow-hidden bg-white p-[60px]"
            style={{ width: CARD_WIDTH }}
          >
            <div className="w-[578px] shrink-0">{card}</div>

            <div ref={asideRef} className="ms-[60px] min-w-[380px] flex-1">
              <p className="text-body leading-[1.7] text-ink-soft">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
