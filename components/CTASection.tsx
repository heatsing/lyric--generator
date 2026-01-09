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
            Ready to Create Your Next Hit?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 text-pretty leading-relaxed">
            Join thousands of songwriters, musicians, and content creators who use our AI-powered lyrics generator to
            bring their creative vision to life. Start generating professional lyrics in seconds – completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold" asChild>
              <Link href="#generator">
                Generate Lyrics Now
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
          <p className="text-sm text-primary-foreground/60 mt-6">No credit card required • Free forever • No sign-up</p>
        </div>
      </div>
    </section>
  )
}
