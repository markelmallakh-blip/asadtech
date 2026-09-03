import BackgroundVideo from "@/components/motion/BackgroundVideo";
import Figure from "@/components/ui/Figure";
import Button from "@/components/ui/Button";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";

/** The pinned media panel: full-bleed, and 180px of it sits under the card. */
const PANEL =
  "relative h-[420px] w-full lg:sticky lg:top-0 lg:-mb-[180px] lg:h-[850px]";

/**
 * Single-service header (Figma 74:9493).
 *
 * The footage pins to the top of the viewport for its full 850px while the
 * white card, pulled up 180px into it, rides over its lower edge — so the card
 * slides across the picture as the page moves rather than sitting beside it.
 * Below `lg` the two simply stack: pinning most of a viewport of footage is a
 * poor trade on a phone.
 */
export default function ServiceHero({
  eyebrow,
  headline,
  body,
  video,
  poster,
  cta,
  href,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  /** Optional — services without footage pin their still instead. */
  video?: string;
  poster: string;
  cta: string;
  href: string;
}) {
  return (
    <section className="flex flex-col bg-blue-10 pt-[85px] lg:items-end lg:pt-0">
      {/* Only cooling-units has footage so far; the rest pin their still. */}
      {video ? (
        <BackgroundVideo
          src={video}
          poster={poster}
          pingPong
          className={PANEL}
        />
      ) : (
        <Figure
          src={poster}
          alt=""
          tone="dark"
          sizes="100vw"
          className={PANEL}
        />
      )}

      <div className="relative flex w-full flex-col bg-white p-8 lg:h-[489px] lg:w-[698px] lg:p-[60px]">
        <div className="flex max-w-[768px] flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <Reveal
                as="p"
                kind="fade"
                className="text-h6 font-semibold text-blue capitalize"
              >
                {eyebrow}
              </Reveal>
              <SplitHeading
                as="h1"
                className="max-w-[559px] text-[clamp(2rem,3.4vw,2.625rem)] leading-[1.25] font-semibold text-text-dark"
              >
                {headline}
              </SplitHeading>
            </div>

            <Reveal as="p" className="text-body leading-[1.5] text-text-dark">
              {body}
            </Reveal>
          </div>

          <Reveal kind="fade">
            <Button href={href} variant="primary" size="lg">
              {cta}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
