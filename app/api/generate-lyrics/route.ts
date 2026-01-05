export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { genre, mood, theme, topic, length, language } = await req.json()

    const lengthInstructions = {
      short: "1 verse and 1 chorus",
      medium: "2 verses, 1 chorus (repeated after each verse), and possibly a pre-chorus",
      long: "3 verses, 1 chorus (repeated after each verse), 1 bridge, and possibly a pre-chorus and outro",
    }

    const prompt = `You are a professional songwriter and lyricist. Generate original and creative song lyrics with the following specifications:

Genre: ${genre}
Mood: ${mood}
Theme: ${theme}
${topic ? `Additional Topic/Keywords: ${topic}` : ""}
Length: ${lengthInstructions[length as keyof typeof lengthInstructions]}
Language: ${language}

Guidelines:
- Write authentic, emotionally resonant lyrics that match the ${mood} mood
- Use vivid imagery and metaphors appropriate for ${genre} music
- Include proper structure with labeled sections (e.g., [Verse 1], [Chorus], [Bridge])
- Make lyrics flow naturally with good rhythm and rhyme scheme
- Ensure the theme of "${theme}" is central to the lyrics
- Be creative and original - no clichés
- Make it memorable and singable

Generate the complete song lyrics now:`

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
    const lyrics = data.choices[0].message.content

    return Response.json({ lyrics })
  } catch (error) {
    console.error("[v0] Error in generate-lyrics API:", error)
    return Response.json({ error: "Failed to generate lyrics" }, { status: 500 })
  }
}
