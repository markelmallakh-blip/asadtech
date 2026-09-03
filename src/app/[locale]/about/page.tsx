import type { Metadata } from "next";
import { about } from "@/content/pages/about";
import PageHero from "@/components/layout/PageHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import AboutNumbers from "@/components/sections/about/AboutNumbers";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutFactory from "@/components/sections/about/AboutFactory";
import AboutStatement from "@/components/sections/about/AboutStatement";
import AboutTeam from "@/components/sections/about/AboutTeam";
import Clients from "@/components/sections/Clients";
import WhyChoose from "@/components/sections/WhyChoose";
import Certified from "@/components/sections/Certified";
import Testimonials from "@/components/sections/Testimonials";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Asad Advanced Technologies has delivered ISO-certified refrigeration and lifting solutions across Saudi Arabia for over 15 years.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        tagline={about.hero.tagline}
        lines={[...about.hero.lines]}
        image={about.hero.image}
        video={about.hero.video}
        intro={about.hero.intro}
        alt={about.hero.alt}
      />
      <AboutIntro />
      <AboutNumbers />
      <AboutStory />
      <Clients />
      <WhyChoose />
      <AboutFactory />
      <AboutStatement />
      <AboutTeam />
      <Certified />
      <Testimonials />
      <CtaBand />
    </>
  );
}
