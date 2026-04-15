import type { ProcessStep } from '../types'

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, goals, users, and competition. A strategy brief sets the foundation before a single pixel is designed.',
    duration: '1–2 days',
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description:
      'Wireframes, component maps, and high-fidelity designs — reviewed and approved by you before development starts.',
    duration: '3–5 days',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Iterative sprints with daily progress updates. Clean commits, code reviews, and staging deployments throughout.',
    duration: '1–4 weeks',
  },
  {
    number: '04',
    title: 'QA & Testing',
    description:
      'Cross-browser testing, accessibility audit, performance checks, and user flow validation before anything goes live.',
    duration: '2–3 days',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Zero-downtime deployment, DNS migration, monitoring setup, and a post-launch support window included.',
    duration: '1 day',
  },
  {
    number: '06',
    title: 'Growth & Iteration',
    description:
      'Analytics review, performance monitoring, and ongoing improvements based on real user data — not guesswork.',
    duration: 'Ongoing',
  },
]

export function getAllProcessSteps(): ProcessStep[] {
  return processSteps
}
