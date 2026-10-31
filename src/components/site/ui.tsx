import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Shot } from "@/content/types";

export function Badges({ items, className }: { items: readonly string[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <ul className={`badges ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="badge">
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Text link with a small arrow that nudges on hover. External links get the diagonal arrow. */
export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const external = /^https?:\/\//.test(href);
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <a
      className={`arrow-link ${className ?? ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <Icon className="arrow-link-icon" aria-hidden="true" />
    </a>
  );
}

export function SectionHead({
  id,
  title,
  lead,
  badges,
  as: Heading = "h2",
}: {
  id: string;
  title: string;
  lead?: string;
  badges?: readonly string[];
  /** Projects inside the Work section use h3 under the section's h2. */
  as?: "h2" | "h3";
}) {
  return (
    <header className="section-head">
      {badges ? <Badges items={badges} /> : null}
      <Heading id={id} className={Heading === "h3" ? "section-title project-title" : "section-title"}>
        {title}
      </Heading>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </header>
  );
}

/** A product capture, in a browser-like frame or a phone frame. */
export function ShotImage({ shot, priority, sizes }: { shot: Shot; priority?: boolean; sizes: string }) {
  return (
    <div className={`shot ${shot.device === "phone" ? "shot-phone" : ""}`}>
      <Image
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={shot.alt}
        sizes={sizes}
        priority={priority}
        quality={85}
      />
    </div>
  );
}
