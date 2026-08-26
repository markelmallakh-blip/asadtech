"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { en } from "@/content/en";
import { cn } from "@/lib/utils";
import Figure from "@/components/ui/Figure";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export type Project = {
  title: string;
  body: string;
  tags: readonly string[];
  href: string;
};

/**
 * The project rows (Figma 105:989), shared by the homepage and the projects
 * index. Hovering sweeps blue across the row from the left and a label rides
 * the cursor, which is why pointer position is tracked here rather than in CSS.
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
              className="group relative isolate block overflow-hidden border-b border-blue-20"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 origin-left scale-x-0 bg-blue transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />

              <div className="shell grid grid-cols-1 items-center gap-6 py-8 lg:grid-cols-[110px_minmax(0,1fr)_190px_auto] lg:gap-10 lg:py-0">
                <span className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none font-light text-ink/45 transition-colors duration-400 group-hover:text-white/70">
                  {String(startIndex + index + 1).padStart(2, "0")}.
                </span>

                <div className="max-w-[420px]">
                  <h3 className="text-h6 text-ink transition-colors duration-400 group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-body-sm leading-[1.45] text-ink-soft transition-colors duration-400 group-hover:text-white/80">
                    {project.body}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-blue-10 px-2.5 py-1 text-body-xs font-medium text-blue transition-colors duration-400 group-hover:bg-white/20 group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex shrink-0 gap-3 lg:justify-end">
                  <Figure
                    src={images[0].src}
                    alt={images[0].alt}
                    sizes="110px"
                    className="h-[110px] w-[110px] lg:h-[132px] lg:w-[110px]"
                  />
                  <Figure
                    src={images[1].src}
                    alt={images[1].alt}
                    sizes="236px"
                    className="h-[110px] w-[170px] lg:h-[132px] lg:w-[236px]"
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
