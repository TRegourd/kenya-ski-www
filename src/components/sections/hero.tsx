import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"

interface HeroSectionProps {
  data: {
    headline: string
    subheadline: string
    primaryCtaText: string
    primaryCtaLink: string
    secondaryCtaText: string
    secondaryCtaLink: string
  }
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Background decoration */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" 
      />
      
      <Container className="flex flex-col items-center text-center">
        <Badge variant="secondary" className="mb-6 animate-fade-in hover:bg-secondary/80">
          v1.0 is now live
        </Badge>
        
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          {data.headline}
        </h1>
        
        <p className="max-w-2xl text-lg text-muted-foreground mb-8 md:text-xl leading-relaxed">
          {data.subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" asChild className="h-12 px-8 text-base">
            <Link href={data.primaryCtaLink}>
              {data.primaryCtaText}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="h-12 px-8 text-base">
            <Link href={data.secondaryCtaLink}>
              {data.secondaryCtaText}
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
