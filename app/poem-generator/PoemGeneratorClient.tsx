"use client"

import PoemGenerator from "@/components/poem-generator"
import { BookOpen, Sparkles, Zap } from "lucide-react"
import FAQ from "@/components/faq"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CustomerReviews from "@/components/customer-reviews"

export default function PoemGeneratorClient() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">AI Poem Generator</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Lyric Generator
            </Link>
            <Link href="/poem-generator" className="text-sm font-medium text-foreground transition-colors">
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

      <section className="container mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Poetry</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
            Create Beautiful Poems with <span className="text-primary">AI</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Generate original poems instantly with artificial intelligence. Perfect for haikus, sonnets, free verse, and
            more.
          </p>
        </div>
      </section>

      <section id="generator" className="container mx-auto px-4 pb-16">
        <PoemGenerator />
      </section>

      <section className="container mx-auto px-4 py-16">
        <CustomerReviews />
      </section>

      <section id="features" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Why Choose Our Poem Generator
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Creation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Generate beautiful poems in seconds with advanced AI technology.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Styles</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create haikus, sonnets, free verse, and many other poetic forms.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Original</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every poem is uniquely generated and completely original.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-16 bg-muted/30">
        <FAQ />
      </section>

      <footer className="border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} AI Poem Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
