import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Image that drifts against the scroll inside a clipping frame.
 *
 * `strength` is the total travel as a percentage of the media height. The
 * media box is 124% tall (globals.css) so anything up to ~24 stays seamless.
 * The transform sits on the wrapper, not the <img>, because next/image's
 * `fill` mode writes its own inline positioning styles.
 */
export default function ParallaxImage({
  src,
  alt,
  strength = 14,
  priority = false,
  sizes = "100vw",
  quality,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  strength?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cn("parallax-frame", className)}>
      <div className="parallax-media" data-parallax={strength}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          quality={quality}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    </div>
  );
}
