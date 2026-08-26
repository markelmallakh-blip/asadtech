import { about } from "@/content/pages/about";
import SplitHeading from "@/components/motion/SplitHeading";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { Quote } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";

/** Large quote with photographs scattered around it (Figma 69:7962). */
export default function AboutStatement() {
  const { tagline, quote, name, role, images } = about.statement;

  return (
    <section className="relative overflow-hidden py-20 lg:py-[80px]">
      <Reveal as="p" kind="fade" className="shell text-center text-h6 text-blue">
        {tagline}
      </Reveal>

      <div className="shell relative mt-12">
        {/* the scattered photographs */}
        <Reveal
          kind="clip"
          className="pointer-events-none absolute -top-4 end-0 hidden w-[205px] lg:block"
        >
          <ParallaxFigure
            src={images[0].src}
            alt={images[0].alt}
            strength={18}
            sizes="205px"
            className="aspect-[205/247] w-full"
          />
        </Reveal>
        <Reveal
          kind="clip"
          delay={0.1}
          className="pointer-events-none absolute bottom-[22%] end-[3%] hidden w-[153px] lg:block"
        >
          <ParallaxFigure
            src={images[1].src}
            alt={images[1].alt}
            strength={20}
            sizes="153px"
            className="aspect-[153/184] w-full"
          />
        </Reveal>
        <Reveal
          kind="clip"
          delay={0.2}
          className="pointer-events-none absolute bottom-0 end-[16%] hidden w-[130px] lg:block"
        >
          <ParallaxFigure
            src={images[2].src}
            alt={images[2].alt}
            strength={22}
            sizes="130px"
            className="aspect-[130/157] w-full"
          />
        </Reveal>

        <blockquote className="relative max-w-[965px] lg:ms-[157px]">
          <Quote className="h-[34px] w-[43px] text-ink" />
          <SplitHeading
            as="p"
            className="mt-8 text-[clamp(1.6rem,3.4vw,3rem)] leading-[1.3] font-medium text-ink"
          >
            {quote}
          </SplitHeading>

          <footer className="mt-12">
            <Reveal as="p" className="text-h6 text-ink">
              {name}
            </Reveal>
            <Reveal as="p" className="mt-1 text-body-sm text-ink-soft">
              {role}
            </Reveal>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
