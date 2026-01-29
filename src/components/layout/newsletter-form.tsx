"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  return (
    <form 
      className="flex gap-2" 
      onSubmit={(e) => {
        e.preventDefault()
        // Handle subscription logic here
        console.log("Subscribed!")
      }}
    >
      <Input placeholder="Enter your email" type="email" required />
      <Button type="submit" size="sm">Subscribe</Button>
    </form>
  )
}
