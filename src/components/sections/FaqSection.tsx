import { faqItems } from "@/data/faq";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

export function FaqSection() {
  return (
    <SectionShell ariaLabelledby="faq-heading">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Got Questions? We've Got Answers."
          description="Common questions about our painting services, estimates, and process."
        />
        <Accordion items={faqItems} />
      </div>
    </SectionShell>
  );
}
