'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/i18n'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
    </svg>
  )
}

const indexItems = [
  { n: '001', label: 'Services', sub: '06 offerings', id: 'services' },
  { n: '002', label: 'Work', sub: '06 selected', id: 'projects' },
  { n: '003', label: 'Process', sub: '06 phases', id: 'process' },
  { n: '004', label: 'About', sub: 'Since 2019', id: 'about' },
  { n: '005', label: 'FAQ', sub: '08 answers', id: 'faq' },
  { n: '006', label: 'Contact', sub: 'hello@mmb.dev', id: 'cta' },
]

export function HeroSection() {
  const { t } = useLanguage()
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }))
    update()
    const id = setInterval(update, 10000)
    return () => clearInterval(id)
  }, [])

  const stats = [
    { v: '50+', l: 'Projects delivered' },
    { v: '98%', l: 'Client satisfaction' },
    { v: '5yr', l: 'Track record' },
    { v: '14d', l: 'Average kickoff' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black pt-20 pb-12"
    >
      {/* Radial purple glow in background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(82,5,123,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(137,44,220,0.25) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 90%)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        {/* Top meta bar */}
        <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-white/25 mb-12 pt-4">
          <div className="flex items-center gap-3">
            <span>MMB · 001</span>
            <span className="h-px w-6 bg-white/10" />
            <span>Landing / 2026</span>
          </div>
          <div className="flex items-center gap-3">
            {time && <span>{time} LOCAL</span>}
            <span className="h-px w-6 bg-white/10" />
            <span>Remote · Global</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 items-end">
          {/* Headline */}
          <div className="col-span-12 lg:col-span-9">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#52057B]/40 bg-[#52057B]/10 text-[11px] font-medium text-white/60 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#892CDC]" />
              Independent web studio
            </div>

            <h1
              className="font-black tracking-[-0.02em] leading-[0.95] text-white"
              style={{ fontSize: 'clamp(56px, 10vw, 168px)' }}
            >
              <span className="block">Websites that</span>
              <span className="block">
                <span
                  className="italic"
                  style={{
                    fontFamily: 'var(--font-instrument), Georgia, serif',
                    fontWeight: 400,
                    color: '#BC6FF1',
                  }}
                >
                  feel
                </span>{' '}
                alive.
              </span>
            </h1>

            <p className="mt-10 text-lg text-white/45 max-w-xl leading-relaxed">
              {t.hero.subheadline}
            </p>

            <div className="mt-10 flex gap-3 flex-wrap">
              <button
                onClick={() => scrollTo('cta')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#892CDC] text-white font-semibold rounded-lg hover:bg-[#52057B] transition-colors cursor-pointer"
              >
                {t.hero.cta1}
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  <ArrowRightIcon />
                </span>
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white font-semibold rounded-lg border border-white/15 hover:border-[#892CDC] hover:text-white transition-colors cursor-pointer"
              >
                {t.hero.cta2}
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  <ArrowRightIcon />
                </span>
              </button>
            </div>
          </div>

          {/* Right column — live index */}
          <div className="col-span-12 lg:col-span-3 lg:border-l lg:border-[#52057B]/25 lg:pl-6">
            <div className="text-[10px] font-mono tracking-widest uppercase text-white/25 mb-4">
              Index / Now
            </div>
            <div className="flex flex-col divide-y divide-white/[0.06]">
              {indexItems.map((it) => (
                <button
                  key={it.n}
                  onClick={() => scrollTo(it.id)}
                  className="group flex items-baseline gap-3 py-2.5 cursor-pointer w-full text-left"
                >
                  <span className="font-mono text-[10px] text-white/20 w-8">{it.n}</span>
                  <span className="text-sm font-semibold text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                    {it.label}
                  </span>
                  <span className="ml-auto text-[10px] text-white/25 font-mono">{it.sub}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="mt-20 pt-8 border-t border-white/[0.07] grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <div className="text-3xl md:text-4xl font-black tracking-tight text-white">
                {s.v}
              </div>
              <div className="text-[11px] text-white/35 leading-tight max-w-[120px]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
