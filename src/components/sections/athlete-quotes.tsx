import Link from "next/link";
import Image from "next/image";
import { Quote } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import type { AthleteQuote } from "@/lib/content/reader";

interface AthleteQuotesSectionProps {
  title?: string;
  items: AthleteQuote[];
}

export function AthleteQuotesSection({
  title = "Voices from the Slopes",
  items,
}: AthleteQuotesSectionProps) {
  if (items.length === 0) return null;

  return (
    <Section title={title} centered className="bg-muted/10">
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/athletes/${item.slug}`}
            className="group flex"
          >
            <Card className="flex flex-col h-full border-none shadow-sm text-center w-full transition-shadow group-hover:shadow-md">
              <CardHeader className="pb-4 items-center">
                <Quote className="size-8 text-primary/20 mb-2" />
                <p className="text-sm leading-relaxed font-medium italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </CardHeader>
              <CardContent className="mt-auto pt-4 flex flex-col items-center gap-2">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl overflow-hidden relative">
                  {item.portrait ? (
                    <Image
                      src={item.portrait}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    item.name.charAt(0)
                  )}
                </div>
                <div>
                  <p className="font-semibold text-base group-hover:text-primary transition-colors">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.discipline}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
