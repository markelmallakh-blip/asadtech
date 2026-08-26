import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { en } from "@/content/en";
import { projectDetails } from "@/content/pages/project-detail";
import { locales } from "@/lib/i18n";
import PageHero from "@/components/layout/PageHero";
import ProjectList from "@/components/sections/ProjectList";
import RequestInterest from "@/components/sections/RequestInterest";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import Figure from "@/components/ui/Figure";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(projectDetails).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectDetails[slug];
  if (!project) return {};
  return { title: project.title, description: project.intro };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const p = projectDetails[slug];
  if (!p) notFound();

  const related = en.work.projects.filter((item) => !item.href.endsWith(slug));

  return (
    <>
      <PageHero
        tagline={p.tagline}
        lines={[p.title]}
        image={p.hero.src}
        alt={p.hero.alt}
      />

      {/* ------------------------------------------------------- overview */}
      <section className="shell py-20 lg:py-[80px]">
        <div className="grid gap-8 lg:grid-cols-[380fr_1012fr] lg:gap-16">
          <Reveal as="p" kind="fade" className="text-h6 text-blue">
            {p.overview.tagline}
          </Reveal>
          <SplitHeading
            as="p"
            className="text-[clamp(1.15rem,2vw,1.75rem)] leading-[1.45] font-medium text-text-dark"
          >
            {p.overview.body}
          </SplitHeading>
        </div>
      </section>

      {/* --------------------------------------------------- client band */}
      <section className="relative isolate overflow-hidden bg-navy">
        <ParallaxFigure
          src={p.client.image.src}
          alt={p.client.image.alt}
          strength={14}
          tone="dark"
          sizes="100vw"
          className="absolute inset-0 -z-10"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-navy/78" />

        <div className="shell flex flex-col items-center py-24 text-center lg:py-[110px]">
          <Reveal kind="fade">
            <Figure
              src={p.client.logo}
              alt={p.client.name}
              label={p.client.name}
              tone="dark"
              sizes="180px"
              className="h-[92px] w-[180px]"
            />
          </Reveal>
          <SplitHeading as="h2" className="mt-8 text-h4 text-white lg:text-h3">
            {p.client.name}
          </SplitHeading>
          <Reveal
            as="p"
            className="mt-6 max-w-[860px] text-body leading-[1.7] text-text-light"
          >
            {p.client.blurb}
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------- project scope */}
      <section className="shell py-20 lg:py-[80px]">
        <SplitHeading as="h2" className="text-h4 text-ink lg:text-h3">
          {p.scope.heading}
        </SplitHeading>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <RevealGroup stagger={0.08} className="flex flex-col">
            {p.scope.items.map((item) => (
              <Reveal
                key={item}
                className="border-b border-blue-20 py-6 text-h6 text-ink first:border-t"
              >
                {item}
              </Reveal>
            ))}
          </RevealGroup>

          <Reveal kind="clip">
            <ParallaxFigure
              src={p.scope.image.src}
              alt={p.scope.image.alt}
              strength={14}
              sizes="(max-width: 1024px) 100vw, 680px"
              className="aspect-[680/460] w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ implementation */}
      <section className="bg-navy py-20 lg:py-[90px]">
        <div className="shell">
          <SplitHeading
            as="h2"
            className="text-center text-h4 text-white lg:text-h3"
          >
            {p.steps.heading}
          </SplitHeading>

          <RevealGroup
            stagger={0.1}
            className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {p.steps.items.map((step, i) => (
              <Reveal key={step.title}>
                <p className="font-display text-h4 leading-none text-blue-70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-h6 text-white">{step.title}</h3>
                <p className="mt-3 text-body-sm leading-[1.6] text-text-light">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ------------------------------------------------------- gallery */}
      <section className="shell py-20 lg:py-[80px]">
        <SplitHeading
          as="h2"
          className="text-center text-h4 text-ink lg:text-h3"
        >
          Project Gallery
        </SplitHeading>

        <RevealGroup
          stagger={0.08}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {p.gallery.map((image, i) => (
            <Reveal key={`${image.src}-${i}`} kind="clip">
              <ParallaxFigure
                src={image.src}
                alt={image.alt}
                strength={12}
                sizes="(max-width: 640px) 100vw, 25vw"
                className="aspect-[336/260] w-full"
              />
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      {/* ---------------------------------------------- services provided */}
      <section className="shell pb-20 lg:pb-[80px]">
        <SplitHeading as="h2" className="text-h4 text-ink lg:text-h3">
          Services Provided
        </SplitHeading>

        <RevealGroup stagger={0.1} className="mt-10 grid gap-6 sm:grid-cols-2">
          {p.services.map((service) => (
            <Reveal key={service.title} kind="clip">
              <Link href={service.href} className="group flex flex-col">
                <ParallaxFigure
                  src={service.image}
                  alt={service.title}
                  strength={12}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="aspect-[680/300] w-full"
                />
                <div className="relative bg-blue-10 p-6">
                  <span className="absolute -top-7 end-6 flex size-14 items-center justify-center rounded-full border-2 border-white bg-blue text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45">
                    <ArrowUpRight className="size-[30px]" />
                  </span>
                  <h3 className="text-h6 text-ink">{service.title}</h3>
                  <p className="mt-2 text-body-sm leading-[1.5] text-ink-soft">
                    {service.body}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      {/* ----------------------------------------------- related projects */}
      <section className="pb-4">
        <SplitHeading as="h2" className="shell text-h4 text-ink lg:text-h3">
          Related Projects
        </SplitHeading>
        <div className="mt-10">
          <ProjectList projects={related} />
        </div>
      </section>

      <Reveal kind="fade">
        <Link
          href="/en/projects"
          className="block bg-teal py-16 transition-colors duration-500 hover:bg-blue lg:py-[70px]"
        >
          <span className="shell flex justify-center">
            <span className="inline-flex h-[46px] items-center rounded-full border-2 border-white px-7 text-body-sm font-medium text-white">
              {en.work.allCta}
            </span>
          </span>
        </Link>
      </Reveal>

      <RequestInterest />
    </>
  );
}
