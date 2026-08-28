/**
 * About Us page copy (Figma 61:7103).
 * Copy marked PLACEHOLDER is written to fit the layout and needs client sign-off.
 */
export const about = {
  hero: {
    tagline: "About ASAD",
    lines: ["Built to Move Your", "Business Forward"],
    image: "/images/about/cta-background.webp",
    alt: "Aerial view of the Asadtech facility in Riyadh 2nd Industrial City at sunset",
  },

  intro: {
    tagline: "Company Overview",
    quote:
      "Welcome to Asad Advanced Technologies – Saudi Arabia's trusted manufacturer and supplier of cooling units, cold rooms, tail lifters, and spider cranes. Based in Riyadh 2nd Industrial City, we have delivered ISO-certified industrial solutions for over 15 years to food, pharmaceutical, logistics, and government clients across the Kingdom.",
  },

  numbers: {
    tagline: "Asadtech in Numbers",
    images: [
      { src: "/images/about/gallery-01.webp", alt: "Asadtech engineers reviewing a cold room design" },
      { src: "/images/about/gallery-02.webp", alt: "Technician loading a refrigerated vehicle" },
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
      text: "To keep the Kingdom's cold chain unbroken — engineering, building and maintaining the refrigeration and lifting equipment that moves food, medicine and materials safely from origin to destination.",
    },
    image: {
      src: "/images/about/gallery-03.webp",
      alt: "The Asadtech headquarters and fabrication facility",
    },
    trail: {
      tagline: "Our Vision",
      /* PLACEHOLDER */
      text: "To be the partner Saudi industry turns to first — known for equipment that survives the conditions it is sold into, and for service that answers before the problem becomes a loss.",
    },
  },

  factory: {
    tagline: "ASAD Factory",
    /* PLACEHOLDER */
    heading: "Engineered and assembled in the Kingdom",
    body: "Our Riyadh 2nd Industrial City plant handles fabrication, assembly, installation and service under one roof, so specification, build quality and after-sales support never get handed between suppliers.",
    image: { src: "/images/about/gallery-04.webp", alt: "Inside the Asadtech fabrication facility" },
  },

  statement: {
    tagline: "Why Asadtech",
    /* PLACEHOLDER */
    quote:
      "Equipment that holds temperature through a Riyadh August is not the same equipment that holds temperature through a European one. Everything we build is specified for the conditions it will actually meet.",
    name: "Asad Advanced Technologies",
    role: "Riyadh, Kingdom of Saudi Arabia",
    images: [
      { src: "/images/about/gallery-01.webp", alt: "Engineering team at work" },
      { src: "/images/about/gallery-02.webp", alt: "Technician with fresh produce" },
      { src: "/images/about/gallery-03.webp", alt: "Completed cold room installation" },
    ],
  },

  team: {
    heading: "Our Leadership",
    /* PLACEHOLDER — real names, roles and portraits required */
    members: [
      { name: "Amr Ebn Abdullah", role: "Managing Director", image: "/images/about/gallery-01.webp" },
      { name: "Ahmed Abdel Hady", role: "Operations Director", image: "/images/about/gallery-02.webp" },
      { name: "Khalid Al Otaibi", role: "Head of Engineering", image: "/images/about/gallery-03.webp" },
      { name: "Mohamed Ahmed", role: "Regional Manager", image: "/images/about/gallery-04.webp" },
      { name: "Sara Al Harbi", role: "Quality Manager", image: "/images/about/gallery-01.webp" },
      { name: "Omar Nasser", role: "Service Manager", image: "/images/about/gallery-02.webp" },
      { name: "Faisal Al Qahtani", role: "Commercial Manager", image: "/images/about/gallery-03.webp" },
      { name: "Yousef Salem", role: "Projects Manager", image: "/images/about/gallery-04.webp" },
    ],
    careers: {
      heading: "We Are Hiring",
      body: "Explore careers now and join our community",
      cta: "View openings",
      href: "/en/careers",
      image: { src: "/images/about/gallery-04.webp", alt: "The Asadtech team at work" },
    },
  },
} as const;
