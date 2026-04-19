import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'website-design',
    iconName: 'Palette',
    title: 'Website Design & Development',
    description:
      'Pixel-perfect, performance-first websites built from scratch. We handle everything from architecture to deployment.',
    tags: ['Next.js', 'React', 'Tailwind'],
    ar: {
      title: 'تصميم وتطوير المواقع',
      description:
        'مواقع احترافية وعالية الأداء مبنية من الصفر. نتولى كل شيء من الهيكلة حتى النشر.',
    },
  },
  {
    id: 'landing-pages',
    iconName: 'Zap',
    title: 'Landing Pages',
    description:
      'High-converting landing pages engineered for speed and clarity — designed to turn visitors into customers.',
    tags: ['Conversion Focused', 'SEO', 'A/B Ready'],
    ar: {
      title: 'صفحات الهبوط',
      description:
        'صفحات هبوط عالية التحويل مبنية للسرعة والوضوح — مصممة لتحويل الزوار إلى عملاء.',
    },
  },
  {
    id: 'dashboards',
    iconName: 'LayoutDashboard',
    title: 'Dashboards & Data Interfaces',
    description:
      'Custom dashboards that surface the metrics that matter — real-time data, clean charts, and intuitive controls.',
    tags: ['React', 'Recharts', 'REST/GraphQL'],
    ar: {
      title: 'لوحات البيانات والواجهات',
      description:
        'لوحات تحكم مخصصة تُبرز المقاييس المهمة — بيانات فورية ومخططات واضحة وأدوات تحكم سهلة.',
    },
  },
  {
    id: 'admin-systems',
    iconName: 'Settings2',
    title: 'Admin & Management Systems',
    description:
      'Powerful internal tools with role-based access, data tables, audit trails, and full workflow automation.',
    tags: ['RBAC', 'Multi-tenant', 'Scalable'],
    ar: {
      title: 'الأنظمة الإدارية',
      description:
        'أدوات داخلية قوية مع وصول محدد بالأدوار وجداول بيانات وسجلات مراجعة وأتمتة كاملة للسير العمل.',
    },
  },
  {
    id: 'booking-systems',
    iconName: 'CalendarCheck',
    title: 'Booking Systems',
    description:
      'End-to-end booking platforms with calendar sync, automated reminders, payment processing, and provider dashboards.',
    tags: ['Stripe', 'Calendar Sync', 'Notifications'],
    ar: {
      title: 'أنظمة الحجز',
      description:
        'منصات حجز متكاملة مع مزامنة التقويم وتذكيرات آلية ومعالجة مدفوعات ولوحات إدارة المزودين.',
    },
  },
  {
    id: 'custom-solutions',
    iconName: 'Layers',
    title: 'Custom Web Solutions',
    description:
      "When off-the-shelf doesn't cut it, we design and build bespoke web systems tailored to your exact business logic.",
    tags: ['Bespoke', 'Scalable', 'Full-Stack'],
    ar: {
      title: 'حلول ويب مخصصة',
      description:
        'حين لا تكفي الحلول الجاهزة، نصمم أنظمة ويب مخصصة تتوافق تمامًا مع منطق عملك.',
    },
  },
  {
    id: 'performance',
    iconName: 'Gauge',
    title: 'Performance & Optimization',
    description:
      'Core Web Vitals tuning, bundle optimization, and caching strategies that push your site to 100 on Lighthouse.',
    tags: ['Core Web Vitals', 'Lighthouse', 'CDN'],
    ar: {
      title: 'الأداء والتحسين',
      description:
        'ضبط مقاييس Core Web Vitals وتحسين الحزم واستراتيجيات التخزين المؤقت للوصول إلى 100 على Lighthouse.',
    },
  },
]

export function getAllServices(): Service[] {
  return services
}
