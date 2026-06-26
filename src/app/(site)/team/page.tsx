import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TeamSection } from "@/components/sections/team";
import { reader } from "@/lib/keystatic";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the executive committee and management team leading the Kenya Ski Federation.",
};

export default async function TeamPage() {
  if (process.env.ENABLE_TEAM_MEMBERS === "false") {
    notFound();
  }

  const teamMembers = await reader.collections.teamMembers.all();

  const sortedTeam = teamMembers
    .map((item) => item.entry)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-muted text-center border-b">
          <Container>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The people leading the Kenya Ski Federation — from Olympic
              pioneers to the organizers building winter sports at home.
            </p>
          </Container>
        </section>

        <TeamSection
          showHeader={false}
          members={sortedTeam.map((member) => ({
            ...member,
            avatar: member.avatar ?? undefined,
            bio: member.bio ?? undefined,
            linkedinUrl: member.linkedinUrl ?? undefined,
            email: member.email ?? undefined,
            quote: member.quote ?? undefined,
          }))}
        />

        {/* CTA */}
        <Section className="bg-primary text-primary-foreground text-center">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Get Involved?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              We are always looking for coaches, volunteers, and partners who
              share our vision for Kenyan winter sports.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-semibold h-12 px-8"
            >
              <Link href="/contact">
                Contact the Federation <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
