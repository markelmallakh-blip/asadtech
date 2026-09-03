import { about } from "@/content/pages/about";
import StatementSignOff from "@/components/motion/StatementSignOff";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

/**
 * The chairman's message: light centred copy signed off by hand (Figma
 * 69:7962).
 *
 * His portrait enters large at the top of the section and is scrubbed down the
 * page as the message is read, turning upright and shrinking until it lands in
 * the slot above the signature — which is written underneath it as it arrives.
 * The path itself lives in StatementSignOff.
 */
export default function AboutStatement() {
  const { tagline, paragraphs, signature, role, image } = about.statement;

  return (
    <section className="relative overflow-hidden bg-grey-05 py-20 lg:py-[80px]">
      <Reveal
        as="p"
        kind="fade"
        className="shell text-center text-h5 font-semibold text-blue"
      >
        {tagline}
      </Reveal>

      <div data-statement-stage className="shell relative mt-8">
        <div className="mx-auto max-w-[965px] text-center">
          <RevealGroup stagger={0.12} className="flex flex-col gap-6">
            {paragraphs.map((paragraph: string) => (
              <Reveal
                key={paragraph}
                as="p"
                className="text-[clamp(1.25rem,2.2vw,2rem)] leading-[1.3] font-light text-text-dark"
              >
                {paragraph}
              </Reveal>
            ))}
          </RevealGroup>

          {/* The signature runs up under the photograph, as it does in Figma */}
          <div className="mt-16 flex flex-col items-center">
            <StatementSignOff
              src={image.src}
              alt={image.alt}
              className="h-[127px] w-[102px]"
            />
            <p
              data-statement-signature
              className="-mt-2 font-signature text-[39px] leading-[1.5] text-blue"
            >
              {signature}
            </p>
            <p className="text-body text-ink">{role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
