'use client'

import { useLanguage } from '@/lib/i18n'
import { Eyebrow } from '@/components/ui/Eyebrow'

type PageSection = 'services' | 'about' | 'contact' | 'work'

export function PageHero({ section }: { section: PageSection }) {
  const { t } = useLanguage()

  const configs: Record<PageSection, { num: string; label: string; title: string; titleAccent: string; subtitle: string }> = {
    services: {
      num: '01',
      label: t.services.pageLabel,
      title: t.services.pageTitle,
      titleAccent: t.services.pageTitleAccent,
      subtitle: t.services.pageSubtitle,
    },
    about: {
      num: '05',
      label: t.about.label,
      title: t.about.pageTitle,
      titleAccent: t.about.pageTitleAccent,
      subtitle: t.about.pageSubtitle,
    },
    contact: {
      num: '→',
      label: t.contact.label,
      title: t.contact.title,
      titleAccent: t.contact.titleAccent,
      subtitle: t.contact.subtitle,
    },
    work: {
      num: '02',
      label: t.projects.pageLabel,
      title: t.projects.pageTitle,
      titleAccent: t.projects.pageTitleAccent,
      subtitle: t.projects.pageSubtitle,
    },
  }

  const config = configs[section]

  return (
    <section className="pt-36 pb-20 bg-black border-b border-[#52057B]/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Eyebrow num={config.num}>{config.label}</Eyebrow>
        <h1 className="font-black tracking-[-0.02em] leading-[0.95] text-white text-[clamp(40px,7vw,100px)] mt-4">
          {config.title}{' '}
          <span
            className="italic"
            style={{ fontFamily: 'var(--font-instrument), Georgia, serif', fontWeight: 400 }}
          >
            {config.titleAccent}
          </span>
        </h1>
        <p className="mt-6 text-lg text-white/45 max-w-xl leading-relaxed">{config.subtitle}</p>
      </div>
    </section>
  )
}
