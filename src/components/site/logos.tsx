import {
  siClaude,
  siCursor,
  siDocker,
  siExpress,
  siGithub,
  siGithubactions,
  siNestjs,
  siSpring,
  siHetzner,
  siCoolify,
  siPosthog,
  siN8n,
  siGooglecalendar,
  siModelcontextprotocol,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siRedis,
  siStripe,
  siVivawallet,
  siTailwindcss,
  siTurborepo,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import type { CSSProperties } from "react";
import type { Tech } from "@/content/stack";

/** Brand marks from Simple Icons (CC0). Keys are referenced from src/content/stack.ts. */
const logos: Record<string, SimpleIcon> = {
  react: siReact,
  nextjs: siNextdotjs,
  typescript: siTypescript,
  tailwind: siTailwindcss,
  node: siNodedotjs,
  postgresql: siPostgresql,
  prisma: siPrisma,
  redis: siRedis,
  express: siExpress,
  stripe: siStripe,
  vivawallet: siVivawallet,
  googlecalendar: siGooglecalendar,
  turborepo: siTurborepo,
  docker: siDocker,
  github: siGithub,
  githubactions: siGithubactions,
  nestjs: siNestjs,
  spring: siSpring,
  hetzner: siHetzner,
  coolify: siCoolify,
  posthog: siPosthog,
  n8n: siN8n,
  claude: siClaude,
  cursor: siCursor,
  mcp: siModelcontextprotocol,
};

/** Dark brand reds that still read on both backgrounds, kept despite their low luminance. */
const keepColour = new Set(["D50C2D"]);

/** Near-black or near-white brand colours would vanish in one theme; they follow the text colour instead. */
function brandColor(hex: string) {
  if (keepColour.has(hex.toUpperCase())) return `#${hex}`;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.25 || luminance > 0.9 ? "currentColor" : `#${hex}`;
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

export function TechLogo({ tech, className }: { tech: Tech; className?: string }) {
  const icon = tech.logo ? logos[tech.logo] : undefined;
  if (!icon && tech.image) {
    return (
      <span className={`tech-logo tech-image ${className ?? ""}`} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny static brand marks */}
        <img src={tech.image} alt="" width={24} height={24} />
      </span>
    );
  }
  if (!icon) {
    return (
      <span className={`tech-logo tech-monogram ${className ?? ""}`} aria-hidden="true">
        {initials(tech.name)}
      </span>
    );
  }
  return (
    <span
      className={`tech-logo ${className ?? ""}`}
      style={{ "--brand": brandColor(icon.hex) } as CSSProperties}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24">
        <path d={icon.path} />
      </svg>
    </span>
  );
}
