export const SITE = {
  name: "GPC Painting",
  legalName: "GPC Painting Ltd.",
  tagline: "Professional painting services you can trust.",
  description:
    "Residential and commercial painting across Lower Mainland Vancouver, Vancouver Island, and all over BC. Interior, exterior, and specialty finishes delivered on time with meticulous prep and lasting results.",
  url: "https://gpc-painting.ca",
  phone: "(604) 555-0142",
  phoneHref: "tel:+16045550142",
  email: "01chanpreetsingh@gmail.com",
  emailHref: "mailto:01chanpreetsingh@gmail.com",
  address: {
    street: "1200 Marine Drive",
    city: "North Vancouver",
    region: "BC",
    postalCode: "V7P 1T2",
    country: "CA",
  },
  serviceArea: "Lower Mainland Vancouver, Vancouver Island, and all over BC",
  social: {
    // facebook: "https://facebook.com",
    instagram: "https://www.instagram.com/gpc_painting",
    // linkedin: "https://linkedin.com",
  },
  businessHours: "Mon–Fri 7:00 AM – 6:00 PM",
} as const;

export const CTA = {
  quote: { label: "Get a Free Quote", href: "/#contact" },
  call: { label: "Call Now", href: SITE.phoneHref },
  projects: { label: "View Our Work", href: "/#portfolio" },
  about: { label: "Learn More", href: "/#about" },
} as const;
