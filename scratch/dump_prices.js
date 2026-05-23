const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/lib/products.tsx");
const content = fs.readFileSync(filePath, "utf8");

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

const output = products.map(p => ({
  slug: p.slug,
  category: p.category,
  name: p.name,
  isDefault: p.isDefault,
  price: p.price,
  mrp: p.mrp,
  variants: p.variants ? p.variants.map(v => ({ slug: v.slug, size: v.size, price: v.price, mrp: v.mrp })) : null
}));

console.log(JSON.stringify(output, null, 2));
