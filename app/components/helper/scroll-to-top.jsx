"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white dark:bg-surface-card border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-600 dark:hover:border-indigo-500 shadow-xl shadow-slate-300/50 dark:shadow-black/40 backdrop-blur-md transition-all duration-200 group focus:outline-none"
    >
      <FiArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
