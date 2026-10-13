import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects({ onOpenCaseStudy }) {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block">
            Featured Projects
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Selected Work &amp; Real Solutions
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            A portfolio of live web applications, client deliveries, and technical utilities built with modern standards.
          </p>
        </div>

        {/* Projects Grid: 3-Column Balanced Layout */}
        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
