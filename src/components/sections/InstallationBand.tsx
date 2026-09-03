import ParallaxFigure from "@/components/motion/ParallaxFigure";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";

/**
 * Full-bleed installation photograph with the headline top-left and a white
 * card of installation notes bottom-right (Figma 79:10358).
 */
export default function InstallationBand({
  tag,
  heading,
  image,
  rows,
  cta,
  href,
}: {
  tag: string;
  heading: string;
  image: string;
  rows: readonly { title: string; body: string }[];
  cta: string;
  href: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <ParallaxFigure
        src={image}
        alt=""
        strength={14}
        tone="dark"
        sizes="100vw"
        className="absolute inset-0 -z-10"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/40" />

      <div className="shell flex min-h-[640px] flex-col justify-between gap-16 pt-20 pb-10 lg:min-h-[980px] lg:pt-[80px] lg:pb-[60px]">
        <div className="flex flex-col items-start">
          <Reveal
            as="p"
            kind="fade"
            className="-mb-0.5 bg-blue px-1.5 text-body-sm font-semibold text-white/70"
          >
            {tag}
          </Reveal>
          <SplitHeading
            as="h2"
            className="max-w-[422px] text-h4 text-white lg:text-h3"
          >
            {heading}
          </SplitHeading>
        </div>

        <Reveal
          kind="fade-up"
          className="flex w-full flex-col gap-4 self-end bg-white p-6 lg:w-[566px]"
        >
          {rows.map((row) => (
            <div
              key={row.title}
              className="flex flex-col gap-2.5 border-b border-grey-4 pb-4"
            >
              <h3 className="text-h6 font-semibold text-text-dark capitalize">
                {row.title}
              </h3>
              <p className="text-body-sm text-[#131313]/70">{row.body}</p>
            </div>
          ))}

          <Button href={href} variant="primary" size="lg" className="self-start">
            {cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
