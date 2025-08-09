"use client"

import Image from "next/image"
import { getTimelineEvents } from "@/data/timeline"
import TimelineItem from "@/components/common/TimelineItem"
import SectionHeader from "@/components/common/SectionHeader"
import { Flame, Heart, Users, Star } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

export default function HistorySection() {
  const { language } = useLanguage()
  const timelineEvents = getTimelineEvents(language)

  return (
    <section id="history" className="py-12 bg-blue-50 scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title={getTranslation(language, 'templeHistoryTitle')}
          subtitle={getTranslation(language, 'templeHistorySubtitle')}
        />

        {/* Origin Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-serif text-4xl font-bold text-blue-900 mb-6">{getTranslation(language, 'sacredOrigins')}</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {getTranslation(language, 'historyBeginning')}
              </p>
              <p>
                {getTranslation(language, 'historyFoundation')}
              </p>
              <p>
                {language === 'en' 
                  ? "Through over three decades of unwavering devotion, community service, and divine grace, our temple has grown to become a beacon of spiritual light, touching the lives of thousands of devotees from all walks of life."
                  : "ಮೂರು ದಶಕಗಳಿಗೂ ಹೆಚ್ಚಿನ ಅಚಲ ಭಕ್ತಿ, ಸಮುದಾಯ ಸೇವೆ ಮತ್ತು ದೈವಿಕ ಕೃಪೆಯ ಮೂಲಕ, ನಮ್ಮ ದೇವಸ್ಥಾನವು ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳಕಿನ ದೀಪವಾಗಿ ಬೆಳೆದಿದೆ, ಎಲ್ಲಾ ವರ್ಗಗಳ ಸಾವಿರಾರು ಭಕ್ತರ ಜೀವನಗಳನ್ನು ಮುಟ್ಟಿದೆ."
                }
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg"></div>
            <Image
              src="/images/abhishekam-ritual.jpg"
              alt="Sacred Abhishekam Ritual - Milk Abhishekam being performed on Lord Shiva"
              width={600}
              height={500}
              className="rounded-lg shadow-lg relative z-10"
            />
          </div>
        </div>

        {/* Spiritual Activities moved to Sevas page */}

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="font-serif text-4xl font-bold text-blue-900 text-center mb-12">{getTranslation(language, 'historicalTimeline')}</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <TimelineItem key={index} event={event} />
              ))}
            </div>
          </div>
        </div>

        {/* Special Quote */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-3xl font-bold mb-4">{getTranslation(language, 'divineBlessings')}</h3>
            <p className="text-lg mb-6 leading-relaxed">
              {getTranslation(language, 'historyService')}
            </p>
            <div className="border-t border-white/30 pt-6">
              <p className="text-2xl font-serif italic">
                "{getTranslation(language, 'sarveJanahSukhinoBhavantu')}"
              </p>
              <p className="text-sm opacity-90 mt-2">
                - {getTranslation(language, 'mayAllBeingsBeHappy')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 