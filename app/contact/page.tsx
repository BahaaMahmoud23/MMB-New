// Contact page — SSG shell; form submission handled by /api/contact
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { PageHero } from '@/components/pages/PageHero'
import { ContactPageContent } from '@/components/pages/ContactPageContent'

export const metadata: Metadata = createMetadata({
  title: 'Contact',
  description:
    "Start a project with MMB. Tell us about your goals and we'll reply within 24 hours with a plan and a fair quote.",
  openGraph: {
    title: 'Contact | MMB',
    url: '/contact',
  },
})

export default function ContactPage() {
  return (
    <>
      <PageHero section="contact" />
      <ContactPageContent />
    </>
  )
}
