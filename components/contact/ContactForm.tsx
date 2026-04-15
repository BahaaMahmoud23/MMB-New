'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, ArrowRight } from 'lucide-react'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-10 flex flex-col items-center text-center gap-5"
      >
        <CheckCircle size={52} className="text-brand-400" />
        <h3 className="text-2xl font-bold text-white">Message sent!</h3>
        <p className="text-sm text-white/50 max-w-xs">
          We&rsquo;ll review your project and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowRight size={15} />
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <div className="glass rounded-3xl p-8 sm:p-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-600/60 focus:ring-1 focus:ring-brand-600/30 transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="john@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-600/60 focus:ring-1 focus:ring-brand-600/30 transition-all duration-200"
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
            Project Brief
          </label>
          <textarea
            id="contact-message"
            required
            rows={6}
            placeholder="Tell us about your project, goals, and timeline..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-600/60 focus:ring-1 focus:ring-brand-600/30 transition-all duration-200 resize-none"
          />
        </div>

        {status === 'error' && (
          <p className="text-xs text-red-400">
            Something went wrong. Please try again or email us directly at hello@mmb.dev
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-brand-700 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white transition-all duration-200 glow-purple cursor-pointer"
        >
          {status === 'sending' ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <Send size={15} />
              Send Message
            </>
          )}
        </button>
        <p className="text-center text-xs text-white/25">
          No spam. Just a reply within 24 hours.
        </p>
      </form>
    </div>
  )
}
