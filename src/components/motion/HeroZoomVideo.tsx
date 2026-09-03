"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assetPath } from "@/lib/utils";

/**
 * Page banner whose video opens out to fill the viewport as you scroll.
 *
 * The frame starts inset — matching where the still sits in the Figma banner —
 * and its four edges are scrubbed to zero, so the footage grows into a
 * full-bleed backdrop rather than cutting to it. The scrim deepens as it opens
 * so the title stays readable once the picture is behind it.
 *
 * Below 1024px it is a plain full-width video: pinning two viewports of scroll
 * to grow a picture is a poor trade on a phone.
 */
export default function HeroZoomVideo({
  src,
  poster,
  intro,
  children,
}: {
  src: string;
  poster?: string;
  /** Revealed alongside its rule once the video has opened out. */
  intro?: string;
  /** Overlay content — pinned with the stage so it rides the zoom. */
  children?: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* Autoplay is blocked until the element is muted and in the document. */
    videoRef.current?.play().catch(() => {});

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            })
            .fromTo(
              frameRef.current,
              { top: "23.6%", right: "18.8%", bottom: "25%", left: "18.8%" },
              {
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                ease: "power2.inOut",
                duration: 1,
              },
              0,
            )
            .fromTo(
              scrimRef.current,
              { opacity: 0.15 },
              { opacity: 0.5, ease: "none", duration: 1 },
              0,
            )
            /* The rule draws across the banner first, dividing the headline
               from the copy that follows it in. */
            .fromTo(
              section.querySelectorAll("[data-hero-reveal-line]"),
              { scaleX: 0 },
              {
                scaleX: 1,
                transformOrigin: "left center",
                ease: "expo.out",
                duration: 0.4,
              },
              0.58,
            )
            /* The supporting copy only earns its place once the picture has
               opened out behind it. */
            .fromTo(
              section.querySelectorAll("[data-hero-reveal]"),
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                duration: 0.35,
                stagger: 0.08,
              },
              0.7,
            );
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative lg:h-[210vh]">
      <div className="relative overflow-hidden bg-navy lg:sticky lg:top-0 lg:h-[100svh]">
        <div
          ref={frameRef}
          className="absolute overflow-hidden"
          /* Matches where the still sits in the Figma banner; scrubbed to
             full-bleed as the section scrolls. */
          style={{ top: "23.6%", right: "18.8%", bottom: "25%", left: "18.8%" }}
        >
          <video
            ref={videoRef}
            src={assetPath(src)}
            poster={poster && assetPath(poster)}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          ref={scrimRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black"
          style={{ opacity: 0.15 }}
        />

        {children}

        {intro && (
          <div
            ref={introRef}
            className="shell pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden pb-24 lg:block lg:pb-[120px]"
            style={{ opacity: 0 }}
          >
            <div className="ms-auto max-w-[460px] border-s border-white/40 ps-8">
              <p className="text-body leading-[1.7] text-white/85">{intro}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
