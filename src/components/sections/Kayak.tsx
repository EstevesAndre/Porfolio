import { KayakDiagram } from "@/components/motion/KayakDiagram";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/site/ui";
import { kayak } from "@/content/projects";

export function Kayak() {
  return (
    <article id="kayak" className="section section-subtle project" aria-labelledby="kayak-title">
      <div className="container">
        <Reveal>
          <SectionHead as="h3" id="kayak-title" title={kayak.name} lead={kayak.summary} badges={kayak.badges} />
        </Reveal>
        <div className="split">
          <Reveal className="frame split-media">
            <KayakDiagram />
            <p className="caption">Reconstructed and anonymised, not internal architecture.</p>
          </Reveal>
          <Reveal delay={0.1} className="split-text">
            <ul className="highlights">
              {kayak.highlights.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="caption">{kayak.note}</p>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
