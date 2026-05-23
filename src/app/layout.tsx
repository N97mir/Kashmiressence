import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"], weight: ["300","400","500","600","700","800","900"], variable: "--font-outfit" });

const BASE = "https://www.kashmiressence.com";
const WA_LINK = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20order.";

export const metadata: Metadata = {
  title: "Kashmir Essence | GI-Tagged Kashmiri Saffron, Shilajit & Authentic Kashmir Products",
  description: "Authentic GI-Tagged Kashmiri saffron, pure Himalayan Shilajit resin, heritage Mamra almonds, raw Kashmir honey & spices. Direct from Pampore. Shipping India & 25+ countries worldwide.",
  metadataBase: new URL(BASE),
  alternates: { canonical: BASE },
  openGraph: {
    title: "Kashmir Essence | Authentic Kashmir Products",
    description: "GI-Tagged saffron · Pure Shilajit · Heritage Almonds · Raw Honey. Direct from the Kashmir Valley.",
    images: [`${BASE}/images/og-home.jpg`],
    type: "website",
    url: BASE,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashmir Essence | Authentic Kashmir Products",
    images: [`${BASE}/images/og-home.jpg`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kashmir Essence",
    url: BASE,
    logo: `${BASE}/images/logo.png`,
    sameAs: ["https://instagram.com/kashmiressence", "https://facebook.com/kashmiressence"],
    contactPoint: { "@type": "ContactPoint", telephone: "+91-7019838992", contactType: "customer service" },
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kashmir Essence",
    url: BASE,
    potentialAction: { "@type": "SearchAction", target: `${BASE}/search?q={search_term_string}`, "query-input": "required name=search_term_string" },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');`}</Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXX');`}</Script>
        <Script id="clarity" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","XXXXXXXX");`}</Script>
      </head>
      <body className={`${outfit.variable} font-sans antialiased pt-8`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style={{ display:"none", visibility:"hidden" }} /></noscript>
        
        {/* Global Announcement Marquee */}
        <div className="fixed top-0 inset-x-0 z-[60] bg-maroon-950 text-gold-400 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap border-b border-gold-600/20">
          <div className="animate-marquee inline-block">
            🔥 100% Authentic GI-Tagged Saffron &nbsp; · &nbsp; Free Shipping on orders over ₹2000 &nbsp; · &nbsp; Direct from Kashmir Farmers 🚀 &nbsp; · &nbsp; Ships Worldwide in 5-14 days &nbsp; · &nbsp;
            🔥 100% Authentic GI-Tagged Saffron &nbsp; · &nbsp; Free Shipping on orders over ₹2000 &nbsp; · &nbsp; Direct from Kashmir Farmers 🚀 &nbsp; · &nbsp; Ships Worldwide in 5-14 days &nbsp; · &nbsp;
            🔥 100% Authentic GI-Tagged Saffron &nbsp; · &nbsp; Free Shipping on orders over ₹2000 &nbsp; · &nbsp; Direct from Kashmir Farmers 🚀 &nbsp; · &nbsp; Ships Worldwide in 5-14 days &nbsp; · &nbsp;
          </div>
        </div>

        <Header />
        {children}

        {/* Floating WhatsApp Button */}
        <a href={WA_LINK} target="_blank" rel="noreferrer"
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#1DA851] rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 ring-4 ring-white/20"
          aria-label="Order on WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.847L.057 23.535a.5.5 0 0 0 .608.63l5.903-1.546A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.003-1.37l-.36-.214-3.724.976.994-3.63-.234-.374A9.791 9.791 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
          </svg>
        </a>

        {/* Footer */}
        <footer className="bg-maroon-950 text-white pt-16 pb-8 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <Image src="/images/logo.png" alt="Kashmir Essence" width={28} height={28} className="object-contain" />
                <div className="leading-tight">
                  <span className="block text-base font-black text-gold-400">Kashmir</span>
                  <span className="block text-[10px] font-bold text-ivory-400 tracking-widest uppercase -mt-0.5">Essence</span>
                </div>
              </div>
              <p className="text-ivory-300 text-sm leading-relaxed mb-6">From the Valley to your door. GI-Tagged saffron, pure Shilajit, heritage almonds &amp; raw honey — authentic Kashmir, no shortcuts.</p>
            </div>
            <div>
              <h4 className="font-bold text-gold-400 text-xs uppercase tracking-widest mb-4">Shop</h4>
              <ul className="space-y-2.5 text-ivory-300 text-sm">
                {[["Mongra Saffron","/products/kashmiri-saffron-mongra"],["Lacha Saffron","/products/kashmiri-saffron-lacha"],["Shilajit Resin","/products/himalayan-shilajit-resin"],["Mamra Almonds","/products/mamra-almonds-premium"],["Kashmir Honey","/products/kashmiri-wildflower-honey"],["Kahwa Blend","/products/kashmiri-kahwa-blend"]].map(([l,h])=>(
                  <li key={l}><a href={h} className="hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gold-400 text-xs uppercase tracking-widest mb-4">Info</h4>
              <ul className="space-y-2.5 text-ivory-300 text-sm">
                {[["About Us","/about"],["Blog","/blog"],["FAQ","/faq"],["Contact","/contact"]].map(([l,h])=>(
                  <li key={l}><a href={h} className="hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gold-400 text-xs uppercase tracking-widest mb-4">Ships To</h4>
              <ul className="space-y-2.5 text-ivory-300 text-sm">
                {[["uae","UAE"],["united-kingdom","UK"],["usa","USA"],["canada","Canada"],["australia","Australia"],["saudi-arabia","Saudi Arabia"]].map(([slug,label])=>(
                  <li key={slug}><a href={`/ship/saffron/${slug}`} className="hover:text-white transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gold-400 text-xs uppercase tracking-widest mb-4">Policies</h4>
              <ul className="space-y-2.5 text-ivory-300 text-sm">
                {[["Privacy Policy","/privacy-policy"],["Returns & Refund","/return-refund-policy"],["Shipping Policy","/shipping-policy"],["Terms of Service","/terms-of-service"]].map(([l,h])=>(
                  <li key={l}><a href={h} className="hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-maroon-800 pt-8 flex flex-col md:flex-row justify-between items-center text-ivory-500 text-xs gap-4">
            <p>© {new Date().getFullYear()} Kashmir Essence. All rights reserved. | Pampore, Kashmir, India</p>
            <p>GI-Tagged Saffron · Pure Shilajit · Heritage Almonds · Direct from the Valley</p>
          </div>

          {/* AUTHORITY INDEX — internal PageRank mesh */}
          <div className="mt-12 pt-8 border-t border-maroon-900">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-400 mb-5 text-center">
              <Link href="/authority-index" className="hover:text-gold-300 transition-colors">
                Kashmir Essence Authority Index
              </Link>
            </h4>

            {/* Transactional pages */}
            <div className="mb-6">
              <p className="text-[9px] font-black uppercase tracking-widest text-gold-400/80 mb-3">Shop & Buy</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-[10px] text-ivory-300">
                <a href="/buy-kashmiri-saffron-online" className="hover:text-gold-400 transition-colors">Buy Kashmiri Saffron Online</a>
                <a href="/mongra-saffron-online" className="hover:text-gold-400 transition-colors">Mongra Saffron Online</a>
                <a href="/kashmiri-saffron-price" className="hover:text-gold-400 transition-colors">Kashmiri Saffron Price</a>
                <a href="/buy-mamra-almonds-online" className="hover:text-gold-400 transition-colors">Buy Mamra Almonds Online</a>
                <a href="/eid-gift-kashmir" className="hover:text-gold-400 transition-colors">Eid Gift Kashmir</a>
                <a href="/diwali-gift-kashmir" className="hover:text-gold-400 transition-colors">Diwali Gift Kashmir</a>
                <a href="/corporate-gifts-kashmir" className="hover:text-gold-400 transition-colors">Corporate Gifts Kashmir</a>
                <a href="/birthday-gift-kashmir" className="hover:text-gold-400 transition-colors">Birthday Gift Kashmir</a>
                <a href="/anniversary-gift-kashmir" className="hover:text-gold-400 transition-colors">Anniversary Gift Kashmir</a>
                <a href="/friend-gift-kashmir" className="hover:text-gold-400 transition-colors">Friend Gift Kashmir</a>
                <a href="/products/himalayan-shilajit-resin" className="hover:text-gold-400 transition-colors">Buy Shilajit Resin</a>
                <a href="/products/kashmiri-saffron-mongra" className="hover:text-gold-400 transition-colors">Mongra Saffron 1g</a>
                <a href="/products/kashmiri-kahwa-blend" className="hover:text-gold-400 transition-colors">Kashmiri Kahwa Blend</a>
                <a href="/products/kashmiri-wildflower-honey" className="hover:text-gold-400 transition-colors">Kashmir Raw Honey</a>
                <a href="/products/mamra-almonds-premium" className="hover:text-gold-400 transition-colors">Mamra Almonds 250g</a>
              </div>
            </div>

            {/* Health & Benefits */}
            <div className="mb-6">
              <p className="text-[9px] font-black uppercase tracking-widest text-gold-400/80 mb-3">Health & Nutrition Guides</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-[10px] text-ivory-300">
                <a href="/benefits/kashmiri-saffron-for-pregnancy" className="hover:text-gold-400 transition-colors">Saffron for Pregnancy</a>
                <a href="/benefits/pure-shilajit-for-stamina-and-energy" className="hover:text-gold-400 transition-colors">Shilajit for Stamina</a>
                <a href="/benefits/mamra-almonds-for-brain-development-in-kids" className="hover:text-gold-400 transition-colors">Almonds for Kids Brain</a>
                <a href="/benefits/sulai-honey-for-immunity" className="hover:text-gold-400 transition-colors">Sulai Honey for Immunity</a>
                <a href="/benefits/kashmiri-saffron-for-skin-glow" className="hover:text-gold-400 transition-colors">Saffron for Skin Glow</a>
                <a href="/benefits/pure-shilajit-for-testosterone" className="hover:text-gold-400 transition-colors">Shilajit for Men</a>
                <a href="/benefits/mamra-almonds-for-heart-health" className="hover:text-gold-400 transition-colors">Almonds for Heart Health</a>
                <a href="/benefits/kashmiri-walnuts-for-brain-health" className="hover:text-gold-400 transition-colors">Walnuts for Memory</a>
                <a href="/benefits/kashmiri-walnuts-for-cholesterol" className="hover:text-gold-400 transition-colors">Walnuts for Cholesterol</a>
                <a href="/benefits/kashmiri-kahwa-for-weight-loss" className="hover:text-gold-400 transition-colors">Kahwa for Weight Loss</a>
              </div>
            </div>

            {/* Product Comparisons */}
            <div className="mb-6">
              <p className="text-[9px] font-black uppercase tracking-widest text-gold-400/80 mb-3">Product Comparisons</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-[10px] text-ivory-300">
                <a href="/compare/mamra-almonds-vs-california-almonds" className="hover:text-gold-400 transition-colors">Mamra vs California Almonds</a>
                <a href="/compare/mongra-saffron-vs-iranian-saffron" className="hover:text-gold-400 transition-colors">Mongra vs Iranian Saffron</a>
                <a href="/compare/shilajit-resin-vs-capsules-powder" className="hover:text-gold-400 transition-colors">Shilajit Resin vs Capsules</a>
              </div>
            </div>

            {/* Recipes & Usage */}
            <div className="mb-6">
              <p className="text-[9px] font-black uppercase tracking-widest text-gold-400/80 mb-3">Recipes & Usage</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-[10px] text-ivory-300">
                <a href="/how-to-use/authentic-kashmiri-kahwa-recipe" className="hover:text-gold-400 transition-colors">Kashmiri Kahwa Recipe</a>
                <a href="/how-to-use/how-to-consume-pure-shilajit-resin-safely" className="hover:text-gold-400 transition-colors">How to use Shilajit</a>
                <a href="/how-to-use/how-to-use-saffron-milk-for-pregnancy" className="hover:text-gold-400 transition-colors">Saffron Milk for Pregnancy</a>
                <a href="/how-to-use/overnight-soaked-mamra-almonds-method" className="hover:text-gold-400 transition-colors">Soaked Mamra Almonds</a>
                <a href="/how-to-use/how-to-make-saffron-water-for-glowing-skin" className="hover:text-gold-400 transition-colors">Saffron Water for Skin</a>
              </div>
            </div>

            {/* India PSEO - Top cities */}
            <div className="mb-6">
              <p className="text-[9px] font-black uppercase tracking-widest text-gold-400/80 mb-3">Buy in Your City</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-[10px] text-ivory-300">
                <a href="/buy/saffron/mumbai" className="hover:text-gold-400 transition-colors">Saffron in Mumbai</a>
                <a href="/buy/saffron/delhi-ncr" className="hover:text-gold-400 transition-colors">Saffron in Delhi</a>
                <a href="/buy/saffron/bangalore" className="hover:text-gold-400 transition-colors">Saffron in Bangalore</a>
                <a href="/buy/saffron/hyderabad" className="hover:text-gold-400 transition-colors">Saffron in Hyderabad</a>
                <a href="/buy/saffron/chennai" className="hover:text-gold-400 transition-colors">Saffron in Chennai</a>
                <a href="/buy/saffron/pune" className="hover:text-gold-400 transition-colors">Saffron in Pune</a>
                <a href="/buy/shilajit/mumbai" className="hover:text-gold-400 transition-colors">Shilajit in Mumbai</a>
                <a href="/buy/shilajit/delhi-ncr" className="hover:text-gold-400 transition-colors">Shilajit in Delhi</a>
                <a href="/buy/shilajit/bangalore" className="hover:text-gold-400 transition-colors">Shilajit in Bangalore</a>
                <a href="/buy/mamra-almonds/mumbai" className="hover:text-gold-400 transition-colors">Mamra Almonds Mumbai</a>
                <a href="/buy/mamra-almonds/delhi-ncr" className="hover:text-gold-400 transition-colors">Mamra Almonds Delhi</a>
                <a href="/buy/honey/delhi-ncr" className="hover:text-gold-400 transition-colors">Kashmir Honey Delhi</a>
                <a href="/buy/saffron/ahmedabad" className="hover:text-gold-400 transition-colors">Saffron in Ahmedabad</a>
                <a href="/buy/saffron/kolkata" className="hover:text-gold-400 transition-colors">Saffron in Kolkata</a>
                <a href="/buy/saffron/jaipur" className="hover:text-gold-400 transition-colors">Saffron in Jaipur</a>
                <a href="/buy/saffron/chandigarh" className="hover:text-gold-400 transition-colors">Saffron in Chandigarh</a>
                <a href="/buy/saffron/lucknow" className="hover:text-gold-400 transition-colors">Saffron in Lucknow</a>
                <a href="/buy/saffron/kochi" className="hover:text-gold-400 transition-colors">Saffron in Kochi</a>
                <a href="/buy/kahwa/mumbai" className="hover:text-gold-400 transition-colors">Kahwa in Mumbai</a>
                <a href="/buy/walnuts/bangalore" className="hover:text-gold-400 transition-colors">Walnuts in Bangalore</a>
                <a href="/buy/saffron/surat" className="hover:text-gold-400 transition-colors">Saffron in Surat</a>
                <a href="/buy/saffron/nagpur" className="hover:text-gold-400 transition-colors">Saffron in Nagpur</a>
                <a href="/buy/shilajit/hyderabad" className="hover:text-gold-400 transition-colors">Shilajit in Hyderabad</a>
                <a href="/buy/shilajit/chennai" className="hover:text-gold-400 transition-colors">Shilajit in Chennai</a>
              </div>
            </div>

            {/* Global shipping */}
            <div className="mb-6">
              <p className="text-[9px] font-black uppercase tracking-widest text-gold-400/80 mb-3">International Shipping</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-[10px] text-ivory-300">
                <a href="/ship/saffron/uae" className="hover:text-gold-400 transition-colors">Saffron to UAE</a>
                <a href="/ship/saffron/usa" className="hover:text-gold-400 transition-colors">Saffron to USA</a>
                <a href="/ship/saffron/united-kingdom" className="hover:text-gold-400 transition-colors">Saffron to UK</a>
                <a href="/ship/saffron/canada" className="hover:text-gold-400 transition-colors">Saffron to Canada</a>
                <a href="/ship/saffron/australia" className="hover:text-gold-400 transition-colors">Saffron to Australia</a>
                <a href="/ship/saffron/saudi-arabia" className="hover:text-gold-400 transition-colors">Saffron to Saudi Arabia</a>
                <a href="/ship/shilajit/uae" className="hover:text-gold-400 transition-colors">Shilajit to UAE</a>
                <a href="/ship/shilajit/usa" className="hover:text-gold-400 transition-colors">Shilajit to USA</a>
                <a href="/ship/mamra-almonds/uae" className="hover:text-gold-400 transition-colors">Mamra Almonds UAE</a>
                <a href="/ship/honey/united-kingdom" className="hover:text-gold-400 transition-colors">Kashmir Honey to UK</a>
                <a href="/ship/saffron/qatar" className="hover:text-gold-400 transition-colors">Saffron to Qatar</a>
                <a href="/ship/saffron/singapore" className="hover:text-gold-400 transition-colors">Saffron to Singapore</a>
              </div>
            </div>

            {/* Blog */}
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-gold-400/80 mb-3">Knowledge & Guides</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-[10px] text-ivory-300">
                <a href="/blog/what-is-kashmiri-saffron-complete-guide" className="hover:text-gold-400 transition-colors">Kashmir Saffron Guide</a>
                <a href="/blog/himalayan-shilajit-complete-guide" className="hover:text-gold-400 transition-colors">Shilajit Complete Guide</a>
                <a href="/blog/mamra-almonds-vs-california-almonds" className="hover:text-gold-400 transition-colors">Mamra vs California</a>
                <a href="/blog/how-to-identify-real-kashmiri-saffron" className="hover:text-gold-400 transition-colors">Identify Real Saffron</a>
                <a href="/blog/kashmiri-kahwa-recipe-and-benefits" className="hover:text-gold-400 transition-colors">Kahwa Recipe & Benefits</a>
                <a href="/faq" className="hover:text-gold-400 transition-colors">FAQ</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

