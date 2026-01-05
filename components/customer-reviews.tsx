import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Independent Musician",
    avatar: "SJ",
    rating: 5,
    review:
      "This AI lyrics generator has been a game-changer for my songwriting process. I can quickly generate ideas and refine them into amazing songs. Highly recommended!",
  },
  {
    name: "Marcus Chen",
    role: "Music Producer",
    avatar: "MC",
    rating: 5,
    review:
      "The music generator creates professional-quality beats that I can use in my productions. It's like having a studio assistant available 24/7.",
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator",
    avatar: "ER",
    rating: 5,
    review:
      "I use the song generator for my YouTube videos and podcasts. The quality is incredible and it saves me so much time and money on music licensing!",
  },
  {
    name: "David Kim",
    role: "Songwriter",
    avatar: "DK",
    rating: 5,
    review:
      "As a professional songwriter, I was skeptical at first. But this tool has become essential in my creative workflow. The lyrics are surprisingly good!",
  },
  {
    name: "Lisa Thompson",
    role: "Music Teacher",
    avatar: "LT",
    rating: 5,
    review:
      "I use this with my students to teach song structure and lyric writing. It's an amazing educational tool that makes learning fun and interactive.",
  },
  {
    name: "James Wilson",
    role: "Indie Artist",
    avatar: "JW",
    rating: 5,
    review:
      "The complete song generator is mind-blowing. I've created several tracks that I'm actually releasing. The vocal quality is surprisingly realistic!",
  },
]

export default function CustomerReviews() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Loved by Creators Worldwide</h2>
        <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
          Join thousands of musicians, songwriters, and content creators using our AI tools every day
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="p-6 border border-border">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-primary">{review.avatar}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm">{review.name}</h4>
                <p className="text-xs text-muted-foreground">{review.role}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">{review.review}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10">
          <Star className="w-5 h-5 fill-primary text-primary" />
          <span className="font-semibold">4.9/5</span>
          <span className="text-muted-foreground">from over 10,000+ reviews</span>
        </div>
      </div>
    </div>
  )
}
