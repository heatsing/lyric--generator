"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What is Lyrics Into Song and how does it work?",
    answer:
      "Lyrics Into Song turns your written lyrics into a complete track with AI vocals and instrumentals. Paste your lyrics, choose a genre and mood, and the engine generates a full demo you can play, download, and share.",
  },
  {
    question: "How can I get the best results from my lyrics?",
    answer:
      "Use clear structure (verse, chorus, bridge), add a specific mood, and include vivid details or keywords. The more direction you provide, the more tailored the melody, vocal delivery, and arrangement will feel.",
  },
  {
    question: "Is Lyrics Into Song free to use?",
    answer:
      "Yes. You can start converting lyrics without signing up or adding a credit card. Free access is designed for quick demos and exploration.",
  },
  {
    question: "Can I use the generated songs commercially?",
    answer:
      "Songs created on Lyrics Into Song are royalty-free and cleared for personal or commercial use. That means you can publish releases, share on social platforms, or use them in client projects.",
  },
  {
    question: "What genres and styles are supported?",
    answer:
      "We support pop, rock, hip hop, R&B, country, EDM, indie, folk, jazz, and more. Each style adapts the instrumentation, tempo, and vocal tone to match the genre you select.",
  },
  {
    question: "How long does it take to generate a song?",
    answer:
      "Most conversions finish in a few minutes depending on the length of your lyrics and the complexity of the style. You can regenerate at any time to explore new arrangements.",
  },
  {
    question: "Can I edit the lyrics after generation?",
    answer:
      "Absolutely. You can tweak lyrics directly in the editor before regenerating or export them as a text file. Iterating on small changes is the fastest way to dial in the final track.",
  },
  {
    question: "What can I download after the song is ready?",
    answer:
      "You can download the audio as an MP3 as well as your lyrics as a text or image card for sharing.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
        Frequently Asked Questions About Lyrics Into Song
      </h2>
      <p className="text-center text-muted-foreground mb-12 text-pretty leading-relaxed">
        Everything you need to know about turning lyrics into full songs with AI
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold pr-8 text-pretty">{faq.question}</span>
              <ChevronDown
                className={cn("w-5 h-5 text-muted-foreground transition-transform flex-shrink-0", {
                  "transform rotate-180": openIndex === index,
                })}
              />
            </button>
            <div
              className={cn("overflow-hidden transition-all duration-300 ease-in-out", {
                "max-h-0": openIndex !== index,
                "max-h-[1000px]": openIndex === index,
              })}
            >
              <div className="px-6 pb-4 text-muted-foreground leading-relaxed text-pretty">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
