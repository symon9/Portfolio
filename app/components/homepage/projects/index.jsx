"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/utils/data/projects-data";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink, FiLayers, FiAlertCircle } from "react-icons/fi";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "ai-tools", label: "AI & Developer Tooling" },
  { id: "fullstack", label: "Full-Stack Systems" },
  { id: "web-apps", label: "Web Applications" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 shadow-sm dark:shadow-none">
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineered for impact &amp; performance.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            From open-source AI developer tools with 3.9k+ installs to maternal digital health and low-latency streaming infrastructure.
          </p>
        </div>

        {/* Filter Pills - single cohesive row without awkward wrapping */}
        <div className="mb-12 overflow-x-auto no-scrollbar pb-1">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-100 dark:bg-[#111422] border border-slate-200 dark:border-white/10 whitespace-nowrap shadow-sm dark:shadow-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-sm font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/[0.04]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects: Flagship Two-Column Cards */}
        {featuredProjects.length > 0 && (
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/20 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Column: Image Preview */}
                  <div className="lg:col-span-6 relative bg-slate-100 dark:bg-slate-950 flex flex-col justify-center overflow-hidden min-h-[300px] lg:min-h-[440px] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10">
                    <div className="relative w-full h-full min-h-[300px] lg:min-h-[440px] flex items-center justify-center p-4 sm:p-6">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={900}
                        height={550}
                        unoptimized={project.image?.endsWith(".gif")}
                        className="w-full h-auto object-cover rounded-xl border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                        priority={project.id === "codemind-ai"}
                      />
                    </div>
                  </div>

                  {/* Right Column: Deep Technical Case Details */}
                  <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Badge / Category */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300">
                          {project.badge}
                        </span>
                        {project.isOpenSource && (
                          <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                            Open Source
                          </span>
                        )}
                        <span className="text-xs font-mono text-slate-500">
                          Role: {project.role}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                        {project.name}
                      </h3>
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300 mb-4">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Problem & Architectural Decisions */}
                      <div className="space-y-3.5 mb-6">
                        <div className="p-3.5 rounded-xl bg-amber-500/[0.06] dark:bg-surface-base border border-amber-500/20 dark:border-white/5">
                          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">
                            <FiAlertCircle size={14} />
                            <span>The Problem</span>
                          </div>
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-cyan-500/[0.06] dark:bg-surface-base border border-cyan-500/20 dark:border-white/5">
                          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 dark:text-cyan-300 mb-1">
                            <FiLayers size={14} />
                            <span>Technical Architecture</span>
                          </div>
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            {project.architecture}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer: Tools & Links */}
                    <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                      {/* Tech Stacks */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4">
                        {project.code && (
                          <Link
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg bg-slate-100 dark:bg-surface-elevated hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-300 dark:border-white/10 transition-colors shadow-sm dark:shadow-none"
                          >
                            <BsGithub size={14} />
                            <span>GitHub Repository</span>
                          </Link>
                        )}
                        {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
                          >
                            <span>Live Project / Extension</span>
                            <FiExternalLink size={14} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Secondary Projects Grid */}
        {secondaryProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-slate-300 dark:bg-white/20" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                Additional Production &amp; Web Applications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {secondaryProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 p-5 flex flex-col justify-between transition-all duration-200 group shadow-sm dark:shadow-none"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative w-full h-36 bg-slate-100 dark:bg-slate-950 rounded-lg overflow-hidden border border-slate-200 dark:border-white/5 mb-4">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {project.name}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500">
                        {project.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tools.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.05]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-white/[0.06]">
                      <span className="text-[11px] text-slate-500 font-mono">
                        {project.role}
                      </span>
                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors"
                        >
                          <span>Demo</span>
                          <FiExternalLink size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
