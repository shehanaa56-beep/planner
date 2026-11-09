import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Circle,
  Calendar,
  Heart,
  Droplets,
  Flame,
  Sun,
  Moon,
  Clock,
  Trash2
} from 'lucide-react';
import { useFitness } from '../context/FitnessContext';

export const WellnessTracker = () => {
  const { wellnessLogs, toggleFaceMassage, isFaceMassageDone } = useFitness();

  const todayStr = new Date().toISOString().split('T')[0];
  const isDoneToday = isFaceMassageDone(todayStr);

  const steps = [
    {
      step: 1,
      title: "Forehead Smooth",
      direction: "Stroke upwards ↑",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      desc: "Use your fingertips or knuckles to gently sweep upward from eyebrows to hairline. Eases tension and forehead lines."
    },
    {
      step: 2,
      title: "Cheek Sculpt",
      direction: "Circular motion ↻",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      desc: "Apply gentle upward circular strokes across cheekbones toward ears to stimulate blood flow and natural glow."
    },
    {
      step: 3,
      title: "Jawline Contour",
      direction: "Upward sweep ↗",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      desc: "Glide your index and middle knuckles along the jawline from chin to ears for crisp definition and lymphatic drainage."
    },
    {
      step: 4,
      title: "Neck Drainage",
      direction: "Gentle upward ↑",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
      desc: "Stroke smoothly upward from collarbone to chin to release neck strain and promote lymphatic toxin drainage."
    }
  ];

  return (
    <div className="space-y-4 animate-in fade-in duration-200 text-[#2D2335]">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#FFF4E8] via-[#FFFBF0] to-[#F3EEFF] rounded-2xl p-4 border border-amber-100 flex items-center justify-between shadow-2xs">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Daily Self-Care &amp; Skin Ritual</span>
          </div>
          <h1 className="font-extrabold text-lg sm:text-xl text-[#2D2335] mt-0.5 leading-tight">
            Face Massage &amp; Wellness
          </h1>
          <p className="text-xs text-[#7A6B80] font-medium">
            5-min daily lymphatic routine &amp; completion log
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-amber-200 text-amber-700 font-bold text-xs shadow-2xs">
          <Clock className="w-3.5 h-3.5" />
          <span>5 Mins Daily</span>
        </div>
      </div>

      {/* 2. Today's Check-off Card */}
      <div className={`p-4 rounded-2xl border transition-all ${
        isDoneToday
          ? 'bg-emerald-50/70 border-emerald-200 shadow-2xs'
          : 'bg-white border-pink-100 shadow-2xs'
      }`}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleFaceMassage(todayStr)}
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                isDoneToday
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'bg-pink-50 border-2 border-pink-200 text-pink-400 hover:border-[#FF4D8D]'
              }`}
            >
              <CheckCircle2 className="w-5 h-5" />
            </button>
            <div>
              <h3 className="font-bold text-sm text-[#2D2335]">
                {isDoneToday ? "Today's Massage Completed! ✨" : "Mark Today's Face Massage"}
              </h3>
              <p className="text-[11px] text-[#7A6B80] mt-0.5">
                {isDoneToday
                  ? "Great job prioritizing self-care & glowing skin today."
                  : "Take 5 mins with kumkumadi or light face oil."}
              </p>
            </div>
          </div>

          <button
            onClick={() => toggleFaceMassage(todayStr)}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all shrink-0 ${
              isDoneToday
                ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                : 'bg-gradient-to-r from-[#FF4D8D] to-[#F43F5E] text-white shadow-xs hover:shadow-md'
            }`}
          >
            {isDoneToday ? '✓ Done' : 'Tick Done'}
          </button>
        </div>
      </div>

      {/* 3. Four Illustrated Routine Steps */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D2335]">
            4 Simple Steps (5 Minutes)
          </span>
          <span className="text-[11px] text-[#7A6B80]">
            Use clean hands &amp; light oil
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {steps.map((st) => (
            <div
              key={st.step}
              className="p-3 rounded-2xl bg-white border border-gray-100 shadow-2xs flex items-center gap-3 hover:border-pink-200 transition-all"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-2xs border border-gray-100 bg-gray-50">
                <img
                  src={st.image}
                  alt={st.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-pink-100 text-[#FF4D8D] text-[10px] font-bold flex items-center justify-center">
                    {st.step}
                  </span>
                  <h4 className="font-bold text-xs text-[#2D2335] truncate">{st.title}</h4>
                </div>
                <span className="text-[10px] font-bold text-[#FF4D8D] block mt-0.5">
                  {st.direction}
                </span>
                <p className="text-[10px] text-gray-500 leading-tight mt-1 line-clamp-2">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Logged History Records */}
      <div className="bg-white rounded-2xl p-4 border border-pink-100 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xs uppercase tracking-wider text-[#2D2335]">
            Completed Sessions History ({wellnessLogs.length})
          </h3>
          <span className="text-[11px] text-[#7A6B80]">
            {wellnessLogs.length > 0 ? `${wellnessLogs.length} days logged` : 'Start your streak!'}
          </span>
        </div>

        {wellnessLogs.length > 0 ? (
          <div className="space-y-2">
            {wellnessLogs.map((log) => (
              <div
                key={log.id}
                className="p-2.5 rounded-xl bg-purple-50/40 border border-purple-100 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white border border-purple-200 flex items-center justify-center text-purple-600 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#2D2335]">{log.date}</span>
                    <span className="text-[10px] text-gray-500 ml-2">5-min Face Massage Routine</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleFaceMassage(log.date)}
                  className="p-1 rounded-lg text-gray-300 hover:text-red-500 transition-colors"
                  title="Remove log"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-gray-400">
            <Sparkles className="w-6 h-6 mx-auto mb-1 text-amber-300 opacity-60" />
            <p className="text-xs font-semibold">No face massage logged yet</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Tap &quot;Tick Done&quot; above to log your first session!</p>
          </div>
        )}
      </div>
    </div>
  );
};
