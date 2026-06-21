import { processSteps, processSectionHeading } from "@/data/process-steps";
import { CTA } from "@/constants/site";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { ArrowUpRightIcon, PhoneIcon } from "@/components/ui/icons";

export function ProcessSection() {
  return (
    <SectionShell variant="muted" ariaLabelledby="process-heading">
      <SectionHeading
        eyebrow={processSectionHeading.eyebrow}
        title={processSectionHeading.title}
        description={processSectionHeading.description}
        className="mb-12"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <article
            key={step.index}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-bold tracking-widest text-brand-700">{step.index}</p>
            <h3 className="mt-3 text-xl font-bold text-brand-900">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{step.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
    </SectionShell>
  );
}
