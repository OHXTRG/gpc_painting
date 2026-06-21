import Image from "next/image";
import Link from "next/link";
import { trustBadges } from "@/data/trust-badges";
import { CTA, SITE } from "@/constants/site";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/icons";

export function AboutPreviewSection() {
  return (
    <SectionShell variant="muted" ariaLabelledby="about-preview-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=900&q=80"
            alt="GPC Painting crew preparing a room for painting"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="Your Trusted Painting Partner"
            description={`At ${SITE.name}, we specialize in interior and exterior painting that protects your property and elevates every space.`}
          />

          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            With a commitment to craftsmanship and detail, we work with homeowners,
            builders, and property managers to deliver finishes that meet the highest
            standards. Serving {SITE.serviceArea}, our team combines hands-on expertise
            with a strong work ethic project after project.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {trustBadges.map((badge) => (
              <li key={badge.id} className="flex items-center gap-2 text-sm font-medium text-brand-900">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {badge.label}
              </li>
            ))}
          </ul>

          <Link
            href={CTA.about.href}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            Learn More
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
