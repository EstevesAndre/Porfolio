import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section not-found" aria-labelledby="not-found-title">
      <div className="container">
        <h1 id="not-found-title" className="section-title">
          This page doesn&apos;t exist
        </h1>
        <Link className="button button-primary" href="/">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
