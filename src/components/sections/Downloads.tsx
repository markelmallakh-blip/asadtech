import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { DownloadIcon, FileIcon } from "@/components/ui/Icons";

/** Three blue file cards under a centred heading (Figma 69:9016). */
export default function Downloads({
  heading,
  items,
}: {
  heading: string;
  items: readonly { title: string; size: string; href: string }[];
}) {
  return (
    <section className="bg-grey-05 pt-[60px] pb-20 lg:pb-[80px]">
      <div className="shell flex flex-col items-center gap-8">
        <SplitHeading as="h2" className="text-center text-h5 text-text-dark">
          {heading}
        </SplitHeading>

        <RevealGroup
          stagger={0.08}
          className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
        >
          {items.map((item) => (
            <Reveal key={item.title} className="w-full sm:w-[240px]">
              <a
                href={item.href}
                /* Placeholder links stay plain until the files exist */
                download={item.href !== "#" || undefined}
                className="group flex flex-col gap-[22px] rounded-[10px] bg-blue p-4 text-white transition-colors duration-300 hover:bg-navy"
              >
                <FileIcon className="size-[101px]" />
                <span className="flex items-start justify-between gap-3">
                  <span className="flex flex-col gap-0.5">
                    <span className="text-h6 font-semibold capitalize">{item.title}</span>
                    <span className="text-body-sm text-text-light/70">{item.size}</span>
                  </span>
                  <DownloadIcon className="size-[30px] shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
