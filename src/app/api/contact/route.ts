import { NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validation/contact"
import { sendContactEmail } from "@/lib/email/sendContactEmail"
import { z } from "zod"

// Simple in-memory rate limiting map
// In a real production app, use Redis or Upstash
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()

const WINDOW_MS = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip) || { count: 0, lastReset: now }

  if (now - record.lastReset > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now })
    return false
  }

  if (record.count >= MAX_REQUESTS) {
    return true
  }

  record.count += 1
  rateLimitMap.set(ip, record)
  return false
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const json = await req.json()
    const body = contactFormSchema.parse(json)

    // Verify Turnstile Token
    const formData = new FormData()
    formData.append("secret", process.env.TURNSTILE_SECRET_KEY || "")
    formData.append("response", body.token)
    formData.append("remoteip", ip)

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      }
    )

    const turnstileData = await turnstileResponse.json()

    if (!turnstileData.success) {
      return NextResponse.json(
        { message: "Invalid security token. Please reload and try again." },
        { status: 400 }
      )
    }

    const result = await sendContactEmail(body)

    if (!result.success) {
      return NextResponse.json(
        { message: "Failed to send email. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: "Message sent successfully!" })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid input data", errors: (error as any).errors },
        { status: 422 }
      )
    }

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
  }
}
