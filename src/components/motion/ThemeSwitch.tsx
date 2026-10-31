"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "./theme";

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
};

const readTheme = () => document.documentElement.dataset.theme ?? "light";

function applyTheme(value: string) {
  document.documentElement.dataset.theme = value;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, value);
  } catch {
    // Storage can be unavailable; the theme still applies for this visit.
  }
}

/** Sweeps the new theme across the page like a coat of paint, where the browser supports it. */
function paintTheme(value: string) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduced) {
    applyTheme(value);
    return;
  }
  const transition = document.startViewTransition(() => applyTheme(value));
  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          "polygon(0 0, 0 0, 0 0, 0 0)",
          "polygon(0 0, 100% 0, 100% 0, 0 100%)",
          "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ],
        offset: [0, 0.55, 1],
      } as PropertyIndexedKeyframes,
      { duration: 800, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
    );
  });
}

/** One button whose sun and moon trade places. The choice is remembered for the next visit. */
export function ThemeSwitch() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "light");
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${next} theme`}
      onClick={() => paintTheme(next)}
    >
      <Sun className="theme-icon theme-icon-sun" aria-hidden="true" />
      <Moon className="theme-icon theme-icon-moon" aria-hidden="true" />
    </button>
  );
}
