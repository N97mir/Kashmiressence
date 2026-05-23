import React from "react";

export interface CategoryCopy {
  title: string;
  subtitle: string;
  intro: string;
  benefitsTitle: string;
  benefits: { title: string; desc: string; icon: string }[];
  deepArticles: { h2: string; body: string; bulletPoints?: string[] }[];
  sourcingSteps: { step: string; title: string; desc: string }[];
  detailedFaqs: { q: string; a: string }[];
}

export const CATEGORY_COPY_DB: Record<string, CategoryCopy> = {
  saffron: {
    title: "The King of Spices: Authentic Kashmiri Mongra & Lacha Saffron",
    subtitle: "Grown in Pampore's Karewa soil, hand-harvested, and certified ISO 3632 Category I",
    intro: "Kashmiri saffron is widely recognized by culinary experts and researchers as the finest saffron in the world. Sourced from the ancient town of Pampore in Jammu & Kashmir, our saffron holds the prestigious Geographical Indication (GI) Tag, certifying its unique origin, climate, and quality. Due to the high altitude (1,600m+) and rich Karewa soil, Kashmiri Saffron contains exceptional concentrations of crocin (color potency), safranal (aroma), and picrocrocin (flavor profile), far exceeding international standards.",
    benefitsTitle: "Why Kashmir Saffron Outclasses All Global Varieties",
    benefits: [
      {
        icon: "🔬",
        title: "ISO 3632 Category I Certified",
        desc: "Consistently tests for crocin (color intensity) at levels between 240 and 270, well above the international standard threshold of 220 for Category I."
      },
      {
        icon: "🌺",
        title: "100% Pure Mongra Stigmas",
        desc: "Our Mongra grade contains only the thickest, deep-crimson stigma tips, carefully detached by hand, with zero yellow styles or filler materials."
      },
      {
        icon: "🏷️",
        title: "Official GI Tag Protected",
        desc: "Every batch is sourced from registered farms in Pampore, Srinagar District, ensuring authentic geographical origin under government authority."
      }
    ],
    deepArticles: [
      {
        h2: "Understanding Saffron Grades: Mongra vs. Lacha vs. Iranian",
        body: "Saffron quality is determined by the portion of the flower harvested. The saffron crocus (Crocus sativus) has a three-pronged red stigma connected to a yellow stalk (style). The red stigma contains the active chemical components: crocin (color), picrocrocin (flavor), and safranal (aroma).",
        bulletPoints: [
          "Kashmiri Mongra Saffron: This is the highest grade. It consists solely of the dark crimson-red stigma tips. It is hand-picked and separated, resulting in maximum potency and an intense, earthy aroma.",
          "Kashmiri Lacha Saffron: This is the traditional grade. It includes the red stigmas along with the attached yellow styles. While Lacha has slightly lower crocin concentration by weight compared to Mongra, it offers a beautifully complex flavor and is favored for traditional recipes.",
          "Iranian Saffron (Sargol/Negin): Often marketed as Kashmiri, Iranian saffron is grown on massive commercial scales. It has thinner threads, lower crocin readings (usually 180-220), and a milder, less complex aroma compared to high-altitude Kashmiri saffron."
        ]
      },
      {
        h2: "The Science of Saffron: Crocin, Safranal, and Picrocrocin",
        body: "Saffron's medical and culinary properties are driven by three bio-active compounds. Crocin is the water-soluble carotenoid pigment responsible for the vibrant yellow-golden hue saffron imparts. Safranal is the volatile oil that gives saffron its unmistakable hay-like, sweet-floral aroma. Picrocrocin is the glycoside responsible for the slightly bitter, warm flavor. Because Kashmir's climate features freezing winters and hot, dry summers, the saffron crocus develops high concentration of these active metabolites to survive, creating a naturally superior spice."
      },
      {
        h2: "How to Cook with Saffron to Maximize Color & Aroma",
        body: "Never throw saffron threads directly into hot oil or boiling water, as extreme heat destroys the volatile compounds. To extract the full color and aroma, always pre-soak the threads. Warm 2-3 tablespoons of water, milk, or broth (approx 50-60°C). Add a pinch of saffron threads (8-10 threads per dish) and steep for 15 to 20 minutes. The liquid will turn a deep golden hue, and the threads will expand. Pour this infusion into your dish during the final stages of cooking."
      }
    ],
    sourcingSteps: [
      { step: "01", title: "October Harvest", desc: "Flowers are hand-picked at dawn during the short 2-week blooming window in Pampore's Karewa fields." },
      { step: "02", title: "Manual Separation", desc: "Artisans carefully separate the red stigmas from the petals and yellow styles within hours of picking." },
      { step: "03", title: "Traditional Drying", desc: "Dried in temperature-controlled rooms to preserve moisture levels below 10%, locking in volatile oils." },
      { step: "04", title: "ISO Lab Testing", desc: "Every batch is tested for crocin, safranal, and moisture content to ensure Category I classification." }
    ],
    detailedFaqs: [
      {
        q: "Why is Kashmiri saffron so much more expensive than Iranian saffron?",
        a: "Kashmiri saffron is extremely rare, accounting for less than 5% of global production. It is grown on small family-owned farms in Pampore rather than industrial plantations. The high-altitude growing conditions yield thicker threads with crocin levels (250+) that are 20-30% higher than average Iranian saffron. Additionally, the labor-intensive hand-harvesting and manual separation under strict GI guidelines justify the premium price."
      },
      {
        q: "How do I perform a water test at home to spot fake saffron?",
        a: "Place 3-4 saffron threads in a glass of cold water. Authentic Kashmiri saffron will slowly release a golden-yellow hue over 10-15 minutes, while the threads themselves remain deep red. If the water turns deep red or orange immediately (within 1-2 minutes) and the threads lose their color and turn white, it is a clear sign of artificial dyes and adulteration (often dyed corn silk or safflower)."
      },
      {
        q: "Does your saffron come with lab certificates?",
        a: "Yes, we test our saffron for moisture, crocin, safranal, and picrocrocin levels. We happily share the laboratory certificates for orders above ₹2,000 upon request via WhatsApp. We source directly from GI-registered growers in Pampore to guarantee zero blending."
      },
      {
        q: "How should I store saffron to maintain its freshness?",
        a: "Store saffron in an airtight glass container in a cool, dark, and dry place (like a pantry cabinet). Keep it away from direct sunlight, heat, and humidity. Do not store saffron in the refrigerator, as opening and closing the cold jar introduces moisture condensation, which ruins the delicate threads."
      },
      {
        q: "What are the key health benefits of consuming pure saffron?",
        a: "Pure saffron is rich in antioxidants like crocin, crocetin, and safranal. In traditional Unani and Ayurvedic systems, it is used as a mood enhancer, a mild sleep aid, and a digestive tonic. Modern clinical studies also show that saffron supports cognitive health, helps manage PMS symptoms, and promotes eye health."
      }
    ]
  },
  shilajit: {
    title: "Pure Himalayan Shilajit: The Ultimate Mineral Adaptogen",
    subtitle: "High-altitude J&K Himalayan resin, sun-purified, with >60% Fulvic Acid",
    intro: "Shilajit is a nutrient-dense mineral pitch that seeps from high-altitude rock crevices in the Himalayas during the warm summer months. Formed over centuries through the slow decomposition of organic alpine plant matter, it is the cornerstone of Ayurvedic vitality. Sourced from pristine cliffs in Jammu & Kashmir at altitudes above 4,500 meters, our Shilajit is a thick, purified resin containing 85+ minerals in ionic form, humic acid, and an exceptionally high concentration of fulvic acid.",
    benefitsTitle: "The Benefits of High-Altitude Purified Shilajit Resin",
    benefits: [
      {
        icon: "⚡",
        title: "Mitochondrial Energy & ATP Support",
        desc: "Rich in Dibenzo-alpha-pyrones (DBPs) and fulvic acid, which work together to boost cellular energy production and help fight fatigue."
      },
      {
        icon: "🔬",
        title: "85+ Organic Trace Minerals",
        desc: "Provides essential trace minerals in natural, ionic form, ensuring optimal cellular absorption and replenishment."
      },
      {
        icon: "🛡️",
        title: "Natural Detoxification",
        desc: "Fulvic and humic acids act as natural chelators, helping to bind and eliminate heavy metals and toxins from the body."
      }
    ],
    deepArticles: [
      {
        h2: "Resin vs. Powder vs. Capsules: Why Resin is the Only Real Choice",
        body: "Shilajit is sold in various forms, but authentic Shilajit is only stable as a sticky, tar-like resin. Many cheap powders, tablets, and capsules sold online are highly processed, diluted with maltodextrin, or are outright counterfeits made from ozokerite (a mineral wax) or coal humates.",
        bulletPoints: [
          "Shilajit Resin: This is the raw, pure form. It has undergone minimal processing (only filtration and low-temperature water purification). It retains all active organic compounds, trace minerals, and volatile bio-nutrients.",
          "Shilajit Powder & Capsules: Producing powder requires extreme heat drying or chemical spray drying. This destroys the delicate fulvic acid structures and volatile bio-active compounds. Furthermore, powders are easy to adulterate with synthetic fertilizers.",
          "Malleability Test: Real shilajit resin responds dynamically to temperature. When cold (e.g., in the fridge), it becomes hard, brittle, and glass-like. When warm, it becomes soft, sticky, and malleable. Powders cannot duplicate this property."
        ]
      },
      {
        h2: "The Sourcing Challenge: Harvesting Above 4,500 Meters",
        body: "The quality of Shilajit depends on the altitude of harvest. High-altitude rock faces (4,500m+) are exposed to extreme solar radiation, freezing winds, and pristine atmospheric conditions, which naturally concentrate the minerals and prevent contamination. Sourcing requires local Himalayan collectors to scale sheer cliffs during July and August to scrape the raw exuded pitch. Kashmir Essence partners directly with these local gatherers, ensuring fair-trade wages and authentic high-altitude sourcing."
      },
      {
        h2: "How to Consume Shilajit Resin for Maximum Vitality",
        body: "Take a pea-sized portion of Shilajit resin (approximately 250mg to 500mg) using the tip of the included spatula. Dissolve it completely in a glass of warm, non-chlorinated water, warm milk, or herbal tea (like ginger or green tea). Drink it first thing in the morning on an empty stomach. A standard course is 8 to 12 weeks, followed by a 2-3 week break to allow the body to assimilate the minerals."
      }
    ],
    sourcingSteps: [
      { step: "01", title: "Summer Scraping", desc: "Local gatherers ascend high-altitude cliffs (4,500m+) in J&K to collect raw shilajit pitch seeping from rocks." },
      { step: "02", title: "Triphala Water Purification", desc: "The raw pitch is dissolved in clean mountain water and filtered multiple times to remove sand, stones, and organic debris." },
      { step: "03", title: "Low-Temp Evaporation", desc: "The purified liquid is placed in large solar pans where the water slowly evaporates under the sun, protecting the active fulvic acid." },
      { step: "04", title: "Safety Testing", desc: "Tested for heavy metals (lead, mercury, cadmium, arsenic) to ensure it is completely safe and conforms to safety limits." }
    ],
    detailedFaqs: [
      {
        q: "How do I know my Shilajit is 100% pure?",
        a: "Pure Shilajit resin has a distinct, smoky, earthy aroma and a bitter, metallic taste. It must: (1) Dissolve completely in warm water within 2-3 minutes, leaving a golden-brown transparent liquid with no grit or residue. (2) Not dissolve in alcohol or spirits. (3) Become hard and brittle when cold, and soft and sticky when warm. We provide lab certificates showing heavy metal clearances and fulvic acid content (>60%) with every batch."
      },
      {
        q: "Are there any side effects of Shilajit resin?",
        a: "Purified Shilajit is highly safe for daily consumption at recommended dosages. However, raw, unprocessed shilajit contains heavy metals and harmful fungi and should never be consumed. Do not take Shilajit if you suffer from iron overload (hemochromatosis), active gout, high uric acid levels, or severe heart conditions. Pregnant or lactating women should consult their doctor first."
      },
      {
        q: "What is the role of Fulvic Acid in Shilajit?",
        a: "Fulvic acid is a powerful electrolyte and organic humic substance. It acts as a cellular courier, binding to minerals and nutrients and carrying them directly through the cell membranes. This dramatically increases the bioavailability of both the minerals in Shilajit and the food you eat, while supporting ATP (energy) production."
      },
      {
        q: "Can women consume Shilajit resin?",
        a: "Yes. Shilajit is highly beneficial for both men and women. In women, it helps support natural iron levels, promotes healthy skin and hair through trace mineral replenishment, helps manage fatigue, and acts as a natural adaptogen to balance stress hormones."
      },
      {
        q: "How long does a 20g jar of Shilajit last?",
        a: "A 20g jar contains approximately 40 to 60 servings based on a standard daily dose of 300mg to 500mg. For a single user taking it once daily, one jar will last approximately 1.5 to 2 months, covering a standard Ayurvedic course."
      }
    ]
  },
  almonds: {
    title: "Kashmiri Mamra Almonds: The Heritage King of Dry Fruits",
    subtitle: "Wrinkled, oil-rich, unpasteurized, and non-fumigated almonds from Karewa orchards",
    intro: "Kashmiri Mamra almonds (Mamra Badam) are a rare, high-value heritage variety grown in the organic highland soils (Karewas) of Kashmir. Unlike mass-produced California almonds which are uniform, sweet, and low in oil, Kashmiri Mamra almonds are small, single-tree harvested, and have a unique concave shape. They contain up to 42–50% natural oil content, rich in heart-healthy monounsaturated fatty acids (MUFAs), Vitamin E, and antioxidants. We process our Mamra almonds traditionally without pasteurization, chemical washing, or fumigation.",
    benefitsTitle: "The Superior Nutritional Profile of Mamra Badam",
    benefits: [
      {
        icon: "🛢️",
        title: "50% Natural Oil Content",
        desc: "Contains significantly higher concentration of natural almond oil compared to California almonds (typically 32-35%), providing a richer taste and better brain nourishment."
      },
      {
        icon: "🧬",
        title: "Unpasteurized & Non-Fumigated",
        desc: "Unlike imported almonds which are steam-pasteurized or chemically treated with propylene oxide (PPO), our Mamra almonds are 100% raw and natural."
      },
      {
        icon: "🧠",
        title: "Brain & Skin Nutrition",
        desc: "Rich in Vitamin E, riboflavin, and essential fatty acids that support cognitive function, memory, and skin health in traditional Unani medicine."
      }
    ],
    deepArticles: [
      {
        h2: "Mamra vs. California (American) Almonds: Why the Price Difference?",
        body: "Many customers ask why Mamra almonds cost 3 to 4 times more than common California almonds. The reason lies in the cultivation, processing, and nutritional density.",
        bulletPoints: [
          "California Almonds: Grown on massive industrial monoculture plantations. They are watered heavily, harvested by shaking machines, and chemically pasteurized. They are sweet, large, and visually uniform, but have low oil content and lower nutrient density.",
          "Kashmiri Mamra Almonds: Grown in non-irrigated, rain-fed orchards in Kashmir. Each tree is harvested individually by hand. Because they are not mass-watered, they concentrate their oils, resulting in a slightly wrinkled, smaller almond with a far deeper nutty flavor.",
          "Yield & Scarcity: Mamra trees account for a tiny fraction of global almond production. The labor-intensive manual shell cracking (using stones or wooden hammers) and low yields per acre justify their high culinary value."
        ]
      },
      {
        h2: "The Oil Print Test: Verifying Authentic Mamra Badam",
        body: "Because Mamra almonds are premium, some sellers mix them with cheap California or Iranian Gurbandi almonds. You can verify authentic Mamra almonds at home. Place a few Mamra almonds on a sheet of white writing paper. Press them firmly with a heavy object to crush them slightly. Authentic Kashmiri Mamra almonds will leave a large, translucent oil print on the paper, indicating their high oil yield. California almonds will leave almost no oil print."
      },
      {
        h2: "The Ayurvedic Method of Soaking Almonds",
        body: "Ayurveda strongly recommends soaking Mamra almonds before consumption. Take 5 to 7 almonds, wash them, and soak them in a glass of water overnight (for 8-10 hours). In the morning, peel off the brown skin. The skin contains tannins which inhibit nutrient absorption. Soaking activates the enzymes in the almond, making the fats and proteins highly digestible and bioavailable."
      }
    ],
    sourcingSteps: [
      { step: "01", title: "Hand-Picking", desc: "Orchardists harvest the almonds manually by knocking them down with long wooden poles when the hulls split open." },
      { step: "02", title: "Hull Removal & Sun-Drying", desc: "The green outer hulls are removed by hand, and the unshelled almonds are spread out to dry naturally in the mountain sun." },
      { step: "03", title: "Manual Shell Cracking", desc: "Local artisans crack the hard shells manually to extract the kernels, keeping the shape intact and preventing heat damage." },
      { step: "04", title: "Size Sorting", desc: "Kernels are sorted by hand into premium grades, discarding broken pieces and ensuring only oil-rich almonds are packed." }
    ],
    detailedFaqs: [
      {
        q: "Why do some Mamra almonds taste bitter?",
        a: "Because Mamra almonds are grown from seed (heritage rootstock) rather than cloned grafts, approximately 2% to 3% of the crop will naturally yield a bitter seed. This is a natural botanical trait of wild almonds. In contrast, California almonds are genetically selected to eliminate bitterness, but lose their natural oils in the process. The presence of a rare bitter almond is actually proof of authentic, raw, unmodified Mamra."
      },
      {
        q: "Can I eat Mamra almonds without soaking?",
        a: "Yes, you can eat them raw or dry-roasted. However, soaking them overnight and peeling the skin makes them easier to digest and releases lipase (a fat-digesting enzyme), maximizing the absorption of Vitamin E and healthy monounsaturated oils."
      },
      {
        q: "How do I identify genuine Kashmiri Mamra almonds from Gurbandi or Iranian Mamra?",
        a: "Kashmiri Mamra almonds are small to medium-sized, have a elongated concave (boat-like) shape, and are deeply wrinkled. Gurbandi almonds are smaller and flatter, while Iranian Mamra tend to be larger and more uniform. Kashmiri Mamra has the highest oil content and a sweeter, more intense almond flavor when chewed."
      },
      {
        q: "How should Mamra almonds be stored?",
        a: "Since Mamra almonds are raw, unpasteurized, and rich in natural oils, they can spoil if exposed to heat and humidity. Store them in an airtight container in a cool, dry place. During summer months or humid seasons, we strongly recommend storing them in the refrigerator to preserve the oils and prevent rancidity."
      },
      {
        q: "Are Mamra almonds safe for children?",
        a: "Yes, they are highly recommended for children. Feeding kids 4-5 soaked and peeled Mamra almonds daily in the morning is a traditional Indian practice to support brain health, memory retention, and overall physical development."
      }
    ]
  },
  walnuts: {
    title: "Kashmiri Walnuts: Premium Soft-Shell Kernels",
    subtitle: "Organic, paper-shell walnuts from the pristine Wular Basin in Kashmir",
    intro: "Kashmiri walnuts (Akhrot) are celebrated globally for their rich, buttery flavor, high oil concentration, and paper-thin shells. Grown organically in the fertile valleys surrounding the Wular Basin in Kashmir, these walnuts are harvested from majestic, decades-old trees. They are an exceptional source of Alpha-Linolenic Acid (ALA) — the plant-based Omega-3 fatty acid — as well as antioxidants and polyphenols. We source our walnuts from single-harvest orchards, offering whole kernels and paper-shell unshelled walnuts.",
    benefitsTitle: "Why Kashmiri Walnuts are Superior to Imported Varieties",
    benefits: [
      {
        icon: "🌰",
        title: "Paper-Thin Shells",
        desc: "Our unshelled walnuts feature paper-shells that can be easily cracked open with a simple squeeze of the hand, requiring no mechanical nutcrackers."
      },
      {
        icon: "🧠",
        title: "Omega-3 Rich Superfood",
        desc: "Contains the highest concentration of plant-based Omega-3 (Alpha-Linolenic Acid) among all nuts, supporting cognitive health and heart function."
      },
      {
        icon: "🍯",
        title: "Naturally Sweet & Buttery",
        desc: "Free from the sharp, bitter chemical aftertaste common in heavily chemically-treated imported walnuts from California or Chile."
      }
    ],
    deepArticles: [
      {
        h2: "The Kashmiri Walnut Landscape: Organic by Default",
        body: "In Kashmir, walnut cultivation is traditional. Most trees are grown in home gardens and small family orchards. These trees are not sprayed with chemical pesticides or synthetic growth hormones. Because the trees are grown near mountain streams and in rich alluvial soils, the walnuts develop a naturally sweet flavor and high fat content. Imported walnuts, by contrast, are commercially grown, chemically bleached to look white, and vacuum-sealed for long sea transits, which can compromise flavor freshness.",
        bulletPoints: [
          "Snow White Kernels: The highest grade of walnut kernels, prized for their light golden color, large halves shape, and delicate sweet flavor.",
          "Amber Kernels: Slightly darker kernels that have a deeper, more robust buttery taste, excellent for baking, granolas, and traditional chutneys.",
          "Chemical-Free: We do not bleach our shells with chlorine or sulfur. The natural brown color of our walnut shells is a mark of purity."
        ]
      },
      {
        h2: "Why the Shell Color Matters: Avoiding Bleached Walnuts",
        body: "Many commercial walnuts sold in supermarkets have perfectly white, clean shells. This is achieved by washing the unshelled walnuts in chlorine bleach or sulfur dioxide baths. While it makes the shell look clean, these chemicals can seep through the paper shell, affecting the kernel quality and introducing chemical residues. Kashmir Essence walnuts are sun-dried and water-washed without any chemicals. Our shells have their natural, rustic golden-brown color, keeping the kernel inside completely organic and safe."
      }
    ],
    sourcingSteps: [
      { step: "01", title: "Autumn Harvest", desc: "Walnuts are harvested in September and October when the green outer hulls split open, revealing the hard shell." },
      { step: "02", title: "Natural Washing", desc: "The green hull residue is washed off using clean mountain water, with zero chemicals or bleaching agents used." },
      { step: "03", title: "Sun-Drying", desc: "The wet shells are dried under the warm autumn sun in the valley until the moisture content drops to a stable 5%." },
      { step: "04", title: "Hand-Cracking & Sorting", desc: "Kernels are carefully hand-extracted by local families to preserve the complete halves (Akhrot Giri) shape." }
    ],
    detailedFaqs: [
      {
        q: "Why do imported walnuts sometimes taste bitter, while yours are sweet?",
        a: "Imported walnuts (from Chile or California) undergo long sea journeys in shipping containers. The high oils in walnuts are prone to oxidation (rancidity) when exposed to heat and humidity, which results in a bitter, soapy taste. Our Kashmiri walnuts are freshly harvested, traditionally processed, and shipped directly from Kashmir, preserving their natural sweet and buttery flavor."
      },
      {
        q: "What is the difference between 'Paper-Shell' and 'Wood-Shell' walnuts?",
        a: "Paper-shell walnuts (locally called Kagzi) have very thin shells that you can crack easily with one hand. The kernel yields are very high, and the shell is thin. Wood-shell walnuts (Burzul) have thick, hard shells that require a hammer to open. We select only Kagzi (paper-shell) walnuts for our unshelled range."
      },
      {
        q: "How should I store walnut kernels to prevent them from spoiling?",
        a: "Because walnut kernels have high concentrations of polyunsaturated oils (Omega-3s), they oxidize quickly in heat and light. Always store walnut kernels in a tightly sealed airtight container in the refrigerator or freezer. Kept cold, they will remain sweet and fresh for up to 9-12 months."
      },
      {
        q: "Are walnuts good for cholesterol and heart health?",
        a: "Yes. Numerous clinical studies show that walnuts support cardiovascular health. They are rich in Omega-3 fatty acids, which help maintain healthy cholesterol levels, reduce inflammation, and support healthy blood pressure when eaten as part of a balanced diet."
      }
    ]
  },
  honey: {
    title: "Raw Kashmiri Honey: Pure, Unfiltered Valley Nectar",
    subtitle: "Cold-extracted from the alpine meadows and Sidr forests of Jammu & Kashmir",
    intro: "Kashmir Essence honey is 100% raw, cold-extracted, and completely unprocessed. Sourced from traditional beekeepers who place their hives in the high-altitude alpine meadows and forests of Kashmir, our honey is never heated, micro-filtered, or adulterated with sugar syrups. It retains all its natural enzymes, floral pollen, and antioxidants. We offer unique single-origin honeys, including the highly-prized Sulai (Sidr) Honey, harvested from the wild white blossom fields of the Ramban Valley.",
    benefitsTitle: "The Difference Between Raw Honey and Processed Honey",
    benefits: [
      {
        icon: "🍯",
        title: "Never Heated (Cold-Extracted)",
        desc: "Extracted without applying high heat, preserving the delicate live enzymes, vitamins, and floral aromas that heat processing destroys."
      },
      {
        icon: "🐝",
        title: "Rich in Natural Bee Pollen",
        desc: "Our honey is only gravity-strained through a coarse mesh, leaving behind micro-pollens and propolis which act as natural immunity boosters."
      },
      {
        icon: "🚫",
        title: "Zero Sugar Syrup Adulteration",
        desc: "Certified pure and free from C3/C4 corn syrups, rice syrups, or cane sugar feeding, ensuring 100% natural flower nectar."
      }
    ],
    deepArticles: [
      {
        h2: "Understanding Crystallization: Proof of Raw Purity",
        body: "Many customers believe that honey that crystallizes (turns solid or cloudy) is fake or contains added sugar. In reality, the opposite is true. Crystallization is a natural, organic process. Raw honey containing natural pollens and high glucose content will naturally crystallize over time, especially in cool temperatures. Processed commercial honeys do not crystallize because they are heated to high temperatures (destroying enzymes) and ultra-filtered under pressure to remove all bee pollen. If your raw Kashmiri honey solidifies, simply place the jar in a warm water bath (below 45°C) to liquefy it. Never microwave raw honey.",
        bulletPoints: [
          "Ramban Sulai (Sidr) Honey: Harvested from the wild Sulai (Plectranthus rugosus) blossoms in Ramban District. It has a light golden color, a distinct floral aroma, and is famous globally for its organic purity.",
          "Wildflower Honey: Harvested from high-altitude alpine meadows, containing nectar from a variety of medicinal mountain herbs, offering a rich and complex flavor profile."
        ]
      }
    ],
    sourcingSteps: [
      { step: "01", title: "Floral Migration", desc: "Beekeepers place hives in specific organic valleys during blooming seasons (e.g., Sulai blossom in late summer)." },
      { step: "02", title: "Hand Extraction", desc: "Honeycomb frames are uncapped manually, and the honey is extracted using a hand-cranked centrifugal extractor." },
      { step: "03", title: "Gravity Filtration", desc: "The honey is passed through a simple mesh strainer to remove wax particles, retaining all organic bee pollen." },
      { step: "04", title: "Glass Bottling", desc: "Bottled directly into clean glass jars, without pasteurization, blending, or chemical additives." }
    ],
    detailedFaqs: [
      {
        q: "Why does raw honey crystallize, and what should I do?",
        a: "Crystallization is the natural sign of raw, unfiltered honey. The natural glucose in honey binds to the micro-pollen particles and separates from water, forming crystals. If your honey crystallizes, place the jar in a bowl of warm water (approx. 40°C) for 10-15 minutes and stir. Do not boil or microwave the honey, as temperatures above 45°C destroy the beneficial enzymes."
      },
      {
        q: "Is your honey certified pure from sugar syrup feeding?",
        a: "Yes. Our honey is tested for sugar adulterants (C3/C4 sugars) and conforms to FSSAI standards. We ensure our bees forage on wild mountain blossoms rather than being fed industrial sugar syrup."
      },
      {
        q: "What makes Sulai (Sidr) Honey special?",
        a: "Sulai honey is sourced from the nectar of Plectranthus rugosus, a wild aromatic shrub that grows on the hills of Jammu & Kashmir. It has a light amber color, a mild floral sweetness, and was famously presented to global dignitaries as a symbol of Kashmir's natural heritage due to its unique flavor and high antioxidant content."
      },
      {
        q: "Can I give raw honey to infants?",
        a: "No. Raw honey (and all honey) should never be fed to infants under one year of age. This is because their digestive systems are not fully developed to handle natural botulinum spores occasionally found in raw soils and honey, which can cause infant botulism."
      }
    ]
  },
  spices: {
    title: "Kashmiri Spices & Authentic Kahwa Tea",
    subtitle: "Pure Kashmiri Chilli Powder and traditional saffron-infused Kahwa tea blend",
    intro: "Kashmiri cuisine is defined by its aromatic spices and traditional tea preparations. At Kashmir Essence, we bring these authentic flavors directly from the valley to your kitchen. We offer genuine Kashmiri Chilli Powder — famous worldwide for its brilliant vermilion red color and mild, warming heat — and our Signature Kashmiri Kahwa Blend, containing green tea hand-mixed with authentic Pampore saffron, cinnamon, cardamoms, cloves, and dried rose petals.",
    benefitsTitle: "The Aromas of Kashmir: Pure Spices & Aromatic Teas",
    benefits: [
      {
        icon: "🌶️",
        title: "Pure Kashmiri Chilli Powder",
        desc: "Ground from whole stemless Kashmiri chillies. Gives a rich red color to curries with a mild heat profile (Scoville rating 1,000–2,000 SHU) and high natural oils."
      },
      {
        icon: "🫖",
        title: "Saffron-Infused Kahwa Blend",
        desc: "An authentic, pre-mixed Kahwa tea containing premium green tea leaves, crushed spices, and genuine saffron threads for a traditional brew."
      },
      {
        icon: "🌱",
        title: "100% Natural, No Added Colors",
        desc: "We do not add artificial oil soluble red dyes (like Sudan dyes) or artificial enhancers to our spices. You get pure spice flavor."
      }
    ],
    deepArticles: [
      {
        h2: "The Kahwa Tradition: More than Just Green Tea",
        body: "In Kashmiri culture, Kahwa is a symbol of hospitality. It is a warming herbal green tea traditionally brewed in a copper samovar. The secret to a perfect cup of Kahwa lies in the balance of spices. The green tea must not be over-boiled (which makes it bitter). Instead, it must be steeped gently with cardamom, cinnamon, and cloves, and garnished with saffron and sliced almonds. Our blend is crafted by local experts in Srinagar, ensuring the correct ratios of spices so you can enjoy the authentic taste of Kashmir at home."
      },
      {
        h2: "How to Spot Fake Kashmiri Chilli Powder",
        body: "Authentic Kashmiri Chilli (Guntur-type or local Kashmiri cultivars) is deep red and mild. Many commercial brands mix regular hot chillies with chemical red dyes and sawdust to mimic Kashmiri chilli. Authentic Kashmiri Chilli powder has a warm, sweet, fruity aroma, a mild taste, and when dissolved in water, the natural pigments do not separate into unnatural chemical layers."
      }
    ],
    sourcingSteps: [
      { step: "01", title: "Dry Sourcing", desc: "We source dried whole Kashmiri chillies directly from farmers in the Srinagar and Pulwama districts." },
      { step: "02", title: "Destemming", desc: "The green stems are manually removed from every single chilli, ensuring only the red pod is ground." },
      { step: "03", title: "Cold Grinding", desc: "Ground at low temperatures to prevent the loss of natural volatile oils, preserving the aroma and red color." },
      { step: "04", title: "Fresh Blending", desc: "Our Kahwa blend is mixed in small batches using freshly ground green cardamom, cinnamon, and actual saffron threads." }
    ],
    detailedFaqs: [
      {
        q: "How hot is your Kashmiri Chilli Powder?",
        a: "Kashmiri chilli is famous for its mild heat. It has a Scoville heat rating of 1,000 to 2,000 SHU (Scoville Heat Units), compared to regular hot chillies which exceed 15,000 SHU. It is used primarily to add a beautiful rich red color and a mild, warm flavor to curries without making them overly spicy."
      },
      {
        q: "Does your Kahwa blend contain sugar or sweeteners?",
        a: "No. Our Signature Kahwa Blend contains 100% natural ingredients: green tea leaves, cardamom, cinnamon, cloves, saffron threads, and dried rose petals. It contains no added sugar, artificial flavors, or preservatives. You can sweeten it with honey or sugar according to your taste when brewing."
      },
      {
        q: "How do I brew the perfect cup of Kahwa using your blend?",
        a: "Bring 1 cup of water to a boil. Turn off the heat and let it cool for 30 seconds. Add 1/2 teaspoon of our Kahwa Blend. Cover and let it steep for 3 minutes. Strain into a cup, add honey or sugar to taste, and garnish with 3-4 slivered blanched Mamra almonds. Enjoy hot."
      }
    ]
  },
  "gift-boxes": {
    title: "Kashmiri Gift Boxes: Premium Festive & Corporate Sets",
    subtitle: "Beautifully curated gift boxes containing authentic saffron, shilajit, almonds, and honey",
    intro: "Share the natural wealth of the Kashmir Valley with our premium curated gift boxes. Perfect for weddings, corporate gifting, Eid, Diwali, and special family occasions, our gift sets are housed in handcrafted packaging. We combine our finest GI-tagged saffron, high-altitude Shilajit, oil-rich Mamra almonds, and raw valley honey to create an elegant, health-focused gift that leaves a lasting impression.",
    benefitsTitle: "Elegance & Health: The Ultimate Gift Sets",
    benefits: [
      {
        icon: "🎁",
        title: "Handcrafted Packaging",
        desc: "Housed in premium metal tins or traditional handcrafted wooden boxes lined with velvet, presenting the products like jewels."
      },
      {
        icon: "🔬",
        title: "100% Lab-Certified Quality",
        desc: "Every product inside our gift boxes (Saffron, Shilajit, Honey) is lab-tested and certified, ensuring absolute authenticity."
      },
      {
        icon: "📦",
        title: "Customizable Selections",
        desc: "We offer custom product configurations and branding options for corporate events and bulk orders. WhatsApp for details."
      }
    ],
    deepArticles: [
      {
        h2: "Corporate & Wedding Gifting: A Health-Focused Alternative",
        body: "Commercial corporate gifting is dominated by processed sweets and synthetic chocolates. A gift box from Kashmir Essence offers a premium, health-focused alternative. High-potency saffron, mineral-rich Shilajit, and heritage Mamra almonds are prized luxury items in Indian culture, representing health, vitality, and high respect. We design custom gift sets that reflect your company's values or wedding themes, with options for customized greeting cards and packaging inserts."
      }
    ],
    sourcingSteps: [
      { step: "01", title: "Selection", desc: "We select the highest-grade products (like Mongra saffron and whole Mamra almonds) for our gift boxes." },
      { step: "02", title: "Inspection", desc: "Each jar and tin undergoes strict quality inspection to ensure perfect sealing and aesthetic presentation." },
      { step: "03", title: "Hand-Packing", desc: "Each box is compiled manually in Pampore, adding protective straw and custom tags for a premium feel." },
      { step: "04", title: "Secure Shipping", desc: "The boxes are shipped in thick multi-layered outer cartons to prevent any damage during transit." }
    ],
    detailedFaqs: [
      {
        q: "Do you offer customization for wedding and corporate orders?",
        a: "Yes. We offer fully customizable gift sets. You can choose the products, sizes, and packaging materials. For corporate orders above 50 boxes, we can also customize the labels with your company logo or add custom wedding greeting cards."
      },
      {
        q: "How can I order bulk gift boxes?",
        a: "WhatsApp us at +91 7019838992 with your quantity, product requirements, budget, and delivery date. We will share our catalog and provide a custom bulk quote within a few hours."
      },
      {
        q: "How long does shipping take for large bulk orders?",
        a: "For standard orders, we dispatch within 24-48 hours. For bulk orders (50+ sets) requiring custom assembly or branding, it typically takes 5-7 business days to assemble and 3-5 days for delivery across India. We recommend ordering at least 2 weeks in advance of your event."
      }
    ]
  }
};
