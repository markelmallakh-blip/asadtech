/** Blog records (Figma 121:3869 and 121:4285). */
export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  role: string;
  image: string;
  excerpt: string;
  body: readonly { heading: string; text: string }[];
};

export const blogPage = {
  chip: "Our Blog",
  heading: "Insights That Move Industries Forward",
  readMore: "Read More",
  readAlso: "Read Also",
  allCta: "EXPLORE ALL BLOG",
  back: "Back To Blog",
} as const;

export const posts: readonly Post[] = [
  {
    slug: "reefer-box-perishables",
    title: "Reefer box and how it overcomes challenges for perishables",
    date: "May 30, 2024",
    author: "Mohamed Ahmed",
    role: "Regional Manager",
    image: "/images/blog-2.webp",
    excerpt:
      "Why an insulated body and the right refrigeration unit matter more than raw cooling power when moving perishables across Saudi Arabia.",
    body: [
      {
        heading: "Introduction",
        text: "Perishable goods such as fresh produce, dairy, meat, seafood, and frozen foods require more than careful handling—they need consistent temperature control throughout their journey. Reefer boxes provide a reliable solution by creating a controlled environment that helps protect products from temperature fluctuations and spoilage.",
      },
      {
        heading: "1. The Challenge of Transporting Perishables",
        text: "Fresh products are highly sensitive to changes in temperature. Exposure to excessive heat, inconsistent cooling, or delays during transportation can quickly affect their quality, shelf life, and safety. For businesses handling perishables, maintaining the right conditions from loading to delivery is essential.",
      },
      {
        heading: "2. What Is a Reefer Box?",
        text: "A reefer box is an insulated refrigerated cargo body equipped with a dedicated cooling unit. It creates a controlled-temperature environment inside the vehicle, allowing perishable products to be transported safely over short or long distances.",
      },
      {
        heading: "3. Maintaining Consistent Temperatures",
        text: "One of the biggest advantages of reefer transportation is continuous temperature control. The refrigeration system helps maintain the required temperature inside the cargo area, reducing the impact of outdoor weather conditions and keeping products in stable conditions throughout the journey.",
      },
      {
        heading: "4. Protecting Product Quality",
        text: "Temperature control goes beyond preventing spoilage. It helps preserve the freshness, texture, appearance, and overall quality of products. From vegetables and fruits to dairy, meat, seafood, and frozen goods, the right refrigerated environment helps products arrive in better condition.",
      },
      {
        heading: "5. Supporting Different Perishable Products",
        text: "Not every product requires the same storage conditions. Modern reefer solutions can be configured to support different temperature requirements, making them suitable for a wide range of applications—from chilled food distribution to frozen products and temperature-sensitive goods.",
      },
    ],
  },
  {
    slug: "cold-chain-cost-of-failure",
    title: "What cold chain logistics really costs when it fails",
    date: "May 30, 2024",
    author: "Mohamed Ahmed",
    role: "Regional Manager",
    image: "/images/blog-1.webp",
    excerpt:
      "A single temperature excursion is rarely one lost consignment. It is a claim, a relationship and, in the worst case, a licence.",
    body: [
      {
        heading: "Introduction",
        text: "Cold chain failures are usually discussed as a percentage of spoilage. In practice the cost lands somewhere else first: in rejected deliveries, insurance claims, audit findings and the customer who quietly moves to another supplier.",
      },
      {
        heading: "1. Where Excursions Actually Happen",
        text: "Most temperature excursions happen at handover points rather than on the road. Loading docks without air curtains, doors held open at multi-drop stops and pallets left on the tarmac between vehicle and cold store account for the majority of the alarms we investigate.",
      },
      {
        heading: "2. The Hidden Cost of a Rejected Load",
        text: "A rejected consignment costs more than the goods. The vehicle has to be turned around, the driver’s day is lost, the customer’s shelves stay empty and the replacement is often shipped at premium rates. Multiply that across a season and the arithmetic is unforgiving.",
      },
      {
        heading: "3. Designing the Chain, Not the Link",
        text: "Reliable cold chains are specified end to end: the cold room, the vehicle, the door discipline and the monitoring are treated as one system. Sizing each part for the Kingdom’s ambient conditions rather than a European average removes most of the surprises before they happen.",
      },
      {
        heading: "4. Monitoring That Pays for Itself",
        text: "Continuous logging turns a dispute into a record. When every leg of the journey is documented, claims are settled in hours instead of weeks, and the same data shows exactly which stop, door or route needs attention next.",
      },
    ],
  },
  {
    slug: "direct-drive-vs-diesel",
    title: "Choosing between direct drive and diesel refrigeration",
    date: "May 30, 2024",
    author: "Mohamed Ahmed",
    role: "Regional Manager",
    image: "/images/blog-3.webp",
    excerpt:
      "Both technologies keep cargo cold. The right one depends on how long the engine is running and how often the doors open.",
    body: [
      {
        heading: "Introduction",
        text: "Direct-drive and diesel-powered refrigeration units both hold temperature reliably when they are matched to the job. Choosing between them is a question about the route rather than the vehicle.",
      },
      {
        heading: "1. How Direct Drive Works",
        text: "A direct-drive unit takes its power from the vehicle engine. It is lighter, simpler to service and recovers quickly after door openings, which makes it the natural choice for vans and light trucks on multi-drop urban routes.",
      },
      {
        heading: "2. Where Diesel Units Earn Their Keep",
        text: "A diesel unit carries its own engine, so it keeps cooling while the vehicle is parked. Long stationary holds, overnight loads and trailers that wait at ports or distribution centres all favour an independent power source.",
      },
      {
        heading: "3. Counting the Door Openings",
        text: "A vehicle making thirty drops a day opens its doors thirty times. The heat that enters each time has to be removed before the next stop, so recovery speed matters more than peak capacity on these routes.",
      },
      {
        heading: "4. Matching the Unit to the Ambient",
        text: "Kingdom summers push both technologies harder than the brochure figures assume. Sizing against local ambient temperatures rather than nominal ratings is what keeps a unit inside its band in August.",
      },
    ],
  },
  {
    slug: "spider-cranes-constrained-sites",
    title: "Spider cranes on constrained sites: a practical guide",
    date: "May 30, 2024",
    author: "Mohamed Ahmed",
    role: "Regional Manager",
    image: "/images/blog-4.webp",
    excerpt:
      "When a conventional crane cannot reach the lift, a compact tracked crane usually can. Here is how to plan for one.",
    body: [
      {
        heading: "Introduction",
        text: "Spider cranes are built for the lifts that stop a project: glass panels inside an atrium, plant on a finished floor, steel through a standard doorway. Their footprint is small, but planning the lift still deserves care.",
      },
      {
        heading: "1. Access and Floor Loading",
        text: "A tracked base passes through most door openings, but the floor beneath the outriggers has to carry the point loads. Confirm slab ratings and use spreader pads wherever finished surfaces are involved.",
      },
      {
        heading: "2. Choosing the Series",
        text: "The SPX series offers the highest capacity, the MPK series the tightest access and the JF series the most stable crawler base for uneven ground. Matching the series to the site is the first decision, and it decides most of the rest.",
      },
      {
        heading: "3. Rigging for Glass and Cladding",
        text: "Vacuum lifters and rotating manipulators turn a crane into a glazing tool. Plan the attachment early so that the crane’s duty chart covers the combined weight of the panel and the rigging.",
      },
      {
        heading: "4. Operators and Handover",
        text: "Every crane we supply comes with operator instruction at handover. A trained operator uses the machine’s reach safely and keeps the site moving, which is where the compact crane’s value really lies.",
      },
    ],
  },
];
