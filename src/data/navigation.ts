import type { NavLink } from "@/types/content";
import { CTA } from "@/constants/site";

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const footerNavLinks: NavLink[] = mainNavLinks;

export const headerCtas = {
  quote: CTA.quote,
  call: CTA.call,
} as const;
