/**
 * Technologies, with the logo key from src/components/site/logos.ts.
 * Items without a logo render a monogram. Mark experiments as `exploring`.
 */
export interface Tech {
  name: string;
  logo?: string;
  /** A file in public/logos, for brands Simple Icons does not carry */
  image?: string;
  usedFor: string;
  exploring?: boolean;
}

export const stack: { name: string; items: Tech[] }[] = [
  {
    name: "Product",
    items: [
      { name: "React", logo: "react", usedFor: "Product interfaces" },
      { name: "Next.js", logo: "nextjs", usedFor: "Web apps and this site" },
      { name: "TypeScript", logo: "typescript", usedFor: "Typed code across the stack" },
      { name: "Tailwind CSS", logo: "tailwind", usedFor: "Design systems in code" },
      { name: "React Email", image: "/logos/react-email.svg", usedFor: "Transactional email templates" },
    ],
  },
  {
    name: "Backend and data",
    items: [
      { name: "Node.js", logo: "node", usedFor: "APIs, workers and tooling" },
      { name: "PostgreSQL", logo: "postgresql", usedFor: "Relational data models" },
      { name: "Prisma", logo: "prisma", usedFor: "Schema and migrations" },
      { name: "Redis", logo: "redis", usedFor: "Caching and queues" },
      { name: "BullMQ", image: "/logos/bullmq.png", usedFor: "Background jobs" },
      { name: "Express", logo: "express", usedFor: "HTTP services" },
      { name: "NestJS", logo: "nestjs", usedFor: "Structured Node.js services" },
      { name: "Spring", logo: "spring", usedFor: "Java services" },
    ],
  },
  {
    name: "Integrations",
    items: [
      { name: "Stripe", logo: "stripe", usedFor: "Payments and deposits" },
      { name: "Viva Wallet", logo: "vivawallet", usedFor: "Card payments in Europe" },
      { name: "GetYourGuide", image: "/logos/getyourguide.png", usedFor: "Reservation system integration" },
      { name: "Viator", image: "/logos/viator.png", usedFor: "Reservation system integration" },
      { name: "Google Calendar", image: "/logos/google-calendar.svg", usedFor: "Calendar sync" },
    ],
  },
  {
    name: "Shipping",
    items: [
      { name: "Turborepo", logo: "turborepo", usedFor: "Monorepos" },
      { name: "Docker", logo: "docker", usedFor: "Reproducible environments" },
      { name: "GitHub", logo: "github", usedFor: "Review and automation" },
      { name: "GitHub Actions", logo: "githubactions", usedFor: "CI/CD pipelines" },
      { name: "Playwright", image: "/logos/playwright.svg", usedFor: "End-to-end tests" },
      { name: "Hetzner", logo: "hetzner", usedFor: "Hosting" },
      { name: "Coolify", logo: "coolify", usedFor: "Self-hosted deploys" },
      { name: "PostHog", logo: "posthog", usedFor: "Product insights" },
      { name: "Axiom", image: "/logos/axiom.png", usedFor: "Logs and observability" },
    ],
  },
  {
    name: "AI-native",
    items: [
      { name: "Claude Code", logo: "claude", usedFor: "Agentic engineering" },
      { name: "Cursor", logo: "cursor", usedFor: "AI pair programming" },
      { name: "Codex", image: "/logos/codex.svg", usedFor: "Agentic coding" },
      { name: "MCP", logo: "mcp", usedFor: "Connecting assistants to products" },
      { name: "n8n", logo: "n8n", usedFor: "Workflow automation" },
      { name: "Hermes Agent", image: "/logos/hermes-agent.png", usedFor: "Self-hosted agent workflows" },
      { name: "Agent Zero", image: "/logos/agent-zero.png", usedFor: "Autonomous agent experiments" },
    ],
  },
];

/** Horaizen's verified stack, as keys into the list above. */
export const horaizenStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "BullMQ",
  "Stripe",
  "MCP",
  "Turborepo",
  "Docker",
  "Playwright",
];

export const findTech = (name: string) => stack.flatMap((group) => group.items).find((item) => item.name === name);
