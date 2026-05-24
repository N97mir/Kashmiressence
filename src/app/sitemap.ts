import type { MetadataRoute } from "next";
import { kashmirProducts, cities } from "@/lib/data";
import { countries } from "@/lib/countries";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";

const BASE = "https://www.kashmiressence.com";
const now = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                                   lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/products`,                     lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/about`,                        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`,                         lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/faq`,                          lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`,                      lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/shipping-policy`,              lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/return-refund-policy`,         lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/privacy-policy`,               lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms-of-service`,             lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/authority-index`,              lastModified: now, changeFrequency: "weekly",  priority: 0.5 },
    { url: `${BASE}/birthday-gift-kashmir`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/anniversary-gift-kashmir`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/friend-gift-kashmir`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/eid-gift-kashmir`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/diwali-gift-kashmir`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/corporate-gifts-kashmir`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // ── Category pages
  const categoryPages: MetadataRoute.Sitemap = [
    "saffron","walnuts","honey","spices","gift-boxes"
  ].map((slug) => ({
    url: `${BASE}/categories/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // ── Product pages
  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // ── Blog articles
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // ── India PSEO (product × city)
  const indiaPages: MetadataRoute.Sitemap = [];
  for (const kp of kashmirProducts) {
    for (const city of cities) {
      indiaPages.push({
        url: `${BASE}/buy/${kp.slug}/${city.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  // ── Global PSEO (product × country)
  const globalPages: MetadataRoute.Sitemap = [];
  for (const kp of kashmirProducts) {
    for (const country of countries) {
      globalPages.push({
        url: `${BASE}/ship/${kp.slug}/${country.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.72,
      });
    }
  }

  return [
    ...staticPages,
    ...categoryPages,
    ...productPages,
    ...blogPages,
    ...indiaPages,
    ...globalPages,
  ];
}
