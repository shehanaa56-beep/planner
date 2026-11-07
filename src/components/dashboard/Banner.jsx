import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Heart, ArrowRight, Dumbbell, Sun } from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';
import { WEEKLY_WORKOUT_SCHEDULE } from '../../data/workoutPlan';

export const Banner = () => {
  const { profile, selectedDay } = useFitness();
  const navigate = useNavigate();
  const todayWorkout = WEEKLY_WORKOUT_SCHEDULE[selectedDay] || WEEKLY_WORKOUT_SCHEDULE.monday;

  return (
    <div className="relative overflow-hidden rounded-3xl gradient-pastel-banner p-6 sm:p-8 border border-white/80 shadow-soft">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 rounded-full bg-pastel-pink/20 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-20 -mb-10 w-56 h-56 rounded-full bg-pastel-lavender/30 blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-pastel-blue/20 blur-xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-pastel-pink/30 text-pastel-pink-deep text-xs font-semibold mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 fill-pastel-pink" />
            <span>Week {profile.currentWeek} of {profile.planDurationWeeks} • Empowered & Balanced</span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900 tracking-tight leading-snug">
            Your Healthy Journey <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink-deep via-purple-600 to-sky-600">
              Starts Here!
            </span>
          </h1>

          <p className="mt-2.5 text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Welcome back, <strong className="text-charcoal-800 font-semibold">{profile.name}</strong>. Today is dedicated to honoring your body, building strength with intention, and nourishing yourself with wholesome foods.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('/workouts')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-charcoal-900 text-white text-xs sm:text-sm font-semibold hover:bg-charcoal-800 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Dumbbell className="w-4 h-4 text-pastel-pink" />
              <span>Today's Workout: {todayWorkout.title}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => navigate('/diet')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/90 text-charcoal-800 text-xs sm:text-sm font-semibold hover:bg-white transition-all border border-pastel-lavender/40 shadow-xs hover:shadow-sm"
            >
              <Sun className="w-4 h-4 text-amber-500" />
              <span>View Meal Plan</span>
            </button>
          </div>
        </div>

        {/* Fitness & Wellness Illustration Art */}
        <div className="relative self-center md:self-auto shrink-0">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-white/60 backdrop-blur-md p-3 border border-white shadow-soft flex items-center justify-center relative group">
            {/* Soft decorative elements inside card */}
            <div className="absolute inset-3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
                alt="Fitness Wellness"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-pastel-pink/30 shadow-md flex items-center gap-2 animate-float">
              <div className="w-6 h-6 rounded-full bg-pastel-pink flex items-center justify-center text-white text-xs">
                <Heart className="w-3.5 h-3.5 fill-white" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-charcoal-400 font-semibold leading-none">Healthy Mindset</p>
                <p className="text-xs font-bold text-charcoal-800 leading-tight">Strength & Grace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
