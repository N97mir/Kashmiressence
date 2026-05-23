import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HEALTH_BENEFITS } from "@/lib/health-benefits";
import { products as PRODUCTS } from "@/lib/products";

export async function generateStaticParams() {
  return HEALTH_BENEFITS.map((benefit) => ({
    slug: benefit.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const benefit = HEALTH_BENEFITS.find((b) => b.slug === slug);
  if (!benefit) return {};

  return {
    title: benefit.title,
    description: benefit.metaDescription,
    alternates: {
      canonical: `https://kashmiressence.com/benefits/${benefit.slug}`,
    },
    openGraph: {
      title: benefit.title,
      description: benefit.metaDescription,
      type: "article",
    },
  };
}

export default async function BenefitPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const benefit = HEALTH_BENEFITS.find((b) => b.slug === slug);
  if (!benefit) notFound();

  const product = PRODUCTS.find((p) => p.slug === benefit.productSlug);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      {/* ── HERO SECTION ── */}
      <section className="bg-gradient-to-b from-maroon-950 to-maroon-900 text-ivory-50 pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/products" className="text-gold-400 font-bold text-sm tracking-widest uppercase hover:text-gold-300 mb-6 inline-block">
            ← Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            {benefit.heroHeading}
          </h1>
          <p className="text-lg md:text-xl text-maroon-100 max-w-3xl mx-auto leading-relaxed">
            {benefit.heroSubheading}
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT & PRODUCT CARD ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: Content Articles */}
          <div className="flex-1 space-y-12">
            
            {/* The Science */}
            <article className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-ivory-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🔬</span>
                <h2 className="text-2xl md:text-3xl font-black text-maroon-950">{benefit.sections.science.title}</h2>
              </div>
              <div className="space-y-4">
                {benefit.sections.science.content.map((paragraph, idx) => (
                  <p key={idx} className="text-ink-600 leading-relaxed text-lg">{paragraph}</p>
                ))}
              </div>
            </article>

            {/* How to Consume */}
            <article className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-ivory-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🥣</span>
                <h2 className="text-2xl md:text-3xl font-black text-maroon-950">{benefit.sections.howToConsume.title}</h2>
              </div>
              <ul className="space-y-4">
                {benefit.sections.howToConsume.content.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-valley-100 text-valley-700 flex items-center justify-center font-bold text-sm mt-1">{idx + 1}</span>
                    <span className="text-ink-600 leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Dosage & Timeline Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-valley-50 border border-valley-200 rounded-3xl p-8">
                <h3 className="font-black text-valley-900 text-xl mb-3 flex items-center gap-2"><span>⚖️</span> Optimal Dosage</h3>
                <p className="text-valley-800 leading-relaxed">{benefit.sections.dosage}</p>
              </div>
              <div className="bg-gold-50 border border-gold-200 rounded-3xl p-8">
                <h3 className="font-black text-gold-900 text-xl mb-3 flex items-center gap-2"><span>⏱️</span> Expected Timeline</h3>
                <p className="text-gold-800 leading-relaxed">{benefit.sections.timeline}</p>
              </div>
            </div>

          </div>

          {/* RIGHT: Product Sticky Sidebar */}
          <div className="lg:w-[400px]">
            <div className="sticky top-32">
              {product && (
                <div className="bg-white rounded-3xl p-6 shadow-xl shadow-maroon-900/5 border border-ivory-200">
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 bg-ivory-100">
                    <Image src={product.img} alt={product.name} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-black text-maroon-900">
                      {product.badge || "Premium Quality"}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-maroon-950 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-gold-500 text-sm">★★★★★</div>
                    <span className="text-ink-500 text-xs font-semibold">{340 + (product.reviews?.length || 0) * 27} verified reviews</span>
                  </div>
                  <p className="text-ink-600 text-sm mb-6 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-3xl font-black text-maroon-950">₹{product.price.toLocaleString("en-IN")}</span>
                    <span className="text-lg text-ink-400 line-through mb-1">₹{product.mrp.toLocaleString("en-IN")}</span>
                  </div>
                  
                  {/* Urgency Trigger */}
                  <div className="bg-[#fff1f2] border border-[#ffe4e6] rounded-xl p-3 mb-4 flex items-center gap-3">
                    <span className="text-xl animate-pulse">🔥</span>
                    <div>
                      <p className="text-[#9f1239] font-black text-xs">Selling Fast!</p>
                      <p className="text-[#be123c] text-[10px] font-semibold mt-0.5">Limited stock available.</p>
                    </div>
                  </div>

                  <Link href={`/products/${product.slug}`} className="block w-full text-center bg-maroon-800 hover:bg-maroon-700 text-white font-black py-4 rounded-xl transition-all shadow-md">
                    View Product Details
                  </Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="bg-ivory-100 py-20 px-6 border-t border-ivory-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-maroon-950 mb-4">Frequently Asked Questions</h2>
            <p className="text-ink-500">Everything you need to know about using {product?.name} for {benefit.condition}.</p>
          </div>
          <div className="space-y-4">
            {benefit.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-ivory-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-extrabold text-maroon-950 text-lg hover:bg-ivory-50 transition-colors">
                  {faq.question}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 text-ink-600 leading-relaxed border-t border-ivory-100 mt-2">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDICAL DISCLAIMER ── */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-maroon-50 border border-maroon-100 rounded-2xl p-6 text-center">
          <p className="text-xs text-maroon-800/80 leading-relaxed">
            <strong className="block mb-1 text-maroon-900">Medical Disclaimer</strong>
            {benefit.medicalDisclaimer}
          </p>
        </div>
      </section>

    </main>
  );
}
