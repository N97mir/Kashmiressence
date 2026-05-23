import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kashmiri Saffron Price 2024 | Kashmir Essence — Price Guide & Buying Tips",
  description: "Complete guide to Kashmiri saffron prices in 2024 — Mongra vs Lacha, 1g vs 5g, online vs offline. Why cheap 'Kashmiri' saffron is a red flag. Buy authentic at fair prices.",
  alternates: { canonical: "https://www.kashmiressence.com/kashmiri-saffron-price" },
};

const WA = "https://wa.me/917019838992?text=Hi%2C%20I%20want%20to%20know%20the%20price%20of%20Kashmiri%20Saffron.";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the price of 1g Kashmiri saffron?", acceptedAnswer: { "@type": "Answer", text: "Authentic Kashmiri Mongra saffron costs ₹400–700 per gram at source and ₹500–900 per gram retail. At Kashmir Essence, Mongra saffron is ₹599 for 1g. Lacha saffron is ₹449 for 1g. Any price below ₹200/g is a strong signal of adulteration." } },
    { "@type": "Question", name: "Why is Kashmiri saffron so expensive?", acceptedAnswer: { "@type": "Answer", text: "Saffron requires 150–170 flowers to produce 1 gram. Each flower is hand-harvested during a 2–3 week October window. The Kashmir Valley has limited cultivable Karewa plateau land. This scarcity and labour intensity makes genuine Kashmiri saffron naturally expensive — it cannot be produced cheaply without adulteration." } },
    { "@type": "Question", name: "Is expensive saffron always genuine?", acceptedAnswer: { "@type": "Answer", text: "High price is necessary but not sufficient for authenticity. Some sellers charge premium prices for adulterated saffron. Always look for: ISO 3632 Category I lab certificate, GI documentation, and a seller with verifiable contact (WhatsApp, phone) — not just an e-commerce listing." } },
  ],
};

export default function KashmiriSaffronPrice() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-4">2024 Price Guide</p>
          <h1 className="text-4xl md:text-5xl font-black mb-5">Kashmiri Saffron Price</h1>
          <p className="text-ivory-300 text-xl mb-10 max-w-2xl mx-auto">The complete guide to authentic Kashmiri saffron pricing — what to expect to pay, what price signals adulteration, and how to buy right.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-black text-maroon-950 mb-8 text-center">Kashmir Essence Saffron Prices</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full bg-white border border-ivory-200 rounded-2xl overflow-hidden shadow-sm text-sm">
            <thead className="bg-maroon-950 text-white">
              <tr>{["Product","Grade","Weight","Price","MRP"].map(h=><th key={h} className="px-5 py-3.5 text-left font-black text-xs uppercase tracking-wider">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-ivory-100">
              {[["Kashmiri Saffron Mongra","Highest (ISO Cat. I)","1g","₹599","₹849"],["Kashmiri Saffron Mongra","Highest (ISO Cat. I)","3g","₹1,699","₹2,399"],["Kashmiri Saffron Lacha","Traditional (ISO Cat. I)","1g","₹449","₹649"],["Kashmiri Saffron Gift Tin","Mongra · Gift Ready","2g","₹1,299","₹1,799"]].map(row=>(
                <tr key={row[0]+row[2]} className="hover:bg-ivory-50">
                  {row.map((c,i)=><td key={i} className={`px-5 py-3.5 ${i===3?"font-black text-maroon-950 text-base":""}`}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-maroon-50 border border-maroon-200 rounded-2xl p-6 mb-10">
          <h3 className="font-extrabold text-maroon-950 mb-3">⚠️ Price Red Flags — When to Walk Away</h3>
          <ul className="space-y-2 text-sm text-maroon-800">
            <li>• Kashmiri saffron priced below ₹200/g is almost certainly adulterated</li>
            <li>• "Kashmiri saffron" at ₹50–150/g on mass marketplaces is dyed corn silk or safflower</li>
            <li>• No lab certificate, no GI documentation — these are minimum credibility signals</li>
            <li>• Sellers who can&apos;t tell you which village/district the saffron comes from</li>
          </ul>
        </div>

        <div className="space-y-4">
          {schema.mainEntity.map((f,i)=>(
            <details key={i} className="group bg-white border border-ivory-200 rounded-2xl overflow-hidden">
              <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-bold text-maroon-950 list-none text-sm">{f.name}<span className="text-gold-600 font-black ml-4 group-open:rotate-45 transition-transform">+</span></summary>
              <div className="px-6 pb-4 text-ink-600 text-sm leading-relaxed border-t border-ivory-100 pt-4">{f.acceptedAnswer.text}</div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-maroon-800 hover:bg-maroon-700 text-white font-black py-4 px-10 rounded-2xl text-lg transition-all shadow-xl shadow-maroon-900/20">
            Get a Price Quote on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
