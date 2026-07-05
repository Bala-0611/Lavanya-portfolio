import { motion } from "motion/react";
import { GraduationCap, Calendar, Building2, Bookmark, Award } from "lucide-react";
import { EDUCATION_TIMELINE } from "../data";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider font-mono mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Pathway
          </motion.div>
          
          <motion.h2
            id="education-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Education History
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full origin-center"
          />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-10">
          
          {/* Vertical central tracking line */}
          <div className="absolute top-2 bottom-2 left-[19px] sm:left-[27px] w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="flex flex-col gap-10">
            {EDUCATION_TIMELINE.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="relative grid grid-cols-1 gap-1"
                >
                  {/* Timeline Glowing Dot */}
                  <div className="absolute -left-[30px] sm:-left-[42px] top-1.5 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-blue-600 dark:border-sky-400 flex items-center justify-center shadow-md shadow-blue-500/10"
                    >
                      <GraduationCap className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-blue-600 dark:text-sky-400" />
                    </motion.div>
                    
                    {/* Ring ping aura for the current active/latest education level */}
                    {idx === 0 && (
                      <span className="absolute w-7 h-7 sm:w-10 sm:h-10 rounded-full border-2 border-blue-500/40 animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Timeline Card */}
                  <motion.div
                    id={`edu-card-${idx}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                    className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:border-blue-500/20 hover:shadow-blue-500/5 transition-all flex flex-col gap-3"
                  >
                    
                    {/* Year Badge & Institution info */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-sky-400 text-xs font-bold font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </div>

                      {/* Score Badge */}
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono border border-emerald-500/20">
                        <Award className="w-3.5 h-3.5" />
                        {item.metric}
                      </div>
                    </div>

                    {/* Degree & Inst text */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white leading-tight">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1.5 font-medium">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span>{item.institution}</span>
                      </div>
                    </div>

                    {/* Extra descriptive items to look complete and professional */}
                    <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex flex-col gap-1.5 border-t border-slate-200/40 dark:border-slate-800/40 pt-3">
                      {idx === 0 && (
                        <>
                          <div className="flex items-center gap-1.5">
                            <Bookmark className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                            <span>Specialization: <strong>Cloud Infrastructure & Architecture</strong></span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Bookmark className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                            <span>Relevant coursework: AWS, Virtualization, Database Engines, Linux Core</span>
                          </div>
                        </>
                      )}
                      {idx === 1 && (
                        <div className="flex items-center gap-1.5">
                          <Bookmark className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>Specialization: Science (PCMB)</span>
                        </div>
                      )}
                      {idx === 2 && (
                        <div className="flex items-center gap-1.5">
                          <Bookmark className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>High performance in Mathematics and Science subjects</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
