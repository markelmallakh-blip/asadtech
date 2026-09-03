import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import {
  ShieldCheckIcon,
  TimeSettingIcon,
  WavingHandIcon,
} from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const ICONS = {
  shield: ShieldCheckIcon,
  time: TimeSettingIcon,
  hand: WavingHandIcon,
} as const;

/** Blue panel of three warranty promises, ruled off from each other (Figma 69:8898). */
export default function WarrantyBand({
  heading,
  tagline,
  items,
}: {
  heading: string;
  tagline: string;
  items: readonly { icon: keyof typeof ICONS; title: string; body: string }[];
}) {
  return (
    <section className="bg-blue-10 py-20 lg:py-[80px]">
      <div className="shell">
        <div className="flex flex-col gap-10 bg-blue p-8 lg:gap-[60px] lg:p-[60px]">
          <div className="flex max-w-[470px] flex-col gap-2">
            <SplitHeading as="h2" className="text-h5 text-white lg:text-h4">
              {heading}
            </SplitHeading>
            <Reveal as="p" className="text-body text-text-light">
              {tagline}
            </Reveal>
          </div>

          <RevealGroup stagger={0.1} className="flex flex-col gap-8 lg:flex-row">
            {items.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <Reveal
                  key={item.title}
                  className={cn(
                    "flex flex-1 flex-col gap-2.5 text-white",
                    i > 0 &&
                      "border-t border-blue-70 pt-8 lg:border-t-0 lg:border-s lg:pt-0 lg:ps-8",
                  )}
                >
                  <Icon className="size-[62px]" />
                  <h3 className="text-h6 font-semibold capitalize">{item.title}</h3>
                  <p className="text-body-sm text-white/70">{item.body}</p>
                </Reveal>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
