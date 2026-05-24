import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { kashmirProducts, cities } from "@/lib/data";
import { getProduct } from "@/lib/products";
import { generatePseoContent } from "@/lib/pseo-generator";

interface Props { params: Promise<{ product: string; city: string }> }

export async function generateStaticParams() {
  const params = [];
  for (const kp of kashmirProducts) {
    for (const city of cities) {
      params.push({ product: kp.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product, city: citySlug } = await params;
  const kp = kashmirProducts.find((k) => k.slug === product);
  const city = cities.find((c) => c.slug === citySlug);
  if (!kp || !city) return {};
  const BASE = "https://www.kashmiressence.com";
  return {
    title: `Buy ${kp.name} in ${city.name} | Kashmir Essence — ${kp.certification}`,
    description: `Order authentic ${kp.name} online in ${city.name}, ${city.state}. ${kp.certification}. ${kp.origin}. Fast delivery to ${city.name}. WhatsApp to order now.`,
    alternates: { canonical: `${BASE}/buy/${product}/${citySlug}` },
    openGraph: {
      title: `Buy ${kp.name} in ${city.name} | Kashmir Essence`,
      description: `${kp.certification}. Authentic ${kp.name} delivered to ${city.name}.`,
    },
  };
}

const FAQS = (productName: string, city: string, origin: string) => [
  { q: `Where can I buy authentic ${productName} in ${city}?`, a: `Kashmir Essence delivers authentic ${productName} directly from ${origin} to ${city}. Simply WhatsApp +91 7019838992 to place your order. We deliver across India within 3–5 business days.` },
  { q: `Is the ${productName} delivery available in ${city}?`, a: `Yes. We ship to all pin codes in ${city} via trusted courier partners. Expected delivery is 3–5 business days after dispatch.` },
  { q: `How do I know the ${productName} is genuine?`, a: `All our products come directly from Kashmir Valley growers with full sourcing transparency. We provide lab certificates on request and our WhatsApp ordering gives you direct contact with us — no anonymous marketplace selling.` },
  { q: `What is the minimum order for delivery to ${city}?`, a: `There is no minimum order. Free shipping applies on orders above ₹999. Below that, a nominal shipping charge applies based on weight and location.` },
  { q: `Do you offer Cash on Delivery (COD) for ${productName} in ${city}?`, a: `Currently, we process orders via prepaid bank transfers, UPI, and standard digital payments to ensure fast, contactless delivery to ${city}. This helps us keep shipping costs low and dispatch orders immediately.` },
  { q: `What if my ${productName} gets damaged during transit to ${city}?`, a: `We use heavy-duty, customs-safe export packaging. However, if your order arrives damaged in ${city}, we have a 100% replacement or refund guarantee. Simply send us a photo on WhatsApp within 24 hours of delivery.` },
  { q: `How should I store the ${productName} once it arrives in ${city}?`, a: `Because ${city} may have different humidity and temperature levels than Kashmir, we recommend storing the product in an airtight container in a cool, dark place. For items like walnuts or almonds in warm weather, refrigeration is highly recommended to preserve their natural oils.` },
  { q: `Can I buy ${productName} in wholesale or bulk quantities in ${city}?`, a: `Yes! We supply bulk quantities to restaurants, Ayurvedic practitioners, and boutique stores across ${city}. Please WhatsApp us with your requirements and we will provide wholesale pricing and lab certification documents.` },
  { q: `How long does ${productName} stay fresh after delivery?`, a: `Our ${productName} is harvested, packed, and shipped directly without spending months in retail warehouses. When stored correctly, it maintains peak potency and freshness for 12 to 24 months, depending on the specific product.` },
  { q: `Why is your ${productName} priced differently than local markets in ${city}?`, a: `Local markets often sell adulterated, artificially colored, or blended variants. Our ${productName} is 100% pure, unblended, and sourced directly from ${origin} with proper lab testing and GI/ISO certifications, guaranteeing unmatched purity.` }
];

export default async function BuyPage({ params }: Props) {
  const { product, city: citySlug } = await params;
  const kp = kashmirProducts.find((k) => k.slug === product);
  const city = cities.find((c) => c.slug === citySlug);
  if (!kp || !city) notFound();

  const uniqueSections = generatePseoContent(kp.productSlug, city.name, city.state);
  const prod = getProduct(kp.productSlug);
  const BASE = "https://www.kashmiressence.com";
  const WA = `https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20buy%20${encodeURIComponent(kp.name)}${prod ? `%20at%20%E2%82%B9${prod.price}` : ""}%20and%20deliver%20to%20${encodeURIComponent(city.name)}.`;

  const faqs = FAQS(kp.name, city.name, kp.origin);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Buy ${kp.name} in ${city.name}`,
    description: `Order authentic ${kp.name} (${kp.certification}) in ${city.name}, ${city.state}. Direct from ${kp.origin}.`,
    url: `${BASE}/buy/${product}/${citySlug}`,
  };
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
      { "@type": "ListItem", position: 3, name: city.name, item: `${BASE}/buy/${product}/${citySlug}` },
    ],
  };

  // Nearby cities for internal linking
  const nearbyCities = cities.filter((c) => c.state === city.state && c.slug !== citySlug).slice(0, 6);
  // Other products for cross-linking
  const otherProducts = kashmirProducts.filter((k) => k.slug !== product).slice(0, 5);

  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-ivory-200 px-6 py-3">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-ink-400">
          <Link href="/" className="hover:text-maroon-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/categories/${kp.categorySlug}`} className="hover:text-maroon-700 transition-colors">{kp.name}</Link>
          <span>/</span>
          <span className="text-maroon-800 font-semibold">{city.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-black text-xs uppercase tracking-widest mb-4">{kp.certification} · {kp.origin}</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
            Buy {kp.name} in {city.name}
          </h1>
          <p className="text-ivory-300 text-xl mb-10 max-w-2xl mx-auto">
            Authentic {kp.name} from {kp.origin}, delivered directly to {city.name}, {city.state}. Order on WhatsApp — fast delivery, no compromise on quality.
          </p>
          <a href={WA} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl shadow-maroon-950/50">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.847L.057 23.535a.5.5 0 0 0 .608.63l5.903-1.546A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.003-1.37l-.36-.214-3.724.976.994-3.63-.234-.374A9.791 9.791 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
            Order {kp.name} — WhatsApp
          </a>
        </div>
      </section>

      {/* Product card + delivery info */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Product */}
        <div className="bg-white border border-ivory-200 rounded-3xl p-8 shadow-sm">
          <p className="text-gold-700 font-black text-xs uppercase tracking-widest mb-3">{kp.certification}</p>
          <h2 className="text-2xl font-black text-maroon-950 mb-2">{kp.name}</h2>
          <p className="text-ink-500 text-sm mb-6">Sourced from {kp.origin}</p>
          {prod && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-black text-maroon-950">₹{prod.price}</span>
                <span className="text-ink-400 line-through">₹{prod.mrp}</span>
                <span className="bg-valley-100 text-valley-700 text-xs font-black px-2 py-0.5 rounded-full">{Math.round(((prod.mrp-prod.price)/prod.mrp)*100)}% OFF</span>
              </div>
              <Link href={`/products/${prod.slug}`}
                className="block text-center bg-ivory-100 hover:bg-ivory-200 text-maroon-800 font-bold py-3 rounded-xl mb-4 transition-colors text-sm">
                View Full Product Details →
              </Link>
            </>
          )}
          <a href={WA} target="_blank" rel="noreferrer"
            className="block text-center bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3.5 rounded-xl transition-all shadow-lg shadow-maroon-900/20 text-sm">
            Order Now on WhatsApp
          </a>
        </div>

        {/* Delivery info */}
        <div className="space-y-4">
          <div className="bg-white border border-ivory-200 rounded-2xl p-6">
            <h3 className="font-extrabold text-maroon-950 mb-4">📦 Delivery to {city.name}</h3>
            <ul className="space-y-3 text-sm text-ink-700">
              <li className="flex gap-3"><span className="text-valley-600 font-black">✓</span> Delivered to all pin codes in {city.name}</li>
              <li className="flex gap-3"><span className="text-valley-600 font-black">✓</span> 3–5 business days delivery</li>
              <li className="flex gap-3"><span className="text-valley-600 font-black">✓</span> Free shipping on orders above ₹999</li>
              <li className="flex gap-3"><span className="text-valley-600 font-black">✓</span> Real-time WhatsApp tracking updates</li>
              <li className="flex gap-3"><span className="text-valley-600 font-black">✓</span> Tamper-proof, airtight packaging</li>
            </ul>
          </div>
          <div className="bg-white border border-ivory-200 rounded-2xl p-6">
            <h3 className="font-extrabold text-maroon-950 mb-4">🏔️ Why Kashmir Essence</h3>
            <ul className="space-y-3 text-sm text-ink-700">
              <li className="flex gap-3"><span className="text-gold-600 font-black">★</span> {kp.certification} — authenticated</li>
              <li className="flex gap-3"><span className="text-gold-600 font-black">★</span> Direct from {kp.origin} — zero middlemen</li>
              <li className="flex gap-3"><span className="text-gold-600 font-black">★</span> Lab tested for purity & safety</li>
              <li className="flex gap-3"><span className="text-gold-600 font-black">★</span> 100% authentic or full refund</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Unique Programmatic SEO Copywriting Sections */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {uniqueSections.map((sec, idx) => (
            <div key={idx} className="bg-white border border-ivory-200 rounded-3xl p-8 shadow-xs hover:shadow-md hover:border-ivory-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-gold-600 text-xs font-black tracking-widest uppercase mb-3 block">Section 0{idx + 1}</span>
                <h2 className="text-xl md:text-2xl font-black text-maroon-950 mb-4 leading-tight">
                  {sec.h2}
                </h2>
                <p className="text-ink-600 text-sm md:text-base leading-relaxed">
                  {sec.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-ivory-200 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-maroon-950 mb-8 text-center">Questions About {kp.name} Delivery in {city.name}</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-ivory-50 border border-ivory-200 rounded-2xl overflow-hidden">
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-bold text-maroon-950 list-none text-sm">
                  {f.q}
                  <span className="text-gold-600 font-black ml-4 shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-4 text-ink-600 text-sm leading-relaxed border-t border-ivory-200 pt-3">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal link mesh */}
      <section className="bg-ivory-50 border-t border-ivory-200 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {nearbyCities.length > 0 && (
            <div className="mb-10">
              <h3 className="text-sm font-black text-maroon-800 uppercase tracking-wider mb-4">{kp.name} in Other {city.state} Cities</h3>
              <div className="flex flex-wrap gap-2">
                {nearbyCities.map((c) => (
                  <Link key={c.slug} href={`/buy/${product}/${c.slug}`}
                    className="bg-white border border-ivory-200 hover:border-maroon-300 hover:bg-maroon-50 text-maroon-800 text-xs font-semibold px-4 py-2 rounded-full transition-all">
                    {kp.name} in {c.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div>
            <h3 className="text-sm font-black text-maroon-800 uppercase tracking-wider mb-4">More Kashmir Products in {city.name}</h3>
            <div className="flex flex-wrap gap-2">
              {otherProducts.map((k) => (
                <Link key={k.slug} href={`/buy/${k.slug}/${citySlug}`}
                  className="bg-white border border-ivory-200 hover:border-maroon-300 hover:bg-maroon-50 text-maroon-800 text-xs font-semibold px-4 py-2 rounded-full transition-all">
                  {k.name} in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
