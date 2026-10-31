import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { publishedLinks, site } from "@/content/site";

function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "Senior software engineer and founder",
    description: site.description,
    worksFor: { "@type": "Organization", name: "Horaizen" },
    sameAs: publishedLinks().map((link) => link.href),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <Hero />
      <About />
      <Work />
      <Experience />
    </>
  );
}
