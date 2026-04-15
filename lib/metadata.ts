import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mmb.dev'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MMB — Premium Web Development & Digital Systems',
    template: '%s | MMB',
  },
  description:
    'MMB builds premium websites, dashboards, admin systems, and custom web solutions. Fast, elegant, and built to last.',
  keywords: [
    'web development',
    'website design',
    'Next.js',
    'React',
    'dashboard development',
    'admin systems',
    'booking systems',
    'MMB',
  ],
  authors: [{ name: 'MMB', url: siteUrl }],
  creator: 'MMB',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'MMB',
    images: [
      {
        url: '/og/default.png',
        width: 1200,
        height: 630,
        alt: 'MMB — Premium Web Development & Digital Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mmbdev',
    site: '@mmbdev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export function createMetadata(overrides: Metadata): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph ?? {}),
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...(overrides.twitter ?? {}),
    },
  }
}
