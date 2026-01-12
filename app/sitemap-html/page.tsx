import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HTML Sitemap - LyricGenerator.cc",
  description: "Complete sitemap of all lyrics generator pages and tools",
  robots: "index, follow",
}

const seoPages = [
  { slug: "happy-pop-lyrics", title: "Happy Pop Lyrics Generator" },
  { slug: "sad-pop-lyrics", title: "Sad Pop Lyrics Generator" },
  { slug: "romantic-pop-lyrics", title: "Romantic Pop Lyrics Generator" },
  { slug: "energetic-pop-lyrics", title: "Energetic Pop Lyrics Generator" },
  { slug: "happy-rock-lyrics", title: "Happy Rock Lyrics Generator" },
  { slug: "sad-rap-lyrics", title: "Sad Rap Lyrics Generator" },
  { slug: "romantic-rnb-lyrics", title: "Romantic R&B Lyrics Generator" },
  { slug: "energetic-edm-lyrics", title: "Energetic EDM Lyrics Generator" },
  { slug: "party-edm-lyrics", title: "Party EDM Lyrics Generator" },
  { slug: "love-pop-lyrics", title: "Love Pop Lyrics Generator" },
  { slug: "breakup-pop-lyrics", title: "Breakup Pop Lyrics Generator" },
  { slug: "party-rap-lyrics", title: "Party Rap Lyrics Generator" },
  { slug: "inspirational-rock-lyrics", title: "Inspirational Rock Lyrics Generator" },
  { slug: "chill-rnb-lyrics", title: "Chill R&B Lyrics Generator" },
  { slug: "dark-rap-lyrics", title: "Dark Rap Lyrics Generator" },
  { slug: "nostalgic-country-lyrics", title: "Nostalgic Country Lyrics Generator" },
  { slug: "happy-jazz-lyrics", title: "Happy Jazz Lyrics Generator" },
  { slug: "romantic-kpop-lyrics", title: "Romantic K-Pop Lyrics Generator" },
  { slug: "melancholic-folk-lyrics", title: "Melancholic Folk Lyrics Generator" },
  { slug: "angry-metal-lyrics", title: "Angry Metal Lyrics Generator" },
  { slug: "diss-track-lyrics", title: "Diss Track Lyrics Generator" },
  { slug: "love-song-lyrics-for-her", title: "Love Song Lyrics For Her" },
  { slug: "breakup-song-lyrics", title: "Breakup Song Lyrics Generator" },
  { slug: "birthday-song-lyrics", title: "Birthday Song Lyrics Generator" },
  { slug: "christmas-song-lyrics", title: "Christmas Song Lyrics Generator" },
]

const genres = [
  { slug: "rnb", title: "R&B Lyrics Generator" },
  { slug: "rock", title: "Rock Lyrics Generator" },
  { slug: "pop", title: "Pop Lyrics Generator" },
  { slug: "rap", title: "Rap Lyrics Generator" },
  { slug: "elementary-school-songs", title: "Elementary School Songs Generator" },
  { slug: "folk", title: "Folk Lyrics Generator" },
  { slug: "jazz", title: "Jazz Lyrics Generator" },
  { slug: "kpop", title: "K-Pop Lyrics Generator" },
  { slug: "country", title: "Country Lyrics Generator" },
  { slug: "diss-track", title: "Diss Track Lyrics Generator" },
  { slug: "edm", title: "EDM Lyrics Generator" },
  { slug: "reggae", title: "Reggae Lyrics Generator" },
  { slug: "blues", title: "Blues Lyrics Generator" },
  { slug: "metal", title: "Metal Lyrics Generator" },
  { slug: "indie", title: "Indie Lyrics Generator" },
  { slug: "love-song", title: "Love Song Lyrics Generator" },
  { slug: "christmas-song", title: "Christmas Song Lyrics Generator" },
  { slug: "birthday-song", title: "Birthday Song Lyrics Generator" },
]

export default function HtmlSitemap() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Site Map</h1>
        <p className="text-muted-foreground text-center mb-12">
          Browse all available pages and tools on LyricGenerator.cc
        </p>

        <div className="space-y-12">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Main Pages</h2>
            <ul className="grid md:grid-cols-2 gap-2">
              <li>
                <Link href="/" className="text-primary hover:underline">
                  Home - Free AI Lyrics Generator
                </Link>
              </li>
              <li>
                <Link href="/poem-generator" className="text-primary hover:underline">
                  Poem Generator
                </Link>
              </li>
              <li>
                <Link href="/story-generator" className="text-primary hover:underline">
                  Story Generator
                </Link>
              </li>
            </ul>
          </section>

          {/* Genre Pages */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Lyrics by Genre</h2>
            <ul className="grid md:grid-cols-3 gap-2">
              {genres.map((genre) => (
                <li key={genre.slug}>
                  <Link href={`/genre/${genre.slug}`} className="text-primary hover:underline">
                    {genre.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Specialized Generators */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Specialized Generators</h2>
            <ul className="grid md:grid-cols-2 gap-2">
              {seoPages.map((page) => (
                <li key={page.slug}>
                  <Link href={`/generator/${page.slug}`} className="text-primary hover:underline">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Legal Pages */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Legal & Information</h2>
            <ul className="grid md:grid-cols-2 gap-2">
              <li>
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
