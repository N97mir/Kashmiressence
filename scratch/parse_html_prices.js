const fs = require("fs");
const path = require("path");

const filePath = "/Users/numanmir/.gemini/antigravity/brain/2913e8a7-1618-4e3d-83ab-b33abf5e5a2e/.system_generated/steps/3565/content.md";
if (!fs.existsSync(filePath)) {
  console.log("File does not exist!");
  process.exit(1);
}

const html = fs.readFileSync(filePath, "utf8");

// Look for price or variant info in JSON or HTML
console.log("--- SEARCHING FOR JSON ---");
// Look for shopify product json structure or similar
const jsonMatches = html.match(/id="ProductJson[^"]*"[^>]*>([\s\S]*?)<\/script>/g);
if (jsonMatches) {
  jsonMatches.forEach((m, i) => {
    console.log(`Match ${i}:`, m.substring(0, 200));
  });
} else {
  // Let's find any script tag containing variants or prices
  const scripts = html.match(/<script[\s\S]*?<\/script>/g) || [];
  scripts.forEach((s, idx) => {
    if (s.includes("variants") || s.includes("price") || s.includes("Badam") || s.includes("250")) {
      if (s.length < 5000) {
        console.log(`Script ${idx} (len ${s.length}):`, s);
      } else {
        console.log(`Script ${idx} (len ${s.length}) contains keywords but too long. Snippet:`, s.substring(0, 300));
      }
    }
  });
}

// Search for select or option tags which usually contain variant names and prices
console.log("--- SEARCHING FOR SELECT/OPTION TAGS ---");
const options = html.match(/<option[\s\S]*?<\/option>/g) || [];
options.forEach(o => console.log("Option:", o.trim()));

// Let's print out text matches around "250", "500", "1kg", "650", "1300", "2600"
console.log("--- SEARCHING FOR TEXT MATCHES ---");
const lines = html.split("\n");
lines.forEach((line, i) => {
  if (line.includes("650") || line.includes("1,") || line.includes("2,") || line.includes("500") || line.includes("250")) {
    if (line.length < 200) {
      console.log(`L${i}:`, line.trim());
    }
  }
});
