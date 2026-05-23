import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Kashmir Essence",
  description: "Kashmir Essence shipping policy — India (3–5 days) and international (7–14 days). Free shipping on orders above ₹999.",
  alternates: { canonical: "https://www.kashmiressence.com/shipping-policy" },
};

export default function ShippingPolicy() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-black">Shipping Policy</h1>
        <p className="text-ivory-300 mt-2">Last updated: December 2024</p>
      </section>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-8 text-ink-700">
        {[
          ["India Shipping", "We ship to all pin codes across India. Standard delivery takes 3–5 business days from dispatch. We use trusted courier partners including Delhivery, DTDC, Blue Dart, and India Post. Orders are dispatched within 24 hours of confirmation (Monday–Saturday). Free shipping applies on all India orders above ₹999. Below ₹999, a flat ₹60 shipping fee applies."],
          ["International Shipping", "We ship to 25+ countries worldwide including UAE, Saudi Arabia, UK, USA, Canada, Australia, Singapore, and more. International delivery typically takes 7–14 business days from dispatch date, depending on destination country customs processing. All international orders are packed customs-safe with appropriate product declarations and lab certificates."],
          ["Packaging", "All products are packed in tamper-proof, food-grade packaging. Saffron is double-sealed in airtight tins or glass vials. Shilajit resin is packed in amber glass jars. Almonds, walnuts, and spices are vacuum-sealed in food-grade pouches. For international shipments, we use additional outer packaging with bubble wrap and fragile labelling."],
          ["Tracking", "Once your order is dispatched, we share the tracking number via WhatsApp. You can track your package on the courier partner's website. For any tracking queries, WhatsApp us at +91 7019838992."],
          ["Delays", "Kashmir Essence is not responsible for delays caused by courier partners, customs processing, natural events, or public holidays. If your order is significantly delayed (more than 7 days beyond the estimated date), please contact us on WhatsApp and we will investigate immediately."],
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
