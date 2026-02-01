"use client"

import {
  Zap,
  Sparkles,
  Music,
  Globe,
  Shield,
  Infinity,
  Palette,
  Languages,
  Download,
  Wand2
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const bentoItems = [
  {
    id: 1,
    title: "Lightning Fast",
    description: "Generate professional lyrics in under 5 seconds with our advanced AI engine",
    icon: Zap,
    gradient: "from-amber-500 to-orange-600",
    span: "md:col-span-2 md:row-span-1",
    size: "large",
  },
  {
    id: 2,
    title: "15+ Genres",
    description: "Pop, Rock, Rap, R&B, Country, Jazz, K-Pop, and more",
    icon: Music,
    gradient: "from-primary to-accent",
    span: "md:col-span-1 md:row-span-2",
    size: "tall",
  },
  {
    id: 3,
    title: "AI-Powered",
    description: "Advanced language models trained on millions of songs",
    icon: Sparkles,
    gradient: "from-violet-500 to-purple-600",
    span: "md:col-span-1 md:row-span-1",
    size: "normal",
  },
  {
    id: 4,
    title: "Customizable",
    description: "Control mood, theme, keywords, and structure",
    icon: Palette,
    gradient: "from-pink-500 to-rose-600",
    span: "md:col-span-1 md:row-span-1",
    size: "normal",
  },
  {
    id: 5,
    title: "7+ Languages",
    description: "Create lyrics in English, Spanish, French, German, Chinese, Japanese, Korean",
    icon: Languages,
    gradient: "from-emerald-500 to-teal-600",
    span: "md:col-span-1 md:row-span-1",
    size: "normal",
  },
  {
    id: 6,
    title: "100% Free",
    description: "No signup, no credit card, unlimited generations forever",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-600",
    span: "md:col-span-1 md:row-span-1",
    size: "normal",
  },
  {
    id: 7,
    title: "Export Options",
    description: "Copy, download as text, or save as image",
    icon: Download,
    gradient: "from-slate-500 to-slate-700",
    span: "md:col-span-1 md:row-span-1",
    size: "normal",
  },
  {
    id: 8,
    title: "Unlimited Creations",
    description: "Generate as many lyrics as you want, anytime",
    icon: Infinity,
    gradient: "from-indigo-500 to-blue-600",
    span: "md:col-span-2 md:row-span-1",
    size: "large",
  },
]

export function BentoGrid() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
              Everything You Need to <span className="text-gradient">Create Amazing Lyrics</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful AI tools designed for songwriters, musicians, and creators of all levels
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {bentoItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className={`${item.span} group relative rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer`}
                >
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl" />

                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl`} />

                  {/* Content */}
                  <div className="relative h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Text */}
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {item.description}
                    </p>

                    {/* Decorative elements for larger cards */}
                    {item.size === "large" && (
                      <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Icon className="w-24 h-24" />
                      </div>
                    )}
                    {item.size === "tall" && (
                      <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Icon className="w-32 h-32" />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
