'use client'

import { motion } from 'framer-motion'
import {
  Clock, Code2, TrendingUp, MessageCircle, ShieldCheck, Layers,
} from 'lucide-react'
import type { WhyUsItem } from '@/lib/types'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { staggerContainer, fadeUp } from '@/lib/animations'

const iconMap: Record<string, React.ElementType> = {
  Clock, Code2, TrendingUp, MessageCircle, ShieldCheck, Layers,
}

const stats = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '< 2s', label: 'Avg Load Time' },
  { value: '0', label: 'Missed Deadlines' },
]

export function WhyUsSection({ items }: { items: WhyUsItem[] }) {
  return (
    <section id="why-us" className="section-padding bg-brand-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-32 flex flex-col gap-6">
            <AnimatedSection direction="left">
              <SectionLabel>Why MMB</SectionLabel>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                The difference is in{' '}
                <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
                  the details.
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.15}>
              <p className="text-base text-white/45 leading-relaxed">
                Hundreds of agencies promise great work. We back it up with process,
                transparency, and a track record that speaks for itself.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-light rounded-xl p-4 flex flex-col gap-1"
                  >
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                    <span className="text-xs text-white/40">{stat.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — scrolling reasons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-4"
          >
            {items.map((item) => {
              const Icon = iconMap[item.iconName] ?? Layers
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group glass-light rounded-2xl p-5 border border-white/5 hover:border-brand-700/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2.5 rounded-xl bg-brand-800/50 border border-brand-700/20 group-hover:border-brand-600/40 transition-colors duration-300">
                      <Icon size={18} className="text-brand-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-white/45 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
