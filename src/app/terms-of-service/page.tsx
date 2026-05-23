import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Kashmir Essence",
  description: "Kashmir Essence terms of service governing the use of our website and purchase of products.",
  alternates: { canonical: "https://www.kashmiressence.com/terms-of-service" },
};

export default function TermsOfService() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-black">Terms of Service</h1>
        <p className="text-ivory-300 mt-2">Last updated: December 2024</p>
      </section>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-6 text-ink-700">
        {[
          ["Acceptance", "By using kashmiressence.com or placing an order via WhatsApp, you agree to these terms. If you do not agree, please do not use our services."],
          ["Products", "All products are described as accurately as possible. Product images are representative — actual colour and appearance may vary slightly due to natural product variation and photography. We make no medical claims for any product. Information on this website is for educational purposes only and is not a substitute for medical advice."],
          ["Ordering", "Orders are placed via WhatsApp (+91 7019838992). An order is confirmed when we send a written confirmation message on WhatsApp with the order summary, total, and payment instructions."],
          ["Pricing", "All prices are in Indian Rupees (INR) unless otherwise stated. Prices are subject to change without notice. The price at time of order confirmation is binding."],
          ["Intellectual Property", "All content on this website — text, images, design, and branding — is the property of Kashmir Essence. Unauthorised reproduction is prohibited."],
          ["Limitation of Liability", "Kashmir Essence is not liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our maximum liability for any claim is limited to the value of the order in question."],
          ["Governing Law", "These terms are governed by the laws of India. Disputes shall be subject to the jurisdiction of courts in Srinagar, Jammu & Kashmir."],
        ].map(([title, body]) => (
          <div key={String(title)} className="bg-white border border-ivory-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-black text-maroon-950 mb-2">{String(title)}</h2>
            <p className="leading-relaxed text-sm">{String(body)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
