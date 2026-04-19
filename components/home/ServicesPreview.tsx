'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Display } from '@/components/ui/Display'
import { useLanguage } from '@/lib/i18n'
import { getAllServices } from '@/lib/data/services'
import type { Service } from '@/lib/types'

const iconPaths: Record<string, React.ReactNode> = {
  globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/></>,
  smartphone: <><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></>,
  zap: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>,
  shopping: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
  chart: <><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 5-5"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
  layers: <><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></>,
  gauge: <><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M5 12a7 7 0 0 1 7-7"/><path d="M19 12a7 7 0 0 1-7 7"/></>,
}

function ServiceIcon({ name, size = 20 }: { name: string; size?: number }) {
  const iconName = name.toLowerCase().replace('palette', 'globe').replace('layoutdashboard', 'chart').replace('settings2', 'settings').replace('calendarcheck', 'chart').replace('gauge', 'gauge')
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[iconName] || iconPaths.settings}
    </svg>
  )
}

function ServiceCard({ service, index, lang }: { service: Service; index: number; lang: string }) {
  const [ref, inView] = useInView()
  const [hover, setHover] = useState(false)
  const title = lang === 'ar' && service.ar ? service.ar.title : service.title
  const desc = lang === 'ar' && service.ar ? service.ar.description : service.description

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative group p-7 lg:p-8 border-r border-b border-[#52057B]/20 bg-black transition-all duration-300 ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'both' }}
    >
      {/* Hover fill */}
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
              hover
                ? 'bg-white/20 text-white'
                : 'bg-[#52057B]/20 border border-[#52057B]/40 text-[#BC6FF1]'
            }`}
          >
            <ServiceIcon name={service.iconName} />
          </div>
        </div>
        <h3 className={`text-lg font-bold mb-3 transition-colors ${hover ? 'text-white' : 'text-white/90'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 transition-colors ${hover ? 'text-white/70' : 'text-white/45'}`}>
          {desc}
        </p>
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

export function ServicesPreview() {
  const [headingRef, headingInView] = useInView()
  const { t, lang } = useLanguage()
  const services = getAllServices().slice(0, 6)

  return (
    <section id="services" className="py-28 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-12 gap-6 mb-16 ${headingInView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="col-span-12 md:col-span-7">
            <Eyebrow num="01 / 06">{t.services.label}</Eyebrow>
            <Display className="text-[clamp(40px,6vw,80px)]">
              {t.services.title}{' '}
              <span
                className="italic"
                style={{ fontFamily: 'var(--font-instrument), Georgia, serif', fontWeight: 400 }}
              >
                {t.services.titleAccent}
              </span>
              .
            </Display>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-white/45 leading-relaxed">{t.services.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#52057B]/20">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
