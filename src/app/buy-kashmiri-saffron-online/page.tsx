import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy Kashmiri Saffron Online | Kashmir Essence — Authentic GI-Tagged Saffron",
  description: "Buy authentic Kashmiri saffron online from Kashmir Essence. ISO 3632 Category I, lab certified, sourced from Pampore. Mongra and Lacha grades. Free delivery in India above ₹999.",
  alternates: { canonical: "https://www.kashmiressence.com/buy-kashmiri-saffron-online" },
};

const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20buy%20Kashmiri%20Saffron%20online.";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Where can I buy authentic Kashmiri saffron online?", acceptedAnswer: { "@type": "Answer", text: "Kashmir Essence sells authentic GI-Tagged Kashmiri saffron online, sourced directly from Pampore. Order via WhatsApp at +91 7019838992. We ship across India and to 25+ countries." } },
    { "@type": "Question", name: "What is the price of Kashmiri saffron online?", acceptedAnswer: { "@type": "Answer", text: "Kashmiri Mongra saffron starts at ₹599 for 1g and ₹2,799 for 5g at Kashmir Essence. Lacha saffron starts at ₹449 for 1g. Prices reflect authentic, lab-tested saffron — significantly lower-priced 'Kashmiri' saffron online is typically adulterated." } },
    { "@type": "Question", name: "How do I know online saffron is genuine?", acceptedAnswer: { "@type": "Answer", text: "Look for: ISO 3632 Category I certification, GI tag documentation, lab test certificates, and a seller who provides physical contact (WhatsApp, phone). Kashmir Essence provides lab certificates on request and you can verify authenticity with simple at-home tests." } },
  ],
};

export default function BuyKashmiriSaffronOnline() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-4">ISO 3632 Category I · Lab Certified · Pampore</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">Buy Kashmiri Saffron Online</h1>
          <p className="text-ivory-300 text-xl mb-10 max-w-2xl mx-auto">Authentic Kashmiri saffron sourced directly from GI-registered growers in Pampore. Mongra and Lacha grades. Lab certified. Shipping across India and 25+ countries.</p>
          <a href={WA} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl">
            Order Now on WhatsApp
          </a>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-black text-maroon-950 mb-8 text-center">Available Saffron Grades</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Kashmiri Saffron Mongra", grade: "Highest Grade · Stigma Tips Only", price: "₹599", mrp: "₹849", size: "1g", slug: "kashmiri-saffron-mongra", desc: "Pure stigma tips with maximum crocin content. The world's finest saffron by ISO 3632 testing. 460–480 threads per gram." },
            { name: "Kashmiri Saffron Lacha", grade: "Traditional Grade · Stigma + Style", price: "₹449", mrp: "₹649", size: "1g", slug: "kashmiri-saffron-lacha", desc: "Traditional Kashmiri saffron with stigma and partial style. ISO 3632 Category I. The classic form used in Kahwa and home cooking." },
          ].map((p) => (
            <div key={p.slug} className="bg-white border border-ivory-200 rounded-3xl p-7 shadow-sm">
              <div className="text-6xl mb-4 text-center">✨</div>
              <p className="text-gold-700 font-black text-xs uppercase tracking-widest mb-2">{p.grade}</p>
              <h3 className="text-xl font-black text-maroon-950 mb-2">{p.name}</h3>
              <p className="text-ink-500 text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl font-black text-maroon-950">{p.price}</span>
                <span className="text-ink-400 line-through text-sm">{p.mrp}</span>
                <span className="text-xs bg-valley-50 text-valley-700 font-bold px-2 py-0.5 rounded-full">for {p.size}</span>
              </div>
              <div className="flex gap-3">
                <a href={WA} target="_blank" rel="noreferrer" className="flex-1 bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3 rounded-xl text-center text-sm transition-all">Order on WhatsApp</a>
                <Link href={`/products/${p.slug}`} className="flex-1 bg-ivory-100 hover:bg-ivory-200 text-maroon-800 font-bold py-3 rounded-xl text-center text-sm transition-all border border-ivory-300">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why buy from us */}
      <section className="bg-white border-t border-ivory-200 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-maroon-950 mb-8 text-center">Why Buy Kashmiri Saffron From Kashmir Essence?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[["🏷️","GI-Tagged Source","Sourced from GI-registered growers in Pampore — documented origin, not a marketing claim"],["🔬","Lab Certified","ISO 3632 Category I tested batch by batch. Certificates available on request"],["🚫","Zero Adulterants","Pure saffron threads — no dyed corn silk, no safflower, no artificial colour"],["📞","Direct WhatsApp","Order directly — no anonymous marketplace, no resellers, no fake reviews"],["✈️","India & Worldwide","Ships across India and to UAE, UK, USA, Canada, Australia and 20+ more countries"],["↩️","Full Refund Guarantee","Not authentic? We refund 100% — no returns required"]].map(([i,t,d])=>(
              <div key={String(t)} className="bg-ivory-50 border border-ivory-200 rounded-2xl p-5">
                <span className="text-3xl mb-3 block">{String(i)}</span>
                <h3 className="font-extrabold text-maroon-950 text-sm mb-1">{String(t)}</h3>
                <p className="text-ink-500 text-xs leading-relaxed">{String(d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory-50 border-t border-ivory-200 py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-maroon-950 mb-8 text-center">Common Questions</h2>
          <div className="space-y-3">
            {schema.mainEntity.map((f, i) => (
              <details key={i} className="group bg-white border border-ivory-200 rounded-2xl overflow-hidden">
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-bold text-maroon-950 list-none text-sm">{f.name}<span className="text-gold-600 font-black ml-4 group-open:rotate-45 transition-transform">+</span></summary>
                <div className="px-6 pb-4 text-ink-600 text-sm leading-relaxed border-t border-ivory-100 pt-4">{f.acceptedAnswer.text}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* City PSEO mesh */}
      <section className="bg-white border-t border-ivory-200 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-black text-maroon-700 uppercase tracking-widest mb-4">Buy Kashmiri Saffron in Your City</p>
          <div className="flex flex-wrap gap-2">
            {["mumbai","delhi-ncr","bangalore","hyderabad","chennai","pune","ahmedabad","kolkata","chandigarh","jaipur","lucknow","kochi","surat","indore","nagpur"].map((city) => (
              <Link key={city} href={`/buy/saffron/${city}`} className="text-xs bg-ivory-50 border border-ivory-200 hover:border-maroon-300 text-maroon-700 font-semibold px-3 py-1.5 rounded-full transition-all capitalize">
                Saffron in {city.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
