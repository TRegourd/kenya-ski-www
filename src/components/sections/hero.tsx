import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Trophy, Users, Handshake } from "lucide-react"
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
    // Added pt-32 to account for the fixed header
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-muted/20 overflow-hidden">
       {/* Ambient Background Shapes */}
       <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl -z-10" />
       <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl -z-10" />

      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Content */}
        <div className="flex flex-col items-start text-left animate-fade-in-up">
           <Badge variant="outline" className="mb-6 border-black/10 text-muted-foreground bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium tracking-wide">
             <span className="mr-2 size-2 rounded-full bg-primary inline-block" />
             Official Federation Site
           </Badge>

           <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6 text-foreground leading-[1.1]">
             {data.headline}
           </h1>
           
           <p className="max-w-xl text-lg text-muted-foreground mb-8 leading-relaxed">
             {data.subheadline}
           </p>
           
           <div className="flex flex-wrap gap-4 w-full mb-12">
             <Button size="lg" asChild className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">
               <Link href={data.primaryCtaLink}>
                 {data.primaryCtaText}
                 <ArrowRight className="ml-2 size-4" />
               </Link>
             </Button>
             <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base bg-background hover:bg-muted font-medium border-border/60">
               <Link href={data.secondaryCtaLink}>
                 {data.secondaryCtaText}
               </Link>
             </Button>
           </div>

           {/* Trust/Credibility Indicators */}
           <div className="grid grid-cols-3 gap-6 w-full max-w-lg border-t pt-8 border-border/50">
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Trophy className="size-4 text-primary" />
                    <span>Excellence</span>
                 </div>
                 <span className="text-xs text-muted-foreground">Alpine & Nordic</span>
              </div>
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Users className="size-4 text-primary" />
                    <span>Community</span>
                 </div>
                 <span className="text-xs text-muted-foreground">Athlete Development</span>
              </div>
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Handshake className="size-4 text-primary" />
                    <span>Global</span>
                 </div>
                 <span className="text-xs text-muted-foreground">Strategic Partners</span>
              </div>
           </div>
        </div>

        {/* Right: Visual */}
        <div className="relative isolate animate-fade-in order-first lg:order-last">
           {/* Decorative frame elements */}
           <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-[2rem] transform rotate-3 scale-105 -z-10" />
           <div className="absolute -inset-4 border border-black/5 rounded-[2.5rem] -z-20 dashed" />

           <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 select-none">
              <Image 
                src="/images/hero/alpine-hero.png"
                alt="Kenyan Alpine Skier in action"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Subtle inner gradient overlay for image depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40">
                 <div className="flex items-center justify-between">
                    <div>
                       <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Focus</p>
                       <p className="text-sm font-semibold text-foreground">Next Gen Winter Olympians</p>
                    </div>
                    <div className="size-10 bg-black rounded-lg flex items-center justify-center text-white font-bold">
                       KE
                    </div>
                 </div>
              </div>
           </div>
        </div>
        
      </Container>
    </section>
  )
}
