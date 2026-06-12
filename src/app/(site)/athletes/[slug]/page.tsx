import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { reader } from "@/lib/keystatic";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Medal,
  Quote,
  Users,
} from "lucide-react";

export async function generateStaticParams() {
  const athletes = await reader.collections.athletes.all();
  return athletes
    .filter((item) => item.entry.isPublished)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const athlete = await reader.collections.athletes.read(slug);
  if (!athlete) return {};
  return {
    title: `${athlete.name} | Athletes`,
    description: athlete.shortBio,
  };
}

export default async function AthletePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const athlete = await reader.collections.athletes.read(slug);

  if (!athlete || !athlete.isPublished) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end border-b bg-muted overflow-hidden">
          {athlete.actionImage && (
            <Image
              src={athlete.actionImage}
              alt={athlete.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          {/* Light fade at top so the transparent header stays legible */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/90 to-transparent" />
          <Container className="relative pb-12 pt-48 text-white">
            <div className="mb-6">
              <Link
                href="/athletes"
                className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-1 size-4" /> All athletes
              </Link>
            </div>
            <div className="mb-3">
              <Badge className="bg-primary text-primary-foreground border-none">
                {athlete.discipline}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
              {athlete.name}
            </h1>
            {athlete.tagline && (
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                {athlete.tagline}
              </p>
            )}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-white/80">
              {athlete.born && (
                <span className="inline-flex items-center gap-2">
                  <Calendar className="size-4" /> Born {athlete.born}
                </span>
              )}
              {athlete.basedIn && (
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" /> {athlete.basedIn}
                </span>
              )}
            </div>
          </Container>
        </section>

        {/* Profile */}
        <Section className="bg-background">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Profile</h2>
                <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {athlete.profile}
                </div>
              </div>

              {athlete.journey && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Sporting Journey</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {athlete.journey}
                  </div>
                </div>
              )}

              {athlete.highlights.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Career Highlights
                  </h2>
                  <ul className="space-y-3">
                    {athlete.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Medal className="size-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <aside className="lg:col-span-2 space-y-8">
              {athlete.portrait && (
                <div className="aspect-[4/5] relative rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={athlete.portrait}
                    alt={athlete.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              )}
              {athlete.clubs.length > 0 && (
                <div className="bg-card border rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Users className="size-4 text-primary" /> Ski Clubs
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {athlete.clubs.map((club, idx) => (
                      <li key={idx}>{club}</li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </Section>

        {/* Historic Milestones */}
        {athlete.milestones.length > 0 && (
          <Section className="bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Historic Milestones
              </h2>
              <div className="space-y-8">
                {athlete.milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="bg-card border rounded-xl p-8 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {milestone.event}
                    </h3>
                    <ul className="space-y-2">
                      {milestone.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <Medal className="size-5 text-primary shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* Values & Quotes */}
        {athlete.quotes.length > 0 && (
          <Section className="bg-background">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">In His Words</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {athlete.quotes.map((quote, idx) => (
                <div
                  key={idx}
                  className="bg-card border rounded-xl p-6 shadow-sm"
                >
                  <Quote className="size-6 text-primary/40 mb-4" />
                  <p className="text-muted-foreground italic leading-relaxed mb-4">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <p className="font-semibold text-sm text-primary">
                    {quote.theme}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Gallery */}
        {athlete.gallery.length > 0 && (
          <Section className="bg-muted/30">
            <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {athlete.gallery.map(
                (item, idx) =>
                  item.image && (
                    <div
                      key={idx}
                      className="aspect-[3/2] relative rounded-xl overflow-hidden shadow-sm"
                    >
                      <Image
                        src={item.image}
                        alt={item.alt || athlete.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ),
              )}
            </div>
          </Section>
        )}

        {/* Featured Quote + CTA */}
        <Section className="bg-primary text-primary-foreground text-center">
          <Container>
            {athlete.featuredQuote && (
              <blockquote className="text-2xl md:text-3xl font-medium italic max-w-4xl mx-auto mb-10 leading-relaxed">
                &ldquo;{athlete.featuredQuote}&rdquo;
              </blockquote>
            )}
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-semibold h-12 px-8"
            >
              <Link href="/contact">
                Support the Team <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
