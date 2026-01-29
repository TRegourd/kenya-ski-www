import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { icons } from "lucide-react"

interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  name: string
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = (icons as Record<string, LucideIcon>)[name]

  if (!LucideIcon) {
    return null
  }

  return <LucideIcon {...props} />
}
