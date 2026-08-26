import { en } from "@/content/en";
import SectionTitle from "@/components/ui/SectionTitle";
import Marquee from "@/components/ui/Marquee";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export default function Clients() {
  const { tagline, heading, rows } = en.clients;

  return (
    <section className="overflow-hidden py-24 lg:py-[80px]">
      <SectionTitle tagline={tagline} lines={[heading]} className="shell" />

      <div className="mt-14 flex flex-col gap-6 lg:mt-[52px]">
        {rows.map((row, index) => (
          <Reveal key={index} kind="fade" delay={index * 0.08}>
            <Marquee
              direction={index % 2 === 0 ? "left" : "right"}
              duration={52 + index * 6}
            >
              {row.map((logo, i) => (
                <div
                  key={`${logo}-${i}`}
                  className="mx-1.5 flex h-20 w-[156px] shrink-0 items-center justify-center rounded-sm border border-blue-20 bg-white px-5 transition-colors duration-300 hover:border-blue/40"
                >
                  <Image
                    src={logo}
                    alt=""
                    width={116}
                    height={48}
                    className="h-auto max-h-12 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
              ))}
            </Marquee>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
