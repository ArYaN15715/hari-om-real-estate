import { Facebook, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { PHONE_NUMBER, PHONE_URL, WHATSAPP_URL } from "../lib/contact";

const FACEBOOK_URL = "https://www.facebook.com/HariOmRealEstateJaipur";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col overflow-x-hidden"
      style={{ backgroundColor: "#F5E6D3" }}
    >
      {/* Sticky Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(245, 230, 211, 0.97)"
            : "rgba(245, 230, 211, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.1)" : "none",
        }}
        data-ocid="nav.panel"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-18">
            {/* Brand */}
            <button
              type="button"
              className="flex items-center gap-2 min-w-0 bg-transparent border-0 cursor-pointer text-left"
              data-ocid="nav.brand_link"
              onClick={() => {
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{ touchAction: "manipulation" }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg, #E65100, #BF360C)",
                }}
              >
                हो
              </div>
              <div className="min-w-0">
                <div
                  className="font-display font-bold text-sm md:text-lg leading-tight truncate"
                  style={{ color: scrolled ? "#E65100" : "#E65100" }}
                >
                  Hari Om Real Estate
                </div>
                <div
                  className="text-xs leading-tight hidden sm:block"
                  style={{ color: scrolled ? "#2E7D32" : "#2E7D32" }}
                >
                  &amp; Properties • Jaipur ke Paas
                </div>
              </div>
            </button>

            {/* Nav CTA Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={PHONE_URL}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: "#E65100",
                  color: "#ffffff",
                  minHeight: "40px",
                  touchAction: "manipulation",
                }}
                data-ocid="nav.call_button"
              >
                <Phone size={15} />
                <span>Call Now</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: "#2E7D32",
                  color: "#ffffff",
                  minHeight: "40px",
                  touchAction: "manipulation",
                }}
                data-ocid="nav.whatsapp_button"
              >
                <MessageCircle size={15} />
                <span className="hidden xs:inline sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content — pb-20 ensures sticky bar never covers content */}
      <main className="flex-1 pt-14 md:pt-18 pb-20">{children}</main>

      {/* Footer */}
      <footer
        className="border-t pb-20"
        style={{
          backgroundColor: "#1A1A1A",
          borderColor: "#333",
          color: "#F5E6D3",
        }}
        data-ocid="footer.panel"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #E65100, #BF360C)",
                  }}
                >
                  हो
                </div>
                <div>
                  <div
                    className="font-display font-bold text-lg"
                    style={{ color: "#E65100" }}
                  >
                    Hari Om Real Estate
                  </div>
                  <div className="text-xs" style={{ color: "#A5D6A7" }}>
                    &amp; Properties
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                Apni Zameen, Apna Future 🌱<br />
                Jaipur ke paas vishwasniya zameen aur plot solutions. Trusted by
                500+ families across Rajasthan.
              </p>
              <div className="flex items-center gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="#E65100" color="#E65100" />
                ))}
                <span className="text-xs ml-1 opacity-80">
                  5.0 (18 Reviews)
                </span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="font-semibold mb-3 text-base"
                style={{ color: "#E65100" }}
              >
                Sampark Karein / Contact Us
              </h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-start gap-2">
                  <MapPin
                    size={15}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#E65100" }}
                  />
                  <span>
                    Rajawas, Nangal Purohit,
                    <br />
                    Near Jaipur, Rajasthan
                  </span>
                </li>
                <li>
                  <a
                    href={PHONE_URL}
                    className="flex items-center gap-2 hover:opacity-100 transition-opacity"
                    data-ocid="footer.call_link"
                    style={{ touchAction: "manipulation" }}
                  >
                    <Phone size={14} style={{ color: "#E65100" }} />
                    <span>{PHONE_NUMBER}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-100 transition-opacity"
                    data-ocid="footer.whatsapp_link"
                    style={{ touchAction: "manipulation" }}
                  >
                    <MessageCircle size={14} style={{ color: "#2E7D32" }} />
                    <span>WhatsApp Karein</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3
                className="font-semibold mb-3 text-base"
                style={{ color: "#E65100" }}
              >
                Hamare Saath Judein
              </h3>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#1877F2", color: "#ffffff" }}
                data-ocid="footer.facebook_link"
              >
                <Facebook size={16} />
                <span>Facebook – 3.5K+ Followers</span>
              </a>
              <p className="text-xs mt-3 opacity-60 leading-relaxed">
                Humari Facebook community join karein. Nayi properties, market
                updates aur tips seedhe aapke paas.
              </p>
            </div>
          </div>

          <div
            className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-50"
            style={{ borderTop: "1px solid #333" }}
          >
            <span>
              © {new Date().getFullYear()} Hari Om Real Estate &amp; Properties.
              All rights reserved.
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              Built with love using caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Action Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex safe-bottom"
        style={{ boxShadow: "0 -2px 16px rgba(0,0,0,0.25)" }}
        data-ocid="sticky_actions.panel"
      >
        <a
          href={PHONE_URL}
          className="flex-1 flex items-center justify-center gap-2 font-bold text-base transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            backgroundColor: "#E65100",
            color: "#ffffff",
            minHeight: "56px",
            touchAction: "manipulation",
          }}
          data-ocid="sticky_actions.call_button"
        >
          <Phone size={20} />
          <span>📞 Call Now</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 font-bold text-base transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            backgroundColor: "#2E7D32",
            color: "#ffffff",
            minHeight: "56px",
            touchAction: "manipulation",
          }}
          data-ocid="sticky_actions.whatsapp_button"
        >
          <MessageCircle size={20} />
          <span>💬 WhatsApp Now</span>
        </a>
      </div>
    </div>
  );
}
