'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ContactForm } from '@/components/contact/ContactForm'
import { useLanguage } from '@/lib/i18n'

function GithubIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
}
function TwitterIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2-8-2.5-8-9-4-14 3.5 4 7 5 12 5 0-5 5-7 8-3z"/></svg>
}
function LinkedinIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
}
function MailIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
}
function PhoneIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 11.9 19.79 19.79 0 0 1 1.07 3.27 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z"/></svg>
}

const socialLinks = [
  { icon: <GithubIcon />, href: '#', label: 'GitHub' },
  { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
  { icon: <LinkedinIcon />, href: '#', label: 'LinkedIn' },
]

export function ContactPageContent() {
  const { t } = useLanguage()

  return (
    <section className="py-28 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <AnimatedSection>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-white">{t.contact.directContact}</h2>
                <a
                  href={`mailto:${t.cta.email}`}
                  className="flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#52057B]/20 border border-[#52057B]/40 group-hover:bg-[#892CDC] group-hover:border-[#892CDC] group-hover:text-white text-[#BC6FF1] transition-all">
                    <MailIcon />
                  </div>
                  {t.cta.email}
                </a>
                <a
                  href={`tel:${t.cta.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-[#52057B]/20 border border-[#52057B]/40 group-hover:bg-[#892CDC] group-hover:border-[#892CDC] group-hover:text-white text-[#BC6FF1] transition-all">
                    <PhoneIcon />
                  </div>
                  {t.cta.phone}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-semibold text-white">{t.contact.followUs}</h3>
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:bg-[#892CDC] hover:text-white hover:border-[#892CDC] transition-colors text-white/45"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="rounded-2xl p-5 border border-[#52057B]/25 bg-[#070707]">
                <p className="text-sm font-semibold text-white mb-1">{t.contact.responseTime}</p>
                <p className="text-sm text-white/45">{t.contact.responseMsg}</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection delay={0.05} className="lg:col-span-3">
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
