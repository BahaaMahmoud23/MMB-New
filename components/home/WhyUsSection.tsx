'use client'

import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Display } from '@/components/ui/Display'
import { useLanguage } from '@/lib/i18n'
import { getAllWhyUsItems } from '@/lib/data/whyus'
import type { WhyUsItem } from '@/lib/types'

const iconPaths: Record<string, React.ReactNode> = {
  Clock: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
  Code2: <><path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/></>,
  TrendingUp: <><path d="M23 6 13.5 15.5l-5-5L1 18"/><path d="M17 6h6v6"/></>,
  MessageCircle: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
  ShieldCheck: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>,
  Layers: <><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></>,
}

function WhyIcon({ name }: { name: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[name] || iconPaths.Layers}
    </svg>
  )
}

function ReasonCell({ item, index, lang }: { item: WhyUsItem; index: number; lang: string }) {
  const [ref, inView] = useInView()
  const title = lang === 'ar' && item.ar ? item.ar.title : item.title
  const desc = lang === 'ar' && item.ar ? item.ar.description : item.description

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative p-8 lg:p-10 bg-[#070707] hover:bg-[#0d0518] transition-colors duration-300 ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 70}ms`, animationFillMode: 'both' }}
    >
      <div className="flex items-start gap-5">
        <div className="w-11 h-11 rounded-lg bg-[#52057B]/20 border border-[#52057B]/40 flex items-center justify-center flex-shrink-0 text-[#BC6FF1]">
          <WhyIcon name={item.iconName} />
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-mono tracking-widest uppercase text-white/20 mb-2">
            {String(index + 1).padStart(2, '0')}
          </div>
          <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{title}</h3>
          <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export function WhyUsSection() {
  const [headingRef, headingInView] = useInView()
  const { t, lang } = useLanguage()
  const items = getAllWhyUsItems()

  return (
    <section id="whyus" className="py-28 bg-black relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(137,44,220,1) 1px, transparent 1px), linear-gradient(90deg, rgba(137,44,220,1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-12 gap-6 mb-16 ${headingInView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="col-span-12 md:col-span-7">
            <Eyebrow num="04 / 06">{t.whyUs.label}</Eyebrow>
            <Display className="text-[clamp(40px,6vw,80px)]">
              {t.whyUs.title}{' '}
              <span
                className="italic"
                style={{ fontFamily: 'var(--font-instrument), Georgia, serif', fontWeight: 400 }}
              >
                {t.whyUs.titleAccent}
              </span>
            </Display>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-white/45 leading-relaxed">{t.whyUs.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#52057B]/15">
          {items.map((item, i) => (
            <ReasonCell key={item.title} item={item} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
