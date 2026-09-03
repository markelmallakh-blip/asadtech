"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Full-bleed looping footage behind a section, with the poster as the frame
 * shown before playback starts and whenever motion is turned down.
 *
 * With `pingPong` the clip plays out and then runs backwards instead of
 * cutting back to the first frame, so there is no visible seam at the loop
 * point. Nothing plays a <video> element backwards on its own — negative
 * playbackRate is unsupported — so the return leg is scrubbed by hand in real
 * time, then normal playback takes over again at the start.
 */
export default function BackgroundVideo({
  src,
  poster,
  pingPong,
  className,
}: {
  src: string;
  poster?: string;
  /** Play out and back rather than cutting to the first frame. */
  pingPong?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* Autoplay only resolves once muted and attached. */
    video.play().catch(() => {});

    if (!pingPong) return;

    let frame = 0;
    let last = 0;

    const rewind = (now: number) => {
      const elapsed = (now - last) / 1000;
      last = now;

      const next = video.currentTime - elapsed;
      if (next <= 0) {
        video.currentTime = 0;
        video.play().catch(() => {});
        return;
      }

      video.currentTime = next;
      frame = requestAnimationFrame(rewind);
    };

    /* `ended` rather than watching currentTime: timeupdate only fires a few
       times a second, so any threshold short of the duration is either missed
       on a short clip — leaving the video stopped on its last frame — or trips
       early on a long one. */
    const onEnded = () => {
      last = performance.now();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(rewind);
    };

    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("ended", onEnded);
      cancelAnimationFrame(frame);
    };
  }, [pingPong]);

  return (
    <div className={cn("overflow-hidden", className)}>
      {poster && (
        <Image
          src={poster}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      )}
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        /* The hand-scrubbed return leg replaces the native loop */
        loop={!pingPong}
        playsInline
        autoPlay
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
