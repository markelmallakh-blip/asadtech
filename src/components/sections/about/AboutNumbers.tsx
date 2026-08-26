import { about } from "@/content/pages/about";
import Counter from "@/components/motion/Counter";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

/** Two stacked photographs beside a 2×2 grid of figures (Figma 61:7146). */
export default function AboutNumbers() {
  const { tagline, images, stats } = about.numbers;

  return (
    <section className="shell py-20 lg:py-[80px]">
      <Reveal as="p" kind="fade" className="text-h6 text-blue">
        {tagline}
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[539fr_711fr] lg:gap-[142px]">
        {/* photographs */}
        <div className="flex items-start gap-4">
          <Reveal kind="clip" className="mt-[30px] w-[223px] shrink-0">
            <ParallaxFigure
              src={images[0].src}
              alt={images[0].alt}
              strength={16}
              sizes="223px"
              className="aspect-[223/226] w-full"
            />
          </Reveal>
          <Reveal kind="clip" delay={0.1} className="mt-[30px] flex-1">
            <ParallaxFigure
              src={images[1].src}
              alt={images[1].alt}
              strength={16}
              sizes="300px"
              className="aspect-[300/404] w-full"
            />
          </Reveal>
        </div>

        {/* figures */}
        <RevealGroup stagger={0.1} className="grid grid-cols-2 gap-x-20 gap-y-20">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <p className="text-body text-ink-soft">{stat.label}</p>
              <p className="mt-2 font-display text-[clamp(3rem,5.5vw,5.25rem)] leading-none text-blue">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
