import { PageHero } from "@/components/layout/PageHero";
import { ServicesListSection } from "@/components/sections/ServicesListSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { createPageMetadata } from "@/lib/metadata";
import { buildServicesJsonLd } from "@/lib/json-ld";
import { services } from "@/data/services";
import { SITE } from "@/constants/site";

export const metadata = createPageMetadata({
  title: "Our Services",
  description: `Explore interior, exterior, commercial, and specialty painting services from ${SITE.name}.`,
  path: "/services",
});

export default function ServicesPage() {
  const servicesJsonLd = buildServicesJsonLd(services);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <PageHero
        eyebrow="Our Services"
        title="Professional Painting Services"
        description="Reliable painting solutions for residential and commercial properties across Greater Vancouver."
      />
      <ServicesListSection />
      <WhyChooseSection />
      <CtaBandSection />
    </>
  );
}
