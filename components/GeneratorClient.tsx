"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Copy, Download, RefreshCw } from "lucide-react"

interface GeneratorClientProps {
  preset?: {
    genre?: string
    mood?: string
    theme?: string
    topic?: string
  }
}

export function GeneratorClient({ preset }: GeneratorClientProps) {
  const [genre, setGenre] = useState(preset?.genre || "")
  const [mood, setMood] = useState(preset?.mood || "")
  const [theme, setTheme] = useState(preset?.theme || "")
  const [topic, setTopic] = useState(preset?.topic || "")
  const [length, setLength] = useState("medium")
  const [language, setLanguage] = useState("English")
  const [lyrics, setLyrics] = useState("")
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/generate-lyrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ genre, mood, theme, topic, length, language }),
      })

      const data = await response.json()
      if (data.lyrics) {
        setLyrics(data.lyrics)
      }
    } catch (error) {
      console.error("Error generating lyrics:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(lyrics)
  }

  const handleDownload = () => {
    const blob = new Blob([lyrics], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "lyrics.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Panel - Input */}
      <Card className="p-6 space-y-6">
        <div className="space-y-2">
          <Label>Genre</Label>
          <Select value={genre} onValueChange={setGenre}>
            <SelectTrigger>
              <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pop">Pop</SelectItem>
              <SelectItem value="Rock">Rock</SelectItem>
              <SelectItem value="Rap">Rap</SelectItem>
              <SelectItem value="R&B">R&B</SelectItem>
              <SelectItem value="Country">Country</SelectItem>
              <SelectItem value="Jazz">Jazz</SelectItem>
              <SelectItem value="EDM">EDM</SelectItem>
              <SelectItem value="K-Pop">K-Pop</SelectItem>
              <SelectItem value="Folk">Folk</SelectItem>
              <SelectItem value="Metal">Metal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Mood</Label>
          <Select value={mood} onValueChange={setMood}>
            <SelectTrigger>
              <SelectValue placeholder="Select a mood" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Happy">Happy</SelectItem>
              <SelectItem value="Sad">Sad</SelectItem>
              <SelectItem value="Romantic">Romantic</SelectItem>
              <SelectItem value="Energetic">Energetic</SelectItem>
              <SelectItem value="Melancholic">Melancholic</SelectItem>
              <SelectItem value="Uplifting">Uplifting</SelectItem>
              <SelectItem value="Dark">Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Theme</Label>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger>
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Love">Love</SelectItem>
              <SelectItem value="Breakup">Breakup</SelectItem>
              <SelectItem value="Party">Party</SelectItem>
              <SelectItem value="Life">Life</SelectItem>
              <SelectItem value="Dreams">Dreams</SelectItem>
              <SelectItem value="Success">Success</SelectItem>
              <SelectItem value="Struggle">Struggle</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Topic (Optional)</Label>
          <Textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a specific topic or keywords..."
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label>Length</Label>
          <Select value={length} onValueChange={setLength}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="short">Short (1 verse + chorus)</SelectItem>
              <SelectItem value="medium">Medium (2 verses + chorus)</SelectItem>
              <SelectItem value="long">Long (3 verses + chorus + bridge)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Language</Label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Spanish">Spanish</SelectItem>
              <SelectItem value="French">French</SelectItem>
              <SelectItem value="German">German</SelectItem>
              <SelectItem value="Chinese">Chinese</SelectItem>
              <SelectItem value="Japanese">Japanese</SelectItem>
              <SelectItem value="Korean">Korean</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={handleGenerate} disabled={loading} className="w-full" size="lg">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate Lyrics"
          )}
        </Button>
      </Card>

      {/* Right Panel - Output */}
      <Card className="p-6">
        {lyrics ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Generated Lyrics</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm" onClick={handleGenerate} disabled={loading}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="bg-muted p-6 rounded-lg whitespace-pre-wrap font-mono text-sm min-h-[400px]">{lyrics}</div>
          </div>
        ) : (
          <div className="h-full min-h-[400px] flex items-center justify-center text-muted-foreground">
            Generate your lyrics to see them here
          </div>
        )}
      </Card>
    </div>
  )
}
