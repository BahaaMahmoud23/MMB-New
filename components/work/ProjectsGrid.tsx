'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Project } from '@/lib/types'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/cn'

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
}

export function ProjectsGrid({
  projects,
  categories,
}: {
  projects: Project[]
  categories: string[]
}) {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
              active === cat
                ? 'bg-brand-700 text-white'
                : 'bg-white/5 text-white/50 hover:text-white border border-white/5 hover:border-white/10'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={fadeUpItem}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Link
                href={`/work/${project.slug}`}
                className="group block relative rounded-2xl overflow-hidden border border-white/5 hover:border-brand-700/40 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${project.coverColor} 0%, ${project.accentColor}40 100%)`,
                }}
              >
                {/* Image area */}
                <div className="relative h-56 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20" aria-hidden="true" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${project.accentColor}30 0%, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/70 border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div
                  className="p-6"
                  style={{ background: 'rgba(17,0,28,0.6)', backdropFilter: 'blur(8px)' }}
                >
                  <div className="flex items-start justify-between mb-2">
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
                      <Tag key={tag} variant="ghost">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
