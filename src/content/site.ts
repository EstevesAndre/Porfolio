import type { Link } from "./types";

/*
 * Personal copy is written in André's voice from what he has shared:
 * Berlin, coming back to Portugal, Horaizen, travel, people, learning.
 * Edit freely — keep it true.
 */

export const site = {
  name: "André Esteves",
  role: "Senior software engineer and founder of Horaizen",
  status: "Open to new roles and projects",
  /** First line muted, second line strong */
  headline: ["Behind every simple screen", "is a hard problem, solved"],
  facts: [
    { label: "Years of experience", value: "5+ years" },
    { label: "Specialized", value: "Senior Software Engineer" },
  ],
  description:
    "André Esteves is a senior software engineer and the founder of Horaizen, building Horaizen Experiences, the booking system for yacht owners in Portugal. Previously product engineering on KAYAK Trips and KAYAK for Business.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Public contact address. */
  email: "andreesteves111@gmail.com",
  year: 2026,
};

/** Profiles appear only once a correct URL is filled in. */
export const links: Link[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/estevesandre123" },
  { label: "Instagram", href: "https://www.instagram.com/andre.stvs/" },
  { label: "GitHub", href: "" },
  { label: "Résumé", href: "" },
];

export const publishedLinks = () => links.filter((link) => link.href.trim() !== "");

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
];

export const about = {
  label: "About me",
  title: "Curious by nature, builder by habit",
  narrative:
    "Years of building software with teams in Berlin taught me how good products are made. Coming back to Portugal reminded me who they are for. Today I build Horaizen for small operators who deserve tools as good as the big players have, and I still get a quiet kick out of watching something I made simply work.",
  happy: {
    title: "What makes me happy",
    items: ["Seeing my work in real use", "Travel and meet new people", "Learning about technology"],
  },
  goals: {
    title: "Where I'm heading",
    items: ["Create products I care about", "Growing Horaizen", "Practical AI that ships"],
  },
  /**
   * Real photographs of André, shown once the files exist in public/about.
   * Never a generated likeness.
   */
  portrait: { src: "/about/portrait-smile.webp", alt: "Portrait of André Esteves" },
  avatar: { src: "/about/avatar-face.webp" },
};

export const contact = {
  title: "Let's build something together",
  body: "I'm open to senior engineering roles and select freelance projects. If you're working on something that matters to real people, I'd love to hear from you.",
};
