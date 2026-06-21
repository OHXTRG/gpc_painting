import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { CTA } from "@/constants/site";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardIndex } from "@/components/ui/Card";
import { CheckIcon } from "@/components/ui/icons";

export function ServicesListSection() {
  return (
    <SectionShell variant="muted" ariaLabelledby="services-list-heading">
      <SectionHeading
        eyebrow="Our Services"
        title="Reliable Painting Solutions for Residential & Commercial Projects"
        description="Every service includes thorough surface preparation, premium products, and a spotless job site."
        className="mb-12"
      />

      <div className="space-y-8">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <CardIndex index={service.index} />
                <h3 className="mt-2 text-2xl font-bold text-brand-900">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-brand-900">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={CTA.quote.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                >
                  Get a Quote
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
