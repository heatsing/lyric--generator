"use client"

import { Zap, Sparkles, Music } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="features" className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t.features.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t.features.fast}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.features.fastDesc}</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t.features.customizable}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.features.customizableDesc}</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Music className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t.features.original}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.features.originalDesc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
