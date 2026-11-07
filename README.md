# FitLife – Personal Fitness & Nutrition Planner 🌸

A modern, feminine, fully responsive **React fitness and nutrition web application** built with Vite, Tailwind CSS, Lucide icons, and Recharts. FitLife acts as a personal fitness coach and nutrition companion, guiding users through a balanced 12-week journey with wholesome Kerala foods, structured gym routines, habit tracking, and cycle-aware wellness.

---

## 🎨 Pastel Color Theme
Crafted with a soft, empowering pastel palette:
- **Soft Pink** (`#F4A7C3`) – Primary brand accents, action badges, and workout highlights
- **Lavender** (`#C8B6F0`) – Secondary accents, milestones, and mindful moments
- **Sky Blue** (`#BAE6FD` / `#38BDF8`) – Hydration tracking and recovery metrics
- **Pastel Yellow** (`#FEF08A`) – Energy indicators and sunshine reminders
- **Mint Green** (`#B8E6D0` / `#34D399`) – Nutrition progress and completion checkmarks
- **Background** (`#FFF7FA`) – Very light delicate pink background
- **Cards** – Modern glassmorphism with subtle borders and shadows
- **Text** (`#292536`) – Dark charcoal for readability

---

## 🚀 Key Features

### 1. Dashboard (Home)
- **Personalized Banner:** Warm welcome message ("Your Healthy Journey Starts Here!"), active week indicator, and inspirational fitness imagery.
- **Key Metrics Overview:** Current Weight (**56.4 kg**), Height (**160 cm**), Goal Weight (**52 kg**), 12-week plan duration, and healthy BMI indicator.
- **Interactive Water Tracker:** 2500 ml daily goal with clickable water glasses (250 ml each), quick add (+250 ml, +500 ml), decrement, and reset controls.
- **Today's Workout Preview:** Quick day selector pills (Mon–Sun), exercise checklist, and direct completion toggle.
- **Today's Meals Preview:** Highlights affordable Kerala dishes with calorie and protein tags.
- **Weekly Progress Chart:** Responsive Recharts bar chart comparing workouts, meals, and water adherence across all 7 days.
- **Health-Focused Goals:** Strength building, overall fitness, healthy body composition, adequate nutrition, menstrual health, and consistent habits without extreme deficits.
- **Daily Habits Checklist:** 7 micro-habits with celebration confetti upon completion.

### 2. Weekly Gym Workout Planner
Complete structured weekly split with exercise cards, target muscle groups, beginner instructions, rest timers, and completion tracking:
- **Monday:** Chest & Triceps (*Chest Press 3×12, Incline Dumbbell Press 3×12, Triceps Pushdown 3×12, Overhead Triceps Extension 3×12*)
- **Tuesday:** Back & Biceps (*Lat Pulldown 3×12, Seated Cable Row 3×12, Dumbbell Bicep Curl 3×12, Hammer Curl 3×12*)
- **Wednesday:** Recovery Day (*Gentle walking 20-30 min, full-body stretching, hip & spine mobility*)
- **Thursday:** Shoulders (*Dumbbell Shoulder Press 3×12, Lateral Raises 3×12, Front Raises 3×12, Face Pulls 3×12*)
- **Friday:** Legs & Glutes (*Squats 3×12, Walking Lunges 3×10/leg, Leg Press 3×12, Calf Raises 3×15*)
- **Saturday:** Gentle Core & Mobility (*Bird Dog 3×10, Dead Bug 3×10, Plank 3×20s, Gentle stretching*)
- **Sunday:** Rest Day (*Optional morning outdoor walk 20-40 min, relaxation & recovery*)
- **Rest Timer:** Interactive 60s & 90s countdown timer.
- **Safety Reminder:** Guidance to reduce intensity when feeling unusually tired, weak, or dizzy.

### 3. Daily Diet Planner – Affordable Kerala Food
Wholesome, budget-friendly Kerala and Indian meal plans with real food imagery, timings, macros, and vegetarian/non-vegetarian swaps:
- **6:30 AM (Early Morning):** Warm water + soaked almonds or affordable peanuts.
- **8:00 AM (Breakfast):** Interactive choices between *Puttu + Kadala Curry*, *Idli + Sambar + Egg*, *Dosa + Egg Curry*, or *Oats + Milk + Banana*.
- **11:00 AM (Mid-Morning):** Pink guava, papaya, apple, or seasonal fruits + handful of nuts.
- **1:00 PM (Lunch):** Kerala Matta rice, fish curry (Sardine/Mackerel) or chicken/dal, cabbage/beans thoran, curd, and moru.
- **4:00 PM (Evening Snack):** Boiled green gram (cherupayar) with grated coconut, sundal, sprouts, or spiced buttermilk (sambharam).
- **5:30 PM (Pre-Workout):** Banana, bread slice, and water.
- **7:30 PM (Dinner):** 2 whole wheat chapatis or red rice, egg/fish/chicken/soya chunks/dal, and sautéed veggies.
- **9:30 PM (Bedtime):** Warm turmeric milk.
- **Diet Philosophy:** Keeps rice and healthy fats; avoids extreme calorie deficits.

### 4. Exercise Library
- Filterable reference library by muscle group (**Chest, Back, Shoulders, Arms, Legs & Glutes, Core, Stretching & Mobility**).
- Real-time search by exercise name or target muscle.
- Interactive modal with step-by-step beginner form guides, coach tips, equipment needed, and common mistakes to avoid.

### 5. 12-Week Fitness Journey
Interactive phased roadmap:
- **Phase 1 (Weeks 1–4): Foundation:** Form mastery, consistency, regular meals, and recovery rituals.
- **Phase 2 (Weeks 5–8): Strength & Consistency:** Progressive overload, energy monitoring, and protein consistency.
- **Phase 3 (Weeks 9–12): Sustainable Fitness:** Long-term habits, posture alignment, and graduation celebration.
- Interactive week selector allowing users to mark active weeks.

### 6. Body & Wellness Tracker
- Weekly log for weight, waist measurement, average sleep hours, and self-rated energy level (1–5).
- Clean interactive Recharts:
  - *Body Composition Trend* (Weight & Waist curves)
  - *Recovery & Sleep Area Chart*
- Historical measurement table.
- Encouraging disclaimer: Daily weight fluctuations are normal water/glycogen shifts, not fat gain/loss.

### 7. Menstrual Health Tracker
- Log start date, end date, flow (light, medium, heavy), and symptom tags.
- Cycle history logs with past durations and notes.
- Cycle phase insights (*Menstrual, Follicular, Ovulatory, Luteal*) with exercise modification advice.
- Prominently displays the exact medical disclaimer:
  > *"Your health comes first. Adequate nutrition, sufficient recovery, and balanced exercise are important for menstrual health. Persistent changes in your cycle should be discussed with a healthcare professional."*

### 8. Settings & Profile
- Edit user profile (Name, Current Weight, Height, Goal Weight, Target Water, Target Sleep, Dietary Preference).
- Data reset with confirmation modal.
- Automatic LocalStorage persistence across all sessions.

---

## 🛠 Project Structure

```
planner/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── Banner.jsx
│   │   │   ├── DailyHabitsCard.jsx
│   │   │   ├── DailySummary.jsx
│   │   │   ├── HealthGoalsCard.jsx
│   │   │   ├── ProgressOverviewChart.jsx
│   │   │   ├── TodayMealCard.jsx
│   │   │   ├── TodayWorkoutCard.jsx
│   │   │   └── WaterTracker.jsx
│   │   └── layout/
│   │       ├── Footer.jsx
│   │       ├── MobileNav.jsx
│   │       ├── Sidebar.jsx
│   │       └── TopHeader.jsx
│   ├── context/
│   │   └── FitnessContext.jsx      # Global state + LocalStorage persistence
│   ├── data/
│   │   ├── defaultState.js         # Initial mock profiles, goals, habits, logs
│   │   ├── dietPlan.js             # Kerala food meals, timings, macros & swaps
│   │   ├── exerciseLibrary.js      # Form guides, instructions & mistakes
│   │   ├── phasesPlan.js           # 12-week phases & weekly milestones
│   │   └── workoutPlan.js          # Full Mon-Sun gym split & exercises
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── DietPlanner.jsx
│   │   ├── ExerciseLibrary.jsx
│   │   ├── PeriodTracker.jsx
│   │   ├── ProgressTracker.jsx
│   │   ├── Settings.jsx
│   │   ├── TwelveWeekJourney.jsx
│   │   └── WorkoutPlanner.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 How to Run Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Preview Production Build:**
   ```bash
   npm run preview
   ```
