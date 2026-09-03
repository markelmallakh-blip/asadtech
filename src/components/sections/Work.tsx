import Link from "next/link";
import { en } from "@/content/en";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectList from "@/components/sections/ProjectList";
import { Reveal } from "@/components/motion/Reveal";

/**
 * "Our Project" — a list of project rows (Figma 55:4269 / 105:989).
 *
 * Each row carries an index, the project, its tags and the pair of site
 * photographs. Hovering floods the row blue and a label tracks the cursor,
 * which is why the pointer position is tracked here rather than done in CSS.
 */
export default function Work() {
  const { tagline, heading, allCta, allHref, projects } = en.work;


  return (
    <section className="overflow-hidden bg-white py-24 lg:pt-[80px] lg:pb-0">
      <SectionTitle
        tagline={tagline}
        lines={[heading]}
        align="start"
        className="shell"
      />

      <div className="mt-12 lg:mt-[52px]">
        <ProjectList projects={projects} />
      </div>

      {/* --------------------------------------------------- teal CTA band */}
      <Reveal kind="fade">
        <Link
          href={allHref}
          className="group/band relative isolate block overflow-hidden bg-teal py-16 lg:py-[70px]"
        >
          {/* Blue arrives as a circle opening out of the middle rather than a
              flat colour swap. Sized off the width so it always clears the
              band's corners. */}
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[130%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-blue transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/band:scale-100"
          />
          <span className="shell flex justify-center">
            <span className="inline-flex h-[46px] items-center rounded-full border-2 border-white px-7 text-body-sm font-medium text-white">
              {allCta}
            </span>
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
