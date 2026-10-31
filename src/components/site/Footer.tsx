import { Plus } from "lucide-react";
import { Backdrop } from "@/components/site/Backdrop";
import { publishedLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <Backdrop />
      <div className="container">
        <div className="footer-row">
          <p>
            {site.name} {site.year}
          </p>
          <a className="footer-link footer-message" href={`mailto:${site.email}`}>
            <Plus className="nav-plus" aria-hidden="true" />
            send me a message
          </a>
          <div className="footer-end">
            <ul className="footer-links">
              {publishedLinks().map((link) => (
                <li key={link.label}>
                  <a className="footer-link" href={link.href} rel="me noopener" target="_blank">
                    <Plus className="nav-plus" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <svg className="footer-wordmark" viewBox="0 0 1000 152" aria-hidden="true">
          <text x="0" y="149" textLength="1000" lengthAdjust="spacing">
            ESTEVES
          </text>
        </svg>
      </div>
    </footer>
  );
}
