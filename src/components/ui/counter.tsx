"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface CounterProps {
  value: number
  direction?: "up" | "down"
  className?: string
  suffix?: string
  prefix?: string
}

export function Counter({
  value,
  direction = "up",
  className,
  suffix = "",
  prefix = ""
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value)
    }
  }, [isInView, motionValue, direction, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        )
      }
    })
  }, [springValue])

  return (
    <span className={className}>
      {prefix}<span ref={ref}>0</span>{suffix}
    </span>
  )
}
