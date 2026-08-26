import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { careersPage, openings } from "@/content/pages/careers";
import { locales } from "@/lib/i18n";
import PageHero from "@/components/layout/PageHero";
import SplitHeading from "@/components/motion/SplitHeading";
import ApplyForm from "@/components/sections/ApplyForm";
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

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const role = openings.find((r) => r.slug === slug);
  if (!role) notFound();

  const meta = [
    { label: "Department", value: role.department },
    { label: "Location", value: role.location },
    { label: "Type", value: role.type },
  ];

  return (
    <>
      <PageHero
        tagline="Careers"
        lines={[role.title]}
        image={careersPage.hero.image.src}
        alt={careersPage.hero.image.alt}
      />

      <section className="shell py-20 lg:py-[80px]">
        <div className="grid gap-14 lg:grid-cols-[380fr_1012fr] lg:gap-16">
          {/* -------------------------------------------------- role meta */}
          <RevealGroup stagger={0.08} className="lg:sticky lg:top-[140px] lg:self-start">
            {meta.map((item) => (
              <Reveal
                key={item.label}
                className="border-b border-blue-20 py-4 first:border-t"
              >
                <p className="text-body-xs tracking-[0.12em] text-ink-soft uppercase">
                  {item.label}
                </p>
                <p className="mt-1 text-body text-ink">{item.value}</p>
              </Reveal>
            ))}
          </RevealGroup>

          {/* ----------------------------------------------------- content */}
          <div>
            <SplitHeading
              as="p"
              className="text-[clamp(1.15rem,2vw,1.75rem)] leading-[1.45] font-medium text-text-dark"
            >
              {role.about}
            </SplitHeading>

            <RevealGroup stagger={0.06} className="mt-12">
              <Reveal as="h2" className="text-h5 text-ink">
                Responsibilities
              </Reveal>
              <ul className="mt-5 flex flex-col gap-3">
                {role.responsibilities.map((item) => (
                  <li key={item}>
                    <Reveal className="flex gap-3 text-body leading-[1.6] text-ink-soft">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue" />
                      {item}
                    </Reveal>
                  </li>
                ))}
              </ul>
            </RevealGroup>

            <RevealGroup stagger={0.06} className="mt-12">
              <Reveal as="h2" className="text-h5 text-ink">
                Requirements
              </Reveal>
              <ul className="mt-5 flex flex-col gap-3">
                {role.requirements.map((item) => (
                  <li key={item}>
                    <Reveal className="flex gap-3 text-body leading-[1.6] text-ink-soft">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue" />
                      {item}
                    </Reveal>
                  </li>
                ))}
              </ul>
            </RevealGroup>

            <Reveal kind="fade-up" className="mt-14 bg-blue-10 p-8 lg:p-10">
              <h2 className="text-h5 text-ink">{careersPage.apply.heading}</h2>
              <p className="mt-2 text-body-sm text-ink-soft">
                {careersPage.apply.body}
              </p>
              <ApplyForm role={role.title} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
