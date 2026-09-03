import type { ReactNode } from "react";
import Link from "next/link";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLeftIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

/**
 * The banner the inner pages open with (Figma 105:1978, 121:2501 and
 * siblings).
 *
 * Two grounds: a photograph with a dark wash fading across it, or the plain
 * navy-to-blue gradient. Either way the header floats over it, so the top
 * padding clears the 85px bar before the design's own 160/180 begins.
 */
export default function Banner({
  variant,
  image,
  alt = "",
  wash = "end",
  children,
  className,
}: {
  variant: "photo" | "gradient";
  image?: string;
  alt?: string;
  /** Which side of the photograph the dark wash fades out towards. */
  wash?: "end" | "start";
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden text-white",
        variant === "gradient" &&
          "bg-[linear-gradient(180deg,#050721_20.7%,var(--color-blue)_100%)]",
        variant === "photo" && "bg-navy",
        className,
      )}
    >
      {variant === "photo" && image && (
        <>
          <ParallaxFigure
            src={image}
            alt={alt}
            strength={14}
            tone="dark"
            sizes="100vw"
            className="absolute inset-0 -z-20"
          />
          <div
            aria-hidden
            className={cn(
              "absolute inset-0 -z-10",
              wash === "end"
                ? "bg-gradient-to-r from-black/60 to-blue/0"
                : "bg-gradient-to-l from-black/0 to-black/70",
            )}
          />
        </>
      )}
      {children}
    </section>
  );
}

/** Blue-backed label above a banner title (Figma 105:1982). */
export function BannerChip({ children }: { children: ReactNode }) {
  return (
    <Reveal
      as="p"
      kind="fade"
      className="inline-block bg-blue px-1 text-h6 font-semibold text-white capitalize"
    >
      {children}
    </Reveal>
  );
}

/** Teal "Back to …" link with its small chevron (Figma 121:4778). */
export function BackLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Reveal kind="fade">
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-body font-medium text-teal transition-colors duration-300 hover:text-white"
      >
        <ArrowLeftIcon className="size-3.5 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-0.5" />
        {children}
      </Link>
    </Reveal>
  );
}
