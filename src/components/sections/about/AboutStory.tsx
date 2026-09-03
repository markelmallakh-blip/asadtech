import { about } from "@/content/pages/about";
import SplitHeading from "@/components/motion/SplitHeading";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Mission, a full-width photograph, then vision offset right, over a navy-to-
 * blue wash (Figma 61:7160). The two statements sit on opposite edges so the
 * picture reads as the turn between them.
 */
export default function AboutStory() {
  const { lead, image, trail } = about.story;

  return (
    <section className="bg-linear-to-b from-navy to-blue py-20 lg:py-[80px]">
      <div className="shell flex flex-col gap-8">
        <div className="max-w-[895px]">
          <Reveal as="p" kind="fade" className="text-h5 font-semibold text-white">
            {lead.tagline}
          </Reveal>
          <SplitHeading
            as="p"
            className="mt-4 text-body-xl leading-[1.3] font-normal text-blue-20"
          >
            {lead.text}
          </SplitHeading>
        </div>

        <Reveal kind="clip">
          <ParallaxFigure
            src={image.src}
            alt={image.alt}
            strength={14}
            tone="dark"
            sizes="(max-width: 1512px) 100vw, 1392px"
            className="aspect-[1392/467] w-full"
          />
        </Reveal>

        <div className="max-w-[940px] lg:ms-auto">
          <Reveal as="p" kind="fade" className="text-h5 font-semibold text-white">
            {trail.tagline}
          </Reveal>
          <SplitHeading
            as="p"
            className="mt-4 text-body-xl leading-[1.3] font-normal text-blue-20"
          >
            {trail.text}
          </SplitHeading>
        </div>
      </div>
    </section>
  );
}
