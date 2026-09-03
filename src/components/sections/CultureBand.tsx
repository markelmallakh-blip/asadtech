import LanyardBadge from "@/components/motion/LanyardBadge";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const TONES = {
  blue: "bg-blue text-white",
  white: "bg-white text-text-dark",
  teal: "bg-teal text-white",
} as const;

/**
 * The careers culture band (Figma 127:7154): the staff pass hanging on the
 * left, and four promise cards on the right in blue, white, white and teal.
 */
export default function CultureBand({
  heading,
  body,
  badge,
  cards,
}: {
  heading: string;
  body: string;
  badge: { src: string; alt: string };
  cards: readonly { tone: keyof typeof TONES; title: string; body: string }[];
}) {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#050721_20.7%,var(--color-blue)_100%)]">
      <div className="shell flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between">
        <Reveal kind="fade" className="flex justify-center lg:w-[452px] lg:shrink-0">
          <LanyardBadge
            src={badge.src}
            alt={badge.alt}
            tilt={-10}
            className="w-[280px] lg:w-full"
          />
        </Reveal>

        <div className="flex flex-col gap-10 py-14 lg:w-[873px] lg:gap-[60px] lg:py-[60px]">
          <div className="flex flex-col gap-4 text-white">
            <SplitHeading as="h2" className="text-h5 lg:text-h4">
              {heading}
            </SplitHeading>
            <Reveal as="p" className="max-w-[662px] text-body">
              {body}
            </Reveal>
          </div>

          <RevealGroup stagger={0.08} className="grid gap-6 sm:grid-cols-2">
            {cards.map((card) => (
              <Reveal
                key={card.title}
                className={cn(
                  "flex min-h-[160px] flex-col gap-4 p-6",
                  TONES[card.tone],
                )}
              >
                <h3 className="text-h6 font-semibold capitalize">{card.title}</h3>
                <p
                  className={cn(
                    "text-body",
                    card.tone === "white" ? "text-text-muted" : "text-white",
                  )}
                >
                  {card.body}
                </p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
