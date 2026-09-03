/** Projects index copy (Figma 97:11509). */
export const projectsPage = {
  hero: {
    chip: "Our Projects",
    heading: "Delivering Solutions That Keep Business Moving",
    body: "From cold rooms to hydraulic lifting, every project on this list is a fleet or a facility we keep running across the Kingdom.",
    cta: "REQUEST INTEREST",
    href: "#request",
    image: { src: "/images/projects/hero-background.webp", alt: "Asadtech engineers fitting a cooling unit" },
  },
  filters: ["All Projects", "Cooling Units", "Cooling Rooms", "Tail Lifter", "Spider Cranes"],
  allCta: "EXPLORE ALL PROJECTS",
  banner: { src: "/images/projects/cta-background.webp", alt: "Aerial view of the Asadtech facility" },
  request: {
    heading: ["Request", "Interest"],
    body: "Get the right equipment, expert guidance, and dependable support to keep your operations moving.",
    submit: "Submit interest",
    model: "Choose Model",
    models: ["Cooling Units", "Cold Rooms", "Tail Lifters", "SPX Series", "MPK Series", "JF Series"],
  },
} as const;
