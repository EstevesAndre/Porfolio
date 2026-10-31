import { Bot, Component, Layers, Plug, Users, Workflow, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/site/ui";
import { skills, type SkillIcon } from "@/content/skills";

const icons: Record<SkillIcon, LucideIcon> = {
  layers: Layers,
  component: Component,
  workflow: Workflow,
  plug: Plug,
  bot: Bot,
  users: Users,
};

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <SectionHead id="skills-title" title="What I bring" lead="The things teams and clients count on me for." />
        </Reveal>
        <ul className="skills">
          {skills.map((skill, index) => {
            const Icon = icons[skill.icon];
            return (
              <Reveal as="li" key={skill.title} delay={(index % 3) * 0.08} className="skill">
                <span className="skill-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{skill.title}</h3>
                <p>{skill.body}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
