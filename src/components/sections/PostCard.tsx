import Link from "next/link";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { ArrowUpRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export type PostSummary = {
  href: string;
  image: string;
  title: string;
  date: string;
  author: string;
};

/**
 * The blog widget (Figma 121:3875): picture, date, title, byline and a
 * "Read More" with its blue disc. `tall` is the alternate height the grid
 * staggers with.
 */
export default function PostCard({
  post,
  tall = false,
  cta = "Read More",
}: {
  post: PostSummary;
  tall?: boolean;
  cta?: string;
}) {
  return (
    <Link href={post.href} className="group flex flex-col gap-4">
      <ParallaxFigure
        src={post.image}
        alt={post.title}
        strength={10}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 333px"
        className={cn("w-full", tall ? "aspect-[333/382] lg:h-[382px]" : "aspect-[333/262] lg:h-[262px]")}
      />
      <span className="flex flex-col gap-2">
        <span className="text-body-xs text-text-muted">{post.date}</span>
        <span className="text-h6 font-semibold text-ink capitalize transition-colors duration-300 group-hover:text-blue">
          {post.title}
        </span>
        <span className="text-body-xs text-ink-soft">{post.author}</span>
        <span className="flex items-center gap-1.5 text-body font-medium text-blue">
          {cta}
          <span className="grid size-6 place-items-center rounded-full bg-blue text-white transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45">
            <ArrowUpRight className="size-3.5" />
          </span>
        </span>
      </span>
    </Link>
  );
}
