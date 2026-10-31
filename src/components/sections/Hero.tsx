import { Fragment, type CSSProperties } from "react";
import { ChevronDown } from "lucide-react";
import { Backdrop } from "@/components/site/Backdrop";
import { site } from "@/content/site";

export function Hero() {
  let index = 0;
  return (
    <section id="top" className="hero hero-dark" aria-labelledby="hero-title">
      <Backdrop />
      <div className="container hero-copy">
        <h1 id="hero-title" className="hero-title">
          {site.headline.map((line, lineIndex) => (
            <span key={line} className={`hero-line ${lineIndex === 0 ? "hero-line-muted" : ""}`}>
              {line.split(" ").map((word) => (
                <Fragment key={word}>
                  <span className="hero-word" style={{ "--i": index++ } as CSSProperties}>
                    {word}
                  </span>{" "}
                </Fragment>
              ))}
            </span>
          ))}
        </h1>
        <dl className="hero-facts hero-rise" style={{ "--d": "620ms" } as CSSProperties}>
          {site.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <a className="hero-scroll hero-rise" href="#about" aria-label="Scroll to About" style={{ "--d": "900ms" } as CSSProperties}>
        <ChevronDown aria-hidden="true" />
      </a>
    </section>
  );
}
