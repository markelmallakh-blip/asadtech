import Figure from "@/components/ui/Figure";
import { cn } from "@/lib/utils";

/**
 * Figure that drifts against the scroll inside a clipping frame — the standard
 * treatment for every photograph on the site.
 */
export default function ParallaxFigure({
  src,
  alt,
  strength = 14,
  sizes = "100vw",
  label,
  tone = "light",
  className,
}: {
  src: string;
  alt: string;
  strength?: number;
  sizes?: string;
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("parallax-frame", className)}>
      <div className="parallax-media" data-parallax={strength}>
        <Figure
          src={src}
          alt={alt}
          sizes={sizes}
          label={label}
          tone={tone}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
