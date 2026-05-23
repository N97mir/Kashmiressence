import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kashmir Essence",
  description: "Kashmir Essence privacy policy — how we collect, use, and protect your personal data.",
  alternates: { canonical: "https://www.kashmiressence.com/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-ivory-50 min-h-screen pt-24">
      <section className="bg-gradient-to-br from-maroon-950 to-maroon-900 text-white py-12 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-black">Privacy Policy</h1>
        <p className="text-ivory-300 mt-2">Last updated: December 2024</p>
      </section>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-6 text-ink-700">
        {[
          ["Information We Collect", "When you place an order via WhatsApp, we collect: your name, WhatsApp number, delivery address, and order details. We do not collect payment information directly — payments are made via UPI, bank transfer, or other methods communicated securely on WhatsApp."],
          ["How We Use Your Information", "We use your information solely to: process and deliver your order, send order updates and tracking information, and respond to your queries. We do not use your data for marketing without consent."],
          ["Data Sharing", "We do not sell or share your personal data with third parties, except courier partners (who receive your name and address for delivery). Our courier partners maintain their own privacy policies."],
          ["Data Retention", "We retain order records for 3 years for business and tax compliance purposes. WhatsApp conversation history is subject to WhatsApp's own privacy policy."],
          ["Your Rights", "You may request deletion of your personal data by contacting us on WhatsApp at +91 7019838992. We will delete your data from our records within 30 days, subject to any legal retention requirements."],
          ["Cookies & Analytics", "Our website uses Google Analytics and Microsoft Clarity for anonymous usage statistics. These tools collect anonymised data about site visits and do not identify individual users. You may opt out via your browser settings or browser extensions."],
          ["Contact", "For any privacy concerns, WhatsApp us at +91 7019838992."],
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
