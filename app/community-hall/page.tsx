"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export default function CommunityHallPage() {
  const { language } = useLanguage()

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
              {language === 'en' ? 'Community Hall' : 'ಸಮುದಾಯ ಭವನ'}
            </h1>
            <p className="text-2xl mb-2 font-light text-amber-100 drop-shadow-lg md:text-3xl">
              {language === 'en' ? 'Available for cultural events and community gatherings' : 'ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಮುದಾಯ ಸಮಾರಂಭಗಳಿಗಾಗಿ ಲಭ್ಯವಿದೆ'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-white/10 backdrop-blur-sm border border-amber-400/30">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-3xl font-bold mb-4">
                {language === 'en' ? 'Community Hall Available for Usage' : 'ಸಮುದಾಯ ಭವನ ಬಳಕೆಗೆ ಲಭ್ಯವಿದೆ'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 border border-amber-400/40">
                <p className="text-xl text-white leading-relaxed mb-6">
                  {language === 'en' 
                    ? "Community hall available for usage for cultural events, please contact temple whatsapp for more details"
                    : "ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳಿಗಾಗಿ ಸಮುದಾಯ ಭವನ ಬಳಕೆಗೆ ಲಭ್ಯವಿದೆ, ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ ದೇವಸ್ಥಾನ ವಾಟ್ಸಾಪ್ ಸಂಪರ್ಕಿಸಿ"
                  }
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
                    onClick={() => window.open('https://wa.me/918025986509', '_blank')}
                  >
                    <Phone className="w-5 h-5" />
                    {language === 'en' ? 'Contact via WhatsApp' : 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ'}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white px-6 py-3 rounded-lg flex items-center gap-2"
                    onClick={() => window.open('tel:08025986509', '_blank')}
                  >
                    <Phone className="w-5 h-5" />
                    {language === 'en' ? 'Call Temple' : 'ದೇವಸ್ಥಾನಕ್ಕೆ ಕರೆ ಮಾಡಿ'}
                  </Button>
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="bg-white/10 backdrop-blur-sm border border-amber-400/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl font-bold">
                      {language === 'en' ? 'Available For' : 'ಲಭ್ಯವಿದೆ'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-amber-100 space-y-2">
                      <li>• {language === 'en' ? 'Cultural Events' : 'ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು'}</li>
                      <li>• {language === 'en' ? 'Community Gatherings' : 'ಸಮುದಾಯ ಸಮಾರಂಭಗಳು'}</li>
                      <li>• {language === 'en' ? 'Religious Functions' : 'ಧಾರ್ಮಿಕ ಕಾರ್ಯಗಳು'}</li>
                      <li>• {language === 'en' ? 'Educational Programs' : 'ಶೈಕ್ಷಣಿಕ ಕಾರ್ಯಕ್ರಮಗಳು'}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border border-amber-400/30">
                  <CardHeader>
                    <CardTitle className="text-white text-xl font-bold">
                      {language === 'en' ? 'Contact Information' : 'ಸಂಪರ್ಕ ಮಾಹಿತಿ'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-amber-100">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>080-2598 6509</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">
                          {language === 'en' 
                            ? 'Chennammanakere Achukattu, Banashankari 3rd Phase, Bengaluru'
                            : 'ಚನ್ನಮ್ಮನಕೆರೆ ಅಚ್ಚುಕಟ್ಟು, ಬನಶಂಕರಿ 3ನೇ ಹಂತ, ಬೆಂಗಳೂರು'
                          }
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
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
                ? 'May Lord Shiva bless all community events and gatherings' 
                : 'ದೇವ ಶಿವರು ಎಲ್ಲಾ ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಮಾರಂಭಗಳಿಗೆ ಆಶೀರ್ವಾದ ನೀಡಲಿ'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 