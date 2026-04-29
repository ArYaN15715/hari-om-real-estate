import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";
import type { Testimonial } from "../types/property";

function StarRow({ count }: { count: number }) {
  const stars = Array.from({ length: count }, (_, i) => i + 1);
  return (
    <div className="flex gap-0.5 mb-3">
      {stars.map((n) => (
        <Star key={n} size={16} fill="#F59E0B" color="#F59E0B" />
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <div
      className="card-lift flex flex-col rounded-2xl p-5"
      style={{
        backgroundColor: "#FDFAF5",
        border: "1px solid #E8DCC8",
        borderLeft: "4px solid #2E7D32",
      }}
      data-ocid={`testimonials.item.${index + 1}`}
    >
      <StarRow count={t.rating} />

      {/* English quote */}
      <p
        className="text-sm leading-relaxed mb-3 flex-1"
        style={{ color: "#333" }}
      >
        "{t.quote}"
      </p>

      {/* Hindi quote */}
      {t.quoteHindi && (
        <p
          className="text-xs leading-relaxed mb-4 px-3 py-2 rounded-xl italic"
          style={{ backgroundColor: "#E8F5E9", color: "#2E7D32" }}
        >
          "{t.quoteHindi}"
        </p>
      )}

      {/* Property bought */}
      {t.propertyBought && (
        <span
          className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
          style={{ backgroundColor: "#FFF3E0", color: "#E65100" }}
        >
          🏡 {t.propertyBought}
        </span>
      )}

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <div
            className="font-bold text-sm truncate"
            style={{ color: "#1A1A1A" }}
          >
            {t.name}
          </div>
          <div className="text-xs" style={{ color: "#777" }}>
            {t.location} • {t.date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-16 px-4"
      style={{ backgroundColor: "#FAEFD8" }}
      data-ocid="testimonials.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#E65100" }}
          >
            Log Kya Kehte Hain
          </p>
          <h2
            className="font-display font-bold text-3xl md:text-4xl mb-2"
            style={{ color: "#1A1A1A" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-base" style={{ color: "#555" }}>
            Hamare graahakon ke asli anubhav — Real stories, real trust
          </p>
          {/* Rating summary */}
          <div
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full"
            style={{ backgroundColor: "#fff", border: "1.5px solid #E65100" }}
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span className="font-bold text-sm" style={{ color: "#E65100" }}>
              5.0
            </span>
            <span className="text-sm" style={{ color: "#555" }}>
              — 18 reviews on Google
            </span>
          </div>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-ocid="testimonials.list"
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
