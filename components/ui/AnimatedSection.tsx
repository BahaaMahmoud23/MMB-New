'use client'

import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/cn'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  margin?: string
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(inView ? 'animate-fade-up' : 'opacity-0', className)}
      style={{ animationDelay: `${delay * 1000}ms`, animationFillMode: 'both' }}
    >
      {children}
    </div>
  )
}
