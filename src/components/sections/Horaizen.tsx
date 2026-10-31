import { FlowShowcase } from "@/components/motion/FlowShowcase";
import { Reveal } from "@/components/motion/Reveal";
import { TechLogo } from "@/components/site/logos";
import { ArrowLink, SectionHead } from "@/components/site/ui";
import { horaizen } from "@/content/projects";
import { findTech, horaizenStack } from "@/content/stack";

export function Horaizen() {
  return (
    <article id="horaizen" className="section project" aria-labelledby="horaizen-title">
      <div className="container">
        <Reveal>
          <SectionHead
            as="h3"
            id="horaizen-title"
            title={horaizen.name}
            lead={horaizen.summary}
            badges={horaizen.badges}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <FlowShowcase steps={horaizen.flow} label="How a booking moves through Horaizen Experiences" />
        </Reveal>

        <Reveal className="details">
          <ul className="details-list">
            {horaizen.extras.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="details-meta">
            <div>
              <h3>My role</h3>
              <p>{horaizen.role}</p>
            </div>
            <div>
              <h3>Built with</h3>
              <ul className="logo-chips">
                {horaizenStack.map((name) => {
                  const tech = findTech(name);
                  return tech ? (
                    <li key={name} className="logo-chip">
                      <TechLogo tech={tech} className="tech-logo-small" />
                      {name}
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
            <ArrowLink href={horaizen.link.href}>{horaizen.link.label}</ArrowLink>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
