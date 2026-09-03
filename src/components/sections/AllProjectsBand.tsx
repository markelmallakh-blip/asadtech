import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Teal strip closing a project list (Figma 55:4620): a white-bordered pill
 * over a soft disc. Hovering swells the disc until it fills the band.
 */
export default function AllProjectsBand({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Reveal kind="fade">
      <Link
        href={href}
        className="group relative flex h-[200px] items-center justify-center overflow-hidden bg-teal"
      >
        <span
          aria-hidden
          className="absolute size-[75px] rounded-full bg-white/20 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[24]"
        />
        <span className="relative inline-flex h-[46px] items-center rounded-full border-2 border-white px-[14px] text-body font-medium text-white uppercase transition-colors duration-500 group-hover:bg-white group-hover:text-teal">
          {children}
        </span>
      </Link>
    </Reveal>
  );
}
