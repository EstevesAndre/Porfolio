/** What André brings. `icon` maps to a lucide icon in the Skills section. */
export const skills = [
  {
    icon: "layers",
    title: "Product engineering, end to end",
    body: "From the first sketch to production, and the support inbox after launch.",
  },
  {
    icon: "component",
    title: "Frontend architecture",
    body: "Component systems and modernization on products people use every day.",
  },
  {
    icon: "workflow",
    title: "Making operations simple",
    body: "Turning messy, real-world workflows into software that feels obvious.",
  },
  {
    icon: "plug",
    title: "APIs and integrations",
    body: "Payments, booking channels, calendars and invoicing, connected and reliable.",
  },
  {
    icon: "bot",
    title: "AI-native engineering",
    body: "Agents and MCP servers in my daily work, with my own judgment on every change.",
  },
  {
    icon: "users",
    title: "Working with people",
    body: "Distributed teams, operators and clients: clear communication, shared ownership.",
  },
] as const;

export type SkillIcon = (typeof skills)[number]["icon"];
