import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { kashmirProducts } from "@/lib/data";
import { countries } from "@/lib/countries";
import { getProduct } from "@/lib/products";

interface Props { params: Promise<{ product: string; country: string }> }

export async function generateStaticParams() {
  const params = [];
  for (const kp of kashmirProducts) {
    for (const c of countries) {
      params.push({ product: kp.slug, country: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product, country: countrySlug } = await params;
  const kp = kashmirProducts.find((k) => k.slug === product);
  const country = countries.find((c) => c.slug === countrySlug);
  if (!kp || !country) return {};
  const BASE = "https://www.kashmiressence.com";
  return {
    title: `Buy ${kp.name} Online & Ship to ${country.name} | Kashmir Essence`,
    description: `Order genuine ${kp.name} (${kp.certification}) from Pampore, Kashmir and get it delivered to ${country.name}. ${country.deliveryDays}. Customs-safe packing, lab certificates included. Order via WhatsApp.`,
    alternates: { canonical: `${BASE}/ship/${product}/${countrySlug}` },
    openGraph: {
      title: `${kp.name} Shipped to ${country.name} | Kashmir Essence`,
      description: `${kp.certification} · ${kp.origin} · Delivered to ${country.name} in ${country.deliveryDays}`,
    },
  };
}

const WA_SVG = (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.847L.057 23.535a.5.5 0 0 0 .608.63l5.903-1.546A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.003-1.37l-.36-.214-3.724.976.994-3.63-.234-.374A9.791 9.791 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);

const PRODUCT_EMOJI: Record<string, string> = {
  saffron: "✨", shilajit: "🏔️", "mamra-almonds": "🪨",
  walnuts: "🌰", honey: "🍯", kahwa: "🫖", chilli: "🌶️",
  "dry-fruits": "🎁", "saffron-gift": "✨"
};

// Rich contextual facts per product for informational depth
const PRODUCT_FACTS: Record<string, { headline: string; facts: string[] }> = {
  saffron: {
    headline: "Why Kashmir Saffron Outperforms Every Alternative",
    facts: [
      "Highest crocin (coloring power) of any saffron in the world — above 250 absorbance units",
      "Cultivated exclusively in Pampore, Kashmir at 1,600m altitude — 100% GI-Tagged",
      "Hand-harvested between 6–9 AM during the October flowering window",
      "Only 3–5 stigmas per Crocus sativus flower — picked one flower at a time",
      "ISO 3632 Category I certified: the strictest international purity standard",
      "Contains 3× more active compounds than Iranian or Spanish commercial saffron",
    ]
  },
  shilajit: {
    headline: "What Makes Our Himalayan Shilajit Genuinely Therapeutic",
    facts: [
      "Sourced from high-altitude rock crevices above 4,500m in the J&K Himalayas",
      "Fulvic acid content verified above 60% — the key bioactive compound",
      "Tested for heavy metals (Pb, As, Hg, Cd) in an NABL-accredited laboratory",
      "Contains 85+ ionic trace minerals in bioavailable form",
      "Traditional purification process — no chemical solvents used",
      "Pure resin — not diluted powder or capsules that degrade potency",
    ]
  },
  "mamra-almonds": {
    headline: "Why Kashmiri Mamra Almonds Are the World's Most Nutritious",
    facts: [
      "Grown on 1,000-year-old heritage orchards on Kashmir's Karewa plateau (1,500m)",
      "Contains 2–3× more natural monounsaturated almond oil than California almonds",
      "Zero chemical pasteurization — unlike US-law mandated PPO treatment on California almonds",
      "Boat-shaped (crescent) kernel is a hallmark of the authentic Mamra variety",
      "Hand-plucked and sun-dried — no mechanical harvesting or chemical fumigation",
      "Rich in phospholipids critical for children's brain development and memory",
    ]
  },
  walnuts: {
    headline: "What Sets Kashmiri Walnuts Apart From All Other Varieties",
    facts: [
      "Grown in the Wular Basin and Kupwara district — some of India's oldest walnut orchards",
      "Paper-thin shell that can be cracked by hand — unique to the Kashmiri variety",
      "Extra Light Halves grade: highest international commercial standard",
      "Zero chemical bleaching — golden color is natural from altitude and early harvest",
      "Highest ALA (plant omega-3) content among Indian walnut varieties",
      "Sweet, buttery, low-bitterness kernel — significantly lower tannin content than imports",
    ]
  },
  honey: {
    headline: "Why Kashmir Raw Honey Is Incomparable to Commercial Honey",
    facts: [
      "Cold-extracted — never heated above 40°C, preserving all natural enzymes",
      "Sulai Honey is GI-tagged and harvested from wild Plectranthus rugosus blossoms",
      "Zero added sugar, HFCS, rice syrup, or any adulterant — pure single-ingredient honey",
      "Contains natural active pollen, propolis traces, and glucose oxidase enzymes",
      "Wildflower honey sourced from 15+ native alpine wildflower species",
      "Acacia honey — lowest glycemic index of all honey types, ideal for diabetics",
    ]
  },
  kahwa: {
    headline: "What Makes Authentic Kashmiri Kahwa Different",
    facts: [
      "Traditional hand-blended recipe using whole spices — no powders or extracts",
      "Contains real Mongra saffron threads woven through the green tea leaves",
      "Zero sugar, zero artificial flavors, zero synthetic preservatives",
      "Single-origin green tea from Kashmiri tea gardens for authentic terroir",
      "Cardamom, cinnamon, cloves sourced from verified natural origin growers",
      "FSSAI certified — every batch quality-tested before packaging",
    ]
  },
};

// Expanded contextual shipping FAQs
const SHIPPING_FAQS = (productName: string, country: { name: string; currency: string; deliveryDays: string; customsNote: string; region: string }, cert: string) => [
  {
    q: `Can I buy authentic ${productName} online and have it shipped to ${country.name}?`,
    a: `Yes. Kashmir Essence ships authentic ${productName} (${cert}) internationally to ${country.name}. We have been shipping to ${country.region} customers since 2022 with a 99.4% successful delivery rate. We pack all orders customs-safe with proper product descriptions, FSSAI certificates, and GI authentication cards. WhatsApp +91 7019838992 to place your order — we respond within 2 hours, 7 days a week.`
  },
  {
    q: `How long does shipping to ${country.name} take and which courier is used?`,
    a: `Shipments to ${country.name} typically arrive in ${country.deliveryDays} after dispatch. We use DHL Express, FedEx International, and India Post EMS depending on the order size and your preferred budget. DHL and FedEx are faster (3–6 business days faster) but carry a higher shipping charge. India Post EMS is more economical for smaller orders. Once dispatched, we share a live tracking link via WhatsApp so you can monitor every step of the journey.`
  },
  {
    q: `Is ${productName} allowed through customs in ${country.name}?`,
    a: `${productName} is a natural agricultural food product that is generally permitted for personal import in ${country.name}. ${country.customsNote}. We include all required documentation including FSSAI food safety certificate, phytosanitary certificate (for agricultural products), and accurate customs declaration describing contents as "Food / Spices / Natural Health Supplement — personal use." We recommend checking your local customs guidelines for personal food import limits.`
  },
  {
    q: `How is the ${productName} packaged to survive international shipping?`,
    a: `All international orders are packed with multiple layers of protection. Glass jars (Shilajit, Honey) are wrapped in bubble cushioning and placed in a rigid cardboard inner box before going into the outer shipping box. Saffron is packed in airtight metal tins sealed with food-grade tape, then cushion-wrapped. Dry fruits are vacuum-sealed before secondary packaging. The outer shipping box is reinforced and marked FRAGILE. We have a <0.5% damage-in-transit rate on international orders.`
  },
  {
    q: `What payment methods do you accept for orders shipping to ${country.name}?`,
    a: `We accept multiple international payment methods: (1) Bank Transfer / SWIFT — we share our bank IBAN details via WhatsApp for direct international transfers. (2) PayPal — for customers in the UK, USA, Canada, and Europe. (3) UPI (for Indian expats in ${country.name} using Indian bank accounts). (4) Western Union / Wise / Remitly transfers for other regions. All prices are quoted in Indian Rupees (INR). We can provide approximate ${country.currency} equivalent pricing upon request.`
  },
  {
    q: `Do you provide tracking for my shipment to ${country.name}?`,
    a: `Yes. Once your order is dispatched (typically within 24–48 hours of payment confirmation), we send you: (1) The courier tracking number via WhatsApp. (2) A direct tracking link for your specific courier (DHL, FedEx, or India Post). (3) Estimated delivery date. For DHL and FedEx shipments, you will also receive automated email/SMS updates directly from the courier. We actively monitor all international shipments and proactively alert you of any customs delays.`
  },
  {
    q: `What is your return or refund policy for international orders to ${country.name}?`,
    a: `We stand behind our product quality with a 100% authenticity guarantee. If your ${productName} arrives damaged due to transit, we will resend or refund in full — no questions asked. If you believe the product is not authentic or does not meet GI/ISO quality standards, we provide a full refund. Due to international shipping costs, we do not accept returns for preference-based reasons. We have a 7-business-day resolution policy for all international claims — simply WhatsApp us with a photo of the issue.`
  },
  {
    q: `How should I store ${productName} after it arrives in ${country.name}?`,
    a: `Proper storage after arrival: Saffron — store in its sealed tin in a cool, dark cupboard away from sunlight; never in a humid bathroom cabinet. Shilajit — store the sealed glass jar in a cool, dry location, not refrigerated (unless very hot climate). Honey — store sealed at room temperature in a dark cupboard; do not refrigerate. Mamra Almonds and Walnuts — store in an airtight container in the refrigerator (up to 6 months) or freezer (up to 1 year) due to the high natural oil content that can oxidize in warm climates like ${country.name}.`
  },
  {
    q: `Can I order larger quantities of ${productName} for wholesale or group buying in ${country.name}?`,
    a: `Yes. We supply bulk and wholesale quantities of ${productName} for Indian communities, restaurants, Ayurvedic practitioners, and health food retailers in ${country.name}. Minimum wholesale order starts at 100g for saffron and 5kg for dry fruits. We provide bulk pricing tiers, lab certificates for regulatory compliance, and can arrange pallet shipping for very large orders. WhatsApp +91 7019838992 with your requirements and we will share a custom quote within 24 hours.`
  },
];

export default async function ShipPage({ params }: Props) {
  const { product, country: countrySlug } = await params;
  const kp = kashmirProducts.find((k) => k.slug === product);
  const country = countries.find((c) => c.slug === countrySlug);
  if (!kp || !country) notFound();

  const prod = getProduct(kp.productSlug);
  const BASE = "https://www.kashmiressence.com";
  const WA = `https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20order%20${encodeURIComponent(kp.name)}${prod ? `%20at%20%E2%82%B9${prod.price}` : ""}%20shipped%20to%20${encodeURIComponent(country.name)}.`;
  const faqs = SHIPPING_FAQS(kp.name, country, kp.certification);
  const emoji = PRODUCT_EMOJI[product] ?? "🌿";
  const productFacts = PRODUCT_FACTS[product];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: kp.name, item: `${BASE}/categories/${kp.categorySlug}` },
      { "@type": "ListItem", position: 3, name: `Ship to ${country.name}`, item: `${BASE}/ship/${product}/${countrySlug}` },
    ],
  };

  // Other countries for cross-linking (same product)
  const otherCountries = countries.filter((c) => c.slug !== countrySlug).slice(0, 10);
  // Other products for this country
  const otherProducts = kashmirProducts.filter((k) => k.slug !== product).slice(0, 6);

  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-ivory-200 px-6 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-ink-400">
          <Link href="/" className="hover:text-maroon-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/categories/${kp.categorySlug}`} className="hover:text-maroon-700 transition-colors">{kp.name}</Link>
          <span>/</span>
          <span className="text-maroon-800 font-semibold">Ship to {country.name}</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-950 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-5xl">{country.flag}</span>
                <span className="bg-gold-600/20 border border-gold-500/30 text-gold-400 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider">{country.region}</span>
              </div>
              <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-4">International Shipping · {kp.certification}</p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Buy {kp.name}<br />
                <span className="text-gold-400">Ship to {country.name}</span>
              </h1>
              <p className="text-ivory-300 text-lg mb-3 leading-relaxed">
                Authentic {kp.name} from {kp.origin}, packed and delivered directly to {country.name}.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 border border-white/20 text-ivory-200 text-xs font-bold px-3 py-1.5 rounded-full">✈️ {country.deliveryDays}</span>
                <span className="bg-white/10 border border-white/20 text-ivory-200 text-xs font-bold px-3 py-1.5 rounded-full">📦 Customs-Safe Packing</span>
                <span className="bg-white/10 border border-white/20 text-ivory-200 text-xs font-bold px-3 py-1.5 rounded-full">🔬 Lab Certificates Included</span>
              </div>
              <a href={WA} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-4 px-8 rounded-2xl text-base transition-all hover:scale-105 shadow-2xl shadow-maroon-950/50">
                {WA_SVG}
                Order & Ship to {country.name}
              </a>
            </div>
            <div className="hidden md:flex flex-col gap-4">
              {/* Shipping info card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h3 className="font-black text-white text-sm mb-4 uppercase tracking-wider">Shipping Details</h3>
                <div className="space-y-3">
                  {[
                    ["Destination", country.name],
                    ["Delivery Time", country.deliveryDays],
                    ["Currency", `INR (${country.currency} equivalent available)`],
                    ["Courier Options", "DHL Express, FedEx, India Post EMS"],
                    ["Customs Note", country.customsNote],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-3 text-xs">
                      <span className="text-ivory-400 font-bold w-28 shrink-0">{k}</span>
                      <span className="text-white font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Trust signal */}
              <div className="bg-gold-600/20 border border-gold-500/30 rounded-2xl p-4 text-center">
                <p className="text-gold-400 font-black text-sm">⭐ 99.4% Successful Deliveries to {country.region}</p>
                <p className="text-ivory-400 text-xs mt-1">Full refund guarantee if order doesn&apos;t arrive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT QUALITY DETAILS ── */}
      {prod && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-gold-700 font-black text-xs uppercase tracking-[0.25em] mb-3">What You Are Ordering</p>
            <h2 className="text-3xl font-black text-maroon-950">{prod.name}</h2>
            <p className="text-ink-500 mt-2">{kp.certification} · {kp.origin}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white border border-ivory-200 rounded-3xl p-8 shadow-sm">
              <div className="text-8xl text-center mb-6">{emoji}</div>
              <div className="space-y-3">
                {[
                  ["Origin", kp.origin],
                  ["Standard Pack", prod.size],
                  ["Certification", kp.certification],
                  ["Lab Status", "Tested & Certified"],
                  ["Price (1g / 250g)", prod ? `₹${prod.price.toLocaleString("en-IN")} (starting)` : "Contact us"],
                  ["Transit Route", `Srinagar ➔ Delhi ➔ ${country.name}`],
                  ["Packaging", "Airtight · Customs-safe · Branded"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 text-sm border-b border-ivory-100 pb-3">
                    <span className="text-ink-400 font-semibold w-32 shrink-0">{k}</span>
                    <span className="text-maroon-950 font-bold">{v}</span>
                  </div>
                ))}
              </div>
              <a href={WA} target="_blank" rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-2 bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3 px-6 rounded-xl text-sm transition-all shadow-lg">
                {WA_SVG} Order Now
              </a>
            </div>
            {productFacts && (
              <div>
                <h3 className="text-xl font-black text-maroon-950 mb-5">{productFacts.headline}</h3>
                <div className="space-y-3">
                  {productFacts.facts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white border border-ivory-200 rounded-xl p-4 shadow-sm">
                      <span className="w-6 h-6 bg-maroon-800 text-white text-xs font-black rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <p className="text-ink-700 text-sm leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {!productFacts && (
              <div className="bg-white border border-ivory-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-black text-maroon-950 mb-4">Product Description</h3>
                <p className="text-ink-600 text-sm leading-relaxed">{prod.description}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white border-t border-ivory-200 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-700 font-black text-xs uppercase tracking-[0.25em] mb-3">Simple 4-Step Process</p>
            <h2 className="text-3xl font-black text-maroon-950">How to Order & Receive in {country.name}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "💬", title: "WhatsApp Your Order", desc: `Message us on WhatsApp: product name, quantity, and your delivery address in ${country.name}. We respond within 2 hours.` },
              { step: "02", icon: "💳", title: "Confirm & Pay", desc: `We send you a detailed invoice with shipping cost. Pay via bank transfer, PayPal, or other international methods. We confirm once received.` },
              { step: "03", icon: "📦", title: "Pack & Dispatch", desc: `Your order is packed the same or next business day. We provide DHL/FedEx tracking details and all customs documentation via WhatsApp.` },
              { step: "04", icon: "🏠", title: `Delivered in ${country.name}`, desc: `Your ${kp.name} arrives at your door in ${country.deliveryDays}. We stay in touch throughout the transit and resolve any customs queries.` },
            ].map((item) => (
              <div key={item.step} className="relative bg-ivory-50 border border-ivory-200 rounded-2xl p-6">
                <span className="absolute top-4 right-4 text-4xl font-black text-maroon-950/5">{item.step}</span>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-extrabold text-maroon-950 mb-2 text-sm">{item.title}</h3>
                <p className="text-ink-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY & SOURCING GUARANTEE ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-700 font-black text-xs uppercase tracking-[0.25em] mb-3">Our Guarantee</p>
            <h2 className="text-3xl font-black text-maroon-950">Why {country.name} Customers Trust Kashmir Essence</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🔬", title: "Lab Certified Quality", desc: "Every batch is tested in an NABL-accredited Indian lab for purity, contamination, and active compound levels. We share certificates on request." },
              { icon: "🏔️", title: "Direct from Source", desc: `No middlemen. We source directly from farmers and growers in ${kp.origin}. What you receive is exactly what comes from the valley.` },
              { icon: "📜", title: "Authentic GI/ISO Certification", desc: `Our ${kp.name} carries ${kp.certification} certification — the highest possible quality standard for this product type.` },
              { icon: "✈️", title: "Customs-Safe Packaging", desc: `We handle phytosanitary clearance, accurate customs declarations, and FSSAI documentation so your package clears ${country.name} customs without issues.` },
              { icon: "🔄", title: "Full Refund Guarantee", desc: "If your order arrives damaged or fails quality expectations, we resend or refund in full. We have a 100% resolution guarantee on all orders." },
              { icon: "💬", title: "Live WhatsApp Support", desc: "Dedicated WhatsApp support throughout your order lifecycle — from placement to delivery. We respond within 2 hours, 7 days a week." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-ivory-200 rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-extrabold text-maroon-950 mb-2">{item.title}</h3>
                <p className="text-ink-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      {prod && prod.reviews && prod.reviews.length > 0 && (
        <section className="bg-white border-t border-ivory-200 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-gold-700 font-black text-xs uppercase tracking-[0.25em] mb-3">Verified Buyers</p>
              <h2 className="text-3xl font-black text-maroon-950">What Our Customers Say About {kp.name}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {prod.reviews.slice(0, 6).map((r, i) => (
                <div key={i} className="bg-ivory-50 border border-ivory-200 rounded-2xl p-6 shadow-sm flex flex-col">
                  <div className="flex gap-0.5 mb-2 text-gold-500 text-xs">★★★★★</div>
                  <p className="text-ink-700 text-sm leading-relaxed mb-4 italic flex-1">&ldquo;{r.text}&rdquo;</p>
                  <div className="border-t border-ivory-200 pt-3">
                    <p className="font-extrabold text-maroon-950 text-sm">{r.name}</p>
                    <p className="text-ink-400 text-xs">{r.city} · Verified Buyer</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={WA} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3.5 px-8 rounded-2xl text-sm transition-all shadow-lg">
                {WA_SVG} Order {kp.name} — Ship to {country.name}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="bg-ivory-50 border-t border-ivory-200 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold-700 font-black text-xs uppercase tracking-[0.25em] mb-3">Common Questions</p>
            <h2 className="text-3xl font-black text-maroon-950">Shipping {kp.name} to {country.name} — FAQ</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-ivory-200 rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-bold text-maroon-950 list-none text-sm md:text-base">
                  {f.q}
                  <span className="text-gold-600 font-black ml-4 shrink-0 group-open:rotate-45 transition-transform duration-200 text-xl">+</span>
                </summary>
                <div className="px-6 pb-5 text-ink-600 text-sm leading-relaxed border-t border-ivory-200 pt-4">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-maroon-950 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-4">Ready to Order?</p>
          <h2 className="text-3xl font-black text-white mb-4">Get Authentic {kp.name} Delivered to {country.name}</h2>
          <p className="text-ivory-300 mb-8 leading-relaxed">
            {country.deliveryDays} · {kp.certification} · Lab certified · Customs-safe packaging
          </p>
          <a href={WA} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl shadow-maroon-950/50">
            {WA_SVG}
            Order Now via WhatsApp
          </a>
        </div>
      </section>

      {/* ── INTERNAL LINK MESH ── */}
      <section className="bg-white border-t border-ivory-200 py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h3 className="text-sm font-black text-maroon-800 uppercase tracking-wider mb-4">{kp.name} — Ship to Other Countries</h3>
            <div className="flex flex-wrap gap-2">
              {otherCountries.map((c) => (
                <Link key={c.slug} href={`/ship/${product}/${c.slug}`}
                  className="bg-ivory-50 border border-ivory-200 hover:border-maroon-300 text-maroon-800 text-xs font-semibold px-4 py-2 rounded-full transition-all">
                  {c.flag} {kp.name} to {c.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-maroon-800 uppercase tracking-wider mb-4">More Kashmir Products — Ship to {country.name}</h3>
            <div className="flex flex-wrap gap-2">
              {otherProducts.map((k) => (
                <Link key={k.slug} href={`/ship/${k.slug}/${countrySlug}`}
                  className="bg-ivory-50 border border-ivory-200 hover:border-maroon-300 text-maroon-800 text-xs font-semibold px-4 py-2 rounded-full transition-all">
                  {k.name} to {country.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black text-maroon-800 uppercase tracking-wider mb-4">Shop {kp.name} — All Sizes</h3>
            <div className="flex flex-wrap gap-2">
              <Link href={`/products/${kp.productSlug}`}
                className="bg-maroon-50 border border-maroon-200 hover:border-maroon-400 text-maroon-800 text-xs font-bold px-4 py-2 rounded-full transition-all">
                Buy {kp.name} →
              </Link>
              <Link href="/products"
                className="bg-ivory-50 border border-ivory-200 hover:border-maroon-300 text-maroon-800 text-xs font-semibold px-4 py-2 rounded-full transition-all">
                All Kashmir Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
