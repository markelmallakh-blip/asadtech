import { en } from "@/content/en";
import Image from "next/image";
import { TextLink } from "@/components/ui/Button";
import AnimatedHeading from "@/components/motion/AnimatedHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export default function Certified() {
  const { words, chips, certificates, partners } = en.certified;

  const chip = (text: string) => (
    <span className="inline-flex shrink-0 items-center rounded-full border border-grey-2 px-4 py-1.5 font-sans text-body-xs font-medium tracking-[0.08em] text-text-muted uppercase">
      {text}
    </span>
  );

  return (
    <section className="relative overflow-hidden bg-grey-05">
      {/* Faint swoosh mirroring the Figma background vector */}
      <svg
        viewBox="0 0 525 908"
        aria-hidden="true"
        className="pointer-events-none absolute end-0 top-8 hidden h-[908px] w-[525px] text-grey-2/70 lg:block"
      >
        <path
          d="M524 1C300 180 96 402 24 640c-30 100 6 190 106 266"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M470 120C286 300 120 500 70 700"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* ------------------------------------------------ display word stack */}
      <div className="shell relative pt-24 pb-16 lg:pt-[205px] lg:pb-[120px]">
        <AnimatedHeading
          stagger={0.16}
          className="flex flex-col gap-2 font-display text-[clamp(3.5rem,11vw,10rem)] leading-[1.02] text-text-dark"
          lines={[
            <span key="0" className="flex items-center justify-center gap-6">
              {words[0]}
              <span className="hidden lg:inline">{chip(chips[0])}</span>
            </span>,
            <span key="1" className="flex items-center justify-center gap-6 lg:ps-[18%]">
              <span className="hidden lg:inline">{chip(chips[1])}</span>
              {words[1]}
            </span>,
            <span key="2" className="flex items-center justify-center gap-6 lg:pe-[16%]">
              {words[2]}
              <span className="hidden lg:inline">{chip(chips[2])}</span>
            </span>,
          ]}
        />
      </div>

      {/* ---------------------------------------------------- certificates */}
      <div className="shell">
        <Reveal kind="line" className="h-px w-full bg-grey-2" />

        <div className="grid gap-12 py-16 lg:grid-cols-[470fr_791fr] lg:gap-[131px] lg:py-[130px]">
          <Reveal>
            <h2 className="text-h5 text-ink">{certificates.heading}</h2>
            <p className="mt-6 text-body-sm leading-[1.6] text-ink-soft">
              {certificates.body}
            </p>
          </Reveal>

          <RevealGroup stagger={0.12} className="flex flex-col">
            {certificates.items.map((item, index) => (
              <div key={item.title}>
                {index > 0 && <div className="my-10 h-px w-full bg-grey-2" />}
                <Reveal className="flex items-center gap-8">
                  <div className="relative h-[153px] w-[122px] shrink-0 overflow-hidden rounded-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="122px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-h6 text-ink">{item.title}</h3>
                    <TextLink href={item.href} className="mt-4">
                      {certificates.cta}
                    </TextLink>
                  </div>
                </Reveal>
              </div>
            ))}
          </RevealGroup>
        </div>

        <Reveal kind="line" className="h-px w-full bg-grey-2" />

        {/* --------------------------------------------------------- partners */}
        <div className="py-16 lg:py-[70px] lg:pb-[80px]">
          <Reveal>
            <h2 className="text-h5 text-ink">{partners.heading}</h2>
            <p className="mt-3 text-body-sm text-ink-soft">{partners.body}</p>
          </Reveal>

          <RevealGroup
            stagger={0.06}
            className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7"
          >
            {partners.items.map((partner) => (
              <Reveal
                key={partner.name}
                kind="fade"
                className="flex h-[110px] items-center justify-center rounded-sm bg-white px-5 grayscale transition-all duration-500 hover:grayscale-0"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={120}
                  height={56}
                  className="h-auto max-h-14 w-auto object-contain"
                />
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
