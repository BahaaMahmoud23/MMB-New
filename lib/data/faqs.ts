import type { FAQ } from '../types'

export const faqs: FAQ[] = [
  {
    question: 'How much does a project typically cost?',
    answer:
      'Projects range from $2,000 for simple landing pages to $30,000+ for complex web applications. Every engagement starts with a free discovery call where we scope the work and give you a fixed-price proposal.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'A landing page takes 1–2 weeks. A full product or web application typically takes 4–12 weeks depending on scope. We share detailed timelines upfront and stick to them.',
  },
  {
    question: 'Do you work with early-stage startups?',
    answer:
      'Yes — many of our best projects started at the idea stage. We help founders validate ideas quickly with lean MVPs, then scale as the product grows.',
  },
  {
    question: 'What tech stack do you use?',
    answer:
      'We default to Next.js/React for the frontend, Node.js or Python on the backend, and PostgreSQL or Supabase for data. We adapt to your existing stack if needed.',
  },
  {
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Yes. All projects include a 30-day post-launch support window, and we offer monthly plans for ongoing updates, security patches, and feature work.',
  },
  {
    question: 'Will I own the code?',
    answer:
      '100%. Upon final payment, you receive full source code ownership and all related assets. No lock-in, no recurring license fees.',
  },
  {
    question: 'How do you handle revisions?',
    answer:
      'Each project phase includes a structured review round. We use a clear feedback process to avoid scope creep and keep revisions focused and efficient.',
  },
  {
    question: 'Can you redesign or improve an existing site?',
    answer:
      'Absolutely. Redesigns and performance improvements are some of our most common engagements. We audit your current site first and present a clear improvement plan.',
  },
]

export function getAllFAQs(): FAQ[] {
  return faqs
}
