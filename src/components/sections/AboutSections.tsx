import Image from "next/image";
import { aboutContent, aboutValues } from "@/data/about";
import { aboutTrustBadges } from "@/data/trust-badges";
import { SITE } from "@/constants/site";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardIndex } from "@/components/ui/Card";
import { CheckIcon } from "@/components/ui/icons";

export function AboutStorySection() {
  return (
    <SectionShell ariaLabelledby="about-story-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="Painting for Every Property"
            description={`${SITE.legalName} is a dedicated painting company specializing in high-quality finishes for residential and commercial properties.`}
          />
          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            Serving {SITE.serviceArea}, we work closely with homeowners, builders, and property
            managers to deliver reliable, efficient, and code-compliant painting solutions with a
            strong focus on craftsmanship and consistency.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {aboutTrustBadges.map((badge) => (
              <li key={badge.id} className="flex items-center gap-2 text-sm font-medium text-brand-900">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {badge.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
            alt="Professional painting team at work"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </SectionShell>
  );
}

export function VisionMissionSection() {
  return (
    <SectionShell variant="muted" ariaLabelledby="vision-mission-heading">
      <h2 id="vision-mission-heading" className="sr-only">
        Vision and mission
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card as="article">
          <h3 className="text-xl font-bold text-brand-900">Our Vision</h3>
          <p className="mt-3 text-base leading-relaxed text-neutral-600">{aboutContent.vision}</p>
        </Card>
        <Card as="article">
          <h3 className="text-xl font-bold text-brand-900">Our Mission</h3>
          <p className="mt-3 text-base leading-relaxed text-neutral-600">{aboutContent.mission}</p>
        </Card>
      </div>
    </SectionShell>
  );
}

export function ValuesSection() {
  return (
    <SectionShell ariaLabelledby="values-heading">
      <SectionHeading
        eyebrow="About Us"
        title="What Sets Us Apart"
        className="mb-12"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aboutValues.map((value) => (
          <Card key={value.id} as="article">
            <CardIndex index={value.index} />
            <h3 className="mt-3 text-xl font-bold text-brand-900">{value.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{value.description}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
