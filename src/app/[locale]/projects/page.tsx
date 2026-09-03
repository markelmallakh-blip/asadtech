import type { Metadata } from "next";
import { en } from "@/content/en";
import { projectsPage } from "@/content/pages/projects";
import Banner, { BannerChip } from "@/components/layout/Banner";
import Button from "@/components/ui/Button";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";
import ProjectFilters from "@/components/sections/ProjectFilters";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Cold rooms, transport refrigeration, tail lifters and spider cranes delivered across Saudi Arabia by Asad Advanced Technologies.",
};

/** Projects index (Figma 97:11509). */
export default function ProjectsPage() {
  const { hero, filters } = projectsPage;

  return (
    <>
      <Banner variant="photo" image={hero.image.src} alt={hero.image.alt}>
        <div className="shell flex flex-col pt-[150px] pb-20 lg:pt-[180px] lg:pb-[120px]">
          <div className="flex max-w-[768px] flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-2.5">
                <BannerChip>{hero.chip}</BannerChip>
                <SplitHeading
                  as="h1"
                  className="max-w-[559px] text-h5 font-semibold lg:text-h4"
                >
                  {hero.heading}
                </SplitHeading>
              </div>
              <Reveal as="p" className="text-body leading-[1.5] font-light">
                {hero.body}
              </Reveal>
            </div>

            <Reveal kind="fade">
              <Button href={hero.href} variant="primary" size="lg">
                {hero.cta}
              </Button>
            </Reveal>
          </div>
        </div>
      </Banner>

      <ProjectFilters filters={filters} projects={en.work.projects} />

      <CtaBand />
    </>
  );
}
