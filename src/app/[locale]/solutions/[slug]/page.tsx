import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/content/pages/services";
import { locales } from "@/lib/i18n";
import PageHero from "@/components/layout/PageHero";
import ParallaxFigure from "@/components/motion/ParallaxFigure";
import SplitHeading from "@/components/motion/SplitHeading";
import RequestInterest from "@/components/sections/RequestInterest";
import Testimonials from "@/components/sections/Testimonials";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((service) => ({ locale, slug: service.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.intro };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        tagline={service.group}
        lines={[service.title]}
        image={service.image}
        alt={service.title}
      />

      {/* -------------------------------------------------------- overview */}
      <section className="shell py-20 lg:py-[80px]">
        <div className="grid gap-8 lg:grid-cols-[380fr_1012fr] lg:gap-16">
          <Reveal as="p" kind="fade" className="text-h6 text-blue">
            Overview
          </Reveal>
          <SplitHeading
            as="p"
            className="text-[clamp(1.15rem,2vw,1.75rem)] leading-[1.45] font-medium text-text-dark"
          >
            {service.overview}
          </SplitHeading>
        </div>
      </section>

      {/* -------------------------------------------------------- features */}
      <section className="bg-blue-10 py-20 lg:py-[80px]">
        <div className="shell">
          <SplitHeading as="h2" className="text-h4 text-ink lg:text-h3">
            What you get
          </SplitHeading>

          <RevealGroup
            stagger={0.1}
            className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {service.features.map((feature, i) => (
              <Reveal key={feature.title}>
                <p className="font-display text-h5 leading-none text-blue">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-h6 text-ink">{feature.title}</h3>
                <p className="mt-2 text-body-sm leading-[1.6] text-ink-soft">
                  {feature.body}
                </p>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* --------------------------------------------------- specs + image */}
      <section className="shell py-20 lg:py-[80px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SplitHeading as="h2" className="text-h4 text-ink lg:text-h3">
              Specification
            </SplitHeading>

            <RevealGroup stagger={0.08} className="mt-8 flex flex-col">
              {service.specs.map((spec) => (
                <Reveal
                  key={spec.label}
                  className="flex items-baseline justify-between gap-6 border-b border-blue-20 py-5 first:border-t"
                >
                  <span className="text-body-sm text-ink-soft">{spec.label}</span>
                  <span className="text-body font-medium text-ink">{spec.value}</span>
                </Reveal>
              ))}
            </RevealGroup>
          </div>

          <Reveal kind="clip">
            <ParallaxFigure
              src={service.gallery[0]}
              alt={service.title}
              strength={14}
              sizes="(max-width: 1024px) 100vw, 680px"
              className="aspect-[680/560] w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- gallery */}
      <section className="shell pb-20 lg:pb-[80px]">
        <RevealGroup stagger={0.08} className="grid gap-4 sm:grid-cols-3">
          {service.gallery.map((src, i) => (
            <Reveal key={`${src}-${i}`} kind="clip">
              <ParallaxFigure
                src={src}
                alt={`${service.title} ${i + 1}`}
                strength={12}
                sizes="(max-width: 640px) 100vw, 33vw"
                className="aspect-[440/320] w-full"
              />
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      {/* ---------------------------------------------------- other services */}
      <section className="shell pb-20 lg:pb-[80px]">
        <SplitHeading as="h2" className="text-h4 text-ink lg:text-h3">
          Other solutions
        </SplitHeading>

        <RevealGroup stagger={0.08} className="mt-10 grid gap-6 sm:grid-cols-3">
          {others.map((other) => (
            <Reveal key={other.slug} kind="clip">
              <Link href={`/en/solutions/${other.slug}`} className="group flex flex-col">
                <ParallaxFigure
                  src={other.image}
                  alt={other.title}
                  strength={12}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="aspect-[440/280] w-full"
                />
                <div className="relative bg-blue-10 p-6">
                  <span className="absolute -top-7 end-6 flex size-14 items-center justify-center rounded-full border-2 border-white bg-blue text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45">
                    <ArrowUpRight className="size-[30px]" />
                  </span>
                  <h3 className="text-h6 text-ink">{other.title}</h3>
                  <p className="mt-2 text-body-sm leading-[1.5] text-ink-soft">
                    {other.intro}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <Testimonials />
      <RequestInterest />
    </>
  );
}
