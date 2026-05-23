import json
import re

with open("src/lib/products.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Let's find products by matching the JSON-like objects.
# We can find the products array content.
# A simple way is to search for `"slug":` and then count the number of `{"q":` under that product before the next product.
products_raw = content.split('{\n      "slug":')
print(f"Found {len(products_raw) - 1} product segments.")
for i, segment in enumerate(products_raw[1:], 1):
    slug_match = re.match(r'\s*"([^"]+)"', segment)
    if slug_match:
        slug = slug_match.group(1)
        # Count FAQs in this segment (excluding sub-variants)
        # Variants is a separate array, let's see if variants contains "faqs" (usually variants don't have faqs)
        faq_count = len(re.findall(r'"q":\s*"', segment))
        print(f"Product {i}: {slug} -> {faq_count} FAQs")
