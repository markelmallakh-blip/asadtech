import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Heading whose lines slide up out of a mask, one after another.
 * Pass `lines` as an array so line breaks stay art-directed rather than
 * depending on where the browser happens to wrap.
 */
export default function AnimatedHeading({
  as: Tag = "h2",
  lines,
  stagger = 0.12,
  className,
  lineClassName,
}: {
  as?: ElementType;
  lines: ReactNode[];
  stagger?: number;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <Tag
      data-animate-group
      data-animate-stagger={stagger}
      className={cn(className)}
    >
      {lines.map((line, index) => (
        <span key={index} className="mask-line">
          <span data-animate="mask" className={cn("block", lineClassName)}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
