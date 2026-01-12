import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music, Sparkles, Zap } from "lucide-react"
import LyricsGenerator from "@/components/lyrics-generator"
import FAQ from "@/components/faq"
import CustomerReviews from "@/components/customer-reviews"

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
  "elementary-school-songs": {
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
  edm: {
    name: "Electronic",
    displayName: "EDM Lyrics Generator",
    description:
      "Generate high-energy EDM lyrics with AI. Perfect for electronic dance music featuring pulsing beats, drops, and festival anthems.",
    keywords: ["EDM lyrics", "electronic dance music", "festival anthems", "DJ music", "dance lyrics"],
  },
  reggae: {
    name: "Reggae",
    displayName: "Reggae Lyrics Generator",
    description:
      "Create authentic reggae lyrics with AI. Perfect for reggae music featuring positive vibes, social messages, and island rhythms.",
    keywords: ["reggae lyrics", "reggae music", "island vibes", "roots reggae", "dancehall"],
  },
  blues: {
    name: "Blues",
    displayName: "Blues Lyrics Generator",
    description:
      "Generate soulful blues lyrics with AI. Perfect for blues music featuring emotional depth, storytelling, and classic 12-bar progressions.",
    keywords: ["blues lyrics", "blues music", "12-bar blues", "soul blues", "blues songwriter"],
  },
  metal: {
    name: "Metal",
    displayName: "Metal Lyrics Generator",
    description:
      "Create powerful metal lyrics with AI. Perfect for heavy metal music featuring intense themes, powerful vocals, and aggressive energy.",
    keywords: ["metal lyrics", "heavy metal", "metal music", "hard rock", "metal songwriter"],
  },
  indie: {
    name: "Indie",
    displayName: "Indie Lyrics Generator",
    description:
      "Generate authentic indie lyrics with AI. Perfect for indie music featuring introspective themes, unique perspectives, and alternative sounds.",
    keywords: ["indie lyrics", "indie music", "alternative rock", "indie songwriter", "indie pop"],
  },
  "love-song": {
    name: "Pop",
    displayName: "Love Song Lyrics Generator",
    description:
      "Create romantic love song lyrics with AI. Perfect for expressing feelings of love, relationships, and emotional connections through music.",
    keywords: ["love song lyrics", "romantic lyrics", "relationship songs", "love music", "romantic ballads"],
  },
  "christmas-song": {
    name: "Pop",
    displayName: "Christmas Song Generator",
    description:
      "Generate festive Christmas song lyrics with AI. Perfect for holiday music featuring joy, celebration, and seasonal themes.",
    keywords: ["christmas songs", "holiday lyrics", "festive music", "christmas carols", "holiday songs"],
  },
  "birthday-song": {
    name: "Pop",
    displayName: "Birthday Song Generator",
    description:
      "Create personalized birthday song lyrics with AI. Perfect for celebrating special days with custom, memorable birthday music.",
    keywords: ["birthday songs", "celebration lyrics", "party music", "birthday celebrations", "custom songs"],
  },
}

export async function generateStaticParams() {
  return Object.keys(genreData).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = genreData[slug]

  if (!data) {
    return {
      title: "Genre Not Found | Lyrics Into Song",
      description: "The requested genre page could not be found. Return to homepage to explore all available genres.",
    }
  }

  return {
    title: `${data.displayName} | Lyrics Into Song`,
    description: data.description,
    keywords: [...data.keywords, "lyrics to song", "AI song generator", "song writing", "music creation"].join(", "),
    openGraph: {
      title: `${data.displayName} - Lyrics Into Song`,
      description: data.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.displayName}`,
      description: data.description,
    },
  }
}

export default async function GenrePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
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
            <span className="text-xl font-bold text-balance">Lyrics Into Song</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Lyrics to Song
            </Link>
            <Link
              href="/poem-generator"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Poem Generator
            </Link>
            <Link
              href="/story-generator"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Short Story Generator
            </Link>
            <Link href="/login">
              <Button size="sm">Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered {data.name} Songs</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            {data.displayName}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="container mx-auto px-4 pb-16">
        <LyricsGenerator defaultGenre={data.name} />
      </section>

      {/* Customer Reviews Section */}
      <section className="container mx-auto px-4 py-16">
        <CustomerReviews />
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Why Use Lyrics Into Song for {data.name}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Generation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Generate professional {data.name.toLowerCase()} lyrics in seconds with our advanced AI technology.
                Perfect for songwriters and musicians.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Genre-Specific</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tailored specifically for {data.name.toLowerCase()} music with authentic style, vocabulary, and
                structure that fits the genre perfectly.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Original</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every lyric is uniquely generated by AI, ensuring original content that you can use for your music
                projects without copyright concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
            How to Generate {data.name} Lyrics
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto leading-relaxed">
            Create professional {data.name.toLowerCase()} lyrics in three simple steps using our AI-powered generator.
            Get started in seconds and unleash your creativity.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Select Your Preferences</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Choose your preferred mood, theme, and any specific keywords or topics you want to include in your{" "}
                  {data.name.toLowerCase()} lyrics. Customize the length and language to match your needs.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                  <li>Pick from various moods and themes</li>
                  <li>Add optional keywords or topics</li>
                  <li>Choose song length preference</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Generate Instantly</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Click the generate button and watch as our AI creates unique, original {data.name.toLowerCase()}{" "}
                  lyrics tailored to your specifications in seconds.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                  <li>Instant AI-powered generation</li>
                  <li>Genre-specific lyrics structure</li>
                  <li>Professional quality output</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Edit & Export</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Review your generated lyrics, make any edits you want, and export them for use in your music projects.
                  Copy to clipboard or download as a text file.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                  <li>Copy to clipboard instantly</li>
                  <li>Download as text file</li>
                  <li>Regenerate unlimited times</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                💡
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Pro Tips for {data.name} Lyrics</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 leading-relaxed">
                  <li>Be specific with your theme and keywords</li>
                  <li>Try different mood combinations</li>
                  <li>Edit and personalize the output</li>
                  <li>Experiment with various lengths</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-16">
        <FAQ />
      </section>

      {/* Genre Quick Links Section */}
      <section className="container mx-auto px-4 py-12 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Generate Lyrics by Genre</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.entries(genreData).map(([genreSlug, genreInfo]) => (
              <Link key={genreSlug} href={`/genre/${genreSlug}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full hover:bg-primary hover:text-primary-foreground ${
                    slug === genreSlug ? "bg-primary text-primary-foreground" : "bg-transparent"
                  }`}
                >
                  {genreInfo.name} Lyrics
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Lyrics Into Song. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
