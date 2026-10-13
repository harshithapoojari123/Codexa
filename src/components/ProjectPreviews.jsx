import { useState } from 'react'
import { Sparkles, MessageCircle, ExternalLink, Copy, Check, Car, Compass, Calendar, CheckCircle2 } from 'lucide-react'

export function PaletteGenPreview() {
  const [copiedHex, setCopiedHex] = useState(null)

  const swatches = [
    { name: 'Dark Slate', hex: '#0B0F19', text: '#F8FAFC' },
    { name: 'Electric Indigo', hex: '#6366F1', text: '#FFFFFF' },
    { name: 'Cyan Sky', hex: '#38BDF8', text: '#0F172A' },
    { name: 'Emerald', hex: '#10B981', text: '#0F172A' },
    { name: 'Amber Gold', hex: '#F59E0B', text: '#0F172A' }
  ]

  const handleCopy = (hex, e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 1500)
  }

  return (
    <div className="w-full h-full bg-[#090b14] p-4 sm:p-5 flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/8">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-mono text-indigo-300 font-medium">PaletteGen Engine v2.4</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            WCAG AAA Pass
          </span>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
            Tailwind 4 Ready
          </span>
        </div>
      </div>

      {/* Swatches Strip */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 my-4">
        {swatches.map((s) => (
          <div
            key={s.hex}
            onClick={(e) => handleCopy(s.hex, e)}
            className="group relative rounded-xl h-24 sm:h-28 p-2 flex flex-col justify-between cursor-pointer transition-all hover:scale-105 hover:shadow-lg border border-white/10"
            style={{ backgroundColor: s.hex }}
            title={`Click to copy ${s.hex}`}
          >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity self-end">
              {copiedHex === s.hex ? (
                <Check className="w-3.5 h-3.5" style={{ color: s.text }} />
              ) : (
                <Copy className="w-3.5 h-3.5" style={{ color: s.text }} />
              )}
            </div>
            <div>
              <span
                className="block text-[10px] sm:text-xs font-mono font-bold tracking-tight truncate"
                style={{ color: s.text }}
              >
                {copiedHex === s.hex ? 'COPIED' : s.hex}
              </span>
              <span
                className="hidden sm:block text-[9px] truncate opacity-80"
                style={{ color: s.text }}
              >
                {s.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Utility Export Footer */}
      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
        <span className="text-zinc-400 font-mono text-[11px] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Click any color block to copy HEX token
        </span>
        <span className="font-mono text-indigo-400 text-[11px]">CSS / Tailwind / JSON</span>
      </div>
    </div>
  )
}

export function NurseryPreview() {
  return (
    <div className="w-full h-full bg-[#08120e] p-4 sm:p-5 flex flex-col justify-between select-none">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-900/40">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="text-xs font-semibold text-emerald-300">Akhanda Nursery Catalog</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-mono">
          Live Client Delivery
        </span>
      </div>

      {/* Category Pills & Product Mockup */}
      <div className="my-3 space-y-3">
        <div className="flex gap-1.5 overflow-hidden text-[11px]">
          <span className="px-2.5 py-1 rounded-md bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-medium">
            Indoor Plants
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/5">
            Flowering Shrubs
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/5">
            Medicinal Herbs
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/30 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-emerald-400 uppercase font-mono tracking-wider">Air Purifier</span>
              <div className="text-sm font-semibold text-white mt-0.5">Monstera Deliciosa</div>
              <div className="text-[11px] text-zinc-400">Indoor Low Light</div>
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-900/30 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-300">Available</span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                <MessageCircle className="w-3 h-3" /> WhatsApp
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/30 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-emerald-400 uppercase font-mono tracking-wider">Bonsai Specimen</span>
              <div className="text-sm font-semibold text-white mt-0.5">Ficus Microcarpa</div>
              <div className="text-[11px] text-zinc-400">Tabletop Miniature</div>
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-900/30 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-300">In Stock</span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                <MessageCircle className="w-3 h-3" /> WhatsApp
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust CTA */}
      <div className="p-2.5 rounded-lg bg-emerald-900/20 border border-emerald-700/20 flex items-center justify-between text-xs">
        <span className="text-emerald-300 font-mono text-[11px] flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Direct WhatsApp Ordering Flow
        </span>
        <span className="text-emerald-400 font-mono text-[11px]">Sub-second Speed</span>
      </div>
    </div>
  )
}

export function TravelPreview() {
  return (
    <div className="w-full h-full bg-[#0a0d17] p-4 sm:p-5 flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/8">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="text-xs font-semibold text-white">Lavish Holidays</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] text-emerald-400 font-mono">
          Live Client Delivery
        </span>
      </div>

      {/* Featured Tour Card */}
      <div className="my-3 p-3.5 rounded-xl bg-gradient-to-br from-indigo-950/30 via-[#101322] to-transparent border border-indigo-800/20">
        <div className="flex items-center justify-between text-[11px] font-mono text-indigo-300">
          <span className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-indigo-400" /> Curated Journeys
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-indigo-400" /> Worldwide Tours
          </span>
        </div>
        <div className="mt-2 text-base font-bold text-white">Premium Travel &amp; Curated Holidays</div>
        <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
          Personalized vacation itineraries, exclusive hotel reservations, and custom worldwide holiday packages.
        </p>

        <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-zinc-400 uppercase font-mono">Destinations</span>
            <div className="text-xs font-semibold text-white font-mono">Domestic &amp; International</div>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-indigo-600/25 text-indigo-300 border border-indigo-500/30 text-xs font-medium">
            Explore Packages
          </span>
        </div>
      </div>

      {/* Feature Footnote */}
      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
        <span className="text-zinc-400 font-mono text-[11px]">Bespoke Travel Inquiry</span>
        <span className="text-emerald-400 font-mono text-[11px]">lavish-holidays.netlify.app</span>
      </div>
    </div>
  )
}

export function FleetPreview() {
  return (
    <div className="w-full h-full bg-[#120f09] p-4 sm:p-5 flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-amber-900/30">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="text-xs font-semibold text-amber-300">Bhuvana Travels Dispatch</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-400 font-mono">
          Fleet Booking UI
        </span>
      </div>

      {/* Fleet Selector Mockup */}
      <div className="my-3 space-y-2.5">
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-700/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Executive Sedan</span>
              <Car className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-[11px] text-zinc-400 mt-1">Dzire / Etios • 4 Pax</div>
            <div className="mt-2 text-xs font-mono font-bold text-amber-300">₹14 / km <span className="text-[10px] text-zinc-400 font-normal">Outstation</span></div>
          </div>

          <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-700/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Premium SUV</span>
              <Car className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-[11px] text-zinc-400 mt-1">Innova Crysta • 7 Pax</div>
            <div className="mt-2 text-xs font-mono font-bold text-amber-300">₹20 / km <span className="text-[10px] text-zinc-400 font-normal">Outstation</span></div>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
          <span className="text-zinc-300 font-medium">Airport Transfers & Outstation Tours</span>
          <span className="text-amber-400 font-mono text-[11px]">Instant Dispatch</span>
        </div>
      </div>

      {/* Footer */}
      <div className="p-2.5 rounded-lg bg-amber-900/20 border border-amber-700/20 flex items-center justify-between text-xs">
        <span className="text-amber-300 font-mono text-[11px] flex items-center gap-1.5">
          <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
          WhatsApp Driver & Cab Booking Flow
        </span>
        <span className="text-amber-400 font-mono text-[11px]">Transparent Pricing</span>
      </div>
    </div>
  )
}
