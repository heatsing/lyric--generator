import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { GeneratorClient } from "@/components/GeneratorClient"
import { CustomerReviews } from "@/components/customer-reviews"
import { FAQ } from "@/components/faq"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import seoPages from "@/data/seo_pages.json"

export async function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = seoPages.find((p) => p.slug === slug)

  if (!page) {
    return {
      title: "Page Not Found",
    }
  }

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    alternates: {
      canonical: `/generator/${slug}`,
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
    },
  }
}

export default async function GeneratorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = seoPages.find((p) => p.slug === slug)

  if (!page) {
    notFound()
  }

  const genreDescriptions: Record<string, string> = {
    Pop: "Pop music is characterized by catchy melodies, simple chord progressions, and relatable lyrics. Our AI helps you craft pop lyrics and render a full demo.",
    Rap: "Rap lyrics focus on rhythm, wordplay, and storytelling. Craft hard-hitting bars and convert them into a track with vocals.",
    Rock: "Rock music embodies rebellion, energy, and raw emotion. Generate powerful rock lyrics and hear them in a full demo.",
    "R&B":
      "R&B combines soulful vocals with smooth grooves. Create romantic, emotionally rich lyrics and convert them into a smooth demo.",
    EDM: "EDM lyrics are energetic and uplifting, perfect for festival anthems. Generate lyrics and render a demo with electronic instrumentation.",
    Country:
      "Country music tells stories of life, love, and heartache. Create authentic country lyrics and hear a demo with warm instrumentation.",
    Jazz: "Jazz lyrics are sophisticated and poetic, often exploring complex emotions. Generate introspective lyrics and a demo with jazz textures.",
    "K-Pop": "K-Pop blends catchy hooks with dynamic performance. Create lyrics and render an energetic K-Pop demo fast.",
  }

  const genreDescription =
    genreDescriptions[page.preset.genre || ""] ||
    "Our AI-powered lyrics-to-song generator helps you craft lyrics and turn them into playable demos in minutes."

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">{page.h1}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{page.description}</p>
          </div>
        </section>

        {/* Generator Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GeneratorClient preset={page.preset} />
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2>About {page.title}</h2>
            <p>{genreDescription}</p>
            <p>
              Whether you're a professional songwriter, aspiring musician, or creative enthusiast, our{" "}
              {page.title.toLowerCase()} provides instant inspiration and playable demos. Generate
              {page.preset.genre ? ` ${page.preset.genre}` : ""}
              {page.preset.mood ? ` ${page.preset.mood.toLowerCase()}` : ""} lyrics, then convert them into a full song
              that matches your artistic vision.
            </p>

            <h3>Why Use Our {page.title}?</h3>
            <ul>
              <li>
                <strong>AI-Powered Creativity</strong>: Create lyrics and vocal phrasing that match the genre
              </li>
              <li>
                <strong>Fast Rendering</strong>: Generate lyrics and convert them into a demo in minutes
              </li>
              <li>
                <strong>100% Free</strong>: No subscriptions, no hidden fees, unlimited generations
              </li>
              <li>
                <strong>Fully Customizable</strong>: Control genre, mood, theme, length, and language
              </li>
              <li>
                <strong>Studio-Ready Audio</strong>: AI vocals and instrumentals you can share instantly
              </li>
              <li>
                <strong>Royalty Free</strong>: All generated lyrics and songs are yours to use commercially
              </li>
            </ul>

            <h3>How to Create {page.preset.genre || "Perfect"} Lyrics and Songs</h3>
            <ol>
              <li>
                <strong>Set Your Style</strong>: Choose from {page.preset.genre || "various genres"} and customize the
                mood
              </li>
              <li>
                <strong>Define Your Theme</strong>: Add specific topics or keywords to guide the AI
              </li>
              <li>
                <strong>Choose Song Length</strong>: Select short, medium, or long format based on your needs
              </li>
              <li>
                <strong>Generate & Refine</strong>: Create lyrics, then regenerate until the draft feels right
              </li>
              <li>
                <strong>Render & Download</strong>: Convert to a song and download the MP3 and lyrics
              </li>
            </ol>

            {page.preset.genre && (
              <>
                <h3>Tips for Writing Great {page.preset.genre} Lyrics</h3>
                <p>
                  When creating {page.preset.genre.toLowerCase()} lyrics, focus on{" "}
                  {page.preset.genre === "Rap"
                    ? "rhythm, flow, and wordplay. Use internal rhymes and clever metaphors."
                    : page.preset.genre === "Pop"
                      ? "catchy hooks and relatable themes. Keep verses simple and choruses memorable."
                      : page.preset.genre === "Rock"
                        ? "powerful imagery and emotional intensity. Build energy through strong verbs."
                        : page.preset.genre === "R&B"
                          ? "emotional depth and smooth phrasing. Focus on love, relationships, and personal experiences."
                          : "authentic expression and genre-appropriate language."}
                </p>
              </>
            )}
          </div>
        </section>

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* FAQ */}
        <FAQ />

        {/* Related Generators */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Generators</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {seoPages.slice(0, 12).map((relatedPage) => (
                <Link
                  key={relatedPage.id}
                  href={`/generator/${relatedPage.slug}`}
                  className="p-4 bg-card rounded-lg hover:shadow-md transition-shadow text-center"
                >
                  <span className="text-sm font-medium">{relatedPage.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
