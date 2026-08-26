import Image from "next/image";
import Link from "next/link";
import { en } from "@/content/en";
import Button from "@/components/ui/Button";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";

const socialGlyph: Record<string, string> = {
  Facebook: "f",
  LinkedIn: "in",
  Instagram: "ig",
  YouTube: "▶",
};

export default function Footer() {
  const { lead, cta, href, columns, contact, legal } = en.footer;

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      {/* Deep radial wash matching the Figma footer gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_120%,#4a4c96_0%,#2a2b5a_38%,#0d0e1b_78%)]"
      />

      <div className="shell relative py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <RevealGroup className="max-w-[795px]">
            <SplitHeading as="p" className="text-h5 leading-[1.35] text-white md:text-h4">
              {lead}
            </SplitHeading>
            <Reveal className="mt-10">
              <Button href={href} variant="primary" size="lg">
                {cta}
              </Button>
            </Reveal>
          </RevealGroup>

          <Reveal kind="fade" className="shrink-0">
            <Image
              src="/logos/logo-white.svg"
              alt="Asadtech"
              width={326}
              height={109}
              className="h-auto w-[240px] lg:w-[326px]"
            />
          </Reveal>
        </div>

        <Reveal kind="line" className="my-12 h-px w-full bg-white/15" />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_1.4fr] lg:gap-0">
          {columns.map((column, index) => (
            <RevealGroup
              key={column.heading}
              stagger={0.05}
              className={index > 0 ? "lg:border-s lg:border-white/15 lg:ps-10" : ""}
            >
              <Reveal as="h3" className="text-h6 text-white">
                {column.heading}
              </Reveal>
              <ul className="mt-6 flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Reveal>
                      <Link
                        href={link.href}
                        className="text-body-sm text-text-light transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </RevealGroup>
          ))}

          <RevealGroup stagger={0.05} className="lg:border-s lg:border-white/15 lg:ps-10">
            <Reveal as="h3" className="text-h6 text-white">
              {contact.heading}
            </Reveal>

            <ul className="mt-6 flex flex-col gap-4 text-body-sm text-text-light">
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 size-[18px] shrink-0" />
                <span className="leading-[1.5]">{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 size-[18px] shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 size-[18px] shrink-0" />
                <span className="leading-[1.5]">{contact.office}</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-1.5">
              {contact.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex size-9 items-center justify-center rounded-md bg-white/12 text-body-sm font-semibold text-white transition-colors duration-300 hover:bg-blue"
                >
                  {socialGlyph[item.label] ?? item.label[0]}
                </a>
              ))}
            </div>
          </RevealGroup>
        </div>

        <Reveal kind="line" className="my-10 h-px w-full bg-white/15" />

        <div className="flex flex-col gap-4 text-body-xs text-text-light sm:flex-row sm:items-center sm:justify-between">
          <p>{legal.copyright}</p>
          <div className="flex gap-8">
            {legal.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="underline-offset-4 transition-colors duration-300 hover:text-white hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
