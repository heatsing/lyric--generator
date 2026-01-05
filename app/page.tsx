import HomePageClient from "./HomePageClient" // Import the client component

export const metadata = {
  title: "AI Lyrics Generator - Create Original Song Lyrics with AI | Free Online Tool",
  description:
    "Generate unique, creative song lyrics instantly with our AI-powered lyrics generator. Free online tool for songwriters, musicians, and creators. Create lyrics in any genre, mood, and language.",
  keywords:
    "ai lyrics generator, song lyrics generator, free lyrics maker, ai songwriting, lyrics creator, music lyrics, songwriting tool, lyric writing ai",
  openGraph: {
    title: "AI Lyrics Generator - Create Original Song Lyrics Instantly",
    description: "Generate unique song lyrics with AI. Free tool for songwriters and musicians worldwide.",
    type: "website",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
