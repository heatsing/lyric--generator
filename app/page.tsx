import HomePageClient from "./HomePageClient" // Assuming HomePageClient is a component in the same directory

export const metadata = {
  title: "Free AI Lyrics Generator - Create Original Song Lyrics Instantly | AI Songwriting Tool 2025",
  description:
    "Generate unique song lyrics with our free AI lyrics generator. Create professional lyrics for any genre - pop, rock, rap, country & more. Perfect for songwriters, musicians, and content creators. No sign-up required.",
  keywords:
    "ai lyrics generator, song lyrics generator free, lyric maker, ai songwriting tool, create song lyrics, automatic lyrics generator, write song lyrics, music lyrics creator, rap lyrics generator, pop lyrics maker, free songwriting software",
  openGraph: {
    title: "Free AI Lyrics Generator - Create Original Songs Instantly",
    description: "Generate professional song lyrics in seconds with AI. Free tool for all music genres. Try it now!",
    type: "website",
    url: "https://ailyricsgenerator.com",
  },
  alternates: {
    canonical: "https://ailyricsgenerator.com",
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
  return <HomePageClient />
}
