import Hero from "@/components/sections/Hero";
import OverlapStack from "@/components/motion/OverlapStack";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Solutions from "@/components/sections/Solutions";
import Clients from "@/components/sections/Clients";
import WhyChoose from "@/components/sections/WhyChoose";
import Work from "@/components/sections/Work";
import Certified from "@/components/sections/Certified";
import Testimonials from "@/components/sections/Testimonials";
import Articles from "@/components/sections/Articles";
import CtaBand from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About holds still while the stats plane climbs over it and the last
          About photo rides down into the first stats tile. */}
      <OverlapStack
        src="/images/stats-1.webp"
        alt="Asadtech technician with refrigerated fresh produce"
      >
        <About />
        <Stats />
      </OverlapStack>

      <Solutions />
      <Clients />
      <WhyChoose />
      <Work />
      <Certified />
      <Testimonials />
      <Articles />
      <CtaBand />
    </>
  );
}
