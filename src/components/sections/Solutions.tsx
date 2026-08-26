import Image from "next/image";
import Link from "next/link";
import { en } from "@/content/en";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/ui/SectionTitle";
import PinnedRail from "@/components/motion/PinnedRail";
import { ArrowUpRight } from "@/components/ui/Icons";

/** Per-group palettes, straight from the Figma (node 121:2103). */
const palette = {
  navy: { title: "bg-white text-text-dark", panel: "bg-navy" },
  blue: { title: "bg-blue-20 text-text-dark", panel: "bg-blue" },
  teal: { title: "bg-teal-20 text-text-dark", panel: "bg-teal" },
} as const;

export default function Solutions() {
  const { tagline, heading, groups } = en.solutions;

  return (
    <section className="py-16 lg:py-0">
      <PinnedRail
        header={
          <SectionTitle tagline={tagline} lines={[heading]} className="shell" />
        }
        railClassName="items-stretch gap-4 lg:gap-8"
      >
        {groups.map((group) => {
          const skin = palette[group.tone];

          return (
            <article
              key={group.id}
              className="flex h-full max-h-[647px] w-[88vw] shrink-0 flex-col overflow-hidden lg:w-[1392px] lg:flex-row"
            >
              {/* -------------------------------------------- title panel */}
              <div
                className={cn(
                  "flex shrink-0 items-start p-8 lg:w-[335px]",
                  skin.title,
                )}
              >
                <h3 className="text-h4 lg:text-h3">{group.title}</h3>
              </div>

              {/* --------------------------------------------- dark panel */}
              <div
                className={cn(
                  "relative isolate flex min-h-0 flex-1 flex-col overflow-hidden p-6 lg:ms-[10px]",
                  skin.panel,
                )}
              >
                {/* Oversized brand mark bleeding out of the panel */}
                <svg
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                  className="pointer-events-none absolute -end-[8%] -top-[55%] -z-10 h-[210%] w-auto text-white/[0.06]"
                >
                  <path d="M50 6 92 94H70L50 48 30 94H8Z" fill="currentColor" />
                </svg>

                {/* Fixed 126px block (3 lines at the Figma size) so the card
                    row starts at the same offset in every panel, and every
                    widget across the whole rail ends up the same height. */}
                <p className="max-w-[844px] text-[clamp(1.1rem,1.9vw,2rem)] leading-[1.3] font-medium text-white lg:h-[126px]">
                  {group.body}
                </p>

                {/* Cards stretch to a shared height, so every widget in the
                    row ends up identical no matter how long its copy is. */}
                <div className="mt-auto flex min-h-0 flex-wrap gap-4 pt-8 lg:h-[381px] lg:flex-nowrap lg:justify-end">
                  {group.products.map((product) => (
                    <Link
                      key={product.title}
                      href={product.href}
                      className="group flex h-full w-full flex-col sm:w-[319px]"
                    >
                      {/* Image absorbs the leftover height … */}
                      <div className="relative min-h-0 flex-1 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="319px"
                          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                        />
                      </div>

                      {/* … while the copy block stays a fixed 180px. */}
                      <div className="relative h-[180px] shrink-0 bg-white p-4">
                        <span className="absolute -top-7 end-4 flex size-14 items-center justify-center rounded-full border-2 border-white bg-blue text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:rotate-45">
                          <ArrowUpRight className="size-[30px]" />
                        </span>

                        <h4 className="text-h6 text-ink">{product.title}</h4>
                        <p className="mt-2 text-body-sm leading-[1.3] text-ink-soft">
                          {product.body}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </PinnedRail>
    </section>
  );
}
