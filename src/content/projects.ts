import type { FlowStep, Highlight, Link } from "./types";

/**
 * Horaizen Experiences. Copy mirrors the live product site
 * (horaizenexperiences.com) — keep claims true of the product today.
 */
export const horaizen = {
  name: "Horaizen Experiences",
  badges: ["Founder", "B2B SaaS", "Live"],
  summary:
    "The booking system for yacht owners in Portugal. Direct, OTA, hotel, partner and walk-in bookings, all on one live calendar.",
  role: "Founder. Product, design and engineering, end to end.",
  link: { label: "Visit horaizenexperiences.com", href: "https://horaizenexperiences.com/en" } satisfies Link,
  flow: [
    {
      title: "A guest books on your website",
      body: "The embedded widget shows prices on every date and takes payment, on desktop or phone.",
      shot: {
        src: "/work/horaizen/mobile-widget-book-date.webp",
        width: 656,
        height: 1432,
        alt: "Booking widget on a phone, showing a calendar with prices per date",
        device: "phone",
      },
    },
    {
      title: "Every channel lands on one calendar",
      body: "Website, GetYourGuide, Viator, hotel partners and walk-ins all book the same live availability.",
      shot: {
        src: "/work/horaizen/app-calendar-week-3.webp",
        width: 2876,
        height: 1852,
        alt: "Week view of the operator calendar with bookings from several channels",
      },
    },
    {
      title: "Deposits hold the date",
      body: "Take a deposit at booking and collect the balance later. Every payment stays on the booking record.",
      shot: {
        src: "/work/horaizen/app-booking-details-0.webp",
        width: 2872,
        height: 1856,
        alt: "Booking record with guest details, payments and status",
      },
    },
    {
      title: "Run the day, read the season",
      body: "Each boat's trips for today, the week ahead with its weather, and what the season has earned.",
      shot: {
        src: "/work/horaizen/app-home.webp",
        width: 2876,
        height: 1852,
        alt: "Operator home screen with today's trips, the week ahead and revenue",
      },
    },
  ] satisfies FlowStep[],
  extras: [
    { title: "Partner portal", body: "Hotels and agencies book on live availability with their own login." },
    {
      title: "Payments and invoicing",
      body: "Viva Wallet and Stripe, MB WAY, Apple Pay and Google Pay, invoices sent to TOConline.",
    },
    { title: "Bookable by AI assistants", body: "ChatGPT and Claude Code connect through an MCP server." },
  ] satisfies Highlight[],
};

export const kayak = {
  name: "KAYAK Trips and KAYAK for Business",
  badges: ["Senior Software Engineer", "Frontend", "Shipped"],
  summary:
    "Feature development, frontend architecture and developer experience on KAYAK Trips and KAYAK for Business, from Berlin.",
  highlights: [
    {
      title: "Architecture and modernization",
      body: "Initiated codebase refactoring and a modular frontend architecture.",
    },
    {
      title: "Codebase quality",
      body: "Streamlined components and workflows, reducing unnecessary package code in KAYAK's core application.",
    },
    {
      title: "Developer experience",
      body: "Adopted AI-assisted tools such as Cursor and helped set best practices for team adoption.",
    },
    {
      title: "Team collaboration",
      body: "Worked with engineering and product teams across three continents, with shared ownership.",
    },
  ] satisfies Highlight[],
  note: "Team accomplishments. This describes my contributions to them.",
};
