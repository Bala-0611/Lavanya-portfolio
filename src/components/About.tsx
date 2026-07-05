import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, Cpu, Globe, CheckCircle2, ChevronRight, Milestone } from "lucide-react";
import { PERSONAL_DETAILS, STATS, LANGUAGES } from "../data";

const IconMap: { [key: string]: React.ComponentType<any> } = {
  GraduationCap,
  Award,
  Cpu,
  Globe
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]" />
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
            <Milestone className="w-3.5 h-3.5" />
            Background Profile
          </motion.div>
          
          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full origin-center"
          />
        </div>

        {/* Main Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column */}
          <motion.div
            id="about-narrative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Passionate Cloud Computing Student & Aspiring Cloud Engineer
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Currently pursuing a Bachelor of Computer Applications (BCA) specializing in Cloud Computing at Kristu Jayanti College, I have cultivated a deep analytical interest in cloud infrastructure design, virtual networking architectures, database engines, and software containers.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              My goal is to simplify, automate, and orchestrate server environments while constantly engineering fault-tolerant system layouts. I approach every project with structured modular logic and a relentless desire to learn.
            </p>

            {/* Checklist items list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERSONAL_DETAILS.aboutLines.map((line, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="p-1 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-sky-400 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
                    {line}
                  </span>
                </div>
              ))}
            </div>

            {/* Languages sub-section with modern rounded badges */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/50">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-mono mb-3">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => {
                  const isPrimary = lang.name === "English";
                  return (
                    <div
                      key={lang.name}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight shadow-sm transition-transform hover:scale-105 ${
                        isPrimary
                          ? "bg-blue-600 text-white dark:bg-blue-500"
                          : "bg-slate-900 text-white dark:bg-slate-800 text-slate-200"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isPrimary ? "bg-white" : "bg-blue-400"}`} />
                      <span>{lang.name}</span>
                      <span className={`text-[10px] font-normal font-mono ${isPrimary ? "text-blue-100" : "text-slate-400"}`}>
                        ({lang.level})
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Stats Cards Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {STATS.map((stat, idx) => {
              const Icon = IconMap[stat.icon] || Cpu;
              return (
                <motion.div
                  key={stat.label}
                  id={`stat-card-${idx}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/40 hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 transition-all group flex flex-col justify-between aspect-video sm:aspect-square md:aspect-video lg:aspect-square"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 dark:bg-blue-500/5 text-blue-600 dark:text-sky-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-blue-500 transition-colors" />
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
                      {stat.label}
                    </h4>
                    <p className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                      {stat.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
