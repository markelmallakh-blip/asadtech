import { about } from "@/content/pages/about";
import SplitHeading from "@/components/motion/SplitHeading";
import BackgroundVideo from "@/components/motion/BackgroundVideo";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

/**
 * Full-bleed factory band (Figma 127:8309).
 *
 * The footage plays out and back rather than cutting, and the copy is laid on
 * a two-part scrim: a horizontal wash that deepens under the text column and
 * leaves the right of the frame open, and a vertical one that darkens the top
 * and bottom edges so the band settles against the sections either side.
 */
export default function AboutFactory() {
  const { tagline, heading, body, image, video } = about.factory;

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <BackgroundVideo
        src={video}
        poster={image.src}
        pingPong
        className="absolute inset-0 -z-10"
      />

      {/* Keeps the type legible without flattening the footage behind it */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-navy via-navy/80 to-navy/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-navy/70 via-transparent to-navy/75"
      />

      <div className="shell flex min-h-[560px] flex-col justify-center py-24 lg:min-h-[883px] lg:py-[120px]">
        {/* One cascade: the tagline leads, the heading follows a beat later,
            and the paragraph closes it out. */}
        <RevealGroup stagger={0.14}>
          <Reveal as="p" kind="fade" className="text-h6 text-blue-70">
            {tagline}
          </Reveal>

          <SplitHeading
            as="h2"
            delay={0.14}
            className="mt-4 max-w-[900px] text-h3 leading-[1.15] text-white lg:text-h2"
          >
            {heading}
          </SplitHeading>

          <Reveal
            as="p"
            delay={0.28}
            className="mt-6 max-w-[680px] text-body-lg leading-[1.6] text-text-light"
          >
            {body}
          </Reveal>
        </RevealGroup>
      </div>
    </section>
  );
}
