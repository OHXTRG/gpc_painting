export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface Stat {
  id: string;
  value?: number;
  displayText?: string;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface TrustBadge {
  id: string;
  label: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  focus: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
}

export interface PageHeroContent {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface SectionHeading {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export interface WhyChooseItem {
  id: string;
  text: string;
}

export interface CtaContent {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}
