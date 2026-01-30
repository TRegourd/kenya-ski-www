import Link from "next/link"
import { notFound } from "next/navigation"


import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { TeamSection } from "@/components/sections/team"
import { reader } from "@/lib/keystatic"
import { ArrowRight, Trophy, Users, Shield, Flag } from "lucide-react"

// Map icon strings to components
const IconMap: Record<string, any> = {
  Trophy,
  Users,
  Shield,
  Flag
}

export const metadata = {
  title: "About Us | Kenya Ski Federation",
  description: "Learn about the mission, vision, and team behind the Kenya Ski Federation.",
}

export default async function AboutPage() {
  const about = await reader.singletons.about.read()
  const teamMembers = await reader.collections.teamMembers.all()

  if (!about) {
    notFound()
  }




  // Sort team members by order
  const sortedTeam = teamMembers.map(item => item.entry).sort((a, b) => (a.order || 0) - (b.order || 0))

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-muted text-center border-b">
          <Container>
             <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{about.heroTitle}</h1>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
               {about.heroSubtitle}
             </p>
          </Container>
        </section>

        {/* Mission */}
        <Section className="bg-background">
           <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <div className="prose prose-lg dark:prose-invert mx-auto text-foreground whitespace-pre-wrap">
                 {about.mission}
              </div>
           </div>
        </Section>

        {/* Programs */}
        <Section className="bg-muted/30">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                 Holistic initiatives designed to build champions and community.
               </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {about.programs.map((program, idx) => {
                 const Icon = program.icon && IconMap[program.icon] ? IconMap[program.icon] : Flag
                 return (
                   <div key={idx} className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                      <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                   </div>
                 )
               })}
            </div>
        </Section>

        {/* Team Section */}
        
          <TeamSection members={sortedTeam.map(member => ({
              ...member,
              avatar: member.avatar ?? undefined,
              bio: member.bio ?? undefined,
              linkedinUrl: member.linkedinUrl ?? undefined,
              email: member.email ?? undefined
          }))} />
        
        
        {/* CTA */}
        <Section className="bg-primary text-primary-foreground text-center">
           <Container>
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us on the Slopes</h2>
             <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
               Whether you are an aspiring athlete, a potential partner, or a fan, we want to hear from you.
             </p>
             <Button asChild size="lg" variant="secondary" className="font-semibold h-12 px-8">
                <Link href="/contact">
                  Contact the Federation <ArrowRight className="ml-2 size-4" />
                </Link>
             </Button>
           </Container>
        </Section>

      </main>
      <Footer />
    </div>
  )
}
