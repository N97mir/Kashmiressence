import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "All Products | Kashmir Essence — Authentic Kashmiri Products",
  description: "Shop our full range of authentic Kashmiri products: GI-Tagged saffron, pure Himalayan Shilajit, heritage Mamra almonds, raw honey, Kahwa spice blend and more. Direct from Kashmir.",
  alternates: { canonical: "https://www.kashmiressence.com/products" },
};

const EMOJI: Record<string, string> = {
  saffron: "✨", almonds: "🪨", walnuts: "🌰",
  honey: "🍯", spices: "🫖", "gift-boxes": "🎁", shilajit: "🏔️",
};

const CATEGORY_ORDER = ["saffron", "shilajit", "almonds", "walnuts", "honey", "spices"];

export default function ProductsPage() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    cat,
    items: products.filter((p) => p.category === cat && p.isDefault),
  })).filter((g) => g.items.length > 0);

  const CAT_LABELS: Record<string, string> = {
    saffron: "Saffron", shilajit: "Shilajit", almonds: "Almonds",
    walnuts: "Walnuts", honey: "Honey", spices: "Spices & Kahwa",
  };

  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-14 px-6 text-center">
        <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-3">Direct from Kashmir Valley</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">All Products</h1>
        <p className="text-ivory-300 text-lg max-w-xl mx-auto">GI-Tagged saffron, pure Shilajit, heritage almonds, raw honey & authentic spices — every product direct from source.</p>
      </section>

      {/* Category filters */}
      <div className="sticky top-[calc(2rem+4rem)] z-30 bg-white border-b border-ivory-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-none">
          {Object.entries(CAT_LABELS).map(([cat, label]) => (
            <a key={cat} href={`#${cat}`}
              className="shrink-0 text-xs font-bold bg-ivory-100 hover:bg-maroon-100 hover:text-maroon-900 text-ink-700 px-4 py-2 rounded-full transition-colors border border-ivory-200 hover:border-maroon-200">
              {EMOJI[cat]} {label}
            </a>
          ))}
        </div>
      </div>

      {/* Products by category */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {grouped.map(({ cat, items }) => (
          <div key={cat} id={cat}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">{EMOJI[cat]}</span>
              <div>
                <h2 className="text-2xl font-black text-maroon-950">{CAT_LABELS[cat]}</h2>
                <p className="text-ink-400 text-sm">{items.length} product{items.length > 1 ? "s" : ""}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {items.map((p) => {
                const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
                return (
                  <div key={p.slug} className="group bg-white border border-ivory-200 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <Link href={`/products/${p.slug}`} className="block">
                      <div className="relative h-44 bg-gradient-to-br from-ivory-50 to-ivory-100 overflow-hidden">
                        <img
                          src={p.img}
                          alt={`${p.name} — ${p.size} | Kashmir Essence`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {p.badge && <span className="absolute top-3 left-3 bg-maroon-700 text-white text-[10px] font-black px-2.5 py-1 rounded-full">{p.badge}</span>}
                      </div>
                    </Link>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-[10px] font-black text-gold-700 uppercase tracking-widest mb-1">{p.certification}</p>
                      <Link href={`/products/${p.slug}`}>
                        <h3 className="font-extrabold text-maroon-950 leading-tight mb-1 hover:text-maroon-700 transition-colors text-base">{p.name}</h3>
                      </Link>
                      <p className="text-ink-400 text-xs mb-2">{p.size}</p>
                      {p.reviews && p.reviews.length > 0 && (
                        <div className="flex items-center gap-1.5 mb-3 text-xs font-bold text-ink-600">
                          <span className="text-gold-500 text-[10px]">★★★★★</span>
                          <span>5.0</span>
                          <span className="text-ink-400 font-medium">({340 + p.reviews.length * 27})</span>
                        </div>
                      )}
                      <div className="mt-auto flex items-center gap-2 mb-3">
                        <span className="text-xl font-black text-maroon-950">₹{p.price}</span>
                        <span className="text-xs text-ink-400 line-through">₹{p.mrp}</span>
                        <span className="text-[10px] font-bold text-valley-700 bg-valley-50 px-1.5 py-0.5 rounded-full">{discount}% OFF</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Link href={`/products/${p.slug}`}
                          className="border border-maroon-200 hover:border-maroon-300 bg-ivory-50 text-maroon-900 text-xs font-black py-2.5 rounded-xl text-center transition-all flex items-center justify-center">
                          View Details
                        </Link>
                        <a href={`https://wa.me/917019838992?text=${encodeURIComponent(`${p.whatsappMsg} at ₹${p.price}.`)}`} target="_blank" rel="noreferrer"
                          className="bg-maroon-800 hover:bg-maroon-700 text-white font-black py-2.5 rounded-xl text-center text-xs transition-all shadow-md shadow-maroon-900/20 flex items-center justify-center">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
