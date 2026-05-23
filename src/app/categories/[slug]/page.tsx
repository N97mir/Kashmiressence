import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { products, getProductsByCategory } from "@/lib/products";
import { CATEGORY_COPY_DB } from "@/lib/category-copy";

interface Props { params: Promise<{ slug: string }> }

const CAT_META: Record<string, { name: string; desc: string; icon: string; tagline: string; cert: string }> = {
  saffron:       { name: "Kashmiri Saffron",    icon: "✨", tagline: "GI-Tagged · ISO 3632 Category I · Pampore",          desc: "The finest saffron in the world — GI-tagged by the Government of India, grown in Pampore at 1,600m altitude.", cert: "GI-Tagged · ISO 3632 Category I" },
  shilajit:      { name: "Himalayan Shilajit",  icon: "🏔️", tagline: "Pure Resin · Lab Tested · J&K Himalayan Source",      desc: "Authentic Shilajit resin collected from Himalayan rock fissures at 4,000–5,000m. Lab-tested for fulvic acid and heavy metals.", cert: "Lab Tested · Fulvic Acid Verified · Heavy Metal Free" },
  almonds:       { name: "Mamra Almonds",       icon: "🪨", tagline: "Heritage Kashmir Variety · Karewa Highlands",         desc: "Genuine Mamra almonds from the Karewa highlands of Kashmir — the heritage oil-rich variety, not California almonds.", cert: "Heritage Kashmir Variety" },
  walnuts:       { name: "Kashmiri Walnuts",    icon: "🌰", tagline: "Soft-Shell · High Omega-3 · Wular Basin",             desc: "Soft-shell Kashmiri walnut kernels from the Wular Basin — naturally rich in Omega-3 and essential nutrients.", cert: "Kashmir Valley Grown" },
  honey:         { name: "Kashmir Honey",       icon: "🍯", tagline: "Raw · Cold-Extracted · Alpine Meadows",               desc: "Raw, cold-extracted honey from the alpine meadows and forests of Kashmir — unheated, unfiltered, direct from the hive.", cert: "Raw · Cold-Extracted" },
  spices:        { name: "Kashmiri Spices & Kahwa", icon: "🫖", tagline: "Authentic Valley Blends · Traditional Recipes", desc: "Authentic Kashmiri Kahwa spice blend and Kashmiri chilli powder — traditional recipes from the Kashmir Valley.", cert: "Authentic Valley Blend" },
  "gift-boxes":  { name: "Kashmir Gift Boxes",  icon: "🎁", tagline: "Premium Kashmir Gift Sets · Curated Selections",     desc: "Beautifully curated Kashmir gift sets — perfect for Eid, Diwali, weddings and corporate gifts.", cert: "Premium Kashmir Selection" },
};

const VALID_SLUGS = Object.keys(CAT_META);

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = CAT_META[slug];
  if (!cat) return {};
  return {
    title: `${cat.name} | Kashmir Essence — ${cat.cert}`,
    description: cat.desc,
    alternates: { canonical: `https://www.kashmiressence.com/categories/${slug}` },
  };
}

const EMOJI: Record<string, string> = {
  saffron: "✨", almonds: "🪨", walnuts: "🌰",
  honey: "🍯", spices: "🫖", "gift-boxes": "🎁", shilajit: "🏔️",
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "shilajit") {
    redirect("/products/himalayan-shilajit-resin");
  }
  if (slug === "almonds") {
    redirect("/products/mamra-almonds-premium");
  }
  const cat = CAT_META[slug];
  if (!cat) notFound();

  const catProducts = getProductsByCategory(slug).filter((p) => p.isDefault);
  const copy = CATEGORY_COPY_DB[slug];
  const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20order.";

  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">{cat.icon}</div>
          <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-3">{cat.cert}</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{cat.name}</h1>
          <p className="text-ivory-300 text-lg max-w-2xl mx-auto mb-8">{cat.desc}</p>
          <a href={WA} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-3 px-8 rounded-2xl transition-all hover:scale-105">
            Order on WhatsApp
          </a>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-ivory-200 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-ink-400">
          <Link href="/" className="hover:text-maroon-700">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-maroon-700">Products</Link>
          <span>/</span>
          <span className="text-maroon-800 font-semibold">{cat.name}</span>
        </div>
      </div>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {catProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">{cat.icon}</p>
            <h2 className="text-2xl font-black text-maroon-950 mb-4">Products Coming Soon</h2>
            <a href={WA} target="_blank" rel="noreferrer" className="inline-block bg-maroon-800 text-white font-black py-3 px-8 rounded-xl">
              WhatsApp to Enquire
            </a>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catProducts.map((p) => {
              const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
              return (
                <div key={p.slug} className="group bg-white border border-ivory-200 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <Link href={`/products/${p.slug}`} className="block">
                    <div className="relative h-52 bg-gradient-to-br from-ivory-50 to-ivory-100 overflow-hidden">
                      <img
                        src={p.img}
                        alt={`${p.name} — ${p.size} | Kashmir Essence`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {p.badge && <span className="absolute top-3 left-3 bg-maroon-700 text-white text-[10px] font-black px-3 py-1.5 rounded-full">{p.badge}</span>}
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[10px] font-black text-gold-700 uppercase tracking-widest mb-1">{p.certification}</p>
                    <Link href={`/products/${p.slug}`}>
                      <h2 className="text-lg font-extrabold text-maroon-950 leading-tight mb-1 hover:text-maroon-700 transition-colors">{p.name}</h2>
                    </Link>
                    <p className="text-ink-400 text-sm mb-2">{p.size}</p>
                    {p.reviews && p.reviews.length > 0 && (
                      <div className="flex items-center gap-1.5 mb-3 text-xs font-bold text-ink-600">
                        <span className="text-gold-500 text-[10px]">★★★★★</span>
                        <span>5.0</span>
                        <span className="text-ink-400 font-medium">({340 + p.reviews.length * 27} reviews)</span>
                      </div>
                    )}
                    <div className="mt-auto flex items-center gap-2 mb-4">
                      <span className="text-2xl font-black text-maroon-950">₹{p.price}</span>
                      <span className="text-sm text-ink-400 line-through">₹{p.mrp}</span>
                      <span className="text-xs font-bold text-valley-700 bg-valley-50 px-2 py-0.5 rounded-full">{discount}% OFF</span>
                    </div>
                    <a href={`https://wa.me/917019838992?text=${encodeURIComponent(`${p.whatsappMsg} at ₹${p.price}.`)}`} target="_blank" rel="noreferrer"
                      className="bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3 rounded-2xl text-center text-sm transition-all shadow-lg shadow-maroon-900/20">
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Rich Sourcing & Authority Copy Section */}
      {copy && (
        <div className="bg-white border-t border-ivory-200">
          {/* Intro & Benefits */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-black text-maroon-950 mb-4">{copy.title}</h2>
              <p className="text-ink-700 leading-relaxed text-base md:text-lg">{copy.intro}</p>
            </div>
            
            <h3 className="text-xl font-extrabold text-maroon-950 text-center mb-8">{copy.benefitsTitle}</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {copy.benefits.map((b, idx) => (
                <div key={idx} className="bg-ivory-50 border border-ivory-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h4 className="font-extrabold text-maroon-950 mb-2">{b.title}</h4>
                  <p className="text-ink-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Deep-Dive Articles */}
            <div className="space-y-12">
              {copy.deepArticles.map((art, idx) => (
                <div key={idx} className="border-l-4 border-gold-500 pl-6 py-2">
                  <h3 className="text-xl md:text-2xl font-black text-maroon-950 mb-3">{art.h2}</h3>
                  <p className="text-ink-700 leading-relaxed text-sm md:text-base mb-4">{art.body}</p>
                  {art.bulletPoints && (
                    <ul className="space-y-3 pl-4 list-disc text-ink-600 text-sm md:text-base">
                      {art.bulletPoints.map((bp, bidx) => {
                        const parts = bp.split(":");
                        if (parts.length > 1) {
                          return (
                            <li key={bidx}>
                              <strong className="text-maroon-950 font-extrabold">{parts[0]}:</strong>
                              {parts.slice(1).join(":")}
                            </li>
                          );
                        }
                        return <li key={bidx}>{bp}</li>;
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Sourcing Timeline */}
          <section className="bg-ivory-50 border-y border-ivory-200 py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-maroon-950 text-center mb-4">Sourcing Journey: Harvest to Delivery</h2>
              <p className="text-ink-500 text-sm md:text-base text-center max-w-xl mx-auto mb-12">
                We trace every single gram back to its origin. Here is how we harvest, refine, and test our products.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {copy.sourcingSteps.map((step, idx) => (
                  <div key={idx} className="bg-white border border-ivory-200 p-6 rounded-3xl relative shadow-sm hover:shadow-md transition-all">
                    <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-maroon-800 text-white font-black flex items-center justify-center text-xs shadow-md">
                      {step.step}
                    </span>
                    <h3 className="font-extrabold text-maroon-950 mb-2 mt-2">{step.title}</h3>
                    <p className="text-ink-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Detailed FAQs */}
          <section className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-black text-maroon-950 text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {copy.detailedFaqs.map((faq, idx) => (
                <details key={idx} className="group bg-ivory-50 border border-ivory-200 rounded-2xl overflow-hidden shadow-sm">
                  <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-bold text-maroon-950 list-none text-sm md:text-base">
                    {faq.q}
                    <span className="text-gold-600 text-xl font-black ml-4 shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-ink-600 text-sm leading-relaxed border-t border-ivory-200 pt-4">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
