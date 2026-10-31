/**
 * Content model. Facts live in /src/content; components only present them.
 * Only add claims that are true and public — unverified items stay out.
 */

export interface Link {
  label: string;
  /** Leave empty until the correct URL is supplied. Empty links are never rendered. */
  href: string;
}

export interface Shot {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** "phone" renders the capture inside a phone frame. */
  device?: "desktop" | "phone";
}

export interface FlowStep {
  title: string;
  body: string;
  shot: Shot;
}

export interface Highlight {
  title: string;
  body: string;
}
