'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Project } from '@/lib/types'
import { useLanguage } from '@/lib/i18n'
import { useInView } from '@/hooks/useInView'
import { StripedPlaceholder } from '@/components/ui/StripedPlaceholder'

function ArrowUpRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7"/><path d="M7 7h10v10"/>
    </svg>
  )
}

function ProjectCard({ project, lang }: { project: Project; lang: string }) {
  const [ref, inView] = useInView()
  const title = lang === 'ar' && project.ar ? project.ar.title : project.title
  const summary = lang === 'ar' && project.ar ? project.ar.summary : project.summary

  return (
    <Link
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={`/work/${project.slug}`}
      className={`group relative rounded-2xl overflow-hidden border flex flex-col bg-[#070707] border-[#52057B]/25 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationFillMode: 'both' }}
    >
      <StripedPlaceholder
        label={`${title} / Screenshot`}
        dark
        className="min-h-[200px]"
        angle={project.id % 2 === 0 ? 45 : -45}
      />
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase mb-1 text-white/30">
              {project.category} · {project.year}
            </div>
            <h3 className="text-lg font-bold tracking-tight text-white">
              {title}
            </h3>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:rotate-45 bg-[#52057B]/30 border border-[#52057B]/50 text-[#BC6FF1] group-hover:bg-[#892CDC] group-hover:border-[#892CDC] group-hover:text-white">
            <ArrowUpRightIcon />
          </div>
        </div>
        <p className="text-sm leading-relaxed mb-3 line-clamp-2 text-white/50">
          {summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono rounded border border-[#52057B]/30 text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export function ProjectsGrid({
  projects,
  categories,
}: {
  projects: Project[]
  categories: string[]
}) {
  const [active, setActive] = useState('All')
  const { lang, t } = useLanguage()

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
              active === cat
                ? 'bg-[#892CDC] text-white border-[#892CDC]'
                : 'bg-transparent text-white/50 border-white/10 hover:border-[#892CDC] hover:text-white'
            }`}
          >
            {cat === 'All' ? t.projects.allCategories : cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} lang={lang} />
        ))}
      </div>
    </div>
  )
}
