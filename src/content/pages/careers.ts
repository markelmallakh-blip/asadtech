/** Careers content. Structure follows the site vocabulary; needs a Figma pass. */
export type Opening = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  about: string;
  responsibilities: readonly string[];
  requirements: readonly string[];
};

export const openings: readonly Opening[] = [
  {
    slug: "refrigeration-service-engineer",
    title: "Refrigeration Service Engineer",
    department: "Service",
    location: "Riyadh",
    type: "Full time",
    summary:
      "Commission, service and troubleshoot transport refrigeration and cold room systems across central region accounts.",
    about:
      "You will be the engineer customers see when it matters — commissioning new installations and getting stopped units running again, often on the same day.",
    responsibilities: [
      "Commission cold rooms and transport refrigeration units on customer sites",
      "Diagnose and repair mechanical, electrical and control faults",
      "Complete temperature validation and hand over to the customer",
      "Keep accurate service records for every visit",
    ],
    requirements: [
      "Diploma or degree in mechanical, refrigeration or electrical engineering",
      "Three or more years servicing commercial refrigeration",
      "Valid Saudi driving licence",
      "Arabic and English working proficiency",
    ],
  },
  {
    slug: "cold-chain-project-manager",
    title: "Cold Chain Project Manager",
    department: "Projects",
    location: "Riyadh",
    type: "Full time",
    summary:
      "Own cold room projects end to end, from site survey and specification through fabrication, installation and handover.",
    about:
      "You will run projects that keep food and pharmaceutical supply chains intact, coordinating survey, fabrication, installation and handover.",
    responsibilities: [
      "Run site surveys and produce load calculations and layouts",
      "Coordinate fabrication, logistics and installation teams",
      "Hold programme, budget and quality against the approved specification",
      "Lead customer handover and training",
    ],
    requirements: [
      "Degree in engineering or construction management",
      "Five or more years managing industrial fit-out or refrigeration projects",
      "Working knowledge of ISO 9001 quality processes",
      "Arabic and English working proficiency",
    ],
  },
  {
    slug: "hydraulic-lifting-technician",
    title: "Hydraulic Lifting Technician",
    department: "Service",
    location: "Jeddah",
    type: "Full time",
    summary:
      "Install and maintain tail lifters and spider cranes for logistics and construction customers on the western coast.",
    about:
      "You will fit and maintain the hydraulic equipment that loads and lifts for fleets across the western region.",
    responsibilities: [
      "Install tail lifters onto customer vehicles to specification",
      "Service and load-test spider cranes",
      "Diagnose hydraulic and electrical faults",
      "Complete safety documentation for every job",
    ],
    requirements: [
      "Technical diploma in mechanical or hydraulic systems",
      "Two or more years with hydraulic lifting equipment",
      "Comfortable working at height and on customer sites",
      "Valid Saudi driving licence",
    ],
  },
];

export const careersPage = {
  hero: {
    tagline: "Careers",
    lines: ["Build the Cold Chain", "the Kingdom Runs On"],
    image: { src: "/images/careers-hero.webp", alt: "The Asadtech team on site" },
  },
  intro: {
    tagline: "Working at Asadtech",
    body: "We design, build, install and service our own equipment, which means the people who specify a system are the same people who stand behind it. If you would rather own a problem end to end than hand it on, you will fit here.",
  },
  benefits: {
    heading: "What we offer",
    items: [
      { title: "Work that ships", body: "Equipment you specify gets built and installed within the same quarter." },
      { title: "In-Kingdom scale", body: "Projects across Riyadh, Jeddah and Dammam for national accounts." },
      { title: "Certified practice", body: "ISO 9001, 14001 and 45001 discipline on every job." },
      { title: "Progression", body: "Technicians move into project management and engineering leadership." },
    ],
  },
  apply: {
    heading: "Apply now",
    body: "Send your details and we will come back to you within five working days.",
    submit: "Submit application",
  },
} as const;
