// src/components/AnimatedCatCard.jsx
import React from "react";
import catImage from "./AnimatedCatCard.css";

export default function AnimatedCatCard() {
    return (
      <div
        className="group relative w-full max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden"
        style={{ height: "300px", backgroundImage: `url(${catImage})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
  
        {/* Card Text Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-center text-white z-10">
          <h3 className="text-2xl font-bold mb-2">Thematic System Card (Cat Demo)</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Animated interaction with yarn ball</li>
            <li>Ghibli-style ambient charm</li>
            <li>Magical creature themes</li>
          </ul>
        </div>
  
        {/* Yarn Ball Animation */}
        <div
          className="absolute bottom-4 left-4 w-4 h-4 bg-purple-400 rounded-full transition-transform duration-700 group-hover:translate-x-[300px] group-hover:rotate-180"
          style={{ zIndex: 20 }}
        ></div>
      </div>
    );
  }
  