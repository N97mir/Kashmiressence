import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Birthday Gifts from Kashmir | Kashmir Essence — Unique Saffron & Dry Fruit Hampers",
  description: "Unique birthday gifts from Kashmir. Surprise your loved ones with premium GI-Tagged saffron, Mamra almonds, and curated dry fruit sets.",
  alternates: { canonical: "https://www.kashmiressence.com/birthday-gift-kashmir" },
};

const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20order%20a%20Birthday%20gift%20from%20Kashmir.";

export default function GiftPage() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-4">🎂 Premium Gifts · Ships to UAE, India & GCC</p>
          <h1 className="text-4xl md:text-5xl font-black mb-5">Birthday Gifts from Kashmir</h1>
          <p className="text-ivory-300 text-xl mb-10 max-w-2xl mx-auto">Give a unique and healthy birthday gift. GI-Tagged saffron tins, heritage Mamra almond boxes, and curated dry fruit sets.</p>
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl">
            WhatsApp to Order Gift
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-black text-maroon-950 mb-8 text-center">Popular Birthday Gift Options</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { img: "/images/saffron-gift-tin.jpg", name: "Kashmiri Saffron Gift Tin (5g)", desc: "5g premium Mongra saffron in a luxury velvet-lined gold tin. A truly luxurious and meaningful gift.", price: "₹4,549", link: "/products/kashmiri-saffron-gift-tin" },
            { img: "/images/mamra-almonds-250.jpg", name: "Mamra Almond Box", desc: "Heritage Mamra almonds in gift-ready packaging. The classic healthy and premium dry fruit gift.", price: "₹700", link: "/products/mamra-almonds-premium" },
            { img: "/images/dry-fruit-gift-box.jpg", name: "Dry Fruit Gift Box", desc: "A classic curated box of Kashmir's finest dry fruits. Perfect for any special occasion.", price: "₹4,099", link: "/products/kashmiri-dry-fruit-gift-box" }
          ].map((p, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-xl shadow-maroon-900/5 border border-ivory-200 flex flex-col">
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-ivory-100 border border-ivory-200">
                <Image src={p.img} alt={`Authentic ${p.name} from Kashmir`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" priority />
              </div>
              <h3 className="text-lg font-black text-maroon-950 text-center mb-2">{p.name}</h3>
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
        <h2 className="text-2xl font-black mb-3">Custom Gift Hampers</h2>
        <p className="text-ivory-300 mb-6 max-w-xl mx-auto">Need custom quantities, branded packaging, or bulk gifts? WhatsApp us with your requirements.</p>
        <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-3.5 px-8 rounded-2xl transition-all">WhatsApp for Custom Orders</a>
      </section>

      <section className="bg-ivory-50 border-t border-ivory-200 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-black text-maroon-700 uppercase tracking-widest mb-3">Also see</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/birthday-gift-kashmir" className="text-xs bg-white border border-ivory-200 text-maroon-700 font-semibold px-3 py-1.5 rounded-full hover:border-maroon-300 transition-all">Birthday Gifts Kashmir</Link>
            <Link href="/anniversary-gift-kashmir" className="text-xs bg-white border border-ivory-200 text-maroon-700 font-semibold px-3 py-1.5 rounded-full hover:border-maroon-300 transition-all">Anniversary Gifts Kashmir</Link>
            <Link href="/friend-gift-kashmir" className="text-xs bg-white border border-ivory-200 text-maroon-700 font-semibold px-3 py-1.5 rounded-full hover:border-maroon-300 transition-all">Friend Gifts Kashmir</Link>
            <Link href="/corporate-gifts-kashmir" className="text-xs bg-white border border-ivory-200 text-maroon-700 font-semibold px-3 py-1.5 rounded-full hover:border-maroon-300 transition-all">Corporate Gifts Kashmir</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
