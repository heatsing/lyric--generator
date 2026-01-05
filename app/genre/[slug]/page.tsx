import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"
import LyricsGenerator from "@/components/lyrics-generator"

const genreData: Record<
  string,
  {
    name: string
    displayName: string
    description: string
    keywords: string[]
  }
> = {
  rnb: {
    name: "R&B",
    displayName: "R&B Lyrics Generator",
    description:
      "Create smooth, soulful R&B lyrics with AI. Perfect for rhythm and blues songs featuring emotional vocals, harmonies, and groove-oriented melodies.",
    keywords: ["R&B lyrics", "soul music", "rhythm and blues", "RnB songwriter", "smooth vocals"],
  },
  rock: {
    name: "Rock",
    displayName: "Rock Lyrics Generator",
    description:
      "Generate powerful rock lyrics with AI. Perfect for rock anthems featuring electric guitars, drums, and rebellious themes.",
    keywords: ["rock lyrics", "rock music", "guitar rock", "rock songwriter", "hard rock"],
  },
  pop: {
    name: "Pop",
    displayName: "Pop Lyrics Generator",
    description:
      "Create catchy pop lyrics with AI. Perfect for radio-friendly pop songs featuring memorable hooks and upbeat melodies.",
    keywords: ["pop lyrics", "pop music", "catchy songs", "pop songwriter", "top 40"],
  },
  rap: {
    name: "Hip Hop",
    displayName: "Rap Lyrics Generator",
    description:
      "Generate authentic rap lyrics with AI. Perfect for hip-hop tracks featuring rhythmic flow, wordplay, and urban storytelling.",
    keywords: ["rap lyrics", "hip hop", "rap songwriter", "freestyle rap", "urban music"],
  },
  elementary: {
    name: "Pop",
    displayName: "Elementary School Songs Generator",
    description:
      "Create fun, educational songs for elementary school kids with AI. Perfect for classroom sing-alongs, learning activities, and children's entertainment.",
    keywords: ["kids songs", "children's music", "educational songs", "elementary school", "kids lyrics"],
  },
  folk: {
    name: "Folk",
    displayName: "Folk Lyrics Generator",
    description:
      "Generate authentic folk lyrics with AI. Perfect for acoustic folk songs featuring storytelling, traditional themes, and organic sounds.",
    keywords: ["folk lyrics", "folk music", "acoustic songs", "folk songwriter", "traditional music"],
  },
  jazz: {
    name: "Jazz",
    displayName: "Jazz Lyrics Generator",
    description:
      "Create sophisticated jazz lyrics with AI. Perfect for jazz standards featuring complex harmonies, improvisation, and timeless elegance.",
    keywords: ["jazz lyrics", "jazz music", "jazz standards", "swing music", "jazz songwriter"],
  },
  kpop: {
    name: "K-Pop",
    displayName: "K-Pop Lyrics Generator",
    description:
      "Generate trendy K-Pop lyrics with AI. Perfect for Korean pop songs featuring catchy hooks, powerful performances, and global appeal.",
    keywords: ["K-Pop lyrics", "Korean pop", "Kpop songwriter", "Korean music", "K-Pop songs"],
  },
  country: {
    name: "Country",
    displayName: "Country Lyrics Generator",
    description:
      "Create authentic country lyrics with AI. Perfect for country songs featuring storytelling, heartfelt emotions, and rural themes.",
    keywords: ["country lyrics", "country music", "country songwriter", "Nashville", "country western"],
  },
  "diss-track": {
    name: "Hip Hop",
    displayName: "Diss Track Lyrics Generator",
    description:
      "Generate bold diss track lyrics with AI. Perfect for rap battles featuring clever wordplay, sharp disses, and competitive energy.",
    keywords: ["diss track", "rap battle", "diss lyrics", "battle rap", "beef tracks"],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug
  const data = genreData[slug]

  if (!data) {
    return {
      title: "Genre Not Found",
    }
  }

  return {
    title: `${data.displayName} - AI Lyrics Generator`,
    description: data.description,
    keywords: data.keywords.join(", "),
  }
}

export default function GenrePage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const data = genreData[slug]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Genre Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Music className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-balance">AI Lyrics Generator</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/login">
              <Button size="sm">Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-12 md:pt-20 md:pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance leading-tight">
            {data.displayName}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="container mx-auto px-4 pb-16">
        <LyricsGenerator presetGenre={data.name} />
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} AI Lyrics Generator. All rights reserved.</p>
            <p className="mt-2">Create amazing song lyrics with the power of artificial intelligence.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
