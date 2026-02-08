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

        {/* Event Images Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Maha Shivaratri Pooja Mahotsava Invitation */}
          <ImageModal
            src="/images/maha-shivaratri-invitation.jpeg"
            alt={language === 'en' ? "Maha Shivaratri Pooja Mahotsava Invitation - February 15, 2026" : "ಮಹಾಶಿವರಾತ್ರಿ ಪೂಜಾ ಮಹೋತ್ಸವ ಆಹ್ವಾನ ಪತ್ರಿಕೆ - ಫೆಬ್ರವರಿ 15, 2026"}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            trigger={
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-4 group">
                <Image
                  src="/images/maha-shivaratri-invitation.jpeg"
                  alt={language === 'en' ? "Maha Shivaratri Pooja Mahotsava Invitation - February 15, 2026" : "ಮಹಾಶಿವರಾತ್ರಿ ಪೂಜಾ ಮಹೋತ್ಸವ ಆಹ್ವಾನ ಪತ್ರಿಕೆ - ಫೆಬ್ರವರಿ 15, 2026"}
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

          {/* Temple Seva Details and Information Poster */}
          <ImageModal
            src="/images/temple-seva-info-poster.jpeg"
            alt={language === 'en' ? "Temple Seva Details, Cultural Programs, and Information" : "ದೇವಸ್ಥಾನ ಸೇವಾ ವಿವರಗಳು, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಮಾಹಿತಿ"}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            trigger={
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-4 group">
                <Image
                  src="/images/temple-seva-info-poster.jpeg"
                  alt={language === 'en' ? "Temple Seva Details, Cultural Programs, and Information" : "ದೇವಸ್ಥಾನ ಸೇವಾ ವಿವರಗಳು, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಮಾಹಿತಿ"}
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