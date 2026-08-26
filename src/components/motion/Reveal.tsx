import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealKind = "fade-up" | "fade" | "clip" | "line" | "mask";

type RevealProps = {
  as?: ElementType;
  kind?: RevealKind;
  delay?: number;
  className?: string;
  children?: ReactNode;
};

/** Marks an element for a scroll-triggered entrance (see SmoothScroll). */
export function Reveal({
  as: Tag = "div",
  kind = "fade-up",
  delay,
  className,
  children,
}: RevealProps) {
  return (
    <Tag
      data-animate={kind}
      data-animate-delay={delay}
      className={className}
    >
      {children}
    </Tag>
  );
}

/** Cascades the entrances of every Reveal nested inside it. */
export function RevealGroup({
  as: Tag = "div",
  stagger = 0.09,
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  stagger?: number;
  className?: string;
  children?: ReactNode;
} & Record<string, unknown>) {
  return (
    <Tag
      {...rest}
      data-animate-group
      data-animate-stagger={stagger}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
