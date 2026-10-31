import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container xp-section">
        <Reveal className="editorial-body">
          <p className="about-label">{experience.label}</p>
          <h2 id="experience-title" className="about-title">
            {experience.title}
          </h2>
          <p className="about-narrative">{experience.lead}</p>
          <ol className="xp">
            {experience.roles.map((item) => (
              <li key={item.org}>
                <div>
                  <h3 className="xp-org">{item.org}</h3>
                  <p className="xp-role">{item.role}</p>
                </div>
                <div className="xp-meta">
                  <p>{item.dates}</p>
                  <p className="xp-place">{item.place}</p>
                </div>
              </li>
            ))}
          </ol>
          <dl className="xp-extra">
            <div>
              <dt>Education</dt>
              <dd>{experience.education}</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>{experience.languages}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
