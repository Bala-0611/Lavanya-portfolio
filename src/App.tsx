import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Centralized Theme state
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply dark class to document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Section Tracking Intersection Observer
  useEffect(() => {
    const sections = ["home", "about", "skills", "education", "certifications", "contact"];
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          // Adjust threshold and rootMargin to trigger menu highlighted state at natural scroll points
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0
        }
      );

      observer.observe(element);
      return { element, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, [isLoading]); // Re-run when load completes and DOM elements are fully rendered

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Loading Screen Overlay */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden selection:bg-blue-500 selection:text-white">
        
        {/* Sticky Header with Navigation & Theme Toggle */}
        <Navbar
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
          activeSection={activeSection}
        />

        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Education Timeline */}
        <Education />

        {/* Certifications Grid */}
        <Certifications />

        {/* Contact Form Hub */}
        <Contact />

        {/* Minimal Professional Footer */}
        <Footer />

        {/* ATS-Friendly CV Modal Viewer */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
        
      </div>
    </>
  );
}
