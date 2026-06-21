import { testimonials } from "@/data/testimonials";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function TestimonialsSection() {
  return (
    <SectionShell variant="muted" ariaLabelledby="testimonials-heading">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Our Clients Say"
        description="Homeowners, builders, and businesses across Greater Vancouver trust us with their properties."
        align="center"
        className="mb-12"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} as="article">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {testimonial.focus}
            </p>
            <blockquote className="mt-4 text-base leading-relaxed text-neutral-700">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <footer className="mt-5 text-sm font-semibold text-brand-900">
              — {testimonial.author}
            </footer>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
