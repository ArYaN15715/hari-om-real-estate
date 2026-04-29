import {
  Building2,
  Home,
  MessageCircle,
  Sprout,
  TrendingUp,
} from "lucide-react";
import { CATEGORIES } from "../data/categories";
import type { LandCategory } from "../types/property";

type IconComponent = React.FC<{
  size?: number;
  color?: string;
  strokeWidth?: number;
}>;

const iconMap: Record<string, IconComponent> = {
  Home,
  Sprout,
  TrendingUp,
  Building2,
};

function CategoryCard({ cat, index }: { cat: LandCategory; index: number }) {
  const Icon = iconMap[cat.icon] ?? Home;
  const waText = encodeURIComponent(
    `Namaste! Mujhe ${cat.name} ke baare mein jaankari chahiye.`,
  );
  const waUrl = `https://wa.me/919829012345?text=${waText}`;

  return (
    <div
      className="card-lift flex flex-col items-start rounded-2xl p-4 sm:p-6"
      style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
      data-ocid={`categories.item.${index + 1}`}
    >
      {/* Icon circle */}
      <div
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl mb-3 sm:mb-4 flex-shrink-0"
        style={{ backgroundColor: `${cat.color}18` }}
      >
        <Icon size={24} color={cat.color} strokeWidth={1.8} />
      </div>

      {/* Names */}
      <div
        className="font-display font-bold text-base sm:text-lg leading-tight mb-0.5"
        style={{ color: "#1A1A1A" }}
      >
        {cat.name}
      </div>
      <div
        className="text-xs sm:text-sm font-semibold mb-2"
        style={{ color: cat.color }}
      >
        {cat.nameHindi}
      </div>

      {/* Description */}
      <p
        className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 flex-1"
        style={{ color: "#555" }}
      >
        {cat.description}
      </p>
      <p
        className="text-xs leading-relaxed mb-4 sm:mb-5"
        style={{ color: "#777" }}
      >
        {cat.descriptionHindi}
      </p>

      {/* Enquire CTA */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 w-full justify-center"
        style={{
          backgroundColor: cat.color,
          color: "#fff",
          minHeight: "44px",
          touchAction: "manipulation",
        }}
        data-ocid={`categories.enquire_button.${index + 1}`}
      >
        <MessageCircle size={16} />
        Enquire Now
      </a>
    </div>
  );
}

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="py-12 md:py-20 px-4"
      style={{ backgroundColor: "#FAEFD8" }}
      data-ocid="categories.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <p
            className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#E65100" }}
          >
            Zameen ke Prakar
          </p>
          <h2
            className="font-display font-bold text-2xl md:text-4xl mb-2"
            style={{ color: "#1A1A1A" }}
          >
            Hamare Plot Types
          </h2>
          <p className="text-sm sm:text-base" style={{ color: "#555" }}>
            Our Land Categories — Apni zaroorat ke hisab se chunein
          </p>
        </div>

        {/* Cards grid — 2 cols on mobile, 4 on md+ */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          data-ocid="categories.list"
        >
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
