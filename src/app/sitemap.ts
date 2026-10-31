import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { works } from "@/content/works";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...works.map((work) => ({ url: `${site.url}/work/${work.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
