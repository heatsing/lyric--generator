"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useState } from "react"
import { Logo, LogoCompact } from "@/components/Logo"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/95">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          {/* Desktop logo */}
          <div className="hidden sm:block">
            <Logo />
          </div>
          {/* Mobile logo - more compact */}
          <div className="block sm:hidden">
            <LogoCompact />
          </div>
        </Link>

        {/* Desktop Navigation */}
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
          <ThemeToggle />
          <Link href="/login">
            <Button size="sm">Login</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-base font-medium text-foreground py-2 min-h-[44px] flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lyric Generator
            </Link>
            <Link
              href="/poem-generator"
              className="text-base text-muted-foreground hover:text-foreground py-2 min-h-[44px] flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Poem Generator
            </Link>
            <Link
              href="/story-generator"
              className="text-base text-muted-foreground hover:text-foreground py-2 min-h-[44px] flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Short Story Generator
            </Link>
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <div className="py-2">
              <ThemeToggle />
            </div>
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg" className="w-full min-h-[44px]">
                Login
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
