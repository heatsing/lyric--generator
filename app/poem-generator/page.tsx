import PoemGeneratorClient from "./PoemGeneratorClient"

export const metadata = {
  title: "Free AI Poem Generator - Create Beautiful Poetry Instantly | Automatic Poem Maker 2025",
  description:
    "Generate unique poems with our free AI poem generator. Create haiku, sonnets, free verse & more in seconds. Perfect for poets, students, and creative writers. No sign-up required.",
  keywords:
    "ai poem generator, poetry generator free, automatic poem maker, haiku generator, sonnet generator, verse creator, poetry writing tool, ai poetry, poem creator online",
  openGraph: {
    title: "Free AI Poem Generator - Create Beautiful Poetry Instantly",
    description: "Generate professional poems in seconds with AI. Free tool for all poetry styles.",
    type: "website",
  },
}

export default function PoemGeneratorPage() {
  return <PoemGeneratorClient />
}
