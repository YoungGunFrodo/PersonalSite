// src/components/projectsections/DigitalProjects.jsx
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import DigitalProjectsBackground from "./DigitalProjectsBackground";

export default function DigitalProjects({ darkMode }) {
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      id: "sara",
      title: "SARA – Software Analysis & Review Assistant",
      description:
        "Locally run cybersecurity tool for software risk assessment and compliance.",
      details: `
### 📄 Description  
SARA is a locally run cybersecurity analysis tool designed to evaluate software requests using a blend of threat intelligence APIs, document parsing, and AI-powered language models. Built for internal IT and security teams, it helps determine whether a software tool is safe and compliant before adoption.

---

### Key Features   
- 🌐 **Web scraping** of vendor security pages  
- 🧠 **AI compliance review** via GPT-4.1 or local Ollama-based LLMs  
- 🛡️ **VirusTotal & AbuseIPDB** threat lookups  
- 📊 **Export** to Word or upload to SharePoint  
- ✅ **Microsoft Graph** integration to review and complete software request forms  
- 🌒 **Tabbed dark mode** UI with step-by-step task tracking  

---

### 🧩 Tech Stack  
**Language & Framework**: Python (PySide6)  
**Models & APIs**: Ollama / GPT-4.1-mini, VirusTotal, AbuseIPDB, Microsoft Graph  
**Packaging**: PyInstaller  

---

### 🔗 Links  
- [GitHub Repo](https://github.com/YoungGunFrodo/SARA-SoftwareAnalysisReviewAssistant)  
- [Latest Release](#)

---

### 🖼️ Screenshots  
\`\`\`html
<img src="/images/sara_main.png" alt="SARA Main UI" class="rounded shadow" />
\`\`\`
      `,
      screenshot: "/images/sara_main.png",
    },
    {
        id: "eleanor",
        title: "Eleanor – AI TTRPG",
        description:
          "A narrative-rich TTRPG style game where the campaign is run by a local Ollama AI model",
        details: `
      ### 📄 Description  
      **Eleanor** is a tabletop roleplaying game that features Eleanor as your AI Dungeon Master. Eleanor currently has basic text-to-speech with plans for future upgrades. Chat history is able to be saved between sessions. 
      ---
      ### Key Features   
      - 🕯️ **Atmospheric lore** with descriptive narrations
      - 🎲 **Dice-driven mechanics** with the players prompted to roll skill checks
      - 🔮 **Dynamic worldbuilding** seeded by player backstories / chat history 
      ---
      ### 📚 Game System  
      Built using Unreal Engine 5 and Ollama  
      ---
      ### 🖼️ Screenshots  
      \`\`\`html
      <img src="/images/eleanor_modal.png" alt="Eleanor TTRPG Moodboard" class="rounded shadow" />
      \`\`\`
        `,
        screenshot: "/images/eleanor_modal.png",
      }
  ];

  return (
    <section
      className={`
        relative overflow-hidden py-16
        bg-[url('/images/dpb-daytime.png')]
        dark:bg-[url('/images/dpb-darkmode.png')]
        bg-cover bg-center
      `}
    >
      <DigitalProjectsBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold mb-8 ${
            darkMode ? "text-white" : "text-blue-900"
          }`}
        >
          Digital Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              onClick={() => setModalProject(proj)}
              className="
                rounded-lg p-6 shadow-lg cursor-pointer
                bg-blue-100/80 text-gray-900
                dark:bg-gray-800/80 dark:text-white
              "
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         onClick={() => setModalProject(null)}
       >
         <motion.div
           className={`
             bg-white dark:bg-gray-800
             p-8 rounded-lg shadow-xl
             max-w-3xl w-full
             text-gray-900 dark:text-white
             grid gap-6
             overflow-y-auto max-h-[90vh]
             grid-rows-[auto_1fr]
           `}
           style={{ gridTemplateRows: "auto 1fr" }}
           initial={{ scale: 0.9 }}
           animate={{ scale: 1 }}
           exit={{ scale: 0.9 }}
           onClick={(e) => e.stopPropagation()}
         >
           {/* Close button */}
           <button
             onClick={() => setModalProject(null)}
             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
           >
             ✕
           </button>
   
           {/* 1) Screenshot at the top */}
           {modalProject.screenshot && (
             <div className="flex justify-center">
               <img
                 src={modalProject.screenshot}
                 alt={`${modalProject.title} screenshot`}
                 className="rounded-lg shadow max-h-[40vh] object-contain"
               />
             </div>
           )}
   
           {/* 2) Markdown description below */}
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
