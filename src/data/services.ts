import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    id: "interior",
    index: "01",
    title: "Interior Painting",
    description:
      "Flawless walls, ceilings, trim, and doors with careful prep and clean lines in every room.",
    features: [
      "Walls, ceilings & trim",
      "Colour consultation",
      "Low-VOC premium paints",
      "Furniture & floor protection",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    imageAlt: "Freshly painted modern living room interior",
  },
  {
    id: "exterior",
    index: "02",
    title: "Exterior Painting",
    description:
      "Weather-resistant finishes that protect your home and boost curb appeal for years to come.",
    features: [
      "Siding, stucco & wood",
      "Power washing & scraping",
      "Mildew treatment",
      "Long-lasting exterior coatings",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    imageAlt: "Freshly painted home exterior with clean landscaping",
  },
  {
    id: "commercial",
    index: "03",
    title: "Commercial Painting",
    description:
      "Minimal disruption painting for offices, retail, strata, and multi-unit properties.",
    features: [
      "After-hours scheduling",
      "Strata & property managers",
      "Safety-compliant crews",
      "Large-scale project coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    imageAlt: "Commercial office space with professional finish",
  },
  {
    id: "cabinet-refinishing",
    index: "04",
    title: "Cabinet Refinishing",
    description:
      "Transform kitchens and bathrooms with durable cabinet spraying and refinishing.",
    features: [
      "Spray-finish cabinetry",
      "Hardware removal & reinstall",
      "Smooth factory-like finish",
      "Cost-effective kitchen refresh",
    ],
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    imageAlt: "Modern kitchen with refinished white cabinets",
  },
  {
    id: "new-construction",
    index: "05",
    title: "New Construction",
    description:
      "Reliable painting for builders and developers from primer to final walkthrough.",
    features: [
      "Builder partnerships",
      "Multi-unit rollouts",
      "Touch-up & punch lists",
      "Schedule-driven delivery",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    imageAlt: "New construction home ready for painting",
  },
  {
    id: "specialty",
    index: "06",
    title: "Specialty Finishes",
    description:
      "Accent walls, deck staining, and detail work that elevates your property's character.",
    features: [
      "Deck & fence staining",
      "Accent & feature walls",
      "Drywall repair & patching",
      "Custom colour matching",
    ],
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    imageAlt: "Styled room with specialty accent wall finish",
  },
];
