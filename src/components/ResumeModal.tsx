import { motion, AnimatePresence } from "motion/react";
import { X, Printer, Copy, Check, Mail, Linkedin, MapPin, ExternalLink, Download } from "lucide-react";
import { useState } from "react";
import { PERSONAL_DETAILS, EDUCATION_TIMELINE, CERTIFICATIONS, SKILL_CATEGORIES, LANGUAGES } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800 z-10 print:max-h-none print:shadow-none print:border-none print:rounded-none"
          >
            
            {/* Modal Header Actions (Hidden when printing) */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 print:hidden">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Professional Curriculum Vitae
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  ATS-Friendly Structure • Lavanya D
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 text-xs font-bold font-mono shadow-sm cursor-pointer transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied Email!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold font-mono shadow-sm cursor-pointer transition-all"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-all ml-1"
                  aria-label="Close resume viewer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resume Content Sheet */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 print:overflow-visible print:p-0">
              <div className="max-w-3xl mx-auto flex flex-col gap-8 print:text-black">
                
                {/* 1. Header Contact block */}
                <div className="text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-slate-200 dark:border-slate-800 pb-6 print:border-black">
                  <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {PERSONAL_DETAILS.name}
                    </h1>
                    <p className="text-sm font-bold text-blue-600 dark:text-sky-400 font-mono uppercase mt-1">
                      {PERSONAL_DETAILS.title}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-300 text-left sm:text-right font-mono shrink-0">
                    <div className="flex items-center sm:justify-end gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <a href={`mailto:${PERSONAL_DETAILS.email}`} className="hover:underline">
                        {PERSONAL_DETAILS.email}
                      </a>
                    </div>
                    <div className="flex items-center sm:justify-end gap-2">
                      <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                      <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                        linkedin.com/in/lavanyad
                      </a>
                    </div>
                    <div className="flex items-center sm:justify-end gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{PERSONAL_DETAILS.location}</span>
                    </div>
                  </div>
                </div>

                {/* 2. Professional Summary */}
                <div>
                  <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1 mb-3 print:border-black">
                    Professional Summary
                  </h2>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {PERSONAL_DETAILS.description}
                  </p>
                </div>

                {/* 3. Academic Background */}
                <div>
                  <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1 mb-4 print:border-black">
                    Education
                  </h2>
                  <div className="flex flex-col gap-4">
                    {EDUCATION_TIMELINE.map((edu, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
                        <div>
                          <h3 className="text-sm font-extrabold text-slate-800 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="text-left sm:text-right font-mono text-xs shrink-0 mt-1 sm:mt-0">
                          <span className="font-bold text-slate-800 dark:text-white bg-slate-50 dark:bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200/50 dark:border-slate-700/50">
                            {edu.metric}
                          </span>
                          <span className="block text-[10px] text-slate-400 dark:text-slate-500 mt-1">
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Technical Skills */}
                <div>
                  <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1 mb-4 print:border-black">
                    Core Technical Skills
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SKILL_CATEGORIES.map((cat) => (
                      <div key={cat.title}>
                        <h4 className="text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                          {cat.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.items.map((skill) => (
                            <span
                              key={skill.name}
                              className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/40 px-2 py-0.5 rounded-md"
                            >
                              {skill.name} <span className="text-[10px] text-slate-400">({skill.level})</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Certifications */}
                <div>
                  <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1 mb-4 print:border-black">
                    Certifications
                  </h2>
                  <div className="flex flex-col gap-3">
                    {CERTIFICATIONS.map((cert, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                            {cert.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                            {cert.description}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-sky-400 bg-blue-500/5 px-2 py-0.5 rounded-md border border-blue-500/10 shrink-0 mt-1.5 sm:mt-0">
                          {cert.issuer}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Languages & Interests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1 mb-3 print:border-black">
                      Languages
                    </h2>
                    <div className="flex flex-wrap gap-1.5">
                      {LANGUAGES.map((lang) => (
                        <span
                          key={lang.name}
                          className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 px-2.5 py-1 rounded-md"
                        >
                          <strong>{lang.name}</strong> • <span className="text-[10px] text-slate-400">{lang.level}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-sm font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1 mb-3 print:border-black">
                      Academic Focus Areas
                    </h2>
                    <div className="flex flex-wrap gap-1.5">
                      {["Cloud Virtualization", "Linux Architecture", "Containerization", "Database Administration", "Networks Management"].map((focus) => (
                        <span
                          key={focus}
                          className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 px-2.5 py-1 rounded-md"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Footer Actions (Hidden when printing) */}
            <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between print:hidden">
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                Click "Print / Save PDF" to download as local ATS resume PDF.
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold font-mono cursor-pointer transition-all"
              >
                Close CV
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
