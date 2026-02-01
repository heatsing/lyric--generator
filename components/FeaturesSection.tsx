"use client"

import { Zap, Sparkles, Music, Globe, Shield, Infinity } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const features = [
  {
    icon: Zap,
    colorClass: "bg-gradient-to-br from-amber-500 to-orange-600",
    iconColor: "text-white",
    key: "fast",
    delay: "0ms",
  },
  {
    icon: Sparkles,
    colorClass: "bg-gradient-to-br from-primary to-accent",
    iconColor: "text-white",
    key: "customizable",
    delay: "100ms",
  },
  {
    icon: Music,
    colorClass: "bg-gradient-to-br from-emerald-500 to-teal-600",
    iconColor: "text-white",
    key: "original",
    delay: "200ms",
  },
]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="features" className="relative py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
              {t.features.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powered by advanced AI to help you create professional lyrics in seconds
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const featureKey = feature.key as keyof typeof t.features
              return (
                <div
                  key={feature.key}
                  className="group relative bg-card rounded-2xl p-8 border border-border/50 shadow-soft card-hover"
                  style={{ animationDelay: feature.delay }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Icon container with gradient */}
                    <div className={`w-14 h-14 rounded-xl ${feature.colorClass} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                    </div>

                    {/* Feature number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {t.features[featureKey]}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t.features[`${featureKey}Desc` as keyof typeof t.features]}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Globe, label: "7+ Languages", value: "Supported" },
              { icon: Shield, label: "100%", value: "Free & Secure" },
              { icon: Infinity, label: "Unlimited", value: "Generations" },
              { icon: Zap, label: "<5 sec", value: "Generation Time" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="font-bold text-lg">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
