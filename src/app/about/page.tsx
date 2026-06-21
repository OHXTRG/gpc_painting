import { PageHero } from "@/components/layout/PageHero";
import {
  AboutStorySection,
  ValuesSection,
  VisionMissionSection,
} from "@/components/sections/AboutSections";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBandSection } from "@/components/sections/CtaBandSection";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/constants/site";

export const metadata = createPageMetadata({
  title: "About Us",
  description: `Learn about ${SITE.name} — licensed, insured painting professionals serving ${SITE.serviceArea}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built on Quality, Driven by Craftsmanship"
        description={`Discover the team, values, and standards behind ${SITE.name}.`}
      />
      <AboutStorySection />
      <VisionMissionSection />
      <ValuesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBandSection />
    </>
  );
}
