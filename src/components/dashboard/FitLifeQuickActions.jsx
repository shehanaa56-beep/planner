import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dumbbell,
  Apple,
  TrendingUp,
  Droplet,
  CheckCircle2,
  Settings,
  X,
  Plus,
  Minus,
  Sparkles,
  Heart,
  Droplets
} from 'lucide-react';
import { useFitness } from '../../context/FitnessContext';

export const FitLifeQuickActions = () => {
  const navigate = useNavigate();
  const {
    waterIntakeMl,
    addWater,
    profile,
    dailyHabits,
    toggleHabit,
    toggleFaceMassage,
    isFaceMassageDone
  } = useFitness();

  const todayStr = new Date().toISOString().split('T')[0];
  const isMassageDoneToday = isFaceMassageDone ? isFaceMassageDone(todayStr) : false;

  // Modals for quick overlay interactions
  const [activeModal, setActiveModal] = useState(null); // 'water' | 'habits' | 'wellness' | null

  const items = [
    {
      id: 'library',
      label: 'Exercise Library',
      bg: 'bg-[#FFEBF2]',
      border: 'border-[#FFD6E5]',
      iconColor: 'text-[#9333EA]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#9333EA]">
          <path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12" />
        </svg>
      ),
      action: () => navigate('/library'),
    },
    {
      id: 'diet',
      label: 'Diet Planner',
      bg: 'bg-[#F1ECFF]',
      border: 'border-[#E0D4FF]',
      iconColor: 'text-[#8B5CF6]',
      icon: <Apple className="w-5 h-5 text-[#8B5CF6] stroke-[2.3]" />,
      action: () => navigate('/diet'),
    },
    {
      id: 'progress',
      label: 'Progress Tracker',
      bg: 'bg-[#E6F8F0]',
      border: 'border-[#C6F0DC]',
      iconColor: 'text-[#10B981]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#10B981]">
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-4-4-3 3" />
          <path d="M14 9h4v4" />
        </svg>
      ),
      action: () => navigate('/progress'),
    },
    {
      id: 'period',
      label: 'Period Tracker',
      bg: 'bg-[#FFF2DC]',
      border: 'border-[#FFE2B8]',
      iconColor: 'text-[#F59E0B]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#F59E0B]">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
      action: () => navigate('/period'),
    },
    {
      id: 'water',
      label: 'Water Tracker',
      bg: 'bg-[#E5F4FF]',
      border: 'border-[#CCE9FF]',
      iconColor: 'text-[#0284C7]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0284C7]">
          {/* Glass cup with water level */}
          <path d="M6 3h12l-2 17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2L6 3Z" />
          <path d="M8 12c2-1 4 1 6 0" />
        </svg>
      ),
      action: () => setActiveModal('water'),
    },
    {
      id: 'habits',
      label: 'Daily Habits',
      bg: 'bg-[#E8F8EE]',
      border: 'border-[#CFF2DC]',
      iconColor: 'text-[#16A34A]',
      icon: (
        <div className="w-5 h-5 rounded-full bg-[#16A34A] flex items-center justify-center text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      ),
      action: () => setActiveModal('habits'),
    },
    {
      id: 'wellness',
      label: 'Wellness Tips',
      bg: 'bg-[#F5EDFC]',
      border: 'border-[#EBD7FA]',
      iconColor: 'text-[#D946EF]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#D946EF]">
          {/* Lotus flower */}
          <path d="M12 4c-1.5 3-3.5 6-3.5 9 0 3 2.5 5 3.5 5s3.5-2 3.5-5c0-3-2-6-3.5-9Z" fill="#F5D0FE" opacity="0.6" />
          <path d="M12 4c-1.5 3-3.5 6-3.5 9 0 3 2.5 5 3.5 5s3.5-2 3.5-5c0-3-2-6-3.5-9Z" />
          <path d="M8.5 13C6 11 3 13 3 16c0 2.5 3.5 3 5.5 2" />
          <path d="M15.5 13c2.5-2 5.5 0 5.5 3 0 2.5-3.5 3-5.5 2" />
        </svg>
      ),
      action: () => setActiveModal('wellness'),
    },
    {
      id: 'settings',
      label: 'Settings',
      bg: 'bg-[#E8F2FF]',
      border: 'border-[#D0E2FF]',
      iconColor: 'text-[#0284C7]',
      icon: <Settings className="w-5 h-5 text-[#0284C7] stroke-[2.3]" />,
      action: () => navigate('/settings'),
    },
  ];

  return (
    <>
      {/* 8 Pastel Quick Action Cards Grid (4 columns x 2 rows) */}
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={item.action}
            className={`${item.bg} border ${item.border} rounded-2xl py-3 px-1.5 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-xs hover:-translate-y-0.5 active:scale-95 transition-all group`}
          >
            <div className="mb-1.5 transition-transform group-hover:scale-110">
              {item.icon}
            </div>
            <span className="text-[10.5px] sm:text-[11px] font-bold text-[#2D2335] leading-tight line-clamp-2 max-w-full">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Water Tracker Modal */}
      {activeModal === 'water' && (
        <div
          className="fixed inset-0 z-50 bg-black/35 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-3xl p-5 max-w-sm w-full border border-sky-100 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Droplets className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base text-[#2D2335]">Water Tracker</h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-center py-2">
              <div className="text-3xl font-extrabold text-sky-600">
                {waterIntakeMl} <span className="text-base text-gray-500 font-medium">/ {profile.targetWaterMl} ml</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {Math.round((waterIntakeMl / profile.targetWaterMl) * 100)}% of your daily hydration goal reached!
              </p>

              {/* Quick Add Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-5">
                <button
                  onClick={() => addWater(250)}
                  className="py-2.5 px-3 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 font-bold text-xs hover:bg-sky-100 active:scale-95 transition-all flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+250 ml (Glass)</span>
                </button>
                <button
                  onClick={() => addWater(500)}
                  className="py-2.5 px-3 rounded-2xl bg-sky-500 text-white font-bold text-xs hover:bg-sky-600 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+500 ml (Bottle)</span>
                </button>
              </div>

              <button
                onClick={() => addWater(-250)}
                className="mt-3 text-[11px] text-gray-400 hover:text-gray-600 flex items-center justify-center gap-1 mx-auto"
              >
                <Minus className="w-3 h-3" />
                <span>Undo -250ml</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Daily Habits Modal */}
      {activeModal === 'habits' && (
        <div
          className="fixed inset-0 z-50 bg-black/35 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-3xl p-5 max-w-md w-full border border-emerald-100 shadow-xl max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base text-[#2D2335]">Daily Habits Checklist</h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 overflow-y-auto pr-1 flex-1">
              {dailyHabits.map((habit) => (
                <div
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    habit.completed
                      ? 'bg-emerald-50/50 border-emerald-200 text-charcoal-700'
                      : 'bg-white border-gray-100 hover:border-emerald-200 text-charcoal-800'
                  }`}
                >
                  <span className={`text-xs font-semibold ${habit.completed ? 'line-through text-gray-400' : ''}`}>
                    {habit.title}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      habit.completed
                        ? 'bg-emerald-500 text-white'
                        : 'border-2 border-gray-300'
                    }`}
                  >
                    {habit.completed && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Wellness Tips & Face Massage Modal */}
      {activeModal === 'wellness' && (
        <div
          className="fixed inset-0 z-50 bg-black/35 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-3xl p-5 max-w-sm w-full border border-purple-100 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-base text-[#2D2335]">Face Massage (Daily – 5 min)</h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 4 Simply Pictured Steps */}
            <div className="grid grid-cols-2 gap-2.5 py-1">
              <div className="p-2.5 rounded-2xl bg-pink-50/60 border border-pink-100 text-center">
                <div className="w-12 h-12 rounded-xl overflow-hidden mx-auto mb-1.5 shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                    alt="Forehead"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-bold text-[#2D2335]">Forehead</h4>
                <p className="text-[10px] text-pink-600 font-semibold">(stroke up ↑)</p>
              </div>

              <div className="p-2.5 rounded-2xl bg-purple-50/60 border border-purple-100 text-center">
                <div className="w-12 h-12 rounded-xl overflow-hidden mx-auto mb-1.5 shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                    alt="Cheeks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-bold text-[#2D2335]">Cheeks</h4>
                <p className="text-[10px] text-purple-600 font-semibold">(circular ↻)</p>
              </div>

              <div className="p-2.5 rounded-2xl bg-amber-50/60 border border-amber-100 text-center">
                <div className="w-12 h-12 rounded-xl overflow-hidden mx-auto mb-1.5 shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
                    alt="Jawline"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-bold text-[#2D2335]">Jawline</h4>
                <p className="text-[10px] text-amber-600 font-semibold">(upward ↗)</p>
              </div>

              <div className="p-2.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-center">
                <div className="w-12 h-12 rounded-xl overflow-hidden mx-auto mb-1.5 shadow-2xs">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
                    alt="Neck"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xs font-bold text-[#2D2335]">Neck</h4>
                <p className="text-[10px] text-emerald-600 font-semibold">(upward ↑)</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <button
                onClick={() => {
                  if (toggleFaceMassage) toggleFaceMassage(todayStr);
                  setActiveModal(null);
                }}
                className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs ${
                  isMassageDoneToday
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-gradient-to-r from-[#FF4D8D] to-[#F43F5E] text-white hover:shadow-md active:scale-95'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isMassageDoneToday ? 'Marked Completed Today! ✓' : 'Tick Complete (5 min)'}</span>
              </button>

              <button
                onClick={() => {
                  setActiveModal(null);
                  navigate('/wellness');
                }}
                className="w-full py-2 rounded-xl bg-purple-50 text-purple-700 font-bold text-xs hover:bg-purple-100 transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open Full Routine & History</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
