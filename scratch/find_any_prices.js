const fs = require("fs");
const path = require("path");

const filePath = "/Users/numanmir/.gemini/antigravity/brain/2913e8a7-1618-4e3d-83ab-b33abf5e5a2e/.system_generated/steps/3627/content.md";
if (!fs.existsSync(filePath)) {
  console.log("File does not exist!");
  process.exit(1);
}

const html = fs.readFileSync(filePath, "utf8");

console.log("--- SEARCHING FOR PRODUCTS LINKS ---");
const linkRegex = /href="[^"]*?\/products\/([^"]*?)"[^>]*>([\s\S]*?)<\/a>/gi;
let match;
const productsFound = new Set();
while ((match = linkRegex.exec(html)) !== null) {
  const slug = match[1];
  const text = match[2].replace(/<[^>]*>/g, "").trim();
  if (slug.includes("saffron") || slug.includes("kesar")) {
    console.log(`Slug: ${slug} | Text: ${text}`);
    productsFound.add(slug);
  }
}

console.log("\n--- SEARCHING FOR PRICE RANGES ---");
// Let's print out lines containing "Rs." or "₹" or numbers with "From" or "Sale"
const lines = html.split("\n");
lines.forEach((line, i) => {
  if (line.includes("₹") || line.includes("Rs.") || line.includes("Regular price") || line.includes("Sale price")) {
    // Print the line and surrounding lines
    console.log(`L${i}:`, line.trim());
    if (lines[i-1]) console.log(`  Prev:`, lines[i-1].trim());
    if (lines[i+1]) console.log(`  Next:`, lines[i+1].trim());
    console.log("---");
  }
});
