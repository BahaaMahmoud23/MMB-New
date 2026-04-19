'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
}

export function useInView(
  options: UseInViewOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.unobserve(el)
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, inView]
}
