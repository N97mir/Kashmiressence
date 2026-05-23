import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eid Gifts from Kashmir | Kashmir Essence — Saffron, Shilajit & Dry Fruit Gift Sets",
  description: "Premium Eid gifts from Kashmir — GI-Tagged saffron tins, Mamra almond gift boxes, Himalayan Shilajit and curated dry fruit sets. Beautifully packed. Ships India & UAE/GCC.",
  alternates: { canonical: "https://www.kashmiressence.com/eid-gift-kashmir" },
};

const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20order%20an%20Eid%20gift%20from%20Kashmir.";

export default function EidGiftKashmir() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-4">🌙 Premium Eid Gifts · Ships to UAE, India & GCC</p>
          <h1 className="text-4xl md:text-5xl font-black mb-5">Eid Gifts from Kashmir</h1>
          <p className="text-ivory-300 text-xl mb-10 max-w-2xl mx-auto">Give the gift of authentic Kashmir. GI-Tagged saffron tins, heritage Mamra almond boxes, and curated dry fruit sets. Beautifully packed. Delivered across India, UAE, and GCC.</p>
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl">
            WhatsApp to Order Eid Gift
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-black text-maroon-950 mb-8 text-center">Popular Eid Gift Options</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { emoji: "✨", name: "Kashmiri Saffron Gift Tin (5g)", desc: "5g Mongra saffron in a premium velvet-lined gold tin. The ultimate luxury Eid gift, cherished for its purity and aroma.", price: "₹4,549", link: "/products/kashmiri-saffron-gift-tin" },
            { emoji: "🎁", name: "Kashmir Dry Fruit Gift Box", desc: "Classic curated box of premium Mamra almonds, walnut kernels, and Mongra saffron. Hand-wrapped for Eid.", price: "₹4,099", link: "/products/kashmiri-dry-fruit-gift-box" },
            { emoji: "🪨", name: "Mamra Almond Box", desc: "250g heritage Mamra almonds in premium gift packaging. Beloved by every generation — the traditional Eid dry fruit gift.", price: "₹700", link: "/products/mamra-almonds-premium" },
            { emoji: "🍯", name: "Kashmir Raw Honey", desc: "500g raw alpine Kashmir honey in a glass jar. A thoughtful, healthy, and premium Eid gift.", price: "₹1,000", link: "/products/kashmiri-wildflower-honey" },
            { emoji: "🏔️", name: "Himalayan Shilajit Resin", desc: "20g pure Shilajit resin — a unique and deeply meaningful wellness gift for health-conscious recipients.", price: "₹1,299", link: "/products/himalayan-shilajit-resin" },
            { emoji: "🫖", name: "Kashmiri Kahwa Blend", desc: "100g premium green tea and spice Kahwa blend. The warmth and rich taste of Kashmir in a cup.", price: "₹399", link: "/products/kashmiri-kahwa-blend" },
          ].map((p) => (
            <div key={p.name} className="bg-white border border-ivory-200 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col">
              <span className="text-5xl mb-4 block text-center">{p.emoji}</span>
              <h3 className="font-extrabold text-maroon-950 text-base mb-2 text-center">{p.name}</h3>
              <p className="text-ink-500 text-xs leading-relaxed mb-4 text-center flex-1">{p.desc}</p>
              <p className="text-xl font-black text-maroon-950 text-center mb-4">{p.price}</p>
              <div className="flex gap-2">
                <a href={WA} target="_blank" rel="noreferrer" className="flex-1 bg-maroon-800 hover:bg-maroon-700 text-white font-black py-2.5 rounded-xl text-center text-xs transition-all">Order Gift</a>
                <Link href={p.link} className="flex-1 bg-ivory-100 hover:bg-ivory-200 text-maroon-800 font-bold py-2.5 rounded-xl text-center text-xs transition-all border border-ivory-200">Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-maroon-950 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-black mb-3">Custom Eid Gift Hampers</h2>
        <p className="text-ivory-300 mb-6 max-w-xl mx-auto">Need custom quantities, branded packaging, or bulk Eid gifts for a corporate event? WhatsApp us with your requirements.</p>
        <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-3.5 px-8 rounded-2xl transition-all">WhatsApp for Custom Orders</a>
      </section>

      <section className="bg-ivory-50 border-t border-ivory-200 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-black text-maroon-700 uppercase tracking-widest mb-3">Also see</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/diwali-gift-kashmir" className="text-xs bg-white border border-ivory-200 text-maroon-700 font-semibold px-3 py-1.5 rounded-full hover:border-maroon-300 transition-all">Diwali Gifts Kashmir</Link>
            <Link href="/corporate-gifts-kashmir" className="text-xs bg-white border border-ivory-200 text-maroon-700 font-semibold px-3 py-1.5 rounded-full hover:border-maroon-300 transition-all">Corporate Gifts Kashmir</Link>
            <Link href="/ship/saffron/uae" className="text-xs bg-white border border-ivory-200 text-maroon-700 font-semibold px-3 py-1.5 rounded-full hover:border-maroon-300 transition-all">Saffron to UAE</Link>
            <Link href="/ship/saffron/saudi-arabia" className="text-xs bg-white border border-ivory-200 text-maroon-700 font-semibold px-3 py-1.5 rounded-full hover:border-maroon-300 transition-all">Saffron to Saudi Arabia</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
