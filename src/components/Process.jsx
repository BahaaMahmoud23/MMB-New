import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, goals, users, and competition. A strategy brief sets the foundation before a single pixel is designed.',
    duration: '1–2 days',
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description:
      'Wireframes, component maps, and high-fidelity designs — reviewed and approved by you before development starts.',
    duration: '3–5 days',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Iterative sprints with daily progress updates. Clean commits, code reviews, and staging deployments throughout.',
    duration: '1–4 weeks',
  },
  {
    number: '04',
    title: 'QA & Testing',
    description:
      'Cross-browser testing, accessibility audit, performance checks, and user flow validation before anything goes live.',
    duration: '2–3 days',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Zero-downtime deployment, DNS migration, monitoring setup, and a post-launch support window included.',
    duration: '1 day',
  },
  {
    number: '06',
    title: 'Growth & Iteration',
    description:
      'Analytics review, A/B testing, and ongoing improvements based on real user data — not guesswork.',
    duration: 'Ongoing',
  },
]

function StepCard({ step, index }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`group relative ${inView ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-gray-100 -z-0" />
      )}

      <div className="relative bg-white border border-gray-100 rounded-2xl p-7 group-hover:border-gray-300 group-hover:shadow-md transition-all duration-300">
        {/* Step number */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-4xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-300 select-none">
            {step.number}
          </span>
          <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
            {step.duration}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

export default function Process() {
  const [headingRef, headingInView] = useInView()

  return (
    <section id="process" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headingRef}
          className={`max-w-2xl mb-16 ${headingInView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            A process you can
            <br />
            trust end-to-end.
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            No black boxes. You always know what's happening, what's next, and why.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
