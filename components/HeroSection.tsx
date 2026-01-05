"use client"

import { Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="container mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>{t.hero.badge}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-tight">
          {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          {t.hero.description}
        </p>
      </div>
    </section>
  )
}
