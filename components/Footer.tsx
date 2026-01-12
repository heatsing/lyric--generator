"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Lyrics Into Song</h3>
            <p className="text-sm text-muted-foreground">
              Turn your lyrics into full songs with AI vocals and instrumentals in minutes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Generators</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lyrics to Song
                </Link>
              </li>
              <li>
                <Link href="/poem-generator" className="text-muted-foreground hover:text-foreground transition-colors">
                  Poem Generator
                </Link>
              </li>
              <li>
                <Link href="/story-generator" className="text-muted-foreground hover:text-foreground transition-colors">
                  Story Generator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Popular Genres</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/generator/happy-pop-lyrics"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pop Lyrics
                </Link>
              </li>
              <li>
                <Link
                  href="/generator/sad-rap-lyrics"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Rap Lyrics
                </Link>
              </li>
              <li>
                <Link
                  href="/generator/romantic-rnb-lyrics"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  R&B Lyrics
                </Link>
              </li>
              <li>
                <Link
                  href="/generator/energetic-rock-lyrics"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Rock Lyrics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lyrics Into Song. All rights reserved.</p>
          <p className="mt-2">
            Every song you create is royalty-free and ready for personal or commercial projects.
          </p>
        </div>
      </div>
    </footer>
  )
}
