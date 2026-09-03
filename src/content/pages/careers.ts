/** Careers content (Figma 126:6550 and 122:5175). */
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
  offer: readonly string[];
};

const offer = [
  "A rewarding package aligned with your experience and contribution.",
  "Opportunities to develop your technical, commercial, and leadership skills.",
  "Work alongside experienced professionals in a collaborative workplace.",
  "Be part of projects and solutions that support real-world transport and logistics operations.",
] as const;

export const openings: readonly Opening[] = [
  {
    slug: "sales-engineer",
    title: "Sales Engineer",
    department: "Sales",
    location: "Riyadh",
    type: "Full Time",
    summary:
      "Help customers find the right transport and equipment solutions, combining technical knowledge with commercial skill.",
    about:
      "We’re looking for a motivated Sales Engineer to join our team and help customers find the right transport and equipment solutions for their operations. You’ll combine technical knowledge with strong communication and commercial skills to understand customer needs, recommend suitable solutions, and build lasting relationships.",
    responsibilities: [
      "Identify new business opportunities and develop strong customer relationships.",
      "Understand customer requirements and recommend suitable technical solutions.",
      "Prepare quotations, proposals, and product presentations.",
      "Coordinate with engineering, production, and service teams to deliver the right solutions.",
      "Follow up with customers throughout the sales process.",
      "Achieve sales targets and contribute to business growth.",
      "Provide professional after-sales support and maintain long-term client relationships.",
    ],
    requirements: [
      "Bachelor’s degree in Mechanical Engineering or a related field.",
      "1–3 years of experience in technical sales or a similar role.",
      "Strong understanding of technical products and solutions.",
      "Excellent communication, negotiation, and presentation skills.",
      "Strong customer-focused and problem-solving mindset.",
      "Ability to work independently and as part of a team.",
      "Good command of English and Arabic.",
      "Proficiency in Microsoft Office and CRM tools.",
    ],
    offer,
  },
  {
    slug: "refrigeration-service-engineer",
    title: "Refrigeration Service Engineer",
    department: "Service",
    location: "El Damam",
    type: "Full Time",
    summary:
      "Commission, service and troubleshoot transport refrigeration and cold room systems across eastern region accounts.",
    about:
      "You will be the engineer customers see when it matters — commissioning new installations and getting stopped units running again, often on the same day.",
    responsibilities: [
      "Commission cold rooms and transport refrigeration units on customer sites.",
      "Diagnose and repair mechanical, electrical and control faults.",
      "Complete temperature validation and hand over to the customer.",
      "Keep accurate service records for every visit.",
    ],
    requirements: [
      "Diploma or degree in mechanical, refrigeration or electrical engineering.",
      "Three or more years servicing commercial refrigeration.",
      "Valid Saudi driving licence.",
      "Arabic and English working proficiency.",
    ],
    offer,
  },
  {
    slug: "hydraulic-lifting-technician",
    title: "Hydraulic Lifting Technician",
    department: "Service",
    location: "Jeddah",
    type: "Full Time",
    summary:
      "Install and maintain tail lifters and spider cranes for logistics and construction customers on the western coast.",
    about:
      "You will fit and maintain the hydraulic equipment that loads and lifts for fleets across the western region.",
    responsibilities: [
      "Install tail lifters onto customer vehicles to specification.",
      "Service and load-test spider cranes.",
      "Diagnose hydraulic and electrical faults.",
      "Complete safety documentation for every job.",
    ],
    requirements: [
      "Technical diploma in mechanical or hydraulic systems.",
      "Two or more years with hydraulic lifting equipment.",
      "Comfortable working at height and on customer sites.",
      "Valid Saudi driving licence.",
    ],
    offer,
  },
];

export const careersPage = {
  hero: {
    chip: "Careers",
    heading: "Join Our Team",
    body: "At ASAD Tech, we believe great solutions start with great people. Join a team where engineering, innovation, and expertise come together to solve real challenges and shape the future of transport solutions.",
    image: { src: "/images/careers/hero-background.webp", alt: "Colleagues meeting in the Asadtech office" },
  },
  culture: {
    heading: "Life At Asad Tech",
    body: "We foster a professional and collaborative environment where people are encouraged to share ideas, take ownership, and support one another. Whether you're working in the workshop, on-site, or in the office, you'll be part of a team focused on quality and continuous improvement.",
    badge: { src: "/images/careers/gallery-01.webp", alt: "Asadtech staff pass on its lanyard" },
    cards: [
      { tone: "blue", title: "Grow With Purpose", body: "Take on meaningful projects that challenge you to learn, improve, and grow." },
      { tone: "white", title: "Work With Experts", body: "Collaborate with experienced professionals across engineering, technology, operations, and business." },
      { tone: "white", title: "Make an Impact", body: "Your ideas and expertise contribute directly to solutions used by businesses every day." },
      { tone: "teal", title: "Keep Innovating", body: "We encourage new thinking, practical ideas, and better ways of doing things." },
    ],
  },
  openings: { heading: "Open Positions", cta: "EXPLORE" },
  role: {
    back: "Back To Careers",
    about: "About the role",
    responsibilities: "Key Responsibilities",
    requirements: "Requirements",
    offer: "What We Offer",
    cta: "APPLY NOW",
  },
  apply: {
    heading: "Apply now",
    body: "Send your details and we will come back to you within five working days.",
    submit: "Submit application",
  },
} as const;
