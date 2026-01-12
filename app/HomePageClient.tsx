"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { CustomerReviews } from "@/components/customer-reviews"
import { FAQ } from "@/components/faq"
import { TrustBadges } from "@/components/TrustBadges"
import { SocialProof } from "@/components/SocialProof"
import { CTASection } from "@/components/CTASection"
import LyricsGenerator from "@/components/lyrics-generator"
import GenreGuide from "@/components/genre-guide"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Header />

      <HeroSection />

      <TrustBadges />

      <SocialProof />

      {/* Generator Section */}
      <section id="generator" className="container mx-auto px-4 pb-16 pt-8">
        <LyricsGenerator />
      </section>

      {/* Genre Guide Section */}
      <GenreGuide />

      {/* Customer Reviews Section */}
      <section className="container mx-auto px-4 py-16">
        <CustomerReviews />
      </section>

      <FeaturesSection />

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">How It Works</h2>
          <p className="text-center text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto leading-relaxed">
            Lyrics Into Song helps you go from words to a playable demo fast. Follow these steps to turn your lyrics
            into a full track:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Add Your Lyrics</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Paste your lyrics or generate a quick draft. The editor lets you refine lines before you render the
                  song.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                  <li>Start with your own lyrics or generate new ones</li>
                  <li>Keep verse and chorus labels for clearer structure</li>
                  <li>Iterate quickly with small edits</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Pick Style & Mood</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Choose the genre, mood, and theme to shape the vocals, arrangement, and tempo.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                  <li>Choose from 15+ genres and tones</li>
                  <li>Set the emotional mood of the performance</li>
                  <li>Pick a theme to guide the arrangement</li>
                  <li>Optional keywords fine-tune the vibe</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Generate & Download</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Render the song, preview it instantly, and download the audio when you love the result.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                  <li>Convert lyrics into vocals + instrumentals</li>
                  <li>Preview the track in-browser</li>
                  <li>Download MP3 and lyric files</li>
                  <li>Regenerate anytime for new ideas</li>
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
                  <li>Keep line lengths consistent for smoother vocals</li>
                  <li>Try different moods to hear new delivery styles</li>
                  <li>Use the editor to tweak one verse at a time</li>
                  <li>Save favorite settings for faster demos</li>
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

      <CTASection />

      {/* Popular Generators */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Popular Styles for Lyrics to Song</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our most-requested genres to shape your song quickly
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { name: "R&B Lyrics", slug: "rnb" },
            { name: "Rock Lyrics", slug: "rock" },
            { name: "Pop Lyrics", slug: "pop" },
            { name: "Rap Lyrics", slug: "rap" },
            { name: "Country Lyrics", slug: "country" },
            { name: "Jazz Lyrics", slug: "jazz" },
            { name: "K-Pop Lyrics", slug: "k-pop" },
            { name: "Folk Lyrics", slug: "folk" },
            { name: "EDM Lyrics", slug: "edm" },
            { name: "Metal Lyrics", slug: "metal" },
            { name: "Blues Lyrics", slug: "blues" },
            { name: "Indie Lyrics", slug: "indie" },
            { name: "Love Song", slug: "love-song" },
            { name: "Christmas Song", slug: "christmas-song" },
            { name: "Birthday Song", slug: "birthday-song" },
            { name: "Diss Track", slug: "diss-track" },
          ].map((genre) => (
            <Link key={genre.slug} href={`/genre/${genre.slug}`}>
              <Button
                variant="outline"
                className="w-full h-12 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                {genre.name}
              </Button>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
