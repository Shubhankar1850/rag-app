'use client'

import { useLanguage } from './LanguageProvider'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="langToggle">
      <button 
        className={`langBtn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        type="button"
      >
        EN
      </button>
      <button 
        className={`langBtn ${language === 'ja' ? 'active' : ''}`}
        onClick={() => setLanguage('ja')}
        type="button"
      >
        日本語
      </button>
    </div>
  )
}