import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

interface CTASectionProps {
  data: {
    title: string
    subtitle: string
    buttonText: string
    buttonLink: string
  }
}

export function CTASection({ data }: CTASectionProps) {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center">
      <Container className="max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          {data.title}
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          {data.subtitle}
        </p>
        <Button size="lg" variant="secondary" asChild className="h-12 px-8 text-base font-semibold">
          <Link href={data.buttonLink}>
            {data.buttonText}
          </Link>
        </Button>
      </Container>
    </section>
  )
}
