import { en } from "@/content/en";
import Button from "@/components/ui/Button";
import PostCard from "@/components/sections/PostCard";
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
              {/* Alternating heights create the Figma's stagger. */}
              <PostCard post={item} tall={index % 2 === 1} />
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
