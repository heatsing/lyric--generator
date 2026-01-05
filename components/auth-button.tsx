"use client"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AuthButton() {
  const router = useRouter()

  return (
    <Button variant="default" onClick={() => router.push("/login")} size="sm">
      <User className="w-4 h-4 mr-2" />
      Login
    </Button>
  )
}
