"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { CustomerReviews } from "@/components/customer-reviews"
import { FAQ } from "@/components/faq"
import LyricsGenerator from "@/components/lyrics-generator"
import GenreGuide from "@/components/genre-guide"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Header />

      <HeroSection />

      {/* Generator Section */}
      <section id="generator" className="container mx-auto px-4 pb-16">
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

      {/* Popular Generators Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Lyric Generators</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our collection of specialized AI-powered lyric generators. Each generator is optimized for
              specific genres, moods, and themes to help you create the perfect song.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link
              href="/generator/happy-pop-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Happy Pop Lyrics</h3>
              <p className="text-xs text-muted-foreground">Upbeat pop songs</p>
            </Link>
            <Link
              href="/generator/sad-rap-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Sad Rap Lyrics</h3>
              <p className="text-xs text-muted-foreground">Emotional rap verses</p>
            </Link>
            <Link
              href="/generator/romantic-rnb-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Romantic R&B Lyrics</h3>
              <p className="text-xs text-muted-foreground">Love songs in R&B style</p>
            </Link>
            <Link
              href="/generator/energetic-rock-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Energetic Rock Lyrics</h3>
              <p className="text-xs text-muted-foreground">High-energy rock anthems</p>
            </Link>
            <Link
              href="/generator/love-pop-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Love Pop Lyrics</h3>
              <p className="text-xs text-muted-foreground">Romantic pop ballads</p>
            </Link>
            <Link
              href="/generator/breakup-country-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Breakup Country Lyrics</h3>
              <p className="text-xs text-muted-foreground">Heartbreak country songs</p>
            </Link>
            <Link
              href="/generator/party-edm-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Party EDM Lyrics</h3>
              <p className="text-xs text-muted-foreground">Club and party tracks</p>
            </Link>
            <Link
              href="/generator/diss-track-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Diss Track Lyrics</h3>
              <p className="text-xs text-muted-foreground">Rap battle verses</p>
            </Link>
            <Link
              href="/generator/birthday-song-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Birthday Song Lyrics</h3>
              <p className="text-xs text-muted-foreground">Celebration songs</p>
            </Link>
            <Link
              href="/generator/christmas-song-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Christmas Song Lyrics</h3>
              <p className="text-xs text-muted-foreground">Holiday music</p>
            </Link>
            <Link
              href="/generator/trap-beat-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Trap Beat Lyrics</h3>
              <p className="text-xs text-muted-foreground">Modern trap music</p>
            </Link>
            <Link
              href="/generator/motivational-song-lyrics"
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all min-h-[88px]"
            >
              <h3 className="font-semibold mb-1">Motivational Song Lyrics</h3>
              <p className="text-xs text-muted-foreground">Inspirational anthems</p>
            </Link>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Explore 100+ more specialized generators by running the SEO generator script
            </p>
          </div>
        </div>
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
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                R&B Lyrics
              </Button>
            </Link>
            <Link href="/genre/rock">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Rock Lyrics
              </Button>
            </Link>
            <Link href="/genre/pop">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Pop Lyrics
              </Button>
            </Link>
            <Link href="/genre/rap">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Rap Lyrics
              </Button>
            </Link>
            <Link href="/genre/elementary-school-songs">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Elementary School Songs
              </Button>
            </Link>
            <Link href="/genre/folk">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Folk Lyrics
              </Button>
            </Link>
            <Link href="/genre/jazz">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Jazz Lyrics
              </Button>
            </Link>
            <Link href="/genre/kpop">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                K-Pop Lyrics
              </Button>
            </Link>
            <Link href="/genre/country">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Country Lyrics
              </Button>
            </Link>
            <Link href="/genre/diss-track">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Diss Track Lyrics
              </Button>
            </Link>
            <Link href="/genre/edm">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                EDM Lyrics
              </Button>
            </Link>
            <Link href="/genre/reggae">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Reggae Lyrics
              </Button>
            </Link>
            <Link href="/genre/blues">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Blues Lyrics
              </Button>
            </Link>
            <Link href="/genre/metal">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Metal Lyrics
              </Button>
            </Link>
            <Link href="/genre/indie">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Indie Lyrics
              </Button>
            </Link>
            <Link href="/genre/love-song">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Love Songs
              </Button>
            </Link>
            <Link href="/genre/christmas-song">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Christmas Songs
              </Button>
            </Link>
            <Link href="/genre/birthday-song">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px]"
              >
                Birthday Songs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
