import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products as PRODUCTS } from "@/lib/products";
import { RECIPES_AND_USAGE } from "@/lib/recipes-usage";

export async function generateStaticParams() {
  return RECIPES_AND_USAGE.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const recipe = RECIPES_AND_USAGE.find((r) => r.slug === slug);
  if (!recipe) return {};

  return {
    title: `${recipe.title} | Kashmir Essence Guides`,
    description: recipe.intro,
    alternates: {
      canonical: `https://www.kashmiressence.com/how-to-use/${slug}`,
    },
  };
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = RECIPES_AND_USAGE.find((r) => r.slug === slug);
  if (!recipe) notFound();

  const product = PRODUCTS.find((p) => p.slug === recipe.productSlug);

  return (
    <div className="bg-ivory-50 min-h-screen pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex text-xs text-ink-400">
          <Link href="/" className="hover:text-gold-500">Home</Link>
          <span className="mx-2 text-ink-300">/</span>
          <span className="text-ink-300">How to Use</span>
          <span className="mx-2 text-ink-300">/</span>
          <span className="text-maroon-700 font-medium truncate">{recipe.title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-ivory-200 mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 mb-4 tracking-tight leading-tight">
                {recipe.title}
              </h1>
              <p className="text-lg text-ink-500 mb-8 font-medium leading-relaxed">
                {recipe.subtitle}
              </p>

              {/* Recipe Meta Info */}
              <div className="flex flex-wrap gap-4 mb-8">
                {recipe.prepTime && (
                  <div className="flex items-center gap-2 bg-ivory-100 text-maroon-800 px-4 py-2 rounded-xl text-sm font-semibold">
                    <span>⏱️</span> Prep: {recipe.prepTime}
                  </div>
                )}
                {recipe.cookTime && recipe.cookTime !== "N/A" && (
                  <div className="flex items-center gap-2 bg-ivory-100 text-maroon-800 px-4 py-2 rounded-xl text-sm font-semibold">
                    <span>⏱️</span> Cook/Wait: {recipe.cookTime}
                  </div>
                )}
                {recipe.servings && (
                  <div className="flex items-center gap-2 bg-ivory-100 text-maroon-800 px-4 py-2 rounded-xl text-sm font-semibold">
                    <span>👥</span> Serves: {recipe.servings}
                  </div>
                )}
              </div>

              {/* Hero Image */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 shadow-sm">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg prose-maroon max-w-none">
                <p className="text-ink-600 leading-relaxed text-lg mb-10">
                  {recipe.intro}
                </p>

                {/* Ingredients Box */}
                <div className="bg-maroon-50 border border-maroon-100 rounded-2xl p-6 sm:p-8 mb-12">
                  <h3 className="text-2xl font-bold text-maroon-900 mb-4 mt-0">What You Need</h3>
                  <ul className="space-y-3 mb-0">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold-500 mr-3 text-xl font-black">•</span>
                        <span className="text-maroon-900 font-medium">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Steps */}
                <h2 className="text-3xl font-black text-ink-900 mb-8 border-b pb-4">Step-by-Step Instructions</h2>
                <div className="space-y-8 mb-12">
                  {recipe.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-maroon-800 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                          {idx + 1}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-ink-900 mb-2 mt-1">{step.title}</h4>
                        <p className="text-ink-600 leading-relaxed m-0">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQs */}
                {recipe.faqs && recipe.faqs.length > 0 && (
                  <>
                    <h2 className="text-3xl font-black text-ink-900 mb-8 border-b pb-4">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                      {recipe.faqs.map((faq, idx) => (
                        <div key={idx} className="bg-ivory-50 p-6 rounded-2xl border border-ivory-200">
                          <h4 className="font-bold text-lg text-ink-900 mb-2 mt-0">{faq.q}</h4>
                          <p className="text-ink-600 mb-0 leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-ivory-200">
                <div className="text-xs font-black uppercase tracking-widest text-maroon-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Product Needed For This Guide
                </div>
                
                {product && (
                  <Link href={`/products/${product.slug}`} className="block group">
                    <div className="aspect-square relative rounded-2xl overflow-hidden mb-4 bg-ivory-50">
                      <Image 
                        src={product.img} 
                        alt={product.name} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <h3 className="text-xl font-black text-ink-900 mb-1 group-hover:text-maroon-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-ink-500 text-sm mb-4 line-clamp-2">{product.subtitle}</p>
                    
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl font-black text-maroon-800">₹{product.price}</span>
                      {product.mrp > product.price && (
                        <span className="text-lg text-ink-300 line-through decoration-maroon-300">₹{product.mrp}</span>
                      )}
                    </div>
                    
                    <button className="w-full bg-maroon-800 text-white font-bold py-4 rounded-xl hover:bg-maroon-900 transition-colors shadow-md">
                      Buy the Original Now
                    </button>
                    <p className="text-center text-[10px] uppercase tracking-wider text-ink-400 font-bold mt-4">
                      Direct from Kashmir Farmers
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
