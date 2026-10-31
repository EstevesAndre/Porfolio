import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/site/ui";
import { contact, publishedLinks, site } from "@/content/site";

export function Contact() {
  const links = publishedLinks();
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact">
          <p className="status-pill status-pill-static">
            <span className="status-dot" aria-hidden="true" />
            {site.status}
          </p>
          <h2 id="contact-title" className="contact-title">
            {contact.title}
          </h2>
          <p className="section-lead">{contact.body}</p>
          <div className="contact-actions">
            <a className="button button-primary button-large" href={`mailto:${site.email}`}>
              Email me
            </a>
            {links.map((link) => (
              <ArrowLink key={link.label} href={link.href}>
                {link.label}
              </ArrowLink>
            ))}
          </div>
          <p className="caption">{site.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
