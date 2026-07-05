import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Cloud, ArrowRight, Download, Send, Terminal, Server, Cpu, Layers } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";

// Custom typewriter hook
function useTypewriter(words: string[], speed: number = 80, delay: number = 2500) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[currentWordIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), delay);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }

      const nextSpeed = isDeleting ? speed / 2 : speed;
      timer = setTimeout(handleType, nextSpeed);
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return currentText;
}

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const typedTitle = useTypewriter([
    "Cloud Computing Student",
    "Aspiring Cloud Engineer",
    "Linux & Docker Enthusiast",
    "BCA Undergrad @ Kristu Jayanti"
  ]);

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const navbarHeight = 80;
      const targetPosition = contactSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-sky-400/10 dark:bg-sky-600/5 rounded-full blur-[120px]" />

        {/* Floating grid patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:opacity-20" />
      </div>

      {/* Floating Interactive Micro-Nodes */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-1/3 left-12 p-3 rounded-2xl glass-card text-blue-500 shadow-sm"
        >
          <Terminal className="w-5 h-5" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/4 p-3 rounded-2xl glass-card text-sky-500 shadow-sm"
        >
          <Server className="w-5 h-5" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/4 right-1/3 p-3 rounded-2xl glass-card text-indigo-500 shadow-sm"
        >
          <Cpu className="w-5 h-5" />
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            {/* Tagline Badge */}
            <motion.div
              id="hero-tag-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 w-fit mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
                Available for Projects & Internships
              </span>
            </motion.div>

            {/* Main Greeting Name */}
            <motion.h2
              id="hero-greeting"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg sm:text-xl font-bold text-slate-500 dark:text-slate-400 font-mono tracking-tight"
            >
              Hi, my name is
            </motion.h2>

            <motion.h1
              id="hero-name"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1"
            >
              {PERSONAL_DETAILS.name}
            </motion.h1>

            {/* Custom Typewriter Title */}
            <motion.div
              id="hero-typewriter-container"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h-14 sm:h-16 flex items-center mt-3"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-400">
                {typedTitle}
                <span className="animate-pulse ml-1 text-blue-600 dark:text-sky-400 font-light">|</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mt-4"
            >
              {PERSONAL_DETAILS.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              id="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <Download className="w-4.5 h-4.5 group-hover:animate-bounce" />
                View & Download Resume
              </button>

              <button
                id="hero-contact-btn"
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm tracking-wide shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Let's Talk
                <ArrowRight className="w-4.5 h-4.5 text-blue-500 dark:text-sky-400" />
              </button>
            </motion.div>
          </div>

          {/* Hero Right Cloud Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              id="hero-illustration-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-[420px] aspect-square relative"
            >
              {/* Spinning background dashboard dials */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 dark:border-slate-800 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-dashed border-blue-200/50 dark:border-blue-900/30 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Main Vector SVG Cloud Graphic */}
              <svg
                id="hero-cloud-svg"
                viewBox="0 0 400 400"
                className="w-full h-full relative z-10 filter drop-shadow-xl select-none"
              >
                {/* Defs for premium neon gradients */}
                <defs>
                  <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#818CF8" />
                  </linearGradient>
                </defs>

                {/* SVG Connections & Nodes */}
                <line x1="80" y1="180" x2="200" y2="110" stroke="url(#glowGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="320" y1="180" x2="200" y2="110" stroke="url(#glowGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="140" y1="280" x2="200" y2="110" stroke="url(#glowGrad)" strokeWidth="1.5" />
                <line x1="260" y1="280" x2="200" y2="110" stroke="url(#glowGrad)" strokeWidth="1.5" />

                {/* Orbit Circles */}
                <circle cx="200" cy="110" r="45" fill="none" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.3" />
                <circle cx="200" cy="110" r="75" fill="none" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="8 8" />

                {/* Interactive cloud cloudscape nodes */}
                {/* Node 1: Cloud Gateway */}
                <g className="cursor-pointer transform hover:scale-110 transition-transform">
                  <circle cx="200" cy="110" r="28" fill="#1e293b" stroke="#38BDF8" strokeWidth="2" className="dark:fill-slate-900" />
                  <path d="M192 113.5 a6 6 0 0 1 12 0 a4 4 0 0 1 4 4 a4 4 0 0 1 -4 4 h-16 a4 4 0 0 1 -4 -4 a4 4 0 0 1 4 -4" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
                  <circle cx="200" cy="110" r="3" fill="#2563EB" className="animate-pulse" />
                </g>

                {/* Node 2: Database Node */}
                <g className="cursor-pointer transform hover:scale-110 transition-transform">
                  <circle cx="80" cy="180" r="22" fill="#1e293b" stroke="#10B981" strokeWidth="1.5" className="dark:fill-slate-900" />
                  <rect x="73" y="172" width="14" height="4" rx="1" fill="none" stroke="#10B981" strokeWidth="1.2" />
                  <rect x="73" y="179" width="14" height="4" rx="1" fill="none" stroke="#10B981" strokeWidth="1.2" />
                  <circle cx="76" cy="174" r="0.8" fill="#10B981" />
                  <circle cx="76" cy="181" r="0.8" fill="#10B981" />
                </g>

                {/* Node 3: Coding Engine */}
                <g className="cursor-pointer transform hover:scale-110 transition-transform">
                  <circle cx="320" cy="180" r="22" fill="#1e293b" stroke="#F59E0B" strokeWidth="1.5" className="dark:fill-slate-900" />
                  <path d="M315 177 l-4 3 l4 3 M325 177 l4 3 l-4 3" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                </g>

                {/* Node 4: Network Gateway */}
                <g className="cursor-pointer transform hover:scale-110 transition-transform">
                  <circle cx="140" cy="280" r="22" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" className="dark:fill-slate-900" />
                  <circle cx="140" cy="280" r="8" fill="none" stroke="#3b82f6" strokeWidth="1" />
                  <path d="M140 274 v12 M134 280 h12" fill="none" stroke="#3b82f6" strokeWidth="1" />
                </g>

                {/* Node 5: Docker Container */}
                <g className="cursor-pointer transform hover:scale-110 transition-transform">
                  <circle cx="260" cy="280" r="22" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5" className="dark:fill-slate-900" />
                  <rect x="252" y="274" width="16" height="12" rx="1" fill="none" stroke="#0ea5e9" strokeWidth="1.2" />
                  <line x1="256" y1="274" x2="256" y2="286" stroke="#0ea5e9" strokeWidth="1" />
                  <line x1="264" y1="274" x2="264" y2="286" stroke="#0ea5e9" strokeWidth="1" />
                </g>

                {/* Central cloud glow */}
                <path d="M 140,195 a 35,35 0 0,1 60,-20 a 45,45 0 0,1 85,5 a 30,30 0 0,1 15,58 l -160,0 a 30,30 0 0,1 0,-43 z" fill="url(#cloudGrad)" opacity="0.3" />
                <path d="M 150,205 a 28,28 0 0,1 50,-15 a 38,38 0 0,1 70,5 a 25,25 0 0,1 10,48 l -130,0 a 25,25 0 0,1 0,-38 z" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />
              </svg>

              {/* Float micro tag stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 glass-card rounded-2xl py-2.5 px-4 shadow-lg flex items-center gap-2.5 z-20 border border-slate-200/50 dark:border-slate-800"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                  AWS Cloud Active
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-8 -left-8 glass-card rounded-2xl py-2.5 px-4 shadow-lg flex items-center gap-2.5 z-20 border border-slate-200/50 dark:border-slate-800"
              >
                <Layers className="w-4.5 h-4.5 text-blue-500" />
                <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                  Docker & Linux
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
