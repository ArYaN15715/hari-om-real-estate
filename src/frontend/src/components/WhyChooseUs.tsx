import {
  BadgeDollarSign,
  FileText,
  HandshakeIcon,
  Key,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

const WHY_ITEMS = [
  {
    icon: Trophy,
    color: "#E65100",
    title: "18+ Saal Ka Bharosa",
    titleEn: "18+ Years of Trust",
    desc: "Jaipur ke aas-paas zameen bechain mein 18+ saal ka anubhav. Hazaron parivaar humare saath trusted transactions kar chuke hain.",
  },
  {
    icon: MapPin,
    color: "#2E7D32",
    title: "Local Expertise",
    titleEn: "Deep Area Knowledge",
    desc: "Rajawas, Nangal Purohit, aur aas-paas ke har mohalle ki gehri samajh. Aap jo plot dekhne aate hain — hum wahan ke hain.",
  },
  {
    icon: BadgeDollarSign,
    color: "#F57F17",
    title: "Transparent Pricing",
    titleEn: "No Hidden Charges",
    desc: "Koi chhupa hua charge nahi, koi broker games nahi. Jo rate bataya, wahi final — seedha, saaf, aur honest dealing.",
  },
  {
    icon: TrendingUp,
    color: "#1565C0",
    title: "High ROI Areas",
    titleEn: "Smart Investment Zones",
    desc: "Hum woh plots identify karte hain jahan agle 3-5 saalon mein sab se zyaada growth hogi. Aapka paisa safe bhi aur badh bhi.",
  },
  {
    icon: HandshakeIcon,
    color: "#6A1B9A",
    title: "End-to-End Support",
    titleEn: "From Visit to Registry",
    desc: "Site visit se lekar registry tak — documentation, legal checks, aur possession — sab mein hum aapke saath hain.",
  },
];

const STEPS = [
  {
    number: "01",
    icon: Phone,
    hindi: "Call ya WhatsApp Karein",
    english: "Contact Us",
    desc: "Seedha call ya WhatsApp par apni zaroorat batayein. Koi form nahi, koi wait nahi.",
  },
  {
    number: "02",
    icon: Search,
    hindi: "Property Visit",
    english: "We Take You for a Site Visit",
    desc: "Hum khud aapko property dikhane le jaate hain — koi rush nahi, poori transparency.",
  },
  {
    number: "03",
    icon: FileText,
    hindi: "Documentation",
    english: "We Handle All Paperwork",
    desc: "Khasra, Khatauni, Registry — saare documents hum check aur prepare karte hain.",
  },
  {
    number: "04",
    icon: Key,
    hindi: "Registry & Ownership",
    english: "Keys in Your Hands!",
    desc: "Registry ho jaaye, possession le lo — aapki zameen, aapka ghar! 🏡",
  },
];

const STATS = [
  {
    icon: Star,
    value: "5.0",
    label: "Google Rating",
    suffix: "⭐",
    color: "#E65100",
  },
  {
    icon: MessageCircle,
    value: "18",
    label: "Client Reviews",
    suffix: "Reviews",
    color: "#2E7D32",
  },
  {
    icon: Users,
    value: "3,500+",
    label: "Facebook Family",
    suffix: "Followers",
    color: "#1565C0",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-0" data-ocid="why_us.section">
      {/* Why Choose Us */}
      <div className="py-16 px-4" style={{ backgroundColor: "#FAEFD8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#E65100" }}
            >
              Kyun Chunein Humein
            </p>
            <h2
              className="font-display font-bold text-3xl md:text-4xl mb-2"
              style={{ color: "#1A1A1A" }}
            >
              Why Choose Us?
            </h2>
            <p className="text-base" style={{ color: "#555" }}>
              Woh cheezein jo hamein alag banati hain — Jaipur ke sab se
              trustworthy zameen agents
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-lift flex flex-col rounded-2xl p-6"
                  style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
                  data-ocid={`why_us.item.${i + 1}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon size={24} color={item.color} strokeWidth={1.8} />
                  </div>
                  <div
                    className="font-display font-bold text-base mb-0.5"
                    style={{ color: "#1A1A1A" }}
                  >
                    {item.title}
                  </div>
                  <div
                    className="text-xs font-semibold mb-2"
                    style={{ color: item.color }}
                  >
                    {item.titleEn}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#555" }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-16 px-4" style={{ backgroundColor: "#F5E6D3" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#2E7D32" }}
            >
              Itna Aasaan Hai
            </p>
            <h2
              className="font-display font-bold text-3xl md:text-4xl mb-2"
              style={{ color: "#1A1A1A" }}
            >
              Our Simple Process
            </h2>
            <p className="text-base" style={{ color: "#555" }}>
              4 simple steps — zameen dekhne se lekar apna banane tak
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line — desktop only */}
            <div
              className="absolute top-10 left-[12.5%] right-[12.5%] hidden lg:block"
              style={{
                height: "2px",
                background: "linear-gradient(to right, #E65100, #2E7D32)",
                zIndex: 0,
              }}
            />

            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center relative z-10"
                  data-ocid={`process.step.${i + 1}`}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg"
                    style={{
                      background:
                        i % 2 === 0
                          ? "linear-gradient(135deg, #E65100, #BF360C)"
                          : "linear-gradient(135deg, #2E7D32, #1B5E20)",
                      border: "4px solid #F5E6D3",
                    }}
                  >
                    <Icon size={30} color="#fff" strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-xs font-bold mb-1 px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: "#E6510018", color: "#E65100" }}
                  >
                    Step {step.number}
                  </span>
                  <div
                    className="font-display font-bold text-base mb-0.5"
                    style={{ color: "#1A1A1A" }}
                  >
                    {step.hindi}
                  </div>
                  <div
                    className="text-xs font-semibold mb-2"
                    style={{ color: "#2E7D32" }}
                  >
                    {step.english}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#555" }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="py-10 px-4"
        style={{ background: "linear-gradient(135deg, #1B4D1C, #2E7D32)" }}
        data-ocid="stats.panel"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center"
                data-ocid={`stats.item.${i + 1}`}
              >
                <div
                  className="text-4xl font-display font-bold leading-none mb-1"
                  style={{ color: "#FFF5E6" }}
                >
                  {stat.value}
                </div>
                <div className="text-lg mb-0.5" style={{ color: "#A5D6A7" }}>
                  {stat.suffix}
                </div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: "#C8E6C9" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
