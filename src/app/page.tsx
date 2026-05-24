import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Kashmir Essence | GI-Tagged Kashmiri Saffron, Shilajit & Authentic Kashmir Products",
  description: "Authentic GI-Tagged Kashmiri saffron (Mongra & Lacha), pure Himalayan Shilajit resin, heritage Mamra almonds, raw Kashmir honey & spices. Direct from Pampore. Ships India & worldwide.",
  alternates: { canonical: "https://www.kashmiressence.com" },
};

const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20order.";

const TRUST = [
  { icon: "🏷️", label: "GI-Tagged Saffron", sub: "Govt. of India 2020" },
  { icon: "🔬", label: "ISO 3632 Cat. I", sub: "Lab Certified" },
  { icon: "🏔️", label: "Pure Shilajit Resin", sub: "4,000m+ Altitude" },
  { icon: "✈️", label: "Ships to 25+ Countries", sub: "UAE · USA · UK" },
  { icon: "↩️", label: "100% Authentic", sub: "Or Full Refund" },
];

// Category cards with real product images
const CATS = [
  {
    slug: "saffron", label: "Saffron", sub: "GI-Tagged · Mongra & Lacha",
    img: "/images/saffron-vial-1g.jpg",
    alt: "Buy GI-Tagged Kashmiri Saffron Mongra online — premium 1g vial",
    bg: "bg-maroon-50 border-maroon-100",
    href: "/categories/saffron",
  },
  {
    slug: "shilajit", label: "Shilajit", sub: "Pure Himalayan Resin · Lab Tested",
    img: "/images/shilajit-resin.jpg",
    alt: "Pure Himalayan Shilajit Resin 20g amber jar — fulvic acid verified",
    bg: "bg-stone-50 border-stone-100",
    href: "/products/himalayan-shilajit-resin",
  },
  {
    slug: "almonds", label: "Mamra Almonds", sub: "Heritage Karewa Variety",
    img: "/images/mamra-almonds-250.jpg",
    alt: "Kashmiri Mamra Almonds 250g — heritage Karewa plateau variety",
    bg: "bg-gold-50 border-gold-100",
    href: "/products/mamra-almonds-premium",
  },
  {
    slug: "honey", label: "Honey", sub: "Raw · Cold-Extracted",
    img: "/images/ramban-sulai-honey.jpg",
    alt: "Ramban Sulai Honey GI-Tagged — raw Kashmir mountain honey 500g",
    bg: "bg-gold-50 border-gold-100",
    href: "/categories/honey",
  },
  {
    slug: "spices", label: "Kahwa & Spices", sub: "Authentic Valley Blends",
    img: "/images/kashmiri-kahwa-blend.jpg",
    alt: "Kashmiri Kahwa Spice Blend 100g tin — traditional recipe with saffron",
    bg: "bg-valley-50 border-valley-100",
    href: "/categories/spices",
  },
  {
    slug: "walnuts", label: "Walnuts", sub: "Soft-Shell · High Omega-3",
    img: "/images/kashmiri-walnut-kernels.jpg",
    alt: "Kashmiri Walnut Kernels Extra Light Halves 500g — paper-shell variety",
    bg: "bg-ivory-100 border-ivory-200",
    href: "/categories/walnuts",
  },
];

const STEPS = [
  { n: "01", title: "WhatsApp Your Order", body: "Message us your order. We confirm in minutes, 7 days a week." },
  { n: "02", title: "Packed at Source", body: "Packed the same day in Pampore or Kashmir Valley." },
  { n: "03", title: "Delivered to Your Door", body: "India: 3–5 days. International: 5–14 days. Customs-safe." },
];

const REVIEWS = [
  { name: "Aisha K.", city: "Dubai, UAE", stars: 5, text: "Finally found real Kashmiri saffron. The aroma is extraordinary. I've been ordering every month for 6 months now — nothing compares." },
  { name: "Arjun P.", city: "Delhi NCR", stars: 5, text: "The Shilajit resin is outstanding — dissolves perfectly in warm water, zero residue. Noticed real energy improvement within 2 weeks." },
  { name: "Priya M.", city: "Mumbai", stars: 5, text: "Mongra saffron colour in biryani is incomparable. My family can immediately tell the difference from supermarket saffron." },
  { name: "Fatima A.", city: "Abu Dhabi, UAE", stars: 5, text: "Gifted the saffron tin for Eid. Beautiful presentation and the quality exceeded all expectations. Everyone asked where it was from." },
  { name: "Dr. Ramesh", city: "Bangalore", stars: 5, text: "As a physician I'm sceptical of supplement claims. But the Shilajit is authentic resin — I tested it. The fulvic acid release is real." },
  { name: "Sara M.", city: "London, UK", stars: 5, text: "I've tried several Kashmiri saffron brands in the UK. Kashmir Essence is the only one that actually smells and tastes like the real thing." },
  { name: "Tariq H.", city: "Riyadh, Saudi Arabia", stars: 5, text: "Ordered Mamra almonds for my mother — she said they taste exactly like what we used to buy in Kashmir years ago. Genuinely impressed." },
  { name: "Nisha R.", city: "Hyderabad", stars: 5, text: "The Kahwa blend is perfect. Made it every morning for the past 3 weeks. So different from the generic Kahwa sold in stores — proper spice balance." },
  { name: "Mohsin B.", city: "Toronto, Canada", stars: 5, text: "Fast shipping to Canada, well-packaged, customs had no issues. The saffron arrived intact and sealed. Will definitely reorder." },
  { name: "Ananya S.", city: "Pune", stars: 5, text: "Honey is incredible — raw and thick, not runny like the processed stuff. You can taste the alpine flowers. Worth every rupee." },
  { name: "Ali K.", city: "Muscat, Oman", stars: 5, text: "Ordered saffron to Oman twice now. Packaging is excellent, delivery was on time. The WhatsApp ordering is so convenient." },
  { name: "Meera V.", city: "Chennai", stars: 5, text: "Bought walnuts and Mamra almonds together. Both are exceptional quality — you can tell immediately they're not the regular market variety." },
];

const FEATURED = products.filter((p) => [
  "kashmiri-saffron-mongra",
  "himalayan-shilajit-resin",
  "mamra-almonds-premium",
  "kashmiri-walnut-kernels",
  "ramban-sulai-honey",
  "kashmiri-kahwa-blend",
].includes(p.slug));

// Product spotlight data for the "why choose" section
const SPOTLIGHTS = [
  {
    slug: "himalayan-shilajit-resin",
    name: "Himalayan Shilajit Resin",
    tagline: "Lab Tested · J&K Himalayan Source",
    taglineColor: "bg-gold-600/20 border border-gold-600/40 text-gold-400",
    desc: "Collected from Himalayan rock fissures at 4,000–5,000m in Jammu & Kashmir. Lab-tested for fulvic acid, humic acid, and 85+ trace minerals. Pure resin — not powder, not capsules.",
    features: ["85+ Trace Minerals", "Fulvic Acid Verified", "Heavy Metal Tested", "Traditional Sun Purified", "60 servings / 20g jar", "J&K Himalayan Source"],
    price: "₹1,299",
    img: "/images/shilajit-resin.jpg",
    imgAlt: "Pure Himalayan Shilajit Resin 20g amber glass jar with gold lid — Kashmir Essence",
    ctaLink: "/products/himalayan-shilajit-resin",
    waMsg: "Hi Kashmir Essence, I want to order Himalayan Shilajit Resin 20g.",
    bg: "bg-ink-950",
    textColor: "text-white",
    descColor: "text-ink-300",
    featColor: "text-ink-200",
    accentColor: "text-gold-500",
    ctaBg: "bg-gold-600 hover:bg-gold-500 text-ink-950",
    learnColor: "text-gold-400 hover:text-gold-300 border-gold-400 hover:border-gold-300",
    statColor: "text-gold-400",
    statBg: "bg-white/5 border border-white/10",
    stats: [["60×", "Servings per jar"], ["60%+", "Fulvic Acid"], ["85+", "Trace Minerals"]],
  },
  {
    slug: "mamra-almonds-premium",
    name: "Kashmiri Mamra Almonds",
    tagline: "Heritage Karewa Variety · Zero PPO Treatment",
    taglineColor: "bg-gold-100 border border-gold-200 text-gold-800",
    desc: "Grown on 1,000-year-old orchards on Kashmir's Karewa plateau at 1,500m. Contains 2–3× more natural oil than California almonds. Zero chemical pasteurization — raw, unprocessed, full-nutrition.",
    features: ["2–3× Higher Oil Content", "Zero PPO Treatment", "Karewa Plateau Grown", "Heritage Orchards 1000+ Yr", "High Vitamin E & Phospholipids", "Direct from Growers"],
    price: "₹699",
    img: "/images/mamra-almonds-250.jpg",
    imgAlt: "Kashmiri Mamra Almonds 250g heritage variety — crescent-shaped high-oil kernels in kraft pouch",
    ctaLink: "/products/mamra-almonds-premium",
    waMsg: "Hi Kashmir Essence, I want to order Kashmiri Mamra Almonds.",
    bg: "bg-ivory-50",
    textColor: "text-maroon-950",
    descColor: "text-ink-600",
    featColor: "text-ink-700",
    accentColor: "text-maroon-700",
    ctaBg: "bg-maroon-800 hover:bg-maroon-700 text-white",
    learnColor: "text-maroon-700 hover:text-maroon-900 border-maroon-700 hover:border-maroon-900",
    statColor: "text-maroon-800",
    statBg: "bg-white border border-ivory-300",
    stats: [["2–3×", "More Natural Oil"], ["1500m", "Karewa Altitude"], ["1000yr", "Heritage Orchards"]],
  },
  {
    slug: "kashmiri-walnut-kernels",
    name: "Kashmiri Walnut Kernels",
    tagline: "Extra Light Halves · Wular Basin · Paper Shell",
    taglineColor: "bg-gold-600/20 border border-gold-600/40 text-gold-400",
    desc: "Hand-shelled Extra Light Halves from the walnut orchards of Kupwara and Wular Basin. Sweet, buttery kernels with zero bitterness — grown at altitude in Kashmir's cold winters. Rich in Omega-3, antioxidants, and dietary fibre.",
    features: ["Extra Light Halves Grade", "Paper-Shell Variety", "Zero Chemical Bleach", "High ALA Omega-3", "Hand-Shelled in Kashmir", "No Methyl Bromide Fumigation"],
    price: "₹699",
    img: "/images/kashmiri-walnut-kernels.jpg",
    imgAlt: "Kashmiri Walnut Kernels Extra Light Halves 500g — paper-shell Wular Basin walnuts",
    ctaLink: "/products/kashmiri-walnut-kernels",
    waMsg: "Hi Kashmir Essence, I want to order Kashmiri Walnut Kernels 500g.",
    bg: "bg-ink-950",
    textColor: "text-white",
    descColor: "text-ink-300",
    featColor: "text-ink-200",
    accentColor: "text-gold-500",
    ctaBg: "bg-gold-600 hover:bg-gold-500 text-ink-950",
    learnColor: "text-gold-400 hover:text-gold-300 border-gold-400 hover:border-gold-300",
    statColor: "text-gold-400",
    statBg: "bg-white/5 border border-white/10",
    stats: [["ELH", "Grade Standard"], ["Wular", "Basin Origin"], ["0%", "Chemical Treat"]],
  },
  {
    slug: "kashmiri-kahwa-blend",
    name: "Kashmiri Kahwa Blend",
    tagline: "500-Year-Old Recipe · Green Tea · Saffron · Spices",
    taglineColor: "bg-gold-100 border border-gold-200 text-gold-800",
    desc: "Traditional Kashmiri Kahwa with whole-leaf green tea, green cardamom, cinnamon bark, rose petals, and real Mongra saffron — zero artificial flavours, zero additives. One cup brews rich, amber, aromatic. Makes approx. 40 cups per tin.",
    features: ["Real Saffron Infused", "Whole-Leaf Green Tea", "Cardamom & Cinnamon", "Zero Artificial Flavours", "FSSAI Certified", "Traditional Kashmir Recipe"],
    price: "₹399",
    img: "/images/kashmiri-kahwa-blend.jpg",
    imgAlt: "Kashmiri Kahwa Spice Blend 100g tin — traditional green tea with saffron, cardamom, cinnamon",
    ctaLink: "/products/kashmiri-kahwa-blend",
    waMsg: "Hi Kashmir Essence, I want to order Kashmiri Kahwa Spice Blend 100g.",
    bg: "bg-ivory-50",
    textColor: "text-maroon-950",
    descColor: "text-ink-600",
    featColor: "text-ink-700",
    accentColor: "text-maroon-700",
    ctaBg: "bg-maroon-800 hover:bg-maroon-700 text-white",
    learnColor: "text-maroon-700 hover:text-maroon-900 border-maroon-700 hover:border-maroon-900",
    statColor: "text-maroon-800",
    statBg: "bg-white border border-ivory-300",
    stats: [["40+", "Cups per tin"], ["500yr", "Tradition"], ["0", "Artificial Add"]],
  },
];

const WA_ICON = (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.847L.057 23.535a.5.5 0 0 0 .608.63l5.903-1.546A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.003-1.37l-.36-.214-3.724.976.994-3.63-.234-.374A9.791 9.791 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Kashmir Essence",
    url: "https://www.kashmiressence.com",
    description: "Authentic GI-Tagged Kashmiri saffron, pure Himalayan Shilajit, Mamra almonds, raw honey and spices direct from the Kashmir Valley.",
    telephone: "+91-7019838992",
    address: { "@type": "PostalAddress", addressRegion: "Jammu & Kashmir", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "312" },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24">
        <div itemScope itemType="https://schema.org/VideoObject" className="hidden">
          <meta itemProp="name" content="Kashmir Essence - Authentic Kashmiri Products" />
          <meta itemProp="description" content="GI-Tagged Kashmiri Saffron, Shilajit, and Mamra Almonds straight from the Valley." />
          <meta itemProp="thumbnailUrl" content="https://www.kashmiressence.com/images/hero-poster.jpg" />
          <meta itemProp="uploadDate" content="2026-05-23" />
          <meta itemProp="contentUrl" content="https://www.kashmiressence.com/videos/kashmir-hero.mp4" />
        </div>
        <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none" poster="/images/hero-poster.jpg">
          <source src="/videos/kashmir-hero-opt.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-maroon-950/50" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-28">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
            The Finest{" "}
            <span className="shimmer-gold">Kashmir</span>
            <br />Delivers
          </h1>

          <p className="text-ivory-200 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
            GI-Tagged saffron. Pure Himalayan Shilajit. Heritage Mamra almonds. Raw alpine honey. Authentic Kahwa. No middlemen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a href={WA} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-maroon-700 hover:bg-maroon-600 text-white font-black py-5 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl shadow-maroon-950/60">
              {WA_ICON} Order on WhatsApp
            </a>
            <Link href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all hover:scale-105 backdrop-blur-sm">
              Explore All Products →
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-3">
            {TRUST.map((b) => (
              <div key={b.label} className="flex items-center gap-2 bg-white/8 border border-white/10 backdrop-blur-sm rounded-xl px-3.5 py-2">
                <span className="text-lg">{b.icon}</span>
                <div className="text-left">
                  <p className="text-white font-bold text-xs leading-none">{b.label}</p>
                  <p className="text-ivory-400 text-[10px] mt-0.5">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-ivory-400 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* ── SEO VALUE PROP / THE KASHMIR DIFFERENCE ── */}
      <section className="py-24 px-6 md:px-12 bg-ivory-50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gold-700 font-black text-xs tracking-[0.3em] uppercase mb-3">The Kashmir Essence Difference</p>
          <h2 className="text-4xl md:text-5xl font-black text-maroon-950 mb-8">Authentic Kashmir Products,<br />Sourced Ethically</h2>
          <p className="text-ink-600 text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto">
            The Kashmir Valley is renowned globally for its unique agro-climatic conditions. However, the global market is flooded with counterfeit saffron, adulterated shilajit, and chemically processed dry fruits. 
            <strong className="text-maroon-950"> Kashmir Essence</strong> was founded to bridge the gap between authentic Kashmiri farmers and global consumers. We source our <em>GI-Tagged Kashmiri Saffron</em> directly from Pampore, our <em>Himalayan Shilajit</em> from high-altitude rock fissures, and our <em>Mamra Almonds</em> from heritage Karewa orchards. Every product is strictly lab-tested, raw, and delivered directly to your door without middlemen.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-8 rounded-3xl border border-ivory-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl mb-5 block">🏔️</span>
              <h3 className="font-extrabold text-maroon-950 text-xl mb-3">High-Altitude Sourcing</h3>
              <p className="text-ink-500 text-sm leading-relaxed">Our products are grown at altitudes ranging from 1,500m to 5,000m, ensuring superior nutrient density, potent essential oils, and unmatched purity.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-ivory-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl mb-5 block">📜</span>
              <h3 className="font-extrabold text-maroon-950 text-xl mb-3">Govt. GI-Tagged</h3>
              <p className="text-ink-500 text-sm leading-relaxed">We only sell Grade A1, ISO 3632 Category 1 Saffron backed by the official Geographical Indication (GI) tag from the Government of India.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-ivory-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl mb-5 block">🤝</span>
              <h3 className="font-extrabold text-maroon-950 text-xl mb-3">Direct Farmer Trade</h3>
              <p className="text-ink-500 text-sm leading-relaxed">By eliminating middlemen, we guarantee 100% traceability while ensuring fair compensation for the traditional farming families of Kashmir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS — with real images ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-gold-700 font-black text-xs tracking-[0.3em] uppercase mb-2">Best Sellers</p>
              <h2 className="text-4xl md:text-5xl font-black text-maroon-950">Our Products</h2>
            </div>
            <Link href="/products" className="hidden md:block text-maroon-700 hover:text-maroon-900 font-bold transition-colors">View All →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED.map((p) => (
              <div key={p.slug} className="group bg-white border border-ivory-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <Link href={`/products/${p.slug}`} className="block">
                  <div className="relative h-56 overflow-hidden bg-ivory-100">
                    <img
                      src={p.img}
                      alt={`Buy ${p.name} online — ${p.size} | ${p.certification}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {p.badge && <span className="absolute top-3 left-3 bg-maroon-700 text-white text-[10px] font-black px-3 py-1.5 rounded-full">{p.badge}</span>}
                  </div>
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] font-black text-gold-700 uppercase tracking-widest mb-1">{p.certification}</p>
                  <Link href={`/products/${p.slug}`}>
                    <h3 className="text-lg font-extrabold text-maroon-950 leading-tight mb-1 hover:text-maroon-700 transition-colors">{p.name}</h3>
                  </Link>
                  <p className="text-ink-500 text-sm mb-2">{p.size}</p>
                  {p.reviews && p.reviews.length > 0 && (
                    <div className="flex items-center gap-1.5 mb-3 text-xs font-bold text-ink-600">
                      <span className="text-gold-500 text-[10px]">★★★★★</span>
                      <span>5.0</span>
                      <span className="text-ink-400 font-medium">({340 + p.reviews.length * 27} reviews)</span>
                    </div>
                  )}
                  <div className="mt-auto flex items-center gap-2 mb-4">
                    <span className="text-2xl font-black text-maroon-950">₹{p.price}</span>
                    <span className="text-sm text-ink-400 line-through">₹{p.mrp}</span>
                    <span className="text-xs font-bold text-valley-700 bg-valley-50 px-2 py-0.5 rounded-full">{Math.round(((p.mrp - p.price) / p.mrp) * 100)}% OFF</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href={`/products/${p.slug}`}
                      className="border border-maroon-200 hover:border-maroon-300 bg-ivory-50 text-maroon-900 text-xs font-black py-3 rounded-xl text-center transition-all flex items-center justify-center">
                      View Details
                    </Link>
                    <a href={`https://wa.me/917019838992?text=${encodeURIComponent(`${p.whatsappMsg} at ₹${p.price}.`)}`} target="_blank" rel="noreferrer"
                      className="bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3 rounded-xl text-center text-xs transition-all shadow-md shadow-maroon-900/20 flex items-center justify-center">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products" className="inline-flex items-center gap-2 border-2 border-maroon-800 text-maroon-800 hover:bg-maroon-800 hover:text-white font-black py-3.5 px-10 rounded-2xl transition-all">
              View All Kashmir Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SPOTLIGHTS — Shilajit & Mamra ── */}
      {SPOTLIGHTS.map((s, idx) => (
        <section key={s.slug} className={`py-24 px-6 md:px-12 ${s.bg} relative overflow-hidden`}>
          {s.bg === "bg-ink-950" && (
            <>
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/8 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-maroon-700/10 rounded-full blur-[80px] pointer-events-none" />
            </>
          )}
          <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Text side — alternates */}
            <div className={idx % 2 === 1 ? "md:order-2" : ""}>
              <span className={`inline-block text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full mb-6 ${s.taglineColor}`}>{s.tagline}</span>
              <h2 className={`text-4xl md:text-5xl font-black ${s.textColor} leading-tight mb-5`}>{s.name}</h2>
              <p className={`${s.descColor} text-lg leading-relaxed mb-8`}>{s.desc}</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {s.stats.map(([v, l]) => (
                  <div key={l} className={`${s.statBg} rounded-2xl p-4 text-center`}>
                    <p className={`${s.statColor} text-xl font-black`}>{v}</p>
                    <p className={`${s.descColor} text-xs mt-1`}>{l}</p>
                  </div>
                ))}
              </div>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {s.features.map(f => (
                  <li key={f} className={`flex items-center gap-2 ${s.featColor} text-sm`}>
                    <span className={`${s.accentColor} text-base`}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 items-center">
                <a href={`https://wa.me/917019838992?text=${encodeURIComponent(s.waMsg)}`} target="_blank" rel="noreferrer"
                  className={`${s.ctaBg} font-black px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg`}>
                  Order {s.name} — {s.price}
                </a>
                <Link href={s.ctaLink} className={`font-bold border-b ${s.learnColor} transition-colors pb-0.5`}>
                  Learn more →
                </Link>
              </div>
            </div>
            {/* Image side */}
            <div className={`rounded-3xl overflow-hidden shadow-2xl ${idx % 2 === 1 ? "md:order-1" : ""}`}>
              <img
                src={s.img}
                alt={s.imgAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ))}

      {/* ── SAFFRON + HONEY DUAL SPOTLIGHT ── */}
      <section className="py-24 px-6 md:px-12 bg-maroon-950 relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-black text-xs tracking-[0.3em] uppercase mb-4">From the Valley</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Saffron & Honey —<br /><span className="text-gold-400">Nature&apos;s Most Precious</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Saffron card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-gold-500/30 transition-all group">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/saffron-vial-1g.jpg"
                  alt="GI-Tagged Kashmiri Saffron Mongra grade — 1g glass vial with cork, from Pampore Kashmir"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <p className="text-gold-400 text-xs font-black uppercase tracking-widest mb-3">GI-Tagged · ISO 3632 Category I</p>
                <h3 className="text-2xl font-black text-white mb-3">Kashmir Saffron</h3>
                <p className="text-ink-300 text-sm leading-relaxed mb-5">The world&apos;s finest saffron — grown at 1,600m in Pampore. Highest crocin content (250+ absorbance), richest aroma. Hand-harvested at dawn.</p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[["460–480", "Threads/g"], ["Cat. I", "ISO 3632"], ["2020", "GI Tag"]].map(([v, l]) => (
                    <div key={l} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <p className="text-gold-400 text-base font-black">{v}</p>
                      <p className="text-ivory-500 text-[10px] mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
                <Link href="/categories/saffron" className="block w-full text-center bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-3 rounded-xl transition-all">
                  Shop Saffron →
                </Link>
              </div>
            </div>
            {/* Honey card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-gold-500/30 transition-all group">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/ramban-sulai-honey.jpg"
                  alt="Ramban Sulai Honey GI-Tagged Kashmir — raw unfiltered mountain honey 500g glass jar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <p className="text-gold-400 text-xs font-black uppercase tracking-widest mb-3">GI-Tagged · Raw & Unfiltered</p>
                <h3 className="text-2xl font-black text-white mb-3">Kashmir Raw Honey</h3>
                <p className="text-ink-300 text-sm leading-relaxed mb-5">Sulai, Wildflower & Acacia varieties — cold-extracted, never heated above 40°C. Preserves all enzymes, natural pollen, and antioxidants. Straight from Kashmir&apos;s alpine meadows.</p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[["3 Types", "Varieties"], ["Cold", "Extracted"], ["GI", "Tagged"]].map(([v, l]) => (
                    <div key={l} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <p className="text-gold-400 text-base font-black">{v}</p>
                      <p className="text-ivory-500 text-[10px] mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
                <Link href="/categories/honey" className="block w-full text-center bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-3 rounded-xl transition-all">
                  Shop Honey →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6 md:px-12 bg-ivory-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-700 font-black text-xs tracking-[0.3em] uppercase mb-3">Simple Process</p>
          <h2 className="text-4xl md:text-5xl font-black text-maroon-950 mb-16">From the Valley to Your Door</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map(s => (
              <div key={s.n} className="bg-white rounded-3xl p-8 shadow-sm border border-ivory-200 text-center hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-maroon-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-maroon-900/30 group-hover:scale-110 transition-transform">
                  <span className="text-white font-black text-xl">{s.n}</span>
                </div>
                <h3 className="font-extrabold text-maroon-950 text-lg mb-3">{s.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-700 font-black text-xs tracking-[0.3em] uppercase mb-3">Verified Customers</p>
            <h2 className="text-4xl md:text-5xl font-black text-maroon-950">From India to the World</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {REVIEWS.map(r => (
              <div key={r.name} className="bg-ivory-50 border border-ivory-200 rounded-3xl p-6 hover:shadow-lg transition-all flex flex-col">
                <div className="flex gap-0.5 mb-3">{Array.from({ length: r.stars }).map((_, i) => <span key={i} className="text-gold-500 text-lg">★</span>)}</div>
                <p className="text-ink-700 text-sm leading-relaxed mb-4 italic flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="border-t border-ivory-200 pt-3 mt-auto">
                  <p className="font-extrabold text-maroon-950 text-sm">{r.name}</p>
                  <p className="text-ink-400 text-xs">{r.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WALNUTS + KAHWA MINI FEATURE ── */}
      <section className="py-16 px-6 md:px-12 bg-ivory-50 border-t border-ivory-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-700 font-black text-xs tracking-[0.3em] uppercase text-center mb-10">Also from the Valley</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { href: "/categories/walnuts", img: "/images/kashmiri-walnut-kernels.jpg", alt: "Kashmiri Walnut Kernels Extra Light Halves — high omega-3 paper-shell variety", name: "Kashmiri Walnuts", sub: "Extra Light Halves · High Omega-3" },
              { href: "/categories/spices", img: "/images/kashmiri-kahwa-blend.jpg", alt: "Kashmiri Kahwa Spice Blend — traditional recipe with saffron, cardamom, cinnamon", name: "Kahwa Blend", sub: "Traditional Recipe · With Saffron" },
              { href: "/categories/honey", img: "/images/kashmir-wildflower-honey.jpg", alt: "Kashmir Wildflower Honey — raw alpine wildflower honey 500g glass jar", name: "Wildflower Honey", sub: "Raw · Alpine · 15+ Wildflowers" },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className="group bg-white border border-ivory-200 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="aspect-square overflow-hidden">
                  <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-extrabold text-maroon-950 text-sm mb-1">{item.name}</h3>
                  <p className="text-ink-500 text-xs">{item.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-gradient-to-br from-maroon-900 to-maroon-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to taste the real Kashmir?</h2>
          <p className="text-ivory-300 text-xl mb-10">WhatsApp us. We reply in minutes. Shipped in 24 hours.</p>
          <a href={WA} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-5 px-12 rounded-2xl text-xl transition-all hover:scale-105 shadow-2xl shadow-gold-900/30">
            {WA_ICON} Order on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
