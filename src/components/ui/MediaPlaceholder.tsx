import { cn } from "@/lib/utils";

/**
 * Stand-in for artwork that has not been supplied yet. Carries the brand mark
 * so unfinished slots read as deliberate rather than broken.
 */
export default function MediaPlaceholder({
  label,
  tone = "light",
  className,
}: {
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        tone === "dark"
          ? "bg-[linear-gradient(135deg,#1b1d33_0%,#2c2f52_55%,#191b2e_100%)]"
          : "bg-[linear-gradient(135deg,#dbdbea_0%,#eef0f7_55%,#cfd0e0_100%)]",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className={cn(
          "absolute h-[60%] w-auto",
          tone === "dark" ? "text-white/[0.07]" : "text-blue/[0.09]",
        )}
      >
        <path d="M50 6 92 94H70L50 48 30 94H8Z" fill="currentColor" />
      </svg>
      {label && (
        <span
          className={cn(
            "relative max-w-[80%] text-center text-body-xs font-medium tracking-[0.12em] uppercase",
            tone === "dark" ? "text-white/35" : "text-blue/40",
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
