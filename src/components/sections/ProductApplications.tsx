import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import Figure from "@/components/ui/Figure";
import { cn } from "@/lib/utils";

type Item = { title: string; body: string };

/**
 * Where a card sits on the desktop stage and how its wedge points at the
 * vehicle. Positions are percentages of Figma's 1392 × 689 canvas so the
 * arrangement holds from the `xl` breakpoint up to the full-width shell; the
 * wedge is one of the six orientations of the same 33 × 25 right triangle.
 */
const SLOTS = [
  {
    wrapper: "xl:left-0 xl:top-[1.3%] xl:w-[25.6%] xl:items-end",
    tail: { after: true, w: 33, h: 25, points: "0,0 33,0 33,25" },
  },
  {
    wrapper: "xl:left-[37%] xl:top-0 xl:w-[27.5%] xl:items-center",
    tail: { after: true, w: 25, h: 33, points: "25,0 0,0 25,33", shift: true },
  },
  {
    wrapper: "xl:right-0 xl:top-0 xl:w-[25.6%] xl:items-start",
    tail: { after: true, w: 33, h: 25, points: "0,0 33,0 0,25" },
  },
  {
    wrapper: "xl:left-0 xl:bottom-[1.2%] xl:w-[29.3%] xl:items-end xl:justify-end",
    tail: { after: false, w: 33, h: 25, points: "0,25 33,25 33,0" },
  },
  {
    wrapper: "xl:left-[37%] xl:bottom-[1.2%] xl:w-[23.2%] xl:items-center xl:justify-end",
    tail: { after: false, w: 25, h: 33, points: "25,33 0,33 25,0", shift: true },
  },
  {
    wrapper: "xl:right-0 xl:bottom-[1.2%] xl:w-[24.1%] xl:items-start xl:justify-end",
    tail: { after: false, w: 25, h: 33, points: "0,33 25,33 0,0" },
  },
] as const;

function Tail({
  w,
  h,
  points,
  shift,
}: {
  w: number;
  h: number;
  points: string;
  shift?: boolean;
}) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      aria-hidden="true"
      /* The mid-edge wedges sit 25px right of centre in the design. */
      className={cn("hidden shrink-0 fill-blue xl:block", shift && "xl:ms-[50px]")}
    >
      <polygon points={points} />
    </svg>
  );
}

/**
 * Six market cards fanned around the vehicle (Figma 69:8776).
 *
 * On desktop the cards are pinned to the corners and mid-edges of a stage
 * that keeps the design's aspect ratio, each with a wedge pointing in at the
 * truck. Below `xl` there is no room to fan anything, so the picture sits
 * above a plain grid of the same cards and the wedges are dropped.
 */
export default function ProductApplications({
  heading = "Product Applications",
  image,
  alt,
  items,
}: {
  heading?: string;
  image: string;
  alt: string;
  items: readonly Item[];
}) {
  return (
    <section className="bg-white py-20 lg:py-[80px]">
      <div className="shell flex flex-col items-center gap-10 lg:gap-[60px]">
        <SplitHeading
          as="h2"
          className="text-center text-h4 text-text-dark lg:text-h2"
        >
          {heading}
        </SplitHeading>

        {/* ---------------------------------------------------------- stage */}
        <div className="flex w-full flex-col gap-10 xl:relative xl:block xl:aspect-[1392/689]">
          <Reveal
            kind="clip"
            className="w-full xl:absolute xl:left-[22.57%] xl:top-[18%] xl:w-[52.24%]"
          >
            <Figure
              src={image}
              alt={alt}
              sizes="(max-width: 1280px) 100vw, 727px"
              className="aspect-[1647/955] w-full"
            />
          </Reveal>

          <RevealGroup
            stagger={0.08}
            className="grid gap-4 sm:grid-cols-2 xl:contents"
          >
            {items.slice(0, SLOTS.length).map((item, i) => {
              const slot = SLOTS[i];
              const tail = <Tail {...slot.tail} />;
              return (
                <Reveal
                  key={item.title}
                  className={cn("flex flex-col xl:absolute", slot.wrapper)}
                >
                  {!slot.tail.after && tail}
                  <div className="flex w-full flex-col gap-4 bg-blue p-6 text-white">
                    <h3 className="text-h6 font-semibold capitalize">{item.title}</h3>
                    <p className="text-body">{item.body}</p>
                  </div>
                  {slot.tail.after && tail}
                </Reveal>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
