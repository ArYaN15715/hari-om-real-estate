import { MapPin } from "lucide-react";
import { useState } from "react";
import { PROPERTIES } from "../data/properties";
import type { Property } from "../types/property";
import PropertyModal from "./PropertyModal";

const TYPE_COLORS: Record<string, string> = {
  Residential: "#E65100",
  Farm: "#2E7D32",
  Investment: "#F57F17",
  Commercial: "#1565C0",
};

const TAG_LABELS: Record<string, string> = {
  "High Growth Area": "🚀 High Growth",
  "Upcoming Area": "🌟 Upcoming",
  "Prime Location": "📍 Prime",
  "Best Value": "💎 Best Value",
};

function PropertyCard({
  prop,
  index,
  onClick,
}: { prop: Property; index: number; onClick: () => void }) {
  const typeColor = TYPE_COLORS[prop.type] ?? "#E65100";
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className="card-lift flex flex-col rounded-2xl overflow-hidden"
      style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
      data-ocid={`properties.item.${index + 1}`}
    >
      {/* Image with proper aspect ratio */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#EDE0D0]">
        {/* Skeleton shimmer while image loads */}
        {!imgLoaded && (
          <div
            className="absolute inset-0 animate-pulse"
            style={{ backgroundColor: "#E8D5BF" }}
          />
        )}
        <img
          src={prop.images[0]}
          alt={prop.title}
          className="w-full h-full object-cover transition-all duration-300"
          loading="lazy"
          decoding="async"
          onLoad={() => setImgLoaded(true)}
          style={{
            opacity: imgLoaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
        {/* Price overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 px-3 py-2 flex items-center justify-between"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
          }}
        >
          <span
            className="font-bold text-base sm:text-lg"
            style={{ color: "#FFB347" }}
          >
            {prop.price}
          </span>
          <span className="text-xs" style={{ color: "#ddd" }}>
            {prop.pricePerSqYd}
          </span>
        </div>
        {/* Tag badge */}
        <div className="absolute top-2 left-2">
          <span
            className="inline-block px-2 py-0.5 rounded-full text-xs font-bold"
            style={{ backgroundColor: "#E65100", color: "#fff" }}
          >
            {TAG_LABELS[prop.tag] ?? prop.tag}
          </span>
        </div>
        {/* Type badge */}
        <div className="absolute top-2 right-2">
          <span
            className="inline-block px-2 py-0.5 rounded-full text-xs font-bold"
            style={{ backgroundColor: typeColor, color: "#fff" }}
          >
            {prop.type}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4">
        <h3
          className="font-display font-bold text-base leading-tight mb-0.5 line-clamp-1"
          style={{ color: "#1A1A1A" }}
        >
          {prop.title}
        </h3>
        <p
          className="text-xs font-semibold mb-2 line-clamp-1"
          style={{ color: "#777" }}
        >
          {prop.titleHindi}
        </p>

        <div className="flex items-center gap-1.5 mb-3">
          <MapPin size={13} style={{ color: "#E65100", flexShrink: 0 }} />
          <span className="text-xs truncate" style={{ color: "#555" }}>
            {prop.location}
          </span>
        </div>

        {/* Specs row */}
        <div
          className="flex gap-3 px-3 py-2 rounded-xl mb-4 text-xs font-semibold"
          style={{ backgroundColor: "#F5E6D3" }}
        >
          <span style={{ color: "#2E7D32" }}>📐 {prop.size}</span>
          <span className="opacity-30">|</span>
          <span style={{ color: "#E65100" }} className="truncate">
            {prop.pricePerSqYd}
          </span>
        </div>

        {/* View Details button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="w-full inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95 mt-auto"
          style={{
            backgroundColor: "#E65100",
            color: "#fff",
            minHeight: "44px",
            fontSize: "0.9rem",
            touchAction: "manipulation",
          }}
          data-ocid={`properties.view_details_button.${index + 1}`}
        >
          View Details / विवरण देखें
        </button>
      </div>
    </div>
  );
}

export default function FeaturedPlots() {
  const [selected, setSelected] = useState<Property | null>(null);

  return (
    <section
      id="properties"
      className="py-12 md:py-20 px-4"
      style={{ backgroundColor: "#F5E6D3" }}
      data-ocid="properties.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <p
            className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#2E7D32" }}
          >
            Hamari Khaas Properties
          </p>
          <h2
            className="font-display font-bold text-2xl md:text-4xl mb-2"
            style={{ color: "#1A1A1A" }}
          >
            Featured Plots
          </h2>
          <p className="text-sm sm:text-base" style={{ color: "#555" }}>
            Top-rated, verified plots — hamare experts ki pasand aapke liye
          </p>
        </div>

        {/* Property grid — 1 col mobile, 2 on sm, 3 on lg */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          data-ocid="properties.list"
        >
          {PROPERTIES.map((prop, i) => (
            <PropertyCard
              key={prop.id}
              prop={prop}
              index={i}
              onClick={() => setSelected(prop)}
            />
          ))}
        </div>
      </div>

      {/* Property modal */}
      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
