import Link from "next/link";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AthleteCard } from "@/components/cards/athlete-card";
import { reader } from "@/lib/keystatic";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Athletes",
  description:
    "Meet the athletes representing Kenya in winter sports on the international stage.",
};

export default async function AthletesPage() {
  const athletes = await reader.collections.athletes.all();

  const published = athletes
    .filter((item) => item.entry.isPublished)
    .sort((a, b) => (a.entry.order || 0) - (b.entry.order || 0));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-muted text-center border-b">
          <Container>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Our Athletes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From the Rift Valley to the Alps — the athletes carrying
              Kenya&rsquo;s flag onto the world&rsquo;s snow.
            </p>
          </Container>
        </section>

        {/* Athletes Grid */}
        <Section className="bg-background">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {published.map((item) => (
              <AthleteCard
                key={item.slug}
                slug={item.slug}
                name={item.entry.name}
                discipline={item.entry.discipline}
                tagline={item.entry.tagline ?? undefined}
                shortBio={item.entry.shortBio ?? undefined}
                portrait={item.entry.portrait ?? undefined}
              />
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-12">
            More athletes are joining the team — check back soon.
          </p>
        </Section>

        {/* CTA */}
        <Section className="bg-primary text-primary-foreground text-center">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Represent Kenya?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Whether you train in Kenya or abroad, the Federation is here to
              support your journey to the international stage.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-semibold h-12 px-8"
            >
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
