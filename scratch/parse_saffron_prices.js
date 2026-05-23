const fs = require("fs");
const path = require("path");

const filePath = "/Users/numanmir/.gemini/antigravity/brain/2913e8a7-1618-4e3d-83ab-b33abf5e5a2e/.system_generated/steps/3627/content.md";
if (!fs.existsSync(filePath)) {
  console.log("File does not exist!");
  process.exit(1);
}

const html = fs.readFileSync(filePath, "utf8");

// Try to find product titles and prices
const regex = /class="card-information"[\s\S]*?class="card-heading"[\s\S]*?>([\s\S]*?)<\/a>[\s\S]*?class="price-item[^>]*>([\s\S]*?)<\/span>/gi;
let match;
console.log("--- SCANNING FOR CARD PRODUCTS ---");
while ((match = regex.exec(html)) !== null) {
  console.log("Title:", match[1].trim());
  console.log("Price:", match[2].trim());
  console.log("---");
}

// Let's also output all text that looks like a price near "Saffron" or "Mongra" or "Lacha"
console.log("--- SEARCHING TEXT BY KEYWORDS ---");
const lines = html.split("\n");
lines.forEach((line, i) => {
  if (line.includes("₹") || line.includes("Rs.") || line.includes("price") || line.includes("Saffron") || line.includes("Mongra") || line.includes("Lacha")) {
    if (line.length > 5 && line.length < 250) {
      console.log(`L${i}:`, line.trim());
    }
  }
});
