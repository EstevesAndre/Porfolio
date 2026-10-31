import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Work } from "@/content/works";

/** A selected work on the home page, with a "See more" pill on the capture. */
export function WorkRow({ work, index }: { work: Work; index: number }) {
  return (
    <li>
      <Link className="work-row" href={`/work/${work.slug}`}>
        <div className="work-row-text">
          <p className="work-row-index">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="work-row-title">
            <span>{work.name}</span>
          </h3>
          <p className="work-row-summary">{work.summary}</p>
        </div>
        <div className="work-row-media" style={{ "--tint": work.tint } as CSSProperties}>
          {work.tags.length > 1 ? (
            <ul className="work-row-tags">
              {work.tags.slice(1).map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
          {work.cover ? (
            <Image
              className="work-row-cover"
              src={work.cover.src}
              width={work.cover.width}
              height={work.cover.height}
              alt={work.cover.alt}
              sizes="(min-width: 960px) 720px, 100vw"
              quality={85}
            />
          ) : work.logo ? (
            // eslint-disable-next-line @next/next/no-img-element -- small static brand mark
            <img className="work-row-logo" src={work.logo} alt="" width={96} height={96} />
          ) : null}
          <span className="work-row-more" aria-hidden="true">
            See more →
          </span>
        </div>
      </Link>
    </li>
  );
}
