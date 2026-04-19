import type { Metadata } from 'next'
import { Inter, Cairo, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { LanguageProvider } from '@/lib/i18n'
import { defaultMetadata } from '@/lib/metadata'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${cairo.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <LanguageProvider>
          <Navbar />
          <PageWrapper>
            <main>{children}</main>
          </PageWrapper>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
