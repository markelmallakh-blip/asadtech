import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The small category label on project rows, banners and job listings
 * (Figma 105:980). `tone="light"` is the version that sits on a dark banner.
 */
export default function Tag({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[2px] p-1 text-body-sm leading-[1.3] whitespace-nowrap",
        tone === "dark" ? "bg-blue-10 text-blue/70" : "bg-blue-40 text-text-dark/70",
        className,
      )}
    >
      {children}
    </span>
  );
}
