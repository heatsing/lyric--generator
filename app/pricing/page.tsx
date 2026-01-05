import { Music, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Pricing Plans - AI Lyrics & Music Generator | Affordable AI Music Tools",
  description:
    "Choose the perfect plan for your music creation needs. Free and premium options available for lyrics, music, and song generation with AI.",
  keywords: "ai music pricing, lyrics generator cost, song generator plans, music creation subscription",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Music className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-balance">AI Lyrics Generator</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Lyrics Generator
            </Link>
            <Link
              href="/music-generator"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Music Generator
            </Link>
            <Link
              href="/song-generator"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Song Generator
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/login">
              <Button size="sm">Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Choose Your <span className="text-primary">Perfect Plan</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Start creating amazing music content today. Upgrade anytime as your needs grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="p-6 border-2 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfect for trying out our AI tools</p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">5 lyrics generations per day</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic music genres</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Standard quality output</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Download as text</span>
                </li>
              </ul>

              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full bg-transparent">
                  Get Started Free
                </Button>
              </Link>
            </Card>

            {/* Pro Plan */}
            <Card className="p-6 border-2 border-primary flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">For serious creators and musicians</p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited lyrics generations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">100 music tracks per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">50 complete songs per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">High-quality audio exports</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All genres and voice types</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Commercial use license</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority generation speed</span>
                </li>
              </ul>

              <Link href="/login" className="w-full">
                <Button className="w-full">Upgrade to Pro</Button>
              </Link>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-6 border-2 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">For teams and studios</p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom voice training</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Team collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom integrations</span>
                </li>
              </ul>

              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Sales
                </Button>
              </Link>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              All plans include a 7-day free trial. Cancel anytime. No credit card required for free plan.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} AI Lyrics Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
