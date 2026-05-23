import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Diwali Gifts from Kashmir | Kashmir Essence — Saffron, Dry Fruits & Honey Gift Sets",
  description: "Premium Diwali gifts from Kashmir — GI-Tagged saffron tins, Mamra almond hampers, Kashmir honey and dry fruit gift sets. The most meaningful Diwali gifts. Shipping India & worldwide.",
  alternates: { canonical: "https://www.kashmiressence.com/diwali-gift-kashmir" },
};
const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20order%20a%20Diwali%20gift.";
export default function DiwaliGiftKashmir() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-4">🪔 Premium Diwali Gifts · Ships Across India</p>
          <h1 className="text-4xl md:text-5xl font-black mb-5">Diwali Gifts from Kashmir</h1>
          <p className="text-ivory-300 text-xl mb-10 max-w-2xl mx-auto">Move beyond generic chocolate boxes. Gift the authentic luxury of Kashmir — GI-Tagged saffron, heritage Mamra almonds, raw honey, and curated dry fruit hampers. Beautifully packed for Diwali.</p>
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl">Order Diwali Gift — WhatsApp</a>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-black text-maroon-950 mb-8 text-center">Diwali Gift Collections</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            ["/images/saffron-gift-tin.jpg", "Kashmir Saffron Gift Tin (5g)", "The statement gift — 5g Mongra saffron in a premium tin. The luxury Diwali gift that anyone will remember.", "₹4,549", "/products/kashmiri-saffron-gift-tin"],
            ["/images/dry-fruit-gift-box.jpg", "Kashmir Dry Fruit Gift Box (Classic)", "Mamra almonds + Kashmiri walnuts + Kashmir saffron — the complete premium festive hamper.", "₹4,099", "/products/kashmiri-dry-fruit-gift-box"],
            ["/images/mamra-almonds-250.jpg", "Mamra Almond Box", "250g premium Mamra almonds in Diwali gift packaging. The gold standard Diwali dry fruit gift.", "₹700", "/products/mamra-almonds-premium"],
            ["/images/kashmir-wildflower-honey.jpg", "Raw Kashmir Honey", "500g raw alpine honey in glass jar — a pure, wholesome Diwali gift.", "₹1,000", "/products/kashmiri-wildflower-honey"],
            ["/images/kashmiri-kahwa-blend.jpg", "Kahwa Gift Set", "Premium Kashmiri Kahwa blend — the warmth of Kashmir in a cup. Perfect gifting.", "₹399", "/products/kashmiri-kahwa-blend"],
            ["/images/shilajit-resin.jpg", "Himalayan Shilajit", "A bold wellness gift — pure Himalayan Shilajit resin for health-conscious recipients.", "₹1,299", "/products/himalayan-shilajit-resin"]
          ].map(([img,n,d,p,l])=>(
            <div key={String(n)} className="bg-white border border-ivory-200 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col">
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-ivory-100 border border-ivory-200">
                <Image src={String(img)} alt={`Premium ${String(n)} from Kashmir`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" priority />
              </div>
              <h3 className="font-extrabold text-maroon-950 text-base mb-2 text-center">{String(n)}</h3>
              <p className="text-ink-500 text-xs leading-relaxed mb-4 text-center flex-1">{String(d)}</p>
              <p className="text-xl font-black text-maroon-950 text-center mb-4">{String(p)}</p>
              <div className="flex gap-2">
                <a href={WA} target="_blank" rel="noreferrer" className="flex-1 bg-maroon-800 hover:bg-maroon-700 text-white font-black py-2.5 rounded-xl text-center text-xs transition-all">Order Gift</a>
                <Link href={String(l)} className="flex-1 bg-ivory-100 border border-ivory-200 text-maroon-800 font-bold py-2.5 rounded-xl text-center text-xs transition-all">Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-maroon-950 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-black mb-3">Corporate Diwali Gifting</h2>
        <p className="text-ivory-300 mb-6 max-w-xl mx-auto">Bulk Diwali hampers with custom branding for your team, clients, or events. Minimum 10 units. WhatsApp for pricing.</p>
        <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-3.5 px-8 rounded-2xl transition-all">WhatsApp for Bulk Orders</a>
      </section>
      <section className="bg-ivory-50 border-t border-ivory-200 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
          <Link href="/eid-gift-kashmir" className="text-xs bg-white border border-ivory-200 text-maroon-700 font-semibold px-3 py-1.5 rounded-full hover:border-maroon-300 transition-all">Eid Gifts Kashmir</Link>
          <Link href="/corporate-gifts-kashmir" className="text-xs bg-white border border-ivory-200 text-maroon-700 font-semibold px-3 py-1.5 rounded-full hover:border-maroon-300 transition-all">Corporate Gifts</Link>
          <Link href="/buy-kashmiri-saffron-online" className="text-xs bg-white border border-ivory-200 text-maroon-700 font-semibold px-3 py-1.5 rounded-full hover:border-maroon-300 transition-all">Buy Saffron Online</Link>
        </div>
      </section>
    </main>
  );
}
