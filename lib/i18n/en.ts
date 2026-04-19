export interface StatItem {
  value: string
  label: string
}

export interface FormTranslations {
  name: string
  namePlaceholder: string
  email: string
  emailPlaceholder: string
  message: string
  messagePlaceholder: string
  submit: string
  sending: string
  success: string
  successMsg: string
  sendAnother: string
  noSpam: string
  error: string
}

export interface ValueItem {
  letter: string
  name: string
  description: string
}

export interface Translations {
  nav: {
    services: string
    work: string
    about: string
    contact: string
    startProject: string
  }
  hero: {
    badge: string
    headlinePre: string
    headlineAccent: string
    headlineMid: string
    headlinePost: string
    subheadline: string
    cta1: string
    cta2: string
    scrollLabel: string
    stats: StatItem[]
  }
  services: {
    label: string
    title: string
    titleAccent: string
    subtitle: string
    viewAll: string
    pageLabel: string
    pageTitle: string
    pageTitleAccent: string
    pageSubtitle: string
  }
  projects: {
    label: string
    title: string
    titleAccent: string
    subtitle: string
    viewAll: string
    pageLabel: string
    pageTitle: string
    pageTitleAccent: string
    pageSubtitle: string
    allCategories: string
  }
  whyUs: {
    label: string
    title: string
    titleAccent: string
    subtitle: string
    stats: StatItem[]
  }
  process: {
    label: string
    title: string
    titleAccent: string
    subtitle: string
  }
  about: {
    label: string
    title: string
    titleAccent: string
    body1: string
    body2: string
    learnMore: string
    quote: string
    estLabel: string
    happyClients: string
    yearsExp: string
    values: ValueItem[]
    pageTitle: string
    pageTitleAccent: string
    pageSubtitle: string
    storyTitle: string
    story1: string
    story2: string
    workWithUs: string
    standForTitle: string
    capabilitiesLabel: string
    capabilitiesTitle: string
    capabilitiesTitleAccent: string
    capabilities: string[]
    pageValues: ValueItem[]
  }
  faq: {
    label: string
    title: string
    titleAccent: string
    subtitle: string
  }
  cta: {
    label: string
    title: string
    titleAccent: string
    subtitle: string
    email: string
    phone: string
    form: FormTranslations
  }
  footer: {
    tagline: string
    navLabel: string
    contactLabel: string
    rights: string
    privacy: string
    terms: string
  }
  contact: {
    label: string
    title: string
    titleAccent: string
    subtitle: string
    directContact: string
    followUs: string
    responseTime: string
    responseMsg: string
  }
}

export const en: Translations = {
  nav: {
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    startProject: 'Start a Project',
  },
  hero: {
    badge: 'Premium Web Development & Digital Systems',
    headlinePre: 'Building Modern',
    headlineAccent: 'Websites',
    headlineMid: '& Smart',
    headlinePost: 'Digital Systems',
    subheadline:
      'We design and develop premium websites, dashboards, and custom web solutions that help businesses grow with clarity, speed, and performance.',
    cta1: 'Start Your Project',
    cta2: 'View Our Work',
    scrollLabel: 'Scroll',
    stats: [
      { value: '50+', label: 'Projects Delivered' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '< 2s', label: 'Avg Load Time' },
      { value: '5+', label: 'Years Experience' },
    ],
  },
  services: {
    label: 'What We Do',
    title: 'Services built for',
    titleAccent: 'impact',
    subtitle:
      'Every service is designed around one goal: delivering real, measurable results for your business.',
    viewAll: 'View all services',
    pageLabel: 'What We Do',
    pageTitle: 'Services built for',
    pageTitleAccent: 'real outcomes',
    pageSubtitle:
      'Every service we offer is designed around delivering measurable results. From landing pages to enterprise systems — we build it right.',
  },
  projects: {
    label: 'Our Work',
    title: 'Selected',
    titleAccent: 'projects',
    subtitle:
      'From platforms to landing pages — every project is crafted with precision and purpose.',
    viewAll: 'View all projects',
    pageLabel: 'Portfolio',
    pageTitle: "Work we're",
    pageTitleAccent: 'proud of',
    pageSubtitle:
      "A selection of projects we've built — from platforms and dashboards to booking systems and landing pages.",
    allCategories: 'All',
  },
  whyUs: {
    label: 'Why MMB',
    title: 'The difference is in',
    titleAccent: 'the details.',
    subtitle:
      "Hundreds of agencies promise great work. We back it up with process, transparency, and a track record that speaks for itself.",
    stats: [
      { value: '50+', label: 'Projects Shipped' },
      { value: '4.9★', label: 'Average Rating' },
      { value: '< 2s', label: 'Avg Load Time' },
      { value: '0', label: 'Missed Deadlines' },
    ],
  },
  process: {
    label: 'How We Work',
    title: 'A process you can',
    titleAccent: 'trust end-to-end.',
    subtitle: "No black boxes. You always know what's happening, what's next, and why.",
  },
  about: {
    label: 'About MMB',
    title: 'Built by people who',
    titleAccent: 'love the web.',
    body1:
      "MMB started with a simple belief: most businesses deserve better digital work than they're getting. Since 2019, we've partnered with startups, scale-ups, and established businesses to build products that are fast, accessible, and genuinely useful.",
    body2:
      "We don't chase trends or over-engineer. We focus on understanding your users, shipping on time, and making work we're proud of.",
    learnMore: 'Learn more about us',
    quote: "Most businesses deserve better digital work than they're getting.",
    estLabel: 'Est. 2019',
    happyClients: 'Happy clients worldwide',
    yearsExp: 'Years of experience',
    values: [
      { letter: 'C', name: 'Craft', description: 'We take pride in every detail, visible or not.' },
      { letter: 'C', name: 'Clarity', description: 'No jargon. No surprises. Just honest communication.' },
      { letter: 'S', name: 'Speed', description: 'Fast iteration, fast delivery — without cutting corners.' },
    ],
    pageTitle: 'Built by people who',
    pageTitleAccent: 'love the web',
    pageSubtitle:
      "We're a team of developers and designers obsessed with building things that work beautifully.",
    storyTitle: 'Our story',
    story1:
      "MMB started with a simple belief: most businesses deserve better digital work than they're getting. Since 2019, we've partnered with startups, scale-ups, and established businesses to build products that are fast, accessible, and genuinely useful.",
    story2:
      "We don't chase trends or over-engineer. We focus on understanding your users, shipping on time, and making work we're proud of — every single time.",
    workWithUs: 'Work with us',
    standForTitle: 'What we stand for',
    capabilitiesLabel: 'Capabilities',
    capabilitiesTitle: "What we're",
    capabilitiesTitleAccent: 'great at',
    capabilities: [
      'Next.js & React development',
      'Full-stack web applications',
      'Dashboard & admin systems',
      'Booking & scheduling systems',
      'Performance & SEO optimization',
      'System architecture & consulting',
    ],
    pageValues: [
      {
        letter: 'C',
        name: 'Craft',
        description: 'We take pride in every detail, visible or not. Clean code, refined UI, thoughtful architecture.',
      },
      {
        letter: 'C',
        name: 'Clarity',
        description: 'No jargon. No surprises. Honest timelines, clear communication, and zero hidden costs.',
      },
      {
        letter: 'S',
        name: 'Speed',
        description: 'Fast iteration, fast delivery — without cutting corners on quality or security.',
      },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Common',
    titleAccent: 'questions',
    subtitle: 'Everything you need to know before starting a project with us.',
  },
  cta: {
    label: 'Get in Touch',
    title: 'Ready to build',
    titleAccent: 'something great?',
    subtitle:
      "Tell us about your project. We'll get back to you within 24 hours with a clear plan and a fair quote.",
    email: 'hello@mmb.dev',
    phone: '+1 (234) 567-890',
    form: {
      name: 'Your Name',
      namePlaceholder: 'John Doe',
      email: 'Email Address',
      emailPlaceholder: 'john@company.com',
      message: 'Project Brief',
      messagePlaceholder: 'Tell us about your project, goals, and timeline...',
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent!',
      successMsg: "We'll review your project and get back to you within 24 hours.",
      sendAnother: 'Send another message',
      noSpam: 'No spam. Just a reply within 24 hours.',
      error: 'Something went wrong. Please try again or email us directly.',
    },
  },
  footer: {
    tagline: 'Premium web development and digital systems. Built to perform, designed to last.',
    navLabel: 'Navigation',
    contactLabel: 'Get in touch',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
  contact: {
    label: 'Get in Touch',
    title: "Let's build something",
    titleAccent: 'great',
    subtitle:
      "Tell us about your project. We'll get back to you within 24 hours with a clear plan and a fair quote.",
    directContact: 'Direct contact',
    followUs: 'Follow us',
    responseTime: 'Response time',
    responseMsg:
      'We typically reply within a few hours during business days. Guaranteed response within 24 hours.',
  },
}
