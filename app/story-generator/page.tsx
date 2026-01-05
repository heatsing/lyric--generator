import StoryGeneratorClient from "./StoryGeneratorClient"

export const metadata = {
  title: "Free AI Short Story Generator - Create Creative Stories Instantly | Story Writer Tool 2025",
  description:
    "Generate unique short stories with our free AI story generator. Create fiction, fantasy, romance & more in seconds. Perfect for writers, students, and storytellers. No sign-up required.",
  keywords:
    "ai story generator, short story generator free, creative writing tool, fiction generator, story maker, narrative creator, ai writing assistant, story writer online",
  openGraph: {
    title: "Free AI Short Story Generator - Create Stories Instantly",
    description: "Generate professional short stories in seconds with AI. Free tool for all genres.",
    type: "website",
  },
}

export default function StoryGeneratorPage() {
  return <StoryGeneratorClient />
}
