import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section title="About Us" subtitle="Our Story" centered>
          <div className="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
            <p>
              This is a placeholder for the About page. You can manage this content via Keystatic 
              by creating a new Page collection or Singleton.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
