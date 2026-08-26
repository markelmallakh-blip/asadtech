/** Blog post records. Structure follows the site vocabulary; needs a Figma pass. */
export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  role: string;
  image: string;
  excerpt: string;
  body: readonly { heading?: string; text: string }[];
};

export const posts: readonly Post[] = [
  {
    slug: "reefer-box-perishables",
    title: "Reefer box and how it overcomes challenges for perishables",
    date: "May 30, 2024",
    author: "Mohamed Ahmed",
    role: "Regional Manager",
    image: "/images/blog-1.webp",
    excerpt:
      "Why an insulated body and the right refrigeration unit matter more than raw cooling power when moving perishables across Saudi Arabia.",
    body: [
      {
        text: "A reefer box is not simply a cold container on wheels. It is an insulated envelope, a refrigeration unit and an airflow design working together, and the weakest of the three sets the temperature you actually achieve at the far end of a route.",
      },
      {
        heading: "Insulation does the quiet work",
        text: "Panel thickness and the quality of the seal around doors and joints determine how much heat leaks in before the unit has to do anything. In Saudi summer conditions, a poorly sealed body can add a third to the running load, which shows up as fuel burn and shortened compressor life rather than as an obvious fault.",
      },
      {
        heading: "Airflow decides whether the load is evenly cooled",
        text: "Cold air needs a return path. Loads packed to the ceiling or hard against the bulkhead create dead zones where produce sits several degrees warmer than the setpoint, even while the display reads correctly at the sensor.",
      },
      {
        heading: "Matching the unit to the duty cycle",
        text: "A vehicle making thirty drops a day opens its doors thirty times. Direct-drive units recover quickly while the engine runs; diesel-powered units hold temperature during long stationary periods. Choosing between them is a question about the route, not about the vehicle.",
      },
    ],
  },
];
