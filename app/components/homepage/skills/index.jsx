"use client";

import { useState } from "react";
import { skillCategories } from "@/utils/data/skills";
import { FiCode, FiServer, FiCpu, FiDatabase, FiSmartphone, FiCloud, FiGitBranch } from "react-icons/fi";

const CATEGORY_ICONS = {
  "Frontend Engineering": <FiCode className="text-indigo-600 dark:text-indigo-400" size={18} />,
  "Backend & Systems": <FiServer className="text-cyan-600 dark:text-cyan-400" size={18} />,
  "AI & Developer Tooling": <FiCpu className="text-amber-600 dark:text-amber-400" size={18} />,
  "Databases & Storage": <FiDatabase className="text-emerald-600 dark:text-emerald-400" size={18} />,
  "Mobile Development": <FiSmartphone className="text-purple-600 dark:text-purple-400" size={18} />,
  "Infrastructure & DevOps": <FiCloud className="text-sky-600 dark:text-sky-400" size={18} />,
  "Workflow & Engineering Practices": <FiGitBranch className="text-rose-600 dark:text-rose-400" size={18} />,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoriesToDisplay =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 shadow-sm dark:shadow-none">
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills &amp; Technology Stack
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Curated tools and technologies I use to build scalable web products, mobile applications, and AI developer workflows.
            </p>
          </div>

          {/* Quick Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">Filter:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white dark:bg-surface-card border border-slate-300 dark:border-white/10 text-xs text-slate-800 dark:text-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 font-mono shadow-sm dark:shadow-none"
            >
              <option value="all">View All Domains</option>
              {skillCategories.map((c) => (
                <option key={c.title} value={c.title}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesToDisplay.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 p-6 flex flex-col justify-between transition-all shadow-md shadow-slate-200/50 dark:shadow-black/10 hover:shadow-lg dark:hover:shadow-black/20"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-surface-base border border-slate-200 dark:border-white/5">
                    {CATEGORY_ICONS[category.title] || <FiCode size={18} />}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {category.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-surface-base border border-slate-200/80 dark:border-white/5 hover:border-indigo-400/40 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-all cursor-default"
                  >
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
                      · {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}