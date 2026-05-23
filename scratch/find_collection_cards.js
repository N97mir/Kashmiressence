const fs = require("fs");
const filePath = "/Users/numanmir/.gemini/antigravity/brain/2913e8a7-1618-4e3d-83ab-b33abf5e5a2e/.system_generated/steps/3627/content.md";
const html = fs.readFileSync(filePath, "utf8");

// Search for any blocks with "price" or "product" class names, or list items
const lines = html.split("\n");
console.log(`File lines: ${lines.length}`);

// Let's print out lines containing text that could be a product title or price
// usually in shopify it's like a link or a span with class "price-item" or containing "price"
let matches = 0;
lines.forEach((line, i) => {
  if (line.includes("Saffron") || line.includes("kesar") || line.includes("price") || line.includes("From") || line.includes("₹")) {
    if (line.trim().length > 0 && line.trim().length < 500) {
      console.log(`L${i}: ${line.trim()}`);
      matches++;
    }
  }
});

console.log(`Total keyword lines: ${matches}`);
