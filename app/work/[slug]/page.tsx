// Dynamic Project Detail — SSG with generateStaticParams
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { getAllProjectSlugs, getProjectBySlug, getAllProjects } from '@/lib/data/projects'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { StripedPlaceholder } from '@/components/ui/StripedPlaceholder'

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
    openGraph: { title: `${project.title} | MMB`, description: project.summary, url: `/work/${project.slug}` },
  })
}

function ArrowLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
    </svg>
  )
}
function ArrowRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
    </svg>
  )
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
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden pt-32 bg-black">
        <StripedPlaceholder
          dark
          className="absolute inset-0"
          angle={-20}
          stripeGap={32}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-16 z-10">
          <AnimatedSection className="flex flex-col gap-4 max-w-2xl">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors w-fit"
            >
              <ArrowLeftIcon />
              Back to Work
            </Link>
            <div className="text-[10px] font-mono tracking-widest uppercase text-white/30">
              {project.category}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-base leading-relaxed max-w-xl text-white/55">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[10px] font-mono rounded-full border border-[#52057B]/35 text-white/50"
                >
                  {tag}
                </span>
              ))}
              <span className="px-2.5 py-1 text-[10px] font-mono rounded-full border border-white/10 text-white/30">
                {project.year}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project description */}
      <section className="py-28 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl p-8 sm:p-10 border border-[#52057B]/25 bg-[#070707]">
                <h2 className="text-xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-base text-white/55 leading-relaxed">{project.description}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="pb-28 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="border-t border-[#52057B]/15 pt-12 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group bg-[#070707] rounded-2xl p-6 border border-[#52057B]/20 hover:border-[#892CDC]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-xs text-white/30 mb-2">
                  <ArrowLeftIcon />
                  Previous
                </div>
                <h3 className="text-base font-bold text-white">{prev.title}</h3>
                <p className="text-xs text-white/30 mt-1">{prev.category}</p>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group bg-[#070707] rounded-2xl p-6 border border-[#52057B]/20 hover:border-[#892CDC]/50 transition-all duration-300 text-right sm:ml-auto w-full"
              >
                <div className="flex items-center justify-end gap-2 text-xs text-white/30 mb-2">
                  Next
                  <ArrowRightIcon />
                </div>
                <h3 className="text-base font-bold text-white">{next.title}</h3>
                <p className="text-xs text-white/30 mt-1">{next.category}</p>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  )
}
