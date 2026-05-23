const fs = require("fs");
const filePath = "/Users/numanmir/.gemini/antigravity/brain/2913e8a7-1618-4e3d-83ab-b33abf5e5a2e/.system_generated/steps/3627/content.md";
const html = fs.readFileSync(filePath, "utf8");
const lines = html.split("\n");

// Look at line 752
const line752 = lines[752];
console.log(`Line 752 length: ${line752.length}`);

// Find all matches of numbers near ₹ or Rs or price keywords in line 752
// Let's write a regex to find links and prices
const regex = /href="([^"]*?\/products\/[^"]*?)"[^>]*>([\s\S]*?)<\/a>/gi;
let match;
while ((match = regex.exec(line752)) !== null) {
  console.log(`Product URL: ${match[1]}`);
  console.log(`Text: ${match[2].replace(/<[^>]*>/g, "").trim()}`);
}

// Find price numbers
const priceRegex = /(?:rs\.?|₹)\s*(\d+(?:,\d+)?(?:\.\d+)?)/gi;
let pMatch;
while ((pMatch = priceRegex.exec(line752)) !== null) {
  console.log(`Price match: ${pMatch[0]}`);
}

// Check if there are other strings that look like product titles in line 752
const titles = ["saffron", "kesar", "mongra", "lacha"];
titles.forEach(t => {
  let idx = 0;
  while ((idx = line752.indexOf(t, idx)) !== -1) {
    console.log(`Keyword "${t}" found at index ${idx}. Context: ${line752.substring(Math.max(0, idx - 100), Math.min(line752.length, idx + 100)).trim()}`);
    idx += t.length;
  }
});
