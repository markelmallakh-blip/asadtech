export const projectsPage = {
  hero: {
    tagline: "Our Projects",
    lines: ["Delivering Solutions That", "Keep Business Moving"],
    body: "From cold rooms to hydraulic lifting, every project on this list is a fleet or a facility we keep running across the Kingdom.",
    cta: "Request interest",
    href: "#request",
    image: { src: "/images/projects/hero-background.png", alt: "Asadtech refrigerated fleet on site" },
  },
  filters: ["All Projects", "Cooling Units", "Cooling Rooms", "Tail Lifters", "Spider Cranes"],
  banner: { src: "/images/projects/cta-background.png", alt: "Aerial view of the Asadtech facility" },
  request: {
    heading: ["Request", "Interest"],
    body: "Get the right equipment, expert guidance, and dependable support to keep your operations moving.",
    submit: "Submit interest",
    model: "Choose Model",
    models: ["Cooling Units", "Cold Rooms", "Tail Lifters", "SPX Series", "MPK Series", "JF Series"],
  },
} as const;
