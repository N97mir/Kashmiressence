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
const React = { Fragment: "Fragment" };
const products = eval(arrayText);

const simplified = products.map(p => ({
  slug: p.slug,
  name: p.name,
  isDefault: p.isDefault,
  category: p.category,
  size: p.size,
  weight: p.weight,
  price: p.price,
  mrp: p.mrp,
  img: p.img,
  gallery: p.gallery,
  variants: p.variants
}));

fs.writeFileSync(path.join(__dirname, "products_dump.json"), JSON.stringify(simplified, null, 2), "utf8");
console.log(`Successfully dumped ${simplified.length} products to products_dump.json`);
