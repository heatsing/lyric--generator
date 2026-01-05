"use client"

import Link from "next/link"
import { Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  return (
    <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Music className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-balance">AI Lyrics Generator</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors">
            Lyric Generator
          </Link>
          <Link
            href="/poem-generator"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Poem Generator
          </Link>
          <Link
            href="/story-generator"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Short Story Generator
          </Link>
          <LanguageSwitcher />
          <Link href="/login">
            <Button size="sm">Login</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
