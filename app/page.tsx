import HomePageClient from "./HomePageClient"
import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lyricgenerator.cc"

export const metadata: Metadata = {
  title: "Free AI Lyrics Generator - Create Original Song Lyrics Instantly | Professional AI Songwriting Tool 2026",
  description:
    "Generate unique, professional song lyrics instantly with our advanced AI lyrics generator. Free tool for songwriters, musicians & content creators. Create lyrics for 15+ genres including pop, rock, rap, R&B, country & more. No sign-up required. Start creating your next hit now!",
  keywords: [
    // Primary keywords
    "ai lyrics generator",
    "song lyrics generator",
    "free lyrics maker",
    "ai songwriting tool",
    "lyrics creator online",
    // Long-tail keywords
    "generate song lyrics free",
    "ai powered lyrics generator",
    "automatic lyrics writer",
    "create song lyrics online",
    "professional lyrics generator",
    // Genre-specific
    "rap lyrics generator",
    "pop lyrics maker",
    "rock lyrics creator",
    "country song lyrics generator",
    "r&b lyrics writer",
    // Use case keywords
    "songwriting software free",
    "lyric writing tool",
    "music lyrics generator",
    "song lyrics creator for musicians",
    // 2026 keywords
    "ai music writing 2026",
    "best lyrics generator 2026",
  ].join(", "),
  openGraph: {
    title: "Free AI Lyrics Generator - Create Original Songs Instantly 2026",
    description:
      "Generate professional song lyrics in seconds with advanced AI. Free tool for all music genres. Join 500K+ songwriters creating hits daily!",
    type: "website",
    url: siteUrl,
    siteName: "AI Lyrics Generator",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AI Lyrics Generator - Create Original Song Lyrics Instantly",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Lyrics Generator - Create Professional Songs",
    description: "Generate professional song lyrics in seconds with AI. 500K+ users trust us.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "es-ES": `${siteUrl}/es`,
      "fr-FR": `${siteUrl}/fr`,
      "de-DE": `${siteUrl}/de`,
      "ja-JP": `${siteUrl}/ja`,
      "ko-KR": `${siteUrl}/ko`,
      "zh-CN": `${siteUrl}/zh`,
    },
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
    google: "your-google-verification-code",
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
                alternateName: "Free Song Lyrics Maker",
                url: siteUrl,
                description:
                  "Professional AI-powered tool to generate original song lyrics for any genre. Create high-quality lyrics for pop, rock, rap, country, R&B and 15+ genres instantly. Used by 500,000+ songwriters worldwide.",
                applicationCategory: "MultimediaApplication",
                operatingSystem: "Any",
                browserRequirements: "Requires JavaScript",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
                featureList: [
                  "AI-powered lyrics generation",
                  "15+ music genres supported",
                  "Customizable mood and theme",
                  "Multi-language support (20+ languages)",
                  "Instant generation in seconds",
                  "Download and copy lyrics",
                  "No registration required",
                  "Completely free forever",
                  "Professional song structure",
                  "Unlimited generations",
                ],
                screenshot: `${siteUrl}/screenshot.png`,
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  ratingCount: "12547",
                  bestRating: "5",
                  worstRating: "1",
                },
                author: {
                  "@type": "Organization",
                  name: "AI Lyrics Generator",
                },
              },
              {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                name: "AI Lyrics Generator",
                url: siteUrl,
                logo: {
                  "@type": "ImageObject",
                  url: `${siteUrl}/logo.png`,
                  width: 512,
                  height: 512,
                },
                description:
                  "Leading AI-powered lyrics generation platform trusted by musicians and songwriters worldwide",
                sameAs: [],
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: siteUrl,
                name: "AI Lyrics Generator",
                inLanguage: "en-US",
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
              {
                "@type": "SoftwareApplication",
                name: "AI Lyrics Generator",
                operatingSystem: "Web Browser",
                applicationCategory: "MusicApplication",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "12547",
                },
              },
              {
                "@type": "CreativeWork",
                "@id": `${siteUrl}/#creativework`,
                name: "Song Lyrics",
                description: "Original AI-generated song lyrics across multiple genres and languages",
                creator: {
                  "@type": "Organization",
                  name: "AI Lyrics Generator",
                },
                genre: ["Pop", "Rock", "Rap", "R&B", "Country", "Jazz", "EDM", "K-Pop", "Folk", "Metal"],
              },
            ],
          }),
        }}
      />
      <HomePageClient />
    </>
  )
}
