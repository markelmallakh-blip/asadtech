import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Seamless logo rail. The children are rendered twice so the track can loop
 * on a -50% translate without a visible seam. Pauses on hover.
 */
export default function Marquee({
  children,
  direction = "left",
  duration = 46,
  className,
}: {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}) {
  return (
    <div className={cn("marquee overflow-hidden", className)}>
      <div
        className="marquee-track"
        data-direction={direction}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div aria-hidden={false} className="flex shrink-0">
          {children}
        </div>
        <div aria-hidden className="flex shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}
