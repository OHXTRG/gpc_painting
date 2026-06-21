"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioItem } from "@/types/content";
import { cn } from "@/lib/cn";

interface CarouselProps {
  items: PortfolioItem[];
  className?: string;
}

export function Carousel({ items, className }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  if (!activeItem) return null;

  const goTo = (index: number) => {
    setActiveIndex((index + items.length) % items.length);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-2xl bg-brand-900">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={activeItem.image}
              alt={activeItem.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={activeIndex === 0}
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-400">
              {activeItem.category}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {activeItem.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-neutral-200">
              {activeItem.description}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous project"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next project"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                →
              </button>
              <span className="ml-2 text-sm text-neutral-300">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              index === activeIndex
                ? "w-8 bg-brand-700"
                : "w-2.5 bg-neutral-300 hover:bg-neutral-400",
            )}
          />
        ))}
      </div>
    </div>
  );
}
