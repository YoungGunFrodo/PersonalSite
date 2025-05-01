import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PhysicalProjects({ darkMode }) {
  const leaves = useMemo(() => Array.from({ length: 20 }), []);
  const projects = [
    {
      id: 'desk',
      title: 'Digital Drafting Table',
      description: 'Drafting table with integrated pc setup',
      details: "Solid-wood box table with powder-coated steel legs, featuring a hinged, adjustable angle drawing surface with embedded monitor and internal PC bay.",
    },
    // …more cards if desired
  ];

  const [modalProject, setModalProject] = useState(null);

  return (
    <>
      {/* falling‐leaves keyframes */}
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
          0%   { transform: translate(0, -24px) rotate(0deg);        opacity: 0; }
          10%  { opacity: 1; }
          50%  { transform: translate(10px, 50vh) rotate(180deg);     }
          100% { transform: translate(20px, calc(100vh + 24px)) rotate(360deg); opacity: 1; }
        }
      `}</style>

      <section
        className={
          `
          relative overflow-hidden py-16
          bg-[url('/images/physical-day.png')]
          dark:bg-[url('/images/physical-night.png')]
          bg-cover bg-center
        `
        }
      >
        {/* falling leaves */}
        <div className="absolute inset-0 pointer-events-none">
          {leaves.map((_, i) => {
            const left     = Math.random() * 100;
            const delay    = Math.random() * 5;
            const duration = 5 + Math.random() * 5;
            return (
              <div
                key={i}
                className="leaf"
                style={{
                  left:              `${left}%`,
                  animationDelay:    `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              />
            );
          })}
        </div>

        {/* content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-green-900'
            }`}
          >
            Physical Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((proj) => (
              <motion.div
                key={proj.id}
                onClick={() => setModalProject(proj)}
                className="
                  rounded-lg p-6 shadow-lg cursor-pointer
                  bg-green-100/80 dark:bg-gray-800/80
                  backdrop-blur-sm
                  text-green-900 dark:text-white
                "
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-sm">{proj.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* modal */}
        <AnimatePresence>
          {modalProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProject(null)}
            >
              <motion.div
                className="
                  bg-white dark:bg-gray-800
                  p-8 rounded-lg max-w-lg w-full
                  relative text-gray-900 dark:text-white
                "
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setModalProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold mb-4">{modalProject.title}</h3>
                <p className="mb-4">{modalProject.description}</p>
                <p className="text-gray-700 dark:text-gray-300">
                  {modalProject.details}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
