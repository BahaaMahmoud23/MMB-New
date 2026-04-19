'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { en } from './en'
import { ar } from './ar'
import type { Translations } from './en'

export type Lang = 'en' | 'ar'

const translations: Record<Lang, Translations> = { en, ar }

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: en,
  isRTL: false,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  // Read from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('mmb-lang') as Lang | null
    if (saved === 'ar' || saved === 'en') {
      setLangState(saved)
    }
  }, [])

  // Sync dir, lang, and font class whenever lang changes
  useEffect(() => {
    const isAr = lang === 'ar'
    document.documentElement.dir = isAr ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    document.body.classList.toggle('font-arabic', isAr)
  }, [lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem('mmb-lang', l)
  }, [])

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang], isRTL: lang === 'ar' }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
