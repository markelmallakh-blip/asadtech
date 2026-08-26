"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MediaPlaceholder from "./MediaPlaceholder";

/**
 * An image that falls back to the branded placeholder when the file is not in
 * the repository yet. Lets pages be wired to their final asset paths while the
 * export is still in flight — dropping the file in is the only step left.
 */
export default function Figure({
  src,
  alt,
  sizes = "100vw",
  label,
  tone = "light",
  priority = false,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  sizes?: string;
  label?: string;
  tone?: "light" | "dark";
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <MediaPlaceholder
        label={label ?? alt}
        tone={tone}
        className={cn("h-full w-full", className)}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => setMissing(true)}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
