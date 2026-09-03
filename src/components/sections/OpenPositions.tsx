import Link from "next/link";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { BriefcaseIcon } from "@/components/ui/Icons";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import type { Opening } from "@/content/pages/careers";

/** Ruled list of openings, each with its briefcase and an Explore CTA (Figma 126:6573). */
export default function OpenPositions({
  heading,
  cta,
  openings,
  locale,
}: {
  heading: string;
  cta: string;
  openings: readonly Opening[];
  locale: string;
}) {
  return (
    <section className="bg-white py-20 lg:py-[80px]">
      <div className="shell lg:px-[160px]">
        <SplitHeading as="h2" className="text-h5 text-navy lg:text-h4">
          {heading}
        </SplitHeading>

        <RevealGroup stagger={0.08} className="mt-8 border-t border-grey-3">
          {openings.map((role) => {
            const href = `/${locale}/careers/${role.slug}`;
            return (
              <Reveal
                key={role.slug}
                kind="fade"
                className="flex flex-col gap-6 border-b border-grey-3 py-8 sm:flex-row sm:items-center sm:justify-between lg:py-[62px]"
              >
                <div className="flex items-center gap-6 lg:gap-8">
                  <BriefcaseIcon className="size-[68px] shrink-0 text-blue" />
                  <div className="flex flex-col gap-4">
                    <h3 className="text-h6 font-semibold text-text-dark lg:text-h5">
                      <Link
                        href={href}
                        className="transition-colors duration-300 hover:text-blue"
                      >
                        {role.title}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Tag>{role.location}</Tag>
                      <Tag>{role.type}</Tag>
                    </div>
                  </div>
                </div>

                <Button href={href} variant="primary" size="md" className="self-start sm:self-auto">
                  {cta}
                </Button>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
