"use client";

import { useState } from "react";
import { en } from "@/content/en";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "@/components/ui/Icons";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";

export default function Testimonials() {
  const { heading, items } = en.testimonials;
  const [index, setIndex] = useState(0);

  const go = (step: number) =>
    setIndex((current) => (current + step + items.length) % items.length);

  return (
    <section className="bg-grey-05 py-16 lg:py-[60px]">
      <div className="shell">
        <div className="flex items-center justify-between gap-6">
          <SplitHeading className="text-h5 text-ink lg:text-h4">
            {heading}
          </SplitHeading>

          {/* Always present, per the Figma — disabled while there is only one
              quote so the control never lies about what it can do. */}
          <Reveal
            kind="fade"
            className="flex items-center rounded-sm border border-blue-20"
          >
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              disabled={items.length < 2}
              className="flex size-14 items-center justify-center text-blue transition-colors duration-300 hover:bg-blue hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronLeft className="size-7" />
            </button>
            <span className="h-9 w-px bg-blue-20" />
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              disabled={items.length < 2}
              className="flex size-14 items-center justify-center text-blue transition-colors duration-300 hover:bg-blue hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronRight className="size-7" />
            </button>
          </Reveal>
        </div>

        <Reveal
          kind="fade"
          className="mt-16 grid gap-10 lg:grid-cols-[205fr_847fr] lg:gap-[340px]"
        >
          {/* Client mark */}
          <div className="relative h-[132px] w-full max-w-[205px]">
            <Image
              src={items[index].logo}
              alt={items[index].company}
              fill
              sizes="205px"
              className="object-contain object-left"
            />
          </div>

          <div
            key={index}
            className="animate-[fade-slide_600ms_cubic-bezier(0.16,1,0.3,1)_both]"
          >
            <blockquote className="flex gap-6">
              <Quote className="mt-2 hidden h-[34px] w-[43px] shrink-0 text-ink sm:block" />
              <p className="text-[clamp(1.25rem,2.2vw,2rem)] leading-[1.4] text-ink">
                {items[index].quote}
              </p>
            </blockquote>

            <footer className="mt-10 ps-0 sm:ps-[75px]">
              <p className="text-h6 text-ink">{items[index].name}</p>
              <p className="mt-1 text-body-sm text-ink-soft">
                {items[index].company}
              </p>
            </footer>
          </div>
        </Reveal>

        {/* Progress dots */}
        <div className={cn("mt-10 flex gap-2", items.length < 2 && "hidden")}>
          {items.map((item, i) => (
            <button
              key={item.company}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${item.company}`}
              aria-current={i === index}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                i === index ? "w-10 bg-blue" : "w-4 bg-blue-20 hover:bg-blue-70",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
