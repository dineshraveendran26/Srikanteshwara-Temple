"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"

/**
 * EventTicker Component
 * 
 * A scrolling ticker/flash line that displays upcoming event information.
 * Pauses on hover/touch and opens the event image when clicked.
 */
export default function EventTicker() {
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const tickerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const { language } = useLanguage()

  // Handle click to navigate to events section and trigger image modal
  const handleClick = () => {
    // Navigate to home page if not already there
    if (pathname !== '/') {
      router.push('/#events')
      // Wait for navigation then trigger modal
      setTimeout(() => {
        triggerEventModal()
      }, 300)
    } else {
      // Scroll to events section first
      const eventsSection = document.getElementById('events')
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // After scrolling, trigger click on the first event image
        setTimeout(() => {
          triggerEventModal()
        }, 500)
      } else {
        triggerEventModal()
      }
    }
  }

  // Function to trigger the event modal
  const triggerEventModal = () => {
    // Find the first event card (Maha Shivaratri) and click it
    const eventCard = document.querySelector('[data-event-image="maha-shivaratri"]')
    if (eventCard) {
      // The ImageModal trigger is wrapped in a div, find the clickable element
      // Look for the trigger div with cursor-pointer class
      const clickableElement = eventCard.querySelector('div.cursor-pointer') as HTMLElement
      if (clickableElement) {
        // Trigger click event
        clickableElement.click()
      } else {
        // Fallback: try clicking the first child
        const firstChild = eventCard.firstElementChild as HTMLElement
        if (firstChild) {
          // Find the DialogTrigger button or clickable element
          const dialogTrigger = firstChild.querySelector('button, [role="button"], div[class*="cursor"]') as HTMLElement
          if (dialogTrigger) {
            dialogTrigger.click()
          } else {
            firstChild.click()
          }
        }
      }
    }
  }

  // Pause on hover/touch
  useEffect(() => {
    setIsPaused(isHovered)
  }, [isHovered])

  const eventText = language === 'en' 
    ? 'Upcoming Event - Maha Shivarathri' 
    : 'ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮ - ಮಹಾಶಿವ ರಾತ್ರಿ'

  return (
    <div
      className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 text-white overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div
        ref={tickerRef}
        className={`flex items-center h-10 cursor-pointer select-none ${
          isPaused ? 'animate-none' : 'animate-scroll'
        }`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleClick()
          }
        }}
        aria-label={language === 'en' ? 'Click to view Maha Shivarathri event details' : 'ಮಹಾಶಿವರಾತ್ರಿ ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳನ್ನು ನೋಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ'}
      >
        {/* Duplicate content for seamless loop */}
        <div className="flex items-center gap-4 whitespace-nowrap">
          <span className="font-bold text-sm md:text-base px-4">{eventText}</span>
          <span className="text-amber-200">•</span>
          <span className="font-bold text-sm md:text-base px-4">{eventText}</span>
          <span className="text-amber-200">•</span>
          <span className="font-bold text-sm md:text-base px-4">{eventText}</span>
          <span className="text-amber-200">•</span>
          <span className="font-bold text-sm md:text-base px-4">{eventText}</span>
          <span className="text-amber-200">•</span>
          <span className="font-bold text-sm md:text-base px-4">{eventText}</span>
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-4 whitespace-nowrap">
          <span className="font-bold text-sm md:text-base px-4">{eventText}</span>
          <span className="text-amber-200">•</span>
          <span className="font-bold text-sm md:text-base px-4">{eventText}</span>
          <span className="text-amber-200">•</span>
          <span className="font-bold text-sm md:text-base px-4">{eventText}</span>
          <span className="text-amber-200">•</span>
          <span className="font-bold text-sm md:text-base px-4">{eventText}</span>
          <span className="text-amber-200">•</span>
          <span className="font-bold text-sm md:text-base px-4">{eventText}</span>
        </div>
      </div>
    </div>
  )
}

