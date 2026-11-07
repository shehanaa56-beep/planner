import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Droplets,
  Dumbbell,
  Heart,
  Calendar,
  Flame
} from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';

export const TopHeader = () => {
  const { profile, waterIntakeMl, getWeeklyWorkoutPercentage } = useFitness();
  const location = useLocation();
  const navigate = useNavigate();

  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  const workoutPct = getWeeklyWorkoutPercentage();
  const waterPct = Math.min(100, Math.round((waterIntakeMl / profile.targetWaterMl) * 100));

  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur-md border-b border-pastel-pink/15 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Mobile Brand & Welcome / Page Title */}
        <div className="flex items-center gap-3">
          <div className="lg:hidden flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pastel-pink to-pastel-lavender flex items-center justify-center shadow-xs">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-display font-bold text-lg text-charcoal-900">FitLife</span>
          </div>

          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-pastel-pink-deep" />
              <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">{formattedDate}</span>
              <span className="text-xs text-charcoal-300">•</span>
              <span className="text-xs font-semibold text-pastel-lavender-deep">Week {profile.currentWeek} of 12</span>
            </div>
          </div>
        </div>

        {/* Right: Quick glance wellness pills */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Water Pill */}
          <div
            onClick={() => navigate('/progress')}
            className="cursor-pointer flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-pastel-blue-light border border-pastel-blue/40 text-charcoal-800 text-xs font-medium hover:bg-pastel-blue-subtle transition-colors shadow-2xs"
            title="Today's Water Intake"
          >
            <Droplets className="w-3.5 h-3.5 text-sky-500 fill-sky-400" />
            <span className="hidden xs:inline text-charcoal-600">Water:</span>
            <span className="font-bold text-charcoal-900">{waterIntakeMl} ml</span>
            <span className="text-[10px] text-sky-600 font-semibold">({waterPct}%)</span>
          </div>

          {/* Quick Workout completion pill */}
          <div
            onClick={() => navigate('/workouts')}
            className="cursor-pointer flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-pastel-pink-light border border-pastel-pink/40 text-charcoal-800 text-xs font-medium hover:bg-pastel-pink-subtle transition-colors shadow-2xs"
            title="Weekly Workout Progress"
          >
            <Flame className="w-3.5 h-3.5 text-pastel-pink-deep fill-pastel-pink" />
            <span className="hidden xs:inline text-charcoal-600">Weekly:</span>
            <span className="font-bold text-charcoal-900">{workoutPct}%</span>
          </div>

          {/* User Avatar badge */}
          <div
            onClick={() => navigate('/settings')}
            className="cursor-pointer w-8 h-8 rounded-full bg-gradient-to-tr from-pastel-pink to-pastel-lavender flex items-center justify-center text-white font-bold text-xs ring-2 ring-white shadow-xs"
            title="Profile Settings"
          >
            {profile.name ? profile.name[0] : 'A'}
          </div>
        </div>
      </div>
    </header>
  );
};
