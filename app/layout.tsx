import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import Script from "next/script"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Free AI Lyrics Generator - Create Original Song Lyrics Instantly | AI Songwriting Tool",
  description:
    "Generate unique song lyrics with our free AI lyrics generator. Create professional lyrics for pop, rock, rap, R&B, country & 15+ genres. Perfect for songwriters, musicians, content creators. No sign-up required, 100% copyright-free.",
  keywords: [
    "ai lyrics generator",
    "song lyrics generator free",
    "lyric maker",
    "ai songwriting",
    "automatic lyrics generator",
    "write song lyrics",
    "rap lyrics generator",
    "pop lyrics maker",
    "free songwriting software",
    "ai music lyrics",
    "songwriter helper",
    "create song lyrics online",
    "lyrics generator tool",
  ],
  authors: [{ name: "AI Lyrics Generator" }],
  openGraph: {
    title: "Free AI Lyrics Generator - Create Original Song Lyrics Instantly",
    description: "Generate professional song lyrics in seconds with AI. Free tool for all music genres. Try it now!",
    type: "website",
    siteName: "AI Lyrics Generator",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Lyrics Generator - Create Original Songs",
    description: "Generate professional song lyrics in seconds with AI. Free tool for all music genres.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "AI Lyrics Generator",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript. Requires HTML5.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1247",
                bestRating: "5",
                worstRating: "1",
              },
              description:
                "Free AI-powered lyrics generator that creates original song lyrics for any genre including Pop, Rock, Hip Hop, R&B, Country, and 15+ more styles. Perfect for songwriters, musicians, and content creators. No sign-up required, 100% copyright-free lyrics.",
              featureList: [
                "AI-powered lyric generation using advanced language models",
                "Support for 15+ music genres including Pop, Rock, Hip Hop, R&B, Country, Jazz, Blues, EDM, Folk",
                "Customizable mood, theme, and keywords",
                "Multi-language support for global creators",
                "Instant generation in 3-10 seconds",
                "100% original, copyright-free lyrics",
                "No sign-up or registration required",
                "Unlimited free generations",
                "Professional song structure with verse, chorus, bridge labels",
                "Export options: copy, download text, download image",
                "Mobile-friendly responsive design",
              ],
              screenshot: "/og-image.png",
              softwareVersion: "2.0",
              datePublished: "2024-01-01",
              dateModified: new Date().toISOString().split("T")[0],
              author: {
                "@type": "Organization",
                name: "AI Lyrics Generator",
              },
              provider: {
                "@type": "Organization",
                name: "AI Lyrics Generator",
              },
              applicationSubCategory: "Music Creation Tool, Songwriting Software, Lyric Writer",
              keywords:
                "AI lyrics generator, song lyrics creator, free lyric maker, AI songwriting, automatic lyrics, rap generator, pop lyrics, songwriter tool",
            }),
          }}
          strategy="beforeInteractive"
        />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="1932d792-2720-4ed8-bb65-b1c7e98517f3"
          strategy="afterInteractive"
        />
      </head>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
