import { Reveal } from "@/components/motion/Reveal";
import { WorkRow } from "@/components/work/WorkRow";
import { works } from "@/content/works";

export function Work() {
  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="container">
        <Reveal>
          <h2 id="work-title" className="about-label">
            Selected works
          </h2>
        </Reveal>
        <ol className="work-list">
          {works.map((work, index) => (
            <WorkRow key={work.slug} work={work} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
