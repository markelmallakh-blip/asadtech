import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "./Icons";

/**
 * The Asadtech CTA, matching the Figma button sheet (node 14:76).
 *
 * A label pill butted directly against a circular icon disc — the two overlap
 * by 1px so they read as one connected shape, not a pair. The disc is a 2px
 * ring around an inner circle.
 *
 * Hover, per the Figma `status=hover` variants:
 *   primary      → the whole button turns navy
 *   white-border → the whole button fills white and the label goes navy
 * and in both cases the arrow rotates 45°, straightening ↗ into →.
 */

type Variant = "primary" | "white-border";
type Size = "md" | "lg";
type Icon = "up-right" | "right" | "none";

const sizing: Record<
  Size,
  { pill: string; disc: string; inner: string; icon: string }
> = {
  /* Medium: 46px tall, 42px inner disc, Poppins Medium 16. */
  md: {
    pill: "h-[46px] px-[14px] text-[16px] font-medium",
    disc: "size-[46px]",
    inner: "size-[42px]",
    icon: "size-[24px]",
  },
  /* Large: 56px tall, 52px inner disc, Poppins SemiBold 20. */
  lg: {
    pill: "h-[56px] px-[24px] text-[20px] font-semibold",
    disc: "size-[56px]",
    inner: "size-[52px]",
    icon: "size-[30px]",
  },
};

const skin: Record<Variant, { pill: string; disc: string; inner: string }> = {
  primary: {
    pill: "bg-blue text-white group-hover:bg-navy",
    disc: "bg-blue group-hover:bg-navy",
    inner: "bg-navy text-white",
  },
  "white-border": {
    pill: "border-2 border-white text-white group-hover:bg-white group-hover:text-navy",
    disc: "border-2 border-white group-hover:bg-white",
    inner: "text-white group-hover:text-navy",
  },
};

export type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: Icon;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon = "up-right",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const s = sizing[size];
  const c = skin[variant];
  const Glyph = icon === "right" ? ArrowRight : ArrowUpRight;

  const inner = (
    <>
      {/* -1px so the pill and disc meet rather than sitting apart */}
      <span
        className={cn(
          "-me-px inline-flex items-center justify-center rounded-full whitespace-nowrap",
          "transition-colors duration-300",
          c.pill,
          s.pill,
        )}
      >
        {children}
      </span>

      {icon !== "none" && (
        <span
          className={cn(
            "grid shrink-0 place-items-center rounded-full",
            "transition-colors duration-300",
            c.disc,
            s.disc,
          )}
        >
          <span
            className={cn(
              "grid place-items-center rounded-full",
              "transition-colors duration-300",
              c.inner,
              s.inner,
            )}
          >
            <Glyph
              className={cn(
                s.icon,
                "transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "group-hover:rotate-45",
              )}
            />
          </span>
        </span>
      )}
    </>
  );

  const shared = cn("group inline-flex items-center align-middle", className);

  if (href) {
    return (
      <Link href={href} className={shared}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={shared}>
      {inner}
    </button>
  );
}

/**
 * Compact inline CTA used inside cards — "Read More", "Open Certificate".
 * Omit `href` when the whole card is already a link: it then renders as a
 * span so the markup stays valid and hover still cascades from the card.
 */
export function TextLink({
  children,
  href,
  className,
  tone = "blue",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  tone?: "blue" | "dark";
}) {
  const classes = cn(
    "group/link inline-flex items-center gap-2 text-body-sm font-medium",
    tone === "blue" ? "text-blue" : "text-ink",
    className,
  );

  const inner = (
    <>
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:origin-left group-hover/link:scale-x-100 group-hover:origin-left group-hover:scale-x-100" />
      </span>
      <span
        className={cn(
          "inline-flex size-6 shrink-0 items-center justify-center rounded-full transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          tone === "blue" ? "bg-blue text-white" : "bg-navy text-white",
        )}
      >
        <ArrowUpRight className="size-3.5" />
      </span>
    </>
  );

  if (!href) return <span className={classes}>{inner}</span>;

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
