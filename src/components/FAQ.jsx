import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How much does a project typically cost?',
    a: 'Projects range from $2,000 for simple landing pages to $30,000+ for complex web applications. Every engagement starts with a free discovery call where we scope the work and give you a fixed-price proposal.',
  },
  {
    q: 'How long does a project take?',
    a: 'A landing page takes 1–2 weeks. A full product or SaaS application typically takes 4–12 weeks depending on scope. We share detailed timelines upfront and stick to them.',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: 'Yes — many of our best projects started at the idea stage. We help founders validate ideas quickly with lean MVPs, then scale as the product grows.',
  },
  {
    q: 'What tech stack do you use?',
    a: 'We default to React/Next.js for the frontend, Node.js or Python on the backend, and PostgreSQL or MongoDB for data. We adapt to your existing stack if needed.',
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: 'Yes. All projects include a 30-day post-launch support window, and we offer monthly maintenance plans for ongoing updates, security patches, and feature work.',
  },
  {
    q: 'Will I own the code?',
    a: '100%. Upon final payment, you receive full source code ownership and all related assets. No lock-in, no recurring license fees.',
  },
  {
    q: 'How do you handle revisions?',
    a: 'Each project phase includes a structured review round. We use a clear feedback process to avoid scope creep and keep revisions focused and efficient.',
  },
  {
    q: 'Can you redesign or improve an existing site?',
    a: 'Absolutely. Redesigns and performance improvements are some of our most common engagements. We audit your current site first and present a clear improvement plan.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`border-b border-gray-100 last:border-0 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
          {item.q}
        </span>
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-200 group-hover:bg-gray-200">
          {open ? (
            <Minus size={14} className="text-gray-700" />
          ) : (
            <Plus size={14} className="text-gray-700" />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-48 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-500 text-sm leading-relaxed pr-12">{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [headingRef, headingInView] = useInView()
  const half = Math.ceil(faqs.length / 2)

  return (
    <section id="faq" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headingRef}
          className={`text-center max-w-xl mx-auto mb-16 ${headingInView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Common questions
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Everything you need to know before we start working together.
          </p>
        </div>

        {/* Two-column accordion */}
        <div className="grid lg:grid-cols-2 gap-x-16">
          <div className="bg-white rounded-2xl px-8 py-4 border border-gray-100">
            {faqs.slice(0, half).map((item, i) => (
              <FAQItem key={item.q} item={item} index={i} />
            ))}
          </div>
          <div className="bg-white rounded-2xl px-8 py-4 border border-gray-100 mt-6 lg:mt-0">
            {faqs.slice(half).map((item, i) => (
              <FAQItem key={item.q} item={item} index={i + half} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
