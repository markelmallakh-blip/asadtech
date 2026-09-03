import ParallaxFigure from "@/components/motion/ParallaxFigure";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

/** How many pictures each column holds: two tall, three wide, two tall. */
const COLUMNS = [2, 3, 2] as const;

/**
 * Three-column picture grid under a centred heading (Figma 79:11076).
 *
 * Pictures are read down the columns in order. A service with fewer than
 * seven simply repeats from the start, so the grid is never left ragged.
 */
export default function GalleryGrid({
  tagline,
  heading,
  images,
  alt,
}: {
  tagline: string;
  heading: string;
  images: readonly string[];
  alt: string;
}) {
  if (images.length === 0) return null;

  let index = 0;
  const columns = COLUMNS.map((count) =>
    Array.from({ length: count }, () => images[index++ % images.length]),
  );

  return (
    <section className="bg-grey-05 pt-[60px] pb-20 lg:pb-[80px]">
      <div className="shell flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1 text-center">
          <Reveal as="p" kind="fade" className="text-body-sm font-semibold text-blue/70">
            {tagline}
          </Reveal>
          <SplitHeading
            as="h2"
            className="max-w-[622px] text-h4 text-text-dark lg:text-h2"
          >
            {heading}
          </SplitHeading>
        </div>

        <RevealGroup stagger={0.06} className="grid w-full gap-4 lg:grid-cols-3">
          {columns.map((column, c) => (
            <div key={c} className="flex flex-col gap-4">
              {column.map((src, i) => (
                <Reveal key={`${c}-${i}`} kind="clip">
                  <ParallaxFigure
                    src={src}
                    alt={`${alt} ${c * 3 + i + 1}`}
                    strength={12}
                    sizes="(max-width: 1024px) 100vw, 443px"
                    className={
                      column.length === 2
                        ? "aspect-[443/494.5] w-full"
                        : "aspect-[442/324] w-full"
                    }
                  />
                </Reveal>
              ))}
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
