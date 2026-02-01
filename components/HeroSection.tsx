"use client"

import { Sparkles, Music, Mic2, Wand2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Music className="absolute top-20 left-[10%] w-8 h-8 text-primary/20 animate-bounce" style={{ animationDuration: '3s' }} />
        <Mic2 className="absolute top-32 right-[15%] w-6 h-6 text-accent/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
        <Wand2 className="absolute bottom-32 left-[20%] w-7 h-7 text-primary/15 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-20 right-[10%] w-5 h-5 text-accent/20 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge with glow effect */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-brand text-white text-sm font-medium shadow-lg glow-primary animate-pulse" style={{ animationDuration: '3s' }}>
            <Sparkles className="w-4 h-4" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
            {t.hero.title}{" "}
            <span className="text-gradient">{t.hero.titleHighlight}</span>
          </h1>

          {/* Description with better styling */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.hero.description}
          </p>

          {/* Stats/trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">500K+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.3s' }} />
              <span className="text-sm text-muted-foreground">15+ Genres</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.6s' }} />
              <span className="text-sm text-muted-foreground">100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
