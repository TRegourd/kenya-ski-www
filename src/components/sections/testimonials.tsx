import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialsSectionProps {
  data: {
    title: string;
    items: readonly {
      quote: string;
      author: string;
      role: string;
      avatar?: string | null;
    }[];
  };
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <Section title={data.title} centered className="bg-muted/10">
      <div className="flex justify-center gap-6 max-w-6xl mx-auto">
        {data.items.map((item, index) => (
          <Card
            key={index}
            className="flex flex-col h-full border-none shadow-sm text-center max-w-xl w-full"
          >
            <CardHeader className="pb-4 items-center">
              <Quote className="size-8 text-primary/20 mb-2" />
              <p className="text-sm leading-relaxed font-medium">
                "{item.quote}"
              </p>
            </CardHeader>
            <CardContent className="mt-auto pt-4 flex flex-col items-center gap-2">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl overflow-hidden relative">
                {item.avatar ? (
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                ) : (
                  item.author.charAt(0)
                )}
              </div>
              <div>
                <p className="font-semibold text-base">{item.author}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
