import { useInView } from '../hooks/useInView'
import { Globe, Smartphone, Zap, ShoppingCart, BarChart2, Settings } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Pixel-perfect, performance-first websites that load fast and convert visitors into customers.',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experiences',
    description:
      'Responsive interfaces engineered for every screen size — from mobile to ultrawide.',
    tags: ['Responsive', 'PWA', 'Touch-Optimized'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Core Web Vitals tuning, lazy loading, and bundle optimization for blazing fast load times.',
    tags: ['Core Web Vitals', 'Lighthouse', 'CDN'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description:
      'Custom storefronts and checkout flows built to maximize revenue and reduce cart abandonment.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
  },
  {
    icon: BarChart2,
    title: 'Analytics & Growth',
    description:
      'Data-driven setups: event tracking, conversion funnels, and dashboards that guide decisions.',
    tags: ['GA4', 'Mixpanel', 'Hotjar'],
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description:
      'Ongoing care plans: security patches, content updates, and proactive monitoring 24/7.',
    tags: ['SLA', 'Monitoring', 'Updates'],
  },
]

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView()
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={`group p-8 border border-gray-100 rounded-2xl bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-default ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-gray-900 flex items-center justify-center mb-6 transition-colors duration-300">
        <Icon
          size={22}
          className="text-gray-700 group-hover:text-white transition-colors duration-300"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium text-gray-500 bg-gray-50 rounded-md border border-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const [headingRef, headingInView] = useInView()

  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headingRef}
          className={`max-w-2xl mb-16 ${headingInView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Services built for{' '}
            <span className="relative">
              impact
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-300 rounded-full" />
            </span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            Every service is designed around one goal: measurable results for your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
