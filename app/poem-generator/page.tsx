import PoemGeneratorClient from "./PoemGeneratorClient"
import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lyricgenerator.cc"

export const metadata: Metadata = {
  title: "Free AI Poem Generator | Create Poetry Online Instantly", // 54 chars
  description:
    "Generate beautiful poems with our free AI poem generator. Create haiku, sonnets, free verse & more in seconds. Perfect for poets and students. No signup.", // 156 chars
  keywords: [
    "ai poem generator",
    "free poem generator",
    "poetry generator online",
    "haiku generator",
    "sonnet maker",
    "verse creator",
    "automatic poem writer",
    "poetry writing tool",
    "create poems online",
    "poem maker free",
  ].join(", "),
  openGraph: {
    title: "Free AI Poem Generator | Create Beautiful Poetry Instantly",
    description: "Generate unique poems in seconds. Haiku, sonnets, free verse & more. Free AI tool for poets.",
    type: "website",
    url: `${siteUrl}/poem-generator`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Poem Generator | Create Poetry Online",
    description: "Generate beautiful poems instantly with AI. Free tool for all poetry styles.",
  },
  alternates: {
    canonical: `${siteUrl}/poem-generator`,
  },
}

export default function PoemGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/poem-generator#webpage`,
        url: `${siteUrl}/poem-generator`,
        name: "Free AI Poem Generator | Create Poetry Online Instantly",
        description:
          "Generate beautiful poems with our free AI poem generator. Create haiku, sonnets, free verse & more in seconds.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${siteUrl}/poem-generator#breadcrumb` },
      },
      {
        "@type": "SoftwareApplication",
        name: "AI Poem Generator",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: [
          "Multiple poetry styles",
          "Haiku generator",
          "Sonnet creator",
          "Free verse poetry",
          "Instant generation",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/poem-generator#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Poem Generator", item: `${siteUrl}/poem-generator` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of poems can I generate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can generate haiku, sonnets, free verse, limericks, acrostic poems, and many other poetry styles.",
            },
          },
          {
            "@type": "Question",
            name: "Is the poem generator free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our AI poem generator is completely free with unlimited generations and no signup required.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use generated poems for school assignments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Generated poems are meant for inspiration. We recommend using them as a starting point and adding your own creativity.",
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PoemGeneratorClient />
    </>
  )
}
