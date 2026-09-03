/**
 * About Us page copy (Figma 61:7103).
 * Copy marked PLACEHOLDER is written to fit the layout and needs client sign-off.
 */
export const about = {
  hero: {
    tagline: "About ASAD",
    lines: ["Built to Move Your", "Business Forward"],
    image: "/images/about/cta-background.webp",
    video: "/images/about/ASAD-about-hero.mp4",
    /* Revealed alongside a rule once the video has opened out. */
    intro:
      "At ASAD Transport Solutions, we deliver reliable, tailored transport solutions designed around the real needs of your business. From specialized equipment to expert support, we combine industry experience, quality, and innovation to keep your operations moving.",
    alt: "Aerial view of the Asadtech facility in Riyadh 2nd Industrial City at sunset",
  },

  intro: {
    tagline: "Company Overview",
    quote:
      "Welcome to Asad Advanced Technologies – Saudi Arabia's trusted manufacturer and supplier of cooling units, cold rooms, tail lifters, and spider cranes. Based in Riyadh 2nd Industrial City, we have delivered ISO-certified industrial solutions for over 15 years to food, pharmaceutical, logistics, and government clients across the Kingdom.",
  },

  numbers: {
    tagline: "Success In Numbers",
    images: [
      { src: "/images/about/numbers-cold-chain.webp", alt: "Asadtech technician loading fresh produce into a refrigerated body" },
      { src: "/images/about/numbers-cold-chain.webp", alt: "Fresh produce held at temperature inside an Asadtech refrigerated body" },
    ],
    stats: [
      { value: 15, suffix: "+", label: "Years of Experience" },
      { value: 1200, suffix: "+", label: "Projects Completed" },
      { value: 300, suffix: "+", label: "Satisfied Clients" },
      { value: 30, suffix: "+", label: "Industry Partnerships" },
    ],
  },

  story: {
    lead: {
      tagline: "Our Mission",
      text: "To be Saudi Arabia's leading transport refrigeration and industrial solutions provider - delivering world-class cooling units, cold rooms, and lifting equipment that drives the Kingdom's logistics, food, and pharmaceutical sectors forward.",
    },
    image: {
      src: "/images/about/placeholder.webp",
      alt: "The Asadtech headquarters and fabrication facility",
    },
    trail: {
      tagline: "Vision",
      text: "To supply, install, and support transport refrigeration units, cold rooms, and lifting equipment that meet ISO 9001, ISO 14001, and ISO 45001 standards - engineered for Saudi Arabia's climate, compliant with SASO, and backed by full aftersales service across Jeddah, Riyadh, and Dammam.",
    },
  },

  factory: {
    tagline: "ASAD Factory",
    /* PLACEHOLDER */
    heading: "Engineered and assembled in the Kingdom",
    body: "Our Riyadh 2nd Industrial City plant handles fabrication, assembly, installation and service under one roof, so specification, build quality and after-sales support never get handed between suppliers.",
    /* Poster only — the first frame shown before the clip plays. Was the
       lanyard artwork, which flashed a name tag over the factory band. */
    image: { src: "/images/about/cta-background.webp", alt: "Inside the Asadtech fabrication facility" },
    video: "/images/about/factory.mp4",
  },

  statement: {
    tagline: "Chairman Message",
    /* The message as written in Figma 69:7962, for the three-paragraph layout.
       NOTE: that frame signs off "Moataz Ebn Zayed / Chairman" — the name and
       role below came from a later edit, so one of the two needs the client's
       word before this ships. */
    paragraphs: [
      "At Asad Tech, we believe that lasting success is built on trust, quality, and a commitment to doing things better. Our journey has always been driven by a clear vision: to deliver dependable transport solutions that help businesses operate with greater efficiency and confidence.",
      "As industries continue to evolve, so do the needs of our customers. We remain committed to combining proven expertise with innovative solutions, while keeping our customers at the heart of every decision.",
      "I am proud of the team and partnerships that have shaped Asad Tech, and I look forward to building an even stronger future together\u2014one defined by excellence, reliability, and continuous progress.",
    ],
    /* Figma 69:7962 signs off "Moataz Ebn Zayed / Chairman". Needs the
       client's confirmation before launch. */
    signature: "Moataz Ebn Zayed",
    role: "Chairman",
    image: { src: "/images/about/chairman.webp", alt: "Chairman of Asad Advanced Technologies" },
  },

  team: {
    heading: "Team Behind Asad",
    /* PLACEHOLDER — real names, roles and portraits required. Every portrait
       here is a person: gallery-04 was the lanyard artwork, not a colleague. */
    members: [
      { name: "Amr Ebn Abdullah", role: "Managing Director", image: "/images/about/gallery-01.webp" },
      { name: "Ahmed Abdel Hady", role: "Operations Director", image: "/images/about/gallery-02.webp" },
      { name: "Khalid Al Otaibi", role: "Head of Engineering", image: "/images/about/gallery-03.webp" },
      { name: "Mohamed Ahmed", role: "Regional Manager", image: "/images/about/team-wide.webp" },
      { name: "Sara Al Harbi", role: "Quality Manager", image: "/images/about/team-portrait.webp" },
      { name: "Omar Nasser", role: "Service Manager", image: "/images/about/gallery-02.webp" },
      { name: "Faisal Al Qahtani", role: "Commercial Manager", image: "/images/about/gallery-03.webp" },
      { name: "Yousef Salem", role: "Projects Manager", image: "/images/about/gallery-01.webp" },
    ],
    careers: {
      heading: "Be Part Of Asad",
      body: "Explore careers now and join our community",
      cta: "EXPLORE CAREERS",
      href: "/en/careers",
      image: { src: "/images/about/careers-badge.webp", alt: "An Asadtech staff pass on a lanyard" },
    },
  },
} as const;
