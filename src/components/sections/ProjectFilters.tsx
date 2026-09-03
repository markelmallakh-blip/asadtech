"use client";

import { useMemo, useState } from "react";
import SegmentedTabs from "@/components/ui/SegmentedTabs";
import ProjectList, { type Project } from "@/components/sections/ProjectList";
import { Reveal } from "@/components/motion/Reveal";

/** Segmented filter over the project rows (Figma 105:1669). */
export default function ProjectFilters({
  filters,
  projects,
}: {
  filters: readonly string[];
  projects: readonly Project[];
}) {
  const [active, setActive] = useState(filters[0]);

  const shown = useMemo(() => {
    if (active === filters[0]) return projects;
    /* Tags are matched loosely so "Tail Lifter" also catches "Tail Lifters". */
    const needle = active.replace(/s$/, "").toLowerCase();
    return projects.filter((p) =>
      p.tags.some((tag) => tag.toLowerCase().includes(needle)),
    );
  }, [active, filters, projects]);

  return (
    <section className="bg-white">
      <Reveal kind="fade" className="shell flex justify-end py-6">
        <SegmentedTabs
          options={filters}
          value={active}
          onChange={setActive}
          label="Filter projects"
        />
      </Reveal>

      {shown.length > 0 ? (
        <ProjectList key={active} projects={shown} />
      ) : (
        <p className="shell py-16 text-center text-body text-ink-soft">
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}
