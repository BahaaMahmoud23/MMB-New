'use client'

import { motion } from 'framer-motion'
import type { ProcessStep } from '@/lib/types'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function ProcessSection({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #11001C 0%, #140129 50%, #11001C 100%)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="container-wide relative">
        {/* Header */}
        <AnimatedSection className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl text-balance">
            A process you can{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
              trust end-to-end.
            </span>
          </h2>
          <p className="text-base text-white/45 max-w-xl leading-relaxed">
            No black boxes. You always know what&rsquo;s happening, what&rsquo;s next, and why.
          </p>
        </AnimatedSection>

        {/* Steps grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              custom={i}
              className="group relative bg-brand-950 p-8 hover:bg-brand-900/60 transition-colors duration-300"
            >
              {/* Step number */}
              <div className="text-5xl font-bold text-brand-800/60 group-hover:text-brand-700/80 transition-colors duration-300 mb-4 leading-none select-none">
                {step.number}
              </div>

              <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed mb-4">{step.description}</p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-800/40 border border-brand-700/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                <span className="text-xs text-brand-400 font-medium">{step.duration}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
