import { SITE } from "@/constants/site";
import type { FaqItem, Service } from "@/types/content";

export function buildLocalBusinessJsonLd() {
  const { address } = SITE;

  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    areaServed: SITE.serviceArea,
    openingHours: SITE.businessHours,
  };
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServicesJsonLd(services: Service[]) {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "HousePainter",
      name: SITE.legalName,
      url: SITE.url,
    },
    areaServed: SITE.serviceArea,
  }));
}
