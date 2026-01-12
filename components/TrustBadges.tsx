"use client"

import { Check, Shield, Zap, Globe, Star } from "lucide-react"

export function TrustBadges() {
  const badges = [
    { icon: Zap, text: "Fast Song Render", color: "text-yellow-600" },
    { icon: Shield, text: "Royalty-Free", color: "text-blue-600" },
    { icon: Globe, text: "Multi-Language", color: "text-green-600" },
    { icon: Star, text: "AI Vocals + Music", color: "text-purple-600" },
    { icon: Check, text: "No Sign-up", color: "text-pink-600" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-6">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-full border border-border/50">
          <badge.icon className={`h-4 w-4 ${badge.color}`} />
          <span className="text-sm font-medium text-foreground/90">{badge.text}</span>
        </div>
      ))}
    </div>
  )
}
