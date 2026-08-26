import { about } from "@/content/pages/about";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";

/** Tagline left, statement right (Figma 61:7135). */
export default function AboutIntro() {
  const { tagline, quote } = about.intro;

  return (
    <section className="shell py-20 lg:py-[100px]">
      <div className="grid gap-8 lg:grid-cols-[524fr_868fr] lg:gap-0">
        <Reveal as="p" kind="fade" className="text-h6 text-blue">
          {tagline}
        </Reveal>

        <SplitHeading
          as="p"
          className="text-[clamp(1.25rem,2.3vw,2rem)] leading-[1.4] font-medium text-text-dark"
        >
          {quote}
        </SplitHeading>
      </div>
    </section>
  );
}
