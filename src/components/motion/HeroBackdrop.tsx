"use client";

import Image from "next/image";
import { en } from "@/content/en";
import { useHeroSlides } from "./HeroSlides";

/** The hero backdrop, crossfading between slides and drifting on scroll. */
export default function HeroBackdrop() {
  const { cards } = en.hero;
  const { index } = useHeroSlides();

  return (
    <div className="absolute inset-0 -z-20">
      <div className="parallax-frame absolute inset-0">
        <div className="parallax-media" data-parallax="18">
          {cards.map((card, i) => (
            /* The fade lives on this wrapper, not the image: next/image builds
               its own style attribute for `fill` and drops anything we pass. */
            <div
              key={card.background + i}
              className="absolute inset-0"
              style={{
                opacity: i === index ? 1 : 0,
                transition: "opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <Image
                src={card.background}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/10 to-navy/45" />
    </div>
  );
}
