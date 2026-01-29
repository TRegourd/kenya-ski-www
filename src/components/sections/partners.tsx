import { Container } from "@/components/ui/container"
// import Image from "next/image" // Uncomment when real images are used

interface PartnersSectionProps {
  data: {
    show: boolean
    title: string
    logos: readonly {
      name: string
      logo?: string | null
    }[]
  }
}

export function PartnersSection({ data }: PartnersSectionProps) {
  if (!data.show) return null

  return (
    <section className="py-12 border-y bg-muted/30">
      <Container>
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
          {data.title}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300">
          {data.logos.length > 0 ? (
            data.logos.map((partner, index) => (
              <div key={index} className="flex items-center justify-center font-bold text-xl text-muted-foreground/50">
                {/* 
                 In a real app, use next/image here. 
                 For template demo, we show text or placeholder.
                */}
                {partner.name}
              </div>
            ))
          ) : (
            // Fallback placeholders for demo
            ["Acme Corp", "Global Bank", "Stripe", "Next.js", "Vercel"].map((name) => (
               <div key={name} className="font-bold text-xl md:text-2xl text-muted-foreground/40 hover:text-foreground/80 transition-colors cursor-default">
                 {name}
               </div>
            ))
          )}
        </div>
      </Container>
    </section>
  )
}
