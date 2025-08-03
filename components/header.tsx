"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useEffect, useState, useMemo } from "react"
import { usePathname, useRouter } from "next/navigation"
import LanguageToggle from "@/components/common/LanguageToggle"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { language } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()

  const navigation = useMemo(() => [
    { name: getTranslation(language, 'home'), href: "/", type: "page" },
    { name: getTranslation(language, 'events'), href: "#events", type: "section" },
    { name: getTranslation(language, 'gallery'), href: "/gallery", type: "page" },
    { name: getTranslation(language, 'sevas'), href: "/sevas", type: "page" },
    { name: getTranslation(language, 'history'), href: "#history", type: "section" },
    { name: getTranslation(language, 'management'), href: "/committee", type: "page" },
    { name: getTranslation(language, 'communityHall'), href: "/community-hall", type: "page" },
  ], [language])

  // Scroll spy functionality for sections
  useEffect(() => {
    if (pathname !== "/") return // Only track sections on home page

    const handleScroll = () => {
      const sections = ["home", "events", "history"]
      const scrollPosition = window.scrollY + 100 // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const isActive = (item: any) => {
    if (item.type === "page") {
      if (item.href === "/") {
        return pathname === "/"
      }
      return pathname.startsWith(item.href)
    } else {
      // For sections, only active on home page
      return pathname === "/" && activeSection === item.href.substring(1)
    }
  }

  const handleNavigation = (item: any) => {
    if (item.type === "page") {
      router.push(item.href)
    } else {
      // For sections, navigate to home page first if not already there
      if (pathname !== "/") {
        router.push("/")
        // Wait for navigation then scroll
        setTimeout(() => {
          scrollToSection(item.href)
        }, 100)
      } else {
        scrollToSection(item.href)
      }
    }
    setIsOpen(false)
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigation({ href: "/", type: "page" })}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ॐ</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-blue-900 text-lg">{getTranslation(language, 'templeName')}</h1>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 transform relative ${
                  isActive(item) ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
                {isActive(item) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA and Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">ॐ</span>
                  </div>
                  <div>
                    <h1 className="font-serif font-bold text-blue-900">{getTranslation(language, 'templeName')}</h1>
                  </div>
                </div>
                <LanguageToggle />
              </div>

              <nav className="space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 relative ${
                      isActive(item)
                        ? "bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                    {isActive(item) && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t">
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
