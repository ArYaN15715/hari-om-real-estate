import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  CheckCircle2,
  Compass,
  IndianRupee,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";
import { PHONE_URL } from "../lib/contact";
import type { Property } from "../types/property";

const TYPE_COLORS: Record<string, string> = {
  Residential: "#E65100",
  Farm: "#2E7D32",
  Investment: "#F57F17",
  Commercial: "#1565C0",
};

const TAG_LABELS: Record<string, string> = {
  "High Growth Area": "🚀 High Growth Area",
  "Upcoming Area": "🌟 Upcoming Area",
  "Prime Location": "📍 Prime Location",
  "Best Value": "💎 Best Value",
};

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({
  property,
  onClose,
}: PropertyModalProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  if (!property) return null;

  // Build property-specific WhatsApp URL
  const waUrl = `https://wa.me/919829012345?text=${encodeURIComponent(
    `Namaste! Mujhe ${property.title} ke baare mein details chahiye.`,
  )}`;
  const typeColor = TYPE_COLORS[property.type] ?? "#E65100";

  const details = [
    { label: "Location", value: property.location, icon: <MapPin size={14} /> },
    { label: "Size", value: property.size, icon: <Maximize2 size={14} /> },
    { label: "Price", value: property.price, icon: <IndianRupee size={14} /> },
    {
      label: "Per Sq Yd",
      value: property.pricePerSqYd,
      icon: <IndianRupee size={14} />,
    },
    { label: "Type", value: property.type, icon: <CheckCircle2 size={14} /> },
    { label: "Facing", value: property.facing, icon: <Compass size={14} /> },
    {
      label: "Possession",
      value: property.possession,
      icon: <Calendar size={14} />,
    },
  ];

  return (
    <Dialog open={!!property} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="w-[calc(100vw-1rem)] sm:max-w-2xl max-h-[95dvh] overflow-y-auto p-0 rounded-2xl"
        style={{ backgroundColor: "#FDFAF5" }}
        data-ocid="property_modal.dialog"
      >
        {/* Close button — large tap target */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 hover:opacity-80"
          style={{ backgroundColor: "rgba(0,0,0,0.18)", color: "#fff" }}
          data-ocid="property_modal.close_button"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Image with proper aspect ratio */}
        <div className="relative w-full overflow-hidden rounded-t-2xl aspect-video bg-[#EDE0D0]">
          {!imgLoaded && (
            <div
              className="absolute inset-0 animate-pulse"
              style={{ backgroundColor: "#E8D5BF" }}
            />
          )}
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onLoad={() => setImgLoaded(true)}
            style={{
              opacity: imgLoaded ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.48) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Header section */}
        <DialogHeader className="px-4 sm:px-6 pt-5 pb-3">
          <div className="flex flex-wrap gap-2 mb-2">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold"
              style={{ backgroundColor: `${typeColor}18`, color: typeColor }}
            >
              {property.type}
            </span>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold"
              style={{ backgroundColor: "#E6510018", color: "#E65100" }}
            >
              {TAG_LABELS[property.tag] ?? property.tag}
            </span>
          </div>
          <DialogTitle
            className="font-display font-bold text-lg md:text-2xl leading-tight"
            style={{ color: "#1A1A1A" }}
          >
            {property.title}
          </DialogTitle>
          <p
            className="text-sm sm:text-base font-semibold mt-0.5"
            style={{ color: "#555" }}
          >
            {property.titleHindi}
          </p>
        </DialogHeader>

        <div className="px-4 sm:px-6 pb-6 space-y-4 sm:space-y-5">
          {/* Details grid — 1 col mobile, 2-3 cols wider */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5"
                style={{ backgroundColor: "#F5E6D3" }}
              >
                <span
                  className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide"
                  style={{ color: "#888" }}
                >
                  {d.icon}
                  {d.label}
                </span>
                <span
                  className="font-bold text-sm leading-snug break-words"
                  style={{ color: d.label === "Price" ? "#E65100" : "#1A1A1A" }}
                >
                  {d.value}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h4
              className="font-semibold text-xs mb-2 uppercase tracking-wide"
              style={{ color: "#888" }}
            >
              About this Property
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#444" }}>
              {property.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h4
              className="font-semibold text-xs mb-3 uppercase tracking-wide"
              style={{ color: "#888" }}
            >
              Features &amp; Amenities
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {property.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm leading-snug"
                  style={{ color: "#333" }}
                >
                  <CheckCircle2
                    size={14}
                    style={{ color: "#2E7D32", flexShrink: 0, marginTop: 2 }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Location reference */}
          <div
            className="flex items-start gap-2 rounded-xl px-4 py-3"
            style={{ backgroundColor: "#E8F5E9" }}
          >
            <MapPin
              size={15}
              style={{ color: "#2E7D32", flexShrink: 0, marginTop: 2 }}
            />
            <p className="text-sm" style={{ color: "#2E7D32" }}>
              <strong>Location:</strong> {property.location} —{" "}
              {property.locationHindi}
            </p>
          </div>

          {/* Highlight box */}
          <div
            className="rounded-xl px-4 py-3 flex items-center gap-3"
            style={{
              backgroundColor: "#FFF3E0",
              border: "1.5px solid #E65100",
            }}
          >
            <span className="text-xl flex-shrink-0">✨</span>
            <p className="text-sm font-bold" style={{ color: "#E65100" }}>
              {property.highlight}
            </p>
          </div>

          {/* CTA Buttons — full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={PHONE_URL}
              className="flex-1 inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#E65100",
                color: "#fff",
                minHeight: "52px",
                fontSize: "1rem",
                touchAction: "manipulation",
              }}
              data-ocid="property_modal.call_button"
            >
              <Phone size={18} />📞 Call to Inquire
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#2E7D32",
                color: "#fff",
                minHeight: "52px",
                fontSize: "1rem",
                touchAction: "manipulation",
              }}
              data-ocid="property_modal.whatsapp_button"
            >
              <MessageCircle size={18} />💬 WhatsApp for Details
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
