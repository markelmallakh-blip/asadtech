import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/content/pages/contact";
import ContactForm from "@/components/sections/ContactForm";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { Reveal } from "@/components/motion/Reveal";
import {
  BuildingIcon,
  ClockIcon,
  MailOpenIcon,
  PhoneRingIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Asad Advanced Technologies about cooling units, cold rooms, tail lifters and spider cranes across Saudi Arabia.",
};

/** Contact page (Figma 127:7540). */
export default function ContactPage() {
  return (
    <>
      {/* ------------------------------------------------- form over image */}
      <section className="relative isolate overflow-hidden bg-navy">
        <ParallaxFigure
          src={contact.image.src}
          alt={contact.image.alt}
          strength={12}
          tone="dark"
          label={contact.image.alt}
          sizes="100vw"
          className="absolute inset-0 -z-10"
        />

        {/* 32px inset from the photograph, as the design has it */}
        <div className="flex flex-col gap-4 px-4 pt-[150px] pb-8 lg:flex-row lg:items-end lg:px-8 lg:pt-[180px] lg:pb-[60px]">
          <Reveal kind="fade-up" className="w-full lg:w-auto lg:shrink-0">
            <ContactForm />
          </Reveal>

          <Reveal
            kind="fade-up"
            delay={0.15}
            className="flex w-full flex-col gap-4 sm:flex-row lg:flex-1 lg:items-end"
          >
            <Link
              href={contact.phone.href}
              className="flex h-[200px] flex-1 flex-col justify-between rounded-xl bg-blue px-8 py-6 text-white transition-colors duration-300 hover:bg-navy lg:h-[269px]"
            >
              <PhoneRingIcon className="size-[101px]" />
              <span className="text-body-lg font-medium">{contact.phone.label}</span>
            </Link>

            <Link
              href={contact.email.href}
              className="flex h-[200px] flex-1 flex-col justify-between rounded-xl bg-blue-20 px-8 py-6 text-blue transition-colors duration-300 hover:bg-white lg:h-[225px]"
            >
              <MailOpenIcon className="size-[101px]" />
              <span className="text-body-lg font-medium">{contact.email.label}</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------- address and hours */}
      <section className="bg-white py-14 lg:py-[60px]">
        <Reveal
          kind="fade-up"
          className="shell"
        >
          <div className="flex flex-col gap-8 rounded-xl bg-blue p-8 text-white lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-6 lg:w-[531px]">
              <BuildingIcon className="size-[101px]" />
              <p className="text-body-lg font-medium">{contact.address}</p>
            </div>

            <span aria-hidden className="h-px w-full bg-blue-60 lg:h-auto lg:w-px lg:self-stretch" />

            <div className="flex flex-col gap-6 lg:w-[531px]">
              <ClockIcon className="size-[101px]" />
              <div className="flex flex-col text-body-lg font-medium">
                {contact.hours.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
