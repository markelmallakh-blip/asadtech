import { about } from "@/content/pages/about";
import Button from "@/components/ui/Button";
import TeamPair from "@/components/motion/TeamPair";
import TeamThread, { type ThreadName } from "@/components/motion/TeamThread";
import LanyardBadge from "@/components/motion/LanyardBadge";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/**
 * Leadership grid (Figma 69:8360). Each row puts a pair of cards — one short,
 * one tall — against a thread that fills the empty half, and both the side and
 * the order of the pair alternate row by row. That zig-zag is what gives the
 * column its rhythm, and the thread is what keeps the gap from reading as a
 * hole.
 */

/** Figma cycles three threads down the column. */
const THREADS: ThreadName[] = ["a", "b", "c", "b"];

const THREAD_BOX: Record<ThreadName, string> = {
  a: "h-[424px] w-[542px]",
  b: "h-[291px] w-[417px]",
  c: "h-[330px] w-[571px]",
};

export default function AboutTeam() {
  const { heading, members, careers } = about.team;

  const rows = Array.from({ length: Math.ceil(members.length / 2) }, (_, i) =>
    members.slice(i * 2, i * 2 + 2),
  );

  return (
    <section className="shell py-20 lg:pt-[60px] lg:pb-[80px]">
      <Reveal as="h2" kind="fade" className="text-h5 font-semibold text-text-dark">
        {heading}
      </Reveal>

      <div className="mt-10 flex flex-col gap-12 lg:mt-[70px] lg:gap-14">
        {rows.map((row, rowIndex) => {
          /* Odd rows carry the pair on the left, so the thread mirrors over. */
          const threadOnRight = rowIndex % 2 === 1;
          const thread = THREADS[rowIndex % THREADS.length];

          return (
            <div
              key={rowIndex}
              data-team-row
              className={cn(
                "flex items-start justify-between",
                threadOnRight && "flex-row-reverse",
              )}
            >
              <TeamThread
                name={thread}
                flip={threadOnRight}
                className={cn(
                  "hidden shrink-0 lg:block",
                  THREAD_BOX[thread],
                  /* Vector 16 sits against the middle of its row in Figma */
                  thread === "b" && "self-center",
                )}
              />

              <TeamPair members={row} tallFirst={threadOnRight} />
            </div>
          );
        })}
      </div>

      {/* ------------------------------------------------------ careers band */}
      <Reveal
        kind="fade-up"
        /* The diagonal wash from Figma 69:8460. No top padding and clipped to
           the rounded box, so the pass reads as dropping in over the edge. */
        className="mt-16 flex flex-col items-start justify-between gap-10 overflow-hidden rounded-[6px] bg-[linear-gradient(-21.72deg,#092526_0.914%,#494b98_97.708%)] p-10 lg:mt-[80px] lg:flex-row lg:items-center lg:ps-[60px]"
      >
        <div className="max-w-[470px]">
          <h3 className="text-[clamp(2rem,3.4vw,2.625rem)] leading-[1.25] font-semibold text-white">
            {careers.heading}
          </h3>
          <p className="mt-2 text-body leading-[1.3] text-text-light">
            {careers.body}
          </p>
          <Button
            href={careers.href}
            variant="white-border"
            size="lg"
            className="mt-8"
          >
            {careers.cta}
          </Button>
        </div>

        <LanyardBadge
          src={careers.image.src}
          alt={careers.image.alt}
          tilt={-7}
          className="-mt-[72px] h-[300px] w-[258px] shrink-0 self-start"
        />
      </Reveal>
    </section>
  );
}
