"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What is an AI Lyrics Generator and How Does It Work?",
    answer:
      "An AI lyrics generator is a sophisticated tool that uses artificial intelligence and natural language processing to create original song lyrics. Our generator analyzes thousands of successful songs across different genres to understand patterns, rhyme schemes, and lyrical structures. Simply input your preferences for genre, mood, theme, and any keywords, and the AI will instantly generate unique, creative lyrics tailored to your specifications. The technology behind it uses advanced machine learning models trained on diverse musical styles to ensure authenticity and creativity in every generation.",
  },
  {
    question: "Is the AI Lyrics Generator Completely Free?",
    answer:
      "Yes! Our AI lyrics generator is 100% free to use with no hidden costs or subscriptions required. You can generate unlimited lyrics for any genre, mood, or theme without creating an account or providing payment information. We believe in democratizing creativity and making songwriting tools accessible to everyone - from professional musicians to hobbyists and students. All generated lyrics are yours to use freely for personal or commercial projects.",
  },
  {
    question: "Can I Use Generated Lyrics for Commercial Music Projects?",
    answer:
      "All lyrics created by our AI generator are 100% original and copyright-free. You have full rights to use them for any purpose including recording songs, live performances, YouTube videos, streaming platforms, commercial releases, and more. No attribution is required, though we always appreciate it. The AI creates unique content every time, ensuring your lyrics are completely original and won't conflict with existing copyrighted material.",
  },
  {
    question: "What Music Genres and Styles Are Supported?",
    answer:
      "Our AI supports 15+ music genres including Pop, Rock, Hip Hop/Rap, R&B, Country, Jazz, Blues, EDM, Folk, Metal, Indie, Reggae, K-Pop, and more. Each genre is optimized with specific lyrical patterns, vocabulary, and themes authentic to that style. Whether you need catchy pop hooks, introspective indie lyrics, hard-hitting rap verses, or soulful R&B ballads, our AI understands the nuances of each genre and creates lyrics that sound professional and genre-appropriate.",
  },
  {
    question: "How Long Does It Take to Generate Lyrics?",
    answer:
      "Lyrics generation is instant! Our advanced AI typically generates complete, professional-quality lyrics in 3-10 seconds depending on your specified length and complexity. There's no waiting list, no processing delays - just immediate results. You can regenerate as many times as you want to explore different creative directions, making it perfect for brainstorming sessions or when you need quick inspiration.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
      {/* Left side - Description */}
      <div className="lg:sticky lg:top-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Everything you need to know about creating professional song lyrics with our free AI-powered generator. Get
          instant answers about features, usage rights, supported genres, and more.
        </p>
        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-sm font-semibold mb-2">Still have questions?</p>
          <p className="text-sm text-muted-foreground">
            Our AI lyrics generator is designed to be intuitive and powerful. Browse the questions to learn more about
            how it works.
          </p>
        </div>
      </div>

      {/* Right side - FAQ accordion */}
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
