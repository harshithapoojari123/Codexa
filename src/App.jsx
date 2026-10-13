import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { WhyCodexa } from './components/WhyCodexa'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CaseStudyModal } from './components/CaseStudyModal'

function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  const [contactPrefill, setContactPrefill] = useState('')

  const handleStartProject = (context) => {
    if (typeof context === 'string' && context.length > 0) {
      setContactPrefill(`Hi Harshitha, I'm interested in discussing a project: ${context}.`)
    }
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectService = (serviceName) => {
    setContactPrefill(`Hi Harshitha, I would like to inquire about your "${serviceName}" service.`)
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0d12] text-[#f1f3f9] font-sans selection:bg-indigo-600/30 selection:text-white relative">
      {/* 1. Header & Navigation */}
      <Navbar onLetsTalk={() => handleStartProject('New Project Consultation')} />

      <main>
        {/* 1. Hero Section */}
        <Hero onStartProject={() => handleStartProject('New Web Development Project')} />

        {/* 2. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 3. Featured Projects Section */}
        <Projects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />

        {/* 4. Why Codexa Section */}
        <WhyCodexa />

        {/* 5. About Harshitha & Codexa Section */}
        <About onStartProject={() => handleStartProject('Development Collaboration')} />

        {/* 6. Testimonials Section (Authentic feedback only) */}
        <Testimonials />

        {/* 7. Contact Section */}
        <Contact prefilledMessage={contactPrefill} />
      </main>

      {/* 8. Footer Section */}
      <Footer />

      {/* Case Study Details Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
        onStartProject={(projName) => handleStartProject(`Similar project to ${projName}`)}
      />
    </div>
  )
}

export default App
