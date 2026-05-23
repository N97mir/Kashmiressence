import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kashmir Essence | WhatsApp Order & Support",
  description: "Contact Kashmir Essence via WhatsApp for orders, product queries, and support. +91 7019838992. We reply within hours, 7 days a week.",
  alternates: { canonical: "https://www.kashmiressence.com/contact" },
};

const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20have%20a%20question.";
const WA_ORDER = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20place%20an%20order.";

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Kashmir Essence",
    description: "Contact Kashmir Essence for orders and support",
    url: "https://www.kashmiressence.com/contact",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7019838992",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Urdu"],
      areaServed: ["IN", "AE", "GB", "US", "CA", "AU", "SA", "QA", "KW"],
    },
  };

  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-14 px-6 text-center">
        <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-3">Get in Touch</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h1>
        <p className="text-ivory-300 text-lg max-w-xl mx-auto">Orders, queries, bulk pricing — we&apos;re on WhatsApp, 7 days a week.</p>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-8">
        {/* Primary contact */}
        <div className="bg-white border border-ivory-200 rounded-3xl p-8 shadow-sm text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-[#25D366] rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-[#25D366]/30">
            <svg width="36" height="36" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.847L.057 23.535a.5.5 0 0 0 .608.63l5.903-1.546A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.003-1.37l-.36-.214-3.724.976.994-3.63-.234-.374A9.791 9.791 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
          </div>
          <h2 className="text-2xl font-black text-maroon-950 mb-2">WhatsApp</h2>
          <p className="text-ink-500 text-sm mb-2">Primary channel for orders & support</p>
          <p className="text-3xl font-black text-maroon-950 mb-6">+91 7019838992</p>
          <p className="text-ink-400 text-xs mb-6">Available 9 AM – 9 PM IST · Monday – Sunday</p>
          <div className="flex flex-col gap-3 w-full">
            <a href={WA_ORDER} target="_blank" rel="noreferrer"
              className="bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3.5 rounded-2xl text-center transition-all shadow-lg shadow-maroon-900/20 text-sm">
              Place an Order
            </a>
            <a href={WA} target="_blank" rel="noreferrer"
              className="bg-ivory-100 hover:bg-ivory-200 text-maroon-900 font-bold py-3.5 rounded-2xl text-center transition-all text-sm border border-ivory-300">
              Ask a Question
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-5">
          {[
            { icon: "📦", title: "Order Enquiries", body: "Tell us the product name, quantity, and your delivery pin code. We'll confirm availability and total in minutes." },
            { icon: "🔬", title: "Authenticity Questions", body: "Ask about lab certificates, GI documentation, or product verification tests. We're transparent about everything." },
            { icon: "✈️", title: "International Orders", body: "For UAE, UK, USA, Canada, Australia and other countries — WhatsApp us with your country and we'll confirm delivery cost and timeline." },
            { icon: "🎁", title: "Bulk & Corporate Orders", body: "Custom packaging, bulk pricing, and branded gift sets available for corporates, events, and resellers. WhatsApp for a quote." },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-ivory-200 rounded-2xl p-5 flex gap-4 items-start shadow-sm">
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-extrabold text-maroon-950 text-sm mb-1">{item.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="bg-white border-t border-ivory-200 py-10 px-6 text-center">
        <p className="text-ink-400 text-sm">📍 Kashmir Essence · Pampore, Srinagar District · Jammu &amp; Kashmir, India</p>
      </div>
    </main>
  );
}
