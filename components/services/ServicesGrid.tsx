'use client'

import { useState } from 'react'
import type { Service } from '@/lib/types'
import { useLanguage } from '@/lib/i18n'
import { useInView } from '@/hooks/useInView'

const iconPaths: Record<string, React.ReactNode> = {
  Palette: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/></>,
  Zap: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>,
  LayoutDashboard: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
  Settings2: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8.92 4.68h0A1.65 1.65 0 0 0 10 3.17V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
  CalendarCheck: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/></>,
  Layers: <><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></>,
  Gauge: <><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M5 12a7 7 0 0 1 7-7"/><path d="M19 12a7 7 0 0 1-7 7"/></>,
}

function ServiceIcon({ name }: { name: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[name] || iconPaths.Layers}
    </svg>
  )
}

function ServiceCard({ service, index, lang }: { service: Service; index: number; lang: string }) {
  const [ref, inView] = useInView()
  const [hover, setHover] = useState(false)
  const title = lang === 'ar' && service.ar ? service.ar.title : service.title
  const description = lang === 'ar' && service.ar ? service.ar.description : service.description

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative group p-7 border-r border-b border-[#52057B]/20 bg-black transition-all duration-300 ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'both' }}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: 'linear-gradient(135deg, #52057B 0%, #3a0457 100%)',
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <span className={`font-mono text-[10px] tracking-widest transition-colors ${hover ? 'text-white/40' : 'text-white/20'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div
            className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all ${
              hover ? 'bg-white/20 text-white' : 'bg-[#52057B]/20 border border-[#52057B]/40 text-[#BC6FF1]'
            }`}
          >
            <ServiceIcon name={service.iconName} />
          </div>
        </div>
        <h3 className={`text-lg font-bold mb-3 transition-colors ${hover ? 'text-white' : 'text-white/90'}`}>{title}</h3>
        <p className={`text-sm leading-relaxed mb-6 transition-colors ${hover ? 'text-white/70' : 'text-white/45'}`}>{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 text-[10px] font-mono rounded border transition-colors ${
                hover ? 'border-white/20 text-white/60' : 'border-[#52057B]/30 text-white/35'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ServicesGrid({ services }: { services: Service[] }) {
  const { lang } = useLanguage()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#52057B]/20">
      {services.map((service, i) => (
        <ServiceCard key={service.id} service={service} index={i} lang={lang} />
      ))}
    </div>
  )
}
