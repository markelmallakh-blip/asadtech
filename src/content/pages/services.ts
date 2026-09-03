/** One row of the models accordion (Figma 79:10120). */
export type ServiceModel = {
  name: string;
  image: string;
  specs: readonly { label: string; value: string }[];
};

/** A titled run of models — "Direct Drive", "Diesel Engine" — that the tabs filter by. */
export type ServiceModelGroup = {
  name: string;
  items: readonly ServiceModel[];
};

/** Service detail records for the single-solution page (Figma 69:8644). */
export type Service = {
  slug: string;
  title: string;
  group: string;
  intro: string;
  image: string;
  /** Header footage, pinned behind the card (Figma 74:9493). */
  video?: string;
  /** Header headline. Falls back to the title when a service has none yet. */
  headline?: string;
  overview: string;
  /** The two overview pictures the KSA badge sits between. */
  overviewImages?: readonly [string, string];
  /** Picture beside the features rows (Figma 69:8676). */
  featuresImage: string;
  features: readonly { title: string; body: string }[];
  specs: readonly { label: string; value: string }[];
  /** Six markets the product serves, fanned around the vehicle (Figma 69:8776). */
  applications: readonly { title: string; body: string }[];
  /** Left-column copy beside the models list (Figma 79:10120). */
  modelsIntro: string;
  models: readonly ServiceModelGroup[];
  /** Seven pictures for the gallery grid, read down its three columns (Figma 79:11076). */
  gallery: readonly string[];
};

/** Copy shared by every service page (Figma 79:10120, 69:8898, 79:10358, 69:9016, 79:11076). */
export const serviceShared = {
  models: {
    tagline: "Our Comprehensive Range",
    heading: "Available Models",
    allTab: "All Models",
    brochure: "Download Brochure",
    brochureHref: "#",
  },
  warranty: {
    heading: "Warranty Available",
    tagline: "Confidence That Goes Further",
    items: [
      {
        icon: "shield",
        title: "Warranty Terms",
        body: "Clear warranty terms and coverage details are provided with your quotation, based on the selected model and configuration.",
      },
      {
        icon: "time",
        title: "Optional Warranty",
        body: "Extend your peace of mind with additional warranty coverage, available for selected products and configurations.",
      },
      {
        icon: "hand",
        title: "Professional Support",
        body: "Our support team is ready to assist with maintenance, service, and technical needs throughout your product\u2019s lifecycle.",
      },
    ],
  },
  installation: {
    tag: "Seamless Installation",
    heading: "The Right Setup for Every Journey",
    image: "/images/single-service/hero-background.webp",
    rows: [
      { title: "Installation Available", body: "Professional installation is available across Saudi Arabia." },
      { title: "Installation Included", body: "Installation options can be tailored to the selected unit and vehicle." },
      { title: "Installation Fee", body: "Provided based on the selected model and vehicle requirements." },
    ],
    cta: "REQUEST INTEREST",
    href: "#request",
  },
  downloads: {
    heading: "Download Resources",
    items: [
      { title: "Datasheet", size: "24kb", href: "#" },
      { title: "Catalogue", size: "24kb", href: "#" },
      { title: "Brochure", size: "24kb", href: "#" },
    ],
  },
  gallery: {
    tagline: "Gallery",
    heading: "A Closer Look at What We Deliver",
  },
} as const;

export const services: readonly Service[] = [
  {
    slug: "cooling-units",
    title: "Cooling Units",
    group: "Cooling Solutions",
    intro:
      "Transport refrigeration and cooling units for trucks, vans and cold chain logistics fleets in Saudi Arabia.",
    image: "/images/single-service/hero-background.webp",
    video: "/images/single-service/asad-cooling-hero-2.mp4",
    headline: "Reliable Cooling. Wherever the Road Takes You.",
    overviewImages: [
      "/images/single-service/overview-01.webp",
      "/images/single-service/overview-02.webp",
    ],
    overview:
      "Direct-drive and diesel-powered transport refrigeration specified around your route, your payload and the temperature band you have to hold. Every unit is sized against Kingdom ambient conditions rather than a European average, then installed and commissioned by our own engineers.",
    featuresImage: "/images/single-service/gallery-04.webp",
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
    applications: [
      { title: "Food & Beverage", body: "Keep food and beverages safely chilled throughout transportation and delivery." },
      { title: "Dairy & Frozen Products", body: "Maintain frozen and chilled temperatures for dairy, ice cream, and frozen goods." },
      { title: "Fresh Produce & Bakery", body: "Protect freshness during distribution across cities and delivery routes." },
      { title: "Pharmaceutical & Healthcare", body: "Support temperature-controlled transportation for medicines and sensitive healthcare products." },
      { title: "E-Commerce & Express Delivery", body: "Reliable mobile cooling for temperature-sensitive deliveries." },
      { title: "Logistics & Government", body: "Built for demanding logistics operations and large-scale cold-chain requirements across the Kingdom." },
    ],
    modelsIntro:
      "Explore our range of cooling units, designed to suit different vehicle sizes, cargo needs, and temperature requirements. Choose the model that fits your operation and keeps every delivery at the right temperature.",
    models: [
      {
        name: "Direct Drive",
        items: [
          { name: "Asad A100", image: "/images/single-service/model-unit.webp", specs: [{ label: "Type", value: "Direct Drive" }, { label: "Refrigerant", value: "R134A / R404A" }, { label: "Temp Range", value: "0°C to +15°C" }, { label: "Best For", value: "Small Vans" }] },
          { name: "Asad A200", image: "/images/single-service/model-unit.webp", specs: [{ label: "Type", value: "Direct Drive" }, { label: "Refrigerant", value: "R134A / R404A" }, { label: "Temp Range", value: "-15°C to +15°C" }, { label: "Best For", value: "Medium Trucks" }] },
          { name: "Asad A300", image: "/images/single-service/model-unit.webp", specs: [{ label: "Type", value: "Direct Drive" }, { label: "Refrigerant", value: "R404A" }, { label: "Temp Range", value: "-20°C to +15°C" }, { label: "Best For", value: "Large Trucks" }] },
          { name: "Asad A500", image: "/images/single-service/model-unit.webp", specs: [{ label: "Type", value: "Direct Drive" }, { label: "Refrigerant", value: "R404A" }, { label: "Temp Range", value: "-25°C to +15°C" }, { label: "Best For", value: "Rigid Trucks" }] },
        ],
      },
      {
        name: "Diesel Engine",
        items: [
          { name: "Asad D300", image: "/images/single-service/model-unit.webp", specs: [{ label: "Type", value: "Diesel Engine" }, { label: "Refrigerant", value: "R404A" }, { label: "Temp Range", value: "-25°C to +25°C" }, { label: "Best For", value: "Large Trucks" }] },
          { name: "Asad D500", image: "/images/single-service/model-unit.webp", specs: [{ label: "Type", value: "Diesel Engine" }, { label: "Refrigerant", value: "R404A" }, { label: "Temp Range", value: "-25°C to +25°C" }, { label: "Best For", value: "Trailers" }] },
          { name: "Asad D700", image: "/images/single-service/model-unit.webp", specs: [{ label: "Type", value: "Diesel Engine" }, { label: "Refrigerant", value: "R452A" }, { label: "Temp Range", value: "-30°C to +25°C" }, { label: "Best For", value: "Multi-Temp Trailers" }] },
          { name: "Asad D900", image: "/images/single-service/model-unit.webp", specs: [{ label: "Type", value: "Diesel Engine" }, { label: "Refrigerant", value: "R452A" }, { label: "Temp Range", value: "-30°C to +25°C" }, { label: "Best For", value: "Long-Haul Trailers" }] },
        ],
      },
    ],
    gallery: ["/images/single-service/gallery-03.webp", "/images/single-service/gallery-04.webp", "/images/single-service/hero-background.webp", "/images/single-service/gallery-05.webp", "/images/single-service/gallery-06.webp", "/images/single-service/gallery-07.webp", "/images/single-service/gallery-04.webp"],
  },
  {
    slug: "cold-rooms",
    title: "Cold Rooms",
    group: "Cooling Solutions",
    intro:
      "Custom cold room design, supply and installation for food storage, pharmaceutical cold chain and industrial refrigeration.",
    image: "/images/single-service/gallery-01.webp",
    overview:
      "Cold rooms designed around your footprint and throughput, fabricated in our Riyadh plant and installed without interrupting your operation. Panels, doors, refrigeration and controls come from one supplier, so responsibility never gets divided.",
    featuresImage: "/images/single-service/gallery-01.webp",
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
    applications: [
      { title: "Food Storage & Distribution", body: "Chilled and frozen storage for distributors, wholesalers and central kitchens." },
      { title: "Supermarkets & Retail", body: "Back-of-house cold stores that keep shelves stocked and produce fresh." },
      { title: "Pharmaceutical & Healthcare", body: "Validated temperature-controlled rooms for medicines, vaccines and samples." },
      { title: "Hospitality & Catering", body: "Walk-in coolers and freezers sized to hotel, restaurant and catering volumes." },
      { title: "Industrial & Manufacturing", body: "Process cooling and blast-freezing rooms built around production lines." },
      { title: "Logistics & Government", body: "Large-scale cold-chain hubs for logistics operators and public-sector projects." },
    ],
    modelsIntro:
      "Explore our range of cold rooms, from modular chillers to blast freezers, sized to your footprint, throughput and the temperature you have to hold.",
    models: [
      {
        name: "Modular Cold Rooms",
        items: [
          { name: "Asad CR 10", image: "/images/services-cold-rooms.webp", specs: [{ label: "Type", value: "Chiller" }, { label: "Panel", value: "80 mm PU" }, { label: "Temp Range", value: "0°C to +8°C" }, { label: "Best For", value: "Restaurants & Retail" }] },
          { name: "Asad CR 20", image: "/images/services-cold-rooms.webp", specs: [{ label: "Type", value: "Freezer" }, { label: "Panel", value: "120 mm PU" }, { label: "Temp Range", value: "-22°C to -18°C" }, { label: "Best For", value: "Food Distributors" }] },
          { name: "Asad CR 40", image: "/images/services-cold-rooms.webp", specs: [{ label: "Type", value: "Dual Zone" }, { label: "Panel", value: "150 mm PU" }, { label: "Temp Range", value: "-25°C to +10°C" }, { label: "Best For", value: "Pharmaceutical" }] },
        ],
      },
      {
        name: "Blast Freezers",
        items: [
          { name: "Asad BF 5", image: "/images/services-cold-rooms.webp", specs: [{ label: "Type", value: "Blast Freezer" }, { label: "Panel", value: "200 mm PU" }, { label: "Temp Range", value: "Down to -40°C" }, { label: "Best For", value: "Central Kitchens" }] },
          { name: "Asad BF 10", image: "/images/services-cold-rooms.webp", specs: [{ label: "Type", value: "Blast Freezer" }, { label: "Panel", value: "200 mm PU" }, { label: "Temp Range", value: "Down to -40°C" }, { label: "Best For", value: "Meat & Seafood Plants" }] },
        ],
      },
    ],
    gallery: ["/images/single-service/gallery-01.webp", "/images/single-service/gallery-07.webp", "/images/single-service/gallery-04.webp", "/images/single-service/gallery-05.webp", "/images/single-service/gallery-02.webp", "/images/single-service/gallery-03.webp", "/images/single-service/gallery-06.webp"],
  },
  {
    slug: "tail-lifters",
    title: "Tail Lifters",
    group: "Tail Lifters",
    intro:
      "Hydraulic tail lift systems for efficient loading and unloading, designed for logistics and delivery fleets.",
    image: "/images/single-service/gallery-02.webp",
    overview:
      "Hydraulic tail lifts fitted to your vehicles and rated to your heaviest routine load. Faster turnarounds at the kerb, fewer manual handling injuries, and a service plan that keeps the fleet certified.",
    featuresImage: "/images/single-service/gallery-02.webp",
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
    applications: [
      { title: "Food & Beverage Distribution", body: "Fast, safe kerbside unloading of pallets and roll cages on multi-drop routes." },
      { title: "Retail & E-Commerce", body: "Ground-level delivery of parcels and cages without ramps or forklifts." },
      { title: "Pharmaceutical & Healthcare", body: "Controlled handling of sensitive medical consignments at every stop." },
      { title: "Furniture & Appliances", body: "Heavy, bulky loads lowered to the ground without manual lifting." },
      { title: "Industrial & Construction", body: "Equipment and materials moved on and off site by a single operator." },
      { title: "Logistics & Government", body: "Fleet-wide fitment for logistics operators and public-sector vehicles." },
    ],
    modelsIntro:
      "Explore our range of tail lifts, rated from light parcel work to full pallet loads, and fitted to vans, rigid trucks and trailers.",
    models: [
      {
        name: "Cantilever",
        items: [
          { name: "Asad TL 500", image: "/images/services-tail-lifters.webp", specs: [{ label: "Capacity", value: "500 kg" }, { label: "Platform", value: "Aluminium" }, { label: "Vehicle", value: "Vans" }, { label: "Best For", value: "Parcel Delivery" }] },
          { name: "Asad TL 1000", image: "/images/services-tail-lifters.webp", specs: [{ label: "Capacity", value: "1,000 kg" }, { label: "Platform", value: "Steel" }, { label: "Vehicle", value: "Light Trucks" }, { label: "Best For", value: "Retail Distribution" }] },
          { name: "Asad TL 1500", image: "/images/services-tail-lifters.webp", specs: [{ label: "Capacity", value: "1,500 kg" }, { label: "Platform", value: "Steel" }, { label: "Vehicle", value: "Rigid Trucks" }, { label: "Best For", value: "Pallet Deliveries" }] },
        ],
      },
      {
        name: "Column",
        items: [
          { name: "Asad TC 750", image: "/images/services-tail-lifters.webp", specs: [{ label: "Capacity", value: "750 kg" }, { label: "Platform", value: "Aluminium" }, { label: "Vehicle", value: "Vans & Light Trucks" }, { label: "Best For", value: "Urban Routes" }] },
          { name: "Asad TC 2000", image: "/images/services-tail-lifters.webp", specs: [{ label: "Capacity", value: "2,000 kg" }, { label: "Platform", value: "Steel" }, { label: "Vehicle", value: "Trailers" }, { label: "Best For", value: "Heavy Pallets" }] },
        ],
      },
    ],
    gallery: ["/images/single-service/gallery-02.webp", "/images/single-service/gallery-05.webp", "/images/single-service/gallery-06.webp", "/images/single-service/gallery-03.webp", "/images/single-service/gallery-01.webp", "/images/single-service/gallery-07.webp", "/images/single-service/gallery-04.webp"],
  },
  {
    slug: "spider-cranes",
    title: "Spider Cranes",
    group: "Spider Cranes",
    intro:
      "Compact spider cranes engineered to move heavy loads safely and precisely in space-restricted environments.",
    image: "/images/single-service/gallery-03.webp",
    overview:
      "SPX, MPK and JF series compact cranes for lifting where a conventional crane cannot reach. Tracked, narrow and stable on outriggers, they work indoors, on finished floors and on constrained sites.",
    featuresImage: "/images/single-service/gallery-03.webp",
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
    applications: [
      { title: "Glass & Façade Installation", body: "Precise placement of glazing panels on finished floors and tight façades." },
      { title: "Indoor Construction", body: "Lifting inside buildings where a mobile crane cannot enter." },
      { title: "Industrial Maintenance", body: "Machinery and plant moved through standard door openings." },
      { title: "Steel & Structural Erection", body: "Beams and columns positioned on constrained or uneven sites." },
      { title: "HVAC & MEP Installation", body: "Ducting, units and pipework lifted into ceilings and plant rooms." },
      { title: "Infrastructure & Government", body: "Compact lifting for utilities, rail and public-sector projects." },
    ],
    modelsIntro:
      "Explore the SPX, MPK and JF series, compact cranes that lift where a conventional crane cannot reach, on finished floors and constrained sites.",
    models: [
      {
        name: "SPX Series",
        items: [
          { name: "SPX 312", image: "/images/services-spx-series.webp", specs: [{ label: "Capacity", value: "2.98 t" }, { label: "Max Height", value: "8.6 m" }, { label: "Width", value: "0.78 m" }, { label: "Best For", value: "Glass Installation" }] },
          { name: "SPX 527", image: "/images/services-spx-series.webp", specs: [{ label: "Capacity", value: "2.5 t" }, { label: "Max Height", value: "14.4 m" }, { label: "Width", value: "0.9 m" }, { label: "Best For", value: "Indoor Construction" }] },
          { name: "SPX 1280", image: "/images/services-spx-series.webp", specs: [{ label: "Capacity", value: "8 t" }, { label: "Max Height", value: "23 m" }, { label: "Width", value: "1.4 m" }, { label: "Best For", value: "Steel Erection" }] },
        ],
      },
      {
        name: "MPK Series",
        items: [
          { name: "MPK 06", image: "/images/services-mpk-series.webp", specs: [{ label: "Capacity", value: "0.6 t" }, { label: "Max Height", value: "6 m" }, { label: "Width", value: "0.6 m" }, { label: "Best For", value: "Maintenance" }] },
          { name: "MPK 20", image: "/images/services-mpk-series.webp", specs: [{ label: "Capacity", value: "2 t" }, { label: "Max Height", value: "12 m" }, { label: "Width", value: "0.8 m" }, { label: "Best For", value: "Façade Work" }] },
        ],
      },
      {
        name: "JF Series",
        items: [
          { name: "JF 545", image: "/images/services-jf-series.webp", specs: [{ label: "Capacity", value: "4.5 t" }, { label: "Max Height", value: "18 m" }, { label: "Width", value: "1.2 m" }, { label: "Best For", value: "Uneven Sites" }] },
        ],
      },
    ],
    gallery: ["/images/single-service/gallery-03.webp", "/images/single-service/gallery-07.webp", "/images/single-service/gallery-01.webp", "/images/single-service/gallery-05.webp", "/images/single-service/gallery-04.webp", "/images/single-service/gallery-02.webp", "/images/single-service/gallery-06.webp"],
  },
];
