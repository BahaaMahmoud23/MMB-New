'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Palette, Zap, LayoutDashboard, Settings2, CalendarCheck, Layers, Gauge } from 'lucide-react'
import type { Service } from '@/lib/types'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { staggerContainer, fadeUp } from '@/lib/animations'

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Zap,
  LayoutDashboard,
  Settings2,
  CalendarCheck,
  Layers,
  Gauge,
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.iconName] ?? Layers

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="group relative glass-light rounded-2xl p-6 hover:border-brand-700/40 border border-white/5 transition-all duration-300 cursor-default"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(82,3,128,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-brand-800/60 border border-brand-700/30">
            <Icon size={20} className="text-brand-400" />
          </div>
          <ArrowRight
            size={16}
            className="text-white/20 group-hover:text-brand-400 group-hover:translate-x-1 transition-all duration-200"
          />
        </div>
        <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-sm text-white/45 leading-relaxed mb-4">{service.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <Tag key={tag} variant="ghost">{tag}</Tag>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesPreview({ services }: { services: Service[] }) {
  const preview = services.slice(0, 6)

  return (
    <section id="services" className="section-padding bg-brand-950 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="container-wide relative">
        {/* Header */}
        <AnimatedSection className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl text-balance">
            Services built for{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
              impact
            </span>
          </h2>
          <p className="text-base text-white/45 max-w-xl leading-relaxed">
            Every service is designed around one goal: delivering real, measurable results for your business.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {preview.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>

        {/* Link to full services */}
        <AnimatedSection className="flex justify-center mt-12" delay={0.2}>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors duration-200"
          >
            View all services
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
