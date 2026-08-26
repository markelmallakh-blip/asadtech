/** Service detail records. Structure follows the site vocabulary; needs a Figma pass. */
export type Service = {
  slug: string;
  title: string;
  group: string;
  intro: string;
  image: string;
  overview: string;
  features: readonly { title: string; body: string }[];
  specs: readonly { label: string; value: string }[];
  gallery: readonly string[];
};

export const services: readonly Service[] = [
  {
    slug: "cooling-units",
    title: "Cooling Units",
    group: "Cooling Solutions",
    intro:
      "Transport refrigeration and cooling units for trucks, vans and cold chain logistics fleets in Saudi Arabia.",
    image: "/images/services-cooling-units.webp",
    overview:
      "Direct-drive and diesel-powered transport refrigeration specified around your route, your payload and the temperature band you have to hold. Every unit is sized against Kingdom ambient conditions rather than a European average, then installed and commissioned by our own engineers.",
    features: [
      { title: "Direct drive & diesel", body: "Engine-driven units for multi-drop routes, diesel units for long stationary holds." },
      { title: "Sized to the route", body: "Load calculations account for door openings, ambient temperature and payload." },
      { title: "Installed in-house", body: "Fitting, commissioning and temperature validation by Asadtech engineers." },
      { title: "Service across the Kingdom", body: "Support teams in Riyadh, Jeddah and Dammam keep downtime in hours." },
    ],
    specs: [
      { label: "Temperature range", value: "−25 °C to +25 °C" },
      { label: "Vehicle types", value: "Vans, rigid trucks, trailers" },
      { label: "Drive options", value: "Direct drive, diesel engine" },
      { label: "Certification", value: "ISO 9001 / 14001 / 45001" },
    ],
    gallery: ["/images/services-cooling-units.webp", "/images/our-work-1.webp", "/images/our-work-2.webp"],
  },
  {
    slug: "cold-rooms",
    title: "Cold Rooms",
    group: "Cooling Solutions",
    intro:
      "Custom cold room design, supply and installation for food storage, pharmaceutical cold chain and industrial refrigeration.",
    image: "/images/services-cold-rooms.webp",
    overview:
      "Cold rooms designed around your footprint and throughput, fabricated in our Riyadh plant and installed without interrupting your operation. Panels, doors, refrigeration and controls come from one supplier, so responsibility never gets divided.",
    features: [
      { title: "Designed to the site", body: "Survey, load calculation and layout matched to the space you have." },
      { title: "Built in-house", body: "Panels, doors and refrigeration fabricated at our own facility." },
      { title: "Food and pharma ready", body: "Hygienic finishes and validation to meet compliance requirements." },
      { title: "Maintained on plan", body: "Scheduled servicing keeps temperature stable and audits clean." },
    ],
    specs: [
      { label: "Temperature range", value: "−30 °C to +15 °C" },
      { label: "Panel thickness", value: "60 mm to 200 mm" },
      { label: "Applications", value: "Food, pharmaceutical, industrial" },
      { label: "Certification", value: "ISO 9001 / 14001 / 45001" },
    ],
    gallery: ["/images/services-cold-rooms.webp", "/images/our-work-1.webp", "/images/our-work-2.webp"],
  },
  {
    slug: "tail-lifters",
    title: "Tail Lifters",
    group: "Tail Lifters",
    intro:
      "Hydraulic tail lift systems for efficient loading and unloading, designed for logistics and delivery fleets.",
    image: "/images/services-tail-lifters.webp",
    overview:
      "Hydraulic tail lifts fitted to your vehicles and rated to your heaviest routine load. Faster turnarounds at the kerb, fewer manual handling injuries, and a service plan that keeps the fleet certified.",
    features: [
      { title: "Rated to your load", body: "Capacity selected against your heaviest routine consignment." },
      { title: "Fitted to your fleet", body: "Installation on vans, rigids and trailers by our own technicians." },
      { title: "Safety documented", body: "Load testing and certification completed at handover." },
      { title: "Maintained in-Kingdom", body: "Parts and service available across the three main regions." },
    ],
    specs: [
      { label: "Capacity", value: "500 kg to 2,000 kg" },
      { label: "Platform", value: "Steel and aluminium options" },
      { label: "Vehicle types", value: "Vans, rigid trucks, trailers" },
      { label: "Certification", value: "ISO 9001 / 14001 / 45001" },
    ],
    gallery: ["/images/services-tail-lifters.webp", "/images/our-work-1.webp", "/images/our-work-2.webp"],
  },
  {
    slug: "spider-cranes",
    title: "Spider Cranes",
    group: "Spider Cranes",
    intro:
      "Compact spider cranes engineered to move heavy loads safely and precisely in space-restricted environments.",
    image: "/images/services-spx-series.webp",
    overview:
      "SPX, MPK and JF series compact cranes for lifting where a conventional crane cannot reach. Tracked, narrow and stable on outriggers, they work indoors, on finished floors and on constrained sites.",
    features: [
      { title: "Three series", body: "SPX for capacity, MPK for access, JF for crawler stability." },
      { title: "Space restricted", body: "Narrow tracked bases pass through standard door openings." },
      { title: "Stable on outriggers", body: "Independently set legs handle uneven and constrained ground." },
      { title: "Operator training", body: "Handover includes safe operating instruction for your team." },
    ],
    specs: [
      { label: "Series", value: "SPX, MPK, JF" },
      { label: "Applications", value: "Industrial, construction, indoor lifting" },
      { label: "Base", value: "Tracked crawler with outriggers" },
      { label: "Certification", value: "ISO 9001 / 14001 / 45001" },
    ],
    gallery: ["/images/services-spx-series.webp", "/images/services-mpk-series.webp", "/images/services-jf-series.webp"],
  },
];
