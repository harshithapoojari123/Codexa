import { ArrowRight, ArrowDown } from 'lucide-react'
import { CraftPreview } from './CraftPreview'

export function Hero({ onStartProject }) {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Copy (Left Column) */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Tagline / Subtitle Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141c] border border-white/10 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Harshitha Poojari • Freelance Full-Stack Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18] font-sans">
              Thoughtful Design. Powerful Development.{' '}
              <span className="text-indigo-400">Digital Experiences That Work.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl font-normal">
              Codexa helps businesses build professional websites and practical web solutions through modern development, clean design, and reliable technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-zinc-300 hover:text-white bg-[#12141c] hover:bg-[#171924] border border-white/10 transition-colors text-sm"
              >
                <span>Explore My Work</span>
              </a>
            </div>

            {/* Simple Trust Points */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400">
              <span>Full-Stack &amp; Backend</span>
              <span className="text-zinc-600">•</span>
              <span>Clean Code Architecture</span>
              <span className="text-zinc-600">•</span>
              <span>Direct Collaboration</span>
            </div>
          </div>

          {/* Hero Subtle Visual Element (Right Column) */}
          <div className="lg:col-span-5 relative">
            <CraftPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
