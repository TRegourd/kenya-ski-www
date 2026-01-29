import { Container } from "@/components/ui/container"
import { TeamMemberCard } from "@/components/cards/team-member-card"

interface TeamMember {
  name: string
  role: string
  bio?: string
  avatar?: string
  linkedinUrl?: string
  email?: string
}

interface TeamSectionProps {
  members: TeamMember[]
}

export function TeamSection({ members }: TeamSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
            Meet the Team
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            The dedicated professionals and athletes driving Kenyas winter sports success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              avatar={member.avatar}
              linkedinUrl={member.linkedinUrl}
              email={member.email}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
