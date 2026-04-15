import type { Testimonial } from '../types'

export const testimonials: Testimonial[] = [
  {
    quote:
      'MMB delivered our platform in 3 weeks, under budget, and it\'s been our best-converting page ever. Genuinely impressive team.',
    author: 'Sarah K.',
    title: 'Founder',
    company: 'Lumina Agency',
  },
  {
    quote:
      'The admin system they built replaced two legacy tools and cut our ops time in half. Clean code, no drama, shipped on time.',
    author: 'James R.',
    title: 'CTO',
    company: 'Nexus SaaS',
  },
  {
    quote:
      'Our hotel website looks more premium than competitors with 10x our budget. The booking integration alone paid for the project.',
    author: 'Layla M.',
    title: 'Director of Operations',
    company: 'Grandeur Hotels',
  },
]

export function getAllTestimonials(): Testimonial[] {
  return testimonials
}
