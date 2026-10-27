"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import ThemeSwitcher from "./theme-switcher";

const NAV_ITEMS = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Open Source", href: "#open-source" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-lg dark:shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-slate-900 dark:text-slate-100 focus:outline-none"
            aria-label="Simon Emmanuel - Software Engineer"
          >
            <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-brand-primary group-hover:border-brand-primary transition-colors shadow-sm dark:shadow-none">
              SE
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                Simon Emmanuel
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 -mt-0.5 tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs & Theme Switcher */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
            <ThemeSwitcher />

            <Link
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/20 hover:bg-slate-100 dark:hover:bg-white/[0.03] transition-all"
            >
              <FiFileText className="text-brand-primary" size={14} />
              <span>Resume</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm shadow-indigo-500/20"
            >
              <span>Get in Touch</span>
              <FiArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              aria-label="Download Resume"
            >
              <FiFileText size={18} />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#0c0e17]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in fade-in duration-200 shadow-xl">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-white/[0.08] flex flex-col gap-3">
              <ThemeSwitcher isMobile />

              <Link
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-slate-300 dark:border-white/10 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
              >
                <FiFileText size={16} />
                <span>Download Resume</span>
              </Link>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white shadow-sm"
              >
                <span>Get in Touch</span>
                <FiArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}