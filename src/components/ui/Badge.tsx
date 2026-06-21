import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "outline" | "dark";
  className?: string;
}

const variantStyles = {
  default: "bg-brand-100 text-brand-800",
  accent: "bg-accent-400/20 text-brand-900",
  outline: "border border-white/30 bg-white/10 text-white backdrop-blur-sm",
  dark: "bg-brand-900 text-white",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
