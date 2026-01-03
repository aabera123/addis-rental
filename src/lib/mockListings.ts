export type Listing = {
  slug: string;
  title: string;
  area: string;
  priceETB: number;
  beds: number;
  highlight: string;
  image: string;
  furnished: boolean;
  generator: boolean;
  waterTank: boolean;
  parking: boolean;
  utilitiesIncluded: boolean;
  shortTerm: boolean;
  featured: boolean;
  createdAt: string;
  availability: "Available" | "Reserved" | "Rented";
  baths: number;
  sizeSqm: number;
  amenities: string[];
  description: string;
  areaInfo: string;
  gallery: string[];
};

export type Area = {
  name: string;
  slug: string;
  listingCount: number;
  description: string;
};

export const searchAreas = [
  "Bole",
  "CMC",
  "Sarbet",
  "Kazanchis",
  "Gerji",
  "Old Airport",
];

export const featuredListings: Listing[] = [
  {
    slug: "bole-skyline-two-bedroom",
    title: "Sunlit two-bedroom with skyline balcony",
    area: "Bole",
    priceETB: 45000,
    beds: 2,
    highlight: "Generator",
    image: "/listings/listing-1.svg",
    furnished: true,
    generator: true,
    waterTank: true,
    parking: true,
    utilitiesIncluded: false,
    shortTerm: false,
    featured: true,
    createdAt: "2025-12-20",
    availability: "Available",
    baths: 2,
    sizeSqm: 125,
    amenities: [
      "Elevator access",
      "Backup generator",
      "On-site security",
      "Fiber ready",
      "Water tank",
      "Dedicated parking",
    ],
    description:
      "Bright, modern two-bedroom with a wide balcony and open living plan. The building is professionally managed and kept spotless for a premium feel.",
    areaInfo:
      "Bole offers quick access to cafes, shopping, and international schools. This listing stays close to major roads while remaining quiet inside.",
    gallery: [
      "/listings/listing-1.svg",
      "/listings/listing-3.svg",
      "/listings/listing-5.svg",
    ],
  },
  {
    slug: "cmc-family-residence",
    title: "Quiet compound home with private parking",
    area: "CMC",
    priceETB: 58000,
    beds: 3,
    highlight: "Water Tank",
    image: "/listings/listing-2.svg",
    furnished: false,
    generator: false,
    waterTank: true,
    parking: true,
    utilitiesIncluded: true,
    shortTerm: false,
    featured: true,
    createdAt: "2025-12-14",
    availability: "Available",
    baths: 3,
    sizeSqm: 190,
    amenities: [
      "Private compound",
      "Water tank",
      "Covered parking",
      "Garden space",
      "Security team",
      "Storage room",
    ],
    description:
      "A calm family home with a generous living space, separate dining area, and gated compound privacy. Ideal for long-term tenants.",
    areaInfo:
      "CMC is known for its calmer streets and family-friendly feel, with easy access to schools and community services.",
    gallery: [
      "/listings/listing-2.svg",
      "/listings/listing-6.svg",
      "/listings/listing-1.svg",
    ],
  },
  {
    slug: "sarbet-modern-one-bed",
    title: "Modern one-bedroom close to cafes",
    area: "Sarbet",
    priceETB: 32000,
    beds: 1,
    highlight: "Parking",
    image: "/listings/listing-3.svg",
    furnished: true,
    generator: false,
    waterTank: true,
    parking: true,
    utilitiesIncluded: false,
    shortTerm: true,
    featured: false,
    createdAt: "2025-12-23",
    availability: "Available",
    baths: 1,
    sizeSqm: 78,
    amenities: [
      "Open kitchen",
      "Parking slot",
      "Water tank",
      "Secure entry",
      "Natural light",
      "Balcony view",
    ],
    description:
      "A crisp one-bedroom with modern finishes and a compact layout that still feels spacious. Perfect for professionals who value walkability.",
    areaInfo:
      "Sarbet stays popular for its access to cafes and quick rides toward the city center, without the busiest traffic corridors.",
    gallery: [
      "/listings/listing-3.svg",
      "/listings/listing-1.svg",
      "/listings/listing-4.svg",
    ],
  },
  {
    slug: "kazanchis-studio-core",
    title: "High-floor studio near offices",
    area: "Kazanchis",
    priceETB: 28000,
    beds: 0,
    highlight: "Security",
    image: "/listings/listing-4.svg",
    furnished: true,
    generator: true,
    waterTank: false,
    parking: false,
    utilitiesIncluded: true,
    shortTerm: true,
    featured: false,
    createdAt: "2025-12-27",
    availability: "Reserved",
    baths: 1,
    sizeSqm: 52,
    amenities: [
      "Utilities included",
      "24/7 security",
      "Elevator access",
      "Front desk",
      "Fast internet",
      "City views",
    ],
    description:
      "Smart studio setup with a high-floor view and fast access to offices. Utilities are bundled for simpler monthly planning.",
    areaInfo:
      "Kazanchis is a business-first neighborhood, popular with tenants who want short commutes and building services.",
    gallery: [
      "/listings/listing-4.svg",
      "/listings/listing-2.svg",
      "/listings/listing-5.svg",
    ],
  },
  {
    slug: "gerji-urban-two-bedroom",
    title: "Spacious two-bedroom with open living",
    area: "Gerji",
    priceETB: 42000,
    beds: 2,
    highlight: "Fiber Ready",
    image: "/listings/listing-5.svg",
    furnished: false,
    generator: true,
    waterTank: true,
    parking: true,
    utilitiesIncluded: false,
    shortTerm: false,
    featured: true,
    createdAt: "2025-12-10",
    availability: "Available",
    baths: 2,
    sizeSqm: 135,
    amenities: [
      "Backup generator",
      "Water tank",
      "Covered parking",
      "Shared garden",
      "Security cameras",
      "Fiber ready",
    ],
    description:
      "Open-plan living room with space to entertain, plus a generous primary bedroom. The building is newly finished and well managed.",
    areaInfo:
      "Gerji continues to grow with new residential builds, giving renters more space while staying connected to main roads.",
    gallery: [
      "/listings/listing-5.svg",
      "/listings/listing-3.svg",
      "/listings/listing-2.svg",
    ],
  },
  {
    slug: "old-airport-family-home",
    title: "Large family home with rooftop access",
    area: "Old Airport",
    priceETB: 75000,
    beds: 4,
    highlight: "Rooftop",
    image: "/listings/listing-6.svg",
    furnished: true,
    generator: true,
    waterTank: true,
    parking: true,
    utilitiesIncluded: true,
    shortTerm: false,
    featured: true,
    createdAt: "2025-12-05",
    availability: "Rented",
    baths: 4,
    sizeSqm: 240,
    amenities: [
      "Rooftop access",
      "Private garden",
      "Full backup power",
      "Water tank",
      "Parking for 2 cars",
      "In-unit laundry",
    ],
    description:
      "Spacious family home with multiple living zones and rooftop access. This property offers rare space and privacy in a prime area.",
    areaInfo:
      "Old Airport features wide streets and established villas, making it a steady choice for tenants who need larger homes.",
    gallery: [
      "/listings/listing-6.svg",
      "/listings/listing-2.svg",
      "/listings/listing-1.svg",
    ],
  },
];

export const popularAreas: Area[] = [
  {
    name: "Bole",
    slug: "bole",
    listingCount: 128,
    description: "Embassy-lined streets with premium services.",
  },
  {
    name: "CMC",
    slug: "cmc",
    listingCount: 84,
    description: "Family-friendly blocks with quieter lanes.",
  },
  {
    name: "Sarbet",
    slug: "sarbet",
    listingCount: 66,
    description: "City access and popular dining corridors.",
  },
  {
    name: "Kazanchis",
    slug: "kazanchis",
    listingCount: 72,
    description: "Business hubs with updated apartment towers.",
  },
  {
    name: "Gerji",
    slug: "gerji",
    listingCount: 93,
    description: "Growing residential pocket with new builds.",
  },
  {
    name: "Old Airport",
    slug: "old-airport",
    listingCount: 59,
    description: "Wide streets and established villa homes.",
  },
];
