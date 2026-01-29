import { Section } from "@/components/ui/section"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"

interface FeaturesSectionProps {
  data: {
    title: string
    subtitle: string
    items: readonly {
      title: string
      description: string
      icon: string
    }[]
  }
}

export function FeaturesSection({ data }: FeaturesSectionProps) {
  return (
    <Section title={data.title} subtitle={data.subtitle} centered className="bg-muted/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((item, index) => (
          <Card key={index} className="border-none shadow-md bg-card/50 hover:bg-card/80 transition-colors">
            <CardHeader>
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Icon name={item.icon} className="size-6" />
              </div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
