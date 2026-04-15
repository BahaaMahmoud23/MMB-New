// About page — SSG
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CTASection } from '@/components/home/CTASection'
import { getAllTestimonials } from '@/lib/data/testimonials'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = createMetadata({
  title: 'About',
  description:
    'MMB is a premium web development and digital systems company. Since 2019 we\'ve built websites, dashboards, and custom web solutions for businesses worldwide.',
  openGraph: {
    title: 'About | MMB',
    url: '/about',
  },
})

const values = [
  {
    letter: 'C',
    name: 'Craft',
    description: 'We take pride in every detail, visible or not. Clean code, refined UI, thoughtful architecture.',
  },
  {
    letter: 'C',
    name: 'Clarity',
    description: 'No jargon. No surprises. Honest timelines, clear communication, and zero hidden costs.',
  },
  {
    letter: 'S',
    name: 'Speed',
    description: 'Fast iteration, fast delivery — without cutting corners on quality or security.',
  },
]

const capabilities = [
  'Next.js & React development',
  'Full-stack web applications',
  'Dashboard & admin systems',
  'Booking & scheduling systems',
  'Performance & SEO optimization',
  'System architecture & consulting',
]

export default function AboutPage() {
  const testimonials = getAllTestimonials()

  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-40 relative overflow-hidden bg-brand-950">
        <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #520380 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="container-wide relative text-center flex flex-col items-center gap-5">
          <AnimatedSection>
            <SectionLabel>About MMB</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance max-w-2xl">
              Built by people who{' '}
              <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
                love the web
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-base text-white/45 max-w-xl leading-relaxed">
              We&rsquo;re a team of developers and designers obsessed with building
              things that work beautifully.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-brand-950 relative">
        <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <AnimatedSection direction="left">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Our story</h2>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.1}>
                <p className="text-base text-white/50 leading-relaxed">
                  MMB started with a simple belief: most businesses deserve better digital
                  work than they&rsquo;re getting. Since 2019, we&rsquo;ve partnered with
                  startups, scale-ups, and established businesses to build products that
                  are fast, accessible, and genuinely useful.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.15}>
                <p className="text-base text-white/50 leading-relaxed">
                  We don&rsquo;t chase trends or over-engineer. We focus on understanding
                  your users, shipping on time, and making work we&rsquo;re proud of — every
                  single time.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors duration-200 mt-2"
                >
                  Work with us
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </AnimatedSection>
            </div>

            <div className="flex flex-col gap-6">
              {/* Values */}
              <AnimatedSection direction="right">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">What we stand for</h2>
              </AnimatedSection>
              {values.map((v, i) => (
                <AnimatedSection key={v.name} direction="right" delay={i * 0.1}>
                  <div className="glass-light rounded-2xl p-5 border border-white/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-brand-700/40 border border-brand-600/30 flex items-center justify-center">
                        <span className="text-sm font-bold text-brand-400">{v.letter}</span>
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
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, #11001C 0%, #140129 50%, #11001C 100%)' }}
          aria-hidden="true"
        />
        <div className="container-wide relative">
          <AnimatedSection className="flex flex-col items-center text-center gap-4 mb-12">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What we&rsquo;re{' '}
              <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
                great at
              </span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap} delay={i * 0.06}>
                <div className="flex items-center gap-3 glass-light rounded-xl p-4 border border-white/5">
                  <CheckCircle size={16} className="text-brand-400 flex-shrink-0" />
                  <span className="text-sm text-white/70">{cap}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection testimonials={testimonials} />
    </>
  )
}
