"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import ProjectList, { type Project } from "@/components/sections/ProjectList";
import { Reveal } from "@/components/motion/Reveal";

/** Filter pills over the project rows (Figma 97:11509). */
export default function ProjectFilters({
  filters,
  projects,
}: {
  filters: string[];
  projects: readonly Project[];
}) {
  const [active, setActive] = useState(filters[0]);

  const shown = useMemo(() => {
    if (active === filters[0]) return projects;
    /* Tags are matched loosely so "Tail Lifters" also catches "Tail Lifter". */
    const needle = active.replace(/s$/, "").toLowerCase();
    return projects.filter((p) =>
      p.tags.some((tag) => tag.toLowerCase().includes(needle)),
    );
  }, [active, filters, projects]);

  return (
    <section className="py-14 lg:py-[60px]">
      <Reveal kind="fade" className="shell mb-10 flex flex-wrap justify-end gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={filter === active}
            className={cn(
              "h-[38px] rounded-full px-5 text-body-sm font-medium transition-colors duration-300",
              filter === active
                ? "bg-blue text-white"
                : "bg-blue-10 text-ink-soft hover:bg-blue-20",
            )}
          >
            {filter}
          </button>
        ))}
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
