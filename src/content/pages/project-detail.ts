/**
 * Project detail records (Figma 121:2500), keyed by slug.
 * Copy is written to fit the layout and needs client sign-off.
 */
export type ProjectDetail = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  tags: readonly string[];
  hero: { src: string; alt: string };
  overview: { tagline: string; body: string };
  client: { name: string; logo: string; blurb: string; image: { src: string; alt: string } };
  scope: { heading: string; items: readonly string[]; image: { src: string; alt: string } };
  steps: {
    heading: string;
    items: readonly { title: string; body: string }[];
  };
  gallery: readonly { src: string; alt: string }[];
  services: readonly { title: string; body: string; image: string; href: string }[];
};

const dominos: ProjectDetail = {
  slug: "dominos-pizza-dammam",
  title: "Domino's Pizza Dammam",
  tagline: "Our Projects",
  intro:
    "Tailoring cold room installations to enhance food freshness at Domino's Pizza Dammam.",
  tags: ["Cooling Rooms", "Tail Lifters"],
  hero: { src: "/images/single-project/hero-background.png", alt: "Cold room installed at Domino's Pizza Dammam" },
  overview: {
    tagline: "Project Overview",
    body: "A tailored cold-room solution designed to support Domino's Pizza Dammam with reliable, efficient and hygienic food storage. Each unit was specified around the branch's daily throughput, then built and commissioned without interrupting service.",
  },
  client: {
    name: "Domino's Pizza — Dammam",
    logo: "/images/single-project/gallery-08.png",
    blurb:
      "Domino's Pizza is one of the world's leading pizza brands, known for its fast service, consistent quality and extensive network of restaurants. Maintaining reliable food storage is essential to preserving ingredient freshness and supporting the high operational standards expected from a busy food-service environment.",
    image: { src: "/images/single-project/gallery-01.png", alt: "Domino's Pizza Dammam cold storage" },
  },
  scope: {
    heading: "Project Scope",
    items: [
      "Cold Room Design & Engineering",
      "Temperature-Controlled Storage",
      "Refrigeration Supply & Installation",
      "Compliance & Food Safety",
    ],
    image: { src: "/images/single-project/gallery-02.png", alt: "Completed cold room interior" },
  },
  steps: {
    heading: "Installation & Implementation",
    items: [
      { title: "Site Assessment & Design", body: "Survey, load calculation and a layout matched to the branch footprint." },
      { title: "Custom Cold Room Fabrication", body: "Panels, doors and refrigeration built to the approved specification." },
      { title: "On-Site Installation & Testing", body: "Assembly, commissioning and temperature validation before handover." },
      { title: "Final Handover & Training", body: "Operating guidance for branch staff plus a scheduled service plan." },
    ],
  },
  gallery: [
    { src: "/images/single-project/gallery-03.png", alt: "Cold room interior with evaporators" },
    { src: "/images/single-project/gallery-04.png", alt: "Cold room ceiling units" },
    { src: "/images/single-project/gallery-05.png", alt: "Cold room panelling" },
    { src: "/images/single-project/gallery-06.png", alt: "Refrigeration unit" },
  ],
  services: [
    {
      title: "Cooling Units",
      body: "Transport refrigeration & cooling units for trucks, vans and cold chain logistics fleets.",
      image: "/images/services-cooling-units.webp",
      href: "/en/solutions/cooling-units",
    },
    {
      title: "Cold Rooms",
      body: "Custom cold room design, supply & installation for food storage and pharmaceutical cold chain.",
      image: "/images/services-cold-rooms.webp",
      href: "/en/solutions/cold-rooms",
    },
  ],
};

const alkharj: ProjectDetail = {
  ...dominos,
  slug: "alkharj",
  title: "Alkharj",
  intro:
    "Installing advanced cold rooms to support Alkharj's agricultural produce and storage needs.",
  tags: ["Cooling Rooms"],
  client: {
    ...dominos.client,
    name: "Alkharj Agricultural Storage",
    logo: "/images/single-project/gallery-08.png",
    blurb:
      "Alkharj is one of the Kingdom's most productive agricultural regions. Keeping harvested produce within a tight temperature band between field and market is what protects both shelf life and price.",
  },
};

export const projectDetails: Record<string, ProjectDetail> = {
  [dominos.slug]: dominos,
  [alkharj.slug]: alkharj,
};
