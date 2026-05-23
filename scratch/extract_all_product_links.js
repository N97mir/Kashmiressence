const fs = require("fs");
const filePath = "/Users/numanmir/.gemini/antigravity/brain/2913e8a7-1618-4e3d-83ab-b33abf5e5a2e/.system_generated/steps/3627/content.md";
const html = fs.readFileSync(filePath, "utf8");

console.log("Searching for '/products/' in the file...");
const regex = /\/products\/[a-zA-Z0-9_\-]+/g;
const matches = html.match(regex);
if (matches) {
  const uniqueMatches = Array.from(new Set(matches));
  console.log(`Found ${uniqueMatches.length} unique product handles:`);
  uniqueMatches.forEach(m => console.log(m));
} else {
  console.log("No product links found.");
}
