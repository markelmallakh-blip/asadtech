/**
 * All homepage copy, lifted from the Figma homepage (node 33:330).
 * Keeping it in one place means the Arabic locale is a sibling file,
 * not a refactor.
 */
export const en = {
  nav: {
    links: [
      { label: "Home", href: "/en" },
      { label: "About", href: "/en/about" },
      /* No index page behind it: the label opens the list of solutions. */
      {
        label: "Our Solutions",
        children: [
          { label: "Cooling Units", href: "/en/solutions/cooling-units" },
          { label: "Cold Rooms", href: "/en/solutions/cold-rooms" },
          { label: "Tail Lifters", href: "/en/solutions/tail-lifters" },
          { label: "Spider Cranes", href: "/en/solutions/spider-cranes" },
        ],
      },
      { label: "Projects", href: "/en/projects" },
      { label: "Careers", href: "/en/careers" },
      { label: "Blog", href: "/en/blog" },
    ],
    languageLabel: "العربية",
    languageHref: "/ar",
    cta: "Get in touch",
  },

  hero: {
    tagline: "Trusted Refrigeration Solutions in KSA",
    headline: { before: "Technology That", script: "Works", after: "As Hard As You Do." },
    cta: "Explore",
    autoplayMs: 6000,
    /* Each slide carries its own backdrop and vehicle, so the whole stage
       changes with the card (Figma 41:2706 and 178:1944). */
    cards: [
      {
        title: "Cooling Units",
        body: "Direct-drive and diesel transport refrigeration built for Saudi heat — engineered to hold temperature from the depot to the last drop-off.",
        href: "/en/solutions/cooling-units",
        background: "/images/hero-background.webp",
        vehicle: "/images/hero-truck.webp",
        alt: "Asadtech refrigerated delivery truck on the highway into Riyadh",
      },
      {
        title: "Cold Rooms",
        body: "Custom cold room design, supply and installation for food storage, pharmaceutical cold chain, and industrial refrigeration across the Kingdom.",
        href: "/en/solutions/cold-rooms",
        background: "/images/hero-background.webp",
        vehicle: "/images/hero-truck.webp",
        alt: "Asadtech refrigerated delivery truck on the highway into Riyadh",
      },
      {
        title: "Tail Lifters",
        body: "Hydraulic tail lift systems that make loading and unloading faster and safer for logistics and delivery fleets operating across Saudi Arabia.",
        href: "/en/solutions/tail-lifters",
        background: "/images/hero-background.webp",
        vehicle: "/images/hero-truck.webp",
        alt: "Asadtech refrigerated delivery truck on the highway into Riyadh",
      },
      {
        title: "SPX Series",
        body: "Compact spider cranes that move heavy loads precisely, even on sites where space and access are tightly restricted.",
        href: "/en/solutions/spider-cranes",
        background: "/images/hero-spider-background.webp",
        vehicle: "/images/hero-spider-vehicle.webp",
        alt: "Asadtech SPX series spider crane set up on an industrial yard",
      },
    ],
    trust: {
      label: "Reliable by",
      value: "+20 Global Brand",
      more: "+20",
      logos: [
        "/logos/clients-01.webp",
        "/logos/clients-02.webp",
        "/logos/clients-03.webp",
        "/logos/clients-04.webp",
      ],
    },
  },

  about: {
    tagline: "About Asadtech",
    lead: "Welcome to Asad Advanced Technologies – Saudi Arabia's trusted manufacturer and supplier of cooling units, cold rooms, tail lifters, and spider cranes. Based in Riyadh 2nd Industrial City, we have delivered ISO-certified industrial solutions",
    rest: " for over 15 years to food, pharmaceutical, logistics, and government clients across Riyadh, Jeddah, Dammam, and beyond. From a single transport refrigeration unit for your delivery van to a complete cold chain fleet upgrade – Asad Tech delivers quality built for Saudi Arabia.",
    cta: "Know more",
    href: "/en/about",
    images: [
      { src: "/images/about-home-1.webp", alt: "Asadtech headquarters in Riyadh 2nd Industrial City" },
      { src: "/images/about-home-2.webp", alt: "Asadtech engineering team designing a cold room system" },
      { src: "/images/stats-1.webp", alt: "Technician loading fresh produce into a refrigerated truck" },
    ],
  },

  stats: {
    image: { src: "/images/stats-1.webp", alt: "Asadtech technician with refrigerated fresh produce" },
    items: [
      { value: 15, suffix: "+", label: "Years of Experience", tone: "blue" as const },
      { value: 1200, suffix: "+", label: "Projects Completed", tone: "light" as const },
      { value: 300, suffix: "+", label: "Satisfied Clients", tone: "blue" as const },
      { value: 30, suffix: "+", label: "Industry Partnerships", tone: "light" as const },
    ],
  },

  solutions: {
    tagline: "Engineered for Every Journey",
    heading: "Asadtech Solutions",
    groups: [
      {
        id: "cooling",
        tone: "navy" as const,
        title: "Coolings Solutions",
        body: "Reliable temperature-control solutions designed to keep your products fresh, protected, and within the right conditions throughout transport and storage.",
        products: [
          {
            title: "Cooling Units",
            image: "/images/services-cooling-units.webp",
            body: "Transport refrigeration & cooling units for trucks, vans, and cold chain logistics fleets in Saudi Arabia. Direct drive & diesel engine models available.",
            href: "/en/solutions/cooling-units",
          },
          {
            title: "Cold Rooms",
            image: "/images/services-cold-rooms.webp",
            body: "Custom cold room design, supply & installation for food storage, pharmaceutical cold chain, and industrial refrigeration across Saudi Arabia.",
            href: "/en/solutions/cold-rooms",
          },
        ],
      },
      {
        id: "tail-lifters",
        tone: "blue" as const,
        title: "Tail Lifters",
        body: "Smart hydraulic lifting solutions that make loading and unloading faster, safer, and more efficient for modern logistics operations.",
        products: [
          {
            title: "Tail Lifters",
            image: "/images/services-tail-lifters.webp",
            body: "Hydraulic tail lift systems for efficient loading and unloading – designed for logistics and delivery fleets operating across Saudi Arabia.",
            href: "/en/solutions/tail-lifters",
          },
        ],
      },
      {
        id: "spider-cranes",
        tone: "teal" as const,
        title: "Spider Cranes",
        body: "Compact, powerful lifting solutions engineered to move heavy loads safely and precisely, even in challenging and space-restricted environments.",
        products: [
          {
            title: "SPX Series",
            image: "/images/services-spx-series.webp",
            body: "Compact spider cranes combining high lifting capacity with excellent manoeuvrability for demanding lifting applications.",
            href: "/en/solutions/spider-cranes",
          },
          {
            title: "MPK Series",
            image: "/images/services-mpk-series.webp",
            body: "Versatile compact cranes designed for efficient material handling where space and access are limited.",
            href: "/en/solutions/spider-cranes",
          },
          {
            title: "JF Series",
            image: "/images/services-jf-series.webp",
            body: "Flexible crawler-based lifting solutions built for stability, mobility, and reliable performance across industrial applications.",
            href: "/en/solutions/spider-cranes",
          },
        ],
      },
    ],
  },

  clients: {
    tagline: "Our Happy Clients",
    heading: "+100 Client Rely On Us",
    rows: [
      ["/logos/clients-01.webp", "/logos/clients-02.webp", "/logos/clients-03.webp", "/logos/clients-04.webp", "/logos/clients-05.webp", "/logos/clients-06.webp"],
      ["/logos/clients-07.webp", "/logos/clients-08.webp", "/logos/clients-09.webp", "/logos/clients-10.webp", "/logos/clients-11.webp", "/logos/clients-12.webp"],
      ["/logos/clients-13.webp", "/logos/clients-14.webp", "/logos/clients-15.webp", "/logos/clients-16.webp", "/logos/clients-17.webp", "/logos/clients-18.webp"],
      ["/logos/clients-19.webp", "/logos/clients-20.webp", "/logos/clients-21.webp", "/logos/clients-22.webp", "/logos/clients-23.webp", "/logos/clients-24.webp"],
    ],
  },

  whyChoose: {
    heading: { before: "Why Choose", after: "Asadtech?" },
    reasons: [
      {
        title: "Built for Saudi conditions",
        body: "Every unit is specified and tested against Kingdom heat, dust, and distance — not a European average.",
        image: "/images/hero-background.webp",
        alt: "Saudi highway at dusk on the approach to Riyadh",
      },
      {
        title: "ISO-certified throughout",
        body: "Fabrication, installation, and maintenance run under ISO 9001, 14001, and 45001 discipline.",
        image: "/images/about-home-2.webp",
        alt: "Asadtech engineers reviewing a cold room design",
      },
      {
        title: "One partner, whole fleet",
        body: "Cooling, lifting, and cold storage from a single supplier, so accountability never gets divided.",
        image: "/images/about-home-1.webp",
        alt: "Asadtech headquarters in Riyadh 2nd Industrial City",
      },
      {
        title: "Support that shows up",
        body: "In-Kingdom service teams across Riyadh, Jeddah, and Dammam keep downtime measured in hours.",
        image: "/images/about-home-3.webp",
        alt: "Asadtech technician loading a refrigerated vehicle",
      },
    ],
  },

  work: {
    tagline: "Asadtech Work",
    heading: "Our Project",
    cta: "Explore project",
    allCta: "Explore all projects",
    allHref: "/en/projects",
    /* Each row shows the pair of supplied site photographs. */
    images: [
      { src: "/images/our-work-1.webp", alt: "Cold room interior with wall-mounted evaporators" },
      { src: "/images/our-work-2.webp", alt: "Cold room ceiling with fan units and lighting" },
    ],
    projects: [
      {
        title: "Domino's Pizza Dammam",
        body: "Tailoring cold room installations to enhance food freshness at Domino's Pizza Dammam.",
        tags: ["Cooling Rooms", "Tail Lifters"],
        href: "/en/projects/dominos-pizza-dammam",
      },
      {
        title: "Alkharj",
        body: "Installing advanced cold rooms to support Alkharj's agricultural produce and storage needs.",
        tags: ["Cooling Rooms"],
        href: "/en/projects/alkharj",
      },
      {
        title: "Riyadh Cold Chain Hub",
        body: "A full cold chain fit-out supporting pharmaceutical distribution across the central region.",
        tags: ["Cooling Rooms", "Cooling Units"],
        href: "/en/projects/riyadh-cold-chain-hub",
      },
      {
        title: "Jeddah Port Logistics",
        body: "Hydraulic tail lift retrofit across a forty-vehicle distribution fleet operating out of Jeddah Port.",
        tags: ["Tail Lifters"],
        href: "/en/projects/jeddah-port-logistics",
      },
    ],
  },


  certified: {
    words: ["Certified", "FOR", "Excellence"],
    chips: ["Built to standards", "Quality you can trust", "Standards that matter"],
    certificates: {
      heading: "Our Certificates",
      body: "For the scope of Fabrication, Supply, Erection, Maintenance & Repair works of Steel Structures, Storage Tanks, Pressure Vessels, Pipe Spools, Rubber Lining, Coating & Trucks Accessories Installation such as AC Refrigerators, Hydraulic Lifters and Storage Box.",
      cta: "Open certificate",
      items: [
        { title: "ISO 9001 – QMS – CA", image: "/images/certifications-1.webp", href: "#" },
        { title: "ISO 14001 – EMS – CA", image: "/images/certifications-2.webp", href: "#" },
        { title: "ISO 45001 – OHS – CA", image: "/images/certifications-3.webp", href: "#" },
      ],
    },
    partners: {
      heading: "Our Partners",
      body: "Collaborating with industry leaders to bring you the best.",
      items: [
        { name: "DAUTEL", image: "/logos/partners-1.webp" },
        { name: "BOCK", image: "/logos/partners-2.webp" },
        { name: "stefani", image: "/logos/partners-3.webp" },
        { name: "CJEKKO", image: "/logos/partners-4.webp" },
        { name: "Globus", image: "/logos/partners-5.webp" },
        { name: "HG", image: "/logos/partners-6.webp" },
        { name: "sibLand", image: "/logos/partners-7.webp" },
      ],
    },
  },

  testimonials: {
    heading: "Clients' Words",
    items: [
      {
        quote:
          "Loading and unloading have become effortless with Tail Lifters installed by Asad Tech. They are strong, user-friendly, and built to last, making our operations smoother.",
        name: "General Manager",
        company: "McDonald's",
        logo: "/images/testimonial-1.webp",
      },
      {
        quote:
          "Their cold rooms have held temperature through three Riyadh summers without a single product loss. The service team answers before we finish explaining the problem.",
        name: "Operations Director",
        company: "Arrow Food Distribution",
        logo: "/logos/clients-01.webp",
      },
      {
        quote:
          "We upgraded forty vehicles across two cities and Asad Tech kept every one of them on the road. Planning, installation and handover ran exactly to schedule.",
        name: "Fleet Manager",
        company: "Almunajem",
        logo: "/logos/clients-06.webp",
      },
    ],
  },

  articles: {
    heading: "Latest Articles",
    cta: "Explore all blog",
    href: "/en/blog",
    items: [
      {
        date: "May 30, 2024",
        image: "/images/blog-1.webp",
        title: "Reefer box and how it overcomes challenges for perishables",
        author: "By Mohamed Ahmed – Regional Manager",
        href: "/en/blog/reefer-box-perishables",
      },
      {
        date: "May 30, 2024",
        image: "/images/blog-2.webp",
        title: "What cold chain logistics really costs when it fails",
        author: "By Mohamed Ahmed – Regional Manager",
        href: "/en/blog/cold-chain-cost-of-failure",
      },
      {
        date: "May 30, 2024",
        image: "/images/blog-3.webp",
        title: "Choosing between direct drive and diesel refrigeration",
        author: "By Mohamed Ahmed – Regional Manager",
        href: "/en/blog/direct-drive-vs-diesel",
      },
      {
        date: "May 30, 2024",
        image: "/images/blog-4.webp",
        title: "Spider cranes on constrained sites: a practical guide",
        author: "By Mohamed Ahmed – Regional Manager",
        href: "/en/blog/spider-cranes-constrained-sites",
      },
    ],
  },

  cta: {
    heading: ["Ready to Upgrade", "Your Fleet?"],
    body: "Get the right equipment, expert guidance, and dependable support to keep your operations moving.",
    points: [
      { title: "Tailored Solutions", body: "Equipment built around your needs." },
      { title: "Expert Guidance", body: "Professional support from selection to installation." },
      { title: "Reliable Support", body: "Trusted service when you need it most." },
    ],
    button: "Get in touch",
    href: "/en/contact",
  },

  footer: {
    lead: "ASAD Tech delivers reliable transport solutions, expert installation, and trusted support to keep your business moving.",
    cta: "Get in touch",
    href: "/en/contact",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "Home", href: "/en" },
          { label: "About", href: "/en/about" },
          { label: "Projects", href: "/en/projects" },
          { label: "Blog", href: "/en/blog" },
          { label: "Careers", href: "/en/careers" },
        ],
      },
      {
        heading: "Cooling Solutions",
        links: [
          { label: "Cooling Units", href: "/en/solutions/cooling-units" },
          { label: "Cooling Rooms", href: "/en/solutions/cold-rooms" },
        ],
      },
      {
        heading: "Tail Lifters",
        links: [{ label: "Tail Lifters", href: "/en/solutions/tail-lifters" }],
      },
      {
        heading: "Spider Cranes",
        links: [
          { label: "SPX Series", href: "/en/solutions/spider-cranes" },
          { label: "MPK Series", href: "/en/solutions/spider-cranes" },
          { label: "JF Series", href: "/en/solutions/spider-cranes" },
        ],
      },
    ],
    contact: {
      heading: "Contacts",
      address:
        "3073, Jabrah Street Riyadh 2nd Industrial City, Exit -16, P.O Box 7860, Riyadh 14332 Kingdom of Saudi Arabia",
      email: "info@asadtech.com",
      office: "10637 Scripps Summit Ct., San Diego, CA 92131",
      social: [
        { label: "Facebook", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "YouTube", href: "#" },
      ],
    },
    legal: {
      copyright: "© 2026 ASADTECH. All rights reserved.",
      links: [
        { label: "Privacy Policy", href: "/en/privacy" },
        { label: "Terms of Service", href: "/en/terms" },
      ],
    },
  },
} as const;

export type Dictionary = typeof en;
