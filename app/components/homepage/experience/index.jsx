"use client";

import { useState } from "react";
import { experiences } from "@/utils/data/experience";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

export default function Experience() {
  const [expandedId, setExpandedId] = useState(1);

  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 shadow-sm dark:shadow-none">
            <span>CAREER &amp; TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A track record spanning full-stack application development, co-founding health tech products, and technical systems engineering.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-300 dark:border-white/10 ml-3 md:ml-6 pl-6 md:pl-10 space-y-10">
          {experiences.map((exp) => {
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 rounded-full bg-white dark:bg-surface-base border-2 border-indigo-500/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm dark:shadow-md dark:shadow-indigo-500/20 group-hover:border-indigo-500 transition-colors">
                  <FiBriefcase size={12} />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all p-5 sm:p-7 shadow-lg shadow-slate-200/50 dark:shadow-black/20">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {exp.title}
                        </h3>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-base font-medium text-slate-700 dark:text-slate-300">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-surface-base px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/5">
                        <FiCalendar className="text-indigo-600 dark:text-indigo-400" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-surface-base px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/5">
                        <FiMapPin className="text-slate-500 dark:text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {exp.descriptions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400/80 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono text-slate-500 mr-2">
                        Technologies:
                      </span>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
