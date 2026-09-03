"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { en } from "@/content/en";

type Ctx = {
  index: number;
  go: (step: number) => void;
  setPaused: (paused: boolean) => void;
  fillRef: React.RefObject<HTMLDivElement | null>;
};

const HeroSlidesContext = createContext<Ctx | null>(null);

export function useHeroSlides() {
  const ctx = useContext(HeroSlidesContext);
  if (!ctx) throw new Error("useHeroSlides must be used inside <HeroSlides>");
  return ctx;
}

/**
 * Owns which hero slide is showing.
 *
 * The backdrop, the vehicle and the card each sit in a different part of the
 * hero's layout, so the index lives here rather than in any one of them — that
 * is what keeps all three changing together.
 *
 * The teal line doubles as the autoplay timer: it fills over `autoplayMs` and
 * the slide advances when it completes. Any manual move resets it, and it
 * pauses while the pointer is over the card so a reader is never rushed.
 */
export default function HeroSlides({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cards, autoplayMs } = en.hero;

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

  const value = useMemo(
    () => ({ index, go, setPaused, fillRef }),
    [index, go],
  );

  return (
    <HeroSlidesContext.Provider value={value}>
      {children}
    </HeroSlidesContext.Provider>
  );
}
