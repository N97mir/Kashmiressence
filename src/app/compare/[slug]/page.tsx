import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { COMPARISONS } from "@/lib/versus-comparisons";
import { products as PRODUCTS } from "@/lib/products";

export async function generateStaticParams() {
  return COMPARISONS.map((comp) => ({
    slug: comp.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comp = COMPARISONS.find((c) => c.slug === slug);
  if (!comp) return {};

  return {
    title: comp.title,
    description: comp.metaDescription,
    alternates: {
      canonical: `https://kashmiressence.com/compare/${comp.slug}`,
    },
    openGraph: {
      title: comp.title,
      description: comp.metaDescription,
      type: "article",
    },
  };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = COMPARISONS.find((c) => c.slug === slug);
  if (!comp) notFound();

  const product = PRODUCTS.find((p) => p.slug === comp.productSlug);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      {/* ── HERO SECTION ── */}
      <section className="bg-gradient-to-b from-maroon-950 to-maroon-900 text-ivory-50 pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/products" className="text-gold-400 font-bold text-sm tracking-widest uppercase hover:text-gold-300 mb-6 inline-block">
            ← Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            {comp.heroHeading}
          </h1>
          <p className="text-lg md:text-xl text-maroon-100 max-w-3xl mx-auto leading-relaxed">
            {comp.heroSubheading}
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT & PRODUCT CARD ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: Content Articles */}
          <div className="flex-1 space-y-12">
            
            {/* The Comparison Matrix */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-ivory-200">
              <div className="bg-maroon-50 p-6 border-b border-ivory-200">
                <h2 className="text-2xl font-black text-maroon-950">Head-to-Head Comparison</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-ivory-50 text-maroon-900 text-sm uppercase tracking-widest">
                      <th className="p-4 font-black border-b border-r border-ivory-200 w-1/4">Feature</th>
                      <th className="p-4 font-black border-b border-r border-ivory-200 w-3/8 text-ink-500">{comp.competitorName}</th>
                      <th className="p-4 font-black border-b border-ivory-200 w-3/8 text-green-700 bg-green-50/30">{comp.ourName}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comp.comparisonMatrix.map((row, idx) => (
                      <tr key={idx} className="border-b border-ivory-100 hover:bg-ivory-50/50 transition-colors">
                        <td className="p-4 border-r border-ivory-100 font-bold text-maroon-900 bg-ivory-50/30">{row.feature}</td>
                        <td className={`p-4 border-r border-ivory-100 text-ink-600 ${row.winner === 'ours' ? 'bg-red-50/20' : ''}`}>
                          <div className="flex items-start gap-2">
                            {row.winner === 'ours' && <span className="text-red-500 mt-0.5">✕</span>}
                            {row.winner === 'competitor' && <span className="text-green-500 mt-0.5">✓</span>}
                            <span>{row.competitor}</span>
                          </div>
                        </td>
                        <td className={`p-4 text-ink-600 ${row.winner === 'ours' ? 'bg-green-50/30 font-medium' : ''}`}>
                          <div className="flex items-start gap-2">
                            {row.winner === 'ours' && <span className="text-green-600 mt-0.5">✓</span>}
                            {row.winner === 'competitor' && <span className="text-red-400 mt-0.5">✕</span>}
                            <span>{row.ours}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="space-y-8">
              {comp.detailedAnalysis.map((section, idx) => (
                <article key={idx} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-ivory-200">
                  <h3 className="text-2xl font-black text-maroon-950 mb-6">{section.title}</h3>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-ink-600 leading-relaxed text-lg">{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Verdict */}
            <div className="bg-gold-50 border-2 border-gold-200 rounded-3xl p-8 md:p-10 text-center">
              <h3 className="font-black text-gold-900 text-3xl mb-4 flex items-center justify-center gap-3">
                <span>🏆</span> {comp.verdict.title}
              </h3>
              <p className="text-gold-900/80 leading-relaxed text-lg max-w-2xl mx-auto font-medium">
                {comp.verdict.content}
              </p>
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
                      GI-Tagged / Lab Tested
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
            <p className="text-ink-500">Common questions about {comp.ourName} vs {comp.competitorName}.</p>
          </div>
          <div className="space-y-4">
            {comp.faqs.map((faq, idx) => (
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

    </main>
  );
}
