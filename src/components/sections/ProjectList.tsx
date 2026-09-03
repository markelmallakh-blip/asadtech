"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { en } from "@/content/en";
import { cn } from "@/lib/utils";
import Figure from "@/components/ui/Figure";
import Tag from "@/components/ui/Tag";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export type Project = {
  title: string;
  body: string;
  tags: readonly string[];
  href: string;
};

/**
 * The project rows (Figma 105:1454), shared by the homepage, the projects
 * index and the related list on a project page. Each row is 200px: a light
 * running number, title and blurb, the category tags and the pair of site
 * photographs. Hovering sweeps blue across the row from the left and a label
 * rides the cursor, which is why pointer position is tracked here rather
 * than in CSS.
 *
 * A touch screen has no hover, so there the sweep plays for whichever row is
 * passing through the middle of the viewport instead.
 */
export default function ProjectList({
  projects,
  startIndex = 0,
}: {
  projects: readonly Project[];
  startIndex?: number;
}) {
  const { cta, images } = en.work;
  const listRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, on: false });
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches) return;
    const rows = listRef.current?.querySelectorAll<HTMLElement>("[data-row]");
    if (!rows?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.getAttribute("data-row"));
        });
      },
      /* Only the band across the middle of the screen counts */
      { rootMargin: "-40% 0px -40% 0px" },
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [projects]);

  const onMove = useCallback((event: React.PointerEvent) => {
    const box = listRef.current?.getBoundingClientRect();
    if (!box) return;
    setCursor({ x: event.clientX - box.left, y: event.clientY - box.top, on: true });
  }, []);

  return (
    <div
      ref={listRef}
      onPointerMove={onMove}
      onPointerLeave={() => setCursor((c) => ({ ...c, on: false }))}
      className="relative border-t border-blue-20"
    >
      <RevealGroup stagger={0.06}>
        {projects.map((project, index) => (
          <Reveal key={project.href} kind="fade">
            <Link
              href={project.href}
              data-row={project.href}
              data-active={active === project.href || undefined}
              className="group relative isolate block overflow-hidden border-b border-blue-20"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 origin-left scale-x-0 bg-blue transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-data-active:scale-x-100"
              />

              <div className="shell flex flex-col gap-6 py-6 lg:h-[200px] lg:flex-row lg:items-center lg:justify-between lg:py-5">
                <span className="w-[96px] text-center text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.3] font-extralight text-text-dark transition-colors duration-400 group-hover:text-white/80 group-data-active:text-white/80">
                  {String(startIndex + index + 1).padStart(2, "0")}.
                </span>

                <div className="flex flex-col gap-0.5 lg:w-[372px]">
                  <h3 className="text-h6 font-semibold text-text-dark capitalize transition-colors duration-400 group-hover:text-white group-data-active:text-white">
                    {project.title}
                  </h3>
                  <p className="text-body-sm leading-[1.3] text-text-muted transition-colors duration-400 group-hover:text-white/80 group-data-active:text-white/80">
                    {project.body}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag
                      key={tag}
                      className="transition-colors duration-400 group-hover:bg-white/20 group-hover:text-white group-data-active:bg-white/20 group-data-active:text-white"
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>

                <div className="flex h-[120px] shrink-0 gap-4 lg:h-[160px]">
                  <Figure
                    src={images[0].src}
                    alt={images[0].alt}
                    sizes="160px"
                    className="w-[120px] rounded-[10px] lg:w-[160px]"
                  />
                  <Figure
                    src={images[1].src}
                    alt={images[1].alt}
                    sizes="302px"
                    className="w-[226px] rounded-[10px] lg:w-[302px]"
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </RevealGroup>

      <span
        aria-hidden
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
        className={cn(
          "pointer-events-none absolute left-0 top-0 z-20 hidden select-none rounded-sm bg-black/40 px-3 py-1.5 text-body-xs font-semibold tracking-[0.1em] text-white uppercase backdrop-blur-md transition-opacity duration-300 lg:block",
          cursor.on ? "opacity-100" : "opacity-0",
        )}
      >
        {cta}
      </span>
    </div>
  );
}
