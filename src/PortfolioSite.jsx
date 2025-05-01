import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './components/Homepage/HomePage';
import DigitalProjects from './components/ProjectSections/DigitalProjects';
import PhysicalProjects from './components/ProjectSections/PhysicalProjects';
import HobbyProjects    from './components/ProjectSections/HobbyProjects';
import ContactPage from './components/ContactPage';


export default function PortfolioSite() {
  const [section, setSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [showSARAModal, setShowSARAModal] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const Section = ({ children }) => (
    <motion.div
      className="p-8 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-300 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
     <header className={`transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex justify-between items-center p-6 shadow-md sticky top-0 z-50`}>
        <h1 className="text-xl font-bold">Logan Wilson</h1>
        <nav className="space-x-4 flex items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className={`relative px-1 after:block after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center ${section === item.id ? 'underline' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-2 py-1 border rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      {section === 'home' && (
        <HomePage
          darkMode={darkMode}
           onNavigate={(to) => setSection(to)}
         />
     )}

      {section === 'resume' && (
        <Section>
                    <div className="text-center mb-6">
            <h2 className="text-4xl font-bold mb-2">Resume</h2>
          </div>

          <div className="md:flex md:items-start md:space-x-10">
            <div className="md:w-3/4">
              <div className="space-y-10 text-center md:text-left">

                <div>
                  <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364-6.364l1.414-1.414M6.222 6.222L4.808 4.808m12.728 12.728l1.414 1.414M6.222 17.778l-1.414 1.414"/></svg>
                    Skills
                  </h3>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm leading-tight">
                    <div><strong className="flex items-center gap-1 mb-1">🛡️ Security & IT Operations:</strong>Microsoft Sentinel, Defender XDR, Entra ID, SCCM, VirusTotal, AbuseIPDB, SOC Operations</div>
                    <div><strong className="flex items-center gap-1 mb-1">🖥️ Systems & Admin:</strong>Azure AD, ADUC, SharePoint, Google Workspace, JAMF, Android Studio, OneCard, SCCM</div>
                    <div><strong className="flex items-center gap-1 mb-1">💻 Languages & Scripting:</strong>PowerShell, JavaScript, Python, Bash, Google Apps Script, Terminal 4 CMS</div>
                    <div><strong className="flex items-center gap-1 mb-1">🔍 Security Tools & Testing:</strong>Palo Alto Firewalls, Elisity, Metasploit, Penetration Testing, Network Segmentation</div>
                    <div><strong className="flex items-center gap-1 mb-1">🏗️ Engineering & CAD:</strong>AutoCAD, Inventor, Core Sampling, 3D Modeling, Lab Equipment</div>
                    <div><strong className="flex items-center gap-1 mb-1">⚙️ Automation & Productivity:</strong>Power Automate, AIMS, Google Apps Script, Workflow Documentation, Technical Reporting</div>
                    <div><strong className="flex items-center gap-1 mb-1">📊 Other Tools & Competencies:</strong>Technical Project Management, Purchase Reconciliation, Digital Marketing, Website Maintenance</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">Experience</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <strong>Information Security Analyst, MO S&T</strong> — <em>Feb 2022–Present</em><br />
                      • Lead analyst for identity management and ticket triage. Oversaw more than half (850+) of team cases in 2024<br />
                      • Conducted vendor risk assessments and BPM12004 software requests<br />
                      • Vulnerability / risk management, & compliance for regulations such as CUI, PCI, HIPAA, NIST 800-171, NIST 800-172, ITAR, and NERC<br />
                      • Incident response / triage and threat hunting in SOC via Sentinel & Defender XDR<br />
                      • Create process documentation & technical incident reports <br />
                      • Set up and maintain network microsegmentation via Elisity <br />
                      • Configure and manage Palo Alto firewall <br />
                      • Supervise and train of student employees<br />
                      • Engineer security solutions for high level grant / research environments<br />
                      • Microsoft enterprise application registration and magement <br />
                    </div>
                    <div>
                      <strong>System Support Analyst, MO S&T</strong> — <em>Jul 2021–Feb 2022</em><br />
                      • Fully rebuild compromised machines with secure imaging workflows.<br />
                      • Apple / Dell hardware repairs and maintenance of relevant certifications<br />
                      • Proficiency in system security vulnerabilities, remediation processes, and network / web-related protocols <br />
                      • Reconfigure and maintain various types of research systems<br />
                      • Work with tools like AIMS, Azure, Defender, & JAMF <br />
                      • Consult with users regarding purchases and technical specifications<br />
                      • Maintain compliance with standards such as FERPA, HIPAA, PII<br />
                    </div>
                    <div>
                      <strong>Engineering Technician, MO S&T</strong> — <em>May 2019–Jul 2021</em><br />
                      • Maintain lab security, budget tracking, inventory systems.<br />
                      • Introduced Power Automate & Google Apps Scripts automation for lab logistics<br />
                      • Supervision of laboratory student workers and large scale testing<br />
                      • Created scalable system for laboratory, material, and financial tracking<br />
                      • OneCard purchase requisitioning and financial management<br />
                      • Terminal 4 website maintenance and development <br />
                      • Managed scheduling / supervision of laboratory equipment and use<br />
                    </div>
                    <div>
                      <strong>Field Technician, Master Contractors</strong> — <em>Jul 2016–May 2019</em><br />
                      • 3D modeling of architectural structures and documentation of repairs<br />
                      • Assisted in DOD/DOT infrastructure compliance projects<br />
                      • Created invoices, reconciliation, & financial filing <br />
                      • Perform concrete core sampling & structural bridge repair in compliance with DOT standards<br />
                      • Frequent travel to project locations and communication with third-party technical teams<br />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2">Education</h3>
                  <p className="text-sm">A.S. Engineering, East Central College — 2023</p>
                  <p className="text-sm">High School Diploma, Rolla Sr. High — 2019</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block md:w-1/4">
             <div className="sticky top-28 w-full flex flex-col items-center gap-8">
                {/* Orb */}
               <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg" />

               {/* Animated Hire Me Button */}
               <a
                 href="mailto:logans.automation@gmail.com"
                  className="inline-block px-6 py-2 mt-2 bg-blue-600 text-white font-semibold rounded shadow-md 
                             hover:scale-105 hover:shadow-lg hover:bg-blue-700 
                             transition-transform transition-shadow duration-300 ease-in-out"
                >
                 ✉️ Hire Me
               </a>

                {/* Certifications */}
                <div className="text-sm text-left mt-2">
                  <h4 className="text-lg font-semibold mb-1">Certifications</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Ethical Hacker Pro – TestOut Corporation</li>
                    <li>ICS Cybersecurity (101–202) – INL</li>
                    <li>CISSP Training: Assessment & Testing – Skillsoft</li>
                    <li>System Diagnostics – Microsoft & Apple</li>
                    <li>White Belt – Lean Six Sigma</li>
                    <li>Digital Marketing – Google</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>

        </Section>
      )}

{section === 'projects' && (
  <Section>
    {/* Section title */}
   <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-8">
     Projects
   </h2>

   {/* Delegated to your composite ProjectPage */}
      <DigitalProjects   darkMode={darkMode} />
      <hr className="my-8 border-gray-200 dark:border-gray-700" />
      <PhysicalProjects  darkMode={darkMode} />
      <hr className="my-8 border-gray-200 dark:border-gray-700" />
      <HobbyProjects     darkMode={darkMode} />
  </Section>
)}
      {section === 'contact' && (
        <ContactPage darkMode={darkMode} />
      )}

      <footer className="text-center py-8 text-sm opacity-70">
        © {new Date().getFullYear()} Logan Wilson. Crafted with React & Tailwind.
      </footer>
    </div>
    </div>
  );
  
  }
