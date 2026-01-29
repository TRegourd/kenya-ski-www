import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section title="Contact Us" subtitle="Get in touch" centered>
          <div className="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
            <p>
              This is a placeholder for the Contact page.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
