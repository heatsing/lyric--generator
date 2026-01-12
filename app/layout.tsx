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
  title: "Lyrics Into Song - AI Vocal & Music Generator",
  description:
    "Turn your lyrics into complete songs with AI vocals and instrumentals. Choose a style, set the mood, and render a studio-ready demo fast.",
  keywords: [
    "lyrics into song",
    "lyrics to song",
    "ai song generator",
    "ai vocals generator",
    "convert lyrics to music",
    "song demo generator",
    "ai music demo",
    "lyrics to music",
    "turn lyrics into a song",
    "create song from lyrics online",
    "royalty free ai songs",
    "ai music rendering",
  ],
  authors: [{ name: "Lyrics Into Song" }],
  openGraph: {
    title: "Lyrics Into Song - Turn Lyrics Into Full Songs Instantly",
    description: "Generate AI vocals and instrumentals from your lyrics in minutes. Try it now!",
    type: "website",
    siteName: "Lyrics Into Song",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyrics Into Song - AI Vocal & Music Generator",
    description: "Turn lyrics into full songs with AI vocals, instrumentals, and fast rendering.",
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
              name: "Lyrics Into Song",
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
                "AI-powered lyrics-to-song generator that creates vocals and instrumentals for any genre. Perfect for songwriters and creators who need fast demos and shareable tracks.",
              featureList: [
                "Lyrics-to-song conversion with AI vocals and instrumentals",
                "Support for 15+ music genres including Pop, Rock, Hip Hop, R&B, Country, Jazz, Blues, EDM, Folk",
                "Customizable mood, theme, and keywords",
                "Multi-language support for global creators",
                "Fast rendering in minutes",
                "Royalty-free songs ready for sharing",
                "No sign-up or registration required",
                "Unlimited free generations",
                "Professional song structure with verse, chorus, bridge labels",
                "Export options: MP3, lyric text, lyric image",
                "Mobile-friendly responsive design",
              ],
              screenshot: "/og-image.png",
              softwareVersion: "2.0",
              datePublished: "2024-01-01",
              dateModified: new Date().toISOString().split("T")[0],
              author: {
                "@type": "Organization",
                name: "Lyrics Into Song",
              },
              provider: {
                "@type": "Organization",
                name: "Lyrics Into Song",
              },
              applicationSubCategory: "Music Creation Tool, Songwriting Software, Lyrics to Song",
              keywords:
                "lyrics into song, lyrics to song, AI vocals, song demo generator, AI songwriting",
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
