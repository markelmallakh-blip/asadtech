import type { Metadata } from "next";
import { en } from "@/content/en";
import { projectsPage } from "@/content/pages/projects";
import PageHero from "@/components/layout/PageHero";
import ProjectFilters from "@/components/sections/ProjectFilters";
import RequestInterest from "@/components/sections/RequestInterest";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Cold rooms, transport refrigeration, tail lifters and spider cranes delivered across Saudi Arabia by Asad Advanced Technologies.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        tagline={projectsPage.hero.tagline}
        lines={[...projectsPage.hero.lines]}
        image={projectsPage.hero.image.src}
        alt={projectsPage.hero.image.alt}
      />

      <ProjectFilters
        filters={[...projectsPage.filters]}
        projects={en.work.projects}
      />

      <RequestInterest />
      <CtaBand />
    </>
  );
}
