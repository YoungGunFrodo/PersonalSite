// src/components/projectsections/PhysicalProjects.jsx
import React, { useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PhysicalProjects({ darkMode }) {
  const leaves = useMemo(() => Array.from({ length: 20 }), []);
  const carouselRef = useRef(null);
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      id: 'desk',
      title: 'Digital Drafting Table',
      description: 'Drafting table with integrated PC setup',
      details: `
• Solid-wood box table with powder-coated steel legs  
• Hinged, adjustable-angle drawing surface  
• Embedded monitor inset into the tilt-up panel  
• Hidden internal bay for full-tower PC  
      `.trim(),
    },
    {
      id: 'pantry',
      title: 'Custom Pantry',
      description: 'Pantry cabinetry seamlessly integrated around fridge',
      details: `
• Full-height pantry cabinet along right side  
• Two upper cabinets above fridge  
• Wine rack on top-left  
• Slide-out multi-shelf spice rack at bottom-left  
      `.trim(),
    },
    {
      id: 'soon',
      title: 'More Coming Soon',
      description: 'Stay tuned for future physical builds!',
      details: `More exciting projects on the way…`.trim(),
    },
  ];

  const advance = (dir) => {
    const c = carouselRef.current;
    if (!c) return;

    // scroll by half the container width
    const scrollAmount = c.clientWidth / 2;
    let newPos = c.scrollLeft + dir * scrollAmount;
    const maxScroll = c.scrollWidth - c.clientWidth;

    // wrap
    if (newPos > maxScroll) newPos = 0;
    if (newPos < 0) newPos = maxScroll;

    c.scrollTo({ left: newPos, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .leaf {
          position: absolute;
          top: -24px;
          width: 24px;
          height: 24px;
          background: url('/images/leaf.png') no-repeat center/contain;
          opacity: 0;
          animation-name: leafFallDrift;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes leafFallDrift {
          0%   { transform: translate(0, -24px) rotate(0deg); opacity: 0; }
          10%  { opacity: 1; }
          50%  { transform: translate(10px, 50vh) rotate(180deg); }
          100% { transform: translate(20px, 100vh) rotate(360deg); opacity: 1; }
        }
      `}</style>

      <section
        className={`
          relative overflow-hidden py-16
          bg-[url('/images/physical-day.png')] dark:bg-[url('/images/physical-night.png')]
          bg-cover bg-center
        `}
      >
        {/* falling leaves */}
        <div className="absolute inset-0 pointer-events-none">
          {leaves.map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            const dur = 5 + Math.random() * 5;
            return (
              <div
                key={i}
                className="leaf"
                style={{
                  left: `${left}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${dur}s`,
                }}
              />
            );
          })}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-green-900'}`}>
            Physical Projects
          </h2>

          <div className="relative">
            <button
              type="button"
              onClick={() => advance(-1)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 hover:scale-110 transition"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => advance(1)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-20 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 hover:scale-110 transition"
            >
              ›
            </button>

            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
              style={{ scrollPadding: '0 2rem' }}
            >
              {projects.map((proj) => (
                <motion.div
                  key={proj.id}
                  onClick={() => setModalProject(proj)}
                  className={`
                    flex-shrink-0 snap-center w-[calc(50%-1rem)]
                    rounded-lg p-6 shadow-lg cursor-pointer
                    bg-green-100/80 dark:bg-gray-800/80 backdrop-blur-sm
                    text-green-900 dark:text-white
                  `}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                  <p className="text-sm">{proj.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {modalProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-lg w-full text-gray-900 dark:text-white overflow-y-auto max-h-[90vh] relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setModalProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold mb-4">{modalProject.title}</h3>
                <div className="prose prose-green dark:prose-invert max-w-none">
                  {modalProject.details.split('\n').map((line, i) => (
                    <p key={i}>{line.trim()}</p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
