import StoryGeneratorClient from "./StoryGeneratorClient"
import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lyricgenerator.cc"

export const metadata: Metadata = {
  title: "Free AI Story Generator | Create Short Stories Online", // 53 chars
  description:
    "Generate unique short stories with our free AI story generator. Create fiction, fantasy, romance & more instantly. Perfect for writers. No signup required.", // 158 chars
  keywords: [
    "ai story generator",
    "free story generator",
    "short story creator",
    "fiction generator online",
    "story maker free",
    "creative writing tool",
    "narrative generator",
    "story writer ai",
    "automatic story creator",
    "generate stories online",
  ].join(", "),
  openGraph: {
    title: "Free AI Story Generator | Create Short Stories Instantly",
    description:
      "Generate unique short stories in seconds. Fiction, fantasy, romance & more. Free AI tool for writers.",
    type: "website",
    url: `${siteUrl}/story-generator`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Story Generator | Create Stories Online",
    description: "Generate creative short stories instantly with AI. Free tool for all genres.",
  },
  alternates: {
    canonical: `${siteUrl}/story-generator`,
  },
}

export default function StoryGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/story-generator#webpage`,
        url: `${siteUrl}/story-generator`,
        name: "Free AI Story Generator | Create Short Stories Online",
        description:
          "Generate unique short stories with our free AI story generator. Create fiction, fantasy, romance & more instantly.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${siteUrl}/story-generator#breadcrumb` },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI Story Generator",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: [
          "Multiple story genres",
          "Fiction generator",
          "Fantasy stories",
          "Romance narratives",
          "Instant generation",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/story-generator#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Story Generator", item: `${siteUrl}/story-generator` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of stories can I generate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can generate fiction, fantasy, romance, mystery, sci-fi, horror, and many other story genres.",
            },
          },
          {
            "@type": "Question",
            name: "How long are the generated stories?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Story length varies from short flash fiction (100-300 words) to longer narratives (500-1000+ words) based on your settings.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use generated stories commercially?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, generated stories are original and can be used commercially. We recommend editing and personalizing before publication.",
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StoryGeneratorClient />
    </>
  )
}
