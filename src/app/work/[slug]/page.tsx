import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense, type CSSProperties } from "react";
import { TechLogo } from "@/components/site/logos";
import { ArrowLink, ShotImage } from "@/components/site/ui";
import { findTech } from "@/content/stack";
import { findWork, works } from "@/content/works";

const gallerySizes = {
  full: "(min-width: 1200px) 1120px, 100vw",
  two: "(min-width: 960px) 560px, 100vw",
  three: "(min-width: 960px) 370px, 100vw",
};

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const work = findWork((await props.params).slug);
  if (!work) return {};
  return {
    title: work.name,
    description: work.summary,
    alternates: { canonical: `/work/${work.slug}` },
  };
}

export default function WorkPage(props: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <CaseStudy params={props.params} />
    </Suspense>
  );
}

async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const work = findWork((await params).slug);
  if (!work) notFound();

  const tint = { "--tint": work.tint } as CSSProperties;
  const stack = work.stack.map(findTech).filter((tech) => tech !== undefined);
  const sections = work.sections.filter((section) => section.paragraphs.length > 0);

  return (
    <article className="case" aria-labelledby="case-title">
      <header className="container case-head">
        <h1 id="case-title" className="case-title">
          {work.logo ? (
            // eslint-disable-next-line @next/next/no-img-element -- small static brand mark
            <img className="case-logo" src={work.logo} alt="" width={64} height={64} />
          ) : null}
          {work.headline}
        </h1>
        {work.tagline ? <p className="case-tagline">{work.tagline}</p> : null}
        <dl className="case-meta">
          {work.meta.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="case-band" style={tint}>
        <div className="container">
          {work.cover ? (
            <ShotImage shot={work.cover} priority sizes="(min-width: 1200px) 1120px, 100vw" />
          ) : (
            <div className="case-placeholder">
              {work.logo ? (
                // eslint-disable-next-line @next/next/no-img-element -- small static brand mark
                <img src={work.logo} alt="" width={96} height={96} />
              ) : null}
              <p>Screenshots coming soon</p>
            </div>
          )}
        </div>
      </div>

      {work.intro.length > 0 ? (
        <div className="container case-row">
          <div />
          <div className="case-intro">
            {work.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      ) : null}

      {sections.map((section) => (
        <section key={section.title} className="container case-row">
          <h2>{section.title}</h2>
          <div className="case-body">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      {work.highlights && work.highlights.length > 0 ? (
        <section className="container case-row">
          <h2>Highlights</h2>
          <ul className="case-highlights">
            {work.highlights.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {work.gallery.length > 0 ? (
        <div className="case-band" style={tint}>
          <div className="container case-gallery">
            {work.gallery.map((row, rowIndex) => (
              <div key={rowIndex} className={`case-gallery-row case-gallery-${row.layout}`}>
                {row.shots.map((shot, index) =>
                  shot ? (
                    <ShotImage key={shot.src} shot={shot} sizes={gallerySizes[row.layout]} />
                  ) : (
                    <div key={index} className="case-slot" aria-hidden="true">
                      Screenshot
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {stack.length > 0 ? (
        <section className="container case-row">
          <h2>Technologies</h2>
          <ul className="tech-grid case-stack">
            {stack.map((tech) => (
              <li key={tech.name} className="tech">
                <TechLogo tech={tech} />
                <span className="tech-text">
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-use">{tech.usedFor}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {work.link ? (
        <div className="container case-row">
          <div />
          <ArrowLink href={work.link.href}>{work.link.label}</ArrowLink>
        </div>
      ) : null}
    </article>
  );
}
