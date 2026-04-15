'use client'

import { motion } from 'framer-motion'
import {
  Palette, Zap, LayoutDashboard, Settings2, CalendarCheck, Layers, Gauge
} from 'lucide-react'
import type { Service } from '@/lib/types'
import { Tag } from '@/components/ui/Tag'
import { staggerContainer, fadeUp } from '@/lib/animations'

const iconMap: Record<string, React.ElementType> = {
  Palette, Zap, LayoutDashboard, Settings2, CalendarCheck, Layers, Gauge,
}

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {services.map((service, i) => {
        const Icon = iconMap[service.iconName] ?? Layers
        return (
          <motion.div
            key={service.id}
            variants={fadeUp}
            custom={i}
            className="group glass-light rounded-2xl p-6 border border-white/5 hover:border-brand-700/40 transition-all duration-300"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 30% 30%, rgba(82,3,128,0.08) 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <div className="p-2.5 rounded-xl bg-brand-800/60 border border-brand-700/30 w-fit mb-4">
                <Icon size={22} className="text-brand-400" />
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
      })}
    </motion.div>
  )
}
