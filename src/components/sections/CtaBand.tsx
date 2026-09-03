import { en } from "@/content/en";
import Button from "@/components/ui/Button";
import Image from "next/image";
import SplitHeading from "@/components/motion/SplitHeading";
import { CheckCircle } from "@/components/ui/Icons";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export default function CtaBand() {
  const { heading, body, points, button, href } = en.cta;

  return (
    <section className="relative isolate overflow-hidden pb-8">
      <div className="parallax-frame absolute inset-0 -z-10">
        <div className="parallax-media" data-parallax="16">
          <Image
            src="/images/cta-background.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* 32px inset from the photograph on every side, rather than the wider
          page gutter, so the card reads as sitting on the image. */}
      <div className="px-8 pt-[220px] lg:pt-[290px]">
        <Reveal
          kind="fade-up"
          className="rounded-2xl bg-white px-8 py-12 lg:px-[44px] lg:py-[56px]"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SplitHeading className="text-h4 text-ink lg:text-h3">
                {heading[0]}{" "}
                <br />
                {heading[1]}
              </SplitHeading>
              <p className="mt-6 max-w-[420px] text-body leading-[1.6] text-ink-soft">
                {body}
              </p>
            </div>

            <div>
              <RevealGroup stagger={0.1} className="flex flex-col gap-6">
                {points.map((point) => (
                  <Reveal key={point.title} className="flex gap-3">
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-navy" />
                    <div>
                      <h3 className="text-h6 text-ink">{point.title}</h3>
                      <p className="mt-1 text-body-sm text-ink-soft">
                        {point.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </RevealGroup>

              <Reveal kind="fade" className="mt-10">
                <Button href={href} variant="primary" size="lg">
                  {button}
                </Button>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
