import { Code2, Terminal, CheckCircle2 } from 'lucide-react'

export function CraftPreview() {
  return (
    <div className="w-full max-w-lg mx-auto rounded-xl border border-white/10 bg-[#12141c] shadow-xl text-left overflow-hidden">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/8 bg-[#0e1017]">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-600/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-600/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-600/80" />
          <span className="ml-2 text-xs font-mono text-zinc-400">
            harshitha.config.js
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
          <span>Active</span>
        </div>
      </div>

      {/* Editor Body */}
      <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-zinc-300">
        <div className="text-zinc-500">// Codexa • Full-Stack &amp; Backend Engineering</div>
        <div className="mt-2">
          <span className="text-indigo-400">const</span>{' '}
          <span className="text-zinc-100">developer</span> = {'{'}
        </div>
        <div className="pl-4">
          <span className="text-zinc-400">name:</span>{' '}
          <span className="text-emerald-300">&apos;Harshitha Poojari&apos;</span>,
        </div>
        <div className="pl-4">
          <span className="text-zinc-400">role:</span>{' '}
          <span className="text-emerald-300">&apos;Full-Stack &amp; Backend Developer&apos;</span>,
        </div>
        <div className="pl-4">
          <span className="text-zinc-400">agency:</span>{' '}
          <span className="text-emerald-300">&apos;Codexa&apos;</span>,
        </div>
        <div className="pl-4">
          <span className="text-zinc-400">stack:</span> [
          <span className="text-indigo-300">&apos;React&apos;</span>,{' '}
          <span className="text-indigo-300">&apos;Node.js&apos;</span>,{' '}
          <span className="text-indigo-300">&apos;REST APIs&apos;</span>,{' '}
          <span className="text-indigo-300">&apos;Tailwind CSS&apos;</span>
          ],
        </div>
        <div className="pl-4">
          <span className="text-zinc-400">focus:</span>{' '}
          <span className="text-emerald-300">&apos;Performant, responsive, maintainable websites&apos;</span>
        </div>
        <div>{'}'}</div>

        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
            Direct collaboration • Clean code
          </span>
          <span className="text-indigo-400 font-mono">Worldwide Remote</span>
        </div>
      </div>
    </div>
  )
}
