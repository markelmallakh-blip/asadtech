import Image from "next/image";
import { en } from "@/content/en";
import SplitHeading from "@/components/motion/SplitHeading";
import HeroCard from "@/components/motion/HeroCard";
import HeroTruck from "@/components/motion/HeroTruck";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export default function Hero() {
  const { tagline, headline, trust } = en.hero;

  return (
    /* Locked to exactly one viewport: a fixed height plus a flex column, so
       the vehicle takes whatever room is left instead of pushing the section
       past the fold. `svh` keeps it honest on mobile browser chrome. */
    <section
      data-parallax-scope
      className="relative isolate flex h-[100svh] flex-col overflow-hidden bg-navy"
    >
      {/* ---------------------------------------------------- sky background */}
      <div className="absolute inset-0 -z-20">
        <div className="parallax-frame absolute inset-0">
          <div className="parallax-media" data-parallax="18">
            <Image
              src="/images/hero-background.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/10 to-navy/45" />
      </div>

      {/* ------------------------------------------------------------- copy */}
      <div className="shell relative z-10 shrink-0 pt-[112px] text-center lg:pt-[150px]">
        <Reveal
          as="p"
          kind="fade"
          delay={0.15}
          className="inline-block rounded-md bg-blue px-3 py-1.5 text-body-sm font-semibold text-white"
        >
          {tagline}
        </Reveal>

        <SplitHeading
          as="h1"
          delay={0.2}
          className="mx-auto mt-4 max-w-[920px] text-[clamp(2rem,5.6vw,4.5rem)] leading-[1.12] text-white"
        >
          {headline.before}{" "}
          <span className="font-script font-medium italic">
            {headline.script}
          </span>{" "}
          <br />
          {headline.after}
        </SplitHeading>
      </div>

      {/* ------------------------------------------------------------ truck */}
      <div className="relative z-0 min-h-0 flex-1 pt-6">
        <div className="mx-auto h-full w-full max-w-[1100px] px-4 lg:px-0">
          <HeroTruck
            src="/images/hero-truck.webp"
            alt="Asadtech refrigerated delivery truck loaded with fresh produce"
            className="h-full w-full"
          />
        </div>
      </div>

      {/* ------------------------------------------------------ foreground UI */}
      <div className="shell pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col gap-6 pb-8 lg:flex-row lg:items-end lg:justify-between lg:pb-12">
        <RevealGroup className="pointer-events-auto flex items-center gap-4" stagger={0.06}>
          <Reveal kind="fade" className="flex -space-x-3">
            {trust.logos.map((logo, i) => {
              const isLast = i === trust.logos.length - 1;

              return (
                <span
                  key={logo}
                  /* Ascending z-index so the stack reads last-on-top. */
                  style={{ zIndex: i + 1 }}
                  className="relative flex size-11 items-center justify-center overflow-hidden rounded-full border-2 border-white/70 bg-white"
                >
                  <Image
                    src={logo}
                    alt=""
                    width={36}
                    height={36}
                    className="h-auto max-h-6 w-auto object-contain"
                  />

                  {/* The last disc carries the count over a dark scrim. */}
                  {isLast && (
                    <span className="absolute inset-0 flex items-center justify-center bg-navy/75 text-body-xs font-semibold text-white">
                      {trust.more}
                    </span>
                  )}
                </span>
              );
            })}
          </Reveal>
          <Reveal>
            <p className="text-body-sm text-white/80">{trust.label}</p>
            <p className="text-h6 text-white">{trust.value}</p>
          </Reveal>
        </RevealGroup>

        <Reveal kind="fade-up" delay={0.35} className="w-full lg:w-auto">
          <HeroCard />
        </Reveal>
      </div>
    </section>
  );
}
