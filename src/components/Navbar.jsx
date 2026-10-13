import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logoImage from '../assets/codexa-logo.png'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

export function Navbar({ onLetsTalk }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['home', 'services', 'projects', 'about', 'contact']
      const scrollPos = window.scrollY + 140

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'py-3.5 bg-[#0c0d12]/90 backdrop-blur-md border-b border-white/8 shadow-md'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Codexa Homepage"
            >
              <div className="w-8 h-8 rounded-lg bg-[#171924] border border-white/10 flex items-center justify-center overflow-hidden transition-colors group-hover:border-indigo-500/50">
                <img
                  src={logoImage}
                  alt="Codexa"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-base font-semibold tracking-tight text-white font-sans">
                  Codexa
                </span>
                <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline">
                  Studio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Clean 5 items) */}
            <nav className="hidden md:flex items-center gap-1 bg-[#12141c]/90 border border-white/8 rounded-full px-3.5 py-1.5 shadow-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </nav>

            {/* Actions: "Let's Talk" CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={onLetsTalk}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
                className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white bg-[#12141c] border border-white/8 transition-colors"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#0c0d12] border-l border-white/10 p-6 flex flex-col justify-between z-10 shadow-2xl"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#171924] border border-white/10 flex items-center justify-center overflow-hidden">
                    <img src={logoImage} alt="Codexa" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-sm font-semibold text-white">Codexa</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer CTA */}
            <div className="pt-5 border-t border-white/10 space-y-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <div className="text-center">
                <span className="text-[11px] font-mono text-zinc-500">
                  team.codexa.in@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
