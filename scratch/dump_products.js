const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/lib/products.tsx");
const content = fs.readFileSync(filePath, "utf8");

// Extract the products array text
const startIndex = content.indexOf("export const products = [");
const arrayStart = content.indexOf("[", startIndex);
let braceCount = 1;
let endIndex = arrayStart + 1;

while (braceCount > 0 && endIndex < content.length) {
  if (content[endIndex] === "[") braceCount++;
  else if (content[endIndex] === "]") braceCount--;
  endIndex++;
}

const arrayText = content.slice(arrayStart, endIndex);
const products = eval(arrayText);

console.log(products.map(p => ({
  slug: p.slug,
  name: p.name,
  isDefault: p.isDefault,
  faqCount: p.faqs ? p.faqs.length : 0
})));
