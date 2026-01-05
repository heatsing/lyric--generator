import MusicGenerator from "@/components/music-generator"
import { Music, Headphones, AudioWaveformIcon as WaveformIcon, Radio, Disc3 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CustomerReviews from "@/components/customer-reviews"

export const metadata = {
  title: "AI Music Generator - Create Original Instrumental Music | Free AI Music Maker",
  description:
    "Generate unique instrumental music tracks with AI. Create beats, melodies, and compositions in any genre. Free online AI music generator for producers, content creators, and musicians.",
  keywords:
    "ai music generator, instrumental music maker, beat generator, ai composer, music production ai, background music generator, royalty free music ai, electronic music creator",
  openGraph: {
    title: "AI Music Generator - Create Professional Instrumental Tracks",
    description: "Generate studio-quality instrumental music in any genre with AI technology.",
    type: "website",
  },
}

export default function MusicGeneratorPage() {
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
              Lyrics Generator
            </Link>
            <Link href="/music-generator" className="text-sm font-medium text-foreground transition-colors">
              Music Generator
            </Link>
            <Link
              href="/song-generator"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Song Generator
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
      <section className="container mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Headphones className="w-4 h-4" />
            <span>AI-Powered Music Creation Technology</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            AI Music Generator - Create <span className="text-primary">Professional Instrumentals</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Generate studio-quality instrumental music tracks instantly with AI. From hip hop beats to classical
            compositions, create royalty-free background music for any project. Perfect for content creators, producers,
            and filmmakers worldwide.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="container mx-auto px-4 pb-16">
        <MusicGenerator />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
            Professional AI Music Generation Features
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto">
            Advanced AI technology designed for musicians, producers, and content creators
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <WaveformIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Studio Quality Audio</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Generate high-fidelity audio tracks with professional mixing and mastering ready for production use.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 44.1kHz sample rate</li>
                <li>• 16-bit audio quality</li>
                <li>• Stereo output</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Radio className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ Music Genres</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Create music in any style from electronic and hip hop to classical and orchestral compositions.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Electronic & EDM</li>
                <li>• Hip Hop & Trap</li>
                <li>• Classical & Jazz</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Disc3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Instrument Selection</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Choose specific instruments and create unique combinations for your perfect sound.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Piano, guitar, drums</li>
                <li>• Synthesizers & bass</li>
                <li>• Orchestral instruments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <CustomerReviews />
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} AI Lyrics Generator. All rights reserved.</p>
            <p className="mt-2">Create amazing music and lyrics with the power of artificial intelligence.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
