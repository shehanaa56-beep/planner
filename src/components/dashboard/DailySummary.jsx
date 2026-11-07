import React from 'react';
import {
  Scale,
  Ruler,
  Target,
  Calendar,
  Flame,
  Utensils,
  Droplets,
  TrendingDown
} from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';

export const DailySummary = () => {
  const {
    profile,
    getWeeklyWorkoutPercentage,
    getDailyMealPercentage,
    waterIntakeMl
  } = useFitness();

  const workoutPct = getWeeklyWorkoutPercentage();
  const mealPct = getDailyMealPercentage();
  const waterPct = Math.min(100, Math.round((waterIntakeMl / profile.targetWaterMl) * 100));

  // Compute BMI as a helpful non-judgmental reference
  const heightM = profile.height / 100;
  const bmi = (profile.currentWeight / (heightM * heightM)).toFixed(1);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {/* 1. Current Weight & BMI */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 relative overflow-hidden transition-all duration-200 hover:shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Current Weight</span>
          <div className="w-8 h-8 rounded-xl bg-pastel-pink-subtle flex items-center justify-center text-pastel-pink-deep">
            <Scale className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900">{profile.currentWeight}</span>
          <span className="text-sm font-semibold text-charcoal-500">kg</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-charcoal-500">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-pastel-green-light text-emerald-700 font-semibold text-[11px]">
            BMI {bmi} (Healthy)
          </span>
        </div>
      </div>

      {/* 2. Height & Goal Weight */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 relative overflow-hidden transition-all duration-200 hover:shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Height & Goal</span>
          <div className="w-8 h-8 rounded-xl bg-pastel-lavender-subtle flex items-center justify-center text-pastel-lavender-deep">
            <Target className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900">{profile.height}</span>
          <span className="text-xs font-medium text-charcoal-500">cm</span>
          <span className="text-charcoal-300">/</span>
          <span className="text-lg font-bold text-pastel-lavender-deep">{profile.goalWeight}</span>
          <span className="text-xs font-medium text-charcoal-500">kg goal</span>
        </div>
        <div className="mt-2 text-xs text-charcoal-500 flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-pastel-lavender-deep" />
          <span>{profile.planDurationWeeks}-week gentle plan</span>
        </div>
      </div>

      {/* 3. Weekly Workout Completion */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 relative overflow-hidden transition-all duration-200 hover:shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Workout Progress</span>
          <div className="w-8 h-8 rounded-xl bg-pastel-pink-subtle flex items-center justify-center text-pastel-pink-deep">
            <Flame className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900">{workoutPct}%</span>
          <span className="text-xs font-semibold text-charcoal-500">completed</span>
        </div>
        {/* Progress bar */}
        <div className="mt-2.5 w-full bg-pastel-pink-subtle rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pastel-pink to-pastel-pink-deep rounded-full transition-all duration-500"
            style={{ width: `${workoutPct}%` }}
          />
        </div>
      </div>

      {/* 4. Daily Nutrition Completion */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 relative overflow-hidden transition-all duration-200 hover:shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Today's Nutrition</span>
          <div className="w-8 h-8 rounded-xl bg-pastel-green-subtle flex items-center justify-center text-emerald-600">
            <Utensils className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900">{mealPct}%</span>
          <span className="text-xs font-semibold text-charcoal-500">meals tracked</span>
        </div>
        {/* Progress bar */}
        <div className="mt-2.5 w-full bg-pastel-green-subtle rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pastel-green to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${mealPct}%` }}
          />
        </div>
      </div>
    </div>
  );
};
