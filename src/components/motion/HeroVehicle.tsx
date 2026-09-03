"use client";

import Image from "next/image";
import { en } from "@/content/en";
import HeroTruck from "./HeroTruck";
import { useHeroSlides } from "./HeroSlides";

/**
 * The hero vehicle. Each slide's artwork is stacked and crossfaded, all inside
 * one HeroTruck so the arrival, idle float and scroll drift apply to the stage
 * rather than restarting on every slide change.
 */
export default function HeroVehicle() {
  const { cards } = en.hero;
  const { index } = useHeroSlides();

  return (
    <HeroTruck className="h-full w-full">
      {cards.map((card, i) => (
        /* Fading the wrapper, not the image — see HeroBackdrop. */
        <div
          key={card.vehicle + i}
          className="absolute inset-0"
          style={{
            opacity: i === index ? 1 : 0,
            /* Rolls up into place a beat after the backdrop has settled. */
            transform: i === index ? "translateY(0) scale(1)" : "translateY(6%) scale(0.94)",
            transition:
              "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 260ms, transform 1100ms cubic-bezier(0.16, 1, 0.3, 1) 260ms",
          }}
        >
          <Image
            src={card.vehicle}
            alt={i === index ? card.alt : ""}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 96vw, 1100px"
            className="object-contain object-bottom"
          />
        </div>
      ))}
    </HeroTruck>
  );
}
