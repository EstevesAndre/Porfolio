"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ease } from "./Reveal";

/*
 * A reconstructed, anonymised axonometric drawing: product surfaces resting on
 * shared building blocks, with older views lifted into them over time.
 * It describes the shape of the work, not KAYAK's internal architecture.
 * Layers assemble from the bottom up when the drawing scrolls into view.
 */

const SHEAR = "matrix(1 0 0.8 1 0 0)";

function Plane({ y, order, children }: { y: number; order: number; children: ReactNode }) {
  return (
    <motion.g
      variants={{
        hidden: { opacity: 0, y: 36 },
        shown: { opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: order * 0.22 } },
      }}
    >
      <g transform={`translate(110 ${y}) ${SHEAR}`}>
        <rect width="480" height="120" className="d-plane" />
        {children}
      </g>
    </motion.g>
  );
}

const draw = (delay: number) => ({
  hidden: { pathLength: 0, opacity: 0 },
  shown: { pathLength: 1, opacity: 1, transition: { duration: 0.9, ease, delay } },
});

export function KayakDiagram() {
  return (
    <motion.svg
      viewBox="0 0 900 640"
      className="diagram"
      role="img"
      aria-label="Diagram: product surfaces built on shared components, with older views modernized over time"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-15% 0px" }}
    >
      <defs>
        <pattern id="kayak-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0V7" className="d-hatch" />
        </pattern>
      </defs>

      <g className="d-guide">
        {[110, 590, 206, 686].map((x, index) => (
          <path key={x} d={`M${x} ${index < 2 ? 80 : 200} V ${index < 2 ? 480 : 600}`} />
        ))}
      </g>

      <Plane y={480} order={0}>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <rect
            key={index}
            x={24 + index * 74}
            y="28"
            width="58"
            height="64"
            className={index % 2 === 0 ? "d-old" : "d-old-empty"}
          />
        ))}
      </Plane>

      <Plane y={280} order={1}>
        {Array.from({ length: 12 }, (_, index) => (
          <rect
            key={index}
            x={24 + (index % 6) * 74}
            y={20 + Math.floor(index / 6) * 46}
            width="58"
            height="34"
            className={index % 5 === 0 ? "d-solid" : "d-block"}
          />
        ))}
      </Plane>

      <Plane y={80} order={2}>
        <rect x="24" y="22" width="200" height="76" className="d-solid" />
        <rect x="248" y="22" width="208" height="76" className="d-block" />
      </Plane>

      <g className="d-arrow">
        <motion.path d="M232 520 C 232 470 262 430 262 404" variants={draw(0.9)} />
        <motion.path d="M528 520 C 528 470 556 430 556 404" variants={draw(1.05)} />
      </g>

      <g className="d-accent">
        <motion.path d="M640 136 H 712" variants={draw(1.3)} />
        <motion.path d="M650 336 H 712" variants={draw(1.4)} />
        <motion.path d="M660 536 H 712" variants={draw(1.5)} />
      </g>
      <motion.g
        className="d-label"
        variants={{ hidden: { opacity: 0 }, shown: { opacity: 1, transition: { delay: 1.5, duration: 0.6 } } }}
      >
        <text x="722" y="132">
          Product surfaces
        </text>
        <text x="722" y="152" className="d-label-muted">
          Trips, for Business
        </text>
        <text x="722" y="332">
          Shared building
        </text>
        <text x="722" y="352">
          blocks
        </text>
        <text x="722" y="532">
          Older views,
        </text>
        <text x="722" y="552">
          modernized
        </text>
      </motion.g>
    </motion.svg>
  );
}
