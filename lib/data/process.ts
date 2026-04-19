import type { ProcessStep } from '../types'

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, goals, users, and competition. A strategy brief sets the foundation before a single pixel is designed.',
    duration: '1–2 days',
    ar: {
      title: 'الاكتشاف',
      description:
        'نبدأ بفهم عملك وأهدافك ومستخدميك والمنافسة. ملخص استراتيجي يضع الأساس قبل تصميم أي بكسل.',
      duration: '1-2 يوم',
    },
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description:
      'Wireframes, component maps, and high-fidelity designs — reviewed and approved by you before development starts.',
    duration: '3–5 days',
    ar: {
      title: 'الهندسة والتصميم',
      description:
        'أُطر سلكية وخرائط مكونات وتصاميم عالية الدقة — تُراجَع وتُوافَق عليها قبل بدء التطوير.',
      duration: '3-5 أيام',
    },
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Iterative sprints with daily progress updates. Clean commits, code reviews, and staging deployments throughout.',
    duration: '1–4 weeks',
    ar: {
      title: 'التطوير',
      description:
        'سباقات تكرارية مع تحديثات تقدم يومية. كود نظيف ومراجعات ونشر مرحلي طوال الرحلة.',
      duration: '1-4 أسابيع',
    },
  },
  {
    number: '04',
    title: 'QA & Testing',
    description:
      'Cross-browser testing, accessibility audit, performance checks, and user flow validation before anything goes live.',
    duration: '2–3 days',
    ar: {
      title: 'الجودة والاختبار',
      description:
        'اختبار متعدد المتصفحات ومراجعة الوصولية وفحص الأداء والتحقق من تدفق المستخدم قبل الإطلاق.',
      duration: '2-3 أيام',
    },
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Zero-downtime deployment, DNS migration, monitoring setup, and a post-launch support window included.',
    duration: '1 day',
    ar: {
      title: 'الإطلاق',
      description:
        'نشر بدون انقطاع ونقل DNS وإعداد مراقبة ونافذة دعم ما بعد الإطلاق مشمولة.',
      duration: 'يوم واحد',
    },
  },
  {
    number: '06',
    title: 'Growth & Iteration',
    description:
      'Analytics review, performance monitoring, and ongoing improvements based on real user data — not guesswork.',
    duration: 'Ongoing',
    ar: {
      title: 'النمو والتطوير',
      description:
        'مراجعة التحليلات ومراقبة الأداء وتحسينات مستمرة بناءً على بيانات المستخدمين الحقيقية.',
      duration: 'مستمر',
    },
  },
]

export function getAllProcessSteps(): ProcessStep[] {
  return processSteps
}
