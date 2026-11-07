import React from 'react';
import {
  CheckCircle2,
  Circle,
  Droplets,
  Coffee,
  Utensils,
  Dumbbell,
  Egg,
  Moon,
  Sparkles,
  Flame
} from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';

const habitIcons = {
  Droplets,
  Coffee,
  Utensils,
  Dumbbell,
  Egg,
  Moon,
  Sparkles,
};

export const DailyHabitsCard = () => {
  const { dailyHabits, toggleHabit, getHabitsPercentage } = useFitness();
  const completionPct = getHabitsPercentage();

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-6 border border-white shadow-soft">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-pastel-lavender-subtle flex items-center justify-center text-pastel-lavender-deep">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-charcoal-900">Daily Wellness Habits</h3>
            <p className="text-xs text-charcoal-500">Gentle micro-habits for mind & body consistency</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-charcoal-800">{completionPct}%</span>
          <span className="text-xs text-charcoal-400">completed</span>
        </div>
      </div>

      {/* Habits Progress Bar */}
      <div className="w-full bg-pastel-lavender-light rounded-full h-2 overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-pastel-pink to-pastel-lavender rounded-full transition-all duration-500"
          style={{ width: `${completionPct}%` }}
        />
      </div>

      {/* Habit items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {dailyHabits.map((habit) => {
          const Icon = habitIcons[habit.icon] || Sparkles;
          const isDone = habit.completed;

          return (
            <div
              key={habit.id}
              onClick={() => toggleHabit(habit.id)}
              className={`cursor-pointer flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 group ${
                isDone
                  ? 'bg-pastel-pink-light/40 border-pastel-pink/50 text-charcoal-700'
                  : 'bg-white/80 hover:bg-white border-gray-100 hover:border-pastel-lavender/40 text-charcoal-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="transition-transform group-hover:scale-110"
                >
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-pastel-pink-deep fill-pastel-pink-subtle" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300 group-hover:text-pastel-lavender-deep" />
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isDone ? 'text-pastel-pink-deep' : 'text-charcoal-400'}`} />
                  <span className={`text-xs sm:text-sm font-medium ${isDone ? 'line-through text-charcoal-400' : 'text-charcoal-800'}`}>
                    {habit.title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
