import type { Metadata } from "next";
import { SITE } from "@/constants/site";

interface PageMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description = SITE.description,
  path = "",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title: `${title} | ${SITE.name}`,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export const defaultMetadata: Metadata = createPageMetadata({
  title: SITE.name,
  description: SITE.description,
  path: "/",
});
