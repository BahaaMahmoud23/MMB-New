// Services page — SSG
// Service definitions are static; no revalidation needed.
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { getAllServices } from '@/lib/data/services'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import { CTASection } from '@/components/home/CTASection'
import { getAllTestimonials } from '@/lib/data/testimonials'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = createMetadata({
  title: 'Services',
  description:
    'Website design, development, dashboards, admin systems, booking systems, and custom web solutions.',
  openGraph: {
    title: 'Services | MMB',
    url: '/services',
  },
})

export default function ServicesPage() {
  const services = getAllServices()
  const testimonials = getAllTestimonials()

  return (
    <>
      {/* Page hero */}
      <section className="section-padding pt-40 relative overflow-hidden bg-brand-950">
        <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #520380 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="container-wide relative text-center flex flex-col items-center gap-5">
          <AnimatedSection>
            <SectionLabel>What We Do</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance max-w-2xl">
              Services built for{' '}
              <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
                real outcomes
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-base text-white/45 max-w-xl leading-relaxed">
              Every service we offer is designed around delivering measurable results.
              From landing pages to enterprise systems — we build it right.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Full services grid */}
      <section className="section-padding bg-brand-950 relative">
        <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative">
          <ServicesGrid services={services} />
        </div>
      </section>

      {/* CTA */}
      <CTASection testimonials={testimonials} />
    </>
  )
}
