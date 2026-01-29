import { Section } from "@/components/ui/section"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialsSectionProps {
  data: {
    title: string
    items: readonly {
      quote: string
      author: string
      role: string
      avatar?: string | null
    }[]
  }
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <Section title={data.title} centered className="bg-muted/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((item, index) => (
          <Card key={index} className="flex flex-col h-full border-none shadow-sm">
            <CardHeader className="pb-4">
              <Quote className="size-8 text-primary/20 mb-2" />
              <p className="text-lg leading-relaxed font-medium">
                "{item.quote}"
              </p>
            </CardHeader>
            <CardContent className="mt-auto pt-4 flex items-center gap-4">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {item.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.avatar} alt={item.author} className="size-full rounded-full object-cover" />
                ) : (
                  item.author.charAt(0)
                )}
              </div>
              <div>
                <p className="font-semibold text-sm">{item.author}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
