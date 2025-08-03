"use client"

import { useEffect, useState } from "react"

export default function CSSVerification() {
  const [cssLoaded, setCssLoaded] = useState(false)

  useEffect(() => {
    // Check if CSS variables are loaded
    const checkCSS = () => {
      const root = document.documentElement
      const computedStyle = getComputedStyle(root)
      const background = computedStyle.getPropertyValue('--background')
      const foreground = computedStyle.getPropertyValue('--foreground')
      
      if (background && foreground) {
        setCssLoaded(true)
      } else {
        // Retry after a short delay
        setTimeout(checkCSS, 100)
      }
    }

    checkCSS()
  }, [])

  // This component doesn't render anything visible
  // It just ensures CSS is loaded
  return null
} 