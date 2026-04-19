import type { Testimonial } from '../types'

export const testimonials: Testimonial[] = [
  {
    quote:
      'MMB delivered our platform in 3 weeks, under budget, and it\'s been our best-converting page ever. Genuinely impressive team.',
    author: 'Sarah K.',
    title: 'Founder',
    company: 'Lumina Agency',
    ar: {
      quote: 'سلّمت MMB منصتنا في 3 أسابيع وفي حدود الميزانية، وكانت أعلى صفحة تحويل لدينا على الإطلاق. فريق مثير للإعجاب حقًا.',
    },
  },
  {
    quote:
      'The admin system they built replaced two legacy tools and cut our ops time in half. Clean code, no drama, shipped on time.',
    author: 'James R.',
    title: 'CTO',
    company: 'Nexus SaaS',
    ar: {
      quote: 'النظام الإداري الذي بنوه حلّ محل أداتين قديمتين وخفّض وقت عملياتنا إلى النصف. كود نظيف، بلا تعقيدات، تسليم في الموعد.',
    },
  },
  {
    quote:
      'Our hotel website looks more premium than competitors with 10x our budget. The booking integration alone paid for the project.',
    author: 'Layla M.',
    title: 'Director of Operations',
    company: 'Grandeur Hotels',
    ar: {
      quote: 'موقع فندقنا يبدو أكثر فخامة من المنافسين الذين يملكون ميزانية أكبر بعشر مرات. تكامل الحجز وحده استرد تكلفة المشروع بأكمله.',
    },
  },
]

export function getAllTestimonials(): Testimonial[] {
  return testimonials
}
