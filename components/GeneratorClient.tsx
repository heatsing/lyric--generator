"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
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
  const { t } = useLanguage()
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
      console.error("[v0] Error generating lyrics:", error)
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
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Panel - Input */}
      <Card className="p-6 space-y-6">
        <div className="space-y-2">
          <Label>{t("genre")}</Label>
          <Select value={genre} onValueChange={setGenre}>
            <SelectTrigger>
              <SelectValue placeholder={t("selectGenre")} />
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
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>{t("mood")}</Label>
          <Select value={mood} onValueChange={setMood}>
            <SelectTrigger>
              <SelectValue placeholder={t("selectMood")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Happy">Happy</SelectItem>
              <SelectItem value="Sad">Sad</SelectItem>
              <SelectItem value="Romantic">Romantic</SelectItem>
              <SelectItem value="Energetic">Energetic</SelectItem>
              <SelectItem value="Melancholic">Melancholic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>{t("theme")}</Label>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger>
              <SelectValue placeholder={t("selectTheme")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Love">Love</SelectItem>
              <SelectItem value="Breakup">Breakup</SelectItem>
              <SelectItem value="Party">Party</SelectItem>
              <SelectItem value="Life">Life</SelectItem>
              <SelectItem value="Dreams">Dreams</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>{t("topic")}</Label>
          <Textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder={t("topicPlaceholder")}
            rows={3}
          />
        </div>

        <Button onClick={handleGenerate} disabled={loading} className="w-full" size="lg">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("generating")}
            </>
          ) : (
            t("generate")
          )}
        </Button>
      </Card>

      {/* Right Panel - Output */}
      <Card className="p-6">
        {lyrics ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{t("generatedLyrics")}</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="h-4 w-4 mr-2" />
                  {t("copy")}
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-2" />
                  {t("download")}
                </Button>
                <Button variant="outline" size="sm" onClick={handleGenerate}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="bg-muted p-6 rounded-lg whitespace-pre-wrap font-mono text-sm">{lyrics}</div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">{t("noLyricsYet")}</div>
        )}
      </Card>
    </div>
  )
}
