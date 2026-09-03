"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FacebookIcon, LinkIcon, LinkedInIcon, XIcon } from "./Icons";

/**
 * The row of share discs under an article or job (Figma 121:4909): copy the
 * link, then LinkedIn, X and Facebook. The share URL is read from the page
 * when pressed, so the buttons need no knowledge of the route.
 */
export default function ShareButtons({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const url = () => (typeof window === "undefined" ? "" : window.location.href);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* Clipboard access can be refused; the address bar still works. */
    }
  };

  const open = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer,width=640,height=520");
  };

  const disc =
    "grid size-8 place-items-center rounded-full bg-white text-blue transition-colors duration-300 hover:bg-blue hover:text-white";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Link copied" : "Copy link"}
        title={copied ? "Copied" : "Copy link"}
        className={cn(disc, copied && "bg-teal text-white")}
      >
        <LinkIcon className="size-6" />
      </button>
      <button
        type="button"
        aria-label="Share on LinkedIn"
        onClick={() =>
          open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url())}`)
        }
        className={disc}
      >
        <LinkedInIcon className="size-6" />
      </button>
      <button
        type="button"
        aria-label="Share on X"
        onClick={() =>
          open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url())}&text=${encodeURIComponent(title)}`,
          )
        }
        className={disc}
      >
        <XIcon className="size-6" />
      </button>
      <button
        type="button"
        aria-label="Share on Facebook"
        onClick={() =>
          open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url())}`)
        }
        className={disc}
      >
        <FacebookIcon className="size-6" />
      </button>
    </div>
  );
}
