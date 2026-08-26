import Link from "next/link";
import { en } from "@/content/en";
import { cn } from "@/lib/utils";
import Button, { TextLink } from "@/components/ui/Button";
import Image from "next/image";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export default function Articles() {
  const { heading, cta, href, items } = en.articles;

  return (
    <section className="py-24 lg:py-[90px]">
      <div className="shell">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SplitHeading className="text-h4 text-ink lg:text-h3">
            {heading}
          </SplitHeading>
          <Reveal kind="fade">
            <Button href={href} variant="primary" size="md">
              {cta}
            </Button>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.1}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, index) => (
            <Reveal key={item.href} kind="clip">
              <Link href={item.href} className="group block">
                {/* Alternating heights create the Figma's stagger. */}
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    index % 2 === 0 ? "h-[262px]" : "h-[382px]",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-body-xs text-ink-soft">{item.date}</p>
                  <h3 className="mt-2 text-h6 leading-[1.3] text-ink transition-colors duration-300 group-hover:text-blue">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body-xs text-ink-soft">{item.author}</p>
                  <TextLink className="mt-4">
                    Read more
                  </TextLink>
                </div>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
