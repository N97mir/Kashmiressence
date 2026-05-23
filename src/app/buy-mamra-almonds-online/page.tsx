import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Buy Mamra Almonds Online | Kashmir Essence — Heritage Kashmiri Variety",
  description: "Buy genuine Mamra almonds online — the heritage Kashmir variety with 42–50% oil content. Not California almonds. Sourced from Karewa highlands. Ships India & worldwide.",
  alternates: { canonical: "https://www.kashmiressence.com/buy-mamra-almonds-online" },
};
const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20buy%20Mamra%20Almonds.";
const schema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are Mamra almonds and are they different from regular almonds?", acceptedAnswer: { "@type": "Answer", text: "Yes, significantly different. Mamra almonds are a heritage variety from Kashmir/Afghanistan with 42–50% oil content vs 35% in California almonds. They are smaller, wrinkled, oilier, and have a stronger nutty flavour. Genuine Mamra almonds are also the variety specified in Ayurvedic texts for soaking and consuming." } },
    { "@type": "Question", name: "Where can I buy genuine Mamra almonds online?", acceptedAnswer: { "@type": "Answer", text: "Kashmir Essence sources Mamra almonds directly from the Karewa highlands of Kashmir. Order via WhatsApp at +91 7019838992. We ship across India and to 25+ countries." } },
    { "@type": "Question", name: "How do I identify genuine Mamra almonds?", acceptedAnswer: { "@type": "Answer", text: "Genuine Mamra almonds are: smaller than California almonds, irregularly shaped and wrinkled (not uniform), visibly oily/shiny, strong nutty aroma, and leave an oil mark on paper when cut. Any 'Mamra' almonds that look large, flat, and uniform are California almonds being misrepresented." } },
  ],
};
export default function BuyMamraAlmondsOnline() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-4">Heritage Kashmir Variety · 42–50% Oil Content</p>
          <h1 className="text-4xl md:text-5xl font-black mb-5">Buy Mamra Almonds Online</h1>
          <p className="text-ivory-300 text-xl mb-10 max-w-2xl mx-auto">The real Mamra almonds — not California almonds relabelled. Sourced from the Karewa highlands of Kashmir. Ayurvedically preferred, oil-rich, and intensely flavoured.</p>
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105">Order on WhatsApp</a>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-ivory-200 rounded-3xl p-8 shadow-sm text-center">
          <span className="text-8xl mb-4 block">🪨</span>
          <p className="text-gold-700 font-black text-xs uppercase tracking-widest mb-2">Heritage Kashmir Variety</p>
          <h2 className="text-xl font-black text-maroon-950 mb-2">Mamra Almonds Premium</h2>
          <p className="text-ink-500 text-sm mb-4">250g · Karewa Highlands, Kashmir</p>
          <div className="flex items-center justify-center gap-3 mb-6"><span className="text-2xl font-black text-maroon-950">₹699</span><span className="text-ink-400 line-through">₹999</span><span className="text-xs bg-valley-50 text-valley-700 font-bold px-2 py-0.5 rounded-full">30% OFF</span></div>
          <a href={WA} target="_blank" rel="noreferrer" className="block bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3.5 rounded-2xl text-sm transition-all mb-3">Order on WhatsApp</a>
          <Link href="/products/mamra-almonds-premium" className="block bg-ivory-100 border border-ivory-300 text-maroon-800 font-bold py-3.5 rounded-2xl text-sm transition-all">View Full Details</Link>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-black text-maroon-950">Why Mamra Almonds?</h2>
          {[["🫒","Highest Oil Content","42–50% natural oil — oilier, richer, more nutritious than California almonds"],["🌿","Ayurvedic Heritage","The variety specified in Ayurvedic texts for soaking and daily consumption"],["💪","Superior Nutrition","Higher MUFA content, stronger flavour, better bioavailability of vitamins"],["✅","Direct Source","From Karewa highlands — not relabelled California almonds"]].map(([i,t,d])=>(
            <div key={String(t)} className="bg-white border border-ivory-200 rounded-xl p-4 flex gap-3">
              <span className="text-xl shrink-0">{String(i)}</span>
              <div><p className="font-extrabold text-maroon-950 text-sm">{String(t)}</p><p className="text-ink-500 text-xs mt-0.5">{String(d)}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white border-t border-ivory-200 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-maroon-700 uppercase tracking-widest mb-4">Buy Mamra Almonds by City</p>
          <div className="flex flex-wrap gap-2">
            {["mumbai","delhi-ncr","bangalore","hyderabad","chennai","pune","ahmedabad","jaipur","chandigarh","kochi"].map(city=>(
              <Link key={city} href={`/buy/mamra-almonds/${city}`} className="text-xs bg-ivory-50 border border-ivory-200 hover:border-maroon-300 text-maroon-700 font-semibold px-3 py-1.5 rounded-full transition-all">
                Mamra Almonds in {city.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ivory-50 border-t border-ivory-200 py-10 px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          {schema.mainEntity.map((f,i)=>(
            <details key={i} className="group bg-white border border-ivory-200 rounded-2xl overflow-hidden">
              <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-bold text-maroon-950 list-none text-sm">{f.name}<span className="text-gold-600 font-black ml-4 group-open:rotate-45 transition-transform">+</span></summary>
              <div className="px-6 pb-4 text-ink-600 text-sm leading-relaxed border-t border-ivory-100 pt-4">{f.acceptedAnswer.text}</div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
