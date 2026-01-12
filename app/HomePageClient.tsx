"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { CustomerReviews } from "@/components/customer-reviews"
import { FAQ } from "@/components/faq"
import { TrustBadges } from "@/components/TrustBadges"
import { SocialProof } from "@/components/SocialProof"
import LyricsGenerator from "@/components/lyrics-generator"
import GenreGuide from "@/components/genre-guide"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import GoogleOneTap from "@/components/GoogleOneTap"

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <GoogleOneTap />

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
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-lg">
                4
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

      {/* Popular Generators */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Generate Lyrics by Genre</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our specialized AI generators for different music styles and occasions
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
