import { en } from "@/content/en";
import Button from "@/components/ui/Button";
import Image from "next/image";
import ParallaxImage from "@/components/motion/ParallaxImage";
import ScrollHighlightText from "@/components/motion/ScrollHighlightText";
import { Reveal } from "@/components/motion/Reveal";

export default function About() {
  const { tagline, lead, rest, cta, href, images } = en.about;

  return (
    /* Opaque in its own right: this section gets pinned, so it must not rely
       on the body colour showing through from behind it. */
    <section
      data-stack-under
      className="shell bg-blue-10 py-24 lg:py-[100px]"
    >
      <div className="grid gap-14 lg:grid-cols-[971fr_347fr] lg:gap-[87px]">
        {/* Copy holds position while the image column scrolls past it. */}
        <div className="lg:sticky lg:top-[140px] lg:self-start">
          <Reveal
            as="p"
            kind="fade"
            className="text-h6 text-blue"
          >
            {tagline}
          </Reveal>

          <ScrollHighlightText
            text={lead + rest}
            highlight="manufacturer and supplier"
            className="mt-8 text-[clamp(1.4rem,2.1vw,2rem)] leading-[1.45] font-medium"
          />

          <Reveal className="mt-12">
            <Button href={href} variant="primary" size="md">
              {cta}
            </Button>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8">
          {images.map((image, index) => {
            const isLast = index === images.length - 1;

            return (
              <Reveal
                key={image.src}
                kind={isLast ? "fade" : "clip"}
                delay={index * 0.08}
              >
                {isLast ? (
                  /* Departure slot: on desktop the photo detaches from here
                     and flies into the first stats tile. */
                  <div
                    data-morph-source
                    className="aspect-[347/403] w-full overflow-hidden"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={347}
                      height={403}
                      sizes="(max-width: 1024px) 100vw, 347px"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <ParallaxImage
                    src={image.src}
                    alt={image.alt}
                    strength={16}
                    sizes="(max-width: 1024px) 100vw, 347px"
                    className="aspect-[347/403] w-full"
                  />
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
