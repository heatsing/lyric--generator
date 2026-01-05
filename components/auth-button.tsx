"use client"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AuthButton() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return (
      <Button variant="outline" size="sm" disabled>
        Loading...
      </Button>
    )
  }

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm hidden sm:inline">{session.user?.name || session.user?.email}</span>
        <Button variant="outline" onClick={() => signOut()} size="sm">
          <User className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    )
  }

  return (
    <Button variant="default" onClick={() => router.push("/login")} size="sm">
      <User className="w-4 h-4 mr-2" />
      Login
    </Button>
  )
}
