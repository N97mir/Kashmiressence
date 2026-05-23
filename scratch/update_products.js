const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/lib/products.tsx");
const content = fs.readFileSync(filePath, "utf8");

// Parse the products array
const startIndex = content.indexOf("export const products = [");
if (startIndex === -1) {
  throw new Error("Could not find start of products array");
}
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

const priceMap = {
  // GI-Tagged Mongra Saffron
  "kashmiri-saffron-mongra": { price: 1050, mrp: 1500 },
  "kashmiri-saffron-mongra-2g": { price: 2050, mrp: 3000 },
  "kashmiri-saffron-mongra-5g": { price: 5050, mrp: 7000 },
  "kashmiri-saffron-mongra-10g": { price: 10050, mrp: 14000 },

  // Standard Saffron
  "kashmiri-saffron-normal-mongra-1g": { price: 580, mrp: 850 },
  "kashmiri-saffron-normal-mongra-2g": { price: 980, mrp: 1400 },
  "kashmiri-saffron-normal-mongra-5g": { price: 2649, mrp: 3800 },
  "kashmiri-saffron-normal-mongra-10g": { price: 5049, mrp: 7500 },

  // GI-Tagged Lacha Saffron
  "kashmiri-saffron-lacha-1g": { price: 449, mrp: 650, img: "/images/saffron-vial-1g.jpg" },
  "kashmiri-saffron-lacha": { price: 799, mrp: 1200, img: "/images/saffron-vial-2g.jpg" },
  "kashmiri-saffron-lacha-5g": { price: 1849, mrp: 2600, img: "/images/saffron-vial-5g.jpg" },
  "kashmiri-saffron-lacha-10g": { price: 3549, mrp: 5000, img: "/images/saffron-vial-10g.jpg" },

  // Saffron Gift Tins
  "kashmiri-saffron-gift-tin": { price: 2549, mrp: 3500 },
  "kashmiri-saffron-gift-tin-10g": { price: 4849, mrp: 6500 },

  // Mamra Almonds
  "mamra-almonds-premium": { price: 700, mrp: 999 },
  "mamra-almonds-500g": { price: 1200, mrp: 1599 },
  "mamra-almonds-1kg": { price: 2200, mrp: 2999 },

  // Walnut Kernels
  "kashmiri-walnut-kernels-250g": { price: 600, mrp: 900 },
  "kashmiri-walnut-kernels": { price: 1050, mrp: 1500 },
  "kashmiri-walnut-kernels-1kg": { price: 1850, mrp: 2600 },

  // Walnuts with shell
  "kashmiri-walnuts-inshell-500g": { price: 500, mrp: 750 },
  "kashmiri-walnuts-inshell-1kg": { price: 850, mrp: 1200 },

  // Honeys
  "ramban-sulai-honey-250g": { price: 400, mrp: 600 },
  "ramban-sulai-honey": { price: 700, mrp: 1000 },
  "ramban-sulai-honey-1kg": { price: 1300, mrp: 1900 },

  "kashmiri-wildflower-honey-250g": { price: 400, mrp: 600 },
  "kashmiri-wildflower-honey": { price: 700, mrp: 1000 },
  "kashmiri-wildflower-honey-1kg": { price: 1300, mrp: 1900 },

  "kashmiri-acacia-honey-250g": { price: 400, mrp: 600 },
  "kashmiri-acacia-honey-500g": { price: 700, mrp: 1000 },
  "kashmiri-acacia-honey-1kg": { price: 1300, mrp: 1900 }
};

// Step 1: Update main products top-level properties
products.forEach(p => {
  if (priceMap[p.slug]) {
    p.price = priceMap[p.slug].price;
    p.mrp = priceMap[p.slug].mrp;
    if (priceMap[p.slug].img) {
      p.img = priceMap[p.slug].img;
    }
  }

  // Handle Kashmiri Chilli Powder visibility
  if (p.slug === "kashmiri-chilli-powder-100g") {
    p.isDefault = true;
  }
});

// Step 2: Sync variants array in each product
products.forEach(p => {
  if (p.variants && Array.isArray(p.variants)) {
    p.variants.forEach(v => {
      if (priceMap[v.slug]) {
        v.price = priceMap[v.slug].price;
        v.mrp = priceMap[v.slug].mrp;
      }
    });
  }
});

// Generate new array text
const newArrayText = JSON.stringify(products, null, 2);

// Reassemble the file content
const newContent = content.slice(0, arrayStart) + newArrayText + content.slice(endIndex);

fs.writeFileSync(filePath, newContent, "utf8");
console.log("Successfully updated products.tsx");
