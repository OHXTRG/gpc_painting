import type { PageHeroContent } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

interface PageHeroProps extends PageHeroContent {
  className?: string;
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("bg-brand-900 py-16 text-white md:py-24", className)}>
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <Badge variant="outline" className="mb-4">
              {eyebrow}
            </Badge>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-neutral-200 sm:text-xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
