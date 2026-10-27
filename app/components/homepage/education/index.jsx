import { educations } from "@/utils/data/educations";
import { FiAward, FiCalendar } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 relative border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 shadow-sm dark:shadow-none">
            <span>FOUNDATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Academic Background
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all flex flex-col justify-between shadow-md shadow-slate-200/50 dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                    <FiAward size={18} />
                    <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Computer Science
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-surface-base text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-white/5 flex items-center gap-1">
                    <FiCalendar size={12} />
                    {edu.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-1.5">
                  <span>{edu.institution}</span>
                  <span className="text-slate-500 font-mono text-xs">· {edu.location}</span>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-2 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
