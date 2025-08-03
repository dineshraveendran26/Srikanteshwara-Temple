"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Crown, Heart, Star, Users, Building, Flame, Gem } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { getTimelineEvents } from "@/data/timeline"

export default function HistoryPage() {
  const { language } = useLanguage()
  const timelineEvents = getTimelineEvents(language)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">{getTranslation(language, 'historyOfTemple')}</h1>
          <p className="text-xl opacity-90">{getTranslation(language, 'historyPageSubtitle')}</p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-4xl font-bold text-blue-900 mb-6">{getTranslation(language, 'sacredOrigins')}</h2>
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
                src="/images/shiva-lingam.png"
                alt="Shri Shrikantheshwara Temple - Sacred Shiva Linga"
                width={600}
                height={500}
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Major Developments */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-blue-900 text-center mb-12">{getTranslation(language, 'majorDevelopments')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Star className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-blue-900">{getTranslation(language, 'gopuramConstruction')}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {getTranslation(language, 'gopuramDescription')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="text-green-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-green-900">{getTranslation(language, 'infrastructureGrowthTitle')}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {getTranslation(language, 'infrastructureDescription')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-purple-900">{getTranslation(language, 'additionalDeitiesTitle')}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {getTranslation(language, 'deitiesDescription')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-blue-900 text-center mb-12">{getTranslation(language, 'historicalTimeline')}</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full border-4 border-blue-200 flex items-center justify-center shadow-lg">
                    {event.icon}
                  </div>

                  {/* Content */}
                  <Card className="flex-1 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <CardTitle className="text-2xl font-bold text-blue-900">{event.year}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-gray-700">{event.title}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Activities */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-blue-900 text-center mb-12">{getTranslation(language, 'spiritualActivitiesTitle')}</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                <Flame className="text-orange-600" size={32} />
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {language === 'en' 
                  ? "The temple conducts regular festivals and spiritual activities that have touched thousands of lives through divine grace and answered prayers."
                  : "ದೇವಸ್ಥಾನವು ನಿಯಮಿತ ಹಬ್ಬಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಚಟುವಟಿಕೆಗಳನ್ನು ನಡೆಸುತ್ತದೆ, ಇದು ದೈವಿಕ ಕೃಪೆ ಮತ್ತು ಉತ್ತರಿಸಿದ ಪ್ರಾರ್ಥನೆಗಳ ಮೂಲಕ ಸಾವಿರಾರು ಜೀವನಗಳನ್ನು ಮುಟ್ಟಿದೆ."
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{getTranslation(language, 'regularFestivals')}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {getTranslation(language, 'sankashtaHaraGanapati')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {getTranslation(language, 'satyanarayanaPuja')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {getTranslation(language, 'pradoshaPuja')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {getTranslation(language, 'maasashivaratri')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {getTranslation(language, 'girijaKalyanaotsava')}
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{getTranslation(language, 'dailyWorship')}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {getTranslation(language, 'panchaamrutaabhisheka')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {getTranslation(language, 'rudraabhisheka')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {getTranslation(language, 'dailyAartiBhajans')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {getTranslation(language, 'prasadDistribution')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {getTranslation(language, 'spiritualGuidance')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Blessings */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 shadow-lg">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-4">{getTranslation(language, 'divineBlessings')}</h2>
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

      {/* Community Impact */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-blue-900 text-center mb-12">{getTranslation(language, 'communityImpact')}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{getTranslation(language, 'dailyWorshipTitle')}</h3>
              <p className="text-gray-700 mb-4">
                {getTranslation(language, 'dailyWorshipSubtitle')}
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• {getTranslation(language, 'fiveNectarAbhisheka')}</li>
                <li>• {getTranslation(language, 'sacredShivaAbhisheka')}</li>
                <li>• {getTranslation(language, 'dailyAartiBhajans')}</li>
                <li>• {getTranslation(language, 'prasadDistribution')}</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{getTranslation(language, 'communityGrowth')}</h3>
              <p className="text-gray-700 mb-4">
                {getTranslation(language, 'communityGrowthSubtitle')}
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• {getTranslation(language, 'dedicatedTrustees')}</li>
                <li>• {getTranslation(language, 'generousSupport')}</li>
                <li>• {getTranslation(language, 'communityWelfare')}</li>
                <li>• {getTranslation(language, 'spiritualGuidanceCounseling')}</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
