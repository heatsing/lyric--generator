import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://lyricgenerator.cc"
  const currentDate = new Date().toISOString()

  const genres = [
    "rnb",
    "rock",
    "pop",
    "rap",
    "elementary-school-songs",
    "folk",
    "jazz",
    "kpop",
    "country",
    "diss-track",
    "edm",
    "reggae",
    "blues",
    "metal",
    "indie",
    "love-song",
    "christmas-song",
    "birthday-song",
  ]

  const seoPages = [
    "happy-pop-lyrics",
    "sad-pop-lyrics",
    "romantic-pop-lyrics",
    "energetic-pop-lyrics",
    "happy-rock-lyrics",
    "sad-rap-lyrics",
    "romantic-rnb-lyrics",
    "energetic-edm-lyrics",
    "party-edm-lyrics",
    "love-pop-lyrics",
    "breakup-pop-lyrics",
    "party-rap-lyrics",
    "inspirational-rock-lyrics",
    "chill-rnb-lyrics",
    "dark-rap-lyrics",
    "nostalgic-country-lyrics",
    "happy-jazz-lyrics",
    "romantic-kpop-lyrics",
    "melancholic-folk-lyrics",
    "angry-metal-lyrics",
    "diss-track-lyrics",
    "love-song-lyrics-for-her",
    "breakup-song-lyrics",
    "birthday-song-lyrics",
    "christmas-song-lyrics",
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/poem-generator</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/story-generator</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  ${genres
    .map(
      (slug) => `
  <url>
    <loc>${baseUrl}/genre/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("")}
  ${seoPages
    .map(
      (slug) => `
  <url>
    <loc>${baseUrl}/generator/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`,
    )
    .join("")}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
