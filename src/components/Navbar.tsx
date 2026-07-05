import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Cloud, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

const MENU_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar({ isDark, onToggleTheme, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header background state
      setIsScrolled(window.scrollY > 20);

      // Scroll progress percentage calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar at the very top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-55 bg-slate-100 dark:bg-slate-900">
        <motion.div
          id="scroll-progress-indicator"
          className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 origin-left"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        id="navbar-header"
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 py-3 ${
          isScrolled
            ? "mx-auto max-w-7xl mt-2 rounded-2xl glass shadow-md"
            : "bg-transparent mt-0"
        }`}
      >
        <div className="flex items-center justify-between h-14 max-w-7xl mx-auto">
          {/* Logo Brand */}
          <a
            id="navbar-brand"
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white block">
                Lavanya D
              </span>
              <span className="text-[10px] font-medium tracking-wider text-blue-600 dark:text-sky-400 block uppercase -mt-1 font-mono">
                Cloud Computing Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {MENU_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  id={`nav-link-${item.href.substring(1)}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? "text-blue-600 dark:text-sky-400 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/40"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-600 dark:bg-sky-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Theme Switcher & Actions */}
          <div id="nav-actions" className="hidden md:flex items-center gap-4">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <a
              id="resume-btn-nav"
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Let's Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3 overflow-hidden rounded-2xl glass shadow-xl border border-slate-200/50 dark:border-slate-800/40"
            >
              <div className="px-4 py-5 flex flex-col gap-2 bg-white/95 dark:bg-slate-900/95">
                {MENU_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.href}
                      id={`mobile-nav-link-${item.href.substring(1)}`}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? "bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-sky-400 font-semibold"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="h-px bg-slate-200 dark:bg-slate-800 my-2" />
                <a
                  id="mobile-resume-nav-btn"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all"
                >
                  Let's Connect & Build
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
