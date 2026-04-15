import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef(null)

  // Animated particle grid
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let dots = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      buildDots()
    }

    const buildDots = () => {
      dots = []
      const cols = Math.floor(canvas.width / 60)
      const rows = Math.floor(canvas.height / 60)
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push({
            x: (i / cols) * canvas.width,
            y: (j / rows) * canvas.height,
            ox: (i / cols) * canvas.width,
            oy: (j / rows) * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.2 + 0.3,
            alpha: Math.random() * 0.3 + 0.05,
          })
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach((d) => {
        d.x += d.vx
        d.y += d.vy
        const dx = d.x - d.ox
        const dy = d.y - d.oy
        if (Math.abs(dx) > 10) d.vx *= -1
        if (Math.abs(dy) > 10) d.vy *= -1

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(17,24,39,${d.alpha})`
        ctx.fill()
      })
      animationId = requestAnimationFrame(draw)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
    }
  }, [])

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Animated dot grid background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial gradient mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(255,255,255,0.85) 70%, white 100%)',
        }}
        aria-hidden="true"
      />

      {/* Thin horizontal lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[20, 40, 60, 80].map((pct) => (
          <div
            key={pct}
            className="absolute w-full border-t border-gray-100"
            style={{ top: `${pct}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-500 mb-8"
          style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gray-900 animate-pulse" />
          Premium Web Development Agency
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 leading-[0.95] mb-6"
          style={{ animation: 'fadeUp 0.7s ease 0.2s both' }}
        >
          We Build
          <br />
          <span className="relative inline-block">
            Digital
            {/* Underline accent */}
            <span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-900 rounded-full"
              style={{ animation: 'slideInLeft 0.5s ease 0.8s both' }}
            />
          </span>
          {' '}Experiences
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fadeUp 0.7s ease 0.35s both' }}
        >
          From concept to conversion — we craft fast, elegant, and scalable web products
          that move your business forward.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeUp 0.7s ease 0.5s both' }}
        >
          <button
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all duration-200 cursor-pointer text-base"
          >
            Start a Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-8 py-4 bg-transparent text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-gray-400 hover:text-gray-900 transition-all duration-200 cursor-pointer text-base"
          >
            View Our Work
          </button>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          style={{ animation: 'fadeUp 0.7s ease 0.65s both' }}
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '5+', label: 'Years Experience' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-gray-900">{value}</div>
              <div className="text-sm text-gray-400 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer group"
        aria-label="Scroll to services"
        style={{ animation: 'fadeIn 1s ease 1.2s both' }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  )
}
