import { about } from "@/content/pages/about";
import SplitHeading from "@/components/motion/SplitHeading";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { Reveal } from "@/components/motion/Reveal";

/** Full-bleed factory band (Figma 127:8309). */
export default function AboutFactory() {
  const { tagline, heading, body, image } = about.factory;

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <ParallaxFigure
        src={image.src}
        alt={image.alt}
        strength={16}
        tone="dark"
        sizes="100vw"
        className="absolute inset-0 -z-10"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy/70" />

      <div className="shell flex min-h-[560px] flex-col justify-center py-24 lg:min-h-[883px] lg:py-[120px]">
        <Reveal as="p" kind="fade" className="text-h6 text-blue-70">
          {tagline}
        </Reveal>
        <SplitHeading
          as="h2"
          className="mt-4 max-w-[900px] text-h3 leading-[1.15] text-white lg:text-h2"
        >
          {heading}
        </SplitHeading>
        <Reveal
          as="p"
          className="mt-6 max-w-[680px] text-body-lg leading-[1.6] text-text-light"
        >
          {body}
        </Reveal>
      </div>
    </section>
  );
}
