import React from "react";
import { motion } from "motion/react";
import { Award, Shield, Database, Sparkles, GitBranch, Cpu, ArrowUpRight, CheckCircle } from "lucide-react";
import { CERTIFICATIONS } from "../data";

const CertificationIcons: { [key: number]: React.ComponentType<any> } = {
  0: Shield,       // SnowPro
  1: Database,     // Oracle APEX
  2: Sparkles,     // Digital Eng
  3: Cpu,          // MongoDB
  4: GitBranch     // Git & GitHub
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decorative Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/10 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px]" />
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
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </motion.div>
          
          <motion.h2
            id="certifications-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Professional Certifications
          </motion.h2>
          
          <motion.p
            id="certifications-subheading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm mt-3 max-w-xl mx-auto font-medium"
          >
            Technical credentials verified by industry-leading providers, showcasing cloud, database development, and version control competency.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full origin-center"
          />
        </div>

        {/* Certifications Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => {
            const IconComponent = CertificationIcons[idx] || Award;
            
            // Extracting high-contrast initials badge properties from the Professional Polish theme
            const getCertBadgeProps = (title: string) => {
              const lower = title.toLowerCase();
              if (lower.includes("snow")) {
                return { text: "SNOW", style: "bg-sky-400 text-slate-900 font-black italic" };
              }
              if (lower.includes("oracle") || lower.includes("apex")) {
                return { text: "ORA", style: "bg-orange-400 text-slate-900 font-black" };
              }
              if (lower.includes("nasscom") || lower.includes("digital")) {
                return { text: "NAS", style: "bg-teal-400 text-slate-900 font-bold" };
              }
              if (lower.includes("mongodb")) {
                return { text: "MDB", style: "bg-green-400 text-slate-900 font-black" };
              }
              if (lower.includes("git") || lower.includes("github") || lower.includes("udemy")) {
                return { text: "GIT", style: "bg-purple-400 text-slate-900 font-black" };
              }
              return { text: "CERT", style: "bg-blue-600 text-white font-bold" };
            };

            const badgeProps = getCertBadgeProps(cert.title);

            return (
              <motion.div
                key={cert.title}
                id={`cert-card-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-blue-500/20 hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                
                <div>
                  {/* Icon and Card Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-3.5 rounded-xl bg-blue-500/10 dark:bg-blue-500/5 text-blue-600 dark:text-sky-400 group-hover:scale-105 transition-transform duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {/* High-contrast Professional Polish abbreviation badge */}
                      <div className={`w-8 h-8 rounded flex items-center justify-center text-[9px] uppercase shadow-sm tracking-tighter ${badgeProps.style}`}>
                        {badgeProps.text}
                      </div>
                    </div>

                    <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-700/40 uppercase tracking-wider">
                      {cert.badgeType}
                    </span>
                  </div>

                  {/* Title and Issuer */}
                  <div>
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors duration-200">
                      {cert.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider font-mono">
                      Issued by {cert.issuer}
                    </p>
                  </div>

                  {/* Description text */}
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-4">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom interactive action button */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Verified Active</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors font-mono">
                    <span>Credential Active</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
