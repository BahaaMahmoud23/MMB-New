import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Nexus Dashboard',
    category: 'SaaS',
    description: 'Real-time analytics platform with custom charting, role-based access, and dark mode.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    year: '2024',
    bg: 'bg-gray-900',
    text: 'text-white',
    accent: 'bg-gray-700',
  },
  {
    id: 2,
    title: 'Aura E-Commerce',
    category: 'E-Commerce',
    description: 'Luxury skincare storefront with custom checkout, subscription billing, and headless CMS.',
    tags: ['Next.js', 'Shopify', 'Stripe'],
    year: '2024',
    bg: 'bg-gray-50',
    text: 'text-gray-900',
    accent: 'bg-gray-200',
  },
  {
    id: 3,
    title: 'Flux Agency',
    category: 'Portfolio',
    description: 'Award-winning creative agency site with scroll-driven animations and 3D elements.',
    tags: ['React', 'Three.js', 'GSAP'],
    year: '2023',
    bg: 'bg-gray-800',
    text: 'text-white',
    accent: 'bg-gray-600',
  },
  {
    id: 4,
    title: 'Relay SaaS',
    category: 'SaaS',
    description: 'Project management tool with real-time collaboration, drag-and-drop boards, and integrations.',
    tags: ['React', 'Socket.io', 'MongoDB'],
    year: '2023',
    bg: 'bg-white border border-gray-200',
    text: 'text-gray-900',
    accent: 'bg-gray-100',
  },
  {
    id: 5,
    title: 'Strata Property',
    category: 'Real Estate',
    description: 'Property listing platform with map search, virtual tours, and CRM integration.',
    tags: ['Next.js', 'Mapbox', 'Prisma'],
    year: '2023',
    bg: 'bg-gray-100',
    text: 'text-gray-900',
    accent: 'bg-gray-200',
  },
  {
    id: 6,
    title: 'Pulse Health',
    category: 'HealthTech',
    description: 'Patient-facing health portal with appointment scheduling, secure messaging, and records.',
    tags: ['React', 'HIPAA', 'REST API'],
    year: '2024',
    bg: 'bg-gray-900',
    text: 'text-white',
    accent: 'bg-gray-700',
  },
]

const categories = ['All', ...new Set(projects.map((p) => p.category))]

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden ${project.bg} ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      {/* Placeholder visual */}
      <div className={`${project.accent} h-48 w-full relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-6xl font-black opacity-10 ${project.text}`}>
            {project.title.charAt(0)}
          </span>
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Card content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className={`text-xs font-semibold tracking-widest uppercase ${project.text} opacity-40`}>
              {project.category} · {project.year}
            </span>
            <h3 className={`text-xl font-bold mt-1 ${project.text}`}>{project.title}</h3>
          </div>
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center ${project.accent} group-hover:scale-110 transition-transform duration-200 cursor-pointer flex-shrink-0`}
          >
            <ArrowUpRight size={16} className={project.text} />
          </div>
        </div>
        <p className={`text-sm leading-relaxed ${project.text} opacity-60 mb-4`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 text-xs font-medium rounded-md ${project.accent} ${project.text} opacity-80`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [headingRef, headingInView] = useInView()

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headingRef}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 ${
            headingInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Selected projects
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
