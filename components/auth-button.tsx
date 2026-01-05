"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AuthButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const { toast } = useToast()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated login
    setIsLoggedIn(true)
    setIsOpen(false)
    toast({
      title: "Login Successful",
      description: "Welcome back! You're now logged in.",
    })
    setEmail("")
    setPassword("")
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated registration
    setIsLoggedIn(true)
    setIsOpen(false)
    toast({
      title: "Account Created",
      description: "Welcome! Your account has been created successfully.",
    })
    setEmail("")
    setPassword("")
    setName("")
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    toast({
      title: "Logged Out",
      description: "You've been logged out successfully.",
    })
  }

  if (isLoggedIn) {
    return (
      <Button variant="outline" onClick={handleLogout} size="sm">
        <User className="w-4 h-4 mr-2" />
        Logout
      </Button>
    )
  }

  return (
    <>
      <Button variant="default" onClick={() => setIsOpen(true)} size="sm">
        <User className="w-4 h-4 mr-2" />
        Sign In
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-balance">Welcome</DialogTitle>
            <DialogDescription className="text-pretty">
              Sign in to your account or create a new one to save your lyrics and access premium features.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4 mt-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
              <div className="text-center">
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Forgot password?
                </button>
              </div>
            </TabsContent>

            <TabsContent value="register" className="space-y-4 mt-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">Full Name</Label>
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>
              <p className="text-xs text-center text-muted-foreground text-pretty">
                By creating an account, you agree to our Terms of Service and Privacy Policy.
              </p>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  )
}
