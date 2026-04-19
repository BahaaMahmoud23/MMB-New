'use client'

import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Display } from '@/components/ui/Display'
import { StripedPlaceholder } from '@/components/ui/StripedPlaceholder'
import { useLanguage } from '@/lib/i18n'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
    </svg>
  )
}

export function AboutSnippet() {
  const [ref, inView] = useInView()
  const { t } = useLanguage()

  const values = t.about.values

  return (
    <section id="about" className="py-28 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-12 gap-8 lg:gap-12 items-start ${
            inView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {/* Left — visual block */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              <StripedPlaceholder
                label="Team Photograph / Studio Interior"
                className="rounded-2xl aspect-[5/4]"
                dark
                angle={-25}
                stripeGap={24}
              />
              {/* Caption card */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs bg-black/90 border border-[#52057B]/30 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 border-black"
                        style={{ background: `hsl(${270 + i * 15}, 50%, ${30 + i * 8}%)` }}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-white/40">04 people</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  A small, remote-first team of developers, designers, and strategists.
                </p>
              </div>
              {/* Floating stat */}
              <div className="absolute -top-4 -right-4 bg-[#52057B] text-white rounded-xl p-4 shadow-lg hidden md:block">
                <div className="text-3xl font-black leading-none">2019</div>
                <div className="text-[10px] font-mono tracking-widest text-white/50 mt-1 uppercase">
                  Founded
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow num="05 / 06">{t.about.label}</Eyebrow>
            <Display className="text-[clamp(36px,5vw,64px)]">
              {t.about.title}{' '}
              <span
                className="italic"
                style={{ fontFamily: 'var(--font-instrument), Georgia, serif', fontWeight: 400 }}
              >
                {t.about.titleAccent}
              </span>
            </Display>

            <p className="mt-8 text-white/45 text-lg leading-relaxed">{t.about.body1}</p>

            <div className="mt-10 flex flex-col divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {values.map((v) => (
                <div key={v.name} className="py-5 flex items-baseline gap-5">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-white/25 w-20 flex-shrink-0">
                    {v.name}
                  </div>
                  <p className="text-white/70">{v.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => scrollTo('cta')}
                className="group inline-flex items-center gap-2 text-white/70 font-semibold hover:text-[#BC6FF1] transition-colors cursor-pointer"
              >
                {t.about.workWithUs}
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  <ArrowRightIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
