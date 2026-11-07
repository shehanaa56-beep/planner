export const MEAL_PLAN_DATA = [
  {
    id: "early-morning",
    time: "6:30 AM",
    title: "Early Morning Hydration & Wake Up",
    tagline: "Gentle digestive fire & natural hydration",
    defaultMeal: "Warm Water + Soaked Peanuts or Almonds",
    calories: "~120 kcal",
    protein: "4g",
    carbs: "3g",
    fats: "9g",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    foods: [
      { name: "Warm water (1-2 tall glasses)", notes: "Rehydrates body after 7-8 hours of sleep, stimulates digestion" },
      { name: "5-6 Soaked almonds OR handful of soaked raw peanuts", notes: "Peanuts are an affordable, nutrient-packed powerhouse rich in healthy fats, vitamin E, and magnesium" }
    ],
    affordableTip: "Soaked country peanuts (kappalandi) offer identical protein and healthy fats to almonds at a fraction of the cost!",
    vegOptions: [
      "Warm water with a pinch of jeera (cumin water) + soaked peanuts",
      "Warm water with lemon drops + soaked almonds"
    ],
    nonVegOptions: [
      "Same as standard (plant-based morning hydration)"
    ]
  },
  {
    id: "breakfast",
    time: "8:00 AM",
    title: "Nourishing Kerala Breakfast",
    tagline: "Sustained morning energy with fermented foods & protein",
    defaultMeal: "Puttu + Black Kadala Curry",
    calories: "~420 kcal",
    protein: "16g",
    carbs: "62g",
    fats: "11g",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    options: [
      {
        id: "opt-puttu",
        name: "Puttu + Black Kadala Curry",
        type: "Vegetarian",
        protein: "15g",
        description: "Steamed red or white rice puttu with spiced Kerala black chickpea curry tempered with coconut and curry leaves. Great source of sustained complex carbs and plant protein.",
        affordableNote: "Black chickpeas (kadala) are extremely affordable and shelf-stable."
      },
      {
        id: "opt-idli",
        name: "3-4 Soft Idlis + Vegetable Sambar + 1 Boiled Egg",
        type: "Non-Veg / Veg Swap",
        protein: "16g",
        description: "Naturally fermented steamed rice-lentil cakes, nutrient-rich vegetable sambar, paired with a whole boiled egg (or extra dal vadai / thick sambar for pure veg).",
        affordableNote: "Fermented batter is gentle on the stomach and promotes healthy gut flora."
      },
      {
        id: "opt-dosa",
        name: "2 Crispy Dosas + Kerala Egg Curry (or Paneer/Mushroom Curry)",
        type: "Non-Veg / Veg Swap",
        protein: "17g",
        description: "Crispy fermented dosas served with Kerala style coconut-shallot egg curry. Rich in protein and essential choline.",
        affordableNote: "Local farm eggs are one of the most cost-effective complete protein sources."
      },
      {
        id: "opt-oats",
        name: "Warm Kerala Oatmeal + Milk + Nendran Banana",
        type: "Vegetarian",
        protein: "13g",
        description: "Rolled oats simmered in cow's milk or plant milk, topped with sliced ripe Kerala banana (Nendran or Palayamkodan) and a pinch of cardamom.",
        affordableNote: "Quick 5-minute breakfast loaded with soluble beta-glucan fiber."
      }
    ],
    affordableTip: "Buy local Kerala parboiled red rice flour or make homemade fermented dosa/idli batter to cut packaged food costs by 60%.",
    vegOptions: [
      "Puttu + Black Kadala Curry",
      "Idli + Thick Sambar with mixed veggies",
      "Dosa + Sambar or Tomato Chutney + extra dal",
      "Oats + Warm Milk + Kerala Banana"
    ],
    nonVegOptions: [
      "Idli + Sambar + 1-2 Boiled Eggs",
      "Dosa + Kerala Egg Roast / Curry",
      "Appam + Light Chicken Stew"
    ]
  },
  {
    id: "mid-morning",
    time: "11:00 AM",
    title: "Mid-Morning Fresh Fruit & Fuel",
    tagline: "Vitamins, fiber & micronutrient vitality",
    defaultMeal: "Local Guava or Papaya + Roasted Nuts / Seeds",
    calories: "~160 kcal",
    protein: "3g",
    carbs: "28g",
    fats: "4g",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80",
    foods: [
      { name: "1 Local Pink Guava (Perakka) OR 1 bowl ripe Papaya", notes: "Guava has 4x more Vitamin C than oranges and costs very little at local markets" },
      { name: "Alternative: 1 Apple or seasonal fruit (water melon, pineapple, orange)", notes: "Hydrating and promotes healthy skin" },
      { name: "Handful of roasted peanuts or pumpkin seeds", notes: "Slows digestion and prevents mid-day sugar spikes" }
    ],
    affordableTip: "Fresh garden guavas and papayas are budget superfoods packed with Vitamin C and digestive enzymes.",
    vegOptions: [
      "Guava with a sprinkle of chili-salt",
      "Sweet fresh ripe papaya chunks",
      "Seasonal tender coconut water with pulp"
    ],
    nonVegOptions: [
      "Same (refreshing fruit snack)"
    ]
  },
  {
    id: "lunch",
    time: "1:00 PM",
    title: "Wholesome Balanced Kerala Thali",
    tagline: "Hearty, satisfying lunch with wholesome carbs, protein & fiber",
    defaultMeal: "Kerala Matta Rice + Fish Curry / Chicken + Cabbage Thoran + Moru Curry",
    calories: "~580 kcal",
    protein: "28g",
    carbs: "72g",
    fats: "16g",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    foods: [
      { name: "1 cup Kerala Matta Rice (Red parboiled rice)", notes: "Rich in fiber, complex carbs, and B-vitamins. Keeps blood sugar steady" },
      { name: "Traditional Kerala Sardine / Mackerel Fish Curry (or Chicken / Dal)", notes: "Mathi (sardines) and Ayala (mackerel) are incredibly affordable and packed with natural Omega-3s" },
      { name: "Vegetable Thoran (Cabbage, Beans, or Chembu/Spinach)", notes: "Lightly stir-fried with coconut, mustard seeds, and turmeric" },
      { name: "Yellow Dal / Parippu Curry with cumin", notes: "Comforting plant protein" },
      { name: "Fresh Curd (Dahi) or spiced Moru (buttermilk)", notes: "Essential probiotics for gut health and cooling effect" }
    ],
    affordableTip: "Small fish like Mathi (Sardines) and Ayala (Mackerel) are significantly more affordable than large fish, while having far higher Omega-3 fatty acids and lower mercury!",
    vegOptions: [
      "Matta Rice + Thick Parippu (Dal) + Cabbage Thoran + Moru Curry + Curd",
      "Matta Rice + Soya Chunks Curry (rich in 25g+ protein) + Beans Thoran + Papad",
      "Matta Rice + Paneer Curry or Kadala Curry + Mixed Veggie Aviyal"
    ],
    nonVegOptions: [
      "Matta Rice + Kerala Mathi / Ayala Fish Curry + Cabbage Thoran + Moru",
      "Matta Rice + Homestyle Chicken Curry + Beetroot Thoran + Curd",
      "Matta Rice + 2 Boiled Eggs Curry + Spinach Cheera Thoran + Moru"
    ]
  },
  {
    id: "evening-snack",
    time: "4:00 PM",
    title: "Traditional Evening Snack & Tea",
    tagline: "Healthy protein boost to prevent late-day fatigue",
    defaultMeal: "Boiled Green Gram (Cherupayar) + Spiced Buttermilk",
    calories: "~180 kcal",
    protein: "10g",
    carbs: "28g",
    fats: "3g",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    foods: [
      { name: "1 cup Boiled Cherupayar (Green Gram) with grated coconut", notes: "Complete clean protein, light on the stomach, highly nutritious" },
      { name: "Alternatives: Chana Sundal, Mixed Boiled Sprouts, or Roasted Chana", notes: "Crunchy, affordable protein snacks" },
      { name: "1 glass Sambharam (Spiced Buttermilk with ginger, green chili, curry leaves)", notes: "Hydrating, cooling, and gut-friendly probiotic drink" }
    ],
    affordableTip: "Green gram (Cherupayar) is a traditional Kerala staple: 1kg costs very little and provides snacks for weeks!",
    vegOptions: [
      "Boiled Cherupayar with freshly grated coconut",
      "Kadalai Sundal (stir fried black/white chickpeas)",
      "Sambharam (spiced buttermilk) + roasted peanuts"
    ],
    nonVegOptions: [
      "Boiled eggs (egg white chaat) + cup of black tea",
      "Cherupayar Sundal + Sambharam"
    ]
  },
  {
    id: "pre-workout",
    time: "5:30 PM (Pre-Gym)",
    title: "Pre-Workout Energy Fuel",
    tagline: "Quick-digesting carbohydrates for workout stamina",
    defaultMeal: "1 Ripe Banana + 1 Slice Whole Wheat Bread / Water",
    calories: "~150 kcal",
    protein: "3g",
    carbs: "34g",
    fats: "1g",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80",
    foods: [
      { name: "1 Ripe Banana (Robusta, Palayamkodan, or Poovan)", notes: "Loaded with potassium and fast-acting natural glucose to fuel muscle contraction" },
      { name: "1 Slice of bread (or 1 plain roti / dry toast)", notes: "Easy digestion, prevents feeling lightheaded or low energy during sets" },
      { name: "1-2 Glasses of fresh water", notes: "Hydrate 30-45 minutes before stepping onto the gym floor" }
    ],
    affordableTip: "Bananas are the ultimate natural pre-workout: cheap, pre-packaged by nature, and gentle on the stomach.",
    vegOptions: [
      "1 Banana + small cup of black coffee / tea",
      "1-2 Dates + 1 glass of water",
      "1 Slice of toasted bread with peanut butter"
    ],
    nonVegOptions: [
      "Same (light carb energy)"
    ]
  },
  {
    id: "dinner",
    time: "7:30 PM",
    title: "Light & Restorative Dinner",
    tagline: "Protein and micronutrients to repair muscles overnight",
    defaultMeal: "2 Soft Wheat Chapatis + Egg / Chicken / Dal + Sautéed Veggies",
    calories: "~440 kcal",
    protein: "24g",
    carbs: "48g",
    fats: "14g",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    foods: [
      { name: "2 Fresh Whole Wheat Chapatis (or 1 small cup red rice)", notes: "Provides complex carbs for serotonin production and peaceful sleep" },
      { name: "Protein Choice: 2 Eggs (omelette or curry) / Chicken Breast / Fish / Soy Chunks / Dal", notes: "Delivers essential amino acids for overnight muscle recovery" },
      { name: "Steamed or sautéed vegetables (beans, carrots, zucchini, or cucumber salad)", notes: "High volume, rich in vitamins and minerals with zero heavy bloating" }
    ],
    affordableTip: "Soya chunks (Meal Maker) pack 52% protein by weight and cost under ₹50 a box—one of the cheapest protein foods on earth!",
    vegOptions: [
      "2 Chapatis + Soya Chunks Curry + Cucumber Tomato Salad",
      "2 Chapatis + Paneer Bhurji / Curry + Dal Tadka",
      "1 cup Red Rice + Thick Parippu Curry + Sautéed Green Beans"
    ],
    nonVegOptions: [
      "2 Chapatis + Double Egg Omelette with onions & tomatoes",
      "2 Chapatis + Homestyle Pepper Chicken / Stew",
      "2 Chapatis + Pan-seared Fish with turmeric and lemon"
    ]
  },
  {
    id: "before-bed",
    time: "9:30 PM (Optional)",
    title: "Bedtime Rest & Recovery (Optional)",
    tagline: "Calming bedtime ritual for restful deep sleep",
    defaultMeal: "Warm Turmeric Milk (Golden Milk)",
    calories: "~90 kcal",
    protein: "4g",
    carbs: "6g",
    fats: "4g",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    foods: [
      { name: "1 Small cup warm milk with a pinch of turmeric and black pepper", notes: "Turmeric contains curcumin (anti-inflammatory for muscle soreness); warm milk contains tryptophan for sleep" }
    ],
    affordableTip: "Pure homestyle turmeric milk costs pennies and supports joint health after heavy workout days.",
    vegOptions: [
      "Warm cow's milk with turmeric and pinch of cardamom",
      "Warm almond / soy milk with turmeric",
      "Warm Chamomile or peppermint tea"
    ],
    nonVegOptions: [
      "Same (restorative warm drink)"
    ]
  }
];

export const DIET_PHILOSOPHY = [
  {
    title: "Keep the Rice & Healthy Fats",
    desc: "Carbohydrates provide steady workout energy and hormone production. Traditional Kerala red Matta rice and gentle coconut fats support wellness and menstrual regularity.",
    icon: "Wheat"
  },
  {
    title: "Affordable High Protein",
    desc: "You don't need expensive exotic supplements. Eggs, sardines (mathi), kadala, green gram (cherupayar), peanuts, curd, and soya chunks provide high-quality protein on a modest budget.",
    icon: "ShieldCheck"
  },
  {
    title: "No Extreme Deficits",
    desc: "Strict restrictive diets cause fatigue, cycle disruption, and hair thinning. We nourish your body with wholesome, balanced portions to build strength and consistency.",
    icon: "Heart"
  }
];
