"use client"

import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

export default function GalleryPage() {
  const { language } = useLanguage()

  // TODO: Implement image selection functionality
  // const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryItems = {
    temple: [
      {
        id: 1,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Temple Architecture" : "ದೇವಸ್ಥಾನ ವಾಸ್ತುಶಿಲ್ಪ",
        title: language === 'en' ? "Main Temple Structure" : "ಮುಖ್ಯ ದೇವಸ್ಥಾನ ರಚನೆ",
      },
      {
        id: 2,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Shiva Lingam" : "ಶಿವಲಿಂಗ",
        title: language === 'en' ? "Sacred Shiva Lingam" : "ಪವಿತ್ರ ಶಿವಲಿಂಗ",
      },
      {
        id: 3,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Temple Courtyard" : "ದೇವಸ್ಥಾನ ಅಂಗಳ",
        title: language === 'en' ? "Temple Courtyard" : "ದೇವಸ್ಥಾನ ಅಂಗಳ",
      },
      {
        id: 4,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Temple Pillars" : "ದೇವಸ್ಥಾನ ಕಂಬಗಳು",
        title: language === 'en' ? "Sacred Pillars" : "ಪವಿತ್ರ ಕಂಬಗಳು",
      },
      {
        id: 5,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Temple Entrance" : "ದೇವಸ್ಥಾನ ಪ್ರವೇಶ",
        title: language === 'en' ? "Temple Entrance" : "ದೇವಸ್ಥಾನ ಪ್ರವೇಶ",
      },
      {
        id: 6,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Temple Garden" : "ದೇವಸ್ಥಾನ ಉದ್ಯಾನ",
        title: language === 'en' ? "Sacred Garden" : "ಪವಿತ್ರ ಉದ್ಯಾನ",
      },
    ],
    festivals: [
      {
        id: 7,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Maha Shivaratri" : "ಮಹಾ ಶಿವರಾತ್ರಿ",
        title: language === 'en' ? "Maha Shivaratri Celebration" : "ಮಹಾ ಶಿವರಾತ್ರಿ ಆಚರಣೆ",
      },
      {
        id: 8,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Holi Festival" : "ಹೋಳಿ ಹಬ್ಬ",
        title: language === 'en' ? "Holi Festival" : "ಹೋಳಿ ಹಬ್ಬ",
      },
      {
        id: 9,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Diwali" : "ದೀಪಾವಳಿ",
        title: language === 'en' ? "Diwali Celebrations" : "ದೀಪಾವಳಿ ಆಚರಣೆಗಳು",
      },
      {
        id: 10,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Navratri" : "ನವರಾತ್ರಿ",
        title: language === 'en' ? "Navratri Festival" : "ನವರಾತ್ರಿ ಹಬ್ಬ",
      },
      {
        id: 11,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Janmashtami" : "ಜನ್ಮಾಷ್ಟಮಿ",
        title: language === 'en' ? "Janmashtami" : "ಜನ್ಮಾಷ್ಟಮಿ",
      },
      {
        id: 12,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Ganesh Chaturthi" : "ಗಣೇಶ ಚತುರ್ಥಿ",
        title: language === 'en' ? "Ganesh Chaturthi" : "ಗಣೇಶ ಚತುರ್ಥಿ",
      },
    ],
    rituals: [
      {
        id: 13,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Morning Aarti" : "ಬೆಳಗಿನ ಆರತಿ",
        title: language === 'en' ? "Morning Aarti" : "ಬೆಳಗಿನ ಆರತಿ",
      },
      {
        id: 14,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Abhishek Ceremony" : "ಅಭಿಷೇಕ ಸಮಾರಂಭ",
        title: language === 'en' ? "Abhishek Ritual" : "ಅಭಿಷೇಕ ವಿಧಿ",
      },
      {
        id: 15,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Evening Prayer" : "ಸಂಜೆಯ ಪ್ರಾರ್ಥನೆ",
        title: language === 'en' ? "Evening Prayers" : "ಸಂಜೆಯ ಪ್ರಾರ್ಥನೆಗಳು",
      },
      {
        id: 16,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Wedding Ceremony" : "ವಿವಾಹ ಸಮಾರಂಭ",
        title: language === 'en' ? "Sacred Wedding" : "ಪವಿತ್ರ ವಿವಾಹ",
      },
      {
        id: 17,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Thread Ceremony" : "ಉಪನಯನ ಸಮಾರಂಭ",
        title: language === 'en' ? "Sacred Thread Ceremony" : "ಪವಿತ್ರ ಯಜ್ಞೋಪವೀತ ಸಮಾರಂಭ",
      },
      {
        id: 18,
        src: "/placeholder.svg?height=400&width=600",
        alt: language === 'en' ? "Naming Ceremony" : "ನಾಮಕರಣ ಸಮಾರಂಭ",
        title: language === 'en' ? "Naming Ceremony" : "ನಾಮಕರಣ ಸಮಾರಂಭ",
      },
    ],
  }

  const videos = [
    {
      id: 1,
      thumbnail: "/placeholder.svg?height=300&width=400",
      title: language === 'en' ? "Daily Aarti Ceremony" : "ದೈನಂದಿನ ಆರತಿ ಸಮಾರಂಭ",
      duration: "5:30",
    },
    {
      id: 2,
      thumbnail: "/placeholder.svg?height=300&width=400",
      title: language === 'en' ? "Maha Shivaratri Highlights" : "ಮಹಾ ಶಿವರಾತ್ರಿ ಮುಖ್ಯಾಂಶಗಳು",
      duration: "12:45",
    },
    {
      id: 3,
      thumbnail: "/placeholder.svg?height=300&width=400",
      title: language === 'en' ? "Temple Construction Journey" : "ದೇವಸ್ಥಾನ ನಿರ್ಮಾಣ ಪ್ರಯಾಣ",
      duration: "8:20",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">{getTranslation(language, 'templeGallery')}</h1>
          <p className="text-xl opacity-90">{getTranslation(language, 'gallerySubtitle')}</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs defaultValue="temple" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="temple">{getTranslation(language, 'temple')}</TabsTrigger>
              <TabsTrigger value="festivals">{getTranslation(language, 'festivals')}</TabsTrigger>
              <TabsTrigger value="rituals">{getTranslation(language, 'rituals')}</TabsTrigger>
              <TabsTrigger value="videos">{getTranslation(language, 'videos')}</TabsTrigger>
            </TabsList>

            <TabsContent value="temple">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.temple.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="relative">
                          <Image
                            src={item.src || "/placeholder.svg"}
                            alt={item.alt}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-white font-semibold">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogTitle className="sr-only">{item.title}</DialogTitle>
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="festivals">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.festivals.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="relative">
                          <Image
                            src={item.src || "/placeholder.svg"}
                            alt={item.alt}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-white font-semibold">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogTitle className="sr-only">{item.title}</DialogTitle>
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rituals">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.rituals.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="relative">
                          <Image
                            src={item.src || "/placeholder.svg"}
                            alt={item.alt}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-white font-semibold">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogTitle className="sr-only">{item.title}</DialogTitle>
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                          <Play className="text-blue-600" size={32} />
                        </div>
                      </div>
                      <Badge className="absolute top-4 right-4 bg-black/70 text-white">{video.duration}</Badge>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white font-semibold">{video.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
