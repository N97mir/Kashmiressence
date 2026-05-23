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
// Use eval with React mock since products.tsx has "import React from 'react';" and might have React.Fragment or components
const React = { Fragment: "Fragment" };
let products;
try {
  products = eval(arrayText);
} catch (e) {
  // Try another parsing style if eval fails
  console.error("Eval error:", e);
}

if (products) {
  console.log(`Found ${products.length} products total.`);
  const imageDir = path.join(__dirname, "../public/images");
  
  products.forEach((p, index) => {
    const imgPath = path.join(__dirname, "..", "public", p.img);
    const exists = fs.existsSync(imgPath);
    console.log(`[${index}] [${p.category}] - ${p.slug}`);
    console.log(`    Name: "${p.name}"`);
    console.log(`    Img:  ${p.img} (${exists ? "EXISTS" : "MISSING!"})`);
    if (p.gallery) {
      p.gallery.forEach(g => {
        const gExists = fs.existsSync(path.join(__dirname, "..", "public", g));
        console.log(`    Gal:  ${g} (${gExists ? "EXISTS" : "MISSING!"})`);
      });
    }
    console.log(`    Price: ${p.price} | MRP: ${p.mrp}`);
    console.log(`    FAQ count: ${p.faqs ? p.faqs.length : 0}`);
  });
}
