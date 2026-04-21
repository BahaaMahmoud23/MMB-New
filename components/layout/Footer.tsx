'use client'

import { useLanguage } from '@/lib/i18n'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2-8-2.5-8-9-4-14 3.5 4 7 5 12 5 0-5 5-7 8-3z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const footerLinks = [
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'projects' },
  { label: 'Process', id: 'process' },
  { label: 'About', id: 'about' },
  { label: 'FAQ', id: 'faq' },
]

const socials = [
  { name: 'github', icon: <GithubIcon />, href: '#' },
  { name: 'twitter', icon: <TwitterIcon />, href: '#' },
  { name: 'linkedin', icon: <LinkedinIcon />, href: '#' },
]

export function Footer() {
  const { t } = useLanguage()
  const now = new Date()

  return (
    <footer className="bg-black border-t border-[#52057B]/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Brand */}
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#52057B] rounded-md flex items-center justify-center">
                <span className="text-white font-black tracking-tighter text-[15px]">M</span>
              </div>
              <div>
                <div className="font-black tracking-tight text-white">MMB Studio</div>
                <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                  Est. 2019
                </div>
              </div>
            </div>
            <p className="text-white/45 text-sm max-w-xs leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Nav */}
          <div className="col-span-6 md:col-span-2">
            <div className="text-[10px] font-mono tracking-widest uppercase text-white/25 mb-4">
              {t.footer.navLabel}
            </div>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-white/55 hover:text-white transition-colors cursor-pointer"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-2">
            <div className="text-[10px] font-mono tracking-widest uppercase text-white/25 mb-4">
              {t.footer.contactLabel}
            </div>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href={`mailto:${t.cta.email}`} className="text-white/55 hover:text-[#BC6FF1] transition-colors">
                  {t.cta.email}
                </a>
              </li>
              <li>
                <a href={`tel:${t.cta.phone}`} className="text-white/55 hover:text-[#BC6FF1] transition-colors">
                  {t.cta.phone}
                </a>
              </li>
              <li className="text-white/30">Remote · Global</li>
            </ul>
          </div>

          {/* Social + availability */}
          <div className="col-span-12 md:col-span-3">
            <div className="text-[10px] font-mono tracking-widest uppercase text-white/25 mb-4">
              Follow
            </div>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:bg-[#892CDC] hover:border-[#892CDC] hover:text-white transition-colors text-white/45 cursor-pointer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#52057B]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-white/20 font-mono tracking-widest uppercase">
          <div>
            © {now.getFullYear()} MMB Studio · {t.footer.rights}
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              {t.footer.terms}
            </a>
            <span className="hidden md:inline">
              v{now.getFullYear().toString().slice(2)}.
              {String(now.getMonth() + 1).padStart(2, '0')} ·{' '}
              {now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
