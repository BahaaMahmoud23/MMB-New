export interface Project {
  id: number
  slug: string
  title: string
  category: string
  summary: string
  description: string
  tags: string[]
  year: string
  featured: boolean
  coverColor: string
  accentColor: string
  liveUrl?: string
}

export interface Service {
  id: string
  iconName: string
  title: string
  description: string
  tags: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  duration: string
}

export interface WhyUsItem {
  iconName: string
  title: string
  description: string
}
