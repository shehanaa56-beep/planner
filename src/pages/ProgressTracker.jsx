import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  CheckCircle2,
  Calendar,
  Sparkles,
  Heart,
  Droplets,
  Dumbbell,
  Plus,
  Scale,
  Trash2
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

const STORAGE_WEEKLY_TICKS = 'fitlife_progress_weekly_ticks';

export const ProgressTracker = () => {
  const { profile, weightHistory, addMeasurementLog } = useFitness();

  // Weekly Ticking Tracker (Mon - Sun) starting fresh (all false)
  const [weeklyTicks, setWeeklyTicks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_WEEKLY_TICKS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_WEEKLY_TICKS, JSON.stringify(weeklyTicks));
    } catch (e) {
      console.error(e);
    }
  }, [weeklyTicks]);

  const toggleDayTick = (day) => {
    setWeeklyTicks(prev => ({ ...prev, [day]: !prev[day] }));
  };

  const completedCount = Object.values(weeklyTicks).filter(Boolean).length;

  // New weigh-in input state
  const [showLogModal, setShowLogModal] = useState(false);
  const [newWeekLabel, setNewWeekLabel] = useState(`W${(weightHistory?.length || 0) + 1}`);
  const [newWeightValue, setNewWeightValue] = useState(profile.currentWeight || 56.4);

  const handleAddWeight = (e) => {
    e.preventDefault();
    if (!newWeightValue) return;
    addMeasurementLog({
      week: newWeekLabel.trim() || `W${(weightHistory?.length || 0) + 1}`,
      weight: Number(newWeightValue),
      date: new Date().toISOString().split('T')[0]
    });
    setShowLogModal(false);
  };

  // Build chartData from actual logged weight history
  const chartData = (weightHistory && weightHistory.length > 0)
    ? weightHistory.map(entry => ({
        week: entry.week || 'W1',
        weight: Number(entry.weight)
      }))
    : [{ week: 'W1', weight: profile.currentWeight || 56.4 }];

  const currentWt = profile.currentWeight || (chartData[chartData.length - 1]?.weight) || 56.4;
  const goalWt = profile.goalWeight || 52;
  const toGo = (currentWt - goalWt).toFixed(1);

  return (
    <div className="space-y-4 animate-in fade-in duration-200 text-[#2D2335]">
      {/* 1. Header (Simple & Clean) */}
      <div className="bg-gradient-to-r from-[#FFEBF3] via-[#F6F0FF] to-[#E8F8EE] rounded-2xl p-4 border border-pink-100 flex items-center justify-between shadow-2xs">
        <div>
          <h1 className="font-extrabold text-lg sm:text-xl text-[#2D2335] leading-tight">
            Weekly Progress
          </h1>
          <p className="text-xs text-[#7A6B80] mt-0.5 font-medium">
            Week 1 • Tap to tick your days as you go
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

      {/* 3. Weight Progress Section */}
      <div className="bg-white rounded-2xl p-4 border border-pink-100 shadow-2xs">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D2335] block">
              Weight Progress
            </span>
            <span className="text-[11px] text-[#7A6B80]">
              Goal: {goalWt} kg ({toGo > 0 ? `${toGo} kg to reach target` : 'Goal reached!'})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#FF4D8D] bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200">
              Current: {currentWt} kg
            </span>
            <button
              onClick={() => {
                setNewWeekLabel(`W${chartData.length + 1}`);
                setNewWeightValue(currentWt);
                setShowLogModal(true);
              }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-charcoal-900 text-white text-[11px] font-bold hover:bg-black transition-all"
              title="Log new weigh-in"
            >
              <Plus className="w-3 h-3 text-pink-300" />
              <span>Log</span>
            </button>
          </div>
        </div>

        {/* If user just started (1 check-in) */}
        {chartData.length === 1 ? (
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#FFF5F8] to-[#F8F2FF] border border-pink-100 text-center space-y-2 my-1">
            <div className="w-10 h-10 rounded-full bg-white shadow-2xs border border-pink-200 flex items-center justify-center mx-auto text-[#FF4D8D]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-[#2D2335]">
                Week 1 Baseline: {currentWt} kg
              </p>
              <p className="text-[11px] text-[#7A6B80] mt-0.5 leading-relaxed">
                You just started your journey! Weigh in each week and tap <strong>Log</strong> to build your real progress curve.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 pt-1 text-[11px] font-semibold text-[#554766]">
              <span className="px-2.5 py-0.5 rounded-lg bg-white border border-pink-100">
                Start: {currentWt} kg
              </span>
              <span>→</span>
              <span className="px-2.5 py-0.5 rounded-lg bg-white border border-emerald-200 text-emerald-700">
                Target: {goalWt} kg
              </span>
            </div>
          </div>
        ) : (
          /* Multi-point actual curve */
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
                <YAxis domain={['auto', 'auto']} unit="kg" axisLine={false} tickLine={false} tick={{ fill: '#9E94A8', fontSize: 11 }} width={38} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white/95 px-2.5 py-1.5 rounded-xl border border-pink-100 shadow-md text-xs font-bold text-[#FF4D8D]">
                          {payload[0].payload.week}: {payload[0].value} kg
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area type="monotone" dataKey="weight" stroke="#FF4D8D" strokeWidth={2.4} fill="url(#progPink)" dot={{ r: 4, fill: '#FF4D8D', stroke: '#FFF' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Log Weight Modal */}
      {showLogModal && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowLogModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-xs w-full p-5 border border-pink-100 shadow-2xl animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-extrabold text-base text-[#2D2335] mb-1">
              Log Weigh-in
            </h3>
            <p className="text-xs text-[#7A6B80] mb-4">
              Record this week's scale reading.
            </p>

            <form onSubmit={handleAddWeight} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-[#554766] mb-1">Week Label</label>
                <input
                  type="text"
                  value={newWeekLabel}
                  onChange={(e) => setNewWeekLabel(e.target.value)}
                  placeholder="e.g. W2"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs font-bold text-[#2D2335] focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#554766] mb-1">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  value={newWeightValue}
                  onChange={(e) => setNewWeightValue(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold text-[#FF4D8D] focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                  required
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLogModal(false)}
                  className="flex-1 py-2 rounded-xl bg-gray-100 text-charcoal-700 font-bold text-xs hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-[#FF4D8D] text-white font-bold text-xs hover:bg-[#e03d79] transition-all shadow-xs"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
