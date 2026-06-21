import type { CtaContent } from "@/types/content";
import { CTA, SITE } from "@/constants/site";
import { SectionShell } from "@/components/layout/SectionShell";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { ArrowUpRightIcon, PhoneIcon } from "@/components/ui/icons";

interface CtaBandSectionProps {
  content?: CtaContent;
}

const defaultContent: CtaContent = {
  title: "Ready for a fresh coat? Let's talk about your project.",
  description: `Whether it's a single room or a full property repaint, ${SITE.name} is ready to deliver reliable results tailored to your needs.`,
  primaryLabel: CTA.quote.label,
  primaryHref: CTA.quote.href,
  secondaryLabel: CTA.call.label,
  secondaryHref: CTA.call.href,
};

export function CtaBandSection({ content = defaultContent }: CtaBandSectionProps) {
  return (
    <SectionShell variant="dark" ariaLabelledby="cta-band-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="cta-band-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {content.title}
        </h2>
        {content.description && (
          <p className="mt-4 text-base leading-relaxed text-neutral-200 sm:text-lg">
            {content.description}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonGroup
            label={content.primaryLabel}
            href={content.primaryHref}
            icon={<ArrowUpRightIcon className="h-4 w-4" />}
            variant="secondary"
          />
          {content.secondaryLabel && content.secondaryHref && (
            <ButtonGroup
              label={content.secondaryLabel}
              href={content.secondaryHref}
              icon={<PhoneIcon className="h-4 w-4" />}
              variant="primary"
              external
            />
          )}
        </div>
      </div>
    </SectionShell>
  );
}
