"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Figure from "@/components/ui/Figure";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";
import SegmentedTabs from "@/components/ui/SegmentedTabs";
import { MinusIcon, PlusIcon } from "@/components/ui/Icons";
import type { ServiceModelGroup } from "@/content/pages/services";
import { cn } from "@/lib/utils";

/**
 * The models accordion (Figma 79:10120): a sticky introduction on the left,
 * and on the right a segmented filter over titled runs of models, each row
 * opening to its specification when its plus is pressed.
 */
export default function ModelsList({
  tagline,
  heading,
  intro,
  allTab,
  brochure,
  brochureHref,
  groups,
}: {
  tagline: string;
  heading: string;
  intro: string;
  allTab: string;
  brochure: string;
  brochureHref: string;
  groups: readonly ServiceModelGroup[];
}) {
  const [tab, setTab] = useState<string | null>(null);
  /* Opens with the second model showing its sheet, as the design does, so
     the reader sees at once that the rows expand. */
  const [open, setOpen] = useState<string | null>(
    groups[0]?.items[1]?.name ?? groups[0]?.items[0]?.name ?? null,
  );

  const shown = tab ? groups.filter((group) => group.name === tab) : groups;

  return (
    <section className="bg-blue-10">
      <div className="shell flex flex-col gap-12 pt-[60px] pb-20 lg:flex-row lg:items-start lg:justify-between lg:pb-[80px]">
        {/* ------------------------------------------------------- intro */}
        <div className="flex flex-col gap-10 lg:sticky lg:top-[100px] lg:w-[470px] lg:shrink-0 lg:gap-[160px] lg:pt-[82px] lg:pb-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <Reveal as="p" kind="fade" className="text-body-sm font-semibold text-blue/70">
                {tagline}
              </Reveal>
              <SplitHeading as="h2" className="text-h5 text-text-dark">
                {heading}
              </SplitHeading>
            </div>
            <Reveal as="p" className="text-body text-text-muted">
              {intro}
            </Reveal>
          </div>

          <Reveal kind="fade">
            <Button href={brochureHref} variant="primary" size="lg" icon="download">
              {brochure}
            </Button>
          </Reveal>
        </div>

        {/* -------------------------------------------------------- list */}
        <div className="flex flex-col gap-9 lg:w-[791px] lg:items-end lg:px-7">
          <SegmentedTabs
            options={[allTab, ...groups.map((group) => group.name)]}
            value={tab ?? allTab}
            onChange={(name) => setTab(name === allTab ? null : name)}
            label={heading}
          />

          <div className="flex w-full flex-col gap-[60px]">
            {shown.map((group) => (
              <div key={group.name} className="flex flex-col gap-4">
                <h3 className="text-h5 text-text-dark">{group.name}</h3>

                <ul className="flex flex-col border-t border-grey-2">
                  {group.items.map((model) => {
                    const isOpen = open === model.name;
                    return (
                      <li key={model.name} className="border-b border-grey-2">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpen(isOpen ? null : model.name)}
                          className="flex w-full items-center gap-4 py-2 text-start"
                        >
                          <Figure
                            src={model.image}
                            alt=""
                            sizes="152px"
                            className="h-[124px] w-[152px] shrink-0"
                            imageClassName="object-contain"
                          />
                          <span className="flex flex-1 items-start justify-between gap-4">
                            <span className="text-h6 font-semibold text-navy capitalize">
                              {model.name}
                            </span>
                            <span
                              className={cn(
                                "grid size-6 shrink-0 place-items-center text-white transition-colors duration-300",
                                isOpen ? "bg-teal" : "bg-blue",
                              )}
                            >
                              {isOpen ? (
                                <MinusIcon className="size-3.5" />
                              ) : (
                                <PlusIcon className="size-3.5" />
                              )}
                            </span>
                          </span>
                        </button>

                        {/* Grid-row trick: a 0fr → 1fr track animates to the
                            sheet's natural height with no measuring. */}
                        <div
                          className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                        >
                          <div className="overflow-hidden">
                            <dl className="mb-5 flex flex-col lg:ms-[168px]">
                              {model.specs.map((spec) => (
                                <div
                                  key={spec.label}
                                  className="flex items-center justify-between gap-6 border-b border-grey-2/60 py-[5px] text-body font-medium text-navy last:border-b-0"
                                >
                                  <dt>{spec.label}</dt>
                                  <dd className="text-end">{spec.value}</dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
