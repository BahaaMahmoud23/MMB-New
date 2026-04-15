import type { WhyUsItem } from '../types'

export const whyUsItems: WhyUsItem[] = [
  {
    iconName: 'Clock',
    title: 'On-Time Delivery',
    description:
      'We ship on schedule — no excuses. Clear milestones and transparent communication from day one.',
  },
  {
    iconName: 'Code2',
    title: 'Clean, Scalable Code',
    description:
      'Every line is written with maintainability in mind. No technical debt handed off at launch.',
  },
  {
    iconName: 'TrendingUp',
    title: 'Results-Focused',
    description:
      'We measure success by your KPIs — load time, conversion rates, and real business outcomes.',
  },
  {
    iconName: 'MessageCircle',
    title: 'Dedicated Support',
    description:
      'A real team, not a ticket system. Direct access to your developer via Slack or email.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'Security by Default',
    description:
      'HTTPS, OWASP best practices, and regular audits are standard — not add-ons.',
  },
  {
    iconName: 'Layers',
    title: 'Full-Stack Ownership',
    description:
      'Design, frontend, backend, and deployment — one team owns the entire product lifecycle.',
  },
]

export function getAllWhyUsItems(): WhyUsItem[] {
  return whyUsItems
}
