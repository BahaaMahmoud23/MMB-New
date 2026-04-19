'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useLanguage } from '@/lib/i18n'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 13 4 4L19 7"/>
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
    </svg>
  )
}

export function AboutPageContent() {
  const { t } = useLanguage()

  return (
    <>
      {/* Story */}
      <section className="py-28 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{t.about.storyTitle}</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-base text-white/45 leading-relaxed">{t.about.story1}</p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="text-base text-white/45 leading-relaxed">{t.about.story2}</p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-[#BC6FF1] transition-colors"
                >
                  {t.about.workWithUs}
                  <span className="group-hover:translate-x-1 transition-transform">
                    <ArrowRightIcon />
                  </span>
                </Link>
              </AnimatedSection>
            </div>

            <div className="flex flex-col gap-6">
              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t.about.standForTitle}</h2>
              </AnimatedSection>
              {t.about.pageValues.map((v, i) => (
                <AnimatedSection key={v.name} delay={i * 0.1}>
                  <div className="rounded-2xl p-5 border border-[#52057B]/25 bg-[#070707]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#52057B] flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{v.letter}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white mb-1">{v.name}</h3>
                        <p className="text-sm text-white/45 leading-relaxed">{v.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-28 bg-[#030303]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection className="flex flex-col items-center text-center gap-4 mb-12">
            <div className="text-[10px] font-mono tracking-widest uppercase text-white/30">{t.about.capabilitiesLabel}</div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              {t.about.capabilitiesTitle}{' '}
              <span
                className="italic"
                style={{ fontFamily: 'var(--font-instrument), Georgia, serif', fontWeight: 400 }}
              >
                {t.about.capabilitiesTitleAccent}
              </span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {t.about.capabilities.map((cap, i) => (
              <AnimatedSection key={cap} delay={i * 0.06}>
                <div className="flex items-center gap-3 bg-[#070707] rounded-xl p-4 border border-[#52057B]/20">
                  <span className="text-[#BC6FF1] flex-shrink-0"><CheckIcon /></span>
                  <span className="text-sm text-white/70">{cap}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
