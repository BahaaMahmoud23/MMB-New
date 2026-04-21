'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/i18n'

const navLinks = [
  { n: '01', id: 'services' },
  { n: '02', id: 'projects' },
  { n: '03', id: 'process' },
  { n: '04', id: 'about' },
  { n: '05', id: 'faq' },
]

const navLabels: Record<string, { en: string; ar: string }> = {
  services: { en: 'Services', ar: 'الخدمات' },
  projects: { en: 'Work', ar: 'الأعمال' },
  process: { en: 'Process', ar: 'العملية' },
  about: { en: 'About', ar: 'عن الشركة' },
  faq: { en: 'FAQ', ar: 'الأسئلة' },
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="M6 6l12 12" />
    </svg>
  )
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (id: string) => {
    setOpen(false)
    scrollTo(id)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-[#52057B]/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 cursor-pointer"
          aria-label="MMB"
        >
          <div className="w-8 h-8 bg-[#52057B] rounded-md flex items-center justify-center">
            <span className="text-white font-black text-[13px] tracking-tighter">M</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-black tracking-tight text-white text-[15px]">MMB</span>
            <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase border-l border-white/10 pl-2">
              Studio / EST &apos;19
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ n, id }) => (
            <li key={id}>
              <button
                onClick={() => handleLink(id)}
                className="group flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <span className="font-mono text-[10px] text-white/25 group-hover:text-white/60 transition-colors">
                  {n}
                </span>
                <span>{navLabels[id]?.[lang] ?? navLabels[id]?.en}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="hidden md:flex items-center px-2.5 py-1 rounded-md border border-[#52057B]/40 text-[11px] font-mono tracking-widest uppercase text-white/40 hover:border-[#892CDC] hover:text-white transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>

          <button
            onClick={() => handleLink('cta')}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#892CDC] text-white text-sm font-semibold rounded-lg hover:bg-[#52057B] transition-colors cursor-pointer"
          >
            {t.nav.startProject}
            <ArrowRightIcon />
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-white/60 hover:bg-white/5 transition-colors cursor-pointer"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-black border-b border-[#52057B]/30 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-3">
          {navLinks.map(({ n, id }) => (
            <li key={id}>
              <button
                onClick={() => handleLink(id)}
                className="flex items-center gap-3 text-base font-medium text-white/80 w-full text-left py-2"
              >
                <span className="font-mono text-[10px] text-white/25">{n}</span>
                {navLabels[id]?.[lang] ?? navLabels[id]?.en}
              </button>
            </li>
          ))}
          <li className="pt-2 border-t border-white/10">
            <button
              onClick={() => handleLink('cta')}
              className="w-full px-5 py-3 bg-[#892CDC] text-white text-sm font-semibold rounded-lg hover:bg-[#52057B] transition-colors"
            >
              {t.nav.startProject}
            </button>
          </li>
          <li className="pt-1">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-sm text-white/40 font-mono"
            >
              {lang === 'en' ? 'عربي' : 'English'}
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
