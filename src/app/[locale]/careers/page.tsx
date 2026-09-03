import type { Metadata } from "next";
import { careersPage, openings } from "@/content/pages/careers";
import Banner, { BannerChip } from "@/components/layout/Banner";
import SplitHeading from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";
import CultureBand from "@/components/sections/CultureBand";
import OpenPositions from "@/components/sections/OpenPositions";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Engineering, project and service roles at Asad Advanced Technologies across Riyadh, Jeddah and Dammam.",
};

/** Careers page (Figma 126:6550). */
export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { hero, culture } = careersPage;

  return (
    <>
      <Banner variant="photo" image={hero.image.src} alt={hero.image.alt} wash="start">
        <div className="shell flex flex-col pt-[150px] pb-20 lg:pt-[180px] lg:pb-[120px]">
          <div className="flex max-w-[768px] flex-col gap-6">
            <div className="flex flex-col items-start gap-2.5">
              <BannerChip>{hero.chip}</BannerChip>
              <SplitHeading as="h1" className="max-w-[559px] text-h5 font-semibold lg:text-h4">
                {hero.heading}
              </SplitHeading>
            </div>
            <Reveal as="p" className="max-w-[694px] text-body leading-[1.5] font-light">
              {hero.body}
            </Reveal>
          </div>
        </div>
      </Banner>

      <CultureBand
        heading={culture.heading}
        body={culture.body}
        badge={culture.badge}
        cards={culture.cards}
      />

      <OpenPositions
        heading={careersPage.openings.heading}
        cta={careersPage.openings.cta}
        openings={openings}
        locale={locale}
      />

      <CtaBand />
    </>
  );
}
