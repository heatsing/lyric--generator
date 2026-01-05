import type { MetadataRoute } from "next"
import { readFileSync } from "fs"
import { join } from "path"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lyricgenerator.cc"

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

  let dynamicGeneratorPages: MetadataRoute.Sitemap = []
  try {
    const filePath = join(process.cwd(), "data", "seo_pages.json")
    const fileContent = readFileSync(filePath, "utf-8")
    const seoPages = JSON.parse(fileContent)

    dynamicGeneratorPages = seoPages.map((page: any) => ({
      url: `${baseUrl}/generator/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }))
  } catch (error) {
    console.error("Error loading SEO pages:", error)
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
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...genrePages,
    ...dynamicGeneratorPages,
  ]
}
