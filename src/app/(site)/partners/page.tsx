import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"

export default function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section title="Our Partners" subtitle="Better Together" centered>
          <div className="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
            <p>
              This is a placeholder for the Partners page.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
