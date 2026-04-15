import { useInView } from '../hooks/useInView'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [ref, inView] = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic goes here
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-28 bg-gray-900 overflow-hidden relative">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Radial light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Ready to build
              <br />
              something great?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Tell us about your project. We'll get back to you within 24 hours with a clear
              plan and a fair quote.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@mmb.dev"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                  <Mail size={16} className="text-gray-300" />
                </div>
                <span className="text-sm font-medium">hello@mmb.dev</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                  <Phone size={16} className="text-gray-300" />
                </div>
                <span className="text-sm font-medium">+1 (234) 567-890</span>
              </a>
            </div>

            {/* Testimonial */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-300 text-base italic leading-relaxed mb-4">
                "MMB delivered our product in 3 weeks, under budget, and it's been our best-converting
                page ever. Genuinely impressive team."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">S</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Sarah K.</div>
                  <div className="text-gray-500 text-xs">Founder, Aura Skincare</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowRight size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Message sent!</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  We'll review your project and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-2 text-gray-500 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Project Brief
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 w-full py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer text-sm"
                >
                  Send Message
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <p className="text-center text-gray-600 text-xs">
                  No spam. Just a reply within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
