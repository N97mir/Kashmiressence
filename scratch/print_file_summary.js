const fs = require("fs");
const filePath = "/Users/numanmir/.gemini/antigravity/brain/2913e8a7-1618-4e3d-83ab-b33abf5e5a2e/.system_generated/steps/3627/content.md";
const html = fs.readFileSync(filePath, "utf8");
const lines = html.split("\n");

console.log(`Total lines: ${lines.length}`);
lines.forEach((l, i) => {
  if (l.trim().length > 100) {
    console.log(`L${i} (len ${l.length}): ${l.substring(0, 150).trim()}...`);
  }
});
