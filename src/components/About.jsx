import { useInView } from '../hooks/useInView'
import { ArrowRight } from 'lucide-react'

const values = [
  { label: 'Craft', desc: 'We take pride in every detail, visible or not.' },
  { label: 'Clarity', desc: 'No jargon. No surprises. Just honest communication.' },
  { label: 'Speed', desc: 'Fast iteration, fast delivery — without cutting corners.' },
]

export default function About() {
  const [headingRef, headingInView] = useInView()
  const [contentRef, contentInView] = useInView()

  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image / visual block */}
          <div
            ref={headingRef}
            className={`relative ${headingInView ? 'animate-fade-up' : 'opacity-0'}`}
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden bg-gray-900 aspect-[4/5] flex flex-col justify-end p-10">
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
                aria-hidden="true"
              />

              {/* Logo watermark */}
              <img
                src="/images/white logo.png"
                alt=""
                className="absolute top-10 left-10 h-10 w-auto opacity-30"
                aria-hidden="true"
              />

              {/* Bottom content */}
              <div className="relative z-10">
                <div className="text-7xl font-black text-white opacity-10 leading-none mb-4">MMB</div>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                  A remote-first team of developers, designers, and strategists who care deeply about the work.
                </p>
              </div>

              {/* Floating badge */}
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center">
                <div className="text-2xl font-black text-white">2019</div>
                <div className="text-xs text-gray-400 font-medium">Founded</div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-gray-100 rounded-2xl shadow-xl p-6 hidden md:block">
              <div className="text-3xl font-black text-gray-900">50+</div>
              <div className="text-sm text-gray-400 font-medium mt-1">Happy clients<br />worldwide</div>
            </div>
          </div>

          {/* Right — text */}
          <div
            ref={contentRef}
            className={`${contentInView ? 'animate-fade-up' : 'opacity-0'}`}
          >
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              About MMB
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Built by people
              <br />
              who love the web.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              MMB started with a simple belief: most businesses deserve better digital work than
              they're getting. Since 2019, we've partnered with startups, scale-ups, and established
              brands to build products that are fast, accessible, and genuinely useful.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              We don't chase trends or over-engineer. We focus on understanding your users,
              shipping on time, and making work we're proud of.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-5 mb-10 pb-10 border-b border-gray-100">
              {values.map(({ label, desc }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">
                      {label.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">{label}</span>
                    <span className="text-gray-500"> — {desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-600 transition-colors duration-200 cursor-pointer"
            >
              Work with us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
