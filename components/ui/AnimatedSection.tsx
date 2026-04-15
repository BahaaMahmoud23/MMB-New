'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, slideInLeft, slideInRight, fadeIn } from '@/lib/animations'
import { cn } from '@/lib/cn'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  margin?: string
}

const variantMap = {
  up: fadeUp,
  left: slideInLeft,
  right: slideInRight,
  none: fadeIn,
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  margin = '-60px',
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: margin as `${number}px` })

  const variants = variantMap[direction]

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
