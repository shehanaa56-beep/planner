import React from 'react';
import {
  Dumbbell,
  Activity,
  Sparkles,
  Apple,
  HeartPulse,
  CalendarCheck,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { HEALTH_GOALS_LIST } from '../../data/defaultState';

const iconMap = {
  Dumbbell,
  Activity,
  Sparkles,
  Apple,
  HeartPulse,
  CalendarCheck,
};

export const HealthGoalsCard = () => {
  return (
    <div className="glass-card rounded-3xl p-5 sm:p-6 border border-white shadow-soft">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-pastel-pink-subtle flex items-center justify-center text-pastel-pink-deep">
            <Heart className="w-5 h-5 fill-pastel-pink" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-charcoal-900">Your Wellness Philosophy</h3>
            <p className="text-xs text-charcoal-500">Nourishment over deprivation • Long-term vitality</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Non-Restrictive Care</span>
        </div>
      </div>

      {/* Gentle Non-Restrictive Banner */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pastel-pink-light/60 via-pastel-lavender-light/60 to-pastel-blue-light/60 border border-white/80 mb-5">
        <p className="text-xs text-charcoal-700 leading-relaxed font-medium">
          🌱 <strong className="text-charcoal-900 font-semibold">Healthy Harmony:</strong> We do not encourage rapid weight loss, extreme calorie deficits, or cutting out nourishing staples like rice. Our goal is steady strength, radiant energy, menstrual vitality, and joyful sustainable habits.
        </p>
      </div>

      {/* Health-focused Goals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {HEALTH_GOALS_LIST.map((goal) => {
          const Icon = iconMap[goal.icon] || Sparkles;

          return (
            <div
              key={goal.id}
              className="p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-gray-100 hover:border-pastel-pink/30 transition-all duration-200 shadow-2xs group"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-pastel-pink-light/80 flex items-center justify-center text-pastel-pink-deep shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-800">{goal.title}</h4>
                  <p className="text-xs text-charcoal-500 mt-0.5 leading-relaxed">{goal.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
