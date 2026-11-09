import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Utensils, ArrowRight } from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';

export const FitLifeActivityCards = () => {
  const navigate = useNavigate();
  const { getWeeklyWorkoutStats, getTodayMealStats } = useFitness();

  const { completedDays, percentage: workoutPct } = getWeeklyWorkoutStats
    ? getWeeklyWorkoutStats()
    : { completedDays: 0, percentage: 0 };

  const { completedCount: completedMeals, totalCount: totalMeals, percentage: mealPct } = getTodayMealStats
    ? getTodayMealStats()
    : { completedCount: 0, totalCount: 7, percentage: 0 };

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {/* 1. Weekly Workout Card */}
      <div
        onClick={() => navigate('/workouts')}
        className="cursor-pointer bg-white/95 border border-[#FFE0EB] rounded-2xl p-3.5 sm:p-4 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
      >
        <div>
          {/* Top Row: Icon + Title + Status */}
          <div className="flex items-center justify-between gap-1.5 mb-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <Dumbbell className="w-4 h-4 text-[#FF4D8D] shrink-0" />
              <span className="font-bold text-xs sm:text-[13px] text-[#2D2335] truncate">
                Weekly Workout
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#665870] shrink-0">
              {completedDays} / 6 Done
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 sm:h-2.5 bg-[#FFE2ED] rounded-full overflow-hidden my-2">
            <div
              className="h-full bg-gradient-to-r from-[#FF4D8D] to-[#F43F5E] rounded-full transition-all duration-500"
              style={{ width: `${workoutPct}%` }}
            />
          </div>
        </div>

        {/* Bottom Row: Percentage + Circle Arrow */}
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs font-bold text-[#FF4D8D]">
            {workoutPct}% Complete
          </span>
          <div className="w-6 h-6 rounded-full bg-[#FFE5EF] text-[#FF4D8D] flex items-center justify-center group-hover:bg-[#FF4D8D] group-hover:text-white transition-all shadow-2xs">
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* 2. Diet Plan Card */}
      <div
        onClick={() => navigate('/diet')}
        className="cursor-pointer bg-white/95 border border-[#D5F5E4] rounded-2xl p-3.5 sm:p-4 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
      >
        <div>
          {/* Top Row: Icon + Title + Status */}
          <div className="flex items-center justify-between gap-1.5 mb-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <Utensils className="w-4 h-4 text-[#10B981] shrink-0" />
              <span className="font-bold text-xs sm:text-[13px] text-[#2D2335] truncate">
                Diet Plan
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#665870] shrink-0">
              {completedMeals} / {totalMeals} Meals
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 sm:h-2.5 bg-[#D1FAE5] rounded-full overflow-hidden my-2">
            <div
              className="h-full bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full transition-all duration-500"
              style={{ width: `${mealPct}%` }}
            />
          </div>
        </div>

        {/* Bottom Row: Percentage + Circle Arrow */}
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs font-bold text-[#10B981]">
            {mealPct}% Complete
          </span>
          <div className="w-6 h-6 rounded-full bg-[#D1FAE5] text-[#10B981] flex items-center justify-center group-hover:bg-[#10B981] group-hover:text-white transition-all shadow-2xs">
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};
