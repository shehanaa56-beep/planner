import React, { useState } from 'react';
import { CheckCircle2, Circle, Save, Sparkles, Calendar, Utensils } from 'lucide-react';
import { useFitness } from '../context/FitnessContext';
import { DAYS_ORDER } from '../data/workoutPlan';

const STORAGE_DIET_DAY_TICKS = 'fitlife_diet_day_ticks';
const STORAGE_CUSTOM_FOOD_NAMES = 'fitlife_custom_food_names';

const DEFAULT_MEALS = [
  { id: 'early-morning', name: 'Early Morning', time: '6:30 AM', defaultFood: '1 glass warm water + 5 soaked almonds', icon: '💧' },
  { id: 'breakfast', name: 'Breakfast', time: '8:30 AM', defaultFood: 'Puttu + kadala / Idli + sambar / Oats', icon: '🥞' },
  { id: 'mid-morning', name: 'Morning Snack', time: '11:00 AM', defaultFood: 'Guava, papaya or apple + nuts', icon: '🍎' },
  { id: 'lunch', name: 'Lunch', time: '1:30 PM', defaultFood: 'Rice + Fish/Chicken + Veg thoran + Dal', icon: '🍛' },
  { id: 'evening-snack', name: 'Evening Snack', time: '4:30 PM', defaultFood: 'Boiled green gram / Sprouts + Buttermilk', icon: '🥗' },
  { id: 'dinner', name: 'Dinner', time: '8:00 PM', defaultFood: '2 Chapati or Rice + Egg/Fish/Chicken + Veg', icon: '🍲' },
  { id: 'before-bed', name: 'Before Bed', time: '9:30 PM', defaultFood: 'Warm turmeric milk (optional)', icon: '🥛' }
];

export const DietPlanner = () => {
  const { selectedDay, setSelectedDay } = useFitness();

  // Day-wise ticking state: { [dayKey]: { [mealId]: boolean } }
  const [dayTicks, setDayTicks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_DIET_DAY_TICKS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {};
  });

  // Custom food names if user typed what they ate
  const [customFoods, setCustomFoods] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_CUSTOM_FOOD_NAMES);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {};
  });

  const [editingMealId, setEditingMealId] = useState(null);
  const [editInput, setEditInput] = useState('');

  // Toggle meal tick for the selected day
  const toggleMealTick = (mealId) => {
    setDayTicks(prev => {
      const dayMeals = prev[selectedDay] || {};
      const updated = {
        ...prev,
        [selectedDay]: {
          ...dayMeals,
          [mealId]: !dayMeals[mealId]
        }
      };
      localStorage.setItem(STORAGE_DIET_DAY_TICKS, JSON.stringify(updated));
      return updated;
    });
  };

  // Start editing what they ate
  const handleStartEdit = (mealId, currentText) => {
    setEditingMealId(mealId);
    setEditInput(customFoods[mealId] || currentText);
  };

  // Save typed food name
  const handleSaveFood = (mealId) => {
    const updated = { ...customFoods, [mealId]: editInput.trim() };
    setCustomFoods(updated);
    localStorage.setItem(STORAGE_CUSTOM_FOOD_NAMES, JSON.stringify(updated));
    setEditingMealId(null);
  };

  const currentDayTicks = dayTicks[selectedDay] || {};
  const completedCount = DEFAULT_MEALS.filter(m => !!currentDayTicks[m.id]).length;
  const pct = Math.round((completedCount / DEFAULT_MEALS.length) * 100);

  // Formatted date
  const todayFormatted = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="space-y-4 animate-in fade-in duration-200 text-[#2D2335]">
      {/* 1. Day & Date Header (Clean & Minimal) */}
      <div className="bg-gradient-to-r from-[#E8F8EE] via-[#F3FBF6] to-[#FFEBF2] rounded-2xl p-4 border border-emerald-100 flex items-center justify-between shadow-2xs">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
            <Calendar className="w-3.5 h-3.5" />
            <span className="capitalize">{todayFormatted}</span>
          </div>
          <h1 className="font-extrabold text-lg sm:text-xl text-[#2D2335] mt-0.5 leading-tight">
            Diet Tracker
          </h1>
          <p className="text-xs text-[#7A6B80] font-medium">
            Tap to tick your meals
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-emerald-200 text-emerald-600 font-bold text-xs shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{completedCount} / {DEFAULT_MEALS.length} Ticked ({pct}%)</span>
        </div>
      </div>

      {/* 2. Days Selector (Mon, Tue, Wed, Thu, Fri, Sat, Sun) */}
      <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
        {DAYS_ORDER.map((dayKey) => {
          const isSelected = selectedDay === dayKey;
          const dayNameShort = dayKey.slice(0, 3).toUpperCase();
          const dayData = dayTicks[dayKey] || {};
          const count = DEFAULT_MEALS.filter(m => !!dayData[m.id]).length;
          const isAllDone = count === DEFAULT_MEALS.length;

          return (
            <button
              key={dayKey}
              onClick={() => setSelectedDay(dayKey)}
              className={`py-2 px-1 rounded-xl text-center transition-all ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-xs font-bold scale-102'
                  : isAllDone
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold'
                  : 'bg-white hover:bg-emerald-50 text-charcoal-700 border border-gray-100'
              }`}
            >
              <div className="text-[11px] leading-tight">{dayNameShort}</div>
              <div className="text-[10px] mt-0.5">
                {isAllDone ? '✓' : `${count}/${DEFAULT_MEALS.length}`}
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. Meals List (Breakfast, Snack, Lunch, etc. with Simple Ticking) */}
      <div className="space-y-2.5">
        {DEFAULT_MEALS.map((meal) => {
          const isCompleted = !!currentDayTicks[meal.id];
          const foodText = customFoods[meal.id] || meal.defaultFood;
          const isEditing = editingMealId === meal.id;

          return (
            <div
              key={meal.id}
              onClick={() => !isEditing && toggleMealTick(meal.id)}
              className={`cursor-pointer rounded-2xl p-3 sm:p-3.5 border transition-all flex items-center justify-between gap-3 shadow-2xs group ${
                isCompleted
                  ? 'bg-emerald-50/70 border-emerald-200 text-charcoal-700'
                  : 'bg-white hover:bg-emerald-50/20 border-gray-100 text-charcoal-900'
              }`}
            >
              {/* Left: Icon + Meal Name + Food */}
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <span className="text-xl sm:text-2xl shrink-0 select-none">
                  {meal.icon}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-bold text-sm leading-tight ${isCompleted ? 'line-through text-gray-400' : 'text-[#2D2335]'}`}>
                      {meal.name}
                    </h3>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                      {meal.time}
                    </span>
                  </div>

                  {/* Food Item (Click to edit/type) */}
                  {isEditing ? (
                    <div
                      className="flex items-center gap-1.5 mt-1.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="text"
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                        placeholder="Type what you ate..."
                        className="text-xs font-semibold text-[#2D2335] border border-emerald-300 rounded-lg px-2 py-1 w-full bg-white focus:outline-none"
                        autoFocus
                        onKeyDown={(e) => e.key === 'Enter' && handleSaveFood(meal.id)}
                      />
                      <button
                        type="button"
                        onClick={() => handleSaveFood(meal.id)}
                        className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-[11px] font-bold hover:bg-emerald-700 shrink-0"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <p
                      className="text-xs text-[#7A6B80] mt-0.5 truncate hover:text-[#2D2335] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStartEdit(meal.id, foodText);
                      }}
                      title="Tap to change what you ate"
                    >
                      {foodText}
                    </p>
                  )}
                </div>
              </div>

              {/* Right: Big Ticking Checkbox */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isCompleted
                    ? 'bg-emerald-500 text-white shadow-xs'
                    : 'border-2 border-gray-300 text-transparent group-hover:border-emerald-500'
                }`}
              >
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
