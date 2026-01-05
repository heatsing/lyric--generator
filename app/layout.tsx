import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Lyrics Generator | Create Original Song Lyrics with AI",
  description:
    "Generate creative and original song lyrics instantly using AI. Customize by genre, mood, theme, and more. Perfect for songwriters, musicians, and creative minds.",
  keywords: [
    "lyrics generator",
    "AI lyrics",
    "song lyrics",
    "songwriting",
    "music creation",
    "AI music",
    "lyric writing",
  ],
  authors: [{ name: "AI Lyrics Generator" }],
  openGraph: {
    title: "AI Lyrics Generator | Create Original Song Lyrics",
    description: "Generate creative and original song lyrics instantly using AI. Customize by genre, mood, and theme.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lyrics Generator",
    description: "Generate creative and original song lyrics instantly using AI",
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
    <html lang="en">
      <head>
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
