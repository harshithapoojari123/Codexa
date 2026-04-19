import { useEffect, useMemo, useRef, useState } from 'react'
import heroImage from './assets/hero.png'
import logoImage from './assets/codexa-logo.png'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'What We Build', href: '#work' },
  { label: 'Why Codexa', href: '#why-codexa' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  {
    title: 'Web Application Development',
    description:
      'We build fast, scalable, and secure web applications tailored to your business needs.',
    features: ['Scalable architecture', 'Performance optimised', 'Secure by design', 'Responsive UI'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 14.5v-9Zm2 0v9c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5ZM9 20a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" />
      </svg>
    ),
  },
  {
    title: 'Backend & API Development',
    description:
      'Robust backend systems designed for performance, scalability, and seamless integrations.',
    features: ['REST & GraphQL APIs', 'Microservices', 'Database design', 'Third-party integrations'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm12 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM5 11h2v2H5c-.55 0-1 .45-1 1v1H2v-1a3 3 0 0 1 3-3Zm14-2h-2V7h2a3 3 0 0 1 3 3v1h-2v-1c0-.55-.45-1-1-1ZM8 7h8v2H8V7Zm0 8h8v2H8v-2Z" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description:
      'Clean, intuitive, and user-focused designs that enhance engagement and usability.',
    features: ['Figma prototypes', 'Design systems', 'User research', 'Accessibility'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 2h4a3 3 0 1 1 0 6H9V2Zm0 8h4a3 3 0 1 1 0 6H9v-6Zm0 8h1a3 3 0 1 1-3-3h2v3Zm0-8H7a3 3 0 1 1 0-6h2v6Zm5 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Features',
    description:
      'Implementation of chat systems, notifications, and interactive features for modern applications.',
    features: ['Live chat systems', 'Push notifications', 'Real-time updates', 'Interactive UIs'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a9 9 0 0 1 7.17 14.44L20 21l-3.88-1.56A9 9 0 1 1 12 3Zm0 2a7 7 0 0 0-5.6 11.2l.33.44-.45 2.01 2.06-.83.42.24A7 7 0 1 0 12 5Zm-1 3h2v5h-2V8Zm0 6h2v2h-2v-2Z" />
      </svg>
    ),
  },
  {
    title: 'Custom Business Solutions',
    description:
      'We develop solutions tailored specifically for your workflows and business processes.',
    features: ['Custom workflows', 'Role-based access', 'Process automation', 'Internal tools'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 3h4a2 2 0 0 1 2 2v1h2.5A2.5 2.5 0 0 1 21 8.5v10a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-10A2.5 2.5 0 0 1 5.5 6H8V5a2 2 0 0 1 2-2Zm0 3h4V5h-4v1Zm-4.5 2a.5.5 0 0 0-.5.5V11h14V8.5a.5.5 0 0 0-.5-.5h-13Zm13.5 5H5v5.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V13Z" />
      </svg>
    ),
  },
]

const caseStudies = [
  {
    title: 'Business Website With Admin Control',
    description:
      'A modern company website with a clean interface and a simple admin area for managing content and updates.',
    tasks: [
      'Professional homepage and service sections',
      'Admin-friendly content management flow',
      'Responsive layout across devices',
    ],
    result: 'A strong digital presence that is easy to manage and ready to grow.',
  },
  {
    title: 'Booking & Service Platform',
    description:
      'A booking-focused web experience for businesses that need user interaction, scheduling, and simple process management.',
    tasks: [
      'Clear booking journey for users',
      'Structured admin-side management flow',
      'Responsive screens for desktop and mobile',
    ],
    result: 'A smoother way for customers to interact with services online.',
  },
  {
    title: 'Custom Web System',
    description:
      'A tailored web application built around a specific workflow, dashboard need, or business process.',
    tasks: [
      'Frontend tailored to business needs',
      'Structured screens and role-based sections',
      'Flexible foundation for future expansion',
    ],
    result: 'A practical system designed around how the business actually works.',
  },
]

const featuredProjectFeatures = [
  {
    label: 'Responsive design',
    detail: 'Mobile + desktop',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 2v14h10V5H7Zm3 14h4v1h-4v-1Z" />
      </svg>
    ),
  },
  {
    label: 'Plant category system',
    detail: 'Easy browsing structure',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3c2.76 0 5 2.24 5 5 0 1.42-.6 2.7-1.56 3.61A5.99 5.99 0 0 1 19 17v2h-1v-2a4.99 4.99 0 0 0-5-5h-2a5 5 0 0 0-5 5v2H5v-2a5.99 5.99 0 0 1 3.56-5.39A4.99 4.99 0 0 1 7 8c0-2.76 2.24-5 5-5Zm0 2a3 3 0 0 0-2.83 4H9a3 3 0 1 0 6 0h-.17A3 3 0 0 0 12 5Z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp orders',
    detail: 'Direct customer inquiries',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a9 9 0 0 0-7.72 13.61L3 21l4.56-1.2A9 9 0 1 0 12 3Zm0 2a7 7 0 0 1 0 14c-1.3 0-2.54-.34-3.62-.95l-.26-.15-2.66.7.71-2.59-.17-.27A7 7 0 1 1 12 5Zm3.55 9.14c-.17-.08-1.02-.5-1.18-.55-.16-.06-.28-.08-.39.08-.11.17-.45.55-.55.66-.1.11-.2.13-.37.04-.17-.08-.71-.26-1.36-.82-.51-.45-.86-1-.96-1.17-.1-.17-.01-.26.07-.35.08-.08.17-.2.25-.3.08-.1.11-.17.17-.28.06-.11.03-.21-.01-.3-.04-.08-.39-.94-.54-1.28-.14-.34-.28-.29-.39-.3h-.34c-.12 0-.3.04-.46.21-.16.17-.62.6-.62 1.47 0 .88.64 1.74.73 1.86.08.11 1.25 1.95 3.03 2.74.42.18.75.29 1 .37.42.13.81.11 1.11.07.34-.05 1.02-.42 1.17-.83.14-.4.14-.74.1-.82-.04-.08-.16-.12-.33-.2Z" />
      </svg>
    ),
  },
  {
    label: 'SEO-friendly build',
    detail: 'Search-ready structure',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11 3a8 8 0 1 0 4.9 14.3l3.4 3.4 1.4-1.4-3.4-3.4A8 8 0 0 0 11 3Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm-1 2h2v3h3v2h-3v3h-2v-3H7v-2h3V7Z" />
      </svg>
    ),
  },
  {
    label: 'Fast performance',
    detail: 'Optimized for speed',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Zm-1.77 9H8.16l3.6-4.4-.53 4.4Z" />
      </svg>
    ),
  },
]

const whyItems = [
  {
    title: 'Focus on Scalable & Maintainable Solutions',
    text: 'We architect every project to grow with your business - clean code, solid structure, no technical debt.',
  },
  {
    title: 'Clean and Efficient Development Approach',
    text: 'Every line of code has a purpose. We favour clarity and simplicity over complexity.',
  },
  {
    title: 'Strong Attention to User Experience',
    text: 'Interfaces that feel intuitive from the first interaction - functionality meets design elegance.',
  },
  {
    title: 'Reliable and Timely Delivery',
    text: 'We respect your deadlines. Structured workflows and transparent communication keep projects on track.',
  },
  {
    title: 'Problem-Solving Driven Mindset',
    text: 'We dig into the real challenge before writing a single line - delivering solutions, not just software.',
  },
]

const aboutStats = [
  { value: 'New', label: 'Starting Codexa' },
  { value: 'Real', label: 'Honest Process' },
  { value: 'Open', label: 'Ready for Projects' },
]

const aboutHighlights = [
  {
    title: 'Full-Stack Expertise',
    text: 'End-to-end development from database design to polished UI.',
  },
  {
    title: 'Modern Tech Stack',
    text: 'We use the right tools for the job - always with scalability in mind.',
  },
  {
    title: 'Client-First Approach',
    text: 'We work closely with you to understand goals before writing a line of code.',
  },
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const contactRef = useRef(null)

  const mailto = useMemo(() => 'mailto:team.codexa.in@gmail.com', [])
  const gmailCompose = useMemo(
    () =>
      'https://mail.google.com/mail/?view=cm&fs=1&to=team.codexa.in@gmail.com&su=Project%20Inquiry',
    [],
  )

  useEffect(() => {
    document.documentElement.dataset.theme = 'dark'
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('team.codexa.in@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-shell">
          <a className="brand" href="#home" aria-label="Codexa">
            <img src={logoImage} alt="Codexa" className="brand-logo" />
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary nav-cta" href="#contact">
              Get in Touch
            </a>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-overlay ${mobileOpen ? 'is-open' : ''}`} onClick={() => setMobileOpen(false)} />
      <aside className={`mobile-panel ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
        <button type="button" className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6-5.6 5.6L5 17.6 10.6 12 5 6.4 6.4 5Z" />
          </svg>
        </button>
        <nav className="mobile-nav" aria-label="Mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#contact" onClick={() => setMobileOpen(false)}>
            Get in Touch
          </a>
        </nav>
      </aside>

      <main className="page" id="home">
        <section className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Full-Stack Web Agency</p>
            <h1>
              <span className="hero-kicker">Codexa builds</span>
              <br />
              clean, scalable <span className="hero-accent">web solutions</span>
              <br />
              for modern businesses.
            </h1>
            <p className="lead">
              Modern web applications, clean UI, and practical functionality built with an honest
              freelance approach.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Get Started
              </a>
              <a className="btn btn-secondary" href="#work">
                View Our Work
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-shape hero-shape-a" />
            <div className="hero-shape hero-shape-b" />
            <div className="hero-image-shell">
              <div className="hero-image-glow" />
              <img src={heroImage} alt="Codexa hero showcase" className="hero-image" />
              <div className="hero-title-chip">Codexa - Building Scalable Digital Solutions</div>
            </div>
          </div>

          <a className="scroll-indicator" href="#services" aria-label="Scroll to explore">
            <span className="scroll-line" />
            <span className="scroll-arrow" />
          </a>
        </section>

        <section className="section services-section" id="services">
          <div className="section-head reveal">
            <p className="eyebrow">Services</p>
            <h2>What We Do</h2>
            <p>
              From web applications to custom business systems - we build solutions that are fast,
              scalable, and built to last.
            </p>
          </div>
          <div className="services-grid services-grid-five">
            {services.map((service) => (
              <article className="service-card reveal" key={service.title}>
                <div className="service-icon-wrap">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="feature-list">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section case-section" id="work">
            <div className="section-head reveal">
              <p className="eyebrow">Case Studies</p>
            <h2>What We Build</h2>
            <p>
              Codexa is just getting started, so instead of fake project claims, this section
              clearly shows the kinds of digital products we are ready to build.
            </p>
          </div>
          <div className="case-list">
            {caseStudies.map((study, index) => (
              <article className="case-study reveal" key={study.title}>
                <div className="case-copy">
                  <p className="case-label">Build Direction</p>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <div className="case-task-block">
                    <strong>What We Did</strong>
                    <ul className="feature-list compact">
                      {study.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="case-result">
                    <strong>Result</strong>
                    <span>{study.result}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section featured-section" id="featured-project">
          <div className="section-head reveal">
            <p className="eyebrow">Portfolio Milestone</p>
            <h2>Featured Project – First Client Success</h2>
            <p>
              A real client delivery that marks a strong milestone in the Codexa journey and shows
              the ability to ship practical business value with care.
            </p>
          </div>

          <article className="featured-project-card reveal">
            <div className="featured-project-copy">
              <div className="project-badge-row">
                <span className="project-badge">Client: Akhanda Nursery</span>
                <span className="project-badge">Business website</span>
                <span className="project-badge project-badge-live">Live project</span>
              </div>

              <h3>Successfully completed my first real-world client project by building a fully responsive business website for Akhanda Nursery.</h3>

              <p className="project-summary">
                The website was designed to present the nursery professionally, help customers
                browse plant categories with ease, and make ordering simple through direct
                WhatsApp communication.
              </p>

              <ul className="project-feature-list">
                {featuredProjectFeatures.map((feature) => (
                  <li key={feature.label} className="project-feature-item">
                    <span className="project-feature-icon">{feature.icon}</span>
                    <span className="project-feature-copy">
                      <strong>{feature.label}</strong>
                      <span>{feature.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="project-trust">
                <strong>Delivered successfully with client satisfaction and real-world business usage.</strong>
              </div>

              <div className="project-actions">
                <a
                  className="btn btn-primary"
                  href="https://akhanda-nursery.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Project
                </a>
              </div>
            </div>

            <div className="featured-project-side">
              <div className="project-side-panel project-side-panel-highlight">
                <span className="project-side-label">Delivery Status</span>
                <strong>Completed and live</strong>
                <p>Built and published as a working client website.</p>
              </div>
              <div className="project-side-panel">
                <span className="project-side-label">Project Focus</span>
                <strong>Trust, clarity, and usability</strong>
                <p>Designed to help a real nursery business look professional online.</p>
              </div>
            </div>
          </article>
        </section>

        <section className="section why-section" id="why-codexa">
          <div className="section-head reveal">
            <p className="eyebrow">Why Codexa</p>
            <h2>Why Codexa</h2>
            <p>Codexa is starting small, but the mindset is clear, focused, and serious about quality.</p>
          </div>
          <div className="why-list">
            {whyItems.map((item) => (
              <article className="why-row reveal" key={item.title}>
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m9.6 16.6-4.2-4.2 1.4-1.4 2.8 2.8 7.6-7.6 1.4 1.4-9 9Z" />
                  </svg>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-head reveal">
            <p className="eyebrow">About Us</p>
            <h2>About Codexa</h2>
            <p>
              Codexa is the beginning of a freelance web agency focused on building modern,
              scalable, and user-friendly digital products. The goal is to create real value
              through clear design, strong frontend development, and practical problem solving.
            </p>
            <p>
              This is the starting phase of Codexa, so the website is intentionally honest.
              No fake testimonials, no fake numbers, and no made-up success stories - only a
              clear presentation of what can be built and how the work will be approached.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-stats reveal">
              {aboutStats.map((item) => (
                <article className="about-stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <div className="about-highlights">
              {aboutHighlights.map((item) => (
                <article className="about-highlight-card reveal" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <article className="promise-card reveal">
              <p className="eyebrow">Our Promise</p>
              <p>
                Codexa will grow through real work, honest communication, and practical results.
                No shortcuts, no fake claims, and no empty promises.
              </p>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-head reveal">
            <p className="eyebrow">Get In Touch</p>
            <h2>Have an idea? Let's build it together.</h2>
            <p>
              We'd love to hear about your project. Drop us a message and we'll get back to you
              as soon as possible.
            </p>
            <div className="hero-actions contact-top-actions">
              <a className="btn btn-primary" href={gmailCompose} target="_blank" rel="noreferrer">
                Contact Us
              </a>
              <a className="btn btn-secondary" href={gmailCompose} target="_blank" rel="noreferrer">
                Start Your Project
              </a>
            </div>
          </div>

          <div className="contact-layout">
            <div className="contact-info-column">
              <a className="email-button reveal" href={gmailCompose} target="_blank" rel="noreferrer">
                team.codexa.in@gmail.com
              </a>
              <p className="contact-note reveal">We typically respond within 24 hours.</p>

              <div className="contact-cards">
                <article className="contact-info-card reveal">
                  <span>Direct Email</span>
                  <strong>team.codexa.in@gmail.com</strong>
                  <p>We typically respond within 24 hours.</p>
                </article>
                <article className="contact-info-card reveal">
                  <span>Response Time</span>
                  <strong>Within 24 hours</strong>
                  <p>Fast and professional communication for every inquiry.</p>
                </article>
                <article className="contact-info-card reveal">
                  <span>Working Remotely</span>
                  <strong>Available Worldwide</strong>
                  <p>We'll work with you to build something reliable, modern, and impactful.</p>
                </article>
              </div>

              <button type="button" className="btn btn-secondary reveal" onClick={copyEmail}>
                {copied ? 'Copied to clipboard' : 'Copy Email'}
              </button>
            </div>

            <div className="contact-direct-card reveal" ref={contactRef}>
              <p className="eyebrow">Connect With Us</p>
              <h3>Open your email composer and start the conversation directly.</h3>
              <p>
                If you click the button below, it will open Gmail or your default mail app with
                Codexa&apos;s email already filled in.
              </p>
              <a className="btn btn-primary" href={gmailCompose} target="_blank" rel="noreferrer">
                Connect With Us
              </a>
              <p className="form-note">Simple, direct, and no form needed.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#home">
              <img src={logoImage} alt="Codexa" className="brand-logo footer-logo" />
            </a>
            <p className="footer-tagline">
              Building scalable digital solutions - modern web applications designed for
              performance and user experience.
            </p>
          </div>

          <div>
            <p className="footer-heading">Navigation</p>
            <nav className="footer-links" aria-label="Footer">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-contact">
            <p className="footer-heading">Get in Touch</p>
            <p>Have an idea? Let's build it together.</p>
            <a href={gmailCompose} target="_blank" rel="noreferrer">team.codexa.in@gmail.com</a>
            <p>We typically respond within 24 hours.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright 2026 Codexa. All rights reserved.</span>
          <span>Built with care in React.</span>
        </div>
      </footer>
    </>
  )
}

export default App
