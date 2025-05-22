// src/components/projectsections/LongTermProjects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';

export default function LongTermProjects({ darkMode }) {
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      id: 'resolute',
      title: 'Resolute IT Systems LLC (1.5 yr)',
      description:
        'Co-founded an MSP offering a wide range of IT services to multiple clients (2021–2022).',
      details: `
**Company:** Resolute IT Systems LLC  
**Timeline:** 2021–2022  
**Role:** Co-Founder & Lead Operations Engineer  

**What we did**  
- Designed and deployed managed IT infrastructure (networks, servers, endpoint management)  
- Implemented Microsoft Sentinel & XDR monitoring solutions  
- Automated workflows with PowerShell and Google Apps Script  
- Designed and deployed custom webpages and ecommerce platforms
- Provided 24/7 support and vulnerability management  
- Managed cloud migrations and hybrid on-prem/Azure environments  

**Outcome**  
After my departure in mid 2022, the company operated until late 2024 before winding down operations.  

**Website**  
[Visit resoluteitsystems.com](https://resoluteitsystems.com/)  
      `,
    },
     {
      id: 'aurelian',
      title: 'Aurelian Trading Company (⩽6 mo)',
      description:
        'Online gemstone & jewelry shop on Etsy (2024–Present).',
      details: `
**Company:** Aurelian Trading Company  
**Timeline:** 2024–Present  
**Role:** Founder & Operations Lead  

**What we do**  
- Curate and sell natural precious and semi-precious gemstones  
- Handcraft gemstone jewelry using sustainable materials  
- Manage inventory, order fulfillment, and customer outreach  
- Run Etsy-based e-commerce platform & marketing campaigns  
 

**Shop**  
[aureliantradingco.etsy.com](https://aureliantradingco.etsy.com/)
      `,
    },
  ];

  return (
    <section
      className={clsx(
        'relative overflow-hidden py-16 bg-cover bg-center',
        darkMode
          ? "bg-[url('/images/longterm-night.png')]"
          : "bg-[url('/images/longterm-day.png')]"
      )}
    >
      {/* ↓ Removed the faded overlay so banner is full-strength */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Long-Term Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              onClick={() => setModalProject(proj)}
              className={clsx(
                'rounded-lg p-6 shadow-lg cursor-pointer transform transition hover:scale-105',
                // backdrop-blur + translucent so card pops over banner
                darkMode
                  ? 'bg-gray-800/60 text-white backdrop-blur-sm'
                  : 'bg-white/80 text-gray-900 backdrop-blur-sm'
              )}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProject(null)}
          >
            <motion.div
              className={clsx(
                'relative p-8 rounded-lg shadow-xl max-w-3xl w-full',
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              )}
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
              <h3 className="text-2xl font-bold mb-4">
                {modalProject.title}
              </h3>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <ReactMarkdown>{modalProject.details}</ReactMarkdown>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
