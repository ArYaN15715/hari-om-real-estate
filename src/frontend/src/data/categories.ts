import type { LandCategory } from "../types/property";

export const CATEGORIES: LandCategory[] = [
  {
    id: "cat-residential",
    name: "Residential Plot",
    nameHindi: "आवासीय भूखंड",
    description:
      "Build your dream home on our ready-to-construct residential plots with all approvals.",
    descriptionHindi: "Apne sapno ka plot — seedha Jaipur ke paas",
    icon: "Home",
    type: "Residential",
    color: "#E65100",
  },
  {
    id: "cat-farm",
    name: "Farm Land",
    nameHindi: "कृषि भूमि / फार्महाउस",
    description:
      "Fertile agricultural land for farming, organic cultivation, or a peaceful farmhouse retreat.",
    descriptionHindi: "खेती, जैविक खेती या शांत फार्महाउस के लिए उपजाऊ कृषि भूमि",
    icon: "Sprout",
    type: "Farm",
    color: "#2E7D32",
  },
  {
    id: "cat-investment",
    name: "Investment Plot",
    nameHindi: "निवेश के अवसर",
    description:
      "High-growth investment plots in rapidly developing corridors near Jaipur.",
    descriptionHindi:
      "जयपुर के पास तेज़ी से विकसित हो रहे क्षेत्रों में उच्च वृद्धि वाले निवेश भूखंड",
    icon: "TrendingUp",
    type: "Investment",
    color: "#F57F17",
  },
  {
    id: "cat-commercial",
    name: "Commercial Land",
    nameHindi: "वाणिज्यिक स्थान",
    description:
      "Prime commercial spaces on highways and main roads for shops, showrooms, and warehouses.",
    descriptionHindi:
      "दुकान, शोरूम और वेयरहाउस के लिए राजमार्गों पर प्रमुख वाणिज्यिक स्थान",
    icon: "Building2",
    type: "Commercial",
    color: "#1565C0",
  },
];
