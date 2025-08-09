"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

export default function EventsPage() {
  const { language } = useLanguage()

  const events = [
    {
      id: 1,
      title: language === 'en' ? "Maha Shivaratri" : "ಮಹಾ ಶಿವರಾತ್ರಿ",
      date: language === 'en' ? "March 8, 2024" : "ಮಾರ್ಚ್ 8, 2024",
      time: "6:00 PM - 12:00 AM",
      description: language === 'en' 
        ? "The most auspicious night dedicated to Lord Shiva with special abhishek, bhajans, and night-long prayers."
        : "ದೇವ ಶಿವರಿಗೆ ಸಮರ್ಪಿತವಾದ ಅತ್ಯಂತ ಶುಭ ರಾತ್ರಿ, ವಿಶೇಷ ಅಭಿಷೇಕ, ಭಜನೆಗಳು ಮತ್ತು ರಾತ್ರಿಯುದ್ದಕ್ಕೂ ಪ್ರಾರ್ಥನೆಗಳೊಂದಿಗೆ.",
      image: "/placeholder.svg?height=300&width=400",
      category: language === 'en' ? "Major Festival" : "ಪ್ರಮುಖ ಹಬ್ಬ",
      attendees: "500+",
    },
    {
      id: 2,
      title: language === 'en' ? "Shravan Monday Special" : "ಶ್ರಾವಣ ಸೋಮವಾರ ವಿಶೇಷ",
      date: language === 'en' ? "Every Monday in Shravan" : "ಶ್ರಾವಣದಲ್ಲಿ ಪ್ರತಿ ಸೋಮವಾರ",
      time: "6:00 AM - 9:00 PM",
      description: language === 'en'
        ? "Special prayers and fasting rituals during the holy month of Shravan, most auspicious for Lord Shiva worship."
        : "ಪವಿತ್ರ ಶ್ರಾವಣ ಮಾಸದಲ್ಲಿ ವಿಶೇಷ ಪ್ರಾರ್ಥನೆಗಳು ಮತ್ತು ಉಪವಾಸ ವಿಧಿಗಳು, ದೇವ ಶಿವರ ಪೂಜೆಗೆ ಅತ್ಯಂತ ಶುಭಕರ.",
      image: "/placeholder.svg?height=300&width=400",
      category: language === 'en' ? "Weekly Ritual" : "ಸಾಪ್ತಾಹಿಕ ವಿಧಿ",
      attendees: "200+",
    },
    {
      id: 3,
      title: language === 'en' ? "Rudra Abhishek" : "ರುದ್ರ ಅಭಿಷೇಕ",
      date: language === 'en' ? "First Sunday of Every Month" : "ಪ್ರತಿ ತಿಂಗಳ ಮೊದಲ ಭಾನುವಾರ",
      time: "7:00 AM - 10:00 AM",
      description: language === 'en'
        ? "Sacred abhishek ceremony with Rudra chanting, offering milk, honey, and sacred waters to the Shiva Lingam."
        : "ರುದ್ರ ಜಪದೊಂದಿಗೆ ಪವಿತ್ರ ಅಭಿಷೇಕ ಸಮಾರಂಭ, ಶಿವಲಿಂಗಕ್ಕೆ ಹಾಲು, ಜೇನು ಮತ್ತು ಪವಿತ್ರ ನೀರನ್ನು ಅರ್ಪಿಸುವುದು.",
      image: "/placeholder.svg?height=300&width=400",
      category: language === 'en' ? "Monthly Ritual" : "ಮಾಸಿಕ ವಿಧಿ",
      attendees: "150+",
    },
    {
      id: 4,
      title: language === 'en' ? "Kartik Purnima Celebration" : "ಕಾರ್ತಿಕ ಪೂರ್ಣಿಮಾ ಆಚರಣೆ",
      date: language === 'en' ? "November 15, 2024" : "ನವೆಂಬರ್ 15, 2024",
      time: "5:00 PM - 10:00 PM",
      description: language === 'en' 
        ? "Celebration of Kartik Purnima with special prayers, deep daan, and community feast."
        : "ವಿಶೇಷ ಪ್ರಾರ್ಥನೆಗಳು, ದೀಪದಾನ ಮತ್ತು ಸಮುದಾಯ ಭೋಜನದೊಂದಿಗೆ ಕಾರ್ತಿಕ ಪೂರ್ಣಿಮಾ ಆಚರಣೆ.",
      image: "/placeholder.svg?height=300&width=400",
      category: language === 'en' ? "Festival" : "ಹಬ್ಬ",
      attendees: "300+",
    },
    {
      id: 5,
      title: language === 'en' ? "Pradosh Vrat" : "ಪ್ರದೋಷ ವ್ರತ",
      date: language === 'en' ? "13th day of every lunar fortnight" : "ಪ್ರತಿ ಚಾಂದ್ರ ಪಕ್ಷದ 13ನೇ ದಿನ",
      time: "6:00 PM - 8:00 PM",
      description: language === 'en'
        ? "Bi-monthly fasting and prayer dedicated to Lord Shiva, observed during the twilight hours."
        : "ದೇವ ಶಿವರಿಗೆ ಸಮರ್ಪಿತವಾದ ಅರ್ಧಮಾಸಿಕ ಉಪವಾಸ ಮತ್ತು ಪ್ರಾರ್ಥನೆ, ಸಂಜೆ ಸಮಯದಲ್ಲಿ ಆಚರಿಸಲಾಗುತ್ತದೆ.",
      image: "/placeholder.svg?height=300&width=400",
      category: language === 'en' ? "Bi-monthly" : "ಅರ್ಧಮಾಸಿಕ",
      attendees: "100+",
    },
    {
      id: 6,
      title: language === 'en' ? "Annakut Festival" : "ಅಣ್ಣಕೂಟ ಹಬ್ಬ",
      date: language === 'en' ? "November 2, 2024" : "ನವೆಂಬರ್ 2, 2024",
      time: "11:00 AM - 3:00 PM",
      description: language === 'en'
        ? "Grand offering of 56 varieties of food to the deity, followed by community prasadam distribution."
        : "ದೇವತೆಗೆ 56 ವಿಧದ ಆಹಾರದ ಭವ್ಯ ಅರ್ಪಣೆ, ನಂತರ ಸಮುದಾಯ ಪ್ರಸಾದ ವಿತರಣೆ.",
      image: "/placeholder.svg?height=300&width=400",
      category: language === 'en' ? "Festival" : "ಹಬ್ಬ",
      attendees: "400+",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case language === 'en' ? "Major Festival" : "ಪ್ರಮುಖ ಹಬ್ಬ":
        return "bg-red-100 text-red-800"
      case language === 'en' ? "Festival" : "ಹಬ್ಬ":
        return "bg-orange-100 text-orange-800"
      case language === 'en' ? "Weekly Ritual" : "ಸಾಪ್ತಾಹಿಕ ವಿಧಿ":
        return "bg-blue-100 text-blue-800"
      case language === 'en' ? "Monthly Ritual" : "ಮಾಸಿಕ ವಿಧಿ":
        return "bg-green-100 text-green-800"
      case language === 'en' ? "Bi-monthly" : "ಅರ್ಧಮಾಸಿಕ":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">{getTranslation(language, 'upcomingEvents')}</h1>
          <p className="text-xl opacity-90">
            {getTranslation(language, 'eventsSubtitle')}
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-blue-900 text-xl">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    {event.date}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">{event.description}</p>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-blue-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-blue-600" />
                      <span>{language === 'en' ? 'Expected' : 'ನಿರೀಕ್ಷಿತ'}: {event.attendees}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-600" />
                      <span>{language === 'en' ? 'Main Temple Hall' : 'ಮುಖ್ಯ ದೇವಸ್ಥಾನ ಸಭಾಂಗಣ'}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">{getTranslation(language, 'registerForEvent')}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-blue-900 mb-6">{getTranslation(language, 'eventCalendar')}</h2>
          <p className="text-gray-600 mb-8">
            {getTranslation(language, 'calendarSubtitle')}
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-7 gap-2 mb-4">
              {language === 'en' 
                ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 font-semibold text-blue-900 text-center">
                      {day}
                    </div>
                  ))
                : ["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"].map((day) => (
                    <div key={day} className="p-2 font-semibold text-blue-900 text-center">
                      {day}
                    </div>
                  ))
              }
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 6
                const isCurrentMonth = day > 0 && day <= 31
                const hasEvent = [8, 15, 22, 29].includes(day)

                return (
                  <div
                    key={i}
                    className={`p-3 text-center rounded-lg transition-colors ${
                      isCurrentMonth
                        ? hasEvent
                          ? "bg-saffron text-white font-semibold cursor-pointer hover:bg-saffron/90"
                          : "hover:bg-blue-50 cursor-pointer"
                        : "text-gray-300"
                    }`}
                  >
                    {isCurrentMonth ? day : ""}
                  </div>
                )
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-saffron rounded"></div>
                <span>{getTranslation(language, 'eventDay')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
