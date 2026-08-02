import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/features/QuoteForm";
import { ContactInfoSection } from "@/components/sections/ContactInfoSection";

export function QuoteFormSection() {
  const turnstileSiteKey = process.env.TURNSTILE_SITEKEY ?? "";

  return (
    <SectionShell id="contact" variant="muted" ariaLabelledby="quote-form-heading">
      <SectionHeading
        eyebrow="Get in Touch"
        title="Request Your Free Quote"
        description="Tell us about your project and our team will respond with a detailed estimate."
        className="mb-10"
      />

      <div className="grid min-w-0 gap-10 lg:grid-cols-5">
        <div className="min-w-0 lg:col-span-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <QuoteForm turnstileSiteKey={turnstileSiteKey} />
          </div>
        </div>
        <div className="min-w-0 lg:col-span-2">
          <ContactInfoSection />
        </div>
      </div>
    </SectionShell>
  );
}
