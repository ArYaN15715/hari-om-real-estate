# Design Brief — Hari Om Real Estate & Properties

**Positioning:** Trusted Plot & Land Experts Near Jaipur — emotionally grounded, culturally connected, anti-corporate.

**Tone:** Warm, earthy, rural-authentic. Emotional trust-building for semi-urban/rural land investors. Hindi + English bilingual voice. NOT corporate brokers, NOT luxury minimalism.

**Palette:**
| Token | OKLCH | Use |
| --- | --- | --- |
| Primary (Saffron) | 0.55 0.18 30 | CTAs, accents, highlights, trust markers |
| Secondary (Deep Green) | 0.42 0.15 115 | Land, nature, secondary CTAs |
| Background | 0.95 0.06 70 | Warm cream/beige page base |
| Card | 0.99 0.01 0 | White surfaces, plot cards, sections |
| Foreground | 0.12 0.01 60 | Charcoal text, high contrast |
| Muted | 0.88 0.04 70 | Borders, dividers, subtle backgrounds |
| Border | 0.92 0.03 70 | Subtle card/section borders |

**Typography:**
| Layer | Font | Weight | Size | Use |
| --- | --- | --- | --- | --- |
| Display | Fraunces | 700 | 32–48px | Headlines, hero, distinctive branding |
| Body | Nunito | 400–500 | 14–18px | Content, testimonials, product copy |
| Mono | JetBrains Mono | 400–500 | 12–14px | Code, data, optional technical text |

**Shape Language:** 12px default radius (organic curves). Sharp corners on micro-interactions. Warm, earthy shadows (8–20px blur, saffron-tinted). Card lift on hover (1.05x scale, 0.3s smooth transition).

**Structural Zones:**
| Zone | Background | Treatment | Rhythm |
| --- | --- | --- | --- |
| Hero | Image overlay + cream vignette | Full-bleed immersive, golden hour | Large display text, bold CTA |
| Content sections | Cream base | Card-based, generous whitespace | Alternating card/whitespace density |
| Testimonials | Muted / Card base | 5-card horizontal scroll (mobile) | Bilingual quote layout |
| Action footer | Secondary (Green) | Sticky, high contrast | Large 44px+ touch targets |

**Component Patterns:**
- Plot cards: Image, price, size, "High Growth Area" tag, card-lift hover
- CTA buttons: Primary (saffron) + Secondary (green), 44px+ touch targets, smooth hover opacity
- Testimonial cards: Bilingual quote + name + star rating, gentle shadow
- Trust section: Icon + headline + copy, alternating left/right layout on desktop

**Motion:**
- `fade-in`: 0.4s ease-out on page load
- `slide-up`: 0.5s ease-out on section reveals
- `card-lift`: hover scale 1.05 + shadow elevation
- `pulse-warm`: gentle 2s pulse for CTA urgency
- All transitions: 0.3s cubic-bezier(0.4, 0, 0.2, 1)

**Differentiation:** Rural-authentic visual language with modern execution. Golden hour drone imagery. Bilingual typography hierarchy. Warm shadows evoking rural trust. Card-lift micro-interactions create tactile familiarity. NO corporate gradient overlays, NO luxury minimalism.

**Constraint:** Mobile-first, 44px+ touch targets, large readable type on small screens, warm color contrast (AA+ WCAG).

**Dark Mode:** Tuned separately for rural/rural accessibility. Primary lifted to 0.68, backgrounds darkened to 0.15, borders kept visible at 0.3.
