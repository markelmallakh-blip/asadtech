"use client";

import { useState } from "react";
import { projectsPage } from "@/content/pages/projects";
import { contact } from "@/content/pages/contact";
import Button from "@/components/ui/Button";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";
import FormSuccess from "@/components/ui/FormSuccess";
import { cn } from "@/lib/utils";

const field =
  "h-[52px] w-full rounded-sm bg-grey-05 px-4 text-body-sm text-ink placeholder:text-grey-5 outline-none transition-colors duration-300 focus:bg-white focus:ring-2 focus:ring-blue/40";

/** Facility photograph with the interest form card sitting on it (Figma 97:11509, 69:9081). */
export default function RequestInterest({
  models,
}: {
  /** The models offered in the dropdown — the solution page passes its own. */
  models?: readonly string[];
}) {
  const { banner, request } = projectsPage;
  const f = contact.form;
  const [sent, setSent] = useState(false);
  const options = models ?? request.models;

  return (
    <section id="request" className="relative isolate overflow-hidden pb-8">
      <ParallaxFigure
        src={banner.src}
        alt={banner.alt}
        strength={14}
        tone="dark"
        label={banner.alt}
        sizes="100vw"
        className="absolute inset-0 -z-10"
      />

      {/* 32px inset from the photograph on every side, as on the CTA band,
          so the card reads as sitting on the image (Figma 69:9081). */}
      <div className="px-8 pt-[220px] lg:pt-[290px]">
        <Reveal
          kind="fade-up"
          className="grid gap-10 rounded-3xl bg-white p-8 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-[50px]"
        >
          <div>
            <SplitHeading as="h2" className="text-h3 text-ink lg:text-h2">
              {request.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </SplitHeading>
            <p className="mt-6 max-w-[380px] text-body-sm leading-[1.6] text-ink-soft">
              {request.body}
            </p>
          </div>

          {sent ? (
            <FormSuccess />
          ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
            className="flex flex-col gap-3"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input className={field} placeholder={f.firstName} aria-label={f.firstName} />
              <input className={field} placeholder={f.lastName} aria-label={f.lastName} />
            </div>
            <input className={field} type="tel" placeholder={f.phone} aria-label={f.phone} />
            <input className={field} type="email" placeholder={f.email} aria-label={f.email} />

            <select className={cn(field, "appearance-none")} aria-label={request.model} defaultValue="">
              <option value="" disabled>
                {request.model}
              </option>
              {options.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>

            <textarea
              rows={3}
              className={cn(field, "h-auto resize-none py-3")}
              placeholder={f.message}
              aria-label={f.message}
            />

            <Button type="submit" variant="primary" size="md" className="mt-3 self-start">
              {request.submit}
            </Button>
          </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
