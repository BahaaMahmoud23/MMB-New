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
  displaySize?: 'wide' | 'tall' | 'normal'
  tone?: 'dark' | 'light'
  liveUrl?: string
  ar?: {
    title: string
    summary: string
    description?: string
  }
}

export interface Service {
  id: string
  iconName: string
  title: string
  description: string
  tags: string[]
  ar?: {
    title: string
    description: string
  }
}

export interface FAQ {
  question: string
  answer: string
  ar?: {
    question: string
    answer: string
  }
}

export interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
  ar?: {
    quote: string
  }
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  duration: string
  ar?: {
    title: string
    description: string
    duration: string
  }
}

export interface WhyUsItem {
  iconName: string
  title: string
  description: string
  ar?: {
    title: string
    description: string
  }
}
