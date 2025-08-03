"use client"

import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform"
    >
      <Languages size={16} />
      <span className="hidden sm:inline">
        {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
      </span>
      <span className="sm:hidden">
        {language === 'en' ? 'ಕ' : 'E'}
      </span>
    </Button>
  )
} 