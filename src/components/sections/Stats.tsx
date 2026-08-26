import { en } from "@/content/en";
import { cn } from "@/lib/utils";
import Counter from "@/components/motion/Counter";
import DrawnLines from "@/components/motion/DrawnLines";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export default function Stats() {
  const { image, items } = en.stats;

  return (
    /* Taller than its content and opaque, so it reads as a distinct plane
       climbing over the About section while the photo drops into place. */
    <section
      data-stack-over
      className="relative z-10 flex items-center bg-white py-24 shadow-[0_-24px_60px_-30px_rgba(13,14,27,0.28)] lg:min-h-screen lg:py-[120px]"
    >
      <DrawnLines />

      <div className="relative z-10 shell w-full">
      <RevealGroup
        stagger={0.08}
        data-stack-focus
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
      >
        {/* Landing slot for the photo travelling down from the About column. */}
        <div
          data-morph-target
          className="col-span-2 aspect-[266/303] w-full md:col-span-1"
        >
          <ParallaxImage
            src={image.src}
            alt={image.alt}
            strength={14}
            sizes="(max-width: 1024px) 50vw, 266px"
            className="h-full w-full"
          />
        </div>

        {items.map((item) => (
          <Reveal
            key={item.label}
            className={cn(
              "flex aspect-[266/303] flex-col justify-between p-6",
              item.tone === "blue" ? "bg-blue" : "bg-blue-20",
            )}
          >
            <p
              className={cn(
                "font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none",
                item.tone === "blue" ? "text-white" : "text-blue",
              )}
            >
              <Counter value={item.value} suffix={item.suffix} />
            </p>
            <p
              className={cn(
                "text-body font-medium",
                item.tone === "blue" ? "text-white" : "text-blue",
              )}
            >
              {item.label}
            </p>
          </Reveal>
        ))}
        </RevealGroup>
      </div>
    </section>
  );
}
