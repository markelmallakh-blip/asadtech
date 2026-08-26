"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { en } from "@/content/en";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "@/components/ui/Icons";

/**
 * The hero's solution panel: a card that cycles through the solution families,
 * with a teal progress line beneath it and chevrons at its top right.
 *
 * The line doubles as the autoplay timer — it fills over `autoplayMs` and the
 * card advances when it completes. Any manual move resets it, and it pauses
 * while the pointer is over the card so a reader is never rushed.
 */
export default function HeroCard() {
  const { cards, cta, autoplayMs } = en.hero;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const fillRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (step: number) => setIndex((i) => (i + step + cards.length) % cards.length),
    [cards.length],
  );

  useEffect(() => {
    if (cards.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fill = fillRef.current;
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - started) / autoplayMs, 1);
      if (fill) fill.style.transform = `scaleX(${progress})`;

      if (progress < 1) frame = requestAnimationFrame(tick);
      else go(1);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [index, paused, autoplayMs, cards.length, go]);

  const card = cards[index];

  return (
    <div
      className="pointer-events-auto w-full lg:max-w-[490px]"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="flex items-start">
        {/* ------------------------------------------------------- the card */}
        <div className="min-w-0 flex-1 rounded-sm bg-white p-6 shadow-[0_30px_70px_-30px_rgba(13,14,27,0.55)] lg:p-6">
          <h2 className="text-h5 text-ink">{card.title}</h2>
          <p className="mt-2 line-clamp-3 text-body-sm leading-[1.4] text-ink-soft">
            {card.body}
          </p>
          <Button href={card.href} variant="primary" size="lg" className="mt-6">
            {cta}
          </Button>
        </div>

        {/* ------------------------------------------- chevrons, top right */}
        <div className="flex h-[56px] w-[72px] shrink-0 items-center justify-center bg-white/10 backdrop-blur-md">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous solution"
            disabled={cards.length < 2}
            className="flex size-9 items-center justify-center text-white transition-opacity duration-300 hover:opacity-70 disabled:opacity-35"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next solution"
            disabled={cards.length < 2}
            className="flex size-9 items-center justify-center text-white transition-opacity duration-300 hover:opacity-70 disabled:opacity-35"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      </div>

      {/* ---------------------------------- teal progress line under the card */}
      <div className="h-[3px] w-full overflow-hidden bg-white/25 lg:w-[418px]">
        <div
          ref={fillRef}
          className={cn(
            "h-full w-full origin-left bg-teal",
            cards.length < 2 && "scale-x-100",
          )}
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}
