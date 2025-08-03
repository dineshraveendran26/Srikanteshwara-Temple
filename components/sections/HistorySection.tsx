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

        {/* Spiritual Activities */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
              <Flame className="text-orange-600" size={32} />
            </div>
            <h3 className="font-serif text-3xl font-bold text-blue-900 mb-4">{getTranslation(language, 'spiritualActivities')}</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'en' 
                ? "The temple conducts regular festivals and spiritual activities that have touched thousands of lives through divine grace and answered prayers."
                : "ದೇವಸ್ಥಾನವು ನಿಯಮಿತ ಹಬ್ಬಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಚಟುವಟಿಕೆಗಳನ್ನು ನಡೆಸುತ್ತದೆ, ಇದು ದೈವಿಕ ಕೃಪೆ ಮತ್ತು ಉತ್ತರಿಸಿದ ಪ್ರಾರ್ಥನೆಗಳ ಮೂಲಕ ಸಾವಿರಾರು ಜೀವನಗಳನ್ನು ಮುಟ್ಟಿದೆ."
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h4 className="text-xl font-bold text-blue-900 mb-4 text-center">{getTranslation(language, 'regularFestivals')}</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{getTranslation(language, 'sankashtaHaraGanapati')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{getTranslation(language, 'satyanarayanaPuja')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{getTranslation(language, 'pradoshaPuja')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{getTranslation(language, 'maasashivaratri')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{getTranslation(language, 'girijaKalyanaotsava')}</span>
                </li>
              </ul>
            </div>
            
            <div className="text-left">
              <h4 className="text-xl font-bold text-blue-900 mb-4 text-center">{getTranslation(language, 'dailyWorship')}</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{getTranslation(language, 'panchaamrutaabhisheka')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{getTranslation(language, 'rudraabhisheka')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{getTranslation(language, 'dailyAartiBhajans')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{getTranslation(language, 'prasadDistribution')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{getTranslation(language, 'spiritualGuidance')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

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