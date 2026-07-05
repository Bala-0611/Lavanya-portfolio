import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMsg("All fields are required. Please fill them out before sending.");
      return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    // Simulate safe API transmission to backend
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Auto reset to idle after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative radial gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.05)_0%,transparent_70%)]" />
        <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
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
            <MessageSquare className="w-3.5 h-3.5" />
            Communication Hub
          </motion.div>
          
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p
            id="contact-subheading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm mt-3 max-w-xl mx-auto font-semibold"
          >
            "Let's Connect and Build Something Amazing Together."
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 w-20 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full origin-center"
          />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
              Contact Information
            </h3>
            
            {/* Email Address */}
            <motion.div
              id="contact-info-email"
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-mono">
                  Email Me
                </h4>
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  {PERSONAL_DETAILS.email}
                </a>
              </div>
            </motion.div>

            {/* LinkedIn Connection */}
            <motion.div
              id="contact-info-linkedin"
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-mono">
                  LinkedIn Profile
                </h4>
                <a
                  href={PERSONAL_DETAILS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                >
                  linkedin.com/in/lavanya-d
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              id="contact-info-location"
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-mono">
                  Current Location
                </h4>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {PERSONAL_DETAILS.location}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            id="contact-form-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm relative"
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
              Send a Secure Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Name Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  disabled={status === "sending" || status === "success"}
                  className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  disabled={status === "sending" || status === "success"}
                  className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, query, or opportunity..."
                  disabled={status === "sending" || status === "success"}
                  className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all resize-none"
                />
              </div>

              {/* Feedback and Alerts */}
              <AnimatePresence mode="wait">
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3.5 rounded-xl border border-rose-200 bg-rose-50 dark:border-rose-950/30 dark:bg-rose-950/10 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 dark:border-emerald-950/30 dark:bg-emerald-950/10 text-emerald-700 dark:text-emerald-400 text-xs flex flex-col gap-1"
                  >
                    <div className="flex items-center gap-2 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Message Sent Successfully!</span>
                    </div>
                    <p className="font-medium text-slate-500 dark:text-slate-400 mt-0.5 pl-6">
                      Thank you for connecting. Lavanya D will review your message and reply via email shortly!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Send Button */}
              <button
                type="submit"
                id="contact-submit-btn"
                disabled={status === "sending" || status === "success"}
                className={`w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-sm tracking-wide shadow-md transition-all outline-none cursor-pointer ${
                  status === "sending"
                    ? "bg-slate-600 cursor-not-allowed"
                    : status === "success"
                    ? "bg-emerald-600 shadow-emerald-500/10"
                    : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 active:translate-y-0"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Securing Connection & Sending...</span>
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-4.5 h-4.5" />
                    <span>Connection Request Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5" />
                    <span>Send Secure Message</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
