import { Fragment, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Backdrop } from "@/components/site/Backdrop";
import { site } from "@/content/site";

export function Hero() {
  const [greeting, statement] = site.headline;
  const words = statement.split(" ");
  return (
    <section id="top" className="hero hero-dark" aria-labelledby="hero-title">
      <Backdrop />
      <div className="container hero-copy">
        <p className="hero-eyebrow hero-rise">{greeting}</p>
        <h1 id="hero-title" className="hero-title">
          {words.map((word, index) => (
            <Fragment key={word}>
              <span className="hero-word" style={{ "--i": index } as CSSProperties}>
                {word}
              </span>{" "}
            </Fragment>
          ))}
        </h1>
        <p className="hero-intro hero-rise" style={{ "--d": "520ms" } as CSSProperties}>
          {site.intro}
        </p>
        <div className="hero-actions hero-rise" style={{ "--d": "620ms" } as CSSProperties}>
          <a className="button button-primary" href={`mailto:${site.email}`}>
            Get in touch
          </a>
          <a className="arrow-link" href="#work">
            See my work
            <ArrowRight className="arrow-link-icon" aria-hidden="true" />
          </a>
        </div>
        <dl className="hero-facts hero-rise" style={{ "--d": "740ms" } as CSSProperties}>
          {site.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
