import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { NavShell } from "@/components/motion/NavShell";
import { ThemeSwitch } from "@/components/motion/ThemeSwitch";
import { about, nav, site } from "@/content/site";
import { publicAsset } from "@/lib/assets";

const initials = site.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export function Nav() {
  const portrait = publicAsset(about.avatar.src);
  return (
    <NavShell>
      <div className="container nav-inner">
        <Link className="nav-name" href="/">
          <span className="avatar">
            {portrait ? <Image src={portrait} alt="" fill sizes="36px" /> : <span aria-hidden="true">{initials}</span>}
          </span>
          {site.name}
        </Link>
        <nav aria-label="Primary" className="nav-links">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>
                  <Plus className="nav-plus" aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-end">
          <a className="button button-ghost button-small nav-cta" href={`mailto:${site.email}`}>
            <Plus className="nav-plus" aria-hidden="true" />
            Get in touch
          </a>
          <ThemeSwitch />
        </div>
      </div>
    </NavShell>
  );
}
