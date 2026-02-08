"use client"

import Image from "next/image"
import ImageModal from "@/components/common/ImageModal"
import { getTranslation } from "@/lib/translations"
import { logger } from "@/lib/logger"
import type { EventImageConfig } from "@/constants/event-images"
import type { Language } from "@/lib/translations"

interface EventImageCardProps {
  image: EventImageConfig
  language: Language
  priority?: boolean
}

/**
 * EventImageCard Component
 * 
 * A reusable card component for displaying event images with zoom functionality.
 * 
 * @param image - Image configuration object
 * @param language - Current language for alt text
 * @param priority - Whether to prioritize image loading
 */
export default function EventImageCard({
  image,
  language,
  priority = false,
}: EventImageCardProps) {
  const altText = language === 'en' ? image.altEn : image.altKn

  // Add data attribute for ticker to find and click
  const isMahaShivaratri = image.src.includes('maha-shivaratri')

  return (
    <div data-event-image={isMahaShivaratri ? 'maha-shivaratri' : undefined}>
      <ImageModal
        src={image.src}
        alt={altText}
        className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        trigger={
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-2 md:p-4 group cursor-pointer">
          <Image
            src={image.src}
            alt={altText}
            width={400}
            height={600}
            className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={(e) => {
              logger.error('Failed to load event image', {
                component: 'EventImageCard',
                action: 'image_load_error',
                src: image.src,
              })
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {getTranslation(language, 'clickToZoom')}
          </div>
        </div>
      }
      />
    </div>
  )
}

