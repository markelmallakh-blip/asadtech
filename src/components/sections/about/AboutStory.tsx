import { about } from "@/content/pages/about";
import SplitHeading from "@/components/motion/SplitHeading";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { Reveal } from "@/components/motion/Reveal";

/** Mission, a full-width photograph, then vision offset right (Figma 61:7160). */
export default function AboutStory() {
  const { lead, image, trail } = about.story;

  return (
    <section className="shell py-20 lg:py-[80px]">
      <div className="max-w-[895px]">
        <Reveal as="p" kind="fade" className="text-h6 text-blue">
          {lead.tagline}
        </Reveal>
        <SplitHeading
          as="p"
          className="mt-4 text-[clamp(1.4rem,2.6vw,2.25rem)] leading-[1.35] font-medium text-text-dark"
        >
          {lead.text}
        </SplitHeading>
      </div>

      <Reveal kind="clip" className="mt-14">
        <ParallaxFigure
          src={image.src}
          alt={image.alt}
          strength={14}
          sizes="(max-width: 1512px) 100vw, 1392px"
          className="aspect-[1392/467] w-full"
        />
      </Reveal>

      <div className="mt-14 lg:ms-[452px] lg:max-w-[940px]">
        <Reveal as="p" kind="fade" className="text-h6 text-blue">
          {trail.tagline}
        </Reveal>
        <SplitHeading
          as="p"
          className="mt-4 text-[clamp(1.4rem,2.6vw,2.25rem)] leading-[1.35] font-medium text-text-dark"
        >
          {trail.text}
        </SplitHeading>
      </div>
    </section>
  );
}
