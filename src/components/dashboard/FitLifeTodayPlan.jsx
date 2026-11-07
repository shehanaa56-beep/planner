import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

export const FitLifeTodayPlan = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center text-[#FF4D8D]">
            <Calendar className="w-5 h-5 stroke-[2.4]" />
          </div>
          <h3 className="font-bold text-sm sm:text-base text-[#2D2335]">
            Today's Plan
          </h3>
        </div>

        <button
          onClick={() => navigate('/workouts')}
          className="text-xs font-bold text-[#8B5CF6] hover:text-[#FF4D8D] transition-colors inline-flex items-center gap-1 group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Two Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Card 1: Gym Workout */}
        <div
          onClick={() => navigate('/workouts')}
          className="cursor-pointer bg-gradient-to-r from-[#FFF5F8] to-[#FCF8FF] border border-[#FFDFEC] rounded-2xl p-3 flex items-center justify-between gap-3 hover:shadow-xs hover:border-pink-200 transition-all group"
        >
          {/* Left Thumbnail Image */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 shadow-2xs border border-white">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=300&q=80"
              alt="Gym Workout"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Middle Details */}
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-sm text-[#2D2335] leading-tight truncate">
              Gym Workout
            </h4>
            <p className="text-xs text-[#7A6B80] mt-0.5 truncate">
              Chest & Triceps
            </p>
            <p className="text-xs font-bold text-[#FF4D8D] mt-1">
              3 sets × 12 reps
            </p>
          </div>

          {/* Right Arrow Circle Button */}
          <div className="w-7 h-7 rounded-full bg-white border border-pink-200 text-[#FF4D8D] flex items-center justify-center shrink-0 group-hover:bg-[#FF4D8D] group-hover:text-white transition-all shadow-2xs">
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Card 2: Meal Plan */}
        <div
          onClick={() => navigate('/diet')}
          className="cursor-pointer bg-gradient-to-r from-[#F8F5FF] to-[#FAF8FF] border border-[#E9E0FF] rounded-2xl p-3 flex items-center justify-between gap-3 hover:shadow-xs hover:border-purple-200 transition-all group"
        >
          {/* Middle/Left Details */}
          <div className="flex-1 min-w-0 pl-1">
            <h4 className="font-bold text-sm text-[#2D2335] leading-tight truncate">
              Meal Plan
            </h4>
            <p className="text-xs text-[#7A6B80] mt-0.5 truncate">
              Healthy & Balanced
            </p>
            <p className="text-xs font-bold text-[#8B5CF6] mt-1">
              7 Meals Today
            </p>
          </div>

          {/* Right Thumbnail Image + Circular Arrow */}
          <div className="relative flex items-center gap-2 shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shadow-2xs border border-white">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80"
                alt="Healthy Meal Plan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-7 h-7 rounded-full bg-white border border-purple-200 text-[#8B5CF6] flex items-center justify-center shrink-0 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all shadow-2xs">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
