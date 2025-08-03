import type React from "react"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Noto_Serif, Poppins } from "next/font/google"
import "./globals.css"
import CSSVerification from "@/components/css-verification"

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sri Kanteshwara Temple - Divine Abode of Lord Shiva",
  description:
    "Experience divine blessings at Sri SriKanteshwara Temple. Join us for daily darshan, special events, and spiritual ceremonies dedicated to Lord Shiva.",
  keywords:
    "Hindu temple, Lord Shiva, SriKanteshwara, spiritual, darshan, puja, meditation, Om Namah Shivaya, Kannada temple",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", notoSerif.variable, poppins.variable)}>
        <CSSVerification />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
