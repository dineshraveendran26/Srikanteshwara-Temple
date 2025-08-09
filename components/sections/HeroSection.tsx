"use client"

import { Button } from "@/components/ui/button"
import { Clock, Heart, MapPin, MessageCircle, Phone, Star } from "lucide-react"
import { templeInfo, deities } from "@/data/temple-info"
import DeityCard from "@/components/common/DeityCard"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

export default function HeroSection() {
  const { language } = useLanguage()

  return (
    <section id="home" className="relative min-h-[100svh] md:h-screen flex items-center justify-center overflow-hidden pt-20 pt-[env(safe-area-inset-top)] scroll-mt-32">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80 hidden md:block" />
      </div>

      {/* Decorative border pattern */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 opacity-80"></div>
        <div className="absolute top-8 left-0 right-0 h-4 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 opacity-60"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto mt-8">
        {/* Temple Name in Kannada */}
        <div className="mb-6 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-amber-400/40">
          <h1 className="font-serif text-5xl font-bold text-shadow-lg text-white drop-shadow-2xl mb-4 md:text-5xl">
            {templeInfo.sanskritName}
          </h1>
          <p className="text-2xl mb-2 font-light text-amber-100 drop-shadow-lg md:text-3xl">
            {getTranslation(language, 'templeName')}
          </p>
          <p className="text-lg md:text-xl mb-2 font-light text-amber-200 drop-shadow-lg tracking-wide">
            {getTranslation(language, 'templeAddress')}. {getTranslation(language, 'phone')} {getTranslation(language, 'templePhone')}
          </p>
        </div>

        {/* Deity Images Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 max-w-4xl mx-auto">
          {deities.map((deity) => (
            <DeityCard key={deity.name} deity={deity} />
          ))}
        </div>

        {/* Temple Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-8 border border-amber-400/30 leading-7">
          <div className="text-center space-y-4 leading-3 tracking-tighter">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="text-amber-400" size={18} />
              <span className="text-amber-200">{getTranslation(language, 'templeAddress')}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="text-amber-400" size={18} />
              <span className="text-amber-200">{getTranslation(language, 'templePhone')}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="text-amber-400" size={18} />
              <span className="text-amber-200">{getTranslation(language, 'whatsapp')}: {templeInfo.whatsapp}</span>
              <a
                href="https://maps.app.goo.gl/EUEKYCdTaFJEX8Bg9"
                target="_blank"
                rel="noopener noreferrer"
                title="Open temple location in Google Maps"
                aria-label="Open temple location in Google Maps"
                className="inline-flex items-center justify-center rounded-md border border-amber-400/30 bg-white/10 px-2 py-1 text-amber-100 hover:bg-white/20 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
              >
                <MapPin className="text-amber-300" size={16} />
                <span className="ml-1 text-xs hidden sm:inline">Maps</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="text-amber-400" size={18} />
              <span className="text-amber-200">{getTranslation(language, 'templeTimings')}: {templeInfo.timings}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-amber-400/30 rounded-full motion-safe:animate-pulse hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-amber-400/30 rounded-full motion-safe:animate-pulse hidden md:block"></div>
      <div className="absolute top-1/2 left-5 w-8 h-8 border border-amber-400/20 rounded-full motion-safe:animate-bounce hidden md:block"></div>
      <div className="absolute top-1/3 right-5 w-6 h-6 border border-amber-400/20 rounded-full motion-safe:animate-bounce hidden md:block"></div>
    </section>
  )
} 