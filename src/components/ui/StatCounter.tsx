"use client";

import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/cn";

interface StatCounterProps {
  value?: number;
  displayText?: string;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
  dark?: boolean;
}

export function StatCounter({
  value = 0,
  displayText,
  prefix = "",
  suffix = "",
  label,
  duration = 2000,
  className,
  dark = false,
}: StatCounterProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();
  const [displayValue, setDisplayValue] = useState(0);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (displayText || !isIntersecting) return;

    if (prefersReducedMotion || value === 0) {
      const frameId = requestAnimationFrame(() => setDisplayValue(value));
      return () => cancelAnimationFrame(frameId);
    }

    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(Math.floor(progress * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isIntersecting, value, duration, prefersReducedMotion, displayText]);

  const renderedValue = displayText ?? `${prefix}${displayValue.toLocaleString()}${suffix}`;

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <p
        className={cn(
          "text-4xl font-bold tracking-tight sm:text-5xl",
          dark ? "text-accent-400" : "text-brand-700",
        )}
      >
        {renderedValue}
      </p>
      <p
        className={cn(
          "mt-2 text-sm font-medium sm:text-base",
          dark ? "text-neutral-200" : "text-neutral-600",
        )}
      >
        {label}
      </p>
    </div>
  );
}
