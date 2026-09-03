"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { cn } from "@/lib/utils";

/**
 * A pair of leadership cards — one short, one tall — that trade sizes as the
 * row is scrolled through.
 *
 * Figma 69:8360 pairs a 305×340 card with a 380×424 one; both are the same
 * shape (0.897), so trading sizes means trading the column widths and letting
 * each frame's aspect ratio set its own height. Scrubbing the columns rather
 * than the heights is what keeps the pictures in proportion — animating height
 * alone would squash one and stretch the other.
 *
 * Because the tween is scrubbed, scrolling back up plays the trade in reverse
 * on its own. Below the `sm` breakpoint the cards stack and nothing swaps.
 */

/** Column widths from Figma, as bare `fr` numbers. */
const SHORT_COL = 305;
const TALL_COL = 380;

export type Member = { name: string; role: string; image: string };

export default function TeamPair({
  members,
  /** Which of the two starts tall — Figma alternates it per row. */
  tallFirst,
  className,
}: {
  members: readonly Member[];
  tallFirst?: boolean;
  className?: string;
}) {
  const pairRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pair = pairRef.current;
    if (!pair) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 640px)": () => {
          const from = tallFirst
            ? { a: TALL_COL, b: SHORT_COL }
            : { a: SHORT_COL, b: TALL_COL };
          const to = { a: from.b, b: from.a };

          const cols = { ...from };
          const write = () => {
            pair.style.gridTemplateColumns = `${cols.a}fr ${cols.b}fr`;
          };

          gsap.to(cols, {
            ...to,
            ease: "none",
            onUpdate: write,
            scrollTrigger: {
              trigger: pair.closest("[data-team-row]") ?? pair,
              start: "top 85%",
              end: "bottom 40%",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });

          return () => {
            pair.style.removeProperty("grid-template-columns");
          };
        },
      });
    }, pair);

    return () => ctx.revert();
  }, [tallFirst]);

  return (
    <div
      ref={pairRef}
      className={cn(
        "grid gap-8 sm:grid-cols-[305fr_380fr] lg:w-[717px]",
        tallFirst && "sm:grid-cols-[380fr_305fr]",
        className,
      )}
    >
      {members.map((member, i) => {
        const tall = tallFirst ? i === 0 : i === 1;

        return (
          <div key={member.name}>
            <div
              data-card-frame={tall ? "tall" : "short"}
              className={cn(
                "w-full",
                tall ? "aspect-[380/424]" : "aspect-[305/340]",
              )}
            >
              <ParallaxFigure
                src={member.image}
                alt={member.name}
                strength={12}
                sizes="(max-width: 640px) 100vw, 380px"
                label={member.name}
                className="h-full w-full"
              />
            </div>

            <div className="mt-6 flex gap-2">
              <span className="mt-3 size-6 shrink-0 bg-blue" />
              <div className="max-w-[274px]">
                <h3 className="text-h6 leading-[1.25] text-text-dark capitalize">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-body text-text-muted">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
