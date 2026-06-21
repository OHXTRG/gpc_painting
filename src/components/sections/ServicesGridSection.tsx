import Link from "next/link";
import { services } from "@/data/services";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardIndex } from "@/components/ui/Card";

interface ServicesGridSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export function ServicesGridSection({
  limit,
  showViewAll = true,
}: ServicesGridSectionProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <SectionShell id="services" ariaLabelledby="services-grid-heading">
      <SectionHeading
        eyebrow="Our Services"
        title="Tailored Painting Solutions for Every Property"
        description="From single-room refreshes to full commercial rollouts, we deliver reliable results with premium materials and expert prep."
        className="mb-12"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedServices.map((service) => (
          <Card key={service.id} as="article">
            <CardIndex index={service.index} />
            <h3 className="mt-3 text-xl font-bold text-brand-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {service.description}
            </p>
          </Card>
        ))}
      </div>

      {showViewAll && (
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            View All Services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </SectionShell>
  );
}
