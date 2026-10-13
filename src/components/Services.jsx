import {
  Layout,
  Layers,
  Server,
  Globe,
  User,
  Zap,
  ArrowUpRight
} from 'lucide-react'
import { services } from '../data/services'

const iconMap = {
  Layout: Layout,
  Layers: Layers,
  Server: Server,
  Globe: Globe,
  Sparkles: User,
  Zap: Zap
}

export function Services({ onSelectService }) {
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
            Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Digital Solutions Built Around Your Goals
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            From modern business websites to full-stack applications and backend APIs, every project is built with clean code and practical functionality.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Layout

            return (
              <div
                key={service.id}
                className="group p-6 sm:p-7 rounded-xl bg-[#12141c] border border-white/8 hover:border-indigo-500/40 transition-colors text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#171924] border border-white/10 flex items-center justify-center text-indigo-400 mb-5 group-hover:border-indigo-500/40 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">
                    Tailored Delivery
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
