import Image from "next/image";
import { whyChooseItems } from "@/data/about";
import { CTA } from "@/constants/site";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { CheckIcon, ArrowUpRightIcon, PhoneIcon } from "@/components/ui/icons";

export function WhyChooseSection() {
  return (
    <SectionShell ariaLabelledby="why-choose-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Reliable. Skilled. Local."
            description="We don't just apply paint — we deliver lasting finishes backed by preparation, precision, and professional accountability."
          />

          <ul className="mt-8 space-y-4">
            {whyChooseItems.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-base text-neutral-700">{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonGroup
              label={CTA.quote.label}
              href={CTA.quote.href}
              icon={<ArrowUpRightIcon className="h-4 w-4" />}
              variant="primary"
            />
            <ButtonGroup
              label={CTA.call.label}
              href={CTA.call.href}
              icon={<PhoneIcon className="h-4 w-4" />}
              variant="secondary"
              external
            />
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900&q=80"
            alt="Freshly painted modern interior with clean finish"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </SectionShell>
  );
}
