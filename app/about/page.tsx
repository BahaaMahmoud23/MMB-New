// About page — SSG
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { CTASection } from '@/components/home/CTASection'
import { getAllTestimonials } from '@/lib/data/testimonials'
import { PageHero } from '@/components/pages/PageHero'
import { AboutPageContent } from '@/components/pages/AboutPageContent'

export const metadata: Metadata = createMetadata({
  title: 'About',
  description:
    "MMB is a premium web development and digital systems company. Since 2019 we've built websites, dashboards, and custom web solutions for businesses worldwide.",
  openGraph: {
    title: 'About | MMB',
    url: '/about',
  },
})

export default function AboutPage() {
  const testimonials = getAllTestimonials()

  return (
    <>
      <PageHero section="about" />
      <AboutPageContent />
      <CTASection />
    </>
  )
}
