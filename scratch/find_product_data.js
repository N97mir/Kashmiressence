const fs = require("fs");
const filePath = "/Users/numanmir/.gemini/antigravity/brain/2913e8a7-1618-4e3d-83ab-b33abf5e5a2e/.system_generated/steps/3565/content.md";
const html = fs.readFileSync(filePath, "utf8");

// Search for any script tag containing price list
const scriptRegex = /<script[\s\S]*?<\/script>/g;
let match;
let count = 0;
while ((match = scriptRegex.exec(html)) !== null) {
  const scriptContent = match[0];
  if (scriptContent.includes("variants") || scriptContent.includes("price") || scriptContent.includes("650")) {
    console.log(`Script tag #${count} length: ${scriptContent.length}`);
    // Save to a temp file if it's large so we can analyze it
    fs.writeFileSync(`scratch/script_${count}.js`, scriptContent);
    count++;
  }
}
console.log(`Done. Saved ${count} scripts.`);
