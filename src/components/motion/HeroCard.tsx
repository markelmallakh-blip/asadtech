"use client";

import { en } from "@/content/en";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "@/components/ui/Icons";
import { useHeroSlides } from "./HeroSlides";

/**
 * The hero's solution panel, with a teal progress line along its base and
 * chevrons set into its top-right corner. Which slide is showing, and the
 * autoplay that drives the line, both live in HeroSlides so the backdrop and
 * vehicle stay in step with this card.
 */
export default function HeroCard() {
  const { cards, cta } = en.hero;

  const { index, go, setPaused, fillRef } = useHeroSlides();

  const card = cards[index];

  return (
    <div
      className="pointer-events-auto w-full lg:max-w-[490px]"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-sm bg-white shadow-[0_30px_70px_-30px_rgba(13,14,27,0.55)]">
        {/* ------------------------------------------------------- the card */}
        <div className="p-6">
          {/* Right padding keeps the title clear of the chevrons above it. */}
          <h2 className="pe-[80px] text-h5 text-ink">{card.title}</h2>
          {/* Three lines are always reserved, so a shorter blurb on one slide
              does not make the whole card jump as it cycles. Phones keep
              only the title, the arrows and the CTA. */}
          <p className="mt-2 line-clamp-3 h-[59px] text-body-sm leading-[1.4] text-ink-soft max-lg:hidden">
            {card.body}
          </p>
          <Button href={card.href} variant="primary" size="lg" className="mt-6">
            {cta}
          </Button>
        </div>

        {/* Set into the card's top-right corner, divided off by an L-shaped
            rule down its leading edge and along its base. */}
        <div className="absolute end-0 top-0 flex h-[56px] w-[72px] items-center justify-center border-b border-s border-grey-2 bg-white">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous solution"
            disabled={cards.length < 2}
            className="flex size-9 items-center justify-center text-ink transition-opacity duration-300 hover:opacity-60 disabled:opacity-30"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next solution"
            disabled={cards.length < 2}
            className="flex size-9 items-center justify-center text-ink transition-opacity duration-300 hover:opacity-60 disabled:opacity-30"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      </div>

      {/* ---------------------------------- teal progress line under the card */}
      <div className="h-[3px] w-full overflow-hidden bg-grey-2">
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
