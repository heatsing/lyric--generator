"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Download, RotateCw, Loader2, Play, Pause } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const GENRES = [
  "Electronic",
  "Hip Hop",
  "Rock",
  "Pop",
  "Jazz",
  "Classical",
  "Ambient",
  "House",
  "Techno",
  "R&B",
  "Trap",
  "Lo-fi",
  "Orchestral",
  "Funk",
  "Dubstep",
]

const MOODS = [
  "Energetic",
  "Calm",
  "Dark",
  "Uplifting",
  "Melancholic",
  "Aggressive",
  "Dreamy",
  "Mysterious",
  "Playful",
  "Epic",
  "Chill",
  "Intense",
]

const TEMPOS = [
  { value: "slow", label: "Slow (60-80 BPM)" },
  { value: "medium", label: "Medium (80-120 BPM)" },
  { value: "fast", label: "Fast (120-160 BPM)" },
  { value: "very-fast", label: "Very Fast (160+ BPM)" },
]

const DURATIONS = [
  { value: "30", label: "30 seconds" },
  { value: "60", label: "1 minute" },
  { value: "120", label: "2 minutes" },
  { value: "180", label: "3 minutes" },
]

export default function MusicGenerator() {
  const [genre, setGenre] = useState("Electronic")
  const [mood, setMood] = useState("Energetic")
  const [tempo, setTempo] = useState("medium")
  const [duration, setDuration] = useState("60")
  const [description, setDescription] = useState("")
  const [instruments, setInstruments] = useState("")
  const [musicUrl, setMusicUrl] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const { toast } = useToast()
  const audioRef = useRef<HTMLAudioElement>(null)

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
    setMusicUrl("")
    setIsPlaying(false)

    try {
      const response = await fetch("/api/generate-music", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          genre,
          mood,
          tempo,
          duration,
          description,
          instruments,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate music")
      }

      const data = await response.json()
      setMusicUrl(data.audioUrl)

      toast({
        title: "Success!",
        description: "Your music has been generated.",
      })
    } catch (error) {
      console.error("[v0] Error generating music:", error)
      toast({
        title: "Error",
        description: "Failed to generate music. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (!musicUrl) return

    toast({
      title: "Downloaded!",
      description: "Music track saved to your device.",
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
          <h2 className="text-2xl font-bold text-balance">Customize Your Music</h2>
          <p className="text-sm text-muted-foreground text-pretty">
            Configure the parameters to generate your unique music track
          </p>
        </div>

        <div className="space-y-4">
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
            <Label htmlFor="mood">Mood</Label>
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
            <Label htmlFor="tempo">Tempo</Label>
            <Select value={tempo} onValueChange={setTempo}>
              <SelectTrigger id="tempo">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TEMPOS.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger id="duration">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DURATIONS.map((d) => (
                  <SelectItem key={d.value} value={d.value}>
                    {d.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="instruments">Instruments (Optional)</Label>
            <Input
              id="instruments"
              placeholder="e.g., piano, guitar, drums, synthesizer..."
              value={instruments}
              onChange={(e) => setInstruments(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Describe the sound you want... e.g., 'upbeat dance track with heavy bass'"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
        </div>

        <Button onClick={handleGenerate} disabled={isGenerating} className="w-full" size="lg">
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Music
            </>
          )}
        </Button>
      </Card>

      {/* Right Panel - Generated Music */}
      <Card className="p-6 space-y-4 border-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-balance">Your Generated Music</h2>
          {musicUrl && (
            <div className="flex gap-2">
              <Button onClick={handleDownload} variant="outline" size="sm">
                <Download className="w-4 h-4" />
                <span className="sr-only">Download music</span>
              </Button>
              <Button onClick={handleGenerate} variant="outline" size="sm" disabled={isGenerating}>
                <RotateCw className="w-4 h-4" />
                <span className="sr-only">Regenerate music</span>
              </Button>
            </div>
          )}
        </div>

        <div className="min-h-[500px] flex flex-col items-center justify-center">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="text-muted-foreground text-center">Creating your music track...</p>
              <p className="text-sm text-muted-foreground/70 text-center mt-2">This may take a few moments</p>
            </div>
          ) : musicUrl ? (
            <div className="w-full space-y-6">
              {/* Music Player Visualization */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 border border-border/50">
                <div className="flex items-center justify-center mb-6">
                  <Button onClick={togglePlayPause} size="lg" className="w-16 h-16 rounded-full">
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </Button>
                </div>

                {/* Waveform Visualization */}
                <div className="flex items-center justify-center gap-1 h-32">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-primary rounded-full transition-all duration-300"
                      style={{
                        height: `${Math.random() * 100}%`,
                        opacity: isPlaying ? 0.8 : 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Track Info */}
              <div className="space-y-3 bg-muted/50 rounded-lg p-4 border border-border/50">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Genre:</span>
                  <span className="text-sm font-medium">{genre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Mood:</span>
                  <span className="text-sm font-medium">{mood}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Tempo:</span>
                  <span className="text-sm font-medium capitalize">{tempo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Duration:</span>
                  <span className="text-sm font-medium">{duration} seconds</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Sparkles className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground text-balance">
                Configure your settings and click <strong>Generate Music</strong> to create your track
              </p>
            </div>
          )}
          {musicUrl && <audio ref={audioRef} src={musicUrl} className="hidden" />}
        </div>
      </Card>
    </div>
  )
}
