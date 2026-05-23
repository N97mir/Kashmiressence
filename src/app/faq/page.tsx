import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Kashmir Essence — Frequently Asked Questions",
  description: "Answers to common questions about Kashmiri saffron, Shilajit, ordering on WhatsApp, delivery, authenticity and more.",
  alternates: { canonical: "https://www.kashmiressence.com/faq" },
};

const WA = "https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20have%20a%20question.";

const FAQS = [
  {
    section: "Ordering & Payment",
    items: [
      { q: "How do I place an order?", a: "WhatsApp us at +91 7019838992 with the product name and quantity. We confirm availability, share the total (including shipping), and once you pay we dispatch within 24 hours. It takes 2–3 minutes." },
      { q: "What payment methods do you accept?", a: "UPI (GPay, PhonePe, Paytm), NEFT/IMPS bank transfer, and international bank transfer for global orders. We'll send you payment details on WhatsApp after you confirm your order." },
      { q: "Can I order from outside India?", a: "Yes. We ship to 25+ countries including UAE, Saudi Arabia, Qatar, UK, USA, Canada, Australia, Singapore and more. WhatsApp us for international pricing and delivery timelines." },
      { q: "Is there a minimum order?", a: "No minimum order. Free shipping applies on India orders above ₹999. Below that, a flat ₹60 shipping charge applies." },
    ],
  },
  {
    section: "Product Authenticity",
    items: [
      { q: "How do I know your saffron is genuine Kashmiri saffron?", a: "Our saffron is sourced from GI-registered growers in Pampore, Srinagar District. Every batch is lab-tested for ISO 3632 Category I compliance (crocin, safranal, picrocrocin levels). Lab certificates are available on request for orders above ₹2,000." },
      { q: "What is the difference between Mongra and Lacha saffron?", a: "Mongra is pure stigma tips only — the highest grade with maximum crocin content. Lacha includes the stigma plus a small portion of the yellow style. Both are ISO 3632 Category I. Mongra is more potent; Lacha is more traditional." },
      { q: "How do I verify Shilajit is real?", a: "Authentic Shilajit resin: (1) becomes hard and brittle when cold, soft when warm, (2) fully dissolves in warm water leaving zero residue, (3) does not dissolve in alcohol. Our Shilajit passes all these tests. Lab certificates for fulvic acid and heavy metal testing available on request." },
      { q: "Are Mamra almonds really different from regular almonds?", a: "Yes. Mamra almonds are a heritage variety from Kashmir/Afghanistan with 42–50% oil content vs 35% in California almonds. They are smaller, wrinkled, oilier, and have a stronger nutty flavour. The difference is immediately noticeable." },
    ],
  },
  {
    section: "Delivery & Shipping",
    items: [
      { q: "How long does India delivery take?", a: "3–5 business days from dispatch. We dispatch within 24 hours of payment confirmation (Monday–Saturday). You'll receive a tracking number on WhatsApp." },
      { q: "How long does international delivery take?", a: "7–14 business days for most countries. UAE, Qatar, Bahrain typically 3–5 days. UK, USA, Canada 7–12 days. Australia and New Zealand 8–14 days." },
      { q: "Is international shipping customs-safe?", a: "Yes. All international orders are packed with proper product declarations and food-safe labelling. We include certificates where appropriate. Saffron and food products are generally permitted for personal import in most countries." },
      { q: "Do you provide tracking?", a: "Yes. Once dispatched, we share your tracking number via WhatsApp. You can track your order on the courier's website in real-time." },
    ],
  },
  {
    section: "Returns & Refunds",
    items: [
      { q: "What if I receive a damaged or incorrect product?", a: "WhatsApp us a photo within 7 days of delivery. We'll arrange a full refund or replacement immediately — no returns required, no questions asked." },
      { q: "Do you have an authenticity guarantee?", a: "Yes. If any product is demonstrably not authentic, we refund 100%. We'll guide you through simple at-home verification tests if you have concerns." },
      { q: "Can I cancel my order?", a: "Orders can be cancelled before dispatch (usually within 12 hours of confirmation). After dispatch, you can request a refund on receipt if there are any quality issues." },
    ],
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.flatMap((s) =>
      s.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      }))
    ),
  };

  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-14 px-6 text-center">
        <p className="text-gold-400 font-black text-xs uppercase tracking-[0.3em] mb-3">Help Center</p>
        <h1 className="text-4xl md:text-5xl font-black mb-4">Frequently Asked Questions</h1>
        <p className="text-ivory-300 text-lg max-w-xl mx-auto">Everything you need to know about our products, ordering and delivery.</p>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-12">
        {FAQS.map((section) => (
          <div key={section.section}>
            <h2 className="text-xl font-black text-maroon-950 mb-5 pb-3 border-b-2 border-gold-300">{section.section}</h2>
            <div className="space-y-3">
              {section.items.map((f, i) => (
                <details key={i} className="group bg-white border border-ivory-200 rounded-2xl overflow-hidden shadow-sm">
                  <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-bold text-maroon-950 list-none text-sm md:text-base">
                    {f.q}
                    <span className="text-gold-600 font-black text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-ink-600 text-sm leading-relaxed border-t border-ivory-100 pt-4">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-maroon-950 rounded-3xl p-8 text-center text-white">
          <p className="text-3xl mb-4">💬</p>
          <h3 className="text-xl font-black mb-3">Still have questions?</h3>
          <p className="text-ivory-300 text-sm mb-6">WhatsApp us directly — we reply within a few hours, 7 days a week.</p>
          <a href={WA} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-ink-950 font-black py-3.5 px-8 rounded-2xl transition-all hover:scale-105">
            WhatsApp: +91 7019838992
          </a>
        </div>
      </div>
    </main>
  );
}
