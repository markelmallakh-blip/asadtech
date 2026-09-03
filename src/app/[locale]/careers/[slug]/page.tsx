import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { careersPage, openings } from "@/content/pages/careers";
import { locales } from "@/lib/i18n";
import Banner, { BackLink } from "@/components/layout/Banner";
import Button from "@/components/ui/Button";
import ShareButtons from "@/components/ui/ShareButtons";
import SplitHeading from "@/components/motion/SplitHeading";
import ApplyForm from "@/components/sections/ApplyForm";
import CtaBand from "@/components/sections/CtaBand";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    openings.map((role) => ({ locale, slug: role.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = openings.find((r) => r.slug === slug);
  if (!role) return {};
  return { title: role.title, description: role.summary };
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="ms-6 flex list-disc flex-col text-body text-text-muted marker:text-text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** Job page (Figma 122:5175). */
export default async function CareerDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  const role = openings.find((r) => r.slug === slug);
  if (!role) notFound();

  const labels = careersPage.role;

  return (
    <>
      {/* -------------------------------------------------------- banner */}
      <Banner variant="gradient">
        <div className="shell flex flex-col items-center gap-8 pt-[150px] pb-14 lg:pt-[160px] lg:pb-[60px]">
          <div className="flex w-full max-w-[892px] flex-col gap-2">
            <BackLink href={`/${locale}/careers`}>{labels.back}</BackLink>
            <SplitHeading as="h1" className="text-h4 lg:text-h3">
              {role.title}
            </SplitHeading>
            <Reveal kind="fade" className="flex items-center gap-2 text-body-xs">
              <span>{role.location}</span>
              <span aria-hidden className="size-1.5 rounded-full bg-white" />
              <span>{role.type}</span>
            </Reveal>
          </div>
          <Reveal kind="line" className="h-px w-full max-w-[897px] bg-white/40" />
          <Reveal kind="fade" className="flex w-full max-w-[892px] justify-end">
            <ShareButtons title={role.title} />
          </Reveal>
        </div>
      </Banner>

      {/* ---------------------------------------------------------- body */}
      <section className="bg-white py-14 lg:py-[60px]">
        <RevealGroup stagger={0.08} className="shell flex flex-col items-center">
          <div className="flex w-full max-w-[735px] flex-col gap-6">
            <Reveal className="flex flex-col gap-2">
              <h2 className="text-h6 font-semibold text-text-dark capitalize">{labels.about}</h2>
              <p className="text-body text-text-muted">{role.about}</p>
            </Reveal>
            <Reveal className="flex flex-col gap-2">
              <h2 className="text-h6 font-semibold text-text-dark capitalize">
                {labels.responsibilities}
              </h2>
              <Bullets items={role.responsibilities} />
            </Reveal>
            <Reveal className="flex flex-col gap-2">
              <h2 className="text-h6 font-semibold text-text-dark capitalize">
                {labels.requirements}
              </h2>
              <Bullets items={role.requirements} />
            </Reveal>
            <Reveal className="flex flex-col gap-2">
              <h2 className="text-h6 font-semibold text-text-dark capitalize">{labels.offer}</h2>
              <Bullets items={role.offer} />
            </Reveal>
            <Reveal kind="fade">
              <Button href="#apply" variant="primary" size="md">
                {labels.cta}
              </Button>
            </Reveal>
          </div>
        </RevealGroup>
      </section>

      {/* --------------------------------------------------------- apply */}
      <section id="apply" className="bg-blue-10 py-14 lg:py-[60px]">
        <Reveal kind="fade-up" className="shell">
          <div className="mx-auto w-full max-w-[735px]">
            <h2 className="text-h5 text-ink">{careersPage.apply.heading}</h2>
            <p className="mt-2 text-body-sm text-ink-soft">{careersPage.apply.body}</p>
            <ApplyForm role={role.title} />
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
