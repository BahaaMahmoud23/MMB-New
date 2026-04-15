'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, CheckCircle, ArrowRight, Send } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import type { Testimonial } from '@/lib/types'

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="glass-light rounded-2xl p-6 border border-white/5">
      <p className="text-sm text-white/60 leading-relaxed mb-4 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-brand-700/60 flex items-center justify-center text-xs font-bold text-brand-300">
          {testimonial.author[0]}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.author}</p>
          <p className="text-xs text-white/40">{testimonial.title}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}

export function CTASection({ testimonials }: { testimonials: Testimonial[] }) {
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

  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Dark background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #11001C 0%, #140129 40%, #220135 100%)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #520380 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy + testimonials */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <AnimatedSection direction="left">
                <SectionLabel>Get in Touch</SectionLabel>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
                  Ready to build{' '}
                  <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
                    something great?
                  </span>
                </h2>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.15}>
                <p className="text-base text-white/50 leading-relaxed">
                  Tell us about your project. We&rsquo;ll get back to you within 24 hours
                  with a clear plan and a fair quote.
                </p>
              </AnimatedSection>
            </div>

            {/* Contact info */}
            <AnimatedSection direction="left" delay={0.2} className="flex flex-col gap-3">
              <a
                href="mailto:hello@mmb.dev"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200 group w-fit"
              >
                <Mail size={16} className="text-brand-500 flex-shrink-0" />
                hello@mmb.dev
              </a>
              <a
                href="tel:+12345678900"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200 group w-fit"
              >
                <Phone size={16} className="text-brand-500 flex-shrink-0" />
                +1 (234) 567-890
              </a>
            </AnimatedSection>

            {/* Testimonials */}
            <AnimatedSection direction="left" delay={0.25} className="flex flex-col gap-4">
              {testimonials.slice(0, 2).map((t) => (
                <TestimonialCard key={t.author} testimonial={t} />
              ))}
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="glass rounded-3xl p-8">
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-4 py-8"
                >
                  <CheckCircle size={48} className="text-brand-400" />
                  <h3 className="text-xl font-bold text-white">Message sent!</h3>
                  <p className="text-sm text-white/50">
                    We&rsquo;ll review your project and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowRight size={15} />
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-600/60 focus:ring-1 focus:ring-brand-600/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-600/60 focus:ring-1 focus:ring-brand-600/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                      Project Brief
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-600/60 focus:ring-1 focus:ring-brand-600/30 transition-all duration-200 resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-400">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-brand-700 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white transition-all duration-200 glow-purple cursor-pointer"
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
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
