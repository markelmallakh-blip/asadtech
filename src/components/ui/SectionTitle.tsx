import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Tagline over heading. Centred when the layout is symmetric, left-aligned
 * when the section carries carousel controls — per the Mitchdesigns system.
 */
export default function SectionTitle({
  tagline,
  lines,
  align = "center",
  tone = "dark",
  className,
  as = "h2",
}: {
  tagline?: string;
  lines: ReactNode[];
  align?: "center" | "start";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className,
      )}
    >
      {tagline && (
        <Reveal
          as="p"
          kind="fade"
          className={cn(
            "mb-2 text-body-sm font-semibold tracking-[0.02em]",
            tone === "light" ? "text-blue-70" : "text-blue",
          )}
        >
          {tagline}
        </Reveal>
      )}

      <SplitHeading
        as={as}
        className={cn(
          "text-h3 md:text-h2",
          tone === "light" ? "text-white" : "text-text-dark",
        )}
      >
        {lines}
      </SplitHeading>
    </div>
  );
}
