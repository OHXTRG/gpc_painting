import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/features/QuoteForm";
import { ContactInfoSection } from "@/components/sections/ContactInfoSection";

export function QuoteFormSection() {
  return (
    <SectionShell variant="muted" ariaLabelledby="quote-form-heading">
      <SectionHeading
        eyebrow="Get in Touch"
        title="Request Your Free Quote"
        description="Tell us about your project and our team will respond with a detailed estimate."
        className="mb-10"
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <QuoteForm />
          </div>
        </div>
        <div className="lg:col-span-2">
          <ContactInfoSection />
        </div>
      </div>
    </SectionShell>
  );
}
