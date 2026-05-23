import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { getProduct } from "@/lib/products";
import React from "react";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const BASE = "https://www.kashmiressence.com";
  return {
    title: `${post.title} | Kashmir Essence Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `${BASE}/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.publishDate, modifiedTime: post.lastModified },
    other: { "article:published_time": post.publishDate, "article:modified_time": post.lastModified },
  };
}

function renderBodyWithLinks(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | React.ReactNode)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [_, linkText, linkUrl] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    const isExternal = linkUrl.startsWith("http") || linkUrl.startsWith("//");
    if (isExternal) {
      parts.push(
        <a
          key={matchIndex}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-maroon-700 hover:text-maroon-900 underline font-semibold transition-colors"
        >
          {linkText}
        </a>
      );
    } else {
      parts.push(
        <Link
          key={matchIndex}
          href={linkUrl}
          className="text-maroon-700 hover:text-maroon-900 underline font-semibold transition-colors"
        >
          {linkText}
        </Link>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const BASE = "https://www.kashmiressence.com";
  const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20order.";

  const featuredProduct = post.featuredProductSlug ? getProduct(post.featuredProductSlug) : undefined;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "Kashmir Essence" },
    publisher: { "@type": "Organization", name: "Kashmir Essence", logo: { "@type": "ImageObject", url: `${BASE}/images/logo.png` } },
    datePublished: post.publishDate,
    dateModified: post.lastModified,
    mainEntityOfPage: `${BASE}/blog/${slug}`,
    keywords: post.keywords.join(", "),
  };

  const faqSchema = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${slug}` },
    ],
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-ivory-200 px-6 py-3">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center gap-2 text-sm text-ink-400">
          <Link href="/" className="hover:text-maroon-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-maroon-700">Blog</Link>
          <span>/</span>
          <span className="text-maroon-800 font-semibold truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      {/* Article hero */}
      <div className="bg-gradient-to-br from-maroon-950 to-maroon-900 py-14 px-6 text-center text-white">
        {post.heroImage ? (
          <div className="relative w-full max-w-3xl mx-auto h-64 md:h-80 rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <img src={post.heroImage} alt={post.heroImageAlt ?? post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 to-transparent" />
          </div>
        ) : (
          <div className="text-6xl mb-5">{post.heroEmoji}</div>
        )}
        <div className="flex items-center justify-center gap-3 text-xs text-ivory-400 mb-5">
          <span>{post.readTime}</span>
          <span>·</span>
          <span>{new Date(post.publishDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span>·</span>
          <span className="bg-gold-600/20 text-gold-400 font-bold px-2.5 py-0.5 rounded-full capitalize">{post.category}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-3xl mx-auto">{post.title}</h1>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 py-14">
        {/* Excerpt */}
        <p className="text-xl text-ink-600 leading-relaxed mb-12 pb-8 border-b border-ivory-300 font-medium">{post.excerpt}</p>

        {/* Content sections */}
        <div className="space-y-10">
          {post.content.map((section, i) => (
            <React.Fragment key={i}>
              <div>
                <h2 className="text-2xl font-black text-maroon-950 mb-4 leading-tight">{section.h2}</h2>
                <div className="text-ink-700 leading-relaxed text-lg whitespace-pre-wrap space-y-4">{renderBodyWithLinks(section.body)}</div>
              </div>

              {/* Inline featured product card injection (after 3rd section, i.e., index 2) */}
              {i === 2 && featuredProduct && (
                <div className="my-10 bg-white border border-ivory-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden bg-ivory-100 flex-shrink-0">
                    <img src={featuredProduct.img} alt={featuredProduct.name} className="w-full h-full object-cover" />
                    {featuredProduct.badge && (
                      <span className="absolute top-3 left-3 bg-gold-600 text-ink-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm">
                        {featuredProduct.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-gold-600 font-bold text-xs uppercase tracking-widest mb-1.5">{featuredProduct.certification}</p>
                      <h3 className="text-xl font-black text-maroon-950 leading-tight mb-2">{featuredProduct.name}</h3>
                      <p className="text-ink-500 text-xs mb-3">Origin: {featuredProduct.origin} · Harvest: {featuredProduct.harvest}</p>
                      <p className="text-ink-600 text-sm leading-relaxed line-clamp-3 mb-4">{featuredProduct.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ivory-100 mt-auto">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-black text-maroon-900">₹{featuredProduct.price}</span>
                          {featuredProduct.mrp > featuredProduct.price && (
                            <>
                              <span className="text-sm text-ink-400 line-through">₹{featuredProduct.mrp}</span>
                              <span className="text-xs text-green-700 font-bold bg-green-50 px-2 py-0.5 rounded">
                                Save {Math.round(((featuredProduct.mrp - featuredProduct.price) / featuredProduct.mrp) * 100)}%
                              </span>
                            </>
                          )}
                        </div>
                        <p className="text-[10px] text-ink-400 mt-0.5">Inclusive of all taxes</p>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/products/${featuredProduct.slug}`} className="bg-ivory-100 hover:bg-ivory-200 text-maroon-900 border border-maroon-900/10 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors">
                          View Details
                        </Link>
                        <a href={`https://wa.me/917019838992?text=${encodeURIComponent(`Hi Kashmir Essence, I read your article about "${post.title}" and want to order ${featuredProduct.name} at ₹${featuredProduct.price}!`)}`} target="_blank" rel="noreferrer" className="bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-2.5 px-4 rounded-xl text-xs transition-all hover:scale-105">
                          Order on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Keywords */}
        <div className="mt-12 pt-8 border-t border-ivory-300">
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((kw) => (
              <Link href={`/categories/${post.category}`} key={kw} className="bg-ivory-100 hover:bg-ivory-200 text-ink-700 hover:text-maroon-800 text-xs px-4 py-2 rounded-full border border-ivory-200 hover:border-maroon-300 font-medium transition-colors shadow-sm">
                {kw}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        {featuredProduct ? (
          <div className="mt-12 bg-gradient-to-br from-maroon-950 to-maroon-900 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden bg-white/5 flex-shrink-0">
              <img src={featuredProduct.img} alt={featuredProduct.name} className="w-full h-full object-cover" />
              {featuredProduct.badge && (
                <span className="absolute top-3 left-3 bg-gold-600 text-ink-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                  {featuredProduct.badge}
                </span>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gold-400 font-black text-xs uppercase tracking-widest mb-1">Featured Product</p>
                <h3 className="text-2xl font-black mb-3 leading-tight text-white">{featuredProduct.name}</h3>
                <p className="text-ivory-300 text-sm mb-4 line-clamp-3">{featuredProduct.description}</p>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-black text-gold-400">₹{featuredProduct.price}</span>
                  {featuredProduct.mrp > featuredProduct.price && (
                    <>
                      <span className="text-sm text-ivory-400 line-through">₹{featuredProduct.mrp}</span>
                      <span className="text-xs bg-gold-600/20 text-gold-300 font-bold px-2 py-0.5 rounded">
                        Save {Math.round(((featuredProduct.mrp - featuredProduct.price) / featuredProduct.mrp) * 100)}%
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`https://wa.me/917019838992?text=${encodeURIComponent(`Hi Kashmir Essence, I read your article about "${post.title}" and want to order ${featuredProduct.name}!`)}`} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-3.5 px-6 rounded-2xl transition-all hover:scale-105 text-sm">
                  Order via WhatsApp
                </a>
                <Link href={`/products/${featuredProduct.slug}`} className="inline-flex items-center bg-white/10 hover:bg-white/25 text-white font-bold py-3.5 px-6 rounded-2xl transition-colors text-sm">
                  Product Details
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-12 bg-gradient-to-br from-maroon-950 to-maroon-900 rounded-3xl p-8 text-center text-white">
            <p className="text-gold-400 font-black text-xs uppercase tracking-widest mb-3">Buy Authentic</p>
            <h3 className="text-2xl font-black mb-4">Ready to order from Kashmir Essence?</h3>
            <p className="text-ivory-300 text-sm mb-6">WhatsApp us to order. Lab-certified, direct from the Valley.</p>
            <a href={WA} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-3 px-8 rounded-2xl transition-all hover:scale-105">
              Order on WhatsApp
            </a>
          </div>
        )}
      </article>

      {/* FAQ */}
      {post.faqs.length > 0 && (
        <section className="bg-white border-t border-ivory-200 py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-maroon-950 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faqs.map((f, i) => (
                <details key={i} className="group bg-ivory-50 border border-ivory-200 rounded-2xl overflow-hidden">
                  <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-bold text-maroon-950 list-none text-sm">
                    {f.q}
                    <span className="text-gold-600 font-black ml-4 shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-ink-600 text-sm leading-relaxed border-t border-ivory-200 pt-4">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More articles */}
      {otherPosts.length > 0 && (
        <section className="bg-ivory-50 border-t border-ivory-200 py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-black text-maroon-950 mb-8">More from the Kashmir Essence Blog</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="group bg-white border border-ivory-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="relative h-36 overflow-hidden">
                    {p.heroImage ? (
                      <img src={p.heroImage} alt={p.heroImageAlt ?? p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-5xl">{p.heroEmoji}</div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-extrabold text-maroon-950 text-sm leading-snug mb-2 group-hover:text-maroon-700 transition-colors">{p.title}</h3>
                    <p className="text-ink-400 text-xs">{p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
