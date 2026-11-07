export const DEFAULT_USER_PROFILE = {
  name: "Ananya",
  currentWeight: 56.4,
  height: 160,
  goalWeight: 52,
  planDurationWeeks: 12,
  currentWeek: 3,
  dietaryPreference: "all", // "all" | "veg" | "non-veg"
  activityLevel: "Moderate (Gym 4-5x/week)",
  targetWaterMl: 2500,
  targetSleepHours: 8,
};

export const DEFAULT_DAILY_HABITS = [
  { id: "h-water", title: "Drink enough water (2.5L target)", icon: "Droplets", completed: true, category: "hydration" },
  { id: "h-breakfast", title: "Eat a nourishing breakfast", icon: "Coffee", completed: true, category: "nutrition" },
  { id: "h-balanced", title: "Eat balanced meals with rice & veggies", icon: "Utensils", completed: true, category: "nutrition" },
  { id: "h-workout", title: "Complete today's workout or recovery", icon: "Dumbbell", completed: false, category: "fitness" },
  { id: "h-protein", title: "Include protein-rich foods (eggs, dal, fish)", icon: "Egg", completed: true, category: "nutrition" },
  { id: "h-sleep", title: "Aim for 7–8 hours of restful sleep", icon: "Moon", completed: false, category: "rest" },
  { id: "h-relax", title: "Take 15 mins to unwind & relax", icon: "Sparkles", completed: true, category: "wellness" },
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
  { week: "Start", weight: 57.2, waist: 72, sleep: 7.2, energy: 3, date: "2026-10-15" },
  { week: "Wk 1", weight: 56.8, waist: 71.5, sleep: 7.5, energy: 4, date: "2026-10-22" },
  { week: "Wk 2", weight: 56.6, waist: 71.0, sleep: 7.8, energy: 4, date: "2026-10-29" },
  { week: "Wk 3", weight: 56.4, waist: 70.5, sleep: 8.0, energy: 5, date: "2026-11-05" },
];

export const INITIAL_WEEKLY_COMPLETION = [
  { day: "Mon", workout: 100, meals: 100, water: 100 },
  { day: "Tue", workout: 100, meals: 85, water: 95 },
  { day: "Wed", workout: 100, meals: 100, water: 90 },
  { day: "Thu", workout: 100, meals: 90, water: 100 },
  { day: "Fri", workout: 75, meals: 85, water: 80 },
  { day: "Sat", workout: 50, meals: 75, water: 85 },
  { day: "Sun", workout: 0, meals: 60, water: 70 },
];

export const INITIAL_PERIOD_DATA = {
  lastPeriodStart: "2026-10-28",
  lastPeriodEnd: "2026-11-01",
  cycleLengthDays: 28,
  periodLengthDays: 5,
  currentCycleDay: 11,
  currentPhase: "Follicular Phase (High Energy)",
  phaseAdvice: "Estrogen is gently rising! You'll likely feel peak strength and vitality during workouts this week. Great time to challenge your sets.",
  history: [
    {
      id: "p-1",
      startDate: "2026-08-31",
      endDate: "2026-09-04",
      cycleLength: 28,
      duration: 5,
      flow: "Medium",
      symptoms: ["Mild Cramps", "Normal Energy", "Cravings"],
      notes: "Hydrated well with jeera water; restful sleep."
    },
    {
      id: "p-2",
      startDate: "2026-09-29",
      endDate: "2026-10-03",
      cycleLength: 29,
      duration: 5,
      flow: "Heavy Day 2, Light Day 4",
      symptoms: ["Bloating", "Tired Day 1", "Backache"],
      notes: "Did gentle walking on Wed recovery day; eased lower back strain."
    },
    {
      id: "p-3",
      startDate: "2026-10-28",
      endDate: "2026-11-01",
      cycleLength: 29,
      duration: 5,
      flow: "Medium",
      symptoms: ["Mild Cramps", "Good Mood"],
      notes: "Hot water bag & turmeric milk helped immensely."
    }
  ],
  symptomOptions: [
    "Mild Cramps", "Moderate Cramps", "Low Energy", "High Energy",
    "Bloating", "Headache", "Mood Swings", "Calm & Centered",
    "Breast Tenderness", "Backache", "Sugar Cravings", "Normal Appetite"
  ]
};
