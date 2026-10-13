import { Code2, ArrowUpRight } from 'lucide-react'

export function About({ onStartProject }) {
  const skills = [
    'React',
    'Node.js',
    'REST APIs',
    'Tailwind CSS',
    'Vite',
    'JavaScript (ES6+)',
    'UI/UX Design',
    'SEO Foundations',
    'Git & Netlify'
  ]

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center text-left">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
              About Codexa
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Driven by Clean Code &amp; Practical Problem Solving
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              <p>
                Hi, I&apos;m <strong className="text-white font-medium">Harshitha Poojari</strong>, a freelance Full-Stack and Backend Developer and the founder of <strong className="text-white font-medium">Codexa</strong>.
              </p>
              <p>
                I help businesses establish a credible, high-performing online presence. Rather than relying on generic page builders or bloated templates, I build custom web solutions with clean frontends, resilient backend architectures, and thoughtful UI/UX design.
              </p>
              <p>
                When you partner with Codexa, you work directly with me throughout the entire process — from initial scope and interface design to code delivery, deployment, and ongoing optimization.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Have a project in mind? Let&apos;s talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Key Details & Tech Stack */}
          <div className="lg:col-span-5 p-7 rounded-xl bg-[#12141c] border border-white/8 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                Core Competencies
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Full-stack web applications, business websites, custom REST APIs, performance audits, and responsive redesigns.
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                Technologies &amp; Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-[#171924] border border-white/8 text-xs font-mono text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Operating Worldwide</span>
              <span className="text-emerald-400">Remote Freelance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
