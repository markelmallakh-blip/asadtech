import ParallaxFigure from "@/components/motion/ParallaxFigure";
import Figure from "@/components/ui/Figure";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/**
 * The banner every inner page opens with (Figma 61:7842 and siblings).
 *
 * A dark full-bleed field with the page image sitting high and to the right,
 * and the title block overlapping it from the lower left. The image drifts on
 * scroll like every other photograph on the site.
 */
export default function PageHero({
  tagline,
  lines,
  image,
  alt,
  className,
}: {
  tagline: string;
  lines: string[];
  image?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-navy pt-[85px]",
        "min-h-[620px] lg:h-[984px]",
        className,
      )}
    >
      {/* ------------------------------------------------------ page image */}
      <div className="absolute inset-x-0 top-[85px] hidden lg:block">
        <div className="shell">
          <ParallaxFigure
            src={image ?? ""}
            alt={alt ?? ""}
            strength={12}
            tone="dark"
            label={alt}
            sizes="(max-width: 1512px) 70vw, 943px"
            className="ms-auto h-[506px] w-[min(943px,74vw)]"
          />
        </div>
      </div>

      {/* Keeps the title legible where it crosses the photograph */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/10"
      />

      {/* ------------------------------------------------------ title block */}
      <div className="shell relative flex h-full flex-col justify-end pb-24 lg:pb-[180px]">
        <Reveal as="p" kind="fade" className="text-body-lg text-white/70">
          {tagline}
        </Reveal>

        <SplitHeading
          as="h1"
          className="mt-3 max-w-[820px] text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] text-white"
        >
          {lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </SplitHeading>

        <Reveal kind="line" className="mt-8 h-px w-[28px] bg-white/60" />
      </div>

      {/* mobile image sits below the copy */}
      {image && (
        <div className="shell relative pb-16 lg:hidden">
          <Figure
            src={image}
            alt={alt ?? ""}
            tone="dark"
            sizes="100vw"
            className="aspect-[943/506] w-full"
          />
        </div>
      )}
    </section>
  );
}
