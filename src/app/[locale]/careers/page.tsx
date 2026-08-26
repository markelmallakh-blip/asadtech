import type { Metadata } from "next";
import Link from "next/link";
import { careersPage, openings } from "@/content/pages/careers";
import PageHero from "@/components/layout/PageHero";
import SplitHeading from "@/components/motion/SplitHeading";
import CtaBand from "@/components/sections/CtaBand";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Engineering, project and service roles at Asad Advanced Technologies across Riyadh, Jeddah and Dammam.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        tagline={careersPage.hero.tagline}
        lines={[...careersPage.hero.lines]}
        image={careersPage.hero.image.src}
        alt={careersPage.hero.image.alt}
      />

      {/* ---------------------------------------------------------- intro */}
      <section className="shell py-20 lg:py-[80px]">
        <div className="grid gap-8 lg:grid-cols-[380fr_1012fr] lg:gap-16">
          <Reveal as="p" kind="fade" className="text-h6 text-blue">
            {careersPage.intro.tagline}
          </Reveal>
          <SplitHeading
            as="p"
            className="text-[clamp(1.15rem,2vw,1.75rem)] leading-[1.45] font-medium text-text-dark"
          >
            {careersPage.intro.body}
          </SplitHeading>
        </div>
      </section>

      {/* ------------------------------------------------------- benefits */}
      <section className="bg-blue-10 py-20 lg:py-[80px]">
        <div className="shell">
          <SplitHeading as="h2" className="text-h4 text-ink lg:text-h3">
            {careersPage.benefits.heading}
          </SplitHeading>

          <RevealGroup
            stagger={0.1}
            className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {careersPage.benefits.items.map((item, i) => (
              <Reveal key={item.title}>
                <p className="font-display text-h5 leading-none text-blue">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-h6 text-ink">{item.title}</h3>
                <p className="mt-2 text-body-sm leading-[1.6] text-ink-soft">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ------------------------------------------------------- openings */}
      <section className="py-20 lg:py-[80px]">
        <SplitHeading as="h2" className="shell text-h4 text-ink lg:text-h3">
          Open positions
        </SplitHeading>

        <div className="mt-10 border-t border-blue-20">
          <RevealGroup stagger={0.06}>
            {openings.map((role) => (
              <Reveal key={role.slug} kind="fade">
                <Link
                  href={`/en/careers/${role.slug}`}
                  className="group relative isolate block overflow-hidden border-b border-blue-20"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 origin-left scale-x-0 bg-blue transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />

                  <div className="shell grid grid-cols-1 items-center gap-4 py-8 lg:grid-cols-[minmax(0,1fr)_180px_150px_120px_auto] lg:gap-8">
                    <div className="max-w-[520px]">
                      <h3 className="text-h6 text-ink transition-colors duration-400 group-hover:text-white">
                        {role.title}
                      </h3>
                      <p className="mt-1.5 text-body-sm leading-[1.45] text-ink-soft transition-colors duration-400 group-hover:text-white/80">
                        {role.summary}
                      </p>
                    </div>

                    {[role.department, role.location, role.type].map((meta) => (
                      <span
                        key={meta}
                        className="text-body-sm text-ink-soft transition-colors duration-400 group-hover:text-white/80"
                      >
                        {meta}
                      </span>
                    ))}

                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45 lg:justify-self-end">
                      <ArrowUpRight className="size-6" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
