import { useState } from 'react'
import {
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  ChevronDown
} from 'lucide-react'
import { faqs } from '../data/faq'

export function Contact({ prefilledMessage }) {
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Design & Development',
    message: prefilledMessage || ''
  })

  // Sync if prefilledMessage updates
  if (prefilledMessage && formData.message !== prefilledMessage && formData.message === '') {
    setFormData((prev) => ({ ...prev, message: prefilledMessage }))
  }

  const emailAddress = 'team.codexa.in@gmail.com'

  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    emailAddress
  )}&su=${encodeURIComponent(
    `Project Inquiry: ${formData.service} — ${formData.name || 'New Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Details:\n${formData.message}`
  )}`

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.service}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Details:\n${formData.message}`
  )}`

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.open(gmailCompose, '_blank')
  }

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Have an Idea? Let&apos;s Build It Together
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Send a brief about your project or reach out directly. I respond to every genuine enquiry within 24 hours.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          {/* Left: Project Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#12141c] border border-white/8 shadow-sm">
            <h3 className="text-lg font-semibold text-white tracking-tight mb-1">
              Send a Project Brief
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Fill in your details below to compose a direct enquiry.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#171924] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#171924] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Service Needed
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#171924] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="Website Design & Development">Website Design &amp; Development</option>
                  <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                  <option value="Backend Development & REST APIs">Backend Development &amp; REST APIs</option>
                  <option value="Business Websites & Landing Pages">Business Websites &amp; Landing Pages</option>
                  <option value="Portfolio Websites">Portfolio Websites</option>
                  <option value="Website Redesign & SEO">Website Redesign &amp; SEO</option>
                  <option value="Other Project Inquiry">Other Project Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about what you would like to build, timeline, or any specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#171924] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors text-xs sm:text-sm shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Gmail</span>
                </button>

                <a
                  href={mailtoLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Default Mail App</span>
                </a>
              </div>

              <p className="text-[11px] text-zinc-500 pt-1">
                Submitting opens your email client with your enquiry pre-filled, so you review and send it directly.
              </p>
            </form>
          </div>

          {/* Right: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-xl bg-[#12141c] border border-white/8 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
                  Direct Email
                </span>
                <div className="text-base font-semibold text-white font-mono break-all">
                  {emailAddress}
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Feel free to send an email directly from your preferred client.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-zinc-200 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={gmailCompose}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-medium text-indigo-300 hover:text-white transition-colors"
                >
                  <span>Compose</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#12141c] border border-white/8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                Availability &amp; Turnaround
              </span>
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Response time:</span>
                  <span className="font-medium text-white">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Location:</span>
                  <span className="font-medium text-white">Remote (Worldwide)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Project status:</span>
                  <span className="font-medium text-emerald-400">Open for select projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="mt-16 pt-12 border-t border-white/5 max-w-3xl mx-auto text-left">
          <div className="text-center mb-8 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Have questions about working with Codexa? Find out how we approach projects, pricing, development, and delivery.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={faq.question}
                  className="rounded-lg bg-[#12141c] border border-white/8 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-medium text-xs sm:text-sm text-zinc-200 hover:text-white transition-colors"
                  >
                    <span className="font-semibold text-white">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 shrink-0 ml-3 transition-transform ${
                        isOpen ? 'rotate-180 text-indigo-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
