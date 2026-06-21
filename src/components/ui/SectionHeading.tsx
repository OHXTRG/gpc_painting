import type { SectionHeading } from "@/types/content";
import { cn } from "@/lib/cn";

interface SectionHeadingProps extends SectionHeading {
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.15em]",
            dark ? "text-accent-400" : "text-brand-700",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight",
          dark ? "text-white" : "text-brand-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-neutral-200" : "text-neutral-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
