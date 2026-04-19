// Services page — SSG
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { getAllServices } from '@/lib/data/services'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import { CTASection } from '@/components/home/CTASection'
import { getAllTestimonials } from '@/lib/data/testimonials'
import { PageHero } from '@/components/pages/PageHero'

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
      <PageHero section="services" />

      <section className="py-28 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ServicesGrid services={services} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
