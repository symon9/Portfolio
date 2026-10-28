"use client";

import { useState } from "react";
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiArrowDown, FiArrowUpRight, FiCheckCircle, FiCpu, FiLayers, FiFileText } from "react-icons/fi";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("architecture");

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle radial glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 mb-6 shadow-sm dark:shadow-none">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>{personalData.availability}</span>
            </div>

            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
              {personalData.eyebrow}
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6">
              {personalData.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              {personalData.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <Link
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/35"
              >
                <span>View My Work</span>
                <FiArrowDown size={16} />
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-surface-card hover:bg-slate-50 dark:hover:bg-surface-elevated border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all shadow-sm dark:shadow-none"
              >
                <span>Get in Touch</span>
                <FiArrowUpRight size={16} />
              </Link>
              <Link
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-dashed border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 text-sm font-medium transition-all"
              >
                <FiFileText size={16} className="text-indigo-600 dark:text-indigo-400" />
                <span>Resume</span>
              </Link>
            </div>

            {/* Social & Verified Profiles */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-200 dark:border-white/[0.08] w-full text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              <span className="font-mono text-slate-400 dark:text-slate-500">Verified links:</span>
              <Link
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <BsGithub size={16} />
                <span>GitHub</span>
              </Link>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <BsLinkedin size={16} />
                <span>LinkedIn</span>
              </Link>
              <span className="hidden sm:inline-block font-mono text-slate-400 dark:text-slate-500">
                · Kano, Nigeria
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Engineering Surface (NOT a fake terminal) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl bg-white dark:bg-[#111422] border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/40 overflow-hidden backdrop-blur-md">
              {/* Card Header with Real Tabs */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 px-4 py-3 bg-slate-50 dark:bg-[#0c0e17]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">system.spec</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-200/70 dark:bg-[#161a2c] p-1 rounded-lg border border-slate-300/50 dark:border-white/10">
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === "architecture"
                        ? "bg-indigo-600 text-white font-medium shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    Stack
                  </button>
                  <button
                    onClick={() => setActiveTab("impact")}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === "impact"
                        ? "bg-indigo-600 text-white font-medium shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    Highlights
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 bg-white dark:bg-[#111422]">
                {activeTab === "architecture" ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06]">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <FiLayers className="text-indigo-600 dark:text-indigo-400" />
                        APPLICATION TIERS
                      </span>
                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <FiCheckCircle size={12} />
                        Production Ready
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0c0e17] border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors">
                        <div className="flex items-center justify-between text-xs font-medium text-slate-800 dark:text-slate-200 mb-1.5">
                          <span>Frontend &amp; Client Interfaces</span>
                          <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">React / Next.js</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          TypeScript, Tailwind CSS, Zustand, Redux Toolkit, TanStack Query, accessible UI component systems.
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0c0e17] border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors">
                        <div className="flex items-center justify-between text-xs font-medium text-slate-800 dark:text-slate-200 mb-1.5">
                          <span>Backend &amp; API Architecture</span>
                          <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">Node / NestJS</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          Express.js, REST APIs, Prisma ORM, WebSockets for realtime synchronization, PostgreSQL, MySQL.
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0c0e17] border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors">
                        <div className="flex items-center justify-between text-xs font-medium text-slate-800 dark:text-slate-200 mb-1.5">
                          <span>AI Integration &amp; Tooling</span>
                          <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">LLM / Monaco / Electron</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          VS Code Extension API, git diff AST analysis, CommitCraft Pro (4k+ installs), prompt engineering.
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <span>INFRA: Docker · Cloudflare R2 · Terraform</span>
                      <span className="text-emerald-600 dark:text-emerald-400">ENV: production</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06]">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <FiCpu className="text-cyan-600 dark:text-brand-cyan" />
                        KEY ENGINEERING HIGHLIGHTS
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Verified</span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0c0e17] border border-slate-200/80 dark:border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">CommitCraft Pro</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                          4k+ Installs
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Generate commit messages, branch names, and next-step suggestions from Git diffs using Gemini.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0c0e17] border border-slate-200/80 dark:border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">CodeMind AI</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800">
                          Open Source IDE
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Open-source AI-native desktop IDE built with Electron, React, NestJS, Monaco Editor &amp; Prisma.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0c0e17] border border-slate-200/80 dark:border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">MOMI Bump</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800">
                          Co-founder
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Maternal health technology platform supporting symptom clarity, tracking, and multilingual care.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0c0e17] border border-slate-200/80 dark:border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">DMK Telecoms</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-300 border border-violet-300 dark:border-violet-800">
                          Software Engineer
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Full-stack interactive streaming, real-time sync, room moderation, and video delivery.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}