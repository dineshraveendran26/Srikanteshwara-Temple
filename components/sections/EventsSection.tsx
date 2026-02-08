"use client"

import SectionHeader from "@/components/common/SectionHeader"
import EventImageCard from "@/components/common/EventImageCard"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { EVENT_IMAGES } from "@/constants/event-images"

/**
 * EventsSection Component
 * 
 * Displays upcoming events and festival information with image galleries.
 * Features responsive grid layout and image zoom functionality.
 */
export default function EventsSection() {
  const { language } = useLanguage()

  return (
    <section
      id="events"
      className="py-12 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title={getTranslation(language, 'upcomingEventsTitle')}
          subtitle={getTranslation(language, 'upcomingEventsSubtitle')}
        />

        {/* Event Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {EVENT_IMAGES.map((image, index) => (
            <EventImageCard
              key={image.src}
              image={image}
              language={language}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 