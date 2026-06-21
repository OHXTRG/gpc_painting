import { PageHero } from "@/components/layout/PageHero";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/constants/site";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description: `Request a free painting quote from ${SITE.name}. Call ${SITE.phone} or submit our contact form.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Bring Your Vision to Life"
        description="Ready to refresh your space? Share your project details and our team will respond promptly."
      />
      <QuoteFormSection />
      <FaqSection />
    </>
  );
}
