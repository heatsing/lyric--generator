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

    const apiKey = process.env.OPENAI_API_KEY || "sk-e9052c75601b4ba1804d5f7a9958151c"

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 2000,
        temperature: 0.9,
      }),
    })

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.statusText}`)
    }

    const data = await response.json()
    const song = data.choices[0].message.content

    return Response.json({
      song,
      audioUrl: "/placeholder-audio.mp3",
    })
  } catch (error) {
    console.error("[v0] Error in generate-song API:", error)
    return Response.json({ error: "Failed to generate song" }, { status: 500 })
  }
}
