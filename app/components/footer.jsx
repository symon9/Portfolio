import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-[#07080c] text-slate-600 dark:text-slate-400 py-12 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-200 dark:border-white/[0.06]">
          {/* Brand info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 shadow-sm dark:shadow-none">
                SE
              </span>
              <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                Simon Emmanuel
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
              Software Engineer building full-stack applications, developer tooling, and AI-powered products. Based in Kano, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <Link href="#work" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Work
            </Link>
            <Link href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#open-source" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Open Source
            </Link>
            <Link href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <Link
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-white dark:bg-surface-card border border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/15 transition-all shadow-sm dark:shadow-none"
            >
              <BsGithub size={16} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-white dark:bg-surface-card border border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/15 transition-all shadow-sm dark:shadow-none"
            >
              <BsLinkedin size={16} />
            </Link>
            <a
              href={`mailto:${personalData.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-white dark:bg-surface-card border border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/15 transition-all shadow-sm dark:shadow-none"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} Simon Emmanuel. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js &amp; Tailwind CSS</span>
            <span>·</span>
            <span className="text-slate-600 dark:text-slate-400">Production Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}