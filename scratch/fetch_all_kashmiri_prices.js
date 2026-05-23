const fs = require("fs");
const path = require("path");

const products = [
  "gi-tagged-kashmir-mongra-saffron-1gm",
  "gi-tagged-saffron-2-gram",
  "gi-tagged-kashmir-mongra-saffron-5gm",
  "gi-tagged-kashmir-mongra-saffron-10gm-grade-a-1",
  "saffron",
  "saffron-kesar",
  "mamra-badam",
  "walnut-kernels",
  "walnuts-with-shell",
  "sulai-honey"
];

async function main() {
  const results = {};
  for (const handle of products) {
    const url = `https://www.kashmironlinestore.com/products/${handle}.js`;
    console.log(`Fetching ${url}...`);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`Failed to fetch ${handle}: Status ${response.status}`);
        continue;
      }
      const data = await response.json();
      results[handle] = {
        title: data.title,
        price: data.price,
        compare_at_price: data.compare_at_price,
        variants: data.variants.map(v => ({
          id: v.id,
          title: v.title,
          price: v.price / 100, // Shopify stores prices in cents
          compare_at_price: v.compare_at_price ? v.compare_at_price / 100 : null,
          available: v.available
        }))
      };
    } catch (e) {
      console.log(`Error fetching ${handle}:`, e.message);
    }
  }

  const outputPath = path.join(__dirname, "kashmiri_online_store_prices.json");
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`Done! Results saved to ${outputPath}`);
}

main();
