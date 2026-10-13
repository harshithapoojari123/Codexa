import { useState } from 'react'
import { Calculator, Check, ArrowRight, Sparkles, Clock, Layers } from 'lucide-react'

export function ProjectEstimator({ onExportBrief }) {
  const [projectType, setProjectType] = useState('Business Website')
  const [timeline, setTimeline] = useState('Standard (2-3 Weeks)')
  const [selectedFeatures, setSelectedFeatures] = useState([
    'Custom UI/UX Design',
    'Responsive Mobile First',
    'SEO & Meta Tags'
  ])

  const projectTypes = [
    { name: 'Business Website', desc: 'Company portfolio, service pages, and lead capture' },
    { name: 'Web Application / SaaS', desc: 'Custom workflows, state management, and user dashboards' },
    { name: 'Landing Page', desc: 'High-conversion single page for launches and marketing' },
    { name: 'Website Redesign & SEO', desc: 'Modernizing outdated code, Core Web Vitals speedup' }
  ]

  const featureOptions = [
    'Custom UI/UX Design',
    'Responsive Mobile First',
    'WhatsApp Direct Ordering',
    'REST API & Backend Logic',
    'SEO & Meta Tags',
    'Custom Contact & Lead Forms',
    'Dark / Light Mode Tokens',
    'Netlify Deployment & Domain SSL'
  ]

  const timelineOptions = [
    'Fast Track (1-2 Weeks)',
    'Standard (2-3 Weeks)',
    'Comprehensive (3-5 Weeks)'
  ]

  const toggleFeature = (feat) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feat))
    } else {
      setSelectedFeatures([...selectedFeatures, feat])
    }
  }

  const handleCreateBrief = () => {
    const briefText = `Hello Codexa Team,\n\nI am interested in starting a project with Codexa:\n\n- Project Type: ${projectType}\n- Desired Timeline: ${timeline}\n- Key Features Required:\n  * ${selectedFeatures.join(
      '\n  * '
    )}\n\nLooking forward to discussing next steps!\n`
    onExportBrief(briefText)
  }

  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c0e1c] via-[#090b14] to-[#07080f] border border-indigo-500/30 shadow-2xl text-left">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE SCOPE PLANNER</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Plan Your Project Scope in 60 Seconds
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Zero obligation • Instant brief
            </span>
          </div>

          {/* Form Controls */}
          <div className="mt-8 space-y-8">
            {/* 1. Project Type */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                1. Select Project Type
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {projectTypes.map((t) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setProjectType(t.name)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      projectType === t.name
                        ? 'bg-indigo-950/40 border-indigo-500 text-white shadow-md'
                        : 'bg-white/[0.02] border-white/8 text-zinc-300 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-zinc-400 mt-1">{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Key Features */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                2. Choose Key Features Needed
              </label>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat)
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs transition-all ${
                        isChecked
                          ? 'bg-indigo-600/20 border-indigo-500/60 text-white'
                          : 'bg-white/[0.02] border-white/8 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-indigo-600 border-indigo-500 text-white'
                            : 'border-white/20'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <span className="font-medium">{feat}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 3. Desired Timeline */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                3. Target Timeline
              </label>
              <div className="grid sm:grid-cols-3 gap-2.5">
                {timelineOptions.map((tl) => (
                  <button
                    key={tl}
                    type="button"
                    onClick={() => setTimeline(tl)}
                    className={`p-3 rounded-xl border text-center text-xs font-medium transition-all ${
                      timeline === tl
                        ? 'bg-indigo-950/50 border-indigo-500 text-white shadow-md'
                        : 'bg-white/[0.02] border-white/8 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {tl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 font-mono">
              Selected: <span className="text-white font-semibold">{projectType}</span> • {selectedFeatures.length} Features
            </div>

            <button
              type="button"
              onClick={handleCreateBrief}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all"
            >
              <span>Use This Scope in Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
