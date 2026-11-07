import React, { useState } from 'react';
import {
  TrendingUp,
  CheckCircle2,
  Circle,
  Calendar,
  Sparkles,
  Heart,
  Droplets,
  Dumbbell
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import { useFitness } from '../context/FitnessContext';

export const ProgressTracker = () => {
  const { profile, getWeeklyWorkoutPercentage, getDailyMealPercentage } = useFitness();

  // Weekly Ticking Tracker (Mon - Sun) matching infographic
  const [weeklyTicks, setWeeklyTicks] = useState({
    Mon: true,
    Tue: true,
    Wed: true,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const toggleDayTick = (day) => {
    setWeeklyTicks(prev => ({ ...prev, [day]: !prev[day] }));
  };

  const completedCount = Object.values(weeklyTicks).filter(Boolean).length;

  const chartData = [
    { week: 'W1', weight: 54.8 },
    { week: 'W2', weight: 56.2 },
    { week: 'W3', weight: 56.6 },
    { week: 'W4', weight: 56.4 },
  ];

  return (
    <div className="space-y-4 animate-in fade-in duration-200 text-[#2D2335]">
      {/* 1. Header (Simple & Clean) */}
      <div className="bg-gradient-to-r from-[#FFEBF3] via-[#F6F0FF] to-[#E8F8EE] rounded-2xl p-4 border border-pink-100 flex items-center justify-between shadow-2xs">
        <div>
          <h1 className="font-extrabold text-lg sm:text-xl text-[#2D2335] leading-tight">
            Weekly Tracker
          </h1>
          <p className="text-xs text-[#7A6B80] mt-0.5 font-medium">
            Just tap to tick your days
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-pink-200 text-[#FF4D8D] font-bold text-xs shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{completedCount} / 7 Days</span>
        </div>
      </div>

      {/* 2. Weekly Ticking Table (Mon - Sun) */}
      <div className="bg-white rounded-2xl p-4 border border-pink-100 shadow-2xs">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7A6B80]">Day</span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#7A6B80]">Completed</span>
        </div>

        <div className="space-y-1.5">
          {Object.entries(weeklyTicks).map(([day, done]) => (
            <div
              key={day}
              onClick={() => toggleDayTick(day)}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                done
                  ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                  : 'bg-white border-gray-100 hover:border-pink-200 text-charcoal-700'
              }`}
            >
              <span className="font-bold text-sm">{day}</span>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  done
                    ? 'bg-emerald-500 text-white shadow-xs'
                    : 'border-2 border-gray-300'
                }`}
              >
                {done ? <CheckCircle2 className="w-4 h-4" /> : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Simply Pictured Progress Chart */}
      <div className="bg-white rounded-2xl p-4 border border-pink-100 shadow-2xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D2335]">
            Weight Progress
          </span>
          <span className="text-xs font-bold text-[#FF4D8D]">
            Current: {profile.currentWeight} kg
          </span>
        </div>

        <div className="h-40 w-full -ml-3 pt-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 15, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="progPink" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF4D8D" stopOpacity={0.25} />
                  <stop offset="90%" stopColor="#FF4D8D" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5EEF8" />
              <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#7D7087', fontSize: 11 }} />
              <YAxis domain={[52, 58]} ticks={[52, 54, 56, 58]} unit="kg" axisLine={false} tickLine={false} tick={{ fill: '#9E94A8', fontSize: 11 }} width={38} />
              <Tooltip />
              <Area type="monotone" dataKey="weight" stroke="#FF4D8D" strokeWidth={2.4} fill="url(#progPink)" dot={{ r: 4, fill: '#FF4D8D', stroke: '#FFF' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 4. Key Goals & Reminders (Simple Bullet Checklist) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Key Goals */}
        <div className="bg-[#EBFBF3] rounded-2xl p-3.5 border border-[#C6F3DE]">
          <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-800 mb-2">
            Your Key Goals
          </h3>
          <ul className="space-y-1.5 text-xs text-emerald-950">
            <li className="flex items-center gap-2">✓ Reduce belly fat & overall fat</li>
            <li className="flex items-center gap-2">✓ Maintain healthy periods</li>
            <li className="flex items-center gap-2">✓ Eat nutritious & affordable food</li>
            <li className="flex items-center gap-2">✓ Feel strong & energetic</li>
          </ul>
        </div>

        {/* Reminders */}
        <div className="bg-[#FFF0F5] rounded-2xl p-3.5 border border-[#FFD6E5]">
          <h3 className="font-bold text-xs uppercase tracking-wider text-[#FF4D8D] mb-2">
            Important Reminders
          </h3>
          <ul className="space-y-1.5 text-xs text-[#522938]">
            <li className="flex items-center gap-2">♥ Eat enough food (no extreme diet)</li>
            <li className="flex items-center gap-2">♥ Get 7–9 hrs sleep</li>
            <li className="flex items-center gap-2">♥ Drink 2–2.5 L water daily</li>
            <li className="flex items-center gap-2">♥ Be consistent, not perfect!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
