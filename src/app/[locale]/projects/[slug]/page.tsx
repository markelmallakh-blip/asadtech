import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { en } from "@/content/en";
import { projectDetails } from "@/content/pages/project-detail";
import { projectsPage } from "@/content/pages/projects";
import { locales } from "@/lib/i18n";
import Banner, { BannerChip } from "@/components/layout/Banner";
import Button from "@/components/ui/Button";
import Figure from "@/components/ui/Figure";
import Tag from "@/components/ui/Tag";
import { ArrowUpRight, LocationIcon } from "@/components/ui/Icons";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import ScrollHighlightText from "@/components/motion/ScrollHighlightText";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import ProjectList from "@/components/sections/ProjectList";
import AllProjectsBand from "@/components/sections/AllProjectsBand";
import CtaBand from "@/components/sections/CtaBand";

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

/** Small uppercase tagline over a section heading (Figma 121:2535). */
function Tagline({ children, light }: { children: string; light?: boolean }) {
  return (
    <Reveal
      as="p"
      kind="fade"
      className={light ? "text-body-sm font-semibold text-white/70" : "text-body-sm font-semibold text-blue/70"}
    >
      {children}
    </Reveal>
  );
}

/** Project detail page, section for section after Figma 121:2500. */
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  const p = projectDetails[slug];
  if (!p) notFound();

  const related = en.work.projects.filter((item) => !item.href.endsWith(slug));

  return (
    <>
      {/* -------------------------------------------------------- banner */}
      <Banner variant="gradient">
        <div className="shell flex flex-col gap-10 pt-[150px] pb-16 lg:flex-row lg:items-center lg:justify-between lg:pt-[160px] lg:pb-[100px]">
          <div className="flex max-w-[768px] flex-col gap-8 lg:w-[578px]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-2.5">
                <BannerChip>{p.chip}</BannerChip>
                <SplitHeading as="h1" className="max-w-[559px] text-h4 lg:text-h2">
                  {p.title}
                </SplitHeading>
              </div>
              <Reveal as="p" className="text-body leading-[1.5] font-light">
                {p.intro}
              </Reveal>
            </div>
            <Reveal kind="fade" className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <Tag key={tag} tone="light">
                  {tag}
                </Tag>
              ))}
            </Reveal>
          </div>

          <RevealGroup stagger={0.12} className="flex w-full items-end gap-4 lg:w-auto">
            <Reveal kind="clip" className="w-[34%] lg:w-[198px]">
              <ParallaxFigure
                src={p.images[0].src}
                alt={p.images[0].alt}
                strength={10}
                sizes="(max-width: 1024px) 34vw, 198px"
                className="aspect-square w-full rounded-[10px]"
              />
            </Reveal>
            <Reveal kind="clip" className="flex-1 lg:w-[374px] lg:flex-none">
              <ParallaxFigure
                src={p.images[1].src}
                alt={p.images[1].alt}
                strength={10}
                sizes="(max-width: 1024px) 60vw, 374px"
                className="aspect-[374/264] w-full rounded-[10px]"
              />
            </Reveal>
          </RevealGroup>
        </div>
      </Banner>

      {/* ------------------------------------------------------ overview */}
      <section className="bg-blue-10 py-20 lg:py-[100px]">
        <div className="shell flex flex-col gap-8 lg:flex-row lg:justify-between">
          <SplitHeading as="h2" className="text-h5 text-blue">
            {p.overview.heading}
          </SplitHeading>

          <div className="flex flex-col gap-10 lg:w-[868px] lg:gap-[68px]">
            <ScrollHighlightText
              text={p.overview.text}
              className="text-[clamp(1.25rem,2.2vw,2rem)] leading-[1.3] font-medium"
            />
            <div className="flex flex-col gap-6">
              <Reveal kind="line" className="h-px w-full bg-grey-3" />
              <Reveal kind="fade" className="flex items-center gap-1 text-body-sm text-text-dark">
                <LocationIcon className="size-6" />
                {p.location}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- client */}
      <section className="bg-white py-20 lg:py-[100px]">
        <div className="shell flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <BannerChip>{p.client.chip}</BannerChip>
            <SplitHeading as="h2" className="text-h5 text-text-dark">
              {p.client.name}
            </SplitHeading>
          </div>
          <Reveal
            as="p"
            className="max-w-[1004px] text-[clamp(1.25rem,2.2vw,2rem)] leading-[1.3] font-light text-text-dark"
          >
            {p.client.blurb}
          </Reveal>
          <Reveal kind="fade">
            <Figure
              src={p.client.logo}
              alt={p.client.name}
              label={p.client.name}
              sizes="112px"
              className="h-[113px] w-[112px]"
            />
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- scope */}
      <section className="bg-[linear-gradient(180deg,#c8c9e9_0%,#f2f2ff_100%)] py-20 lg:py-[100px]">
        <div className="shell flex flex-col gap-10 lg:gap-14">
          <div className="flex flex-col gap-2">
            <Tagline>{p.scope.tagline}</Tagline>
            <SplitHeading as="h2" className="text-h4 text-text-dark lg:text-h2">
              {p.scope.heading}
            </SplitHeading>
          </div>

          <div className="flex flex-col gap-8 rounded-lg border border-blue-10 bg-grey-05 px-6 py-8 lg:px-8 lg:py-11">
            <RevealGroup stagger={0.08} className="flex flex-col gap-8">
              {p.scope.items.map((item, i) => (
                <Reveal
                  key={item.title}
                  className={i > 0 ? "flex flex-col gap-2 border-t border-blue-40 pt-8" : "flex flex-col gap-2"}
                >
                  <h3 className="text-h6 font-semibold text-text-dark lg:text-h5">{item.title}</h3>
                  <p className="text-body-sm text-text-muted">{item.body}</p>
                </Reveal>
              ))}
            </RevealGroup>

            <Reveal kind="clip">
              <ParallaxFigure
                src={p.scope.image.src}
                alt={p.scope.image.alt}
                strength={12}
                sizes="(max-width: 1512px) 100vw, 1328px"
                className="h-[260px] w-full rounded-[10px] lg:h-[450px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- process */}
      <section className="bg-[linear-gradient(180deg,#050721_20.7%,var(--color-blue)_100%)] py-20 text-white lg:py-[100px]">
        <div className="shell flex flex-col gap-12 lg:gap-16">
          <div className="flex flex-col items-center gap-2 text-center">
            <Tagline light>{p.process.tagline}</Tagline>
            <SplitHeading as="h2" className="text-h4 lg:text-h2">
              {p.process.heading}
            </SplitHeading>
          </div>

          <RevealGroup stagger={0.1} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {p.process.items.map((step, i) => (
              <Reveal key={step.title} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-[36px] leading-none font-semibold text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-white/30" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-h6 font-semibold capitalize">{step.title}</h3>
                  <p className="text-body-sm text-text-light">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ------------------------------------------------------- gallery */}
      <section className="bg-white py-20 lg:py-[100px]">
        <div className="shell flex flex-col items-center gap-10 lg:gap-14">
          <SplitHeading as="h2" className="text-center text-h4 text-ink lg:text-h3">
            {p.gallery.heading}
          </SplitHeading>

          <RevealGroup stagger={0.08} className="flex w-full flex-wrap justify-center gap-4">
            {p.gallery.images.map((image, i) => (
              <Reveal key={`${image.src}-${i}`} kind="clip" className="w-full sm:w-[calc(50%-8px)] lg:w-[453px]">
                <ParallaxFigure
                  src={image.src}
                  alt={image.alt}
                  strength={12}
                  sizes="(max-width: 640px) 100vw, 453px"
                  className="aspect-[453/302] w-full"
                />
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ---------------------------------------------- services provided */}
      <section className="bg-blue-10 py-14 lg:py-[60px]">
        <div className="shell flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-2">
              <Tagline>{p.services.tagline}</Tagline>
              <SplitHeading as="h2" className="text-h4 text-ink lg:text-h3">
                {p.services.heading}
              </SplitHeading>
            </div>
            <Reveal kind="fade">
              <Button href={p.services.href} variant="primary" size="lg">
                {p.services.cta}
              </Button>
            </Reveal>
          </div>

          <RevealGroup stagger={0.1} className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            {p.services.items.map((service) => (
              <Reveal key={service.title} kind="clip" className="w-full sm:w-[319px]">
                <Link href={service.href} className="group flex flex-col">
                  <ParallaxFigure
                    src={service.image}
                    alt={service.title}
                    strength={12}
                    sizes="319px"
                    className="h-[201px] w-full"
                  />
                  <div className="relative flex min-h-[180px] flex-col gap-2 bg-white p-4">
                    <span className="absolute -top-7 end-4 grid size-14 place-items-center rounded-full bg-white">
                      <span className="grid size-[52px] place-items-center rounded-full bg-blue text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45">
                        <ArrowUpRight className="size-[30px]" />
                      </span>
                    </span>
                    <h3 className="text-h6 font-semibold text-text-dark capitalize">{service.title}</h3>
                    <p className="max-w-[287px] text-body-sm text-[#131313]/70">{service.body}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ----------------------------------------------- related projects */}
      <section className="bg-white pt-14 lg:pt-[60px]">
        <SplitHeading as="h2" className="shell text-h4 text-text-dark lg:text-h2">
          {p.related}
        </SplitHeading>
        <div className="mt-8">
          <ProjectList projects={related} />
          <AllProjectsBand href={`/${locale}/projects`}>{projectsPage.allCta}</AllProjectsBand>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
