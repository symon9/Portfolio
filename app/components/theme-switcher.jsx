"use client";

import { useTheme } from "./theme-provider";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

const THEMES = [
  { id: "light", label: "Light", icon: FiSun },
  { id: "system", label: "System", icon: FiMonitor },
  { id: "dark", label: "Dark", icon: FiMoon },
];

export default function ThemeSwitcher({ isMobile = false }) {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`h-8 rounded-lg bg-slate-200/50 dark:bg-white/5 animate-pulse ${
          isMobile ? "w-full" : "w-24"
        }`}
      />
    );
  }

  if (isMobile) {
    return (
      <div className="flex flex-col gap-2 pt-2">
        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
          Theme Preference
        </span>
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-surface-card border border-slate-300/80 dark:border-white/10">
          {THEMES.map(({ id, label, icon: Icon }) => {
            const isActive = theme === id;
            return (
              <button
                key={id}
                onClick={() => setTheme(id)}
                type="button"
                className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                aria-pressed={isActive}
                aria-label={`Set theme to ${label}`}
              >
                <Icon size={14} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-surface-card border border-slate-300/70 dark:border-white/10 shadow-sm"
      role="group"
      aria-label="Theme selector"
    >
      {THEMES.map(({ id, label, icon: Icon }) => {
        const isActive = theme === id;
        return (
          <button
            key={id}
            onClick={() => setTheme(id)}
            type="button"
            className={`relative p-1.5 rounded-lg text-xs transition-all focus:outline-none ${
              isActive
                ? "bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
            title={`Theme: ${label}`}
            aria-pressed={isActive}
            aria-label={`Switch to ${label} mode`}
          >
            <Icon size={14} />
          </button>
        );
      })}
    </div>
  );
}
