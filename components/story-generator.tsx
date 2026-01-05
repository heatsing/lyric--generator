"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Loader2, Copy, Download, RefreshCw } from "lucide-react"

export default function StoryGenerator() {
  const [formData, setFormData] = useState({
    genre: "fantasy",
    theme: "adventure",
    mood: "exciting",
    keywords: "",
    length: "medium",
  })
  const [story, setStory] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch("/api/generate-story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      setStory(data.story)
    } catch (error) {
      console.error("Error generating story:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(story)
  }

  const handleDownload = () => {
    const blob = new Blob([story], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "story.txt"
    a.click()
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-card rounded-xl p-6 border border-border">
          <h2 className="text-2xl font-bold mb-2">Customize Your Story</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Fill in the details to generate your personalized short story
          </p>

          <div className="space-y-4">
            <div>
              <Label htmlFor="genre">Genre</Label>
              <Select value={formData.genre} onValueChange={(value) => setFormData({ ...formData, genre: value })}>
                <SelectTrigger id="genre">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="sci-fi">Science Fiction</SelectItem>
                  <SelectItem value="mystery">Mystery</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="horror">Horror</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
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
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="discovery">Discovery</SelectItem>
                  <SelectItem value="redemption">Redemption</SelectItem>
                  <SelectItem value="love">Love</SelectItem>
                  <SelectItem value="survival">Survival</SelectItem>
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
                  <SelectItem value="exciting">Exciting</SelectItem>
                  <SelectItem value="suspenseful">Suspenseful</SelectItem>
                  <SelectItem value="heartwarming">Heartwarming</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="inspiring">Inspiring</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="keywords">Plot Keywords (Optional)</Label>
              <Input
                id="keywords"
                placeholder="e.g., treasure hunt, magic portal, detective..."
                value={formData.keywords}
                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="length">Story Length</Label>
              <Select value={formData.length} onValueChange={(value) => setFormData({ ...formData, length: value })}>
                <SelectTrigger id="length">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short (500 words)</SelectItem>
                  <SelectItem value="medium">Medium (1000 words)</SelectItem>
                  <SelectItem value="long">Long (1500 words)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleGenerate} disabled={isGenerating} className="w-full" size="lg">
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Story"
              )}
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Your Generated Story</h2>
            {story && (
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
            className="min-h-[400px] font-serif leading-relaxed"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder="Your creative story will appear here..."
          />
        </div>
      </div>
    </div>
  )
}
