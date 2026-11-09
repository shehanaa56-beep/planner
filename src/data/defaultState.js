export const DEFAULT_USER_PROFILE = {
  name: "Ananya",
  currentWeight: 56.4,
  height: 160,
  goalWeight: 52,
  planDurationWeeks: 12,
  currentWeek: 1,
  dietaryPreference: "all", // "all" | "veg" | "non-veg"
  activityLevel: "Moderate (Gym 4-5x/week)",
  targetWaterMl: 2500,
  targetSleepHours: 8,
  avatar: null, // base64 string or image url
};

export const DEFAULT_DAILY_HABITS = [
  { id: "h-water", title: "Drink enough water (2.5L target)", icon: "Droplets", completed: false, category: "hydration" },
  { id: "h-breakfast", title: "Eat a nourishing breakfast", icon: "Coffee", completed: false, category: "nutrition" },
  { id: "h-balanced", title: "Eat balanced meals with rice & veggies", icon: "Utensils", completed: false, category: "nutrition" },
  { id: "h-workout", title: "Complete today's workout or recovery", icon: "Dumbbell", completed: false, category: "fitness" },
  { id: "h-protein", title: "Include protein-rich foods (eggs, dal, fish)", icon: "Egg", completed: false, category: "nutrition" },
  { id: "h-sleep", title: "Aim for 7–8 hours of restful sleep", icon: "Moon", completed: false, category: "rest" },
  { id: "h-relax", title: "Take 15 mins to unwind & relax", icon: "Sparkles", completed: false, category: "wellness" },
];

export const HEALTH_GOALS_LIST = [
  { id: "g1", title: "Build Strength", desc: "Gain functional upper & lower body power through progressive training.", icon: "Dumbbell", color: "pink" },
  { id: "g2", title: "Improve Overall Fitness", desc: "Boost stamina, cardiovascular health, and day-to-day vitality.", icon: "Activity", color: "lavender" },
  { id: "g3", title: "Support Healthy Body Composition", desc: "Nourish lean muscle tone with balanced eating without crash dieting.", icon: "Sparkles", color: "blue" },
  { id: "g4", title: "Maintain Adequate Nutrition", desc: "Honor hunger cues with wholesome Kerala staples, protein, and fruits.", icon: "Apple", color: "yellow" },
  { id: "g5", title: "Support Menstrual Health", desc: "Ensure sufficient energy intake and rest to maintain regular cycles.", icon: "HeartPulse", color: "pink" },
  { id: "g6", title: "Develop Consistent Habits", desc: "Form gentle, sustainable fitness and hydration rituals that last.", icon: "CalendarCheck", color: "green" },
];

export const INITIAL_WEIGHT_HISTORY = [
  { week: "W1", weight: 56.4, waist: 70, sleep: 8.0, energy: 4, date: "2026-11-01" },
];

export const INITIAL_WEEKLY_COMPLETION = [
  { day: "Mon", workout: 0, meals: 0, water: 0 },
  { day: "Tue", workout: 0, meals: 0, water: 0 },
  { day: "Wed", workout: 0, meals: 0, water: 0 },
  { day: "Thu", workout: 0, meals: 0, water: 0 },
  { day: "Fri", workout: 0, meals: 0, water: 0 },
  { day: "Sat", workout: 0, meals: 0, water: 0 },
  { day: "Sun", workout: 0, meals: 0, water: 0 },
];

export const INITIAL_PERIOD_DATA = {
  lastPeriodStart: "2026-11-02",
  lastPeriodEnd: "2026-11-06",
  cycleLengthDays: 28,
  periodLengthDays: 5,
  currentCycleDay: 6,
  currentPhase: "Follicular Phase (Rising Energy)",
  phaseAdvice: "Estrogen is gently rising! You'll likely feel peak strength and vitality during workouts this week. Great time to challenge your sets.",
  history: [
    {
      id: "p-nov-1",
      startDate: "2026-11-02",
      endDate: "2026-11-06",
      cycleLength: 28,
      duration: 5,
      flow: "Medium",
      symptoms: ["Mild Cramps", "Normal Energy"],
      notes: "Started tracking from November onwards."
    }
  ],
  symptomOptions: [
    "Mild Cramps", "Moderate Cramps", "Low Energy", "High Energy",
    "Bloating", "Headache", "Mood Swings", "Calm & Centered",
    "Breast Tenderness", "Backache", "Sugar Cravings", "Normal Appetite"
  ]
};
