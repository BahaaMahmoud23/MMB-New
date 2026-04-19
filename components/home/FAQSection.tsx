'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Display } from '@/components/ui/Display'
import { useLanguage } from '@/lib/i18n'
import { getAllFAQs } from '@/lib/data/faqs'
import type { FAQ } from '@/lib/types'

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14"/><path d="M5 12h14"/>
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
    </svg>
  )
}

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
  isLast,
  lang,
}: {
  item: FAQ
  index: number
  isOpen: boolean
  onToggle: () => void
  isLast: boolean
  lang: string
}) {
  const question = lang === 'ar' && item.ar ? item.ar.question : item.question
  const answer = lang === 'ar' && item.ar ? item.ar.answer : item.answer

  return (
    <div className={!isLast ? 'border-b border-[#52057B]/15' : ''}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[10px] tracking-widest text-white/25">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-base font-semibold text-white/85">{question}</span>
        </div>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? 'bg-[#892CDC] border-[#892CDC] text-white'
              : 'border-white/15 text-white/50 group-hover:border-[#892CDC] group-hover:text-[#BC6FF1]'
          }`}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <p className="text-white/45 text-sm leading-relaxed px-6 pb-5 pl-[3.75rem] pr-16">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [headingRef, headingInView] = useInView()
  const [open, setOpen] = useState<number>(0)
  const { t, lang } = useLanguage()
  const faqs = getAllFAQs()

  return (
    <section id="faq" className="py-28 bg-[#030303]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-12 gap-6 mb-16 ${headingInView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="col-span-12 md:col-span-5">
            <Eyebrow num="06 / 06">{t.faq.label}</Eyebrow>
            <Display className="text-[clamp(40px,5vw,72px)]">
              {t.faq.title}{' '}
              <span
                className="italic"
                style={{ fontFamily: 'var(--font-instrument), Georgia, serif', fontWeight: 400 }}
              >
                {t.faq.titleAccent}
              </span>
              .
            </Display>
            <p className="mt-6 text-white/45 leading-relaxed max-w-sm">
              {t.faq.subtitle}{' '}
              <a
                href={`mailto:${t.cta.email}`}
                className="text-[#BC6FF1] hover:text-white transition-colors underline underline-offset-2 decoration-[#892CDC]/40"
              >
                {t.cta.email}
              </a>
              .
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="bg-[#070707] border border-[#52057B]/20 rounded-2xl overflow-hidden">
              {faqs.map((f, i) => (
                <FAQItem
                  key={f.question}
                  item={f}
                  index={i}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? -1 : i)}
                  isLast={i === faqs.length - 1}
                  lang={lang}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
