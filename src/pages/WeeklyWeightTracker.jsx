import React, { useState } from 'react';
import {
  Scale,
  Calendar,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Plus,
  Pencil,
  CheckCircle2,
  Save,
  X
} from 'lucide-react';
import { useFitness } from '../context/FitnessContext';

export const WeeklyWeightTracker = () => {
  const { profile, weightHistory, updateWeekWeight } = useFitness();

  const [editingWeek, setEditingWeek] = useState(null);
  const [formData, setFormData] = useState({
    weight: '',
    waist: '',
    notes: '',
    date: new Date().toISOString().split('T')[0]
  });

  const totalWeeks = profile.planDurationWeeks || 12;
  const currentWeek = profile.currentWeek || 1;
  const currentWeight = profile.currentWeight || 56.4;
  const goalWeight = profile.goalWeight || 52;

  // Open modal/form for a week
  const handleOpenEdit = (weekNum, existingEntry) => {
    setEditingWeek(weekNum);
    setFormData({
      weight: existingEntry?.weight || (weekNum === 1 ? currentWeight : ''),
      waist: existingEntry?.waist || '',
      notes: existingEntry?.notes || '',
      date: existingEntry?.date || new Date().toISOString().split('T')[0]
    });
  };

  const handleSaveWeek = (e) => {
    e.preventDefault();
    if (!formData.weight) return;

    updateWeekWeight(editingWeek, {
      weight: Number(formData.weight),
      waist: formData.waist ? Number(formData.waist) : undefined,
      notes: formData.notes.trim(),
      date: formData.date
    });

    setEditingWeek(null);
  };

  // Find logged entries
  const getEntryForWeek = (w) => {
    const weekLabel = `W${w}`;
    return (weightHistory || []).find(
      item => item.week === weekLabel || item.week === `${weekLabel} (Start)`
    );
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-200 text-[#2D2335]">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#F0F5FF] via-[#F6F0FF] to-[#FFEBF3] rounded-2xl p-4 border border-indigo-100 flex items-center justify-between shadow-2xs">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700">
            <Scale className="w-3.5 h-3.5" />
            <span>12-Week Measuring & Weight Noting</span>
          </div>
          <h1 className="font-extrabold text-lg sm:text-xl text-[#2D2335] mt-0.5 leading-tight">
            Weekly Weigh-in Log
          </h1>
          <p className="text-xs text-[#7A6B80] font-medium">
            Record week-by-week weight &amp; notes
          </p>
        </div>

        <div className="text-right">
          <span className="text-[10px] uppercase font-bold text-gray-500 block">Goal</span>
          <span className="text-base font-extrabold text-emerald-600">{goalWeight} kg</span>
        </div>
      </div>

      {/* Summary Stat Pills */}
      <div className="grid grid-cols-3 gap-2">
        <div className="p-3 rounded-2xl bg-white border border-gray-100 text-center shadow-2xs">
          <span className="text-[10px] text-gray-400 font-bold uppercase block">Current</span>
          <span className="text-base font-extrabold text-[#2D2335]">{currentWeight} kg</span>
        </div>
        <div className="p-3 rounded-2xl bg-white border border-gray-100 text-center shadow-2xs">
          <span className="text-[10px] text-gray-400 font-bold uppercase block">Target</span>
          <span className="text-base font-extrabold text-emerald-600">{goalWeight} kg</span>
        </div>
        <div className="p-3 rounded-2xl bg-white border border-gray-100 text-center shadow-2xs">
          <span className="text-[10px] text-gray-400 font-bold uppercase block">To Go</span>
          <span className="text-base font-extrabold text-[#FF4D8D]">
            {(currentWeight - goalWeight).toFixed(1)} kg
          </span>
        </div>
      </div>

      {/* 12 Weeks Grid List */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D2335]">
            12-Week Journey Log
          </span>
          <span className="text-[11px] text-[#7A6B80]">
            Tap any week to record / update
          </span>
        </div>

        {Array.from({ length: totalWeeks }, (_, i) => i + 1).map((w) => {
          const entry = getEntryForWeek(w);
          const prevEntry = w > 1 ? getEntryForWeek(w - 1) : null;
          const isCurrent = w === currentWeek;
          const isLogged = !!entry;

          let delta = null;
          if (entry && prevEntry && entry.weight && prevEntry.weight) {
            delta = (entry.weight - prevEntry.weight).toFixed(1);
          }

          return (
            <div
              key={w}
              onClick={() => handleOpenEdit(w, entry)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 shadow-2xs hover:border-pink-200 group ${
                isCurrent
                  ? 'bg-gradient-to-r from-pink-50/60 to-purple-50/40 border-pink-200 ring-1 ring-pink-200'
                  : isLogged
                  ? 'bg-white border-gray-100'
                  : 'bg-white/60 border-dashed border-gray-200 hover:bg-white'
              }`}
            >
              {/* Left: Week Badge & Date */}
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    isLogged
                      ? 'bg-pink-100 text-[#FF4D8D]'
                      : isCurrent
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  W{w}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-[#2D2335]">Week {w}</h3>
                    {isCurrent && (
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-pink-100 text-[#FF4D8D]">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                    {entry?.date ? entry.date : isLogged ? 'Logged' : 'Tap to log weigh-in'}
                  </p>
                  {entry?.notes && (
                    <p className="text-[11px] text-gray-500 italic mt-0.5 truncate max-w-xs">
                      &quot;{entry.notes}&quot;
                    </p>
                  )}
                </div>
              </div>

              {/* Right: Weight Value, Delta & Edit Button */}
              <div className="flex items-center gap-2.5 shrink-0">
                {isLogged ? (
                  <div className="text-right">
                    <span className="font-extrabold text-sm text-[#2D2335] block">
                      {entry.weight} kg
                    </span>
                    {delta !== null && (
                      <span
                        className={`text-[10px] font-bold flex items-center justify-end gap-0.5 ${
                          Number(delta) <= 0 ? 'text-emerald-600' : 'text-amber-600'
                        }`}
                      >
                        {Number(delta) <= 0 ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
                        {Number(delta) > 0 ? `+${delta}` : delta} kg
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-xs font-semibold text-gray-300 group-hover:text-[#FF4D8D]">
                    + Add
                  </span>
                )}

                <div className="w-7 h-7 rounded-xl bg-gray-50 group-hover:bg-pink-50 flex items-center justify-center text-gray-400 group-hover:text-[#FF4D8D] transition-colors">
                  <Pencil className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Edit / Add Modal */}
      {editingWeek !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setEditingWeek(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-sm w-full p-5 border border-pink-100 shadow-2xl animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-pink-100 text-[#FF4D8D] flex items-center justify-center font-bold text-xs">
                  W{editingWeek}
                </div>
                <h3 className="font-extrabold text-base text-[#2D2335]">
                  Log Week {editingWeek} Weigh-in
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingWeek(null)}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveWeek} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-[#554766] mb-1">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-[#2D2335] focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-[#554766] mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    placeholder="e.g. 56.0"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold text-[#FF4D8D] focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                    required
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#554766] mb-1">Waist (cm, optional)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.waist}
                    onChange={(e) => setFormData({ ...formData, waist: e.target.value })}
                    placeholder="e.g. 70"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-[#2D2335] focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#554766] mb-1">Notes &amp; Observations</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Clothes feel looser, energy high, slept well..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs text-[#2D2335] focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingWeek(null)}
                  className="flex-1 py-2.5 rounded-xl bg-gray-100 text-charcoal-700 font-bold text-xs hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#FF4D8D] to-[#F43F5E] text-white font-bold text-xs hover:shadow-md transition-all shadow-xs flex items-center justify-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Record</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
