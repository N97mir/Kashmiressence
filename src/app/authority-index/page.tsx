import type { Metadata } from "next";
import Link from "next/link";
import { kashmirProducts, cities } from "@/lib/data";
import { countries } from "@/lib/countries";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Kashmir Essence Authority Index | Site Index & Directory",
  description: "Explore the complete index of Kashmir Essence: authentic Kashmiri Mongra saffron, Shilajit resin, Mamra almonds, and raw valley honey. Browse all products, cities, and countries.",
  alternates: { canonical: "https://www.kashmiressence.com/authority-index" },
};

const STATICS = [
  { name: "Home Page", href: "/" },
  { name: "All Products Catalog", href: "/products" },
  { name: "About Us & Heritage", href: "/about" },
  { name: "Knowledge Hub & Blog", href: "/blog" },
  { name: "Frequently Asked Questions", href: "/faq" },
  { name: "Contact & Support", href: "/contact" },
  { name: "Shipping & Delivery Policy", href: "/shipping-policy" },
  { name: "Returns & Refund Policy", href: "/return-refund-policy" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

const CAMPAIGNS = [
  { name: "Buy Kashmiri Saffron Online", href: "/buy-kashmiri-saffron-online" },
  { name: "Buy Mongra Saffron Online", href: "/mongra-saffron-online" },
  { name: "Kashmiri Saffron Price Guide", href: "/kashmiri-saffron-price" },
  { name: "Buy Mamra Almonds Online", href: "/buy-mamra-almonds-online" },
  { name: "Eid Gift Box Kashmir", href: "/eid-gift-kashmir" },
  { name: "Diwali Gift Box Kashmir", href: "/diwali-gift-kashmir" },
  { name: "Corporate Gifts Kashmir", href: "/corporate-gifts-kashmir" },
  { name: "Birthday Gift Kashmir", href: "/birthday-gift-kashmir" },
  { name: "Anniversary Gift Kashmir", href: "/anniversary-gift-kashmir" },
  { name: "Friend Gift Kashmir", href: "/friend-gift-kashmir" },
];

const CATEGORIES = [
  { name: "Kashmiri Saffron", slug: "saffron" },
  { name: "Himalayan Shilajit", slug: "shilajit" },
  { name: "Mamra Almonds", slug: "almonds" },
  { name: "Kashmiri Walnuts", slug: "walnuts" },
  { name: "Kashmir Honey", slug: "honey" },
  { name: "Kashmiri Spices & Kahwa", slug: "spices" },
  { name: "Kashmir Gift Boxes", slug: "gift-boxes" },
];

export default function AuthorityIndexPage() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6 text-center">
        <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-3">Kashmir Essence</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Authority Index</h1>
        <p className="text-ivory-300 text-lg max-w-2xl mx-auto">
          A centralized directory connecting our heritage, products, local city distribution points, international shipping routes, and scientific guides.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Core Pages */}
          <div className="bg-white border border-ivory-200 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-black text-maroon-950 border-b border-ivory-100 pb-3 mb-4 flex items-center gap-2">
              <span>🌐</span> Core Pages
            </h2>
            <ul className="space-y-2.5">
              {STATICS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-ink-600 hover:text-maroon-800 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Specialized Campaigns */}
          <div className="bg-white border border-ivory-200 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-black text-maroon-950 border-b border-ivory-100 pb-3 mb-4 flex items-center gap-2">
              <span>🎯</span> Campaign Pages
            </h2>
            <ul className="space-y-2.5">
              {CAMPAIGNS.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-ink-600 hover:text-maroon-800 transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Product Categories */}
          <div className="bg-white border border-ivory-200 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-black text-maroon-950 border-b border-ivory-100 pb-3 mb-4 flex items-center gap-2">
              <span>🏷️</span> Product Categories
            </h2>
            <ul className="space-y-2.5">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/categories/${c.slug}`} className="text-sm text-ink-600 hover:text-maroon-800 transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Complete Product Variation Catalog (40+ Products) */}
          <div className="bg-white border border-ivory-200 rounded-3xl p-6 shadow-sm md:col-span-2 lg:col-span-3">
            <h2 className="text-lg font-black text-maroon-950 border-b border-ivory-100 pb-3 mb-4 flex items-center gap-2">
              <span>📦</span> Complete Product Directory ({products.length} Items)
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2.5">
              {products.map((p) => (
                <div key={p.slug} className="flex flex-col">
                  <Link href={`/products/${p.slug}`} className="text-xs font-bold text-ink-700 hover:text-maroon-800 transition-colors truncate">
                    {p.name} ({p.size})
                  </Link>
                  <span className="text-[10px] text-ink-400 uppercase tracking-wider">{p.certification}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Knowledge Hub Articles */}
          <div className="bg-white border border-ivory-200 rounded-3xl p-6 shadow-sm md:col-span-2 lg:col-span-3">
            <h2 className="text-lg font-black text-maroon-950 border-b border-ivory-100 pb-3 mb-4 flex items-center gap-2">
              <span>📖</span> Knowledge Base &amp; Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {blogPosts.map((b) => (
                <div key={b.slug} className="flex flex-col gap-0.5">
                  <Link href={`/blog/${b.slug}`} className="text-sm font-bold text-maroon-900 hover:text-maroon-700 transition-colors">
                    {b.title}
                  </Link>
                  <p className="text-xs text-ink-500 line-clamp-1">{b.excerpt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. India City Pages */}
          <div className="bg-white border border-ivory-200 rounded-3xl p-6 shadow-sm md:col-span-2 lg:col-span-3">
            <h2 className="text-lg font-black text-maroon-950 border-b border-ivory-100 pb-3 mb-4 flex items-center gap-2">
              <span>🇮🇳</span> Local City Quick Order Points
            </h2>
            <div className="space-y-6">
              {kashmirProducts.map((kp) => (
                <div key={kp.slug} className="border-b border-ivory-100 pb-4 last:border-0 last:pb-0">
                  <h3 className="text-sm font-black text-maroon-800 uppercase tracking-widest mb-2">
                    {kp.name}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink-600">
                    {cities.map((city) => (
                      <Link key={city.slug} href={`/buy/${kp.slug}/${city.slug}`} className="hover:text-gold-600 transition-colors">
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. International Shipping Registry */}
          <div className="bg-white border border-ivory-200 rounded-3xl p-6 shadow-sm md:col-span-2 lg:col-span-3">
            <h2 className="text-lg font-black text-maroon-950 border-b border-ivory-100 pb-3 mb-4 flex items-center gap-2">
              <span>✈️</span> International Customs &amp; Shipping Hubs
            </h2>
            <div className="space-y-6">
              {kashmirProducts.map((kp) => (
                <div key={kp.slug} className="border-b border-ivory-100 pb-4 last:border-0 last:pb-0">
                  <h3 className="text-sm font-black text-maroon-800 uppercase tracking-widest mb-2">
                    {kp.name} Shipping
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink-600">
                    {countries.map((country) => (
                      <Link key={country.slug} href={`/ship/${kp.slug}/${country.slug}`} className="hover:text-gold-600 transition-colors">
                        {country.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
