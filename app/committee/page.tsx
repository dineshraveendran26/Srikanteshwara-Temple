"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CommitteePage() {
  const { language } = useLanguage()

  const managementCommittee = [
    {
      name: "Sri G. Nanjundayya",
      nameKn: "ಶ್ರೀ ಜಿ. ನಂಜುಂಡಯ್ಯ",
      position: "President",
      positionKn: "ಅಧ್ಯಕ್ಷರು"
    },
    {
      name: "Sri K.H. Rajanna",
      nameKn: "ಶ್ರೀ ಕೆ.ಎಚ್. ರಾಜಣ್ಣ",
      position: "Vice President",
      positionKn: "ಉಪಾಧ್ಯಕ್ಷರು"
    },
    {
      name: "Sri H.K.B Sridharamurthy",
      nameKn: "ಶ್ರೀ ಎಚ್.ಕೆ.ಬಿ. ಶ್ರೀಧರಮೂರ್ತಿ",
      position: "Secretary",
      positionKn: "ಕಾರ್ಯದರ್ಶಿ"
    },
    {
      name: "Sri B. Venkatesh",
      nameKn: "ಶ್ರೀ ಬಿ. ವೆಂಕಟೇಶ್",
      position: "Management Trustee",
      positionKn: "ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಟ್ರಸ್ಟಿ"
    },
    {
      name: "Sri K.T. Venkatesh",
      nameKn: "ಶ್ರೀ ಕೆ.ಟಿ. ವೆಂಕಟೇಶ್",
      position: "Treasurer",
      positionKn: "ಖಜಾಂಚಿ"
    },
    {
      name: "Sri V. Anilkumarkumar",
      nameKn: "ಶ್ರೀ ವಿ. ಅನಿಲಕುಮಾರಕುಮಾರ್",
      position: "Internal Auditor",
      positionKn: "ಆಂತರಿಕ ಲೆಕ್ಕ ಪರಿಶೋಧಕರು"
    }
  ]

  const patrons = [
    {
      name: "Shri D.B.Nanjappa",
      nameKn: "ಶ್ರೀ ಡಿ.ಬಿ.ನಂಜಪ್ಪ"
    },
    {
      name: "Shri B.S.Neelakanta",
      nameKn: "ಶ್ರೀ ಬಿ.ಎಸ್. ನೀಲಕಂಠ"
    },
    {
      name: "Shri K. Nagarajan",
      nameKn: "ಶ್ರೀ ಕೆ. ನಾಗರಾಜನ್"
    },
    {
      name: "Shri A.Shrikanth",
      nameKn: "ಶ್ರೀ ಎ. ಶ್ರೀಕಾಂತ್"
    },
    {
      name: "Shri. B.K. Krishnamurthy",
      nameKn: "ಶ್ರೀ. ಬಿ.ಕೆ. ಕೃಷ್ಣಮೂರ್ತಿ"
    },
    {
      name: "Shri.H.P.Muarlidhar",
      nameKn: "ಶ್ರೀ.ಎಚ್.ಪಿ.ಮುರಳೀಧರ್"
    }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Background with overlay - Matching home page exactly */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80" />
      </div>

      {/* Decorative border pattern - Matching home page */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 opacity-80"></div>
        <div className="absolute top-8 left-0 right-0 h-4 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 opacity-60"></div>
      </div>

      {/* Decorative elements - Matching home page */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-amber-400/30 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-amber-400/30 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute top-1/2 left-5 w-8 h-8 border border-amber-400/20 rounded-full animate-bounce hidden md:block"></div>
      <div className="absolute top-1/3 right-5 w-6 h-6 border border-amber-400/20 rounded-full animate-bounce hidden md:block"></div>

      {/* Header - Matching home page theme */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-amber-400/40">
            <h1 className="font-serif text-5xl font-bold text-shadow-lg text-white drop-shadow-2xl mb-4 md:text-5xl">
              {language === 'en' ? 'Management Committee' : 'ವ್ಯವಸ್ಥಾಪಕ ಸಮಿತಿ'}
            </h1>
            <p className="text-2xl mb-2 font-light text-amber-100 drop-shadow-lg md:text-3xl">
              {language === 'en' ? 'Dedicated leaders serving the temple community' : 'ದೇವಸ್ಥಾನ ಸಮುದಾಯಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸುವ ಸಮರ್ಪಿತ ನಾಯಕರು'}
            </p>
          </div>
        </div>
      </section>

      {/* Management Committee Section */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl font-bold text-white drop-shadow-2xl mb-4">
              {language === 'en' ? 'Management Committee' : 'ವ್ಯವಸ್ಥಾಪಕ ಸಮಿತಿ'}
            </h2>
            <p className="text-xl text-amber-100">
              {language === 'en' ? 'Our dedicated committee members who oversee temple operations' : 'ದೇವಸ್ಥಾನದ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ನಿರ್ವಹಿಸುವ ನಮ್ಮ ಸಮರ್ಪಿತ ಸಮಿತಿ ಸದಸ್ಯರು'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementCommittee.map((member, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-amber-400/30 hover:bg-white/20 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-white text-xl font-bold">
                    {language === 'en' ? member.name : member.nameKn}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="bg-amber-600 text-white hover:bg-amber-700">
                    {language === 'en' ? member.position : member.positionKn}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patrons Section */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl font-bold text-white drop-shadow-2xl mb-4">
              {language === 'en' ? 'Patrons' : 'ಪೋಷಕರು'}
            </h2>
            <p className="text-xl text-amber-100">
              {language === 'en' ? 'Honorable patrons supporting our temple mission' : 'ನಮ್ಮ ದೇವಸ್ಥಾನದ ಧ್ಯೇಯವನ್ನು ಬೆಂಬಲಿಸುವ ಗೌರವಾನ್ವಿತ ಪೋಷಕರು'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patrons.map((patron, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-amber-400/30 hover:bg-white/20 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-white text-xl font-bold">
                    {language === 'en' ? patron.name : patron.nameKn}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                    {language === 'en' ? 'Patron' : 'ಪೋಷಕರು'}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-amber-400/40">
            <h3 className="font-serif text-3xl font-bold text-white drop-shadow-2xl mb-4">
              {language === 'en' ? 'Om Namah Shivaya' : 'ಓಂ ನಮಃ ಶಿವಾಯ'}
            </h3>
            <p className="text-xl text-amber-100">
              {language === 'en' 
                ? 'May Lord Shiva bless our committee and all devotees' 
                : 'ದೇವ ಶಿವರು ನಮ್ಮ ಸಮಿತಿ ಮತ್ತು ಎಲ್ಲಾ ಭಕ್ತರಿಗೆ ಆಶೀರ್ವಾದ ನೀಡಲಿ'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 