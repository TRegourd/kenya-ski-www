import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TeamMemberProps {
  name: string
  role: string
  bio?: string
  avatar?: string
  linkedinUrl?: string
  email?: string
}

export function TeamMemberCard({
  name,
  role,
  bio,
  avatar,
  linkedinUrl,
  email,
}: TeamMemberProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden bg-muted">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
              No Image
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          {role}
        </Badge>
        {bio && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {bio}
          </p>
        )}
        
        <div className="flex justify-center gap-4 mt-auto">
          {linkedinUrl && (
            <Link 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          )}
          {email && (
            <Link 
              href={`mailto:${email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="size-5" />
              <span className="sr-only">Email</span>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
