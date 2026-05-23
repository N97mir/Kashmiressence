import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Kashmir Essence — Authentic Kashmir Knowledge",
  description: "Expert guides on Kashmiri saffron grades, Himalayan Shilajit, Mamra almonds, Kahwa recipes and more. Research-backed content from Kashmir Essence.",
  alternates: { canonical: "https://www.kashmiressence.com/blog" },
};

const CAT_COLORS: Record<string, string> = {
  saffron: "bg-maroon-100 text-maroon-800",
  shilajit: "bg-ink-100 text-ink-800",
  almonds: "bg-gold-100 text-gold-800",
  honey: "bg-gold-100 text-gold-800",
  spices: "bg-valley-100 text-valley-800",
};

const CAT_GRAD: Record<string, string> = {
  saffron: "from-maroon-900 to-maroon-800",
  shilajit: "from-ink-900 to-ink-800",
  almonds: "from-gold-900 to-gold-700",
  honey: "from-gold-800 to-gold-600",
  spices: "from-valley-900 to-valley-700",
};

export default function BlogIndexPage() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6 text-center">
        <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-3">Authentic Knowledge</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">The Kashmir Essence Blog</h1>
        <p className="text-ivory-300 text-lg max-w-2xl mx-auto">Expert guides on Kashmiri saffron, pure Shilajit, heritage almonds, honey and authentic spices — research-backed content from our team.</p>
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group bg-white border border-ivory-200 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br">
                {post.heroImage ? (
                  <img
                    src={post.heroImage}
                    alt={post.heroImageAlt ?? post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-6xl">{post.heroEmoji}</div>
                )}
                <span className={`absolute top-4 left-4 text-xs font-black px-3 py-1.5 rounded-full ${CAT_COLORS[post.category] ?? "bg-ivory-200 text-ink-700"}`}>
                  {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-ink-400 mb-3">
                  <span>{post.readTime}</span>
                  <span>·</span>
                  <span>{new Date(post.publishDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
                <h2 className="font-extrabold text-maroon-950 text-lg leading-snug mb-3 group-hover:text-maroon-700 transition-colors">{post.title}</h2>
                <p className="text-ink-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <p className="text-gold-700 font-black text-sm mt-4">Read more →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
