"use client"

import { Sparkles, Music, Mic2, Play, ArrowRight, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating 3D elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Floating glass cards */}
        <div className="absolute top-[15%] left-[8%] w-20 h-20 rounded-2xl bg-card/30 backdrop-blur-xl border border-white/10 shadow-2xl rotate-12 animate-float" style={{ animationDuration: '6s' }}>
          <Music className="w-8 h-8 text-primary/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-[25%] right-[10%] w-24 h-24 rounded-2xl bg-card/20 backdrop-blur-xl border border-white/10 shadow-2xl -rotate-6 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
          <Mic2 className="w-10 h-10 text-accent/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-[20%] left-[12%] w-16 h-16 rounded-xl bg-card/25 backdrop-blur-xl border border-white/10 shadow-2xl rotate-6 animate-float" style={{ animationDuration: '5s', animationDelay: '2s' }}>
          <Star className="w-6 h-6 text-yellow-500/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-[30%] right-[8%] w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-xl border border-white/10 shadow-2xl -rotate-12 animate-float" style={{ animationDuration: '8s', animationDelay: '0.5s' }}>
          <Sparkles className="w-5 h-5 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Announcement badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/10 shadow-lg group cursor-pointer hover:border-primary/30 transition-all duration-300">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              New
            </span>
            <span className="text-sm text-muted-foreground">AI-powered lyrics generation</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Main heading with gradient */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            <span className="block text-foreground">{t.hero.title}</span>
            <span className="block text-gradient mt-2">{t.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="#generator">
              <Button size="lg" className="h-14 px-8 text-base bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/25 group">
                <Sparkles className="w-5 h-5 mr-2" />
                {t.hero.cta || "Start Creating Free"}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base border-orange-500/30 text-foreground hover:bg-orange-500/10">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 border-2 border-background flex items-center justify-center text-xs font-bold text-white">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="ml-2">
                <strong className="text-foreground">500K+</strong> creators
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">
                <strong className="text-foreground">4.9</strong> rating
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span><strong className="text-foreground">Free</strong> forever</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
