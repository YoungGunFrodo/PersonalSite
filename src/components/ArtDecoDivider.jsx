// src/components/SimpleDivider.jsx
import React from 'react';
import { Sparkles } from 'lucide-react';  // or any icon you like

export default function SimpleDivider({ className = '' }) {
  return (
    <div className={`flex items-center my-12 ${className}`}>
      {/* left line */}
      <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
      
      {/* icon in the middle */}
      <div className="px-4 text-gray-500 dark:text-gray-400 animate-pulse">
        <Sparkles size={24} />
      </div>
      
      {/* right line */}
      <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
    </div>
  );
}
