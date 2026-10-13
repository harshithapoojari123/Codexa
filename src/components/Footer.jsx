import { ArrowUp } from 'lucide-react'
import logoImage from '../assets/codexa-logo.png'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-[#0a0b10] border-t border-white/8 py-12 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand Info */}
          <div className="space-y-1.5">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#171924] border border-white/10 flex items-center justify-center overflow-hidden">
                <img src={logoImage} alt="Codexa" className="w-4 h-4 object-contain" />
              </div>
              <span className="text-base font-semibold text-white tracking-tight">Codexa</span>
            </a>
            <p className="text-xs text-zinc-400">
              Thoughtful Design. Powerful Development. Digital Experiences That Work.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-5 text-xs text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:team.codexa.in@gmail.com"
              className="text-indigo-400 hover:text-indigo-300 transition-colors font-mono"
            >
              team.codexa.in@gmail.com
            </a>
          </nav>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Codexa. Developed by Harshitha Poojari.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-zinc-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}
