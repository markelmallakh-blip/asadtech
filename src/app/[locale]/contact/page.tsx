import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/content/pages/contact";
import ContactForm from "@/components/sections/ContactForm";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import { Reveal } from "@/components/motion/Reveal";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Asad Advanced Technologies about cooling units, cold rooms, tail lifters and spider cranes across Saudi Arabia.",
};

export default function ContactPage() {
  return (
    <>
      {/* ------------------------------------------------- form over image */}
      <section className="relative isolate bg-navy pt-[85px]">
        <ParallaxFigure
          src={contact.image.src}
          alt={contact.image.alt}
          strength={12}
          tone="dark"
          label={contact.image.alt}
          sizes="100vw"
          className="absolute inset-0 -z-10"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-navy/35" />

        <div className="shell relative py-16 lg:py-[60px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <Reveal kind="fade-up" className="w-full lg:w-auto">
              <ContactForm />
            </Reveal>

            {/* the two contact tiles */}
            <Reveal
              kind="fade-up"
              delay={0.15}
              className="grid w-full grid-cols-1 gap-0 sm:grid-cols-2 lg:w-[560px]"
            >
              <Link
                href={contact.phone.href}
                className="flex h-[132px] flex-col justify-between bg-blue p-6 transition-colors duration-300 hover:bg-blue-80"
              >
                <PhoneIcon className="size-9 text-white" />
                <span className="text-body text-white">{contact.phone.label}</span>
              </Link>

              <Link
                href={contact.email.href}
                className="flex h-[132px] flex-col justify-between bg-blue-10 p-6 transition-colors duration-300 hover:bg-blue-20"
              >
                <MailIcon className="size-9 text-blue" />
                <span className="text-body text-blue">{contact.email.label}</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- address and hours */}
      <section className="shell py-12 lg:py-[60px]">
        <Reveal
          kind="fade-up"
          className="grid gap-10 bg-blue p-10 lg:grid-cols-2 lg:gap-0 lg:p-[40px]"
        >
          <div className="lg:pe-12">
            <PinIcon className="size-10 text-white/80" />
            <p className="mt-6 max-w-[440px] text-body leading-[1.6] text-white">
              {contact.address}
            </p>
          </div>

          <div className="lg:border-s lg:border-white/25 lg:ps-12">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-10 text-white/80">
              <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 7v5.2l3.2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <div className="mt-6 flex flex-col gap-1.5">
              {contact.hours.map((line) => (
                <p key={line} className="text-body text-white">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
