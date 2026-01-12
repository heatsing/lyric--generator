import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { credential } = await request.json()

    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`)
    const googleUser = await response.json()

    if (googleUser.error) {
      return NextResponse.json({ success: false, error: "Invalid token" }, { status: 401 })
    }

    const user = {
      id: googleUser.sub,
      email: googleUser.email,
      name: googleUser.name,
      picture: googleUser.picture,
      email_verified: googleUser.email_verified,
    }

    console.log("[v0] Google One Tap user:", user)

    // TODO: Save user to database or session
    // For now, just return success
    return NextResponse.json({
      success: true,
      user,
      message: "Authentication successful",
    })
  } catch (error) {
    console.error("[v0] Google One Tap error:", error)
    return NextResponse.json({ success: false, error: "Authentication failed" }, { status: 500 })
  }
}
