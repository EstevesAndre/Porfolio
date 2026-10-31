"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { ShotImage } from "@/components/site/ui";
import type { FlowStep } from "@/content/types";
import { ease } from "./Reveal";

const DURATION = 5200;

/**
 * A product walkthrough: steps on one side, the matching screen on the other.
 * Advances on its own while in view; pauses on hover, focus or the pause button.
 */
export function FlowShowcase({ steps, label }: { steps: FlowStep[]; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const running = inView && !reduce && !paused && !hovered;

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => setActive((value) => (value + 1) % steps.length), DURATION);
    return () => window.clearTimeout(id);
  }, [running, active, steps.length]);

  const step = steps[active];

  return (
    <div ref={ref} className="flow" onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      <div className="flow-steps">
        <div role="tablist" aria-label={label} className="flow-list">
          {steps.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                id={`flow-tab-${index}`}
                aria-selected={selected}
                aria-controls="flow-panel"
                className="flow-step"
                onClick={() => setActive(index)}
              >
                <span className="flow-step-title">{item.title}</span>
                <motion.span
                  className="flow-step-body"
                  initial={false}
                  animate={{ height: selected ? "auto" : 0, opacity: selected ? 1 : 0 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <span>{item.body}</span>
                </motion.span>
                <span className="flow-progress" aria-hidden="true">
                  {selected ? (
                    <motion.span
                      key={`${active}-${running}`}
                      className="flow-progress-bar"
                      initial={{ scaleX: running ? 0 : 1 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: running ? DURATION / 1000 : 0, ease: "linear" }}
                    />
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
        {reduce ? null : (
          <button
            type="button"
            className="icon-button flow-toggle"
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? "Play walkthrough" : "Pause walkthrough"}
          >
            {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          </button>
        )}
      </div>

      <div className="frame flow-stage" id="flow-panel" role="tabpanel" aria-labelledby={`flow-tab-${active}`}>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={step.shot.src}
            className={`flow-shot ${step.shot.device === "phone" ? "flow-shot-phone" : ""}`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.6, ease }}
          >
            <ShotImage shot={step.shot} sizes="(min-width: 1024px) 720px, 94vw" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
