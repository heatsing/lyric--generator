"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { BentoGrid } from "@/components/BentoGrid"
import { HowItWorks } from "@/components/HowItWorks"
import { CustomerReviews } from "@/components/customer-reviews"
import { FAQ } from "@/components/faq"
import LyricsGenerator from "@/components/lyrics-generator"
import GenreGuide from "@/components/genre-guide"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import GoogleOneTap from "@/components/GoogleOneTap"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Global background effects */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <GoogleOneTap />
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Generator Section - Main CTA */}
      <section id="generator" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Start Creating
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Generate Your <span className="text-gradient">Perfect Lyrics</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your genre, mood, and theme. Our AI will create unique, professional lyrics in seconds.
          </p>
        </div>
        <LyricsGenerator />
      </section>

      {/* Bento Grid Features */}
      <BentoGrid />

      {/* How It Works */}
      <HowItWorks />

      {/* Genre Guide Section */}
      <GenreGuide />

      {/* Customer Reviews Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-muted/20" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
              Loved by <span className="text-gradient">500K+ Creators</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of songwriters, musicians, and content creators who trust our AI
            </p>
          </div>
          <CustomerReviews />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about our AI lyrics generator
          </p>
        </div>
        <FAQ />
      </section>

      {/* Popular Generators */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-muted/30" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Explore
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
              Generate Lyrics by <span className="text-gradient">Genre</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our specialized AI generators for different music styles and occasions
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
                  className="w-full h-12 text-sm font-medium glass border-white/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  {genre.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Ready to Create Your <span className="text-gradient">Next Hit?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join over 500,000 creators who use our AI to write amazing lyrics. Start for free, no signup required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#generator">
                <Button size="lg" className="h-14 px-8 text-base bg-gradient-brand hover:opacity-90 text-white shadow-xl glow-primary btn-shine group">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Creating Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
