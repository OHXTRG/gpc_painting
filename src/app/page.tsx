import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { buildFaqJsonLd } from "@/lib/json-ld";
import { faqItems } from "@/data/faq";

export default function HomePage() {
  const faqJsonLd = buildFaqJsonLd(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <AboutPreviewSection />
      <ServicesGridSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBandSection />
    </>
  );
}
