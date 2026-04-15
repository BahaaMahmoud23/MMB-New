import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    slug: 'educore-platform',
    title: 'EduCore Platform',
    category: 'EdTech',
    summary:
      'Full-featured educational platform with course management, student dashboards, progress tracking, and live session support.',
    description:
      'EduCore is a comprehensive educational management platform built for a growing online academy. It features instructor dashboards, student enrollment flows, progress analytics, live session scheduling, and a resource library — all with role-based access control.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'WebSockets'],
    year: '2024',
    featured: true,
    coverColor: '#220135',
    accentColor: '#520380',
  },
  {
    id: 2,
    slug: 'grandeur-hotel',
    title: 'Grandeur Hotel',
    category: 'Hospitality',
    summary:
      'Luxury hotel website with immersive room showcases, integrated booking engine, and multi-language support.',
    description:
      'A cinematic website for a 5-star hotel property featuring full-screen room galleries, a custom booking system with real-time availability, restaurant reservations, and spa scheduling — optimized for international guests with i18n support.',
    tags: ['Next.js', 'Booking API', 'i18n', 'Framer Motion'],
    year: '2024',
    featured: true,
    coverColor: '#3A025B',
    accentColor: '#6B04A8',
  },
  {
    id: 3,
    slug: 'strata-dashboard',
    title: 'Strata Dashboard',
    category: 'Real Estate',
    summary:
      'Real estate portfolio dashboard with map-based property search, analytics, CRM integration, and agent workflows.',
    description:
      'A data-heavy property management dashboard for a real estate firm. Features interactive map search, lead pipeline management, document storage, mortgage calculators, and reporting dashboards — built to handle thousands of listings.',
    tags: ['React', 'Mapbox', 'Prisma', 'Recharts'],
    year: '2024',
    featured: true,
    coverColor: '#11001C',
    accentColor: '#3A025B',
  },
  {
    id: 4,
    slug: 'nexus-admin',
    title: 'Nexus Admin',
    category: 'Admin System',
    summary:
      'Enterprise admin and management system with role-based access, real-time data tables, audit logs, and team management.',
    description:
      'A scalable admin panel built for an enterprise SaaS product. Supports multi-tenant architecture, granular permissions, bulk operations, export pipelines, and a full audit trail — designed to replace a legacy internal tool.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    year: '2023',
    featured: false,
    coverColor: '#140129',
    accentColor: '#520380',
  },
  {
    id: 5,
    slug: 'reserva-booking',
    title: 'Reserva',
    category: 'Booking System',
    summary:
      'Multi-service booking platform with calendar sync, automated reminders, payment processing, and provider dashboards.',
    description:
      'Reserva is a white-label booking system powering scheduling for clinics, salons, and fitness studios. It features Google/Apple Calendar sync, SMS/email reminders, Stripe payment processing, and a provider management dashboard.',
    tags: ['Next.js', 'Stripe', 'Twilio', 'Supabase'],
    year: '2023',
    featured: false,
    coverColor: '#220135',
    accentColor: '#6B04A8',
  },
  {
    id: 6,
    slug: 'lumina-landing',
    title: 'Lumina Agency',
    category: 'Landing Page',
    summary:
      'High-converting business landing page with cinematic hero, animated case studies, and integrated lead capture.',
    description:
      'A premium landing page for a growth consultancy. Features a full-screen hero with scroll-driven storytelling, animated statistics, video testimonials, a multi-step lead qualification form, and A/B tested CTA variants.',
    tags: ['Next.js', 'Framer Motion', 'HubSpot', 'Vercel'],
    year: '2023',
    featured: false,
    coverColor: '#3A025B',
    accentColor: '#8A05D4',
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}

export const projectCategories = ['All', 'EdTech', 'Hospitality', 'Real Estate', 'Admin System', 'Booking System', 'Landing Page']
