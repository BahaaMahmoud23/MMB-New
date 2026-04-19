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
    displaySize: 'wide',
    tone: 'dark',
    coverColor: '#220135',
    accentColor: '#520380',
    ar: {
      title: 'منصة EduCore',
      summary:
        'منصة تعليمية متكاملة بإدارة الدورات ولوحات الطلاب وتتبع التقدم ودعم الجلسات المباشرة.',
    },
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
    displaySize: 'tall',
    tone: 'light',
    coverColor: '#3A025B',
    accentColor: '#6B04A8',
    ar: {
      title: 'فندق غراندور',
      summary:
        'موقع فندق فاخر مع عروض غرف غامرة ومحرك حجز متكامل ودعم متعدد اللغات.',
    },
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
    displaySize: 'normal',
    tone: 'dark',
    coverColor: '#11001C',
    accentColor: '#3A025B',
    ar: {
      title: 'لوحة تحكم Strata',
      summary:
        'لوحة تحكم محفظة عقارية مع بحث مبني على الخريطة وتحليلات وتكامل CRM وسير عمل الوكلاء.',
    },
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
    displaySize: 'normal',
    tone: 'light',
    coverColor: '#140129',
    accentColor: '#520380',
    ar: {
      title: 'Nexus للإدارة',
      summary:
        'نظام إداري مؤسسي مع وصول محدد بالأدوار وجداول بيانات فورية وسجلات مراجعة وإدارة الفريق.',
    },
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
    displaySize: 'normal',
    tone: 'light',
    coverColor: '#220135',
    accentColor: '#6B04A8',
    ar: {
      title: 'Reserva للحجز',
      summary:
        'منصة حجز متعددة الخدمات مع مزامنة التقويم وتذكيرات آلية ومعالجة مدفوعات ولوحات المزودين.',
    },
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
    displaySize: 'wide',
    tone: 'dark',
    coverColor: '#3A025B',
    accentColor: '#8A05D4',
    ar: {
      title: 'وكالة Lumina',
      summary:
        'صفحة هبوط تجارية عالية التحويل مع بطل سينمائي ودراسات حالة متحركة ونموذج عملاء متكامل.',
    },
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

export const projectCategories = [
  'All',
  'EdTech',
  'Hospitality',
  'Real Estate',
  'Admin System',
  'Booking System',
  'Landing Page',
]
