/** Contact page copy (Figma 127:7540). */
export const contact = {
  heading: "Contact Us",
  body: "Get the right equipment, expert guidance, and dependable support to keep your operations moving.",
  image: {
    src: "/images/contact/hero-background.webp",
    alt: "Asadtech representatives shaking hands in the Riyadh office",
  },
  form: {
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone Number",
    email: "Email Address",
    service: "Choose Service",
    services: [
      "Cooling Units",
      "Cold Rooms",
      "Tail Lifters",
      "Spider Cranes",
      "Maintenance & Service",
    ],
    message: "Leave Your Message",
    submit: "SUBMIT REQUEST",
  },
  phone: { label: "+(966) 53 166 2913", href: "tel:+966531662913" },
  email: { label: "info@asadtech.com", href: "mailto:info@asadtech.com" },
  address:
    "3073, Jabrah Street Riyadh 2nd Industrial City, Exit -16, P.O Box 7860, Riyadh 14332 Kingdom of Saudi Arabia",
  hours: ["Sun - Fri 08:00 - 17:00", "Weekends : Friday and Saturday"],
} as const;
