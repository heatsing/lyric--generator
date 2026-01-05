"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Loader2, Copy, Download, RefreshCw } from "lucide-react"

export default function PoemGenerator() {
  const [formData, setFormData] = useState({
    style: "free-verse",
    theme: "love",
    mood: "romantic",
    keywords: "",
    length: "medium",
  })
  const [poem, setPoem] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch("/api/generate-poem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      setPoem(data.poem)
    } catch (error) {
      console.error("Error generating poem:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(poem)
  }

  const handleDownload = () => {
    const blob = new Blob([poem], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "poem.txt"
    a.click()
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-card rounded-xl p-6 border border-border">
          <h2 className="text-2xl font-bold mb-2">Customize Your Poem</h2>
          <p className="text-sm text-muted-foreground mb-6">Fill in the details to generate your personalized poem</p>

          <div className="space-y-4">
            <div>
              <Label htmlFor="style">Poetry Style</Label>
              <Select value={formData.style} onValueChange={(value) => setFormData({ ...formData, style: value })}>
                <SelectTrigger id="style">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="haiku">Haiku</SelectItem>
                  <SelectItem value="sonnet">Sonnet</SelectItem>
                  <SelectItem value="free-verse">Free Verse</SelectItem>
                  <SelectItem value="limerick">Limerick</SelectItem>
                  <SelectItem value="acrostic">Acrostic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="theme">Theme</Label>
              <Select value={formData.theme} onValueChange={(value) => setFormData({ ...formData, theme: value })}>
                <SelectTrigger id="theme">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="love">Love</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                  <SelectItem value="life">Life</SelectItem>
                  <SelectItem value="friendship">Friendship</SelectItem>
                  <SelectItem value="inspiration">Inspiration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="mood">Mood</Label>
              <Select value={formData.mood} onValueChange={(value) => setFormData({ ...formData, mood: value })}>
                <SelectTrigger id="mood">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="romantic">Romantic</SelectItem>
                  <SelectItem value="melancholic">Melancholic</SelectItem>
                  <SelectItem value="joyful">Joyful</SelectItem>
                  <SelectItem value="contemplative">Contemplative</SelectItem>
                  <SelectItem value="peaceful">Peaceful</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="keywords">Keywords (Optional)</Label>
              <Input
                id="keywords"
                placeholder="e.g., sunset, memories, dreams..."
                value={formData.keywords}
                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
              />
            </div>

            <Button onClick={handleGenerate} disabled={isGenerating} className="w-full" size="lg">
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Poem"
              )}
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Your Generated Poem</h2>
            {poem && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownload}>
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleGenerate}>
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          <Textarea
            className="min-h-[400px] font-serif text-lg leading-relaxed"
            value={poem}
            onChange={(e) => setPoem(e.target.value)}
            placeholder="Your beautiful poem will appear here..."
          />
        </div>
      </div>
    </div>
  )
}
