import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Corporate Gifts from Kashmir | Kashmir Essence — Branded Saffron & Dry Fruit Hampers",
  description: "Premium corporate gifts from Kashmir — branded saffron tins, dry fruit hampers, and Shilajit gift sets. Bulk orders from 10 units. Custom packaging available. Ships Pan India.",
  alternates: { canonical: "https://www.kashmiressence.com/corporate-gifts-kashmir" },
};
const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20enquire%20about%20corporate%20gift%20orders%20from%20Kashmir.";
export default function CorporateGiftsKashmir() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-4">🎁 Corporate Gifting · Min. 10 Units · Custom Packaging</p>
          <h1 className="text-4xl md:text-5xl font-black mb-5">Corporate Gifts from Kashmir</h1>
          <p className="text-ivory-300 text-xl mb-10 max-w-2xl mx-auto">Stand out with premium Kashmir gifts — GI-Tagged saffron tins, Mamra almond hampers, and raw honey gift sets. Custom branding available. Trusted by leading companies for Diwali, Eid, and year-round corporate gifting.</p>
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl">Get a Corporate Quote</a>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[["📦","Minimum 10 Units","Corporate orders start from 10 units with bulk pricing and priority processing"],["🏷️","Custom Branding","Add your company logo and custom message to gift packaging"],["✈️","Pan-India Delivery","Deliver to multiple addresses across India. International available too"],["🤝","Dedicated Support","A dedicated WhatsApp contact for your corporate order — from quote to delivery"],["🔬","Certified Quality","Every product lab certified. Give gifts you can stand behind."],["💳","Invoice & GST","Full GST invoice and purchase order system for corporate procurement"]].map(([i,t,d])=>(
            <div key={String(t)} className="bg-white border border-ivory-200 rounded-2xl p-6 shadow-sm">
              <span className="text-3xl mb-3 block">{String(i)}</span>
              <h3 className="font-extrabold text-maroon-950 mb-1">{String(t)}</h3>
              <p className="text-ink-500 text-sm leading-relaxed">{String(d)}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-black text-maroon-950 mb-6 text-center">Popular Corporate Gift Options</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {[["✨ Saffron Gift Tin","2g Mongra Saffron in premium tin. Starting ₹1,099/unit (10+ units)","Best for: C-suite gifts, client appreciation"],["🎁 Premium Hamper","Saffron + Mamra Almonds + Honey. Starting ₹1,699/unit (10+ units)","Best for: Team gifts, Diwali, annual events"],["🪨 Almond Box","250g Mamra Almonds in branded box. Starting ₹599/unit (10+ units)","Best for: Large team gifting, vendor gifts"],["🍯 Honey Gift Set","Raw Kashmir Honey 500g. Starting ₹749/unit (10+ units)","Best for: Health-focused corporate gifting"]].map(([n,p,u])=>(
            <div key={String(n)} className="bg-white border border-ivory-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-extrabold text-maroon-950 text-lg mb-2">{String(n)}</h3>
              <p className="text-maroon-700 font-black text-sm mb-1">{String(p)}</p>
              <p className="text-ink-400 text-xs mb-4">{String(u)}</p>
              <a href={WA} target="_blank" rel="noreferrer" className="inline-block bg-maroon-800 hover:bg-maroon-700 text-white font-black py-2.5 px-6 rounded-xl text-sm transition-all">Get Quote</a>
            </div>
          ))}
        </div>
        <div className="bg-maroon-950 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-black mb-3">Ready to order?</h3>
          <p className="text-ivory-300 mb-6">WhatsApp us with: number of units, occasion, any custom branding requirements. We'll send a quote within a few hours.</p>
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-3.5 px-8 rounded-2xl transition-all">WhatsApp: +91 7019838992</a>
        </div>
      </section>
    </main>
  );
}
