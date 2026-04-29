import { MessageCircle, Phone } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL } from "../lib/contact";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-20 px-4 overflow-hidden"
      data-ocid="cta.section"
      style={{
        background:
          "linear-gradient(135deg, #BF360C 0%, #E65100 40%, #F57F17 100%)",
      }}
    >
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20px 20px, rgba(255,255,255,0.4) 2px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,200,80,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Emoji */}
        <div className="text-5xl mb-4">🌟</div>

        {/* Hindi headline */}
        <h2
          className="font-display font-bold leading-tight mb-3"
          style={{
            color: "#FFF5E6",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            textShadow: "0 2px 16px rgba(0,0,0,0.3)",
          }}
        >
          Apni Zameen Abhi Dekhein!
        </h2>

        {/* English headline */}
        <p
          className="font-semibold mb-3"
          style={{ color: "#FFE0B2", fontSize: "clamp(1rem, 2.5vw, 1.3rem)" }}
        >
          Find Your Perfect Plot Today
        </p>

        {/* Supporting text */}
        <p
          className="mb-8 opacity-90"
          style={{ color: "#FFE0B2", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
        >
          Aaj hi hamare experts se baat karein.{" "}
          <strong style={{ color: "#fff" }}>Free consultation</strong>, no
          pressure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PHONE_URL}
            className="inline-flex items-center justify-center gap-2.5 font-bold rounded-2xl transition-all duration-200 hover:opacity-90 active:scale-95 shadow-xl"
            style={{
              backgroundColor: "#fff",
              color: "#E65100",
              minHeight: "56px",
              padding: "0 36px",
              fontSize: "1.1rem",
            }}
            data-ocid="cta.call_button"
          >
            <Phone size={20} />📞 Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 font-bold rounded-2xl transition-all duration-200 hover:opacity-90 active:scale-95 shadow-xl"
            style={{
              backgroundColor: "#1B5E20",
              color: "#fff",
              minHeight: "56px",
              padding: "0 36px",
              fontSize: "1.1rem",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
            data-ocid="cta.whatsapp_button"
          >
            <MessageCircle size={20} />💬 WhatsApp Now
          </a>
        </div>

        {/* Trust note */}
        <p className="mt-6 text-sm opacity-70" style={{ color: "#FFF5E6" }}>
          ✅ 18+ saal ka bharosa • 🏡 500+ families served • 📍 Jaipur ke paas
        </p>
      </div>
    </section>
  );
}
