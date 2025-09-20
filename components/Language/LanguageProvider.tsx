'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { PortfolioData } from './portfolioData'

type Language = 'en' | 'ja'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  data: PortfolioData
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
  data: PortfolioData
}

export default function LanguageProvider({ children, data }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      updatePageContent(language)
    }
  }, [language, mounted])

  const updatePageContent = (lang: Language) => {
    // Update all elements with data-key attributes
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key')
      if (key) {
        const value = getNestedValue(data[lang], key)
        if (value && typeof value === 'string') {
          element.textContent = value
        }
      }
    })
  }

  const getNestedValue = (obj: any, path: string): any => {
    return path.split('.').reduce((current, key) => {
      // Handle array indices
      if (key.includes('[') && key.includes(']')) {
        const arrayKey = key.substring(0, key.indexOf('['))
        const index = parseInt(key.substring(key.indexOf('[') + 1, key.indexOf(']')))
        return current?.[arrayKey]?.[index]
      }
      return current?.[key]
    }, obj)
  }

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    data
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}