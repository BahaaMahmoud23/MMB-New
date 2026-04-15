'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { Project } from '@/lib/types'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { staggerContainer, fadeUp } from '@/lib/animations'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div variants={fadeUp} custom={index}>
      <Link
        href={`/work/${project.slug}`}
        className="group block relative rounded-2xl overflow-hidden border border-white/5 hover:border-brand-700/40 transition-all duration-300"
        style={{ background: `linear-gradient(135deg, ${project.coverColor} 0%, ${project.accentColor}40 100%)` }}
      >
        {/* Card image area */}
        <div className="relative h-52 flex items-center justify-center overflow-hidden">
          {/* Decorative grid inside card */}
          <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20" aria-hidden="true" />
          {/* Glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(circle at center, ${project.accentColor}30 0%, transparent 70%)` }}
            aria-hidden="true"
          />
          {/* Category badge */}
          <div className="relative z-10">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/70 border border-white/10">
              {project.category}
            </span>
          </div>
        </div>

        {/* Card content */}
        <div className="p-6" style={{ background: 'rgba(17,0,28,0.6)', backdropFilter: 'blur(8px)' }}>
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-base font-semibold text-white">{project.title}</h3>
              <span className="text-xs text-white/40">{project.year}</span>
            </div>
            <ExternalLink
              size={14}
              className="text-white/20 group-hover:text-brand-400 transition-colors duration-200 mt-1 flex-shrink-0"
            />
          </div>
          <p className="text-sm text-white/50 leading-relaxed line-clamp-2 mb-4">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <Tag key={tag} variant="ghost">{tag}</Tag>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function ProjectsPreview({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #11001C 0%, #140129 50%, #11001C 100%)' }}
        aria-hidden="true"
      />

      <div className="container-wide relative">
        {/* Header */}
        <AnimatedSection className="flex flex-col items-center text-center gap-4 mb-16">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl text-balance">
            Selected{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
              projects
            </span>
          </h2>
          <p className="text-base text-white/45 max-w-xl leading-relaxed">
            From platforms to landing pages — every project is crafted with precision and purpose.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <AnimatedSection className="flex justify-center mt-12" delay={0.2}>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            View all projects
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
