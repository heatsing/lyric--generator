"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Download, RotateCw, Loader2, Play, Pause, Music } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const GENRES = [
  "Pop",
  "Rock",
  "Hip Hop",
  "R&B",
  "Country",
  "Electronic",
  "Jazz",
  "Folk",
  "Metal",
  "Indie",
  "K-Pop",
  "Latin",
]

const VOICE_TYPES = [
  "Male - Low",
  "Male - Mid",
  "Male - High",
  "Female - Low",
  "Female - Mid",
  "Female - High",
  "Choir",
  "Rap",
]

const SONG_STRUCTURES = [
  { value: "simple", label: "Simple (Verse-Chorus-Verse-Chorus)" },
  { value: "standard", label: "Standard (Verse-Chorus-Verse-Chorus-Bridge-Chorus)" },
  { value: "extended", label: "Extended (Intro-Verse-Chorus-Verse-Chorus-Bridge-Chorus-Outro)" },
]

export default function SongGenerator() {
  const [genre, setGenre] = useState("Pop")
  const [voiceType, setVoiceType] = useState("Female - Mid")
  const [structure, setStructure] = useState("standard")
  const [title, setTitle] = useState("")
  const [theme, setTheme] = useState("")
  const [lyrics, setLyrics] = useState("")
  const [songUrl, setSongUrl] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const { toast } = useToast()

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
    setSongUrl("")
    setIsPlaying(false)

    try {
      const response = await fetch("/api/generate-song", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          genre,
          voiceType,
          structure,
          title,
          theme,
          lyrics,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate song")
      }

      const data = await response.json()
      setSongUrl(data.audioUrl)

      toast({
        title: "Success!",
        description: "Your complete song has been generated.",
      })
    } catch (error) {
      console.error("[v0] Error generating song:", error)
      toast({
        title: "Error",
        description: "Failed to generate song. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (!songUrl) return

    toast({
      title: "Downloaded!",
      description: "Complete song saved to your device.",
    })
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

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
      {/* Left Panel - Input Form */}
      <Card className="p-6 space-y-6 border-2">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-balance">Create Your Song</h2>
          <p className="text-sm text-muted-foreground text-pretty">
            Design every aspect of your complete song with vocals and music
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Song Title (Optional)</Label>
            <Input
              id="title"
              placeholder="Enter your song title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="genre">Genre</Label>
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
            <Label htmlFor="voiceType">Voice Type</Label>
            <Select value={voiceType} onValueChange={setVoiceType}>
              <SelectTrigger id="voiceType">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {VOICE_TYPES.map((v) => (
                  <SelectItem key={v} value={v}>
                    {v}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="structure">Song Structure</Label>
            <Select value={structure} onValueChange={setStructure}>
              <SelectTrigger id="structure">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SONG_STRUCTURES.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="theme">Theme / Topic</Label>
            <Input
              id="theme"
              placeholder="e.g., summer love, overcoming challenges..."
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lyrics">Custom Lyrics (Optional)</Label>
            <Textarea
              id="lyrics"
              placeholder="Paste your lyrics here, or leave empty to generate new lyrics..."
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              rows={6}
            />
            <p className="text-xs text-muted-foreground">Leave empty to auto-generate lyrics based on your theme</p>
          </div>
        </div>

        <Button onClick={handleGenerate} disabled={isGenerating} className="w-full" size="lg">
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Generating Complete Song...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Complete Song
            </>
          )}
        </Button>
      </Card>

      {/* Right Panel - Generated Song */}
      <Card className="p-6 space-y-4 border-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-balance">Your Complete Song</h2>
          {songUrl && (
            <div className="flex gap-2">
              <Button onClick={handleDownload} variant="outline" size="sm">
                <Download className="w-4 h-4" />
                <span className="sr-only">Download song</span>
              </Button>
              <Button onClick={handleGenerate} variant="outline" size="sm" disabled={isGenerating}>
                <RotateCw className="w-4 h-4" />
                <span className="sr-only">Regenerate song</span>
              </Button>
            </div>
          )}
        </div>

        <div className="min-h-[500px] flex flex-col items-center justify-center">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="text-muted-foreground text-center font-medium">Creating your complete song...</p>
              <p className="text-sm text-muted-foreground/70 text-center mt-2">
                Generating vocals, music, and mixing everything together
              </p>
              <div className="mt-6 space-y-2 text-xs text-muted-foreground/60 text-center">
                <p>Step 1: Generating lyrics...</p>
                <p>Step 2: Creating instrumental track...</p>
                <p>Step 3: Recording AI vocals...</p>
                <p>Step 4: Mixing and mastering...</p>
              </div>
            </div>
          ) : songUrl ? (
            <div className="w-full space-y-6">
              {/* Song Player */}
              <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-lg p-8 border border-border/50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{title || "Untitled Song"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {genre} • {voiceType}
                  </p>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <Button onClick={togglePlayPause} size="lg" className="w-20 h-20 rounded-full">
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </Button>
                </div>

                {/* Animated Equalizer */}
                <div className="flex items-end justify-center gap-2 h-24">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 bg-primary rounded-full transition-all duration-300"
                      style={{
                        height: isPlaying ? `${20 + Math.random() * 80}%` : "20%",
                        animation: isPlaying ? `pulse ${0.5 + Math.random()}s ease-in-out infinite` : "none",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Song Details */}
              <div className="space-y-3 bg-muted/50 rounded-lg p-4 border border-border/50">
                <h4 className="font-semibold mb-3">Song Details</h4>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Genre:</span>
                  <span className="text-sm font-medium">{genre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Voice:</span>
                  <span className="text-sm font-medium">{voiceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Structure:</span>
                  <span className="text-sm font-medium capitalize">{structure}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Theme:</span>
                  <span className="text-sm font-medium">{theme || "Not specified"}</span>
                </div>
              </div>

              {/* Additional Info */}
              <div className="text-xs text-muted-foreground text-center p-3 bg-muted/30 rounded-lg">
                <Music className="w-4 h-4 inline mr-1" />
                Your complete song includes vocals, instrumental track, and professional mixing
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Music className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground text-balance">
                Configure your song settings and click <strong>Generate Complete Song</strong>
              </p>
              <p className="text-sm text-muted-foreground/70 mt-2">
                This will create vocals, music, and mix them into a complete track
              </p>
            </div>
          )}
        </div>
        {songUrl && <audio ref={audioRef} src={songUrl} className="hidden" />}
      </Card>
    </div>
  )
}
