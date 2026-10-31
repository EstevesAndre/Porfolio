import { horaizen, kayak } from "./projects";
import type { Highlight, Shot } from "./types";

/**
 * Selected works. Each one gets a row on the home page and its own page at /work/[slug].
 * Sections and shots are placeholders until André writes the copy and adds captures.
 */
export interface WorkSection {
  title: string;
  paragraphs: string[];
}

/** A gallery row: one full-width capture, or two or three side by side. A slot without a shot shows a placeholder. */
export interface GalleryRow {
  layout: "full" | "two" | "three";
  shots: (Shot | null)[];
}

export interface Work {
  slug: string;
  name: string;
  /** A logo file in public/logos, shown beside the title */
  logo?: string;
  headline: string;
  /** A short line under the headline */
  tagline?: string;
  summary: string;
  tags: string[];
  meta: { label: string; value: string }[];
  /** Background tint behind the cover and gallery captures */
  tint: string;
  cover?: Shot;
  intro: string[];
  sections: WorkSection[];
  highlights?: Highlight[];
  gallery: GalleryRow[];
  /** Names from src/content/stack.ts */
  stack: string[];
  link?: { label: string; href: string };
}

const partnerBookings: Shot = {
  src: "/work/horaizen/app-partner-bookings.webp",
  width: 2876,
  height: 1852,
  alt: "Partner portal listing bookings made by a hotel partner",
};

export const works: Work[] = [
  {
    slug: "horaizen-experiences",
    name: horaizen.name,
    logo: "/logos/horaizen.svg",
    headline: "Horaizen Experiences",
    tagline: "One system to run your reservation business",
    summary: horaizen.summary,
    tags: ["Founder", "B2B SaaS", "Live"],
    meta: [
      { label: "Company", value: "Horaizen" },
      { label: "Industry", value: "Tourism / Booking" },
      { label: "Year", value: "2025 – now" },
      { label: "Role", value: "Founder, product and engineering" },
    ],
    tint: "#e8eef3",
    cover: horaizen.flow[3].shot,
    intro: [horaizen.summary],
    sections: [
      { title: "The challenge", paragraphs: [] },
      { title: "The approach", paragraphs: [] },
      { title: "The outcome", paragraphs: [] },
    ],
    highlights: [...horaizen.flow.map(({ title, body }) => ({ title, body })), ...horaizen.extras],
    gallery: [
      { layout: "full", shots: [{ src: "/work/horaizen/app-analytics.webp", width: 2876, height: 1852, alt: "Analytics with revenue, bookings and booking sources" }] },
      {
        layout: "three",
        shots: [
          { src: "/work/horaizen/mobile-app-analytics.webp", width: 656, height: 1432, alt: "Season analytics on a phone", device: "phone" },
          { src: "/work/horaizen/mobile-app-home.webp", width: 656, height: 1432, alt: "Operator home on a phone, with today's trips", device: "phone" },
          horaizen.flow[0].shot,
        ],
      },
      {
        layout: "full",
        shots: [
          {
            src: "/work/horaizen/app-calendar-month-3.webp",
            width: 2876,
            height: 1852,
            alt: "Month view of the operator calendar with every trip and its bookings",
          },
        ],
      },
      {
        layout: "two",
        shots: [
          {
            src: "/work/horaizen/app-bookings-list.webp",
            width: 2872,
            height: 1854,
            alt: "Bookings list grouped by day, with channel, payment status and seat availability",
          },
          partnerBookings,
        ],
      },
      { layout: "full", shots: [horaizen.flow[1].shot] },
      {
        layout: "two",
        shots: [
          { src: "/work/horaizen/widget-book-date.webp", width: 2876, height: 1852, alt: "Booking widget on a website, choosing a date" },
          { src: "/work/horaizen/widget-book-extras.webp", width: 2876, height: 1852, alt: "Booking widget, adding extras before payment" },
        ],
      },
      {
        layout: "two",
        shots: [
          {
            src: "/work/horaizen/app-statements.webp",
            width: 2872,
            height: 1854,
            alt: "Monthly statements with sales, commission, settlement and documents for each month",
          },
          { src: "/work/horaizen/app-payments.webp", width: 2876, height: 1852, alt: "Payment settings with Viva Wallet and the accepted payment methods" },
        ],
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Stripe",
      "Viva Wallet",
      "GetYourGuide",
      "Viator",
      "MCP",
      "Turborepo",
      "Docker",
      "Playwright",
    ],
    link: horaizen.link,
  },
  {
    slug: "kayak-trips",
    name: "KAYAK Trips",
    logo: "/logos/kayak.jpg",
    headline: "KAYAK Trips",
    summary: "Codebase optimization and modernization, and new features for travellers planning their trips.",
    tags: ["Senior Software Engineer"],
    meta: [
      { label: "Company", value: "KAYAK" },
      { label: "Industry", value: "Travel" },
      { label: "Year", value: "2021 – 2025" },
      { label: "Role", value: "Software Engineer, then Senior" },
    ],
    tint: "#f6ebe4",
    cover: {
      src: "/work/kayak/trips-home.webp",
      width: 2000,
      height: 1289,
      alt: "KAYAK Trips home with travel stats: times around the Earth and top destination",
    },
    intro: [],
    sections: [
      { title: "The challenge", paragraphs: [] },
      { title: "The approach", paragraphs: [] },
      { title: "The outcome", paragraphs: [] },
    ],
    highlights: kayak.highlights,
    gallery: [],
    stack: [],
  },
  {
    slug: "kayak-for-business",
    name: "KAYAK for Business",
    logo: "/logos/kayak.jpg",
    headline: "KAYAK for Business",
    summary: "Corporate travel made simple, with the tools employees need to plan and book trips with ease.",
    tags: ["Senior Software Engineer"],
    meta: [
      { label: "Company", value: "KAYAK" },
      { label: "Industry", value: "Business travel" },
      { label: "Year", value: "2021 – 2025" },
      { label: "Role", value: "Software Engineer, then Senior" },
    ],
    tint: "#ece9f4",
    cover: {
      src: "/work/kayak/business-home.webp",
      width: 2000,
      height: 1290,
      alt: "KAYAK for Business landing page with the hotel search on desktop and the app on a phone",
    },
    intro: [
      "Simplifying corporate travel with the right tools, so employees can plan and book their trips with ease.",
    ],
    sections: [
      { title: "The challenge", paragraphs: [] },
      { title: "The approach", paragraphs: [] },
      { title: "The outcome", paragraphs: [] },
    ],
    highlights: [
      { title: "Frontend architecture", body: "Structured how the product's frontend is built, so features ship cleanly." },
      { title: "Feature development", body: "Built features across booking and trip planning for business travellers." },
      { title: "Connected to KAYAK", body: "Integrated with KAYAK Trips and KAYAK's core platform." },
      { title: "Enterprise dashboards", body: "Dashboards for enterprise customers to manage their company's travel." },
      { title: "Integrations and back office", body: "Complex integrations and the back office dashboards behind them." },
    ],
    gallery: [],
    stack: [],
  },
];

export const findWork = (slug: string) => works.find((work) => work.slug === slug);
