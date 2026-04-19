'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Display } from '@/components/ui/Display'
import { StripedPlaceholder } from '@/components/ui/StripedPlaceholder'
import { useLanguage } from '@/lib/i18n'
import { getAllProjects } from '@/lib/data/projects'
import type { Project } from '@/lib/types'

function ArrowUpRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7"/><path d="M7 7h10v10"/>
    </svg>
  )
}

function ProjectCard({ project, index, span, lang }: { project: Project; index: number; span: string; lang: string }) {
  const [ref, inView] = useInView()
  const title = lang === 'ar' && project.ar ? project.ar.title : project.title
  const summary = lang === 'ar' && project.ar ? project.ar.summary : project.summary

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative rounded-2xl overflow-hidden border flex flex-col bg-[#070707] border-[#52057B]/25 ${span} ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 70}ms`, animationFillMode: 'both' }}
    >
      <StripedPlaceholder
        label={`${title} / Screenshot`}
        dark
        className="flex-1 min-h-[180px]"
        angle={project.id % 2 === 0 ? 45 : -45}
      />
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase mb-1 text-white/30">
              {project.category} · {project.year}
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              {title}
            </h3>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:rotate-45 bg-[#52057B]/30 border border-[#52057B]/50 text-[#BC6FF1] group-hover:bg-[#892CDC] group-hover:border-[#892CDC] group-hover:text-white">
            <ArrowUpRightIcon />
          </div>
        </div>
        <p className="text-sm leading-relaxed mb-3 text-white/50">
          {summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono rounded border border-[#52057B]/30 text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectsPreview() {
  const [headingRef, headingInView] = useInView()
  const [activeCategory, setActiveCategory] = useState('All')
  const { t, lang } = useLanguage()
  const allProjects = getAllProjects()

  const categories = ['All', ...Array.from(new Set(allProjects.map((p) => p.category)))]
  const filtered = activeCategory === 'All' ? allProjects : allProjects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-28 bg-[#030303]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 ${
            headingInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div>
            <Eyebrow num="02 / 06">{t.projects.label}</Eyebrow>
            <Display className="text-[clamp(40px,6vw,80px)]">
              {t.projects.title}{' '}
              <span
                className="italic"
                style={{ fontFamily: 'var(--font-instrument), Georgia, serif', fontWeight: 400 }}
              >
                {t.projects.titleAccent}
              </span>
              .
            </Display>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-[#892CDC] text-white border-[#892CDC]'
                    : 'bg-transparent text-white/50 border-white/10 hover:border-[#892CDC] hover:text-white'
                }`}
              >
                {cat === 'All' ? t.projects.allCategories : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[minmax(280px,auto)]">
          {filtered.map((p, i) => {
            const span =
              p.displaySize === 'wide'
                ? 'md:col-span-4'
                : p.displaySize === 'tall'
                  ? 'md:col-span-2 md:row-span-2'
                  : 'md:col-span-2'
            return <ProjectCard key={p.id} project={p} index={i} span={span} lang={lang} />
          })}
        </div>
      </div>
    </section>
  )
}
