import { Header } from "@/components/layout/header"
import { ContactForm } from "@/components/forms/contact-form"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section title="Contact Us" subtitle="Get in touch with the Federation" centered>
          <div className="mx-auto max-w-xl">
             <div className="bg-card text-card-foreground shadow-sm border rounded-xl p-6 md:p-8">
                <ContactForm />
             </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
