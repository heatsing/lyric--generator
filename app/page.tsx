import HomePageClient from "./HomePageClient"
import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lyricgenerator.cc"

export const metadata: Metadata = {
  title: "Free AI Lyrics Generator - Create Original Song Lyrics Instantly | AI Songwriting Tool 2025",
  description:
    "Generate unique song lyrics with our free AI lyrics generator. Create professional lyrics for any genre - pop, rock, rap, country & more. Perfect for songwriters, musicians, and content creators. No sign-up required.",
  keywords:
    "ai lyrics generator, song lyrics generator free, lyric maker, ai songwriting tool, create song lyrics, automatic lyrics generator, write song lyrics, music lyrics creator, rap lyrics generator, pop lyrics maker, free songwriting software",
  openGraph: {
    title: "Free AI Lyrics Generator - Create Original Songs Instantly",
    description: "Generate professional song lyrics in seconds with AI. Free tool for all music genres. Try it now!",
    type: "website",
    url: siteUrl,
    siteName: "AI Lyrics Generator",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AI Lyrics Generator - Create Original Song Lyrics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Lyrics Generator - Create Original Songs",
    description: "Generate professional song lyrics in seconds with AI",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
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
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "@id": `${siteUrl}/#webapp`,
                name: "AI Lyrics Generator",
                url: siteUrl,
                description:
                  "Free AI-powered tool to generate original song lyrics for any genre. Create professional lyrics for pop, rock, rap, country, and more genres instantly.",
                applicationCategory: "MultimediaApplication",
                operatingSystem: "Any",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
                featureList: [
                  "Generate lyrics for 15+ music genres",
                  "Customize mood and theme",
                  "Multi-language support",
                  "Instant AI generation",
                  "Download and copy lyrics",
                  "No sign-up required",
                ],
                screenshot: `${siteUrl}/screenshot.png`,
              },
              {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                name: "AI Lyrics Generator",
                url: siteUrl,
                logo: {
                  "@type": "ImageObject",
                  url: `${siteUrl}/logo.png`,
                },
                sameAs: [],
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: siteUrl,
                name: "AI Lyrics Generator",
                publisher: {
                  "@id": `${siteUrl}/#organization`,
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${siteUrl}/generator/{search_term_string}`,
                  },
                  "query-input": "required name=search_term_string",
                },
              },
            ],
          }),
        }}
      />
      <HomePageClient />
    </>
  )
}
