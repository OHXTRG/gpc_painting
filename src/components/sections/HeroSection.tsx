import Image from "next/image";
import { CTA, SITE } from "@/constants/site";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { ArrowUpRightIcon, PhoneIcon, StarIcon } from "@/components/ui/icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&q=80"
          alt="Professional painter applying finish coat on interior wall"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-900/75" aria-hidden="true" />
      </div>

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <Badge variant="outline">{SITE.legalName}</Badge>
            <span className="inline-flex items-center gap-1.5 text-sm text-neutral-200">
              <StarIcon className="h-4 w-4 text-accent-400" />
              Trusted local painting professionals
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-brand-300">Quality Finishes</span> That Transform
            Your Space
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200">
            Residential and commercial painting across {SITE.serviceArea}. Reliable
            craftsmanship, meticulous prep, and results that last.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonGroup
              label={CTA.quote.label}
              href={CTA.quote.href}
              icon={<ArrowUpRightIcon className="h-4 w-4" />}
              variant="secondary"
            />
            <ButtonGroup
              label={CTA.projects.label}
              href={CTA.projects.href}
              icon={<ArrowUpRightIcon className="h-4 w-4" />}
              variant="primary"
            />
            <ButtonGroup
              label={CTA.call.label}
              href={CTA.call.href}
              icon={<PhoneIcon className="h-4 w-4" />}
              variant="primary"
              external
              className="sm:hidden"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
