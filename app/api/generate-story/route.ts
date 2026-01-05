import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { genre, theme, mood, keywords, length } = body

    const apiKey = process.env.OPENAI_API_KEY || "sk-e9052c75601b4ba1804d5f7a9958151c"

    const wordCount = length === "short" ? 500 : length === "medium" ? 1000 : 1500

    const prompt = `Write a ${genre} short story with a ${theme} theme and ${mood} mood. ${
      keywords ? `Include these elements: ${keywords}.` : ""
    } The story should be approximately ${wordCount} words. Make it engaging, creative, and complete with a beginning, middle, and end.`

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
            role: "system",
            content: "You are a creative storyteller who crafts engaging, original short stories.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.9,
        max_tokens: 2500,
      }),
    })

    const data = await response.json()
    const story = data.choices[0].message.content

    return NextResponse.json({ story })
  } catch (error) {
    console.error("Error generating story:", error)
    return NextResponse.json({ error: "Failed to generate story" }, { status: 500 })
  }
}
