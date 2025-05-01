// src/components/HomepageExtras.jsx

import React from "react";
import clsx from "clsx";

// --- Animated SVG Background Variants ---

const GearPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
    <g className="animate-spin-slow" stroke="currentColor" fill="none">
      <circle cx="100" cy="100" r="40" strokeWidth="6" />
      <circle cx="100" cy="100" r="20" strokeWidth="2" />
    </g>
  </svg>
);

const HexStitchPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice">
    <path d="M0 50 L20 30 L40 70 L60 30 L80 70 L100 30 L120 70 L140 30 L160 70 L180 30 L200 50" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const FloatingOrbs = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
    <circle cx="50" cy="80" r="4" fill="currentColor">
      <animate attributeName="cy" values="80;60;80" dur="6s" repeatCount="indefinite" />
    </circle>
    <circle cx="150" cy="120" r="6" fill="currentColor">
      <animate attributeName="cy" values="120;140;120" dur="5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// --- Card Component ---

const Card = ({ title, description, children, variant = "none" }) => {
  const background = {
    gears: <GearPattern />,
    hex: <HexStitchPattern />,
    orbs: <FloatingOrbs />,
    none: null,
  }[variant];

  return (
    <div className="relative overflow-hidden rounded-lg p-6 shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      {background}
      <h3 className="text-xl font-semibold mb-2 relative z-10">{title}</h3>
      {description && <p className="text-sm mb-2 relative z-10 text-gray-700 dark:text-gray-300">{description}</p>}
      <div className="relative z-10 text-sm text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
};

// --- HomeExtras Grid ---

export const HomepageExtras = () => (
  <div className="mt-12 grid md:grid-cols-2 gap-10">
    <Card title="Currently Working On" variant="hex">
      <ul className="list-disc list-inside">
        <li>Refining my UE5 + Local LLM DM system</li>
        <li>Adding memory to AI assistant projects</li>
        <li>Improving portfolio visual hierarchy + interactivity</li>
      </ul>
    </Card>

    <Card
      title="Collaboration Opportunities"
      description="If you're interested in joining or contributing to anything I'm building, here's what I'm looking for:"
      variant="orbs"
    >
      <ul className="list-disc list-inside">
        <li>Unreal Engine or 3D interface design</li>
        <li>LLM workflow coders (Node, Python, React)</li>
        <li>Cybersecurity enthusiasts (SOC or SIEM background)</li>
        <li>Collaborative visionaries who just want to help build a weird cool future</li>
      </ul>
    </Card>

    <Card title="Thematic System Card (Gears Demo)" variant="gears">
      <ul className="list-disc list-inside">
        <li>Clockwork automation visuals</li>
        <li>Infrastructure loops and feedback</li>
        <li>Custom pipeline triggers</li>
      </ul>
    </Card>
  </div>
);
