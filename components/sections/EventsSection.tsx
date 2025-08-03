"use client"

import Image from "next/image"
import SectionHeader from "@/components/common/SectionHeader"
import ImageModal from "@/components/common/ImageModal"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

export default function EventsSection() {
  const { language } = useLanguage()

  return (
    <section id="events" className="py-12 bg-blue-50 scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title={getTranslation(language, 'upcomingEventsTitle')}
          subtitle={getTranslation(language, 'upcomingEventsSubtitle')}
        />

        {/* Calendar Images Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Third Calendar Image - Clickable (Now First Position) */}
          <ImageModal
            src="/images/temple-calendar-3.jpg"
            alt="Sri SriKanteshwara Temple Events Calendar 2025-2026 - December to March"
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            trigger={
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-4 group">
                <Image
                  src="/images/temple-calendar-3.jpg"
                  alt="Sri SriKanteshwara Temple Events Calendar 2025-2026 - December to March"
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {getTranslation(language, 'clickToZoom')}
                </div>
              </div>
            }
          />

          {/* Second Calendar Image - Clickable (Middle Position Unchanged) */}
          <ImageModal
            src="/images/temple-calendar-2.jpg"
            alt="Sri SriKanteshwara Temple Events Calendar 2025 - August to November"
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            trigger={
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-4 group">
                <Image
                  src="/images/temple-calendar-2.jpg"
                  alt="Sri SriKanteshwara Temple Events Calendar 2025 - August to November"
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {getTranslation(language, 'clickToZoom')}
                </div>
              </div>
            }
          />

          {/* First Calendar Image - Clickable (Now Third Position) */}
          <ImageModal
            src="/images/temple-calendar-1.jpg"
            alt="Sri SriKanteshwara Temple Events Calendar 2025 - April to July"
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            trigger={
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-4 group">
                <Image
                  src="/images/temple-calendar-1.jpg"
                  alt="Sri SriKanteshwara Temple Events Calendar 2025 - April to July"
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {getTranslation(language, 'clickToZoom')}
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
} 