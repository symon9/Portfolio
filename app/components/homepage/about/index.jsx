import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";
import { FiUsers, FiCompass, FiZap, FiTrendingUp } from "react-icons/fi";

const PHILOSOPHY_ICONS = [
  <FiUsers key="users" className="text-indigo-600 dark:text-indigo-400" size={20} />,
  <FiCompass key="compass" className="text-cyan-600 dark:text-cyan-400" size={20} />,
  <FiZap key="zap" className="text-amber-600 dark:text-amber-400" size={20} />,
  <FiTrendingUp key="trending" className="text-emerald-600 dark:text-emerald-400" size={20} />,
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-4 shadow-sm dark:shadow-none">
          <span>ABOUT &amp; PHILOSOPHY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Quick Facts */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-surface-card shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/50 group">
              <Image
                src={personalData.profile}
                alt="Simon Emmanuel"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-mono">
                <div className="flex items-center justify-between text-white font-medium">
                  <span>Simon Emmanuel</span>
                  <span className="text-emerald-400">Active</span>
                </div>
                <div className="text-slate-300 text-[11px] mt-0.5">
                  Kano, Nigeria · Open to Global Remote
                </div>
              </div>
            </div>

            {/* Quick stats strip below portrait */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-6">
              <div className="p-3 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/5 text-center shadow-sm dark:shadow-none">
                <div className="text-lg font-bold text-slate-900 dark:text-white font-mono">4k+</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">CommitCraft Installs</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/5 text-center shadow-sm dark:shadow-none">
                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400 font-mono">Co-founder</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">MOMI Bump</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/5 text-center shadow-sm dark:shadow-none">
                <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400 font-mono">Full-Stack</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">Web &amp; AI</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Engineering Philosophy */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Turning complex technical ideas into reliable, well-crafted products.
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
              {personalData.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Philosophy Header */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/[0.08]">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-indigo-500" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-300 font-semibold">
                  Engineering Principles
                </h3>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalData.principles.map((principle, index) => (
                  <div
                    key={principle.title}
                    className="p-4 rounded-xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      {PHILOSOPHY_ICONS[index % PHILOSOPHY_ICONS.length]}
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                        {principle.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}