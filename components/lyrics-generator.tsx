"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Copy, RotateCw, Download, Loader2, Music2, Play, Pause, Volume2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"

const GENRES = [
  "Pop",
  "Rock",
  "Hip Hop",
  "R&B",
  "Country",
  "Jazz",
  "Electronic",
  "Folk",
  "Metal",
  "Indie",
  "Blues",
  "Reggae",
  "Classical",
  "Latin",
  "K-Pop",
]

const MOODS = [
  "Happy",
  "Sad",
  "Energetic",
  "Calm",
  "Romantic",
  "Angry",
  "Melancholic",
  "Uplifting",
  "Dark",
  "Nostalgic",
  "Playful",
  "Intense",
  "Peaceful",
  "Mysterious",
]

const THEMES = [
  "Love",
  "Heartbreak",
  "Party",
  "Success",
  "Struggle",
  "Dreams",
  "Freedom",
  "Friendship",
  "Nature",
  "Life",
  "Hope",
  "Loss",
  "Adventure",
  "Motivation",
  "Reflection",
]

const LENGTHS = [
  { value: "short", label: "Short (1 verse + chorus)" },
  { value: "medium", label: "Medium (2 verses + chorus)" },
  { value: "long", label: "Long (3 verses + chorus + bridge)" },
]

export default function LyricsGenerator() {
  const [genre, setGenre] = useState("Pop")
  const [mood, setMood] = useState("Happy")
  const [theme, setTheme] = useState("Love")
  const [topic, setTopic] = useState("")
  const [length, setLength] = useState("medium")
  const [language, setLanguage] = useState("English")
  const [lyrics, setLyrics] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [audioUrl, setAudioUrl] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isConverting, setIsConverting] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const { toast } = useToast()
  const { t } = useLanguage()

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleEnded = () => setIsPlaying(false)
      audio.addEventListener("ended", handleEnded)
      return () => audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  const handleGenerate = async () => {
    setIsGenerating(true)
    setLyrics("")
    setAudioUrl("")

    try {
      const response = await fetch("/api/generate-lyrics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          genre,
          mood,
          theme,
          topic,
          length,
          language,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate lyrics")
      }

      const data = await response.json()
      setLyrics(data.lyrics)

      toast({
        title: "Success!",
        description: "Your lyrics have been generated.",
      })
    } catch (error) {
      console.error("[v0] Error generating lyrics:", error)
      toast({
        title: "Error",
        description: "Failed to generate lyrics. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleConvertToSong = async () => {
    if (!lyrics) return

    setIsConverting(true)
    try {
      const response = await fetch("/api/lyrics-to-song", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lyrics,
          genre,
          mood,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to convert to song")
      }

      const data = await response.json()
      setAudioUrl(data.audioUrl)

      toast({
        title: "Song Created!",
        description: "Your lyrics have been converted to a complete song.",
      })
    } catch (error) {
      console.error("[v0] Error converting to song:", error)
      toast({
        title: "Error",
        description: "Failed to convert lyrics to song. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsConverting(false)
    }
  }

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleDownloadAudio = () => {
    if (!audioUrl) return

    const a = document.createElement("a")
    a.href = audioUrl
    a.download = `song-${Date.now()}.mp3`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    toast({
      title: "Downloaded!",
      description: "Song saved to your device.",
    })
  }

  const handleCopy = async () => {
    if (!lyrics) return

    try {
      await navigator.clipboard.writeText(lyrics)
      toast({
        title: "Copied!",
        description: "Lyrics copied to clipboard.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy lyrics.",
        variant: "destructive",
      })
    }
  }

  const handleDownload = () => {
    if (!lyrics) return

    const blob = new Blob([lyrics], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `lyrics-${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Downloaded!",
      description: "Lyrics saved to your device.",
    })
  }

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
      {/* Left Panel - Input Form */}
      <Card className="p-6 space-y-6 border-2">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-balance">{t.generator.customize}</h2>
          <p className="text-sm text-muted-foreground text-pretty">{t.generator.customizeDesc}</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="genre">{t.generator.genre}</Label>
            <Select value={genre} onValueChange={setGenre}>
              <SelectTrigger id="genre">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {GENRES.map((g) => (
                  <SelectItem key={g} value={g}>
                    {g}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mood">{t.generator.mood}</Label>
            <Select value={mood} onValueChange={setMood}>
              <SelectTrigger id="mood">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {MOODS.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="theme">{t.generator.theme}</Label>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger id="theme">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {THEMES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic">{t.generator.topic}</Label>
            <Input
              id="topic"
              placeholder={t.generator.topicPlaceholder}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="length">{t.generator.length}</Label>
            <Select value={length} onValueChange={setLength}>
              <SelectTrigger id="length">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {LENGTHS.map((l) => (
                  <SelectItem key={l.value} value={l.value}>
                    {l.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">{t.generator.language}</Label>
            <Input id="language" placeholder="English" value={language} onChange={(e) => setLanguage(e.target.value)} />
          </div>
        </div>

        <Button onClick={handleGenerate} disabled={isGenerating} className="w-full" size="lg">
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              {t.generator.generating}
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              {t.generator.generate}
            </>
          )}
        </Button>
      </Card>

      {/* Right Panel - Generated Lyrics */}
      <Card className="p-6 space-y-4 border-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-balance">{t.generator.yourLyrics}</h2>
          {lyrics && (
            <div className="flex gap-2">
              <Button onClick={handleCopy} variant="outline" size="sm">
                <Copy className="w-4 h-4" />
                <span className="sr-only">Copy lyrics</span>
              </Button>
              <Button onClick={handleDownload} variant="outline" size="sm">
                <Download className="w-4 h-4" />
                <span className="sr-only">Download lyrics</span>
              </Button>
              <Button onClick={handleGenerate} variant="outline" size="sm" disabled={isGenerating}>
                <RotateCw className="w-4 h-4" />
                <span className="sr-only">Regenerate lyrics</span>
              </Button>
            </div>
          )}
        </div>

        <div className="min-h-[500px]">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center h-full py-16">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="text-muted-foreground text-center">{t.generator.creating}</p>
            </div>
          ) : lyrics ? (
            <div className="space-y-4">
              <Textarea
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
                className="min-h-[350px] font-mono text-sm leading-relaxed resize-none"
                placeholder="Your generated lyrics will appear here..."
              />

              <div className="space-y-3">
                {!audioUrl ? (
                  <Button
                    onClick={handleConvertToSong}
                    disabled={isConverting}
                    className="w-full"
                    size="lg"
                    variant="secondary"
                  >
                    {isConverting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Converting to Song...
                      </>
                    ) : (
                      <>
                        <Music2 className="w-5 h-5 mr-2" />
                        Convert Lyrics to Song
                      </>
                    )}
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-border/50">
                      <div className="flex items-center gap-4">
                        <Button onClick={togglePlayPause} size="lg" className="w-14 h-14 rounded-full flex-shrink-0">
                          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                        </Button>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Volume2 className="w-4 h-4 text-muted-foreground" />
                            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all duration-300"
                                style={{ width: isPlaying ? "60%" : "0%" }}
                              />
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {genre} • {mood} • AI Generated Song
                          </p>
                        </div>

                        <Button onClick={handleDownloadAudio} variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>

                    <Button
                      onClick={handleConvertToSong}
                      disabled={isConverting}
                      variant="outline"
                      className="w-full bg-transparent"
                    >
                      <RotateCw className="w-4 h-4 mr-2" />
                      Regenerate Song
                    </Button>

                    <audio ref={audioRef} src={audioUrl} className="hidden" />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <Music2 className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground text-balance">{t.generator.createPrompt}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

function Music({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}
