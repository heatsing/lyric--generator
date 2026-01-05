import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

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

  const genrePages = genres.map((slug) => ({
    url: `${baseUrl}/genre/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const popularGenerators = [
    "happy-pop-lyrics",
    "sad-rap-lyrics",
    "romantic-rnb-lyrics",
    "energetic-rock-lyrics",
    "love-pop-lyrics",
    "breakup-country-lyrics",
    "party-edm-lyrics",
    "diss-track-lyrics",
    "birthday-song-lyrics",
    "christmas-song-lyrics",
    "trap-beat-lyrics",
    "motivational-song-lyrics",
    "melancholic-indie-lyrics",
    "angry-metal-lyrics",
    "chill-jazz-lyrics",
    "nostalgic-folk-lyrics",
  ]

  const generatorPages = popularGenerators.map((slug) => ({
    url: `${baseUrl}/generator/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  let dynamicGeneratorPages: MetadataRoute.Sitemap = []
  try {
    // This will be populated when seo_pages.json is generated
    const seoPages = require("@/data/seo_pages.json")
    dynamicGeneratorPages = seoPages.slice(0, 100).map((page: any) => ({
      url: `${baseUrl}/generator/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }))
  } catch (error) {
    // JSON file not yet generated, use manual list above
    console.log("SEO pages JSON not found, using manual generator list")
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/poem-generator`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/story-generator`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...genrePages,
    ...(dynamicGeneratorPages.length > 0 ? dynamicGeneratorPages : generatorPages),
  ]
}
