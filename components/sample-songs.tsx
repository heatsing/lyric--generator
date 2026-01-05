"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause, Music, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Song {
  id: number
  title: string
  genre: string
  mood: string
  duration: string
  audioUrl: string
  lyrics: string
  coverColor: string
}

const sampleSongs: Song[] = [
  {
    id: 1,
    title: "Endless Summer",
    genre: "Pop",
    mood: "Happy",
    duration: "3:24",
    audioUrl: "/placeholder.mp3",
    lyrics:
      "Dancing in the sunlight, feeling so alive\nEndless summer days, we'll never say goodbye\nWith you by my side, everything feels right\nThese memories we make will shine so bright",
    coverColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    title: "Midnight Dreams",
    genre: "R&B",
    mood: "Romantic",
    duration: "4:12",
    audioUrl: "/placeholder.mp3",
    lyrics:
      "In the quiet of the night, I think of you\nMidnight dreams come alive, when stars shine through\nYour love is like a melody, soft and true\nIn every midnight dream, I'm lost in you",
    coverColor: "bg-gradient-to-br from-purple-600 to-blue-600",
  },
  {
    id: 3,
    title: "Thunder Road",
    genre: "Rock",
    mood: "Energetic",
    duration: "3:58",
    audioUrl: "/placeholder.mp3",
    lyrics:
      "Rolling down the thunder road tonight\nEngines roaring, headlights burning bright\nFreedom calling, we're breaking through\nOn this thunder road, just me and you",
    coverColor: "bg-gradient-to-br from-red-600 to-gray-800",
  },
  {
    id: 4,
    title: "City Lights",
    genre: "Hip Hop",
    mood: "Confident",
    duration: "3:45",
    audioUrl: "/placeholder.mp3",
    lyrics:
      "Walking through the city, lights shining bright\nGot my dreams in focus, reaching new heights\nEvery step I take, I'm making my mark\nFrom sunrise to sunset, lighting up the dark",
    coverColor: "bg-gradient-to-br from-cyan-500 to-blue-700",
  },
  {
    id: 5,
    title: "Acoustic Heart",
    genre: "Country",
    mood: "Nostalgic",
    duration: "3:15",
    audioUrl: "/placeholder.mp3",
    lyrics:
      "With my guitar and an open heart\nTelling stories from the very start\nSimple melodies, honest and true\nThis acoustic heart still beats for you",
    coverColor: "bg-gradient-to-br from-amber-600 to-yellow-700",
  },
  {
    id: 6,
    title: "Digital Dreams",
    genre: "Electronic",
    mood: "Futuristic",
    duration: "4:30",
    audioUrl: "/placeholder.mp3",
    lyrics:
      "In a world of circuits and neon streams\nWe're living in these digital dreams\nPulse of the future, electric beat\nWhere reality and fantasy meet",
    coverColor: "bg-gradient-to-br from-pink-500 to-purple-700",
  },
]

export default function SampleSongs() {
  const { t } = useLanguage()
  const [playingSongId, setPlayingSongId] = useState<number | null>(null)
  const [currentTime, setCurrentTime] = useState<{ [key: number]: number }>({})
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({})

  const togglePlay = (songId: number) => {
    const audio = audioRefs.current[songId]
    if (!audio) return

    if (playingSongId === songId) {
      audio.pause()
      setPlayingSongId(null)
    } else {
      // Pause any currently playing audio
      if (playingSongId !== null) {
        const currentAudio = audioRefs.current[playingSongId]
        if (currentAudio) currentAudio.pause()
      }
      audio.play()
      setPlayingSongId(songId)
    }
  }

  const handleTimeUpdate = (songId: number) => {
    const audio = audioRefs.current[songId]
    if (audio) {
      setCurrentTime((prev) => ({ ...prev, [songId]: audio.currentTime }))
    }
  }

  const handleEnded = (songId: number) => {
    setPlayingSongId(null)
    setCurrentTime((prev) => ({ ...prev, [songId]: 0 }))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const downloadLyrics = (song: Song) => {
    const element = document.createElement("a")
    const file = new Blob([`${song.title}\n${song.genre} - ${song.mood}\n\n${song.lyrics}`], {
      type: "text/plain",
    })
    element.href = URL.createObjectURL(file)
    element.download = `${song.title.replace(/\s+/g, "-").toLowerCase()}-lyrics.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Sample Songs</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Listen to AI-generated songs created with our platform. Each song showcases different genres, moods, and
          styles.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleSongs.map((song) => (
          <Card key={song.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`h-32 ${song.coverColor} flex items-center justify-center`}>
              <Music className="w-16 h-16 text-white/80" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-balance">{song.title}</h3>
              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">{song.genre}</span>
                <span className="px-2 py-1 rounded-full bg-accent/20 text-accent-foreground">{song.mood}</span>
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{song.lyrics}</p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Button
                  size="sm"
                  variant={playingSongId === song.id ? "default" : "outline"}
                  onClick={() => togglePlay(song.id)}
                  className="flex-1"
                >
                  {playingSongId === song.id ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </>
                  )}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => downloadLyrics(song)}>
                  <Download className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{formatTime(currentTime[song.id] || 0)}</span>
                  <span>{song.duration}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-primary h-full transition-all duration-300"
                    style={{
                      width: `${((currentTime[song.id] || 0) / (3 * 60 + 24)) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <audio
                ref={(el) => {
                  audioRefs.current[song.id] = el
                }}
                src={song.audioUrl}
                onTimeUpdate={() => handleTimeUpdate(song.id)}
                onEnded={() => handleEnded(song.id)}
              />
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground text-sm">
          All songs were generated using AI. Create your own unique songs with our generator above!
        </p>
      </div>
    </div>
  )
}
