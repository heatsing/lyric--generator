"use client"

import { Users, TrendingUp, Music, Globe2 } from "lucide-react"

export function SocialProof() {
  const stats = [
    { icon: Users, value: "500K+", label: "Active Users", color: "text-blue-600" },
    { icon: Music, value: "2M+", label: "Lyrics Generated", color: "text-purple-600" },
    { icon: Globe2, value: "150+", label: "Countries", color: "text-green-600" },
    { icon: TrendingUp, value: "4.8/5", label: "User Rating", color: "text-yellow-600" },
  ]

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border-2 border-border">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
