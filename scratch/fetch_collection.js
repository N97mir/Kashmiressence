const fs = require('fs');
const path = require('path');
async function main() {
  try {
    const url = 'https://www.kashmironlinestore.com/collections/kashmiri-saffron/products.json';
    const response = await fetch(url);
    const data = await response.json();
    fs.writeFileSync(path.join(__dirname, 'saffron_collection.json'), JSON.stringify(data, null, 2));
    console.log("Success");
  } catch (e) {
    console.error(e);
  }
}
main();
