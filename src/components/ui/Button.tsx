import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 focus-visible:ring-brand-500",
  secondary:
    "bg-accent-400 text-brand-900 hover:bg-accent-500 focus-visible:ring-accent-400",
  outline:
    "border-2 border-brand-700 text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-500",
  ghost: "text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    icon,
  } = props;

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    const { href, external } = props;

    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
          {icon}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  const { type = "button", disabled, onClick } = buttonProps;

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
