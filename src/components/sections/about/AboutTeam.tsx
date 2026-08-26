import Link from "next/link";
import { about } from "@/content/pages/about";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

/**
 * Leadership grid (Figma 69:8360). Members alternate between a tall and a
 * short card and the pair swaps sides row by row, which is what gives the
 * column its staggered rhythm.
 */
export default function AboutTeam() {
  const { heading, members, careers } = about.team;

  const rows = Array.from({ length: Math.ceil(members.length / 2) }, (_, i) =>
    members.slice(i * 2, i * 2 + 2),
  );

  return (
    <section className="shell py-20 lg:py-[60px]">
      <Reveal as="h2" kind="fade" className="text-h6 text-blue">
        {heading}
      </Reveal>

      <div className="mt-10 flex flex-col gap-12 lg:mt-[70px] lg:gap-0">
        {rows.map((row, rowIndex) => (
          <RevealGroup
            key={rowIndex}
            stagger={0.12}
            className={cn(
              "grid gap-8 sm:grid-cols-2 lg:gap-8",
              /* the pair alternates between the right and left half */
              rowIndex % 2 === 0 ? "lg:ms-auto lg:w-[717px]" : "lg:me-auto lg:w-[717px]",
            )}
          >
            {row.map((member, i) => {
              const tall = i === 1;

              return (
                <Reveal key={member.name} kind="clip">
                  <ParallaxFigure
                    src={member.image}
                    alt={member.name}
                    strength={12}
                    sizes="(max-width: 640px) 100vw, 380px"
                    label={member.name}
                    className={cn(
                      "w-full",
                      tall ? "aspect-[380/424]" : "aspect-[305/340]",
                    )}
                  />

                  <div className="mt-6 flex gap-3">
                    <span className="mt-2 size-6 shrink-0 rounded-full bg-blue" />
                    <div>
                      <h3 className="text-h6 leading-[1.25] text-ink">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-body-sm text-ink-soft">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>
        ))}
      </div>

      {/* ------------------------------------------------------ careers band */}
      <Reveal
        kind="fade-up"
        className="mt-16 flex flex-col items-start justify-between gap-8 bg-blue-10 p-10 lg:mt-[80px] lg:flex-row lg:items-center lg:ps-[60px]"
      >
        <div className="max-w-[470px]">
          <h3 className="text-h4 text-ink">{careers.heading}</h3>
          <p className="mt-3 text-body text-ink-soft">{careers.body}</p>
          <Button href={careers.href} variant="primary" size="lg" className="mt-8">
            {careers.cta}
          </Button>
        </div>

        <Link href={careers.href} className="shrink-0">
          <ParallaxFigure
            src={careers.image.src}
            alt={careers.image.alt}
            strength={10}
            sizes="190px"
            className="h-[221px] w-[190px]"
          />
        </Link>
      </Reveal>
    </section>
  );
}
