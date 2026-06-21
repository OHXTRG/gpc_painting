"use client";

import { useState } from "react";
import type { FaqItem } from "@/types/content";
import { ChevronDownIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

interface AccordionProps {
  items: FaqItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={cn("divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id}>
            <button
              type="button"
              id={`faq-trigger-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-neutral-50 sm:px-6"
            >
              <span className="text-base font-semibold text-brand-900 sm:text-lg">
                {item.question}
              </span>
              <ChevronDownIcon
                className={cn(
                  "h-5 w-5 shrink-0 text-brand-700 transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.id}`}
              hidden={!isOpen}
              className="px-5 pb-5 sm:px-6"
            >
              <p className="text-base leading-relaxed text-neutral-600">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
