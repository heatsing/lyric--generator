import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "AI-powered Lyrics Generator - Create Song Lyrics Online | Free",
    template: "%s | AI Lyrics Generator",
  },
  description:
    "Generate original song lyrics for any genre with our AI-powered lyrics generator. 100% free, no sign-up required. Create professional lyrics for pop, rock, rap, R&B, country & 15+ genres.",
  keywords: [
    "AI song lyrics generator",
    "generate lyrics",
    "music lyric generator",
    "free lyrics",
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
  creator: "AI Lyrics Generator",
  publisher: "AI Lyrics Generator",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lyricgenerator.cc"),
  openGraph: {
    title: "AI-powered Lyrics Generator - Create Song Lyrics Online",
    description: "Generate original song lyrics for any genre with our AI-powered lyrics generator. 100% free, no sign-up required.",
    type: "website",
    siteName: "AI Lyrics Generator",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Lyrics Generator - Create Original Song Lyrics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-powered Lyrics Generator - Create Song Lyrics Online",
    description: "Generate original song lyrics for any genre. 100% free, no sign-up required.",
    images: ["/og-image.png"],
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  category: "Music",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
