import { about } from "@/content/pages/about";
import Counter from "@/components/motion/Counter";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

/**
 * The figures, on a navy band: two stacked photographs beside a 2×2 grid of
 * teal numerals (Figma 61:7146).
 */
export default function AboutNumbers() {
  const { tagline, images, stats } = about.numbers;

  return (
    <section className="bg-navy py-20 lg:py-[80px]">
      <div className="shell">
        <Reveal as="p" kind="fade" className="text-h5 font-semibold text-white">
          {tagline}
        </Reveal>

        <div className="mt-10 grid gap-12 lg:mt-[60px] lg:grid-cols-[539fr_711fr] lg:gap-[142px]">
          {/* photographs */}
          <div className="flex items-start gap-4 lg:py-[30px]">
            <Reveal kind="clip" className="w-[223px] shrink-0">
              <ParallaxFigure
                src={images[0].src}
                alt={images[0].alt}
                strength={16}
                tone="dark"
                sizes="223px"
                className="aspect-[223/226] w-full"
              />
            </Reveal>
            <Reveal kind="clip" delay={0.1} className="flex-1">
              <ParallaxFigure
                src={images[1].src}
                alt={images[1].alt}
                strength={16}
                tone="dark"
                sizes="300px"
                className="aspect-[300/404] w-full"
              />
            </Reveal>
          </div>

          {/* figures */}
          <RevealGroup stagger={0.1} className="grid grid-cols-2 gap-20">
            {stats.map((stat) => (
              <Reveal key={stat.label} className="flex flex-col justify-end">
                <p className="text-body-lg font-medium text-white">
                  {stat.label}
                </p>
                <p className="font-display text-[clamp(3rem,6.6vw,6.25rem)] leading-[1.06] font-bold text-teal">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
