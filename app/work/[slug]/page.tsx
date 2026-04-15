// Dynamic Project Detail — SSG with generateStaticParams
// All project pages are pre-built at deploy time for maximum CDN cache performance.
// Unknown slugs return 404 via notFound().
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { createMetadata } from '@/lib/metadata'
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getAllProjects,
} from '@/lib/data/projects'
import { Tag } from '@/components/ui/Tag'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}

  return createMetadata({
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | MMB`,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  })
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const allProjects = getAllProjects()
  const currentIdx = allProjects.findIndex((p) => p.slug === project.slug)
  const prev = allProjects[currentIdx - 1]
  const next = allProjects[currentIdx + 1]

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden pt-32"
        style={{ background: `linear-gradient(135deg, ${project.coverColor} 0%, ${project.accentColor}60 100%)` }}
      >
        <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(17,0,28,0.7) 100%)' }}
          aria-hidden="true"
        />
        <div className="container-wide relative pb-16 z-10">
          <AnimatedSection direction="up" className="flex flex-col gap-4 max-w-2xl">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 group w-fit"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Work
            </Link>
            <SectionLabel>{project.category}</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
              {project.title}
            </h1>
            <p className="text-base text-white/60 leading-relaxed max-w-xl">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <Tag key={tag} variant="purple">{tag}</Tag>
              ))}
              <Tag variant="ghost">{project.year}</Tag>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project description */}
      <section className="section-padding bg-brand-950 relative">
        <div className="absolute inset-0 bg-hero-grid bg-grid-40 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="glass-light rounded-3xl p-8 sm:p-10">
                <h2 className="text-xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-base text-white/60 leading-relaxed">{project.description}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="section-padding pt-0 bg-brand-950 relative">
        <div className="container-wide">
          <div className="border-t border-white/5 pt-12 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group glass-light rounded-2xl p-6 border border-white/5 hover:border-brand-700/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-xs text-white/30 mb-2">
                  <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform duration-200" />
                  Previous Project
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-brand-300 transition-colors duration-200">
                  {prev.title}
                </h3>
                <p className="text-xs text-white/40 mt-1">{prev.category}</p>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group glass-light rounded-2xl p-6 border border-white/5 hover:border-brand-700/30 transition-all duration-300 text-right sm:ml-auto w-full"
              >
                <div className="flex items-center justify-end gap-2 text-xs text-white/30 mb-2">
                  Next Project
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-brand-300 transition-colors duration-200">
                  {next.title}
                </h3>
                <p className="text-xs text-white/40 mt-1">{next.category}</p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
