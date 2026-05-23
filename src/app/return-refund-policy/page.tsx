import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Kashmir Essence",
  description: "100% authenticity guarantee. If any Kashmir Essence product is not as described, we offer a full refund.",
  alternates: { canonical: "https://www.kashmiressence.com/return-refund-policy" },
};

export default function ReturnRefundPolicy() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-black">Return & Refund Policy</h1>
        <p className="text-ivory-300 mt-2">Last updated: December 2024</p>
      </section>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-8 text-ink-700">
        <div className="bg-maroon-950 text-white rounded-3xl p-8 text-center">
          <p className="text-5xl mb-4">↩️</p>
          <h2 className="text-2xl font-black text-gold-400 mb-3">100% Authenticity Guarantee</h2>
          <p className="text-ivory-300 leading-relaxed">If any product you receive from Kashmir Essence is not authentic, not as described, or arrives damaged — we refund 100% of your payment. No return required.</p>
        </div>
        {[
          ["Eligible Refunds", "You are eligible for a full refund if: the product is demonstrably not authentic (we will guide you through simple at-home tests), the product arrived damaged or the seal was broken, you received the wrong product, or the product was significantly delayed beyond our stated delivery window due to our error."],
          ["How to Request a Refund", "WhatsApp us at +91 7019838992 within 7 days of receiving your order. Send us a photo of the product and a brief description of the issue. We will respond within 24 hours with resolution options. Refunds are processed within 5–7 business days to your original payment method."],
          ["Perishable Products", "Saffron, honey, and spices are perishable food products. We cannot accept returns of opened products unless they are demonstrably adulterated or incorrect. For unopened, intact products, contact us within 7 days of delivery."],
          ["International Orders", "For international orders, we cover refunds on authenticity issues. Shipping costs for international orders are non-refundable except in cases of our error. We do not cover customs duties or taxes charged by your country."],
          ["Cancellations", "Orders can be cancelled before dispatch (typically within 12 hours of confirmation). After dispatch, the order cannot be cancelled but you may request a return/refund on receipt per the above terms."],
        ].map(([title, body]) => (
          <div key={String(title)} className="bg-white border border-ivory-200 rounded-2xl p-7 shadow-sm">
            <h2 className="text-xl font-black text-maroon-950 mb-3">{String(title)}</h2>
            <p className="leading-relaxed text-sm">{String(body)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
