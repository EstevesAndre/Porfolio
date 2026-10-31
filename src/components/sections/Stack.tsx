import { Reveal } from "@/components/motion/Reveal";
import { TechLogo } from "@/components/site/logos";
import { SectionHead } from "@/components/site/ui";
import { stack } from "@/content/stack";

export function Stack() {
  return (
    <section id="stack" className="section section-subtle" aria-labelledby="stack-title">
      <div className="container">
        <Reveal>
          <SectionHead
            id="stack-title"
            title="Technologies"
            lead="The tools I build and ship with, and what I use each one for."
          />
        </Reveal>
        <div className="stack">
          {stack.map((group, index) => (
            <Reveal key={group.name} delay={index * 0.06} className="stack-group">
              <h3>{group.name}</h3>
              <ul className="tech-grid">
                {group.items.map((tech) => (
                  <li key={tech.name} className="tech" data-exploring={tech.exploring ? "" : undefined}>
                    <TechLogo tech={tech} />
                    <span className="tech-text">
                      <span className="tech-name">
                        {tech.name}
                        {tech.exploring ? <span className="tech-note">Exploring</span> : null}
                      </span>
                      <span className="tech-use">{tech.usedFor}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
