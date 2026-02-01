import { Container } from "@/components/ui/container"
import { TeamMemberCard } from "@/components/cards/team-member-card"

import Link from "next/link"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  bio?: string
  avatar?: string
  linkedinUrl?: string
  email?: string
  group?: "executive" | "management" // Added group field
}

interface TeamSectionProps {
  members: TeamMember[]
}

export function TeamSection({ members }: TeamSectionProps) {
  // Filter members by group, defaulting to 'executive' if not specified
  const executives = members.filter(m => !m.group || m.group === 'executive');
  const management = members.filter(m => m.group === 'management');

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
            Meet the Team
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            The dedicated professionals driving Kenya's winter sports success.
          </p>
        </div>
        
        {/* Executive Committee - Large Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Executive Committee</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((member, index) => (
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
        </div>

        {/* Management Team - Compact List */}
        {management.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Management Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {management.map((member, index) => (
                <div key={index} className="bg-card rounded-lg p-4 shadow-sm border flex items-center gap-4">
         <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {member.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={member.avatar} alt={member.name} className="size-full rounded-full object-cover" />
                ) : (
                  member.name.charAt(0)
                )}
              </div>
                  <div>
                    <h4 className="font-semibold text-sm">{member.name}</h4>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
