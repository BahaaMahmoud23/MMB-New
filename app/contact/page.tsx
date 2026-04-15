// Contact page — SSG shell; form submission handled by /api/contact (SSR Route Handler)
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { ContactForm } from '@/components/contact/ContactForm'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Mail, Phone, Github, Twitter, Linkedin } from 'lucide-react'

export const metadata: Metadata = createMetadata({
  title: 'Contact',
  description:
    'Start a project with MMB. Tell us about your goals and we\'ll reply within 24 hours with a plan and a fair quote.',
  openGraph: {
    title: 'Contact | MMB',
    url: '/contact',
  },
})

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function ContactPage() {
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
            <SectionLabel>Get in Touch</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance max-w-2xl">
              Let&rsquo;s build something{' '}
              <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
                great
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-base text-white/45 max-w-lg leading-relaxed">
              Tell us about your project. We&rsquo;ll get back to you within 24 hours
              with a clear plan and a fair quote.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + info */}
      <section className="section-padding bg-brand-950 relative">
        <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Info column */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <AnimatedSection direction="left">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-white">Direct contact</h2>
                  <a
                    href="mailto:hello@mmb.dev"
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-brand-800/50 border border-brand-700/20 group-hover:border-brand-600/30 transition-colors">
                      <Mail size={14} className="text-brand-400" />
                    </div>
                    hello@mmb.dev
                  </a>
                  <a
                    href="tel:+12345678900"
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-brand-800/50 border border-brand-700/20 group-hover:border-brand-600/30 transition-colors">
                      <Phone size={14} className="text-brand-400" />
                    </div>
                    +1 (234) 567-890
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.1}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-base font-semibold text-white">Follow us</h3>
                  <div className="flex items-center gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white hover:border-brand-700/30 transition-all duration-200 cursor-pointer"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.15}>
                <div className="glass-light rounded-2xl p-5 border border-white/5">
                  <p className="text-sm font-semibold text-white mb-1">Response time</p>
                  <p className="text-sm text-white/45">
                    We typically reply within a few hours during business days.
                    Guaranteed response within 24 hours.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
