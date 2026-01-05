"use client"

import LyricsGenerator from "@/components/lyrics-generator"
import { Music, Sparkles, Zap } from "lucide-react"
import FAQ from "@/components/faq"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CustomerReviews from "@/components/customer-reviews"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

export default function HomePageClient() {
  const { t } = useLanguage()

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
            <Link href="/" className="text-sm font-medium text-foreground transition-colors">
              Lyric Generator
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
            <LanguageSwitcher />
            <Link href="/login">
              <Button size="sm">{t.nav.login}</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>{t.hero.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="container mx-auto px-4 pb-16">
        <LyricsGenerator />
      </section>

      {/* Customer Reviews Section */}
      <section className="container mx-auto px-4 py-16">
        <CustomerReviews />
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t.features.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.fast}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.features.fastDesc}</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.customizable}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.features.customizableDesc}</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.original}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.features.originalDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">How It Works</h2>
          <p className="text-center text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto leading-relaxed">
            Our AI-powered lyrics generator uses advanced language models to create original, creative lyrics tailored
            to your specifications. Here's how to get started:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Choose Your Musical Style</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Select your preferred genre from our extensive library including Pop, Rock, Hip Hop, R&B, Country,
                  Jazz, and many more. Each genre has its own unique characteristics and lyrical patterns.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                  <li>Pick from 15+ popular music genres</li>
                  <li>Choose a mood that matches your vision</li>
                  <li>Select a theme to guide the content</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Customize Your Song Details</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Fine-tune your lyrics by adding specific topics, keywords, or phrases you want to include. Control the
                  structure and length to match your needs.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                  <li>Add optional keywords or topics</li>
                  <li>Choose song length preference</li>
                  <li>Select your preferred language</li>
                  <li>All settings work together perfectly</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Generate & Export</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Click the generate button and watch as AI creates your unique lyrics in seconds. Edit, copy, or
                  download the results.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                  <li>Instant AI-powered generation</li>
                  <li>Edit lyrics directly in the output</li>
                  <li>Copy to clipboard or download</li>
                  <li>Regenerate unlimited times</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                💡
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Pro Tips</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 leading-relaxed">
                  <li>Be specific with keywords for better results</li>
                  <li>Try different mood combinations</li>
                  <li>Edit output to add personal touch</li>
                  <li>Save your favorite settings</li>
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
            <Link href="/genre/rnb">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                R&B Lyrics
              </Button>
            </Link>
            <Link href="/genre/rock">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Rock Lyrics
              </Button>
            </Link>
            <Link href="/genre/pop">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Pop Lyrics
              </Button>
            </Link>
            <Link href="/genre/rap">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Rap Lyrics
              </Button>
            </Link>
            <Link href="/genre/elementary-school-songs">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Elementary School Songs
              </Button>
            </Link>
            <Link href="/genre/folk">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Folk Lyrics
              </Button>
            </Link>
            <Link href="/genre/jazz">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Jazz Lyrics
              </Button>
            </Link>
            <Link href="/genre/kpop">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                K-Pop Lyrics
              </Button>
            </Link>
            <Link href="/genre/country">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Country Lyrics
              </Button>
            </Link>
            <Link href="/genre/diss-track">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Diss Track Lyrics
              </Button>
            </Link>
            <Link href="/genre/edm">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                EDM Lyrics
              </Button>
            </Link>
            <Link href="/genre/reggae">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Reggae Lyrics
              </Button>
            </Link>
            <Link href="/genre/blues">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Blues Lyrics
              </Button>
            </Link>
            <Link href="/genre/metal">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Metal Lyrics
              </Button>
            </Link>
            <Link href="/genre/indie">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Indie Lyrics
              </Button>
            </Link>
            <Link href="/genre/love-song">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Love Songs
              </Button>
            </Link>
            <Link href="/genre/christmas-song">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Christmas Songs
              </Button>
            </Link>
            <Link href="/genre/birthday-song">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Birthday Songs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} AI Lyrics Generator. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
