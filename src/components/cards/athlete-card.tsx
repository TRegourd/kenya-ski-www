import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface AthleteCardProps {
  slug: string;
  name: string;
  discipline: string;
  tagline?: string;
  shortBio?: string;
  portrait?: string;
}

export function AthleteCard({
  slug,
  name,
  discipline,
  tagline,
  shortBio,
  portrait,
}: AthleteCardProps) {
  return (
    <Link
      href={`/athletes/${slug}`}
      className="group block bg-card rounded-xl overflow-hidden border shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-[4/5] relative overflow-hidden bg-muted">
        {portrait ? (
          <Image
            src={portrait}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-5 text-white">
          <Badge className="mb-2 bg-primary text-primary-foreground border-none">
            {discipline}
          </Badge>
          <h3 className="text-xl font-bold">{name}</h3>
          {tagline && <p className="text-sm text-white/85 mt-1">{tagline}</p>}
        </div>
      </div>
      <div className="p-5">
        {shortBio && (
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            {shortBio}
          </p>
        )}
        <span className="inline-flex items-center text-sm font-semibold text-primary">
          View profile
          <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
