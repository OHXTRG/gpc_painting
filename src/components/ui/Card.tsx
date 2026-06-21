import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "article" | "div";
}

export function Card({ children, className, as: Component = "div" }: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      {children}
    </Component>
  );
}

interface CardIndexProps {
  index: string;
  className?: string;
}

export function CardIndex({ index, className }: CardIndexProps) {
  return (
    <span
      className={cn(
        "text-sm font-bold tracking-widest text-brand-700",
        className,
      )}
    >
      {index}
    </span>
  );
}
