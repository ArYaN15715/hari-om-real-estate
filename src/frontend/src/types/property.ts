export type PropertyType = "Residential" | "Farm" | "Investment" | "Commercial";
export type PropertyTag =
  | "High Growth Area"
  | "Upcoming Area"
  | "Prime Location"
  | "Best Value";

export interface Property {
  id: string;
  title: string;
  titleHindi: string;
  location: string;
  locationHindi: string;
  size: string; // e.g. "200 Sq Yd"
  sizeValue: number; // numeric sq yards
  price: string; // formatted e.g. "₹12,00,000"
  priceValue: number; // numeric in rupees
  pricePerSqYd: string; // formatted e.g. "₹6,000/Sq Yd"
  type: PropertyType;
  tag: PropertyTag;
  images: string[];
  description: string;
  features: string[];
  facing: string; // e.g. "East Facing"
  possession: string; // e.g. "Immediate Possession"
  highlight: string; // short highlight sentence
}

export interface LandCategory {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  descriptionHindi: string;
  icon: string; // Lucide icon name
  type: PropertyType;
  color: string; // hex
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  quote: string;
  quoteHindi: string;
  rating: number;
  date: string;
  propertyBought?: string;
}
