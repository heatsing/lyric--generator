import { generateText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { genre, mood, theme, vocalStyle, tempo, language } = await req.json()

    const prompt = `You are a professional music producer and songwriter. Generate a complete song concept including lyrics and production details with these specifications:

Genre: ${genre}
Mood: ${mood}
Theme: ${theme}
Vocal Style: ${vocalStyle}
Tempo: ${tempo} BPM
Language: ${language}

Generate:
1. Complete song lyrics with proper structure ([Verse], [Chorus], [Bridge], etc.)
2. Vocal melody description
3. Instrumental arrangement
4. Production notes

Make it professional, creative, and ready for production.`

    const { text } = await generateText({
      model: "openai/gpt-4o",
      prompt,
      maxOutputTokens: 2000,
      temperature: 0.9,
      apiKey: process.env.OPENAI_API_KEY || "sk-e9052c75601b4ba1804d5f7a9958151c",
    })

    return Response.json({
      song: text,
      audioUrl: "/placeholder-audio.mp3", // In production, this would be actual audio file
    })
  } catch (error) {
    console.error("[v0] Error in generate-song API:", error)
    return Response.json({ error: "Failed to generate song" }, { status: 500 })
  }
}
