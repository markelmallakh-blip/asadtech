import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, serviceShared } from "@/content/pages/services";
import { locales } from "@/lib/i18n";
import ServiceHero from "@/components/sections/ServiceHero";
import SplitPanels from "@/components/sections/SplitPanels";
import ProductApplications from "@/components/sections/ProductApplications";
import ModelsList from "@/components/sections/ModelsList";
import WarrantyBand from "@/components/sections/WarrantyBand";
import InstallationBand from "@/components/sections/InstallationBand";
import Downloads from "@/components/sections/Downloads";
import GalleryGrid from "@/components/sections/GalleryGrid";
import RequestInterest from "@/components/sections/RequestInterest";

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

/** Single-solution page, section for section after Figma 69:8644. */
export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const { models, warranty, installation, downloads, gallery } = serviceShared;

  return (
    <>
      <ServiceHero
        eyebrow={service.title}
        headline={service.headline ?? service.title}
        body={service.intro}
        overview={service.overview}
        overviewImages={service.overviewImages}
        video={service.video}
        poster={service.image}
        cta="REQUEST INTEREST"
        href={`/${locale}/contact`}
      />

      {/* -------------------------------------------------------- features */}
      <SplitPanels
        heading={`Asad ${service.title} Features`}
        image={service.featuresImage}
        items={service.features}
      />

      {/* -------------------------------------------------- applications */}
      <ProductApplications
        items={service.applications}
        image="/images/single-service/gallery-02.webp"
        alt={`${service.title} truck loaded with fresh produce`}
      />

      {/* ---------------------------------------------------------- models */}
      <ModelsList
        tagline={models.tagline}
        heading={models.heading}
        intro={service.modelsIntro}
        allTab={models.allTab}
        brochure={models.brochure}
        brochureHref={models.brochureHref}
        groups={service.models}
      />

      {/* -------------------------------------------------------- warranty */}
      <WarrantyBand
        heading={warranty.heading}
        tagline={warranty.tagline}
        items={warranty.items}
      />

      {/* ---------------------------------------------------- installation */}
      <InstallationBand
        tag={installation.tag}
        heading={installation.heading}
        image={installation.image}
        rows={installation.rows}
        cta={installation.cta}
        href={installation.href}
      />

      {/* ------------------------------------------------------- downloads */}
      <Downloads heading={downloads.heading} items={downloads.items} />

      {/* --------------------------------------------------------- gallery */}
      <GalleryGrid
        tagline={gallery.tagline}
        heading={gallery.heading}
        images={service.gallery}
        alt={service.title}
      />

      {/* The only page with the lead form: its model list is this solution's */}
      <RequestInterest
        models={service.models.flatMap((group) => group.items.map((model) => model.name))}
      />
    </>
  );
}
