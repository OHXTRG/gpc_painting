import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

interface SectionShellProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "muted" | "dark" | "brand";
  ariaLabelledby?: string;
}

const variantStyles = {
  default: "bg-white",
  muted: "bg-surface-50",
  dark: "bg-brand-900 text-white",
  brand: "bg-brand-700 text-white",
};

export function SectionShell({
  children,
  id,
  className,
  containerClassName,
  variant = "default",
  ariaLabelledby,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("py-16 md:py-24", variantStyles[variant], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
