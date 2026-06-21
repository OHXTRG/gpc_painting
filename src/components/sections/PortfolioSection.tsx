import { portfolioItems, portfolioMarqueeTags } from "@/data/portfolio";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";

export function PortfolioSection() {
  return (
    <SectionShell id="portfolio" ariaLabelledby="portfolio-heading">
      <SectionHeading
        eyebrow="Our Projects"
        title="Beautiful. Durable. Professionally Finished."
        description="Explore a selection of recent interior, exterior, and commercial painting projects across the Lower Mainland."
        className="mb-12"
      />

      <Carousel items={portfolioItems} />

      <div className="mt-10 overflow-hidden">
        <div className="flex animate-marquee gap-4 whitespace-nowrap">
          {[...portfolioMarqueeTags, ...portfolioMarqueeTags].map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-brand-900"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
