import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/site/ui";
import { about, publishedLinks } from "@/content/site";
import { publicAsset } from "@/lib/assets";

export function About() {
  const links = publishedLinks();
  const portrait = publicAsset(about.portrait.src);
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <div className="about about-frame">
          <Reveal className="about-photo">
            {portrait ? (
              <Image
                src={portrait}
                alt={about.portrait.alt}
                fill
                sizes="(min-width: 960px) 380px, 90vw"
                className="about-photo-image"
              />
            ) : (
              <span className="about-photo-empty" role="img" aria-label="Portrait to come">
                Photo to come
              </span>
            )}
          </Reveal>
          <Reveal delay={0.1} className="about-text">
            <p className="about-label">{about.label}</p>
            <h2 id="about-title" className="about-title">
              {about.title}
            </h2>
            <p className="about-narrative">{about.narrative}</p>
            <div className="about-lists">
              {[about.happy, about.goals].map((list) => (
                <div key={list.title}>
                  <h3>{list.title}</h3>
                  <ul>
                    {list.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {links.length > 0 ? (
              <ul className="about-links">
                {links.map((link) => (
                  <li key={link.label}>
                    <ArrowLink href={link.href}>{link.label}</ArrowLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
