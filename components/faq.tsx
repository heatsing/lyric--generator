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
  {
    question: "What Languages Does the Generator Support?",
    answer:
      "Our AI lyrics generator supports multiple languages including English, Spanish, French, German, Italian, Portuguese, Japanese, Korean, Chinese (Simplified and Traditional), and more. The AI understands the linguistic nuances, cultural references, and idiomatic expressions of each language, ensuring lyrics feel natural and authentic rather than simply translated. This makes it perfect for international artists or anyone looking to create multilingual content.",
  },
  {
    question: "Can I Edit and Customize the Generated Lyrics?",
    answer:
      "Yes! All generated lyrics are fully editable. Once created, you can modify any line, add your own verses, adjust rhyme schemes, or combine elements from multiple generations. The output panel functions as a text editor where you can refine the lyrics to perfectly match your artistic vision. You can also copy, download, or regenerate with different parameters to explore various creative possibilities.",
  },
  {
    question: "Do I Need an Account or Sign Up to Use the Generator?",
    answer:
      "No account or registration is required! You can start generating lyrics immediately without providing any personal information, email address, or credit card details. Simply visit the website, fill in your preferences, and click generate. However, creating a free optional account allows you to save your favorite generations, access history, and unlock additional premium features in the future.",
  },
  {
    question: "What Makes This Generator Better Than Other Lyrics Tools?",
    answer:
      "Our generator stands out with state-of-the-art AI technology that creates contextually aware, emotionally resonant lyrics rather than random word combinations. We offer extensive customization options (genre, mood, theme, length, language), support for 15+ musical genres, multi-language capabilities, instant generation speeds, and a user-friendly interface. Unlike basic rhyme generators, our AI understands song structure, storytelling, and emotional depth, producing lyrics that feel professionally written and ready to use.",
  },
  {
    question: "Are There Any Limitations on How Many Lyrics I Can Generate?",
    answer:
      "There are no limits! Generate as many lyrics as you need - whether that's 5, 50, or 500. Experiment with different genres, moods, and themes until you find the perfect lyrics for your song. Our service is designed to support your creative process without restrictions, quotas, or daily limits. Feel free to use the generator as much as you need for all your songwriting projects.",
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
        Frequently Asked Questions About AI Lyrics Generation
      </h2>
      <p className="text-center text-muted-foreground mb-12 text-pretty leading-relaxed">
        Everything you need to know about creating professional song lyrics with artificial intelligence
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
