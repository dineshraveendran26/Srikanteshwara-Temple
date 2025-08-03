"use client"
import HeroSection from "@/components/sections/HeroSection"
import EventsSection from "@/components/sections/EventsSection"
import HistorySection from "@/components/sections/HistorySection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <EventsSection />
      <HistorySection />
    </div>
  )
}
