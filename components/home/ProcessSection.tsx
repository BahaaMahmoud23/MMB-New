'use client'

import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Display } from '@/components/ui/Display'
import { useLanguage } from '@/lib/i18n'
import { getAllProcessSteps } from '@/lib/data/process'
import type { ProcessStep } from '@/lib/types'

function StepCard({ step, index, lang }: { step: ProcessStep; index: number; lang: string }) {
  const [ref, inView] = useInView()
  const title = lang === 'ar' && step.ar ? step.ar.title : step.title
  const desc = lang === 'ar' && step.ar ? step.ar.description : step.description
  const duration = lang === 'ar' && step.ar ? step.ar.duration : step.duration

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative ${inView ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      <div
        className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-black border border-[#52057B]/50 mb-5 mx-auto lg:mx-0"
        style={{ boxShadow: '0 0 0 8px #000, 0 0 20px rgba(82,5,123,0.3)' }}
      >
        <span className="font-black text-2xl tracking-tight text-white">{step.number}</span>
      </div>
      <div className="text-center lg:text-left">
        <div className="text-[10px] font-mono tracking-widest uppercase text-white/25 mb-2">{duration}</div>
        <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export function ProcessSection() {
  const [headingRef, headingInView] = useInView()
  const { t, lang } = useLanguage()
  const steps = getAllProcessSteps()

  return (
    <section id="process" className="py-28 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-12 gap-6 mb-14 ${headingInView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div className="col-span-12 md:col-span-7">
            <Eyebrow num="03 / 06">{t.process.label}</Eyebrow>
            <Display className="text-[clamp(40px,6vw,80px)]">
              {t.process.title}{' '}
              <span
                className="italic"
                style={{ fontFamily: 'var(--font-instrument), Georgia, serif', fontWeight: 400 }}
              >
                {t.process.titleAccent.replace('trust end-to-end.', 'trust')}
              </span>
              .
            </Display>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-white/45 leading-relaxed">{t.process.subtitle}</p>
          </div>
        </div>

        {/* Horizontal flow */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[48px] left-0 right-0 h-px bg-[#52057B]/25" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((s, i) => (
              <StepCard key={s.number} step={s} index={i} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
