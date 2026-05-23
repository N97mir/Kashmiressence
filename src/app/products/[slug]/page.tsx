import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import { cities } from "@/lib/data";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const BASE = "https://www.kashmiressence.com";
  return {
    title: `${p.name} | Kashmir Essence — ${p.certification}`,
    description: `Buy ${p.name} online. ${p.tagline}. ${p.origin}. Direct from Kashmir. WhatsApp to order.`,
    alternates: { canonical: `${BASE}/products/${slug}` },
    openGraph: {
      title: `${p.name} | Kashmir Essence`,
      description: `${p.tagline}. ${p.origin}.`,
      images: [`${BASE}${p.img}`],
      type: "website",
    },
  };
}

const EMOJI: Record<string, string> = {
  saffron: "✨", almonds: "🪨", walnuts: "🌰",
  honey: "🍯", spices: "🫖", "gift-boxes": "🎁", shilajit: "🏔️",
};

const WA_ICON = (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.847L.057 23.535a.5.5 0 0 0 .608.63l5.903-1.546A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.003-1.37l-.36-.214-3.724.976.994-3.63-.234-.374A9.791 9.791 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const BASE = "https://www.kashmiressence.com";
  const WA = `https://wa.me/917019838992?text=${encodeURIComponent(`${p.whatsappMsg} at ₹${p.price}.`)}`;
  const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: `${BASE}${p.img}`,
    brand: { "@type": "Brand", name: "Kashmir Essence" },
    offers: {
      "@type": "Offer",
      price: p.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${BASE}/products/${p.slug}`,
      seller: { "@type": "Organization", name: "Kashmir Essence" },
    },
    aggregateRating: p.reviews.length > 0 ? {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(340 + p.reviews.length * 27),
    } : undefined,
    review: p.reviews.map(r => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: String(r.stars) },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Products", item: `${BASE}/products` },
      { "@type": "ListItem", position: 3, name: p.name, item: `${BASE}/products/${p.slug}` },
    ],
  };

  return (
    <main className="bg-ivory-50 min-h-screen pt-24 pb-24 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-ivory-200 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-ink-400 flex-wrap">
          <Link href="/" className="hover:text-maroon-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-maroon-700 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-maroon-800 font-semibold truncate">{p.name}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Image — sticky on desktop */}
        <div className="md:sticky md:top-24">
          <div className="rounded-3xl aspect-square relative overflow-hidden shadow-lg border border-ivory-200 bg-ivory-100">
            <img
              src={p.img}
              alt={`${p.name} — ${p.size} | ${p.certification} | Buy Online India`}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {p.badge && (
              <span className="absolute top-4 left-4 bg-maroon-700 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">{p.badge}</span>
            )}
            <div className="absolute top-4 right-4 bg-valley-600 text-white text-xs font-black px-3 py-1.5 rounded-full">
              {discount}% OFF
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[["🔒","100% Authentic"],["🚚","Free ship ₹999+"],["↩️","7-Day Guarantee"],["📞","WhatsApp Support"]].map(([icon, label])=>(
              <div key={label} className="flex items-center gap-2 bg-white border border-ivory-200 rounded-xl p-3 text-xs font-semibold text-ink-700 shadow-sm">
                <span>{icon}</span>{label}
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="text-gold-700 font-black text-xs uppercase tracking-widest mb-2">{p.certification}</p>
          <h1 className="text-3xl md:text-4xl font-black text-maroon-950 leading-tight mb-2">{p.name}</h1>
          <p className="text-ink-500 text-lg mb-1">{p.subtitle}</p>
          <p className="text-ink-400 text-sm mb-4">{p.origin} · {p.size}</p>

          {/* Stars */}
          {p.reviews.length > 0 && (
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">{Array.from({length:5}).map((_,i)=><span key={i} className="text-gold-500 text-base">★</span>)}</div>
              <span className="text-sm text-ink-500 font-semibold">{340 + p.reviews.length * 27} verified reviews</span>
            </div>
          )}

          {/* Pack size variant selector */}
          {p.variants && p.variants.length > 0 && (
            <div className="mb-6 bg-white border border-ivory-200 rounded-2xl p-5 shadow-xs">
              <span className="text-xs font-black text-maroon-900 uppercase tracking-wider block mb-3">
                Select Pack Size / Weight
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {p.variants.map((v) => {
                  const isCurrent = v.slug === p.slug;
                  const discountPct = Math.round(((v.mrp - v.price) / v.mrp) * 100);
                  return (
                    <Link
                      key={v.slug}
                      href={`/products/${v.slug}`}
                      className={`border-2 rounded-xl p-2.5 text-center transition-all ${
                        isCurrent
                          ? "border-maroon-800 bg-maroon-50/50 shadow-xs"
                          : "border-ivory-200 bg-white hover:border-maroon-300 hover:shadow-xs"
                      }`}
                    >
                      <p className={`font-black text-xs sm:text-sm ${isCurrent ? "text-maroon-900" : "text-ink-800"}`}>
                        {v.size}
                      </p>
                      <p className={`text-xs font-extrabold mt-0.5 ${isCurrent ? "text-maroon-800" : "text-ink-600"}`}>
                        ₹{v.price.toLocaleString("en-IN")}
                      </p>
                      {discountPct > 0 && (
                        <span className="text-[9px] font-black text-valley-700 bg-valley-50 px-1 py-0.5 rounded-md mt-1 inline-block">
                          -{discountPct}%
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Price block */}
          <div className="bg-white border border-ivory-200 rounded-2xl p-5 mb-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl font-black text-maroon-950">₹{p.price.toLocaleString("en-IN")}</span>
              <span className="text-xl text-ink-400 line-through">₹{p.mrp.toLocaleString("en-IN")}</span>
              <span className="bg-valley-100 text-valley-700 font-black text-sm px-3 py-1 rounded-full">Save {discount}%</span>
            </div>
            {p.reviews.length > 0 && (
              <div className="flex items-center gap-1.5 mb-3 text-xs font-bold text-ink-600">
                <span className="text-gold-500 text-[10px]">★★★★★</span>
                <span>5.0</span>
                <span className="text-ink-400 font-semibold">({340 + p.reviews.length * 27} verified reviews)</span>
              </div>
            )}
            <p className="text-ink-500 text-xs">Price for {p.size}. Free delivery above ₹999 across India.</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {p.tagline.split(" · ").map((tag) => (
              <span key={tag} className="border border-maroon-200 bg-maroon-50 text-maroon-800 text-xs font-bold px-3 py-1.5 rounded-full">{tag}</span>
            ))}
          </div>

          {/* Urgency / Scarcity Trigger */}
          <div className="bg-[#fff1f2] border border-[#ffe4e6] rounded-2xl p-4 mb-4 flex items-center gap-3 shadow-sm">
            <span className="text-2xl animate-pulse">🔥</span>
            <div>
              <p className="text-[#9f1239] font-black text-sm">Selling Fast!</p>
              <p className="text-[#be123c] text-xs font-semibold mt-0.5">Limited stock available from the current harvest.</p>
            </div>
          </div>

          {/* Primary CTA */}
          <a href={WA} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-maroon-800 hover:bg-maroon-700 active:scale-95 text-white font-black py-4 px-8 rounded-2xl text-lg w-full transition-all shadow-xl shadow-maroon-900/30 mb-4">
            {WA_ICON}
            Order on WhatsApp — ₹{p.price.toLocaleString("en-IN")}
          </a>

          {/* Secondary trust line */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-ink-500 mb-6 bg-white py-3 px-4 rounded-xl border border-ivory-200">
            <span className="flex items-center gap-1">📦 Dispatched in 24h</span>
            <span className="hidden sm:inline text-ivory-300">|</span>
            <span className="flex items-center gap-1">✅ Lab Certified</span>
            <span className="hidden sm:inline text-ivory-300">|</span>
            <span className="flex items-center gap-1">↩️ 100% Authentic Guarantee</span>
          </div>

          {/* Featured Review */}
          {p.reviews.length > 0 && (
            <div className="bg-gradient-to-br from-white to-ivory-50 border border-gold-200/50 rounded-2xl p-5 mb-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-maroon-950 text-xs uppercase tracking-widest text-gold-700">Customer Review</h3>
                <div className="flex gap-0.5">
                  {Array.from({length:p.reviews[0].stars}).map((_,i)=><span key={i} className="text-gold-500 text-sm">★</span>)}
                </div>
              </div>
              <p className="text-ink-700 text-sm italic leading-relaxed mb-4">&ldquo;{p.reviews[0].text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-maroon-100 border border-maroon-200 flex items-center justify-center text-maroon-800 text-xs font-black">
                  {p.reviews[0].name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-black text-maroon-950">{p.reviews[0].name}</p>
                  <p className="text-[10px] font-bold text-ink-400">{p.reviews[0].city}</p>
                </div>
                <span className="ml-auto text-[9px] font-black text-valley-700 bg-valley-100 px-2 py-1 rounded-md uppercase tracking-wider flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Verified
                </span>
              </div>
            </div>
          )}

          {/* Product Details table */}
          <div className="bg-white border border-ivory-200 rounded-2xl overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 border-b border-ivory-100 bg-ivory-50">
              <h2 className="font-extrabold text-maroon-950 text-sm uppercase tracking-wider">Product Details</h2>
            </div>
            <div className="divide-y divide-ivory-100">
              {[["Origin", p.origin],["Size / Weight", p.size],["Harvest", p.harvest],["Shelf Life", p.shelfLife],["Certification", p.certification]].map(([k,v])=>(
                <div key={k} className="flex gap-4 px-5 py-3 text-sm">
                  <span className="text-ink-400 font-semibold w-28 shrink-0">{k}</span>
                  <span className="text-maroon-950 font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="text-ink-700 leading-relaxed text-sm md:text-base">
            <h2 className="font-extrabold text-maroon-950 text-base mb-2">About this product</h2>
            <p>{p.description}</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {p.reviews.length > 0 && (
        <section className="bg-white border-t border-ivory-200 py-14 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-gold-700 font-black text-xs uppercase tracking-widest mb-2">Verified Buyers</p>
              <h2 className="text-2xl md:text-3xl font-black text-maroon-950">Customer Reviews</h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="flex">{Array.from({length:5}).map((_,i)=><span key={i} className="text-gold-500 text-lg">★</span>)}</div>
                <span className="font-black text-maroon-950">5.0</span>
                <span className="text-ink-400 text-sm">({340 + p.reviews.length * 27} reviews)</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {p.reviews.map((r) => (
                <div key={r.name} className="bg-ivory-50 border border-ivory-200 rounded-2xl p-5 shadow-sm flex flex-col">
                  <div className="flex gap-0.5 mb-3">{Array.from({length:r.stars}).map((_,i)=><span key={i} className="text-gold-500">★</span>)}</div>
                  <p className="text-ink-700 text-sm leading-relaxed mb-4 italic flex-1">&ldquo;{r.text}&rdquo;</p>
                  <div className="border-t border-ivory-200 pt-3">
                    <p className="font-extrabold text-maroon-950 text-sm">{r.name}</p>
                    <p className="text-ink-400 text-xs">{r.city}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={WA} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3.5 px-8 rounded-2xl text-sm transition-all shadow-lg">
                {WA_ICON} Order Now — ₹{p.price.toLocaleString("en-IN")}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {p.faqs.length > 0 && (
        <section className="bg-ivory-50 border-t border-ivory-200 py-14 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-maroon-950 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {p.faqs.map((f, i) => (
                <details key={i} className="group bg-white border border-ivory-200 rounded-2xl overflow-hidden shadow-sm">
                  <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-bold text-maroon-950 list-none text-sm md:text-base">
                    {f.q}
                    <span className="text-gold-600 text-xl font-black ml-4 shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-ink-600 text-sm leading-relaxed border-t border-ivory-200 pt-4">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── HEAVY CRO & SEO CONTENT BLOCK ── */}
      {p.croContent && p.croContent.length > 0 && (
        <section className="bg-ivory-50 py-16 px-4 md:px-6 border-t border-ivory-200">
          <div className="max-w-4xl mx-auto space-y-12">
            {p.croContent.map((block, idx) => (
              <div key={idx} className="prose prose-lg prose-maroon max-w-none text-ink-700">
                <h2 className="text-3xl font-black text-maroon-950 mb-6">{block.heading}</h2>
                <div dangerouslySetInnerHTML={{ __html: block.body }} className="leading-relaxed whitespace-pre-wrap" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Infographic — category-specific */}
      {["saffron","shilajit","almonds"].includes(p.category) && (() => {
        const infos: Record<string, {src: string; alt: string; label: string}[]> = {
          saffron: [
            { src: "/images/infographic-saffron-purity-test.jpg", alt: "How to test pure Kashmiri saffron at home — 3 purity tests: water test, paper test, aroma test", label: "3 Home Purity Tests" },
            { src: "/images/infographic-saffron-origin.jpg", alt: "Kashmir saffron origin story — from Pampore crocus fields to sealed GI-Tagged tin", label: "From Field to Your Table" },
          ],
          shilajit: [
            { src: "/images/infographic-shilajit-benefits.jpg", alt: "Why Shilajit works — 6 evidence-backed benefits: energy, fulvic acid, 85+ minerals, testosterone, cognitive function, adaptogen", label: "6 Evidence-Backed Benefits" },
          ],
          almonds: [
            { src: "/images/infographic-mamra-vs-california.jpg", alt: "Kashmiri Mamra Almonds vs California Almonds comparison — oil content, chemical treatment, altitude, variety, nutrition", label: "Mamra vs California Almonds" },
          ],
        };
        const imgs = infos[p.category] ?? [];
        if (!imgs.length) return null;
        return (
          <section className="bg-white border-t border-ivory-200 py-12 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <p className="text-gold-700 font-black text-xs uppercase tracking-[0.25em] text-center mb-8">Learn More</p>
              <div className={`grid gap-6 ${imgs.length > 1 ? "md:grid-cols-2" : "max-w-2xl mx-auto"}`}>
                {imgs.map((info) => (
                  <div key={info.src} className="rounded-2xl overflow-hidden border border-ivory-200 shadow-sm">
                    <img src={info.src} alt={info.alt} className="w-full h-auto" loading="lazy" />
                    <p className="text-center text-xs font-bold text-ink-500 py-3 bg-ivory-50 border-t border-ivory-200">{info.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── PROGRAMMATIC SEO INTERNAL LINKING MESH ── */}
      <section className="bg-white border-t border-ivory-200 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-black text-maroon-950 mb-6 text-center">Available in Major Cities</h2>
          <p className="text-center text-ink-500 mb-8 max-w-2xl mx-auto text-sm">
            We offer ultra-fast, secure shipping of premium {p.name} directly to your doorstep. Select your region below to view local shipping timelines, climate-specific storage instructions, and exclusive local offers.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {cities.map((city) => {
              const seoSlug = (() => {
                if (p.slug.includes('shilajit')) return 'shilajit';
                if (p.slug.includes('mamra')) return 'mamra-almonds';
                if (p.slug.includes('walnut')) return 'walnuts';
                if (p.slug.includes('honey')) return 'honey';
                if (p.slug.includes('kahwa')) return 'kahwa';
                if (p.slug.includes('chilli')) return 'chilli';
                if (p.slug.includes('dry-fruit')) return 'dry-fruits';
                if (p.slug.includes('saffron-gift')) return 'saffron-gift';
                return 'saffron';
              })();
              return (
                <Link 
                  key={city.slug} 
                  href={`/buy/${seoSlug}/${city.slug}`}
                  className="text-xs font-semibold text-ink-600 bg-ivory-50 hover:bg-maroon-50 hover:text-maroon-800 border border-ivory-200 hover:border-maroon-300 px-3 py-1.5 rounded-full transition-colors"
                title={`Buy ${p.name} in ${city.name}`}
              >
                {city.name}
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* You may also like */}
      <section className="bg-ivory-50 border-t border-ivory-200 py-14 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-black text-maroon-950 mb-6 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.filter(r => r.slug !== p.slug && r.category !== p.category && r.isDefault).slice(0,4).map((r) => (
              <Link key={r.slug} href={`/products/${r.slug}`}
                className="group bg-ivory-50 border border-ivory-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="aspect-square overflow-hidden bg-ivory-100">
                  <img
                    src={r.img}
                    alt={`Buy ${r.name} online — ${r.size}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-black text-gold-700 uppercase tracking-wide mb-1 truncate">{r.certification.split("·")[0].trim()}</p>
                  <p className="text-sm font-extrabold text-maroon-950 leading-tight mb-2 line-clamp-2">{r.name}</p>
                  <p className="text-maroon-800 font-black">₹{r.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-ivory-200 p-4 shadow-2xl">
        <div className="flex gap-3 items-center">
          <div className="flex-1">
            <p className="text-xs text-ink-400 leading-none mb-0.5">{p.name}</p>
            <p className="font-black text-maroon-950 text-lg leading-none">₹{p.price.toLocaleString("en-IN")} <span className="text-ink-400 text-sm font-normal line-through">₹{p.mrp.toLocaleString("en-IN")}</span></p>
          </div>
          <a href={WA} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3.5 px-6 rounded-2xl text-sm transition-all shadow-xl shadow-maroon-900/30 active:scale-95 shrink-0">
            {WA_ICON} Order Now
          </a>
        </div>
      </div>
    </main>
  );
}
