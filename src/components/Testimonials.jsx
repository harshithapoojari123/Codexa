import { Quote, ExternalLink } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#0e1017]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
            Client Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Client Words &amp; Real Outcomes
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Genuine feedback from delivered client projects.
          </p>
        </div>

        {/* Authentic Testimonial Card */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#12141c] border border-white/8 text-left shadow-sm">
          <Quote className="w-8 h-8 text-indigo-400/40 mb-4" />

          <blockquote className="text-base sm:text-lg text-zinc-200 font-normal leading-relaxed">
            &ldquo;Codexa delivered a fast, clean website that makes it effortless for our nursery customers to explore plants and message us on WhatsApp. The communication was direct, transparent, and prompt throughout.&rdquo;
          </blockquote>

          <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-white">Akhanda Nursery</div>
              <div className="text-xs text-zinc-400 font-mono">Business Website Client</div>
            </div>

            <a
              href="https://akhanda-nursery.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Visit akhanda-nursery.netlify.app</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
