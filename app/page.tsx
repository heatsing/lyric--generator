import HomePageClient from "./HomePageClient"
import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lyricsintosong.com"

export const metadata: Metadata = {
  title: "Lyrics Into Song - Turn Lyrics Into Full Songs Instantly | AI Vocal & Music Generator",
  description:
    "Turn your lyrics into complete songs with AI vocals and instrumentals. Choose a genre, set the mood, and render a studio-ready demo in minutes. No sign-up required.",
  keywords: [
    // Primary keywords
    "lyrics to song",
    "lyrics into song",
    "ai song generator",
    "ai vocals generator",
    "lyrics to music",
    // Long-tail keywords
    "turn lyrics into a song",
    "lyrics to song ai free",
    "convert lyrics to music",
    "generate ai vocals",
    "create song from lyrics online",
    // Genre-specific
    "pop lyrics to song",
    "rap lyrics to song",
    "rock lyrics to song",
    "country lyrics to song",
    "r&b lyrics to song",
    // Use case keywords
    "song demo generator",
    "ai music demo",
    "song creator for musicians",
    "ai music rendering",
    // 2026 keywords
    "ai song generator 2026",
    "best lyrics to song 2026",
  ].join(", "),
  openGraph: {
    title: "Lyrics Into Song - Turn Lyrics Into Songs Instantly",
    description:
      "Turn your lyrics into full songs with AI vocals and instrumentals. Choose a style, render a demo, and share it fast.",
    type: "website",
    url: siteUrl,
    siteName: "Lyrics Into Song",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Lyrics Into Song - Turn Lyrics Into Full Songs Instantly",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyrics Into Song - AI Vocal & Music Generator",
    description: "Turn lyrics into full songs with AI vocals, instrumentals, and fast rendering.",
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
                name: "Lyrics Into Song",
                alternateName: "Lyrics to Song AI",
                url: siteUrl,
                description:
                  "AI-powered tool to turn lyrics into complete songs with vocals and instrumentals. Render high-quality demos for pop, rock, rap, country, R&B, and more.",
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
                  "Lyrics to song conversion",
                  "AI vocals and instrumentals",
                  "15+ music genres supported",
                  "Customizable mood and theme",
                  "Multi-language support",
                  "Fast rendering in minutes",
                  "Download MP3 and lyric files",
                  "No registration required",
                  "Royalty-free usage",
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
                  name: "Lyrics Into Song",
                },
              },
              {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                name: "Lyrics Into Song",
                url: siteUrl,
                logo: {
                  "@type": "ImageObject",
                  url: `${siteUrl}/logo.png`,
                  width: 512,
                  height: 512,
                },
                description:
                  "Leading AI-powered lyrics-to-song platform trusted by musicians and creators worldwide",
                sameAs: [],
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: siteUrl,
                name: "Lyrics Into Song",
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
                name: "Lyrics Into Song",
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
                name: "AI-Generated Songs",
                description: "AI-generated songs with vocals and instrumentals across multiple genres",
                creator: {
                  "@type": "Organization",
                  name: "Lyrics Into Song",
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
