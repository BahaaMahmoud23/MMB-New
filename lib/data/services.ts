import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'website-design',
    iconName: 'Palette',
    title: 'Website Design & Development',
    description:
      'Pixel-perfect, performance-first websites built from scratch. We handle everything from architecture to deployment.',
    tags: ['Next.js', 'React', 'Tailwind'],
  },
  {
    id: 'landing-pages',
    iconName: 'Zap',
    title: 'Landing Pages',
    description:
      'High-converting landing pages engineered for speed and clarity — designed to turn visitors into customers.',
    tags: ['Conversion Focused', 'SEO', 'A/B Ready'],
  },
  {
    id: 'dashboards',
    iconName: 'LayoutDashboard',
    title: 'Dashboards & Data Interfaces',
    description:
      'Custom dashboards that surface the metrics that matter — real-time data, clean charts, and intuitive controls.',
    tags: ['React', 'Recharts', 'REST/GraphQL'],
  },
  {
    id: 'admin-systems',
    iconName: 'Settings2',
    title: 'Admin & Management Systems',
    description:
      'Powerful internal tools with role-based access, data tables, audit trails, and full workflow automation.',
    tags: ['RBAC', 'Multi-tenant', 'Scalable'],
  },
  {
    id: 'booking-systems',
    iconName: 'CalendarCheck',
    title: 'Booking Systems',
    description:
      'End-to-end booking platforms with calendar sync, automated reminders, payment processing, and provider dashboards.',
    tags: ['Stripe', 'Calendar Sync', 'Notifications'],
  },
  {
    id: 'custom-solutions',
    iconName: 'Layers',
    title: 'Custom Web Solutions',
    description:
      'When off-the-shelf doesn\'t cut it, we design and build bespoke web systems tailored to your exact business logic.',
    tags: ['Bespoke', 'Scalable', 'Full-Stack'],
  },
  {
    id: 'performance',
    iconName: 'Gauge',
    title: 'Performance & Optimization',
    description:
      'Core Web Vitals tuning, bundle optimization, and caching strategies that push your site to 100 on Lighthouse.',
    tags: ['Core Web Vitals', 'Lighthouse', 'CDN'],
  },
]

export function getAllServices(): Service[] {
  return services
}
