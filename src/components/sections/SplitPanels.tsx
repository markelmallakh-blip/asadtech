import ParallaxFigure from "@/components/motion/ParallaxFigure";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

/**
 * A white title card beside a blue panel of rows (Figma 69:8676).
 *
 * The photograph is anchored to the card rather than laid out with the
 * heading: it starts a fixed distance down and runs the full width of the
 * card, ignoring its padding, so the card can stretch to whatever height the
 * panel beside it needs without the picture moving or stretching with it.
 *
 * Used for both the features and the specification, which are the same
 * composition with different rows.
 */
export default function SplitPanels({
  heading,
  image,
  items,
}: {
  heading: string;
  image: string;
  items: readonly { title: string; body: string }[];
}) {
  return (
    <section className="bg-blue-10 py-20 lg:py-[100px]">
      <div className="shell flex flex-col gap-2.5 lg:flex-row lg:items-stretch">
        {/* ------------------------------------------------------ title card */}
        <div className="relative overflow-hidden bg-white p-8 max-lg:pb-0 lg:w-[443px] lg:shrink-0">
          <SplitHeading
            as="h2"
            className="max-w-[346px] text-[clamp(1.75rem,3.4vw,2.625rem)] leading-[1.25] font-semibold text-text-dark"
          >
            {heading}
          </SplitHeading>

          <Reveal
            kind="clip"
            className="mt-8 lg:absolute lg:inset-x-0 lg:top-[166px] lg:mt-0"
          >
            <ParallaxFigure
              src={image}
              alt=""
              strength={12}
              sizes="443px"
              /* Mirrored, as it is in Figma */
              className="h-[240px] w-full -scale-x-100 lg:h-[348px]"
            />
          </Reveal>
        </div>

        {/* ----------------------------------------------------- rows panel */}
        <RevealGroup
          stagger={0.08}
          className="flex flex-1 flex-col gap-6 overflow-hidden bg-blue px-8 py-10 lg:py-[60px]"
        >
          {items.map((item) => (
            <Reveal key={item.title}>
              <h3 className="text-h6 font-semibold text-white capitalize">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[844px] text-body leading-[1.3] text-text-light">
                {item.body}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
