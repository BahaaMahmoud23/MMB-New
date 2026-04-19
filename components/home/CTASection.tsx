'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Display } from '@/components/ui/Display'
import { useLanguage } from '@/lib/i18n'

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 11.9 19.79 19.79 0 0 1 1.07 3.27 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z"/>
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-8-4.5-8-12a8 8 0 1 1 16 0c0 7.5-8 12-8 12z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 13 4 4L19 7"/>
    </svg>
  )
}

const budgets = ['< $5k', '$5–15k', '$15–30k', '$30k+']

export function CTASection() {
  const [ref, inView] = useInView()
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(t.cta.form.error)
      }
    } catch {
      setError(t.cta.form.error)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="cta" className="py-28 bg-black relative overflow-hidden">
      {/* Ghost background type */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025] select-none overflow-hidden">
        <div
          className="text-white font-black tracking-tighter leading-[0.8]"
          style={{ fontSize: 'clamp(200px, 40vw, 720px)' }}
        >
          MMB
        </div>
      </div>

      {/* Radial purple glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 70% 50%, rgba(82,5,123,0.15) 0%, transparent 70%)',
        }}
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`relative max-w-[1400px] mx-auto px-6 lg:px-10 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
      >
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left */}
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow num="→">{t.cta.label}</Eyebrow>
            <Display className="text-[clamp(40px,6vw,88px)]">
              {t.cta.title}{' '}
              <span
                className="italic"
                style={{ fontFamily: 'var(--font-instrument), Georgia, serif', fontWeight: 400 }}
              >
                {t.cta.titleAccent.replace('something great?', 'something')}
              </span>
              ?
            </Display>
            <p className="mt-8 text-white/45 text-lg leading-relaxed max-w-md">{t.cta.subtitle}</p>

            <div className="mt-10 flex flex-col gap-2">
              <a
                href={`mailto:${t.cta.email}`}
                className="group flex items-center justify-between gap-4 py-4 border-t border-white/[0.07]"
              >
                <span className="flex items-center gap-3 text-white/45 group-hover:text-white transition-colors">
                  <MailIcon />
                  <span className="font-mono text-xs tracking-widest uppercase">Email</span>
                </span>
                <span className="text-white/80 text-sm font-medium group-hover:text-[#BC6FF1] group-hover:translate-x-1 transition-all">
                  {t.cta.email}
                </span>
              </a>
              <a
                href={`tel:${t.cta.phone}`}
                className="group flex items-center justify-between gap-4 py-4 border-t border-white/[0.07]"
              >
                <span className="flex items-center gap-3 text-white/45 group-hover:text-white transition-colors">
                  <PhoneIcon />
                  <span className="font-mono text-xs tracking-widest uppercase">Phone</span>
                </span>
                <span className="text-white/80 text-sm font-medium group-hover:text-[#BC6FF1] group-hover:translate-x-1 transition-all">
                  {t.cta.phone}
                </span>
              </a>
              <div className="flex items-center justify-between gap-4 py-4 border-t border-b border-white/[0.07]">
                <span className="flex items-center gap-3 text-white/45">
                  <PinIcon />
                  <span className="font-mono text-xs tracking-widest uppercase">Based</span>
                </span>
                <span className="text-white/80 text-sm font-medium">Remote · Global</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-white/[0.02] border border-[#52057B]/30 rounded-2xl p-8 lg:p-10 backdrop-blur-sm">
              {submitted ? (
                <div className="flex flex-col items-start py-16 gap-5">
                  <div className="w-12 h-12 rounded-full border border-[#892CDC]/50 bg-[#52057B]/20 flex items-center justify-center text-[#BC6FF1]">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                      {t.cta.form.success}
                    </h3>
                    <p className="text-white/45 max-w-sm text-sm leading-relaxed">
                      {t.cta.form.successMsg}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', email: '', budget: '', message: '' })
                    }}
                    className="text-white/45 hover:text-white text-sm underline underline-offset-4 cursor-pointer"
                  >
                    {t.cta.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-3">
                        {t.cta.form.name}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={t.cta.form.namePlaceholder}
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/25 focus:outline-none focus:border-[#892CDC]/60 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-3">
                        {t.cta.form.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder={t.cta.form.emailPlaceholder}
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/25 focus:outline-none focus:border-[#892CDC]/60 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-3">
                      Budget
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm({ ...form, budget: b })}
                          className={`px-3 py-2.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                            form.budget === b
                              ? 'bg-[#892CDC] text-white border-[#892CDC]'
                              : 'bg-transparent text-white/50 border-white/10 hover:border-[#892CDC]/60 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-3">
                      {t.cta.form.message}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t.cta.form.messagePlaceholder}
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/25 focus:outline-none focus:border-[#892CDC]/60 transition-colors text-sm resize-none"
                    />
                  </div>

                  {error && <p className="text-red-400 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={sending}
                    className="group flex items-center justify-between gap-2 w-full px-6 py-4 bg-[#892CDC] text-white font-bold rounded-xl hover:bg-[#52057B] transition-colors cursor-pointer text-sm disabled:opacity-60"
                  >
                    <span>{sending ? t.cta.form.sending : t.cta.form.submit}</span>
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest">
                        Reply &lt; 24h
                      </span>
                      <ArrowRightIcon />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
