import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { reader } from "@/lib/keystatic";
import {
  ArrowRight,
  Trophy,
  Users,
  Shield,
  Flag,
  Globe,
  MapPin,
  GraduationCap,
  Snowflake,
  type LucideIcon,
} from "lucide-react";

// Map icon strings to components
const IconMap: Record<string, LucideIcon> = {
  Trophy,
  Users,
  Shield,
  Flag,
  Globe,
  MapPin,
  GraduationCap,
  Snowflake,
};

export const metadata = {
  title: "About Us | Kenya Ski Federation",
  description:
    "The story, programs, and vision of the Kenya Ski Federation — the official governing body for winter sports in Kenya.",
};

export default async function AboutPage() {
  const about = await reader.singletons.about.read();

  if (!about) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-muted text-center border-b">
          <Container>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {about.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {about.heroSubtitle}
            </p>
          </Container>
        </section>

        {/* Our Foundation */}
        <Section className="bg-background">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-primary text-center">
              Our Foundation
            </h2>
            <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {about.foundation}
            </div>
          </div>
        </Section>

        {/* Programs & Development */}
        <Section className="bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Programs &amp; Development
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {about.programsIntro}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {about.programs.map((program, idx) => {
              const Icon =
                program.icon && IconMap[program.icon]
                  ? IconMap[program.icon]
                  : Flag;
              return (
                <div
                  key={idx}
                  className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                >
                  <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Long-Term Vision */}
        <Section className="bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Long-Term Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {about.vision}
            </p>
          </div>
        </Section>

        {/* Cross-links to Athletes & Team */}
        <Section className="bg-muted/30">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/athletes"
              className="group bg-card border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Our Athletes</h3>
              <p className="text-muted-foreground mb-4">
                The skiers carrying Kenya&rsquo;s flag on the international
                stage.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-primary">
                Meet the athletes
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/team"
              className="group bg-card border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-muted-foreground mb-4">
                The executive committee and management behind the Federation.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-primary">
                Meet the team
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </Section>

        {/* CTA */}
        <Section className="bg-primary text-primary-foreground text-center">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us on the Slopes
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Whether you are an aspiring athlete, a potential partner, or a
              fan, we want to hear from you.
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
