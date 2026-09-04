"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Figure from "@/components/ui/Figure";

/**
 * The chairman signing his own message: his portrait travels down the page as
 * the message is read, and his signature is written underneath it as it lands.
 *
 * Figma 69:7962 draws the same photograph four times — large and tilted at the
 * top, then smaller and smaller — to describe one picture travelling to the
 * slot above the signature. So this is a single image: the scroll scrubs it
 * along that path, turning it upright and shrinking it until it settles into
 * the slot it already occupies in the layout. The signature is clipped open
 * left to right across the final leg, so the hand appears to write it just as
 * the picture comes to rest.
 *
 * Waypoints are offsets from that resting slot, measured in the 1280px design
 * stage, so the path scales with the stage it actually lands in. A phone gets
 * a shorter, smaller path of its own — the same idea at a size the narrow
 * column can hold.
 */

/** x/y in design px from the slot centre; scale is relative to the 102px slot. */
const PATH = [
  { x: 538, y: -668, scale: 1.81, rotate: -5.32 },
  { x: 488, y: -380, scale: 1.35, rotate: -3.55 },
  { x: 301, y: -118, scale: 1.15, rotate: -1.77 },
  { x: 0, y: 0, scale: 1, rotate: 0 },
];

/* How much scroll each leg gets. Front-weighted so the picture is still large
   while the top of the section is on screen, and unhurried as it lands. */
const LEGS = [1.2, 1, 0.8];

const DESIGN_WIDTH = 1280;

/** The phone path, in px of a 343px column, and the column it was drawn for. */
const PHONE_PATH = [
  { x: 110, y: -420, scale: 1.4, rotate: -5.32 },
  { x: 80, y: -240, scale: 1.2, rotate: -3.55 },
  { x: 40, y: -90, scale: 1.08, rotate: -1.77 },
  { x: 0, y: 0, scale: 1, rotate: 0 },
];
const PHONE_WIDTH = 343;

export default function StatementSignOff({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slot = slotRef.current;
    /* The stage is the inset content column the path was measured against —
       the section itself runs full-bleed and would overstate every offset. */
    const stage = slot?.closest<HTMLElement>("[data-statement-stage]");
    const section = slot?.closest("section");
    if (!slot || !stage || !section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const run = (path: typeof PATH, designWidth: number) => {
          /* Read on every refresh so the path still lands in the slot after a
             resize or a reflow. The stage carries the section gutters, which
             are not part of the design container. */
          const unit = () => {
            const style = getComputedStyle(stage);
            const width =
              stage.clientWidth -
              parseFloat(style.paddingInlineStart) -
              parseFloat(style.paddingInlineEnd);
            return Math.min(width, designWidth) / designWidth;
          };
          const at = (i: number) => ({
            x: () => path[i].x * unit(),
            y: () => path[i].y * unit(),
            scale: path[i].scale,
            rotate: path[i].rotate,
          });

          gsap.set(slot, { transformOrigin: "50% 50%" });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              /* Begins as the top of the section comes into view and ends with
                 the section fully read, so the whole path is on screen. */
              start: "top 75%",
              end: "bottom bottom",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });

          tl.fromTo(slot, at(0), { ...at(1), ease: "none", duration: LEGS[0] })
            .to(slot, { ...at(2), ease: "none", duration: LEGS[1] })
            /* Eased on the last leg so it settles into the slot rather than
               arriving at full speed. */
            .to(slot, { ...at(3), ease: "power1.out", duration: LEGS[2] })
            /* Written across that same last leg, so the name finishes as the
               picture stops. */
            .fromTo(
              section.querySelectorAll("[data-statement-signature]"),
              { clipPath: "inset(0 100% 0 0)" },
              { clipPath: "inset(0 0% 0 0)", ease: "none", duration: LEGS[2] },
              LEGS[0] + LEGS[1],
            );
      };

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => run(PATH, DESIGN_WIDTH),
        "(max-width: 1023px)": () => run(PHONE_PATH, PHONE_WIDTH),
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={slotRef} className={className}>
      <Figure
        src={src}
        alt={alt}
        sizes="205px"
        label={alt}
        className="h-full w-full"
      />
    </div>
  );
}
