import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Kashmir Essence | Authentic Kashmiri Products Direct from the Valley",
  description: "Kashmir Essence is a direct-to-consumer brand bringing authentic, lab-certified Kashmiri products — GI-Tagged saffron, pure Shilajit, heritage Mamra almonds — straight from Kashmir Valley growers to your door.",
  alternates: { canonical: "https://www.kashmiressence.com/about" },
};

const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20have%20a%20question.";

export default function AboutPage() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-16 px-6 text-center">
        <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-3">Our Story</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">About Kashmir Essence</h1>
        <p className="text-ivory-300 text-lg max-w-2xl mx-auto">Bringing the genuine treasure of the Kashmir Valley to tables and homes across India and the world.</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none space-y-8 text-ink-700">
          <div className="bg-white border border-ivory-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-maroon-950 mb-4">Why We Started</h2>
            <p className="leading-relaxed">Kashmir Essence was born from a frustration — the finest saffron in the world grows in Pampore, 13 kilometres from Srinagar, yet most people in Mumbai, Bangalore, Dubai, and London buying &quot;Kashmiri saffron&quot; are receiving adulterated products with artificial dyes and zero connection to the Valley.</p>
            <p className="leading-relaxed mt-4">The same is true for Mamra almonds, Shilajit resin, raw Kashmir honey, and Kahwa spice blends. The valley produces extraordinary products. But between the farm and the consumer, too many hands add too many shortcuts.</p>
            <p className="leading-relaxed mt-4">We built Kashmir Essence to cut through that entirely — working directly with GI-registered saffron growers in Pampore, traditional Shilajit collectors in the high Himalayas, and almond orchards in the Karewa highlands. No wholesale intermediaries. No relabelling. Just what the Valley actually produces, reaching you as it is.</p>
          </div>

          <div className="bg-white border border-ivory-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-maroon-950 mb-4">Our Commitments</h2>
            <ul className="space-y-4">
              {[
                ["🏷️ GI Certification", "Our saffron is sourced only from GI-registered growers in Pampore, Srinagar District. We hold documentation of origin."],
                ["🔬 Lab Testing", "Every batch of saffron is tested for ISO 3632 compliance. Our Shilajit is tested for fulvic acid percentage and heavy metals before dispatch."],
                ["📞 WhatsApp First", "We sell primarily through WhatsApp because it creates a direct, personal relationship with every customer. You can ask anything, anytime."],
                ["↩️ Authenticity Guarantee", "If a product is not what we claim, we refund 100% — no questions, no returns required."],
                ["🚫 No Exaggerated Claims", "We do not claim Shilajit cures diseases. We do not claim saffron is a miracle ingredient. We tell you what the science actually says."],
              ].map(([title, body]) => (
                <li key={String(title)} className="flex gap-4">
                  <span className="text-2xl shrink-0">{String(title).split(" ")[0]}</span>
                  <div>
                    <p className="font-extrabold text-maroon-950 text-base">{String(title).substring(3)}</p>
                    <p className="text-ink-600 text-sm mt-1 leading-relaxed">{String(body)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-ivory-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-maroon-950 mb-4">Contact Us</h2>
            <p className="text-ink-600 leading-relaxed mb-6">We are based in Jammu & Kashmir and are available on WhatsApp 7 days a week. We respond to all messages within a few hours.</p>
            <a href={WA} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-maroon-800 hover:bg-maroon-700 text-white font-black py-3.5 px-8 rounded-2xl transition-all shadow-lg shadow-maroon-900/20">
              WhatsApp: +91 7019838992
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
