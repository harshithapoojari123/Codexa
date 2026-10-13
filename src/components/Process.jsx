import { CheckCircle2, ArrowRight } from 'lucide-react'
import { processSteps } from '../data/process'

export function Process({ onStartProject }) {
  return (
    <section id="process" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
            <span>STRUCTURED METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Vision to Deployment.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            A battle-tested four-step delivery process designed to remove uncertainty, maintain steady momentum, and ensure a smooth launch.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="mt-16 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative p-7 rounded-3xl bg-[#0c0e1a] border border-white/8 hover:border-indigo-500/30 transition-all text-left flex flex-col justify-between"
            >
              <div>
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-sm font-bold text-indigo-400 mb-6">
                  {step.step}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <span className="text-xs font-mono text-indigo-400 block mt-1">
                  {step.subtitle}
                </span>

                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                  Step Deliverables
                </span>
                <ul className="space-y-1.5">
                  {step.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process CTA */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onStartProject}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all"
          >
            <span>Have questions about the workflow? Let&apos;s talk</span>
            <ArrowRight className="w-4 h-4 text-indigo-400" />
          </button>
        </div>
      </div>
    </section>
  )
}
