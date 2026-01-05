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
        max_tokens: 1500,
        temperature: 0.8,
      }),
    })

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.statusText}`)
    }

    const data = await response.json()
    const music = data.choices[0].message.content

    return Response.json({
      music,
      audioUrl: "/placeholder-audio.mp3",
    })
  } catch (error) {
    console.error("[v0] Error in generate-music API:", error)
    return Response.json({ error: "Failed to generate music" }, { status: 500 })
  }
}
