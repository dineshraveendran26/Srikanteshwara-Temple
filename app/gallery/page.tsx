"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

export default function GalleryPage() {
  const { language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const galleryItems = {
    temple: [
      {
        id: 1,
        src: "/images/gallery/DSC09007.JPG",
        alt: language === 'en' ? "Temple Main Entrance" : "ದೇವಸ್ಥಾನ ಮುಖ್ಯ ಪ್ರವೇಶ",
        title: language === 'en' ? "Main Temple Entrance" : "ಮುಖ್ಯ ದೇವಸ್ಥಾನ ಪ್ರವೇಶ",
        category: "architecture"
      },
      {
        id: 2,
        src: "/images/gallery/Sivan statue.jpeg",
        alt: language === 'en' ? "Sacred Shiva Lingam" : "ಪವಿತ್ರ ಶಿವಲಿಂಗ",
        title: language === 'en' ? "Sacred Shiva Lingam" : "ಪವಿತ್ರ ಶಿವಲಿಂಗ",
        category: "deity"
      },
      {
        id: 3,
        src: "/images/gallery/DSC09149.JPG",
        alt: language === 'en' ? "Temple Courtyard" : "ದೇವಸ್ಥಾನ ಅಂಗಳ",
        title: language === 'en' ? "Temple Courtyard" : "ದೇವಸ್ಥಾನ ಅಂಗಳ",
        category: "architecture"
      },
      {
        id: 4,
        src: "/images/gallery/DSC09152.JPG",
        alt: language === 'en' ? "Temple Sacred Pillars" : "ದೇವಸ್ಥಾನ ಪವಿತ್ರ ಕಂಬಗಳು",
        title: language === 'en' ? "Sacred Pillars" : "ಪವಿತ್ರ ಕಂಬಗಳು",
        category: "architecture"
      },
      {
        id: 5,
        src: "/images/gallery/DSC09223.JPG",
        alt: language === 'en' ? "Temple Garden" : "ದೇವಸ್ಥಾನ ಉದ್ಯಾನ",
        title: language === 'en' ? "Sacred Garden" : "ಪವಿತ್ರ ಉದ್ಯಾನ",
        category: "nature"
      },
      {
        id: 6,
        src: "/images/gallery/DSC09226.JPG",
        alt: language === 'en' ? "Temple Bell" : "ದೇವಸ್ಥಾನ ಘಂಟೆ",
        title: language === 'en' ? "Sacred Bell" : "ಪವಿತ್ರ ಘಂಟೆ",
        category: "ritual"
      },
    ],
    festivals: [
      {
        id: 7,
        src: "/images/gallery/DSC09562.JPG",
        alt: language === 'en' ? "Maha Shivaratri Celebration" : "ಮಹಾ ಶಿವರಾತ್ರಿ ಆಚರಣೆ",
        title: language === 'en' ? "Maha Shivaratri Celebration" : "ಮಹಾ ಶಿವರಾತ್ರಿ ಆಚರಣೆ",
        category: "festival"
      },
      {
        id: 8,
        src: "/images/gallery/DSC09664.JPG",
        alt: language === 'en' ? "Holi Festival" : "ಹೋಳಿ ಹಬ್ಬ",
        title: language === 'en' ? "Holi Festival" : "ಹೋಳಿ ಹಬ್ಬ",
        category: "festival"
      },
      {
        id: 9,
        src: "/images/gallery/DSC09681.JPG",
        alt: language === 'en' ? "Diwali Celebrations" : "ದೀಪಾವಳಿ ಆಚರಣೆಗಳು",
        title: language === 'en' ? "Diwali Celebrations" : "ದೀಪಾವಳಿ ಆಚರಣೆಗಳು",
        category: "festival"
      },
      {
        id: 10,
        src: "/images/gallery/DSC09683.JPG",
        alt: language === 'en' ? "Navratri Festival" : "ನವರಾತ್ರಿ ಹಬ್ಬ",
        title: language === 'en' ? "Navratri Festival" : "ನವರಾತ್ರಿ ಹಬ್ಬ",
        category: "festival"
      },
      {
        id: 11,
        src: "/images/gallery/3R5A0294.JPG",
        alt: language === 'en' ? "Janmashtami" : "ಜನ್ಮಾಷ್ಟಮಿ",
        title: language === 'en' ? "Janmashtami" : "ಜನ್ಮಾಷ್ಟಮಿ",
        category: "festival"
      },
      {
        id: 12,
        src: "/images/gallery/Sivan 4.jpeg",
        alt: language === 'en' ? "Ganesh Chaturthi" : "ಗಣೇಶ ಚತುರ್ಥಿ",
        title: language === 'en' ? "Ganesh Chaturthi" : "ಗಣೇಶ ಚತುರ್ಥಿ",
        category: "festival"
      },
    ],
    rituals: [
      {
        id: 13,
        src: "/images/gallery/magazine photo 1 edited.jpeg",
        alt: language === 'en' ? "Morning Aarti" : "ಬೆಳಗಿನ ಆರತಿ",
        title: language === 'en' ? "Morning Aarti" : "ಬೆಳಗಿನ ಆರತಿ",
        category: "ritual"
      },
      {
        id: 14,
        src: "/images/gallery/magazine photo 2 edited.jpeg",
        alt: language === 'en' ? "Abhishek Ceremony" : "ಅಭಿಷೇಕ ಸಮಾರಂಭ",
        title: language === 'en' ? "Abhishek Ritual" : "ಅಭಿಷೇಕ ವಿಧಿ",
        category: "ritual"
      },
      {
        id: 15,
        src: "/images/gallery/magazine photo 3 edited.jpeg",
        alt: language === 'en' ? "Evening Prayer" : "ಸಂಜೆಯ ಪ್ರಾರ್ಥನೆ",
        title: language === 'en' ? "Evening Prayers" : "ಸಂಜೆಯ ಪ್ರಾರ್ಥನೆಗಳು",
        category: "ritual"
      },
      {
        id: 16,
        src: "/images/gallery/magazine photo 4 edited.jpeg",
        alt: language === 'en' ? "Wedding Ceremony" : "ವಿವಾಹ ಸಮಾರಂಭ",
        title: language === 'en' ? "Sacred Wedding" : "ಪವಿತ್ರ ವಿವಾಹ",
        category: "ceremony"
      },
      {
        id: 17,
        src: "/images/gallery/magazine photo 5 edited.jpeg",
        alt: language === 'en' ? "Thread Ceremony" : "ಉಪನಯನ ಸಮಾರಂಭ",
        title: language === 'en' ? "Sacred Thread Ceremony" : "ಪವಿತ್ರ ಯಜ್ಞೋಪವೀತ ಸಮಾರಂಭ",
        category: "ceremony"
      },
      {
        id: 18,
        src: "/images/gallery/magazine photo 6 edited.jpeg",
        alt: language === 'en' ? "Naming Ceremony" : "ನಾಮಕರಣ ಸಮಾರಂಭ",
        title: language === 'en' ? "Naming Ceremony" : "ನಾಮಕರಣ ಸಮಾರಂಭ",
        category: "ceremony"
      },
    ],
  }



  const allImages = [
    ...galleryItems.temple,
    ...galleryItems.festivals,
    ...galleryItems.rituals
  ]

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setCurrentImageIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % allImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(allImages[nextIndex].src)
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(allImages[prevIndex].src)
  }

  return (
    <div className="min-h-screen relative">
      {/* Background with overlay - Matching home page exactly */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80 hidden md:block" />
      </div>

      {/* Decorative border pattern - Matching home page */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 opacity-80"></div>
        <div className="absolute top-8 left-0 right-0 h-4 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 opacity-60"></div>
      </div>

      {/* Decorative elements - Matching home page */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-amber-400/30 rounded-full motion-safe:animate-pulse hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-amber-400/30 rounded-full motion-safe:animate-pulse hidden md:block"></div>
      <div className="absolute top-1/2 left-5 w-8 h-8 border border-amber-400/20 rounded-full motion-safe:animate-bounce hidden md:block"></div>
      <div className="absolute top-1/3 right-5 w-6 h-6 border border-amber-400/20 rounded-full motion-safe:animate-bounce hidden md:block"></div>

      {/* Header - Matching home page theme */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-amber-400/40">
            <h1 className="font-serif text-5xl font-bold text-shadow-lg text-white drop-shadow-2xl mb-4 md:text-5xl">
              {getTranslation(language, 'templeGallery')}
            </h1>
            <p className="text-2xl mb-2 font-light text-amber-100 drop-shadow-lg md:text-3xl">
              {getTranslation(language, 'gallerySubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Carousel - Updated styling to match home page */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl font-bold text-white drop-shadow-2xl mb-4">
              {language === 'en' ? "Featured Temple Images" : "ಮುಖ್ಯ ದೇವಸ್ಥಾನ ಚಿತ್ರಗಳು"}
            </h2>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {galleryItems.temple.slice(0, 5).map((item, index) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border border-amber-400/30"
                    onClick={() => openLightbox(item.src, index)}
                  >
                    <div className="relative">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg?height=400&width=600";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="default"
              className="left-2 text-white bg-black/70 hover:bg-black/90 border border-white/20 shadow-lg backdrop-blur-sm h-10 w-10"
            />
            <CarouselNext
              variant="default"
              className="right-2 text-white bg-black/70 hover:bg-black/90 border border-white/20 shadow-lg backdrop-blur-sm h-10 w-10"
            />
          </Carousel>
        </div>
      </section>

      {/* Gallery Content - Updated styling */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs defaultValue="temple" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/10 backdrop-blur-sm border border-amber-400/30">
              <TabsTrigger value="temple" className="text-white data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                {getTranslation(language, 'temple')}
              </TabsTrigger>
              <TabsTrigger value="festivals" className="text-white data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                {getTranslation(language, 'festivals')}
              </TabsTrigger>
              <TabsTrigger value="history" className="text-white data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                {getTranslation(language, 'galleryHistory')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="temple">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.temple.map((item, index) => (
                  <div 
                    key={item.id}
                    className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border border-amber-400/30"
                    onClick={() => openLightbox(item.src, index)}
                  >
                    <div className="relative">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg?height=400&width=600";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="festivals">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.festivals.map((item, index) => (
                  <div 
                    key={item.id}
                    className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border border-amber-400/30"
                    onClick={() => openLightbox(item.src, galleryItems.temple.length + index)}
                  >
                    <div className="relative">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg?height=400&width=600";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="history">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.rituals.map((item, index) => (
                  <div 
                    key={item.id}
                    className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border border-amber-400/30"
                    onClick={() => openLightbox(item.src, galleryItems.temple.length + galleryItems.festivals.length + index)}
                  >
                    <div className="relative">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg?height=400&width=600";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>


          </Tabs>
        </div>
      </section>

      {/* Lightbox - Enhanced styling */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <Button
              onClick={closeLightbox}
              variant="default"
              size="icon"
              aria-label="Close"
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white border border-white/20 shadow-lg backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
            >
              <X size={24} />
            </Button>
            
            <Button
              onClick={prevImage}
              variant="default"
              size="icon"
              aria-label="Previous image"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white border border-white/20 shadow-lg backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
            >
              <ChevronLeft size={24} />
            </Button>
            
            <Button
              onClick={nextImage}
              variant="default"
              size="icon"
              aria-label="Next image"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white border border-white/20 shadow-lg backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
            >
              <ChevronRight size={24} />
            </Button>
            
            <Image
              src={selectedImage}
              alt={allImages[currentImageIndex]?.alt || "Gallery image"}
              width={800}
              height={600}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg?height=600&width=800";
              }}
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
              <p className="text-sm">
                {currentImageIndex + 1} / {allImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
