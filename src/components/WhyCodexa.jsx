import { Users, Code2, Gauge, ShieldCheck } from 'lucide-react'

const advantages = [
  {
    icon: Users,
    title: 'Direct Collaboration',
    description:
      'You communicate directly with the developer building your project. Feedback is implemented quickly with clear dialogue and zero lost requirements.'
  },
  {
    icon: Code2,
    title: 'Clean, Maintainable Code',
    description:
      'Every project is engineered with modern standards (React, Node.js, Tailwind CSS). No bloated page builders, no slow plugins, and no technical debt.'
  },
  {
    icon: Gauge,
    title: 'Performance & SEO First',
    description:
      'Fast page load times, mobile-first responsive viewports, and clean semantic structure help keep bounce rates low and search rankings strong.'
  },
  {
    icon: ShieldCheck,
    title: '100% Code Ownership',
    description:
      'You own all code repositories, assets, and deployment keys upon completion. Full transparency, clear milestones, and zero vendor lock-in.'
  }
]

export function WhyCodexa() {
  return (
    <section id="why-codexa" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#0e1017]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
            Why Work With Codexa
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Small Studio Focus. Thoughtful Engineering.
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            The personal commitment of an independent developer paired with modern full-stack development standards.
          </p>
        </div>

        {/* 4 Clean Advantages Grid */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-[#12141c] border border-white/8 hover:border-indigo-500/30 transition-colors text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#171924] border border-white/10 flex items-center justify-center text-indigo-400 mb-4">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
