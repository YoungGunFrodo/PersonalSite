// components/TechPulseDivider.jsx
import React from 'react';

export const TechPulseDivider = () => {
  return (
    <div className="relative w-full h-12 overflow-hidden my-8">
      <svg
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
      >
        <defs>
          <linearGradient id="crissPulse" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#60a5fa">
              <animate
                attributeName="offset"
                values="1;0"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <path
          d="M0,3 L10,3 L15,6 L20,3 L25,6 L30,3 L35,6 L40,3 L45,6 L50,3 L55,6 L60,3 L65,6 L70,3 L75,6 L80,3 L85,6 L90,3 L95,6 L100,3"
          stroke="#000"
          strokeWidth="0.4"
          fill="none"
        />
        <path
          d="M0,9 L10,9 L15,6 L20,9 L25,6 L30,9 L35,6 L40,9 L45,6 L50,9 L55,6 L60,9 L65,6 L70,9 L75,6 L80,9 L85,6 L90,9 L95,6 L100,9"
          stroke="#000"
          strokeWidth="0.4"
          fill="none"
        />
        <circle r="0.8" fill="#3b82f6">
          <animateMotion dur="4s" repeatCount="indefinite">
            <mpath xlinkHref="#line1" />
          </animateMotion>
        </circle>
        <circle r="0.8" fill="#3b82f6">
          <animateMotion dur="4s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1">
            <mpath xlinkHref="#line2" />
          </animateMotion>
        </circle>
        <path
          id="line1"
          d="M0,3 L10,3 L15,6 L20,3 L25,6 L30,3 L35,6 L40,3 L45,6 L50,3 L55,6 L60,3 L65,6 L70,3 L75,6 L80,3 L85,6 L90,3 L95,6 L100,3"
          fill="none"
        />
        <path
          id="line2"
          d="M0,9 L10,9 L15,6 L20,9 L25,6 L30,9 L35,6 L40,9 L45,6 L50,9 L55,6 L60,9 L65,6 L70,9 L75,6 L80,9 L85,6 L90,9 L95,6 L100,9"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default TechPulseDivider;
