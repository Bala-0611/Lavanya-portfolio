import React from "react";
import { motion } from "motion/react";
import { Cloud, Code2, Database, Terminal, Network, Layers, Cpu, Server, Check } from "lucide-react";
import { SKILL_CATEGORIES } from "../data";

const IconMap: { [key: string]: React.ComponentType<any> } = {
  Cloud,
  Code2,
  Database,
  Terminal,
  Network,
  Layers
};

const ColorMap: { [key: string]: { border: string, bg: string, text: string, glow: string } } = {
  "Cloud Computing": {
    border: "group-hover:border-blue-500/30",
    bg: "bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    glow: "rgba(37,99,235,0.06)"
  },
  "Programming": {
    border: "group-hover:border-violet-500/30",
    bg: "bg-violet-500/10",
    text: "text-violet-600 dark:text-violet-400",
    glow: "rgba(139,92,246,0.06)"
  },
  "Databases": {
    border: "group-hover:border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    glow: "rgba(16,185,129,0.06)"
  },
  "DevOps & OS": {
    border: "group-hover:border-sky-500/30",
    bg: "bg-sky-500/10",
    text: "text-sky-600 dark:text-sky-400",
    glow: "rgba(14,165,233,0.06)"
  },
  "Networking": {
    border: "group-hover:border-rose-500/30",
    bg: "bg-rose-500/10",
    text: "text-rose-600 dark:text-rose-400",
    glow: "rgba(244,63,94,0.06)"
  },
  "Other": {
    border: "group-hover:border-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-600 dark:text-amber-400",
    glow: "rgba(245,158,11,0.06)"
  }
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/10 right-1/4 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/10 left-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px]" />
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
            <Cpu className="w-3.5 h-3.5" />
            Engineering Toolbox
          </motion.div>
          
          <motion.h2
            id="skills-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Technical Expertise
          </motion.h2>
          
          <motion.p
            id="skills-subheading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm mt-3 max-w-xl mx-auto font-medium"
          >
            A comprehensive mapping of cloud frameworks, databases, core computing principles, and development methodologies.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full origin-center"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = IconMap[category.icon] || Server;
            const colors = ColorMap[category.title] || ColorMap["Other"];

            return (
              <motion.div
                key={category.title}
                id={`skill-card-${category.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 flex flex-col justify-between ${colors.border}`}
                style={{
                  boxShadow: `hover: 0 10px 30px -10px ${colors.glow}`
                }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`p-3 rounded-xl transition-transform group-hover:scale-105 duration-300 ${colors.bg} ${colors.text}`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Items List */}
                  <div className="flex flex-col gap-4">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col gap-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                            <Check className={`w-3.5 h-3.5 ${colors.text}`} />
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/30 dark:border-slate-700/30 uppercase">
                            {skill.level}
                          </span>
                        </div>
                        {/* Progress Bar indicator representing competency level */}
                        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800/60 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "75%" : "45%"
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                            className={`h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer accent */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">
                  <span>Category Code: {category.title.substring(0, 3).toUpperCase()}-0{idx+1}</span>
                  <span className={colors.text}>ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
