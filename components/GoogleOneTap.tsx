"use client"

import { useEffect, useRef } from "react"

interface GoogleOneTapProps {
  onSuccess?: (credential: string) => void
  onError?: (error: any) => void
}

export function GoogleOneTap({ onSuccess, onError }: GoogleOneTapProps) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

    // Don't initialize if client ID is not configured or is the placeholder
    if (!clientId || clientId.startsWith("NEXT_PUBLIC_") || clientId === "your-client-id") {
      console.log(
        "[v0] Google One Tap: Client ID not configured. Skipping initialization.\n" +
          "To enable Google One Tap:\n" +
          "1. Add NEXT_PUBLIC_GOOGLE_CLIENT_ID=404702389910-ea05iba1famkjpq3pspcs68dgpo45jgi.apps.googleusercontent.com to Vercel environment variables\n" +
          "2. Add https://lyricgenerator.cc to authorized JavaScript origins in Google Cloud Console\n" +
          "3. Redeploy the application",
      )
      return
    }

    if (!clientId.includes(".apps.googleusercontent.com")) {
      console.error("[v0] Google One Tap: Invalid client ID format. Expected format: xxxx.apps.googleusercontent.com")
      return
    }

    console.log("[v0] Initializing Google One Tap with Client ID:", clientId.substring(0, 20) + "...")

    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.async = true
    script.defer = true
    script.onload = () => {
      if (window.google) {
        try {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: async (response: any) => {
              console.log("[v0] Google One Tap success")
              if (onSuccess) {
                onSuccess(response.credential)
              } else {
                // Default: Send to API route
                try {
                  const res = await fetch("/api/auth/google-one-tap", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ credential: response.credential }),
                  })
                  const data = await res.json()
                  if (data.success) {
                    console.log("[v0] User authenticated:", data.user)
                    window.location.reload()
                  }
                } catch (error) {
                  console.error("[v0] Authentication failed:", error)
                  if (onError) onError(error)
                }
              }
            },
            auto_select: false,
            cancel_on_tap_outside: true,
            use_fedcm_for_prompt: false,
          })

          window.google.accounts.id.prompt((notification: any) => {
            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
              const reason = notification.getNotDisplayedReason()
              console.log("[v0] One Tap not displayed:", reason)
            }
          })

          initialized.current = true
        } catch (error) {
          console.error("[v0] Google One Tap initialization failed:", error)
          if (onError) onError(error)
        }
      }
    }

    script.onerror = () => {
      console.error("[v0] Failed to load Google Identity Services script")
    }

    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [onSuccess, onError])

  return null
}

// TypeScript declarations
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void
          prompt: (callback?: (notification: any) => void) => void
          renderButton: (parent: HTMLElement, options: any) => void
        }
      }
    }
  }
}

export default GoogleOneTap
