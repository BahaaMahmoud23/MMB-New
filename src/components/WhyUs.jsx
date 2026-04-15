import { useInView } from '../hooks/useInView'
import { Clock, Code2, TrendingUp, Headphones, Lock, Layers } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      'We ship on schedule — no excuses. Clear milestones and transparent communication from day one.',
  },
  {
    icon: Code2,
    title: 'Clean, Scalable Code',
    description:
      'Every line is written with maintainability in mind. No technical debt handed off at launch.',
  },
  {
    icon: TrendingUp,
    title: 'Results-Focused',
    description:
      'We measure success by your KPIs — conversion rates, load time, and business outcomes.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description:
      'A real team, not a ticket system. Direct access to your developer via Slack or email.',
  },
  {
    icon: Lock,
    title: 'Security by Default',
    description:
      'HTTPS, OWASP best practices, and regular audits are standard — not add-ons.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Ownership',
    description:
      'Design, frontend, backend, and deployment — one team owns the entire product lifecycle.',
  },
]

function ReasonItem({ reason, index }) {
  const [ref, inView] = useInView()
  const Icon = reason.icon

  return (
    <div
      ref={ref}
      className={`flex gap-5 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mt-0.5">
        <Icon size={18} className="text-gray-700" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-1">{reason.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
      </div>
    </div>
  )
}

export default function WhyUs() {
  const [headingRef, headingInView] = useInView()

  return (
    <section id="why-us" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — sticky heading */}
          <div
            ref={headingRef}
            className={`lg:sticky lg:top-24 ${headingInView ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Why MMB
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              The difference is
              <br />
              in the details.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              Hundreds of agencies promise great work. We back it up with process, transparency,
              and a track record that speaks for itself.
            </p>

            {/* Big number accent */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '50+', label: 'Projects Shipped' },
                  { value: '4.9★', label: 'Average Rating' },
                  { value: '< 2s', label: 'Avg Load Time' },
                  { value: '0', label: 'Missed Deadlines' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-black text-gray-900">{value}</div>
                    <div className="text-xs text-gray-400 font-medium mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — reasons list */}
          <div className="flex flex-col gap-8">
            {reasons.map((reason, i) => (
              <ReasonItem key={reason.title} reason={reason} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
