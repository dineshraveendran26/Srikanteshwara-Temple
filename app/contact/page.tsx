"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

export default function ContactPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">{getTranslation(language, 'contactUs')}</h1>
          <p className="text-xl opacity-90">
            {getTranslation(language, 'contactSubtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-blue-900">{getTranslation(language, 'visitUs')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {getTranslation(language, 'templeAddress')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-blue-900">{getTranslation(language, 'callUs')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {getTranslation(language, 'templePhone')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-purple-600" size={32} />
                </div>
                <CardTitle className="text-blue-900">{getTranslation(language, 'emailUs')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  info@shivamandir.org
                  <br />
                  donations@shivamandir.org
                  <br />
                  events@shivamandir.org
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Temple Timings */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-amber-600" size={32} />
              </div>
              <CardTitle className="text-2xl text-blue-900">{getTranslation(language, 'templeTimings')}</CardTitle>
              <CardDescription>{language === 'en' ? 'Daily darshan and prayer schedules' : 'ದೈನಂದಿನ ದರ್ಶನ ಮತ್ತು ಪ್ರಾರ್ಥನಾ ವೇಳಾಪಟ್ಟಿಗಳು'}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg text-blue-900 mb-4">{language === 'en' ? 'Morning Schedule' : 'ಬೆಳಗಿನ ವೇಳಾಪಟ್ಟಿ'}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>{language === 'en' ? 'Temple Opens' : 'ದೇವಸ್ಥಾನ ತೆರೆಯುತ್ತದೆ'}</span>
                      <span>5:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'en' ? 'Mangal Aarti' : 'ಮಂಗಳ ಆರತಿ'}</span>
                      <span>5:30 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'en' ? 'Abhishek' : 'ಅಭಿಷೇಕ'}</span>
                      <span>6:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'en' ? 'General Darshan' : 'ಸಾಮಾನ್ಯ ದರ್ಶನ'}</span>
                      <span>7:00 AM - 12:00 PM</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-900 mb-4">{language === 'en' ? 'Evening Schedule' : 'ಸಂಜೆಯ ವೇಳಾಪಟ್ಟಿ'}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>{language === 'en' ? 'Temple Reopens' : 'ದೇವಸ್ಥಾನ ಮತ್ತೆ ತೆರೆಯುತ್ತದೆ'}</span>
                      <span>4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'en' ? 'Evening Aarti' : 'ಸಂಜೆಯ ಆರತಿ'}</span>
                      <span>7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'en' ? 'Night Prayers' : 'ರಾತ್ರಿ ಪ್ರಾರ್ಥನೆಗಳು'}</span>
                      <span>8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'en' ? 'Temple Closes' : 'ದೇವಸ್ಥಾನ ಮುಚ್ಚುತ್ತದೆ'}</span>
                      <span>9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">{getTranslation(language, 'sendMessage')}</CardTitle>
                <CardDescription>
                  {getTranslation(language, 'contactFormSubtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{getTranslation(language, 'firstName')}</Label>
                      <Input id="firstName" placeholder={getTranslation(language, 'enterFirstName')} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{getTranslation(language, 'lastName')}</Label>
                      <Input id="lastName" placeholder={getTranslation(language, 'enterLastName')} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">{getTranslation(language, 'email')}</Label>
                    <Input id="email" type="email" placeholder={getTranslation(language, 'enterEmail')} />
                  </div>

                  <div>
                    <Label htmlFor="phone">{getTranslation(language, 'phoneNumber')}</Label>
                    <Input id="phone" type="tel" placeholder={getTranslation(language, 'enterPhone')} />
                  </div>

                  <div>
                    <Label htmlFor="subject">{getTranslation(language, 'subject')}</Label>
                    <Input id="subject" placeholder={getTranslation(language, 'enterSubject')} />
                  </div>

                  <div>
                    <Label htmlFor="message">{getTranslation(language, 'message')}</Label>
                    <Textarea
                      id="message"
                      placeholder={getTranslation(language, 'enterMessage')}
                      rows={5}
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">{language === 'en' ? 'Send Message' : 'ಸಂದೇಶ ಕಳುಹಿಸಿ'}</Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">{getTranslation(language, 'findUs')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin size={48} className="mx-auto mb-2" />
                      <p>{getTranslation(language, 'interactiveMap')}</p>
                      <p className="text-sm">{getTranslation(language, 'templeLocation')}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      {language === 'en' 
                        ? "Located in the heart of the city, easily accessible by public transport and private vehicles. Parking facilities available on-site."
                        : "ನಗರದ ಹೃದಯದಲ್ಲಿ ಸ್ಥಿತವಾಗಿದೆ, ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆ ಮತ್ತು ಖಾಸಗಿ ವಾಹನಗಳಿಂದ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದು. ಸ್ಥಳದಲ್ಲಿ ಪಾರ್ಕಿಂಗ್ ಸೌಲಭ್ಯಗಳು ಲಭ್ಯವಿವೆ."
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">{getTranslation(language, 'quickContact')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <MessageCircle className="mr-2" size={16} />
                    WhatsApp: +91 9632303429
                  </Button>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" size="sm">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      Instagram
                    </Button>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-blue-900 mb-2">{getTranslation(language, 'emergencyContact')}</h4>
                    <p className="text-sm text-gray-600">
                      {getTranslation(language, 'emergencySubtitle')}
                      <span className="font-semibold text-blue-600"> +91 9632303429</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
