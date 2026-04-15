// Work/Portfolio page — ISR (Incremental Static Regeneration)
// Revalidates every hour so new projects added to lib/data/projects.ts
// (or a future CMS) appear within 60 minutes without a full redeploy.
export const revalidate = 3600

import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { getAllProjects, projectCategories } from '@/lib/data/projects'
import { ProjectsGrid } from '@/components/work/ProjectsGrid'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = createMetadata({
  title: 'Work',
  description:
    'Selected projects — educational platforms, hotel websites, real estate dashboards, admin systems, booking systems, and landing pages.',
  openGraph: {
    title: 'Our Work | MMB',
    url: '/work',
  },
})

export default function WorkPage() {
  const projects = getAllProjects()

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
            <SectionLabel>Portfolio</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance max-w-2xl">
              Work we&rsquo;re{' '}
              <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
                proud of
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-base text-white/45 max-w-xl leading-relaxed">
              A selection of projects we&rsquo;ve built — from platforms and dashboards
              to booking systems and landing pages.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-padding bg-brand-950 relative">
        <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative">
          <ProjectsGrid projects={projects} categories={projectCategories} />
        </div>
      </section>
    </>
  )
}
