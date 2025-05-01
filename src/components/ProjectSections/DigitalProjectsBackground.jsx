// src/components/ProjectSections/DigitalProjectsBackground.jsx
import React from "react";

export default function DigitalProjectsBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Neon gradient */}
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />   {/* sky-blue */}
            <stop offset="50%" stopColor="#f472b6" />  {/* pink */}
            <stop offset="100%" stopColor="#38bdf8" /> {/* back to blue */}
          </linearGradient>
          {/* Soft glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background static wires (very light) */}
        <g stroke="rgba(0,0,0,0.05)" strokeWidth="1" fill="none">
          <path d="M0 200 C200 180 600 220 800 200" />
          <path d="M0 300 C250 320 550 280 800 300" />
          <path d="M0 100 C150  80 650 120 800 100" />
        </g>

        {/* Pulsing neon cables */}
        <g filter="url(#glow)" stroke="url(#neonGradient)" strokeWidth="3" fill="none">
          {[
            { d: "M0 200 C200 180 600 220 800 200", dur: "4s" },
            { d: "M0 300 C250 320 550 280 800 300", dur: "5s" },
            { d: "M0 100 C150  80 650 120 800 100", dur: "6s" },
          ].map(({ d, dur }, i) => (
            <path
              key={i}
              d={d}
              strokeDasharray="300"
              strokeDashoffset="300"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="300"
                to="0"
                dur={dur}
                repeatCount="indefinite"
              />
            </path>
          ))}
        </g>
      </svg>
    </div>
  );
}
