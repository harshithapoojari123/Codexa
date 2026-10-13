import { useEffect } from 'react'
import { X, ExternalLink, CheckCircle2, Clock, User, Briefcase, ArrowRight } from 'lucide-react'

export function CaseStudyModal({ project, isOpen, onClose, onStartProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !project || !project.caseStudy) return null

  const { caseStudy } = project

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-150">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#12141c] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col text-left z-10"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0e1017]">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
              {project.badge}
            </span>
            <span className="text-xs text-zinc-400 font-mono">{project.category}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close overview"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-lg bg-[#171924] border border-white/5">
              <div>
                <span className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                  <User className="w-3 h-3 text-indigo-400" /> Focus / Client
                </span>
                <span className="text-xs font-semibold text-white mt-1 block truncate">
                  {caseStudy.client}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-indigo-400" /> Timeline
                </span>
                <span className="text-xs font-semibold text-white mt-1 block">
                  {caseStudy.timeline}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                  <Briefcase className="w-3 h-3 text-indigo-400" /> Developer Role
                </span>
                <span className="text-xs font-semibold text-white mt-1 block truncate">
                  Harshitha Poojari
                </span>
              </div>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#171924] border border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold block mb-1.5">
                The Objective
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#171924] border border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1.5">
                The Technical Solution
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Delivered Capabilities
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs text-zinc-300 p-2.5 rounded-lg bg-[#171924] border border-white/5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="p-4 rounded-lg bg-indigo-950/20 border border-indigo-500/20">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-semibold block mb-1">
              Project Result
            </span>
            <p className="text-xs text-zinc-200 leading-relaxed">
              {caseStudy.impact}
            </p>
          </div>

          {/* Tech tags */}
          <div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded bg-[#171924] border border-white/8 text-[11px] font-mono text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between gap-3 px-6 py-3.5 border-t border-white/10 bg-[#0e1017]">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Close
          </button>

          <div className="flex items-center gap-2.5">
            {project.isLive && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors border border-white/10"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              type="button"
              onClick={() => {
                onClose()
                if (onStartProject) onStartProject(project.title)
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
            >
              <span>Build Similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
