import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonGroupProps {
  label: string;
  href: string;
  icon: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export function ButtonGroup({
  label,
  href,
  icon,
  variant = "primary",
  external = false,
  className,
  onClick,
}: ButtonGroupProps) {
  const isPrimary = variant === "primary";

  const groupClasses = cn(
    "inline-flex items-stretch overflow-hidden rounded-full",
    isPrimary ? "bg-brand-700" : "bg-accent-400",
    className,
  );

  const labelClasses = cn(
    "inline-flex items-center px-5 py-3 text-sm font-semibold sm:px-6 sm:py-3.5 sm:text-base",
    isPrimary ? "text-white" : "text-brand-900",
  );

  const iconClasses = cn(
    "inline-flex w-11 shrink-0 items-center justify-center sm:w-12",
    isPrimary ? "bg-brand-800 text-white" : "bg-brand-900 text-accent-400",
  );

  const content = (
    <>
      <span className={labelClasses}>{label}</span>
      <span className={iconClasses}>{icon}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} className={groupClasses} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={groupClasses} onClick={onClick}>
      {content}
    </Link>
  );
}
