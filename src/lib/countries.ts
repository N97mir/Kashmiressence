// Kashmir Essence — Global shipping countries
// Slugs are PERMANENT. Never rename or delete.

export const countries = [
  // Middle East
  { slug: "uae",            name: "UAE",            flag: "🇦🇪", region: "Middle East",    currency: "AED", deliveryDays: "3–5 business days",  customsNote: "Food import compliant · Dubai Customs" },
  { slug: "saudi-arabia",   name: "Saudi Arabia",   flag: "🇸🇦", region: "Middle East",    currency: "SAR", deliveryDays: "4–7 business days",  customsNote: "SFDA food import compliant" },
  { slug: "qatar",          name: "Qatar",          flag: "🇶🇦", region: "Middle East",    currency: "QAR", deliveryDays: "4–6 business days",  customsNote: "MoPH food import compliant" },
  { slug: "kuwait",         name: "Kuwait",         flag: "🇰🇼", region: "Middle East",    currency: "KWD", deliveryDays: "5–7 business days",  customsNote: "Food import compliant" },
  { slug: "bahrain",        name: "Bahrain",        flag: "🇧🇭", region: "Middle East",    currency: "BHD", deliveryDays: "4–6 business days",  customsNote: "Food import compliant" },
  { slug: "oman",           name: "Oman",           flag: "🇴🇲", region: "Middle East",    currency: "OMR", deliveryDays: "5–7 business days",  customsNote: "Food import compliant" },
  // UK / EU
  { slug: "united-kingdom", name: "United Kingdom", flag: "🇬🇧", region: "Europe",         currency: "GBP", deliveryDays: "5–8 business days",  customsNote: "HMRC food import compliant · No import duty on spices" },
  { slug: "germany",        name: "Germany",        flag: "🇩🇪", region: "Europe",         currency: "EUR", deliveryDays: "7–10 business days", customsNote: "EU food import compliant" },
  { slug: "france",         name: "France",         flag: "🇫🇷", region: "Europe",         currency: "EUR", deliveryDays: "7–10 business days", customsNote: "EU food import compliant" },
  { slug: "netherlands",    name: "Netherlands",    flag: "🇳🇱", region: "Europe",         currency: "EUR", deliveryDays: "6–9 business days",  customsNote: "EU food import compliant" },
  { slug: "sweden",         name: "Sweden",         flag: "🇸🇪", region: "Europe",         currency: "SEK", deliveryDays: "7–10 business days", customsNote: "EU food import compliant" },
  { slug: "switzerland",    name: "Switzerland",    flag: "🇨🇭", region: "Europe",         currency: "CHF", deliveryDays: "7–10 business days", customsNote: "Swiss food import compliant" },
  // North America
  { slug: "usa",            name: "USA",            flag: "🇺🇸", region: "North America",  currency: "USD", deliveryDays: "7–12 business days", customsNote: "FDA-compliant food import · No permit required for spices" },
  { slug: "canada",         name: "Canada",         flag: "🇨🇦", region: "North America",  currency: "CAD", deliveryDays: "7–12 business days", customsNote: "CFIA food import compliant" },
  // Asia-Pacific
  { slug: "australia",      name: "Australia",      flag: "🇦🇺", region: "Asia-Pacific",   currency: "AUD", deliveryDays: "8–12 business days", customsNote: "FSANZ food import compliant · Declare on customs form" },
  { slug: "singapore",      name: "Singapore",      flag: "🇸🇬", region: "Asia-Pacific",   currency: "SGD", deliveryDays: "5–8 business days",  customsNote: "SFA food import compliant" },
  { slug: "malaysia",       name: "Malaysia",       flag: "🇲🇾", region: "Asia-Pacific",   currency: "MYR", deliveryDays: "5–8 business days",  customsNote: "Food import compliant" },
  { slug: "new-zealand",    name: "New Zealand",    flag: "🇳🇿", region: "Asia-Pacific",   currency: "NZD", deliveryDays: "10–14 business days",customsNote: "MPI food import compliant · Declare on customs form" },
  // Africa
  { slug: "south-africa",   name: "South Africa",   flag: "🇿🇦", region: "Africa",         currency: "ZAR", deliveryDays: "10–14 business days",customsNote: "Food import compliant" },
  { slug: "kenya",          name: "Kenya",          flag: "🇰🇪", region: "Africa",         currency: "KES", deliveryDays: "10–14 business days",customsNote: "KEBS food import compliant" },
  { slug: "mauritius",      name: "Mauritius",      flag: "🇲🇺", region: "Africa",         currency: "MUR", deliveryDays: "8–12 business days", customsNote: "Food import compliant" },
  // Additional diaspora markets
  { slug: "ireland",        name: "Ireland",        flag: "🇮🇪", region: "Europe",         currency: "EUR", deliveryDays: "6–9 business days",  customsNote: "EU food import compliant" },
  { slug: "italy",          name: "Italy",          flag: "🇮🇹", region: "Europe",         currency: "EUR", deliveryDays: "7–10 business days", customsNote: "EU food import compliant" },
  { slug: "norway",         name: "Norway",         flag: "🇳🇴", region: "Europe",         currency: "NOK", deliveryDays: "7–10 business days", customsNote: "Norwegian food import compliant" },
  { slug: "japan",          name: "Japan",          flag: "🇯🇵", region: "Asia-Pacific",   currency: "JPY", deliveryDays: "7–10 business days", customsNote: "Ministry of Health food import compliant" },
];

export type Country = (typeof countries)[0];
