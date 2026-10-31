"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

const TOP_ZONE = 80;
const THRESHOLD = 6;

/**
 * Slides the navigation away while scrolling down and brings it back on the
 * first scroll up. Always visible near the top and whenever it holds focus.
 * While it sits over the dark hero it turns transparent with light text.
 */
export function NavShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  // Re-check on navigation: only the home page has the dark hero.
  const pathname = usePathname();

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const header = ref.current;
      if (!header) return;
      const y = window.scrollY;
      const delta = y - last;
      const hero = document.querySelector<HTMLElement>(".hero-dark");
      header.dataset.over = String(Boolean(hero) && y < (hero?.offsetHeight ?? 0) - header.offsetHeight);
      if (y < TOP_ZONE) header.dataset.hidden = "false";
      else if (delta > THRESHOLD && !header.contains(document.activeElement)) header.dataset.hidden = "true";
      else if (delta < -THRESHOLD) header.dataset.hidden = "false";
      if (Math.abs(delta) > THRESHOLD || y < TOP_ZONE) last = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const reveal = () => {
    if (ref.current) ref.current.dataset.hidden = "false";
  };

  return (
    <header ref={ref} className="nav" data-hidden="false" onFocus={reveal}>
      {children}
    </header>
  );
}
