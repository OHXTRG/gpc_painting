"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { handleSectionNavClick } from "@/lib/nav-scroll";

interface SectionNavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
}

export function SectionNavLink({
  href,
  children,
  className,
  onNavigate,
}: SectionNavLinkProps) {
  const pathname = usePathname();
  const isHashOrHome = href === "/" || href.startsWith("/#");

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (handleSectionNavClick(href, pathname, onNavigate)) {
      event.preventDefault();
    }
  };

  if (isHashOrHome) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onNavigate}>
      {children}
    </Link>
  );
}
