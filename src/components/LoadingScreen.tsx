import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cloud, Cpu } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400); // Small buffer for exit animation
          return 100;
        }
        // Increment with varying speeds for realism
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      id="loading-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_100%)]" />

      {/* Loading Box */}
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center z-10">
        <motion.div
          id="loading-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-6 p-4 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center"
        >
          {/* Pulsing indicator aura */}
          <div className="absolute inset-0 rounded-3xl bg-blue-500/10 animate-ping" />
          <Cloud className="w-12 h-12 text-blue-500" />
          <Cpu className="absolute w-5 h-5 text-sky-400 -bottom-1 -right-1 bg-slate-950 p-0.5 rounded-md border border-slate-800" />
        </motion.div>

        {/* Text */}
        <motion.h1
          id="loading-title"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
        >
          Lavanya D
        </motion.h1>
        
        <motion.p
          id="loading-subtitle"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-mono"
        >
          Cloud Portfolio Initialization
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-48 h-1 bg-slate-900 rounded-full overflow-hidden mt-8 border border-slate-800/50">
          <motion.div
            id="loading-progress-fill"
            className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Percentage Counter */}
        <motion.span
          id="loading-percentage"
          className="text-sm font-mono text-blue-400 font-semibold mt-3"
        >
          {progress}%
        </motion.span>
      </div>

      {/* Subtle Footer */}
      <motion.div
        id="loading-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-6 text-[10px] font-mono tracking-widest text-slate-600"
      >
        SECURE CLOUD HYPERVISOR V2.0.6
      </motion.div>
    </motion.div>
  );
}
