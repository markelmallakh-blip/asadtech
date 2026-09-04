"use client";

import { useState } from "react";
import { en } from "@/content/en";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "@/components/ui/Icons";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";

type Item = (typeof en.testimonials.items)[number];

/** One quote turning over into the next, word by word out of its own mask. */
function RotatingWords({ text }: { text: string }) {
  return text.split(" ").map((word, i) => (
    <span key={`${i}-${word}`}>
      <span className="word-mask" style={{ "--word-delay": `${i * 18}ms` } as React.CSSProperties}>
        <span>{word}</span>
      </span>
      {" "}
    </span>
  ));
}

function QuoteBlock({ item, rotating }: { item: Item; rotating?: boolean }) {
  return (
    <div>
      <blockquote className="flex gap-6">
        <Quote className="mt-2 hidden h-[34px] w-[43px] shrink-0 text-ink sm:block" />
        <p className="text-[clamp(1.25rem,2.2vw,2rem)] leading-[1.4] text-ink">
          {rotating ? <RotatingWords text={item.quote} /> : item.quote}
        </p>
      </blockquote>

      <footer className="mt-10 ps-0 sm:ps-[75px]">
        <p className="text-h6 text-ink">{item.name}</p>
        <p className="mt-1 text-body-sm text-ink-soft">{item.company}</p>
      </footer>
    </div>
  );
}

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
              className="flex size-10 items-center justify-center text-blue lg:size-12 transition-colors duration-300 hover:bg-blue hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronLeft className="size-5 lg:size-6" />
            </button>
            <span className="h-6 w-px bg-blue-20 lg:h-8" />
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              disabled={items.length < 2}
              className="flex size-10 items-center justify-center text-blue lg:size-12 transition-colors duration-300 hover:bg-blue hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronRight className="size-5 lg:size-6" />
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

          {/* Every quote is laid into the same grid cell — invisible except the
              live one — so the block is always as tall as the longest of them
              and switching never shifts the page underneath the reader. */}
          <div className="grid *:col-start-1 *:row-start-1">
            {items.map((item, i) => (
              <div
                key={item.company}
                aria-hidden={i !== index}
                className={i === index ? undefined : "invisible"}
              >
                {i === index ? (
                  <QuoteBlock key={index} item={item} rotating />
                ) : (
                  <QuoteBlock item={item} />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
