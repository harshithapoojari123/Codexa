import { ExternalLink, ArrowUpRight } from 'lucide-react'
import {
  PaletteGenPreview,
  NurseryPreview,
  TravelPreview,
  FleetPreview
} from './ProjectPreviews'

export function ProjectCard({ project, onOpenCaseStudy }) {
  const renderPreview = () => {
    switch (project.previewType) {
      case 'palettegen':
        return <PaletteGenPreview />
      case 'nursery':
        return <NurseryPreview />
      case 'travel':
        return <TravelPreview />
      case 'fleet':
        return <FleetPreview />
      default:
        return (
          <div className="w-full h-full bg-[#12141c] flex items-center justify-center p-6 text-center">
            <span className="font-mono text-xs text-zinc-400">{project.title}</span>
          </div>
        )
    }
  }

  const badgeStyles = {
    purple: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20'
  }

  return (
    <article className="group flex flex-col rounded-xl bg-[#12141c] border border-white/8 hover:border-indigo-500/40 transition-colors overflow-hidden text-left shadow-sm">
      {/* Top Preview Canvas */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden border-b border-white/8 bg-[#0c0d12]">
        {renderPreview()}

        {/* Floating Status Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium border backdrop-blur-md ${
              badgeStyles[project.badgeVariant] || badgeStyles.purple
            }`}
          >
            {project.badge}
          </span>
        </div>

        {project.isLive && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-400/25 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Live
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
        <div className="space-y-2.5">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Tech tags and action links */}
        <div className="space-y-4 pt-3 border-t border-white/5">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-[#171924] border border-white/8 text-[11px] font-mono text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 pt-1">
            {project.isLive && project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <span>View Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/[0.03] text-zinc-400 text-xs font-mono border border-white/5">
                {project.badge}
              </span>
            )}

            {project.hasCaseStudy && (
              <button
                type="button"
                onClick={() => onOpenCaseStudy(project)}
                className="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-medium border border-white/8 transition-colors"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
