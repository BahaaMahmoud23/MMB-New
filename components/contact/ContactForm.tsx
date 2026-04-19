'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'

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

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-[#070707] border border-[#52057B]/25 rounded-2xl p-10 flex flex-col items-start gap-5">
        <div className="w-12 h-12 rounded-full bg-[#52057B]/20 border border-[#892CDC]/50 text-[#BC6FF1] flex items-center justify-center">
          <CheckIcon />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white tracking-tight mb-2">{t.cta.form.success}</h3>
          <p className="text-sm text-white/45 max-w-xs">{t.cta.form.successMsg}</p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="text-white/45 hover:text-white text-sm underline underline-offset-4 cursor-pointer"
        >
          {t.cta.form.sendAnother}
        </button>
      </div>
    )
  }

  return (
    <div className="bg-[#070707] border border-[#52057B]/25 rounded-2xl p-8 sm:p-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-name" className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-2">
              {t.cta.form.name}
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder={t.cta.form.namePlaceholder}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#892CDC]/60 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-2">
              {t.cta.form.email}
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder={t.cta.form.emailPlaceholder}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#892CDC]/60 transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-2">
            {t.cta.form.message}
          </label>
          <textarea
            id="contact-message"
            required
            rows={6}
            placeholder={t.cta.form.messagePlaceholder}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#892CDC]/60 transition-colors resize-none"
          />
        </div>

        {status === 'error' && (
          <p className="text-xs text-red-400">{t.cta.form.error}</p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="group flex items-center justify-between gap-2 w-full px-6 py-4 bg-[#892CDC] text-white font-bold rounded-xl hover:bg-[#52057B] transition-colors cursor-pointer text-sm disabled:opacity-60"
        >
          <span>{status === 'sending' ? t.cta.form.sending : t.cta.form.submit}</span>
          <span className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest">Reply &lt; 24h</span>
            <ArrowRightIcon />
          </span>
        </button>
        <p className="text-center text-xs text-white/25 font-mono">{t.cta.form.noSpam}</p>
      </form>
    </div>
  )
}
