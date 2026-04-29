import {
  CheckCircle,
  ChevronDown,
  MessageCircle,
  Phone,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { PHONE_URL, WHATSAPP_URL } from "../lib/contact";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Hero background image */}
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
        alt="Lush green farmland aerial view near Jaipur"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(30,10,0,0.72) 0%, rgba(20,40,10,0.65) 50%, rgba(10,30,5,0.75) 100%)",
        }}
      />
      {/* Saffron warm glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(230,100,0,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Hero Content */}
      <div
        className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto w-full"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        }}
      >
        {/* Location badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-sm font-semibold tracking-wide"
          style={{
            background: "rgba(230,81,0,0.22)",
            color: "#FFD080",
            border: "1px solid rgba(230,81,0,0.4)",
          }}
        >
          📍 Rajawas • Nangal Purohit • Jaipur
        </div>

        {/* Main headline */}
        <h1
          className="font-display font-bold leading-tight mb-3"
          style={{
            color: "#FFF5E6",
            fontSize: "clamp(1.9rem, 6vw, 3.8rem)",
            textShadow: "0 2px 20px rgba(0,0,0,0.6)",
          }}
        >
          Apni Zameen,
          <br />
          <span style={{ color: "#FFB347" }}>Apna Future</span>
        </h1>

        {/* English sub-headline */}
        <p
          className="font-body font-semibold mb-2"
          style={{
            color: "#F0DCC0",
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
          }}
        >
          Your Trusted Plot &amp; Land Partner Near Jaipur
        </p>

        {/* Hindi supporting line */}
        <p
          className="mb-7 font-body opacity-80"
          style={{ color: "#C8E6C9", fontSize: "clamp(0.85rem, 2vw, 1.05rem)" }}
        >
          Vishwasniya Zameen aur Plot Solutions — 18+ Saal Ka Bharosa
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-7">
          <a
            href={PHONE_URL}
            className="inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95 shadow-lg flex-1 sm:flex-none"
            style={{
              backgroundColor: "#E65100",
              color: "#fff",
              minHeight: "52px",
              padding: "0 28px",
              fontSize: "1rem",
              minWidth: "160px",
              touchAction: "manipulation",
            }}
            data-ocid="hero.call_button"
          >
            <Phone size={19} />📞 Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95 shadow-lg flex-1 sm:flex-none"
            style={{
              backgroundColor: "#2E7D32",
              color: "#fff",
              minHeight: "52px",
              padding: "0 28px",
              fontSize: "1rem",
              minWidth: "160px",
              touchAction: "manipulation",
            }}
            data-ocid="hero.whatsapp_button"
          >
            <MessageCircle size={19} />💬 WhatsApp Now
          </a>
        </div>

        {/* Social proof mini-bar */}
        <div
          className="inline-flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold"
          style={{
            background: "rgba(255,255,255,0.09)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#F5E6D3",
          }}
        >
          <span className="flex items-center gap-1.5">
            <Star size={14} fill="#FFB347" color="#FFB347" />
            5.0 (18 Reviews)
          </span>
          <span className="opacity-40 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <Users size={14} style={{ color: "#90CAF9" }} />
            3,500+ Facebook
          </span>
          <span className="opacity-40 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle size={14} style={{ color: "#A5D6A7" }} />
            18+ Years
          </span>
        </div>
      </div>

      {/* Scroll chevron */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
        style={{
          opacity: visible ? 0.7 : 0,
          transition: "opacity 1.2s ease 0.8s",
        }}
      >
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "#F5E6D3" }}
        >
          Scroll
        </span>
        <ChevronDown
          size={22}
          style={{ color: "#E65100" }}
          className="animate-bounce"
        />
      </div>
    </section>
  );
}
