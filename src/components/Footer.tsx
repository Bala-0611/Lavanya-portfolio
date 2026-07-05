import { motion } from "motion/react";
import { ArrowUp, Mail, Linkedin, Cloud } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer
      id="footer-section"
      className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/40 py-12 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Footer Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/50 dark:border-slate-800/40">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-600 text-white">
              <Cloud className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">
                Lavanya D
              </span>
              <p className="text-[10px] font-mono tracking-widest text-blue-600 dark:text-sky-400 uppercase -mt-0.5">
                BCA Cloud Student
              </p>
            </div>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-4">
            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:scale-105 transition-all shadow-sm"
              aria-label="Email Lavanya D"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <a
              id="footer-linkedin-link"
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 hover:scale-105 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          
          {/* Copy statement and credit */}
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium font-mono">
            © {new Date().getFullYear()} Lavanya D. Made with ❤️ and professional diligence.
          </span>

          {/* Back to top scroll button */}
          <motion.button
            id="back-to-top-btn"
            onClick={handleScrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-sky-400 text-slate-600 dark:text-slate-300 text-xs font-bold font-mono shadow-sm cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}
