'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import type { FAQ } from '@/lib/types'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <AnimatedSection delay={index * 0.04}>
      <div
        className={`rounded-xl border transition-all duration-300 overflow-hidden ${
          open ? 'border-brand-700/40 bg-brand-900/40' : 'border-white/5 bg-white/[0.02]'
        }`}
      >
        <button
          className="w-full flex items-start justify-between gap-4 p-5 text-left cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="text-sm font-semibold text-white leading-snug pr-2">
            {faq.question}
          </span>
          <span className="flex-shrink-0 mt-0.5">
            {open ? (
              <Minus size={16} className="text-brand-400" />
            ) : (
              <Plus size={16} className="text-white/30" />
            )}
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const half = Math.ceil(faqs.length / 2)
  const left = faqs.slice(0, half)
  const right = faqs.slice(half)

  return (
    <section id="faq" className="section-padding bg-brand-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="container-wide relative">
        {/* Header */}
        <AnimatedSection className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl text-balance">
            Common{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="text-base text-white/45 max-w-lg leading-relaxed">
            Everything you need to know before starting a project with us.
          </p>
        </AnimatedSection>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {left.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {right.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i + half} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
