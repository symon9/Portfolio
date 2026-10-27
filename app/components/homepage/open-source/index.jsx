import Link from "next/link";
import { openSourceProjects, engineeringPerspectives } from "@/utils/data/open-source";
import { BsGithub } from "react-icons/bs";
import { FiGitPullRequest, FiBookOpen } from "react-icons/fi";

export default function OpenSourceSection() {
  return (
    <section id="open-source" className="py-20 md:py-28 relative border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 shadow-sm dark:shadow-none">
            <span>OPEN SOURCE &amp; NOTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Open Source &amp; Engineering Perspectives
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Building in the open, crafting developer tools, VS Code extensions, and writing about real-world software architecture.
          </p>
        </div>

        {/* Top: Open Source Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {openSourceProjects.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl bg-white dark:bg-surface-card border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between transition-all group shadow-lg shadow-slate-200/50 dark:shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FiGitPullRequest className="text-indigo-600 dark:text-indigo-400" size={18} />
                    <span className="font-mono text-xs text-indigo-700 dark:text-indigo-300 font-medium">
                      {project.metric}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-surface-base text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                    {project.license}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-slate-500 mb-4">
                  {project.repo}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.05]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Primary: {project.primaryLanguage}
                </span>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-slate-100 dark:bg-surface-elevated hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-300 dark:border-white/10 transition-colors shadow-sm dark:shadow-none"
                >
                  <BsGithub size={14} />
                  <span>View Repository</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Engineering Notes & Architectural Observations */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FiBookOpen className="text-indigo-600 dark:text-indigo-400" size={16} />
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
              Engineering Notes &amp; Systems Thinking
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engineeringPerspectives.map((note) => (
              <div
                key={note.title}
                className="p-5 rounded-xl bg-white dark:bg-surface-base border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold">
                      {note.topic}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04]">
                      {note.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2 leading-snug">
                    {note.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {note.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
