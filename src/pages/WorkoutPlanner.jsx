import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Save,
  Plus,
  Trash2,
  Sparkles
} from 'lucide-react';
import { useFitness } from '../context/FitnessContext';
import { WEEKLY_WORKOUT_SCHEDULE, DAYS_ORDER } from '../data/workoutPlan';

const STORAGE_CUSTOM_WORKOUTS = 'fitlife_custom_workout_titles';
const STORAGE_CUSTOM_EXERCISES = 'fitlife_custom_exercises';

export const WorkoutPlanner = () => {
  const {
    selectedDay,
    setSelectedDay,
    workoutCompletion,
    toggleExercise,
    getDayWorkoutPercentage,
    getWeeklyWorkoutPercentage
  } = useFitness();

  // Custom Workout Titles per day (e.g. Chest + Triceps, Legs, etc.)
  const [customTitles, setCustomTitles] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_CUSTOM_WORKOUTS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      monday: "Chest + Triceps",
      tuesday: "Back + Biceps",
      wednesday: "Abs + Core",
      thursday: "Shoulders",
      friday: "Legs + Glutes",
      saturday: "Full Body + Abs",
      sunday: "Rest & Recovery"
    };
  });

  // Custom Exercise Lists per day
  const [customExercises, setCustomExercises] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_CUSTOM_EXERCISES);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    const initial = {};
    DAYS_ORDER.forEach(day => {
      initial[day] = WEEKLY_WORKOUT_SCHEDULE[day]?.exercises || [];
    });
    return initial;
  });

  const [currentTitleInput, setCurrentTitleInput] = useState(
    customTitles[selectedDay] || WEEKLY_WORKOUT_SCHEDULE[selectedDay]?.title || ""
  );
  const [showSavedBadge, setShowSavedBadge] = useState(false);

  // New exercise quick input
  const [newExName, setNewExName] = useState("");
  const [newExReps, setNewExReps] = useState("3 × 12");

  useEffect(() => {
    setCurrentTitleInput(
      customTitles[selectedDay] || WEEKLY_WORKOUT_SCHEDULE[selectedDay]?.title || ""
    );
    setShowSavedBadge(false);
  }, [selectedDay, customTitles]);

  const handleSaveTitle = (e) => {
    if (e) e.preventDefault();
    const updated = { ...customTitles, [selectedDay]: currentTitleInput.trim() || "Workout" };
    setCustomTitles(updated);
    localStorage.setItem(STORAGE_CUSTOM_WORKOUTS, JSON.stringify(updated));
    setShowSavedBadge(true);
    setTimeout(() => setShowSavedBadge(false), 2000);
  };

  const handleAddExercise = (e) => {
    e.preventDefault();
    if (!newExName.trim()) return;

    const newExercise = {
      id: `custom-${Date.now()}`,
      name: newExName.trim(),
      sets: 3,
      reps: newExReps.trim() || "3 × 12",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=200&q=80",
    };

    const updatedList = [...(customExercises[selectedDay] || []), newExercise];
    const updatedAll = { ...customExercises, [selectedDay]: updatedList };
    setCustomExercises(updatedAll);
    localStorage.setItem(STORAGE_CUSTOM_EXERCISES, JSON.stringify(updatedAll));
    setNewExName("");
    setNewExReps("3 × 12");
  };

  const handleDeleteExercise = (exId) => {
    const filtered = (customExercises[selectedDay] || []).filter(ex => ex.id !== exId);
    const updatedAll = { ...customExercises, [selectedDay]: filtered };
    setCustomExercises(updatedAll);
    localStorage.setItem(STORAGE_CUSTOM_EXERCISES, JSON.stringify(updatedAll));
  };

  const dayProgress = workoutCompletion[selectedDay] || {};
  const dayPct = getDayWorkoutPercentage(selectedDay);
  const weeklyPct = getWeeklyWorkoutPercentage();
  const currentWorkoutList = customExercises[selectedDay] || WEEKLY_WORKOUT_SCHEDULE[selectedDay]?.exercises || [];

  return (
    <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-200 text-[#2D2335] max-w-md mx-auto">
      {/* 1. Simple Summary Card */}
      <div className="bg-gradient-to-r from-[#FFEBF3] via-[#FFF1F6] to-[#FFEFE6] rounded-2xl p-3.5 border border-pink-100 flex items-center justify-between shadow-2xs">
        <div>
          <h1 className="font-extrabold text-base sm:text-lg text-[#2D2335] leading-tight">
            Weekly Workout
          </h1>
          <p className="text-xs text-[#7A6B80] font-medium">
            Tap to tick what you completed
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-pink-200 text-[#FF4D8D] font-bold text-xs shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{weeklyPct}% Done</span>
        </div>
      </div>

      {/* 2. Days Selector (Mon, Tue, Wed, Thu, Fri, Sat, Sun) */}
      <div className="grid grid-cols-7 gap-1">
        {DAYS_ORDER.map((dayKey) => {
          const isSelected = selectedDay === dayKey;
          const dayNameShort = dayKey.slice(0, 3).toUpperCase();
          const pct = getDayWorkoutPercentage(dayKey);
          const isComplete = pct === 100;

          return (
            <button
              key={dayKey}
              onClick={() => setSelectedDay(dayKey)}
              className={`py-2 px-0.5 rounded-xl text-center transition-all ${
                isSelected
                  ? 'bg-[#FF4D8D] text-white shadow-xs font-bold scale-102'
                  : isComplete
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold'
                  : 'bg-white hover:bg-pink-50 text-charcoal-700 border border-gray-100'
              }`}
            >
              <div className="text-[11px] leading-tight">{dayNameShort}</div>
              <div className="text-[10px] mt-0.5">
                {isComplete ? '✓' : `${pct}%`}
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. Type Your Workout & Save */}
      <form
        onSubmit={handleSaveTitle}
        className="bg-white rounded-2xl p-3 border border-pink-100 shadow-2xs flex items-center justify-between gap-2.5"
      >
        <div className="flex-1 min-w-0">
          <label className="text-[10px] font-bold uppercase tracking-wider text-[#9E90A6] block">
            {selectedDay.toUpperCase()} WORKOUT
          </label>
          <input
            type="text"
            value={currentTitleInput}
            onChange={(e) => setCurrentTitleInput(e.target.value)}
            placeholder="Type your workout (e.g. Chest, Legs)..."
            className="w-full text-sm font-bold text-[#2D2335] bg-transparent focus:outline-none border-b border-gray-200 focus:border-[#FF4D8D] py-0.5 transition-colors placeholder:text-gray-300"
          />
        </div>

        <button
          type="submit"
          className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF4D8D] to-[#F43F5E] text-white font-bold text-xs shadow-xs hover:shadow-md active:scale-95 transition-all"
        >
          <Save className="w-3.5 h-3.5" />
          <span>{showSavedBadge ? 'Saved! ✓' : 'Save'}</span>
        </button>
      </form>

      {/* 4. Exercises List (Compact Fixed Thumbnails + Ticking Checkbox) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-[#2D2335] uppercase tracking-wider">
            Exercises ({currentWorkoutList.length})
          </span>
          <span className="text-xs font-bold text-[#FF4D8D]">
            {dayPct}% Completed
          </span>
        </div>

        {currentWorkoutList.map((exercise) => {
          const isCompleted = !!dayProgress[exercise.id];

          return (
            <div
              key={exercise.id}
              onClick={() => toggleExercise(selectedDay, exercise.id)}
              className={`cursor-pointer rounded-2xl p-2.5 sm:p-3 border transition-all flex items-center justify-between gap-3 shadow-2xs group ${
                isCompleted
                  ? 'bg-emerald-50/70 border-emerald-200 text-charcoal-700'
                  : 'bg-white hover:bg-pink-50/20 border-gray-100 text-charcoal-900'
              }`}
            >
              {/* Thumbnail + Name */}
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                {/* Fixed Dimension Thumbnail (Strict 52x52px) */}
                <div
                  className="rounded-xl overflow-hidden shrink-0 border border-gray-100 shadow-2xs relative bg-gray-50"
                  style={{ width: '52px', height: '52px', minWidth: '52px', minHeight: '52px', maxWidth: '52px', maxHeight: '52px' }}
                >
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {isCompleted && (
                    <div className="absolute inset-0 bg-emerald-500/25 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white drop-shadow-sm" />
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className={`font-bold text-sm leading-tight truncate ${isCompleted ? 'line-through text-gray-400' : 'text-[#2D2335]'}`}>
                    {exercise.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-pink-100/70 text-[#FF4D8D]">
                      {exercise.reps || "3 × 12"}
                    </span>
                    {isCompleted && (
                      <span className="text-[10px] font-bold text-emerald-600">
                        ✓ Done
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Tick Checkbox Button */}
              <div className="flex items-center gap-1.5 shrink-0">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isCompleted
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'border-2 border-gray-300 text-transparent group-hover:border-[#FF4D8D]'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                {exercise.id.startsWith('custom-') && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteExercise(exercise.id);
                    }}
                    className="p-1 rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Quick Add Exercise (Type & Add) */}
      <form
        onSubmit={handleAddExercise}
        className="bg-white/80 rounded-2xl p-2.5 border border-dashed border-pink-200 flex items-center gap-2"
      >
        <input
          type="text"
          value={newExName}
          onChange={(e) => setNewExName(e.target.value)}
          placeholder="+ Type another exercise..."
          className="flex-1 text-xs font-semibold text-[#2D2335] bg-transparent focus:outline-none placeholder:text-gray-400"
        />
        <input
          type="text"
          value={newExReps}
          onChange={(e) => setNewExReps(e.target.value)}
          placeholder="3 × 12"
          className="w-16 text-center text-xs font-bold text-[#FF4D8D] bg-pink-50 rounded-lg py-1 px-1 border border-pink-200 focus:outline-none"
        />
        <button
          type="submit"
          className="px-3 py-1.5 rounded-xl bg-[#2D2335] text-white font-bold text-xs hover:bg-black transition-all shrink-0 flex items-center gap-1"
        >
          <Plus className="w-3 h-3" />
          <span>Add</span>
        </button>
      </form>
    </div>
  );
};
