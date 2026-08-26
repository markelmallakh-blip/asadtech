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
          className="group/band block bg-teal py-16 transition-colors duration-500 hover:bg-blue lg:py-[70px]"
        >
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
