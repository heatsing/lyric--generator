import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Independent Musician",
    avatar: "SJ",
    rating: 5,
    review:
      "Lyrics Into Song helps me turn rough drafts into full demos fast. I can share playable songs with my band in minutes.",
  },
  {
    name: "Marcus Chen",
    role: "Music Producer",
    avatar: "MC",
    rating: 5,
    review:
      "The vocal and instrumental blend is impressive. I use it to pitch arrangements before going into the studio.",
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator",
    avatar: "ER",
    rating: 5,
    review:
      "I drop my lyrics in, pick a genre, and get a song for reels and shorts. It saves me hours every week.",
  },
  {
    name: "David Kim",
    role: "Songwriter",
    avatar: "DK",
    rating: 5,
    review:
      "Being able to hear my lyrics sung out loud changes everything. The demos are clean and ready to share.",
  },
  {
    name: "Lisa Thompson",
    role: "Music Teacher",
    avatar: "LT",
    rating: 5,
    review:
      "My students love hearing their own lyrics turned into songs. It's a fun way to teach structure and rhythm.",
  },
  {
    name: "James Wilson",
    role: "Indie Artist",
    avatar: "JW",
    rating: 5,
    review:
      "I can explore different styles quickly. The AI vocals give me a clear direction before recording final takes.",
  },
]

export function CustomerReviews() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Trusted by Songwriters & Creators</h2>
        <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
          Lyrics Into Song powers demos, releases, and social content for creators around the world
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

export default CustomerReviews
