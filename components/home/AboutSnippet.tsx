'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const values = [
  { letter: 'C', name: 'Craft', description: 'We take pride in every detail, visible or not.' },
  { letter: 'C', name: 'Clarity', description: 'No jargon. No surprises. Just honest communication.' },
  { letter: 'S', name: 'Speed', description: 'Fast iteration, fast delivery — without cutting corners.' },
]

export function AboutSnippet() {
  return (
    <section id="about" className="section-padding bg-brand-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — decorative card */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative glass rounded-3xl p-8 overflow-hidden">
              {/* Inner glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #520380 0%, transparent 70%)' }}
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-6">
                {/* Founding year */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-brand-700/40" />
                  <span className="text-xs font-semibold text-brand-400 tracking-widest uppercase">Est. 2019</span>
                  <div className="h-px flex-1 bg-brand-700/40" />
                </div>

                {/* Quote */}
                <blockquote className="text-lg font-medium text-white/80 leading-relaxed">
                  &ldquo;Most businesses deserve better digital work than they&rsquo;re getting.&rdquo;
                </blockquote>

                {/* Values */}
                <div className="space-y-3 pt-2">
                  {values.map((v) => (
                    <div key={v.name} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-brand-700/40 border border-brand-600/30 flex items-center justify-center">
                        <span className="text-xs font-bold text-brand-400">{v.letter}</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-white">{v.name} </span>
                        <span className="text-sm text-white/45">{v.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stat */}
                <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                  <div>
                    <span className="text-3xl font-bold text-white">50+</span>
                    <p className="text-xs text-white/40">Happy clients worldwide</p>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <span className="text-3xl font-bold text-white">5+</span>
                    <p className="text-xs text-white/40">Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — copy */}
          <div className="flex flex-col gap-6">
            <AnimatedSection direction="right">
              <SectionLabel>About MMB</SectionLabel>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                Built by people who{' '}
                <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
                  love the web.
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <p className="text-base text-white/50 leading-relaxed">
                MMB started with a simple belief: most businesses deserve better digital work
                than they&rsquo;re getting. Since 2019, we&rsquo;ve partnered with startups,
                scale-ups, and established businesses to build products that are fast,
                accessible, and genuinely useful.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <p className="text-base text-white/50 leading-relaxed">
                We don&rsquo;t chase trends or over-engineer. We focus on understanding your
                users, shipping on time, and making work we&rsquo;re proud of.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.25}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors duration-200 mt-2"
              >
                Learn more about us
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
