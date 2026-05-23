export interface RecipeStep {
  title: string;
  description: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface RecipeUsage {
  slug: string;
  title: string;
  subtitle: string;
  productSlug: string;
  image: string;
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  intro: string;
  ingredients: string[];
  steps: RecipeStep[];
  faqs: FAQ[];
}

export const RECIPES_AND_USAGE: RecipeUsage[] = [
  {
    slug: "authentic-kashmiri-kahwa-recipe",
    title: "How to Make Authentic Kashmiri Kahwa (Traditional Method)",
    subtitle: "A step-by-step guide to brewing the perfect soul-warming cup of traditional Kashmiri Kahwa.",
    productSlug: "kashmiri-kahwa-blend",
    image: "/images/kashmiri-kahwa-blend.jpg",
    prepTime: "5 mins",
    cookTime: "10 mins",
    servings: "2 cups",
    intro: "Kashmiri Kahwa is a traditional green tea preparation consumed in the Kashmir Valley. It is an exotic mix of Kashmiri green tea leaves, whole spices, nuts, and saffron. Our pre-mixed Kahwa Blend makes it incredibly easy to brew this royal beverage at home while retaining 100% of the authentic flavor and health benefits.",
    ingredients: [
      "2 cups of fresh water",
      "1 teaspoon of Kashmir Essence Kahwa Blend",
      "1 teaspoon of raw honey (or sugar/jaggery to taste)",
      "Crushed almonds or walnuts for garnishing (optional, as our blend already contains nuts)"
    ],
    steps: [
      {
        title: "Boil the Water",
        description: "In a saucepan or traditional Samovar, bring 2 cups of fresh water to a rolling boil."
      },
      {
        title: "Add the Kahwa Blend",
        description: "Add 1 teaspoon of the Kashmir Essence Kahwa Blend to the boiling water. This blend already contains green tea, saffron, cardamom, cinnamon, and crushed almonds."
      },
      {
        title: "Simmer and Infuse",
        description: "Reduce the heat to low and let the tea simmer for 3 to 5 minutes. You will see the water turn a beautiful golden-amber color as the saffron releases its pigment."
      },
      {
        title: "Sweeten (Optional)",
        description: "Turn off the heat. Stir in 1 teaspoon of raw honey or your preferred sweetener. Traditional Kahwa is lightly sweetened to balance the spices."
      },
      {
        title: "Serve Hot",
        description: "Pour the Kahwa into traditional cups (khos). Garnish with a few extra slivered almonds or walnuts if desired, and serve immediately."
      }
    ],
    faqs: [
      {
        q: "Can I drink Kahwa every day?",
        a: "Yes! Kashmiri Kahwa is excellent for daily consumption, especially during winter or cold weather. It aids digestion, boosts immunity, and keeps the body warm."
      },
      {
        q: "Does Kahwa contain caffeine?",
        a: "Yes, because it contains a base of Kashmiri green tea, it has a very low amount of natural caffeine—much less than black tea or coffee."
      }
    ]
  },
  {
    slug: "how-to-consume-pure-shilajit-resin-safely",
    title: "How to Consume Pure Shilajit Resin Safely & Effectively",
    subtitle: "The ultimate Ayurvedic guide to preparing and drinking Himalayan Shilajit Resin.",
    productSlug: "himalayan-shilajit-resin",
    image: "/images/shilajit-resin.jpg",
    prepTime: "2 mins",
    cookTime: "N/A",
    servings: "1 cup",
    intro: "Pure Himalayan Shilajit Resin is a potent Ayurvedic adaptogen. Because it is highly concentrated, it must be consumed correctly to maximize its absorption (bioavailability) and avoid any mild detox symptoms. Here is the safest and most effective way to take your daily dose.",
    ingredients: [
      "1 pea-sized amount of Pure Shilajit Resin (approx. 300-500mg)",
      "1 cup of warm water, warm milk, or herbal tea",
      "Optional: 1 teaspoon of raw honey or ghee (to enhance absorption)"
    ],
    steps: [
      {
        title: "Measure the Dose",
        description: "Using the back of a spoon, scoop out a tiny, pea-sized portion of the resin (about the size of a grain of rice if you are a beginner, working up to pea-sized). It should weigh between 300mg to 500mg."
      },
      {
        title: "Dissolve in Warm Liquid",
        description: "Stir the resin into a cup of warm water, warm milk, or herbal tea. Never use boiling water, as extreme heat can degrade the delicate fulvic acid compounds. Stir continuously for 2-3 minutes until completely dissolved."
      },
      {
        title: "Add a Carrier (Anupana)",
        description: "In Ayurveda, taking Shilajit with a carrier (Anupana) like raw honey, ghee, or warm milk significantly enhances its cellular absorption. Add a teaspoon of honey if desired."
      },
      {
        title: "Consume on an Empty Stomach",
        description: "Drink the mixture slowly, ideally on an empty stomach first thing in the morning. Wait 30 minutes before eating breakfast."
      }
    ],
    faqs: [
      {
        q: "Can I take Shilajit at night?",
        a: "It is generally not recommended to take Shilajit right before bed, as the surge in cellular energy (ATP) might cause sleep disturbances. Morning or early afternoon is best."
      },
      {
        q: "Do I need to cycle Shilajit?",
        a: "Yes. The standard Ayurvedic recommendation is to take it continuously for 6 to 8 weeks, followed by a 1 to 2 week break. This prevents the body from building a tolerance."
      }
    ]
  },
  {
    slug: "how-to-use-saffron-milk-for-pregnancy",
    title: "How to Make Saffron Milk (Kesar Doodh) for Pregnancy",
    subtitle: "A soothing, traditional recipe for expecting mothers.",
    productSlug: "kashmiri-saffron-mongra",
    image: "/images/saffron-vial-1g.jpg",
    prepTime: "5 mins",
    cookTime: "5 mins",
    servings: "1 cup",
    intro: "Saffron milk (Kesar Doodh) is a revered Ayurvedic drink for expecting mothers. It aids in digestion, reduces mood swings, and helps with sleep. However, moderation is key during pregnancy. This recipe uses the exact safe dosage of pure Kashmiri Mongra Saffron.",
    ingredients: [
      "1 cup of high-quality whole milk (or almond milk)",
      "2 to 3 strands (threads) of Pure Kashmiri Mongra Saffron",
      "1 teaspoon of sugar or honey (optional)",
      "A pinch of cardamom powder (optional, for digestion)"
    ],
    steps: [
      {
        title: "Warm the Milk",
        description: "Pour the milk into a small saucepan and heat it gently over medium-low heat until it is warm, but not boiling."
      },
      {
        title: "Crush the Saffron",
        description: "Take exactly 2 to 3 strands of saffron (do not exceed this amount during pregnancy). Crush them gently between your fingers to release their aroma."
      },
      {
        title: "Infuse the Saffron",
        description: "Add the crushed saffron strands and the optional cardamom powder to the warm milk. Stir well."
      },
      {
        title: "Steep",
        description: "Turn off the heat, cover the saucepan, and let the milk steep for 5 to 10 minutes. The milk will turn a pale, beautiful yellow."
      },
      {
        title: "Drink Warm",
        description: "Sweeten with honey or sugar if desired, and drink the milk while it is still warm, preferably an hour before bedtime."
      }
    ],
    faqs: [
      {
        q: "When can I start drinking saffron milk during pregnancy?",
        a: "Ayurvedic practitioners generally recommend starting saffron milk only after the first trimester (from the 4th month onwards), as the first trimester is highly sensitive."
      },
      {
        q: "Is too much saffron harmful?",
        a: "Yes. During pregnancy, limit your intake to 2-3 strands per day. High doses of saffron can stimulate uterine contractions."
      }
    ]
  },
  {
    slug: "overnight-soaked-mamra-almonds-method",
    title: "How to Prepare Overnight Soaked Mamra Almonds",
    subtitle: "The Ayurvedic method to unlock the full nutritional profile of Mamra Badam.",
    productSlug: "mamra-almonds-premium",
    image: "/images/mamra-almonds-250.jpg",
    prepTime: "2 mins",
    cookTime: "8 hours (Soaking)",
    servings: "1 person",
    intro: "While you can eat Mamra Almonds raw, Ayurveda highly recommends soaking them overnight. Soaking removes phytic acid (an anti-nutrient in the almond skin) which inhibits mineral absorption, and it releases the enzyme lipase, which aids in fat digestion.",
    ingredients: [
      "5 to 7 Premium Kashmiri Mamra Almonds",
      "1 cup of clean, filtered water"
    ],
    steps: [
      {
        title: "Rinse the Almonds",
        description: "Take 5 to 7 Mamra almonds and rinse them quickly under running water to remove any surface dust."
      },
      {
        title: "Submerge in Water",
        description: "Place the almonds in a small glass bowl and cover them completely with filtered water. Ensure there is enough water as the almonds will swell."
      },
      {
        title: "Soak Overnight",
        description: "Cover the bowl and leave it at room temperature overnight (for at least 8 to 12 hours)."
      },
      {
        title: "Peel the Skin",
        description: "In the morning, drain the water. The almond skin will now slip off easily when pinched. Peeling the skin is crucial as it contains the phytic acid and tannins."
      },
      {
        title: "Consume on an Empty Stomach",
        description: "Eat the peeled almonds first thing in the morning on an empty stomach for maximum nutrient absorption and sustained energy."
      }
    ],
    faqs: [
      {
        q: "Why should I discard the soaking water?",
        a: "The soaking water contains the leached phytic acid and tannins from the almond skins, which are anti-nutrients. It should always be discarded."
      },
      {
        q: "Can I store soaked almonds?",
        a: "It's best to soak only what you will consume that morning. If you soak too many, you can peel them and keep them in an airtight container in the fridge for up to 2 days."
      }
    ]
  },
  {
    slug: "how-to-make-saffron-water-for-glowing-skin",
    title: "How to Make Saffron Water for Glowing Skin",
    subtitle: "A simple morning detox drink for radiant, acne-free skin.",
    productSlug: "kashmiri-saffron-mongra",
    image: "/images/saffron-vial-2g.jpg",
    prepTime: "2 mins",
    cookTime: "8 hours (Infusion)",
    servings: "1 glass",
    intro: "Saffron water is a powerful antioxidant-rich detox drink. When consumed empty stomach in the morning, the active compound crocin flushes out toxins, reduces inflammation, and naturally brightens the skin complexion from the inside out.",
    ingredients: [
      "1 glass of room-temperature filtered water",
      "3 to 4 strands of Pure Kashmiri Mongra Saffron"
    ],
    steps: [
      {
        title: "Prepare the Water",
        description: "Pour a glass of clean, filtered room-temperature water before you go to bed."
      },
      {
        title: "Add the Saffron",
        description: "Drop 3 to 4 strands of Kashmiri saffron directly into the water. Do not crush them; let them infuse slowly."
      },
      {
        title: "Overnight Infusion",
        description: "Cover the glass and leave it overnight on your nightstand or kitchen counter. During the night, the saffron will slowly release its golden pigment and antioxidants."
      },
      {
        title: "Drink in the Morning",
        description: "Wake up and drink the beautifully golden water on an empty stomach. You can swallow the saffron strands as well."
      }
    ],
    faqs: [
      {
        q: "Can I use hot water instead for a quicker infusion?",
        a: "Yes, you can steep the saffron in warm water for 20 minutes if you forget to do it overnight. However, the slow cold-infusion method preserves the delicate antioxidants better."
      },
      {
        q: "How long until I see results in my skin?",
        a: "With consistent daily use, combined with a healthy diet, most people notice a visible glow and reduction in skin dullness within 3 to 4 weeks."
      }
    ]
  },
  {
    slug: "authentic-saffron-infused-biryani-recipe",
    productSlug: "kashmiri-saffron-mongra",
    title: "Authentic Saffron Infused Biryani (Traditional Method)",
    subtitle: "The secret to restaurant-quality Biryani lies in the quality of the Saffron infusion. Here is how master chefs extract maximum flavor and color.",
    intro: "A true Biryani is judged by its aroma and the distinct golden-yellow hue of its rice grains. Using synthetic food coloring ruins the dish. Pure Kashmiri Mongra saffron imparts a deep, floral aroma and a breathtaking golden color that elevates a home-cooked meal to a royal feast. The key is in the 'blooming' process of the saffron before it is layered with the rice and meat.",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    prepTime: "25 mins",
    cookTime: "45 mins",
    servings: "4",
    ingredients: [
      "10-15 strands of pure Kashmiri Mongra Saffron",
      "3 tablespoons of warm milk (not boiling)",
      "2 cups of premium long-grain Basmati rice",
      "1 tablespoon of pure Desi Ghee",
      "Pinch of sugar (helps extract saffron color)"
    ],
    steps: [
      {
        title: "Grind the Saffron",
        description: "Place the saffron strands in a small mortar and pestle with a tiny pinch of sugar. The sugar acts as an abrasive. Gently grind the strands into a coarse powder. This breaks the cell walls and releases the crocin (color)."
      },
      {
        title: "The Warm Milk Infusion",
        description: "Pour 3 tablespoons of warm (never boiling) milk over the crushed saffron. Let it steep for at least 20 minutes. You will see the milk turn a brilliant, deep orange-gold."
      },
      {
        title: "Prepare the Rice",
        description: "Parboil your Basmati rice with whole spices (cardamom, cloves, bay leaf) until it is 70% cooked. Drain the water completely."
      },
      {
        title: "Layering (The Dum)",
        description: "As you layer your meat/vegetables and rice in a heavy-bottomed pot, drizzle the saffron-infused milk sporadically over the top layer of rice. Add a tablespoon of ghee."
      },
      {
        title: "Seal and Steam",
        description: "Seal the pot tightly with dough or foil and cook on very low heat (Dum) for 15-20 minutes. When you open it, gently fluff the rice. You will have a beautiful mix of white and golden-yellow grains."
      }
    ],
    faqs: [
      {
        q: "Why shouldn't I use boiling water to steep saffron?",
        a: "Boiling liquids instantly destroy the delicate volatile oils (safranal) that give saffron its unique floral aroma. Always use warm, but not scalding, liquids."
      },
      {
        q: "Can I use water instead of milk for the infusion?",
        a: "Yes, you can use warm water or even a splash of rose water or kewra water for an extra aromatic kick."
      }
    ]
  },
  {
    slug: "shilajit-pre-workout-drink-for-stamina",
    productSlug: "himalayan-shilajit-resin",
    title: "How to Make a Shilajit Pre-Workout Drink",
    subtitle: "Ditch the synthetic pre-workouts. Harness pure, natural cellular energy for your hardest training sessions.",
    intro: "Commercial pre-workouts rely on massive doses of caffeine to artificially spike your heart rate, invariably leading to a severe post-workout crash. Shilajit works entirely differently. By boosting ATP (adenosine triphosphate) production at the cellular level and increasing the oxygen-carrying capacity of your blood, it provides deep, sustained, natural stamina. Mixed with a few natural vasodilators, it is the ultimate athletic tonic.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    prepTime: "5 mins",
    cookTime: "N/A",
    servings: "1",
    ingredients: [
      "300mg Pure Himalayan Shilajit Resin (pea-sized)",
      "1 glass of warm water or coconut water",
      "1 teaspoon of raw honey",
      "Pinch of Himalayan pink salt (for electrolytes)",
      "Half a squeezed lemon (for Vitamin C and vasodilation)"
    ],
    steps: [
      {
        title: "Dissolve the Resin",
        description: "Take a pea-sized amount of Shilajit resin on the tip of a spoon. Stir it vigorously into a glass of warm water. Pure resin will dissolve completely, turning the water a dark, golden-brown color."
      },
      {
        title: "Add Electrolytes",
        description: "Add a pinch of Himalayan pink salt. The sodium and trace minerals combined with Shilajit's fulvic acid create an incredibly efficient hydration matrix for your muscles."
      },
      {
        title: "Flavor and Vitamin C",
        description: "Squeeze half a lemon and stir in a teaspoon of raw honey. The Vitamin C in the lemon actually helps your body absorb the ionic iron present in the Shilajit, improving oxygen transport during your workout."
      },
      {
        title: "Timing",
        description: "Consume this drink approximately 30 to 45 minutes before hitting the gym or starting your run. You will feel a clean, sustained surge of energy."
      }
    ],
    faqs: [
      {
        q: "Will this give me the 'jitters' like normal pre-workout?",
        a: "No. Shilajit contains zero stimulants. It enhances your body's natural energy production, so there are no jitters, heart palpitations, or sudden crashes."
      },
      {
        q: "Can I mix Shilajit directly into my protein shake?",
        a: "You can, but it has a very strong, earthy, bitter taste that might overpower a vanilla or fruit-flavored protein shake. It pairs best with water, coffee, or chocolate flavors."
      }
    ]
  },
  {
    slug: "almond-saffron-protein-smoothie-for-muscle-recovery",
    productSlug: "mamra-almonds-premium",
    title: "Almond & Saffron Protein Smoothie",
    subtitle: "A highly anabolic, natural post-workout shake rich in monounsaturated fats, protein, and antioxidants.",
    intro: "After an intense workout, your muscles are micro-torn and inflamed. While protein is necessary for repair, healthy fats and antioxidants are equally critical for reducing muscle soreness (DOMS). This elite smoothie utilizes the high-oil content of Mamra Almonds for sustained caloric density, and Kashmiri Saffron to drastically cut down systemic inflammation.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    prepTime: "10 mins (plus overnight soak)",
    cookTime: "N/A",
    servings: "1",
    ingredients: [
      "10-12 Kashmiri Mamra Almonds (soaked overnight and peeled)",
      "3-4 strands of Kashmiri Mongra Saffron",
      "1 ripe banana (frozen is best)",
      "1 cup of whole milk or oat milk",
      "1 scoop of your favorite vanilla or unflavored whey protein (optional)",
      "1 teaspoon of raw honey"
    ],
    steps: [
      {
        title: "Prep the Almonds",
        description: "Always soak Mamra almonds overnight and peel the brown skin. The skin contains phytic acid which blocks protein absorption. Peeling them ensures you get 100% of the nutrition."
      },
      {
        title: "Steep the Saffron",
        description: "Place the saffron strands in a tablespoon of warm milk for 10 minutes before making the smoothie. This allows the anti-inflammatory crocin to release."
      },
      {
        title: "Blend the Base",
        description: "In a high-powered blender, combine the peeled almonds, frozen banana, and a small splash of milk. Blend until the almonds are completely pulverized into a smooth, creamy paste."
      },
      {
        title: "Final Mix",
        description: "Add the rest of the milk, the steeped saffron (including the strands), protein powder, and honey. Blend on high for 30 seconds until frothy and golden."
      }
    ],
    faqs: [
      {
        q: "Why are Mamra almonds better for this than regular almonds?",
        a: "Mamra almonds contain up to 50% more almond oil and complex carbohydrates than standard California almonds, making them significantly better for post-workout glycogen replenishment and caloric density."
      },
      {
        q: "Can I use roasted almonds?",
        a: "It is not recommended. Roasting destroys the delicate Vitamin E and oxidizes the healthy fats. Raw, soaked almonds are vastly superior for muscle recovery."
      }
    ]
  },
  {
    slug: "traditional-kashmiri-harissa-with-saffron",
    productSlug: "kashmiri-saffron-mongra",
    title: "Traditional Kashmiri Harissa (Winter Meat Dish)",
    subtitle: "The ultimate slow-cooked winter comfort food from the Kashmir Valley, elevated with pure Mongra Saffron.",
    intro: "Kashmiri Harissa (not to be confused with the North African chili paste) is a legendary, slow-cooked meat porridge consumed during the harsh Himalayan winters. Made with lean mutton, rice, and an array of warming spices, it is labor-intensive but incredibly rewarding. The addition of pure saffron in the final tempering (Tarka) gives it an intoxicating aroma that warms the soul.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    prepTime: "30 mins",
    cookTime: "4-6 hours (Slow Cooker)",
    servings: "6",
    ingredients: [
      "1 kg lean mutton (bone-in for broth, but meat must be shredded later)",
      "1 cup short-grain rice (soaked)",
      "Whole spices: 4 black cardamoms, 6 green cardamoms, cinnamon stick, cloves",
      "2 tablespoons fennel powder (Saunf)",
      "1 tablespoon ginger powder (Sonth)",
      "10 strands of Kashmiri Saffron (steeped in warm milk)",
      "1/2 cup pure Desi Ghee",
      "Crispy fried shallots (Pran) for garnish"
    ],
    steps: [
      {
        title: "Prepare the Meat Broth",
        description: "In a heavy-bottomed pot or pressure cooker, boil the mutton with the whole spices, salt, and garlic until the meat is literally falling off the bone. Remove the meat, discard the bones and whole spices, and reserve the rich broth."
      },
      {
        title: "Cook the Rice and Meat",
        description: "Add the soaked rice to the boiling broth along with the fennel and ginger powders. Add the de-boned, shredded mutton back in. Cook on low heat until the rice completely breaks down and melds with the meat."
      },
      {
        title: "The Mash (Ghotna)",
        description: "This is the most critical step. Using a heavy wooden masher, vigorously mash the meat and rice mixture against the sides of the pot for 30-40 minutes until it becomes a smooth, sticky, homogeneous paste."
      },
      {
        title: "The Saffron Tempering",
        description: "In a separate small pan, heat the ghee until smoking. Pour the saffron-infused milk into the mashed Harissa, then immediately pour the boiling hot ghee over the top. It will sizzle violently. Stir it in."
      },
      {
        title: "Serve",
        description: "Serve piping hot with traditional Kashmiri bread (Girda or Lavasa) and garnish with crispy fried shallots."
      }
    ],
    faqs: [
      {
        q: "Can I use chicken instead of mutton?",
        a: "While traditional Harissa is strictly mutton, you can use chicken thighs. However, the cooking time will be drastically reduced and the flavor will be much milder."
      },
      {
        q: "Why is the mashing step so important?",
        a: "The vigorous mashing releases the starches from the rice and breaks the muscle fibers of the meat, creating the signature stretchy, paste-like consistency of authentic Harissa."
      }
    ]
  },
  {
    slug: "honey-cinnamon-detox-water-for-weight-loss",
    productSlug: "kashmiri-wildflower-honey",
    title: "Raw Honey & Cinnamon Detox Water",
    subtitle: "A potent morning ritual to kickstart your metabolism, stabilize blood sugar, and clear toxins.",
    intro: "Starting your morning with raw honey and cinnamon is an ancient Ayurvedic practice designed to ignite 'Agni' (digestive fire). While commercial, pasteurized honey acts just like sugar, raw Kashmiri Wildflower Honey contains active enzymes. When combined with Ceylon cinnamon, it helps regulate insulin spikes and provides a massive antioxidant boost to start your day.",
    image: "https://images.unsplash.com/photo-1556610056-547475f4d8a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    prepTime: "5 mins",
    cookTime: "N/A",
    servings: "1",
    ingredients: [
      "1 tablespoon of Raw Kashmiri Wildflower Honey",
      "1/2 teaspoon of high-quality Ceylon Cinnamon powder",
      "1 glass of warm (not boiling) water",
      "A squeeze of fresh lemon juice"
    ],
    steps: [
      {
        title: "Prepare the Cinnamon",
        description: "Place the cinnamon powder in your mug. Pour the warm water over it and stir well. Let it sit for 2-3 minutes so the cinnamon can infuse into the water."
      },
      {
        title: "Temperature Check",
        description: "Ensure the water has cooled down to a lukewarm temperature. This is the most crucial step."
      },
      {
        title: "Add the Raw Honey",
        description: "Stir in the raw honey and the lemon juice. The honey will easily dissolve in the warm water."
      },
      {
        title: "Consume on an Empty Stomach",
        description: "Drink this mixture first thing in the morning, at least 30 minutes before your breakfast or coffee, to maximize the metabolic effects."
      }
    ],
    faqs: [
      {
        q: "Why can't I add the honey to boiling water?",
        a: "Boiling water instantly destroys the live enzymes, beneficial bacteria, and antimicrobial properties that make raw honey a superfood. It turns it into just sweet syrup."
      },
      {
        q: "Does the type of cinnamon matter?",
        a: "Yes! Always try to use Ceylon cinnamon ('true' cinnamon) rather than Cassia cinnamon. Cassia contains high levels of coumarin, which can be toxic to the liver if consumed daily in large amounts."
      }
    ]
  },
  {
    slug: "roasted-salted-mamra-almonds-at-home",
    productSlug: "mamra-almonds-premium",
    title: "How to Roast & Salt Mamra Almonds at Home",
    subtitle: "Create the ultimate healthy, crunchy snack without destroying the delicate oils.",
    intro: "While raw, soaked almonds are best for maximum nutrient absorption, sometimes you just crave a crunchy, salty snack. Store-bought roasted almonds are often fried in cheap, inflammatory seed oils (like canola or sunflower oil) at extremely high temperatures, which oxidizes the healthy fats. Here is how you can dry-roast your premium Mamra almonds at home to get that perfect crunch while preserving their integrity.",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    prepTime: "5 mins",
    cookTime: "15 mins",
    servings: "4",
    ingredients: [
      "2 cups of raw Kashmiri Mamra Almonds",
      "1 teaspoon of extra virgin olive oil or melted ghee",
      "1 teaspoon of fine sea salt or Himalayan pink salt"
    ],
    steps: [
      {
        title: "Preheat the Oven",
        description: "Preheat your oven to a low temperature of 300°F (150°C). Roasting at a low temperature is the secret to drying them out for a crunch without burning the internal oils."
      },
      {
        title: "Coat the Almonds",
        description: "In a bowl, toss the raw almonds with the olive oil or ghee until they are very lightly coated. You just need enough oil so the salt will stick."
      },
      {
        title: "Add the Salt",
        description: "Sprinkle the fine salt over the almonds and toss them again to ensure an even coating."
      },
      {
        title: "The Slow Roast",
        description: "Spread the almonds in a single layer on a parchment-lined baking sheet. Roast for 12-15 minutes. Check them at the 10-minute mark and give the pan a shake to prevent burning."
      },
      {
        title: "Cool Completely",
        description: "Take them out of the oven. They will feel slightly soft while hot. You MUST let them cool completely on the tray for 30 minutes; this is when they harden and achieve their crunch."
      }
    ],
    faqs: [
      {
        q: "Why do my almonds taste bitter after roasting?",
        a: "Mamra almonds have a very high oil content and can burn quickly. If they taste bitter, the oven temperature was too high or they were left in too long. Always stick to low heat (300°F)."
      },
      {
        q: "Can I do this in an air fryer?",
        a: "Yes! Air fry them at 275°F (135°C) for 8 to 10 minutes, shaking the basket halfway through. Watch them closely as air fryers cook much faster."
      }
    ]
  }
];
