import Image from "next/image";
import { portfolioItems } from "@/data/portfolio";
import { SITE } from "@/constants/site";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function PortfolioSection() {
  return (
    <SectionShell id="portfolio" ariaLabelledby="portfolio-heading">
      <SectionHeading
        eyebrow="Our Projects"
        title="Beautiful. Durable. Professionally Finished."
        className="mb-12"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100"
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={SITE.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-base font-medium text-brand-700 transition-colors hover:text-brand-900"
        >
          More of our work on Instagram
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>
    </SectionShell>
  );
}

/*
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
*/
