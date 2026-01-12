"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Sparkles className="h-12 w-12 mx-auto mb-6 text-primary-foreground/90" />
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Turn Your Lyrics Into a Finished Song
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 text-pretty leading-relaxed">
            Paste your lyrics, pick a style, and let AI produce vocals and instrumentals in minutes. Join creators who
            use Lyrics Into Song to share demos, releases, and social clips fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold" asChild>
              <Link href="#generator">
                Convert Lyrics Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20"
              asChild
            >
              <Link href="/poem-generator">Try Poem Generator</Link>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-6">
            No credit card required • Free to start • No sign-up
          </p>
        </div>
      </div>
    </section>
  )
}
