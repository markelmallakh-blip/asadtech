/**
 * Project detail records (Figma 121:2500), keyed by slug.
 * Copy is written to fit the layout and needs client sign-off.
 */
export type ProjectDetail = {
  slug: string;
  title: string;
  chip: string;
  intro: string;
  tags: readonly string[];
  location: string;
  /** The square and the wide picture beside the banner title. */
  images: readonly [{ src: string; alt: string }, { src: string; alt: string }];
  overview: { heading: string; text: string };
  client: { chip: string; name: string; blurb: string; logo: string };
  scope: {
    tagline: string;
    heading: string;
    items: readonly { title: string; body: string }[];
    image: { src: string; alt: string };
  };
  process: {
    tagline: string;
    heading: string;
    items: readonly { title: string; body: string }[];
  };
  gallery: { heading: string; images: readonly { src: string; alt: string }[] };
  services: {
    tagline: string;
    heading: string;
    cta: string;
    href: string;
    items: readonly { title: string; body: string; image: string; href: string }[];
  };
  related: string;
};

const dominos: ProjectDetail = {
  slug: "dominos-pizza-dammam",
  title: "Domino's Pizza Dammam",
  chip: "Our Projects",
  intro:
    "Tailoring cold room installations to enhance food freshness at Domino's Pizza Dammam.",
  tags: ["Cooling Rooms", "Tail Lifters"],
  location: "El Damam, KSA",
  images: [
    { src: "/images/our-work-1.webp", alt: "Cold room interior with wall-mounted evaporators" },
    { src: "/images/our-work-2.webp", alt: "Cold room ceiling with fan units and lighting" },
  ],
  overview: {
    heading: "Project Overview",
    text: "A tailored cold-room solution designed to support Domino’s Pizza Dammam with reliable, efficient, and hygienic food storage. Asad Tech delivered a solution focused on maintaining the right conditions for ingredients while supporting smooth day-to-day restaurant operations.",
  },
  client: {
    chip: "About The Client",
    name: "Domino’s Pizza – Dammam",
    blurb:
      "Domino’s Pizza is one of the world’s leading pizza brands, known for its fast service, consistent quality, and extensive network of restaurants. In Dammam, maintaining reliable food storage is essential to preserving ingredient freshness and supporting the high operational standards expected from a busy food-service environment.",
    logo: "/images/single-project/gallery-03.webp",
  },
  scope: {
    tagline: "WHAT WE DELIVERED",
    heading: "Project Scope",
    items: [
      { title: "Cold Room Design & Engineering", body: "Custom thermal engineering calculations and custom layout design optimized for active kitchen operations." },
      { title: "Temperature-Controlled Storage", body: "High-performance cooling systems built to sustain precise sub-zero and chilled temperatures consistently." },
      { title: "Refrigeration Supply & Installation", body: "Evaporators, condensing units and controls supplied from one source and fitted by our own engineers." },
      { title: "Compliance & Food Safety", body: "Complete configuration to satisfy rigorous local and international culinary safety regulations." },
    ],
    image: { src: "/images/single-project/gallery-04.webp", alt: "Cold room ceiling units" },
  },
  process: {
    tagline: "OUR PROCESS",
    heading: "Installation & Implementation",
    items: [
      { title: "Site Assessment & Planning", body: "Detailed spatial mapping and energy calculations to determine the exact cooling specifications required." },
      { title: "Custom Cold Room Fabrication", body: "Precision manufacturing of custom modular panels and cooling system elements inside our Saudi facility." },
      { title: "On-Site Installation & Testing", body: "Airtight assembly of components coupled with extensive stress testing to guarantee long-term thermal retention." },
      { title: "Final Handover & Training", body: "Comprehensive calibration with digital systems followed by operator training for staff on maintenance." },
    ],
  },
  gallery: {
    heading: "Project Gallery",
    images: [
      { src: "/images/our-work-2.webp", alt: "Cold room ceiling with fan units" },
      { src: "/images/our-work-1.webp", alt: "Cold room interior with evaporators" },
      { src: "/images/single-project/gallery-05.webp", alt: "Cold room panelling" },
      { src: "/images/single-project/gallery-06.webp", alt: "Cold room door" },
      { src: "/images/services-cold-rooms.webp", alt: "Cold room installation in progress" },
    ],
  },
  services: {
    tagline: "EQUIPPED FOR EXCELLENCE",
    heading: "Services Provided",
    cta: "SUBMIT INTEREST",
    href: "#request",
    items: [
      {
        title: "Cooling Units",
        body: "Transport refrigeration & cooling units for trucks, vans, and cold chain logistics fleets in Saudi Arabia. Direct drive & diesel engine models available.",
        image: "/images/single-project/gallery-08.webp",
        href: "/en/solutions/cooling-units",
      },
      {
        title: "Cold Rooms",
        body: "Custom cold room design, supply & installation for food storage, pharmaceutical cold chain, and industrial refrigeration across Saudi Arabia.",
        image: "/images/services-cold-rooms.webp",
        href: "/en/solutions/cold-rooms",
      },
    ],
  },
  related: "Related Projects",
};

const alkharj: ProjectDetail = {
  ...dominos,
  slug: "alkharj",
  title: "Alkharj",
  intro:
    "Installing advanced cold rooms to support Alkharj's agricultural produce and storage needs.",
  tags: ["Cooling Rooms"],
  location: "Alkharj, KSA",
  overview: {
    heading: "Project Overview",
    text: "A multi-chamber cold store designed around harvest volumes in one of the Kingdom’s most productive agricultural regions. Asad Tech delivered chilled and frozen rooms that hold produce within a tight temperature band between field and market, protecting both shelf life and price.",
  },
  client: {
    chip: "About The Client",
    name: "Alkharj Agricultural Storage",
    blurb:
      "Alkharj is one of the Kingdom’s most productive agricultural regions. Keeping harvested produce within a tight temperature band between field and market is what protects both shelf life and price, so the storage behind it has to be dependable through the hottest months of the year.",
    logo: "/images/single-project/gallery-03.webp",
  },
};

const riyadhHub: ProjectDetail = {
  ...dominos,
  slug: "riyadh-cold-chain-hub",
  title: "Riyadh Cold Chain Hub",
  intro:
    "A full cold chain fit-out supporting pharmaceutical distribution across the central region.",
  tags: ["Cooling Rooms", "Cooling Units"],
  location: "Riyadh, KSA",
  overview: {
    heading: "Project Overview",
    text: "A validated cold-chain hub combining pharmaceutical-grade cold rooms with a fleet of refrigerated vans. Asad Tech delivered the storage, the transport refrigeration and the temperature monitoring as one system, so every consignment is traceable from the loading dock to the pharmacy door.",
  },
  client: {
    chip: "About The Client",
    name: "Riyadh Pharmaceutical Distribution",
    blurb:
      "A regional distributor supplying hospitals and pharmacies across the central region. Vaccines and temperature-sensitive medicines leave no margin for excursions, so the hub had to be validated to the strictest handling standards before the first pallet arrived.",
    logo: "/images/single-project/gallery-03.webp",
  },
};

const jeddahPort: ProjectDetail = {
  ...dominos,
  slug: "jeddah-port-logistics",
  title: "Jeddah Port Logistics",
  intro:
    "Hydraulic tail lift retrofit across a forty-vehicle distribution fleet operating out of Jeddah Port.",
  tags: ["Tail Lifters"],
  location: "Jeddah, KSA",
  overview: {
    heading: "Project Overview",
    text: "A fleet-wide tail lift programme delivered without taking vehicles off the road for more than a day at a time. Asad Tech fitted, load-tested and certified forty lifts in sequence, cutting kerbside unloading times and manual-handling risk across every route out of the port.",
  },
  client: {
    chip: "About The Client",
    name: "Jeddah Port Logistics",
    blurb:
      "A port-side logistics operator moving containerised goods to distribution centres along the western coast. With drivers unloading alone at most drops, safe and fast ground-level delivery was the deciding factor for the retrofit.",
    logo: "/images/single-project/gallery-03.webp",
  },
  services: {
    ...dominos.services,
    items: [
      {
        title: "Tail Lifters",
        body: "Hydraulic tail lift systems for efficient loading and unloading, designed for logistics and delivery fleets.",
        image: "/images/services-tail-lifters.webp",
        href: "/en/solutions/tail-lifters",
      },
      dominos.services.items[0],
    ],
  },
};

export const projectDetails: Record<string, ProjectDetail> = {
  [dominos.slug]: dominos,
  [alkharj.slug]: alkharj,
  [riyadhHub.slug]: riyadhHub,
  [jeddahPort.slug]: jeddahPort,
};
