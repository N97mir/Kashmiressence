import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mongra Saffron Online | Kashmir Essence — Pure Stigma Tips, Highest Grade",
  description: "Buy Mongra saffron online — the highest grade of Kashmiri saffron, consisting of pure stigma tips only. Maximum crocin content. Lab certified ISO 3632 Cat. I. Ships India & worldwide.",
  alternates: { canonical: "https://www.kashmiressence.com/mongra-saffron-online" },
};

const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20buy%20Mongra%20Saffron.";

export default function MongraSaffronOnline() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-4">Highest Grade · Pure Stigma Tips · ISO 3632 Cat. I</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">Mongra Saffron Online</h1>
          <p className="text-ivory-300 text-xl mb-8 max-w-2xl mx-auto">Mongra saffron consists of pure crimson stigma tips only — no yellow style, no fillers. The highest-grade Kashmiri saffron available. 460–480 threads per gram. Lab certified.</p>
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl">
            Order Mongra — WhatsApp
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white border border-ivory-200 rounded-3xl p-8 shadow-sm text-center">
            <span className="text-8xl mb-5 block">✨</span>
            <p className="text-gold-700 font-black text-xs uppercase tracking-widest mb-2">Mongra — Premium Grade</p>
            <h2 className="text-2xl font-black text-maroon-950 mb-2">Kashmiri Saffron Mongra</h2>
            <p className="text-ink-500 text-sm mb-5">1g · Pure stigma tips · Pampore, Kashmir</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl font-black text-maroon-950">₹599</span>
              <span className="text-ink-400 line-through">₹849</span>
              <span className="bg-valley-50 text-valley-700 text-xs font-bold px-2 py-0.5 rounded-full">29% OFF</span>
            </div>
            <a href={WA} target="_blank" rel="noreferrer" className="block w-full bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3.5 rounded-2xl text-sm transition-all shadow-md mb-3">Order on WhatsApp</a>
            <Link href="/products/kashmiri-saffron-mongra" className="block w-full bg-ivory-100 hover:bg-ivory-200 text-maroon-800 font-bold py-3.5 rounded-2xl text-sm transition-all border border-ivory-300">View Product Details</Link>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-maroon-950">What Makes Mongra the Best Grade?</h2>
            {[["Pure Stigma Tips","Mongra contains only the deep crimson stigma tips — the part of the flower that contains maximum crocin, safranal, and picrocrocin."],["Highest Crocin Level","Mongra saffron tests at 250–280 absorbance units for crocin — above the ISO 3632 Category I minimum of 220, and above most other saffron origins."],["Intense Colour","A pinch colours a pot of rice golden-yellow. The colour is deeper and more vibrant than Lacha or Iranian saffron."],["Strong Aroma","The signature Kashmiri saffron aroma — intensely floral, slightly honeyed — is most concentrated in Mongra grade."]].map(([t,d])=>(
              <div key={String(t)} className="bg-white border border-ivory-200 rounded-2xl p-5">
                <h3 className="font-extrabold text-maroon-950 text-sm mb-1">{String(t)}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{String(d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-ivory-200 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-black text-maroon-700 uppercase tracking-widest mb-4">Buy Mongra Saffron by City</p>
          <div className="flex flex-wrap gap-2">
            {["mumbai","delhi-ncr","bangalore","hyderabad","chennai","pune","ahmedabad","kolkata","jaipur","surat"].map((city) => (
              <Link key={city} href={`/buy/saffron/${city}`} className="text-xs bg-ivory-50 border border-ivory-200 hover:border-maroon-300 text-maroon-700 font-semibold px-3 py-1.5 rounded-full transition-all">
                Mongra in {city.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
