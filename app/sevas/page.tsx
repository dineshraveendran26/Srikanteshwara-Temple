"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Flame } from "lucide-react"

export default function SevasPage() {
  const { language } = useLanguage()

  const sevaItems = [
    {
      name: "Bhasma Archane - Subramanya swamy",
      nameKn: "ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿ - ಭಸ್ಮಅರ್ಚನೆ",
      cost: "₹100.00"
    },
    {
      name: "Mahashivarathri Shatha Rudrabhisheka",
      nameKn: "ಮಹಾಶಿವರಾತ್ರಿ ಶತರುದ್ರಾಭಿಷೇಕ",
      cost: "₹5,000.00"
    },
    {
      name: "Abhisheka - Dakshinamurthy",
      nameKn: "ಅಭಿಷೇಕ  -  ದಕ್ಷಿಣಾಮೂರ್ತಿ",
      cost: "₹300.00"
    },
    {
      name: "Abhisheka - Ganapathy",
      nameKn: "ಅಭಿಷೇಕ  -  ಗಣಪತಿ",
      cost: "₹300.00"
    },
    {
      name: "Abhisheka - Navagraha",
      nameKn: "ಅಭಿಷೇಕ  -  ನವಗ್ರಹ",
      cost: "₹300.00"
    },
    {
      name: "Abhisheka - Parvathi Devi",
      nameKn: "ಅಭಿಷೇಕ  -  ಪಾರ್ವತಿ ದೇವಿ",
      cost: "₹300.00"
    },
    {
      name: "Abhisheka - Subramanya Swamy",
      nameKn: "ಅಭಿಷೇಕ  -  ಸುಬ್ರಮಣ್ಯಸ್ವಾಮಿ",
      cost: "₹300.00"
    },
    {
      name: "Alankara Seva - Butter Alankara",
      nameKn: "ಅಲಂಕಾರ ಸೇವೆ - ಬೆಣ್ಣೆ  ಅಲಂಕಾರ",
      cost: "₹5,000.00"
    },
    {
      name: "Alankara Seva - Pushpalankara",
      nameKn: "ಅಲಂಕಾರ ಸೇವೆ - ಪುಷ್ಪಾಲಂಕಾರ",
      cost: "₹3,500.00"
    },
    {
      name: "Alankara Seva - Srigandha Alankara",
      nameKn: "ಅಲಂಕಾರ ಸೇವೆ - ಶ್ರೀಗಂಧ",
      cost: "₹2,500.00"
    },
    {
      name: "Alankara Seva - Vibuthi Alankara",
      nameKn: "ಅಲಂಕಾರ ಸೇವೆ - ವಿಭೂತಿ ಅಲಂಕಾರ",
      cost: "₹2,500.00"
    },
    {
      name: "Alankara Seva-Butter Alankara-Ganapathy",
      nameKn: "ಅಲಂಕಾರ ಸೇವೆ -  ಬೆಣ್ಣೆ  ಅಲಂಕಾರ",
      cost: "₹5,000.00"
    },
    {
      name: "Alankara Seva-Butter Alankara-Parvathi",
      nameKn: "ಅಲಂಕಾರ ಸೇವೆ - ಬೆಣ್ಣೆ  ಅಲಂಕಾರ",
      cost: "₹5,000.00"
    },
    {
      name: "Alankara Seva-Butter Alankara-Srikanteshwara",
      nameKn: "ಅಲಂಕಾರ ಸೇವೆ - ಬೆಣ್ಣೆ  ಅಲಂಕಾರ - ಶ್ರೀಕಂಠೇಶ್ವರ",
      cost: "₹8,000.00"
    },
    {
      name: "Alankara Seva-Butter Alankara-Subramanya",
      nameKn: "ಅಲಂಕಾರ ಸೇವೆ -  ಬೆಣ್ಣೆ  ಅಲಂಕಾರ",
      cost: "₹5,000.00"
    },
    {
      name: "Arisine Alankara",
      nameKn: "ಅರಿಶಿನ ಅಲಂಕಾರ",
      cost: "₹2,500.00"
    },
    {
      name: "Benne Alankara",
      nameKn: "ಬೆಣ್ಣಿ ಅಲಂಕಾರ",
      cost: "₹2,500.00"
    },
    {
      name: "Drakshi Godambi Alankara",
      nameKn: "ದ್ರಾಕ್ಷಿ ಗೋಡಂಬಿ ಅಲಂಕಾರ",
      cost: "₹2,500.00"
    },
    {
      name: "Drakshi Alankara",
      nameKn: "ದ್ರಾಕ್ಷಿ  ಅಲಂಕಾರ",
      cost: "₹2,500.00"
    },
    {
      name: "Ekadasha Rudrabhisheka-Sri Srikanteshwara",
      nameKn: "ಏಕಾದಶ  ರುದ್ರಾಭಿಷೇಕ- ಶ್ರೀ ಶ್ರೀಕಂಠೇಶ್ವರ ಸ್ವಾಮಿ",
      cost: "₹5,000.00"
    },
    {
      name: "Ekavara Rudrabhisheka-Sri Srikanteshwara (on All Mondays)",
      nameKn: "ಏಕವಾರ  ರುದ್ರಾಭಿಷೇಕ  ಶ್ರೀ ಶ್ರೀಕಂಠೇಶ್ವರ",
      cost: "₹300.00"
    },
    {
      name: "DONATION any Kind",
      nameKn: "ಯಾವುದೇ ರೀತಿಯ ದಾನ",
      cost: "Any Amount"
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
              {language === 'en' ? 'Temple Sevas' : 'ದೇವಸ್ಥಾನ ಸೇವೆಗಳು'}
            </h1>
            <p className="text-2xl mb-2 font-light text-amber-100 drop-shadow-lg md:text-3xl">
              {language === 'en' ? 'Sacred services and offerings for devotees' : 'ಭಕ್ತರಿಗಾಗಿ ಪವಿತ್ರ ಸೇವೆಗಳು ಮತ್ತು ಅರ್ಪಣೆಗಳು'}
            </p>
          </div>
        </div>
      </section>

      {/* Sevas Table Section */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl font-bold text-white drop-shadow-2xl mb-4">
              {language === 'en' ? 'Seva List and Costs' : 'ಸೇವಾ ಪಟ್ಟಿ ಮತ್ತು ವೆಚ್ಚಗಳು'}
            </h2>
            <p className="text-xl text-amber-100 mb-4">
              {language === 'en' 
                ? 'Choose your required seva - send to Temple whatsapp number along with names, Nakshtra, Rashi and Gothra. If need any other sevas, kindly contact temple and give a whatsapp link'
                : 'ನಿಮ್ಮ ಅಗತ್ಯವಿರುವ ಸೇವೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ - ಹೆಸರುಗಳು, ನಕ್ಷತ್ರ, ರಾಶಿ ಮತ್ತು ಗೋತ್ರದೊಂದಿಗೆ ದೇವಸ್ಥಾನ ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆಗೆ ಕಳುಹಿಸಿ. ಬೇರೆ ಯಾವುದೇ ಸೇವೆಗಳು ಬೇಕಾದರೆ, ದಯವಿಟ್ಟು ದೇವಸ್ಥಾನವನ್ನು ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ವಾಟ್ಸಾಪ್ ಲಿಂಕ್ ನೀಡಿ'
              }
            </p>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2"
              onClick={() => window.open('https://wa.me/919632303429', '_blank')}
            >
              <Phone className="h-6 w-6" />
              {language === 'en' ? 'WhatsApp Us' : 'ವಾಟ್ಸಾಪ್ ನಮ್ಮಿಗೆ'}
            </Button>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border border-amber-400/30">
            <CardHeader>
              <CardTitle className="text-white text-center text-2xl">
                {language === 'en' ? 'Seva List' : 'ಸೇವಾ ಪಟ್ಟಿ'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-amber-400/30">
                      <TableHead className="text-white font-bold text-lg">
                        {language === 'en' ? 'Seva Item' : 'ಸೇವಾ ವಸ್ತು'}
                      </TableHead>
                      <TableHead className="text-white font-bold text-lg text-right">
                        {language === 'en' ? 'Cost' : 'ವೆಚ್ಚ'}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sevaItems.map((item, index) => (
                      <TableRow key={index} className="border-amber-400/20 hover:bg-white/10 transition-colors">
                        <TableCell className="text-white text-lg">
                          {language === 'en' ? item.name : item.nameKn}
                        </TableCell>
                        <TableCell className="text-white text-lg text-right font-semibold">
                          {item.cost}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Spiritual Activities (moved from History) */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-amber-400/30 p-8">
            <div className="text-center mb-8">
              <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                <Flame className="text-orange-600" size={32} />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white mb-4">
                {getTranslation(language, 'spiritualActivitiesTitle')}
              </h3>
              <p className="text-amber-100 max-w-3xl mx-auto leading-relaxed">
                {language === 'en' 
                  ? "The temple conducts regular festivals and spiritual activities that have touched thousands of lives through divine grace and answered prayers."
                  : "ದೇವಸ್ಥಾನವು ನಿಯಮಿತ ಹಬ್ಬಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಚಟುವಟಿಕೆಗಳನ್ನು ನಡೆಸುತ್ತದೆ, ಇದು ದೈವಿಕ ಕೃಪೆ ಮತ್ತು ಉತ್ತರಿಸಿದ ಪ್ರಾರ್ಥನೆಗಳ ಮೂಲಕ ಸಾವಿರಾರು ಜೀವನಗಳನ್ನು ಮುಟ್ಟಿದೆ."
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h4 className="text-xl font-bold text-white mb-4 text-center">
                  {getTranslation(language, 'regularFestivals')}
                </h4>
                <ul className="space-y-3 text-amber-100">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{getTranslation(language, 'sankashtaHaraGanapati')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{getTranslation(language, 'satyanarayanaPuja')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{getTranslation(language, 'pradoshaPuja')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{getTranslation(language, 'maasashivaratri')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{getTranslation(language, 'girijaKalyanaotsava')}</span>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <h4 className="text-xl font-bold text-white mb-4 text-center">
                  {getTranslation(language, 'dailyWorship')}
                </h4>
                <ul className="space-y-3 text-amber-100">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{getTranslation(language, 'panchaamrutaabhisheka')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{getTranslation(language, 'rudraabhisheka')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{getTranslation(language, 'dailyAartiBhajans')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{getTranslation(language, 'prasadDistribution')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{getTranslation(language, 'spiritualGuidance')}</span>
                  </li>
                </ul>
              </div>
            </div>
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
                ? 'May Lord Shiva bless all devotees who perform these sacred sevas' 
                : 'ಈ ಪವಿತ್ರ ಸೇವೆಗಳನ್ನು ನಡೆಸುವ ಎಲ್ಲಾ ಭಕ್ತರಿಗೆ ದೇವ ಶಿವರು ಆಶೀರ್ವಾದ ನೀಡಲಿ'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 