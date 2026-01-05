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
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>About {page.title}</h2>
            <p>
              Our AI-powered {page.title.toLowerCase()} helps you create professional, creative, and unique lyrics in
              seconds. Whether you're a songwriter, musician, or just exploring your creativity, our tool makes it easy
              to generate
              {page.preset.genre ? ` ${page.preset.genre}` : ""}
              {page.preset.mood ? ` ${page.preset.mood.toLowerCase()}` : ""} lyrics that match your vision.
            </p>

            <h3>Why Use Our {page.title}?</h3>
            <ul>
              <li>
                <strong>AI-Powered</strong>: Advanced AI technology creates authentic lyrics
              </li>
              <li>
                <strong>Instant Results</strong>: Generate complete lyrics in seconds
              </li>
              <li>
                <strong>100% Free</strong>: No hidden costs or subscriptions required
              </li>
              <li>
                <strong>Unlimited Use</strong>: Create as many lyrics as you need
              </li>
              <li>
                <strong>Customizable</strong>: Adjust genre, mood, theme, and more
              </li>
            </ul>

            <h3>How to Use {page.title}</h3>
            <ol>
              <li>Choose your preferred genre and mood</li>
              <li>Add a theme or specific topic (optional)</li>
              <li>Click "Generate" to create your lyrics</li>
              <li>Copy, download, or regenerate as needed</li>
            </ol>
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
