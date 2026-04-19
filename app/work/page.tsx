// Work/Portfolio page — ISR
export const revalidate = 3600

import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { getAllProjects, projectCategories } from '@/lib/data/projects'
import { ProjectsGrid } from '@/components/work/ProjectsGrid'
import { PageHero } from '@/components/pages/PageHero'

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
      <PageHero section="work" />

      <section className="py-28 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ProjectsGrid projects={projects} categories={projectCategories} />
        </div>
      </section>
    </>
  )
}
