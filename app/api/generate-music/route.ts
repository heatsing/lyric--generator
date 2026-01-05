import { generateText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { genre, mood, tempo, duration, instruments } = await req.json()

    const prompt = `You are an AI music composition assistant. Generate a detailed music description and structure for an instrumental track with these specifications:

Genre: ${genre}
Mood: ${mood}
Tempo: ${tempo} BPM
Duration: ${duration} seconds
Instruments: ${instruments}

Generate a professional music composition description including:
- Chord progression
- Melodic structure
- Rhythmic patterns
- Arrangement details
- Production notes

Be creative and detailed.`

    const { text } = await generateText({
      model: "openai/gpt-4o",
      prompt,
      maxOutputTokens: 1500,
      temperature: 0.8,
      apiKey: process.env.OPENAI_API_KEY || "sk-e9052c75601b4ba1804d5f7a9958151c",
    })

    return Response.json({
      music: text,
      audioUrl: "/placeholder-audio.mp3", // In production, this would be actual audio file
    })
  } catch (error) {
    console.error("[v0] Error in generate-music API:", error)
    return Response.json({ error: "Failed to generate music" }, { status: 500 })
  }
}
